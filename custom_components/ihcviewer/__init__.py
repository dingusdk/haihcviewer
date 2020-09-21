"""
IHC Viever component.

see http://www.dingus.dk for more information
"""
import logging
import asyncio
import base64
import os.path
from aiohttp import web

import homeassistant.core as ha
from homeassistant.components.ihc import IHC_CONTROLLER
from homeassistant.components.http import HomeAssistantView

from custom_components.ihcviewer.const import DOMAIN, NAME_SHORT, VERSION

REQUIREMENTS = ["ihcsdk==2.7.0"]
DEPENDENCIES = ["ihc"]

_LOGGER = logging.getLogger(__name__)

# We hold a global cached list of the mapping
ihcmapping = None


async def async_setup(hass, config):
    """Setup the IHC viewer component."""
    conf = config[DOMAIN]
    controller_id = 0
    ihc_controller = hass.data[f"ihc{controller_id}"][IHC_CONTROLLER]
    hass.http.register_view(IHCLogView(ihc_controller, hass))
    hass.http.register_view(IHCProjectView(ihc_controller, hass))
    hass.http.register_view(IHCGetValue(ihc_controller, hass))
    hass.http.register_view(IHCMapping(hass))
    hass.http.register_view(NpmView(hass))

    register_frontend(hass)
    add_side_panel(hass, conf)
    return True


def add_side_panel(hass, conf):
    """Add the IHCViewer sidepanel"""

    custom_panel_config = {
        "name": "ha-panel-ihcviewer",
        "embed_iframe": False,
        "trust_external": False,
        "module_url": f"/ihcviewer/frontend-{VERSION}/panel.js",
    }
    if conf is not None:
        # Make copy because we're mutating it
        conf = dict(conf)
    else:
        conf = {}
    conf["_panel_custom"] = custom_panel_config
    conf["version"] = VERSION
    hass.components.frontend.async_register_built_in_panel(
        component_name="custom",
        frontend_url_path="ihc_viewer",
        sidebar_title=NAME_SHORT,
        sidebar_icon="mdi:file-tree",
        config=conf,
        require_admin=True,
    )
    return


def register_frontend(hass):
    """Register frontend static files."""
    path = os.path.join(os.path.dirname(__file__), "frontend")
    dirlist = os.listdir(path)
    for filename in dirlist:
        ext = os.path.splitext(filename)[1].lower()
        if ext == ".png" or ext == ".html" or ext == ".js":
            hass.http.register_static_path(
                f"/ihcviewer/frontend-{VERSION}/{filename}",
                os.path.join(path, filename),
            )


class IHCLogView(HomeAssistantView):
    """Get ihc user log."""

    from ihcsdk.ihccontroller import IHCController
    from ihcsdk.ihcclient import IHCSoapClient

    url = "/api/ihcviewer/log"
    name = "api:ihcviewer:log"

    def __init__(self, ihc_controller, hass):
        """Initilalize the IHCLog view."""
        self.ihc_controller = ihc_controller
        self.hass = hass

    @ha.callback
    async def get(self, request):
        """Retrieve IHC log."""
        log = await self.hass.async_add_executor_job(self.get_user_log)
        return self.json(log)

    ihcns = {
        "SOAP-ENV": "http://schemas.xmlsoap.org/soap/envelope/",
        "ns1": "utcs",
        "ns2": "utcs.values",
        "ns3": "utcs.values",
    }

    def get_user_log(self, language="en"):
        """Get the controller state."""
        payload = """<getUserLog1 xmlns="utcs" />
                    <getUserLog2 xmlns="utcs">0</getUserLog2>
                    <getUserLog3 xmlns="utcs">{language}</getUserLog3>
                    """.format(
            language=language
        )
        xdoc = self.ihc_controller.client.connection.soap_action(
            "/ws/ConfigurationService", "getUserLog", payload
        )
        if xdoc is not None:
            base64data = xdoc.find(
                "./SOAP-ENV:Body/ns1:getUserLog4/ns1:data", IHCLogView.ihcns
            ).text
            if not base64data:
                return ""
            return base64.b64decode(base64data).decode("UTF-8")
        return ""


class IHCProjectView(HomeAssistantView):
    """Get ihc user project."""

    from ihcsdk.ihccontroller import IHCController
    from ihcsdk.ihcclient import IHCSoapClient

    url = "/api/ihcviewer/project"
    name = "api:ihcviewer:project"

    def __init__(self, ihc_controller, hass):
        """Initilalize the IHCProjectView."""
        self.ihc_controller = ihc_controller
        self.hass = hass

    @ha.callback
    async def get(self, request):
        """Retrieve IHC project."""
        project = await self.hass.async_add_executor_job(
            self.ihc_controller.get_project
        )
        return web.Response(
            body=project, content_type="text/xml", charset="utf-8", status=200
        )


class IHCGetValue(HomeAssistantView):
    """Get ihc user project."""

    from ihcsdk.ihccontroller import IHCController
    from ihcsdk.ihcclient import IHCSoapClient

    url = "/api/ihcviewer/getvalue"
    name = "api:ihcviewer:getvalue"

    def __init__(self, ihc_controller, hass):
        """Initilalize the IHCGetValue."""
        self.ihc_controller = ihc_controller
        self.hass = hass

    @ha.callback
    async def get(self, request):
        """Get runtime value from IHC controller."""
        data = request.query
        id = int(data.get("id"))
        value = await self.hass.async_add_executor_job(
            self.ihc_controller.client.get_runtime_value, id
        )
        entity_id = ""
        global ihcmapping
        if ihcmapping is not None and id in ihcmapping:
            entity_id = ihcmapping[id]
        json = {"value": value, "type": type(value).__name__, "entity": entity_id}
        return self.json(json)


class IHCMapping(HomeAssistantView):
    """Get mapping of ihc id's to entities."""

    url = "/api/ihcviewer/mapping"
    name = "api:ihcviewer:mapping"

    def __init__(self, hass):
        """Initilalize the IHCGetValue."""
        self.hass = hass

    @ha.callback
    async def get(self, request):
        """Get ihc mapping."""

        allstates = await self.hass.async_add_executor_job(self.hass.states.all)
        global ihcmapping
        ihcmapping = {}
        for state in allstates:
            if "ihc_id" in state.attributes:
                ihcmapping[state.attributes["ihc_id"]] = state.entity_id
        return self.json(ihcmapping)


class NpmView(HomeAssistantView):
    """npm modules"""

    requires_auth = False
    name = "ihcviewer_npm"
    url = r"/ihcviewer_npm/{requested_file:.+}"

    def __init__(self, hass):
        """Initilalize the IHCGetValue."""
        self.hass = hass

    @ha.callback
    async def get(self, request, requested_file):  # pylint: disable=unused-argument
        """Handle module Web requests."""
        response = await self.hass.async_add_executor_job(
            get_file_response, requested_file
        )
        return response


def get_file_response(requested_file):
    """Get file."""

    dir = os.path.dirname(__file__)
    servefile = f"{dir}/node_modules/{requested_file}"
    if os.path.exists(servefile):
        response = web.FileResponse(servefile)
        return response

    return web.Response(status=404)
