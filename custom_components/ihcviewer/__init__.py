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

REQUIREMENTS = ["ihcsdk==2.6.0"]
DEPENDENCIES = ["ihc"]

DOMAIN = "ihcviewer"

_LOGGER = logging.getLogger(__name__)


async def async_setup(hass, config):
    """Setup the IHC viewer component."""
    conf = config[DOMAIN]
    controller_id = 0
    ihc_controller = hass.data[f"ihc{controller_id}"][IHC_CONTROLLER]
    hass.http.register_view(IHCLogView(hass, ihc_controller))
    hass.http.register_view(IHCProjectView(hass, ihc_controller))
    hass.http.register_view(IHCGetValue(hass, ihc_controller))

    register_frontend(hass)

    name = "panel"
    filename = "panel.html"

    panelpath = os.path.join(os.path.dirname(__file__), filename)
    html_url = "/api/ihcviewer/{}".format(name)
    hass.http.register_static_path(html_url, panelpath)

    custom_panel_config = {
        "name": "ihcviewer",
        "embed_iframe": False,
        "trust_external": False,
        "html_url": html_url,
    }

    if conf is not None:
        # Make copy because we're mutating it
        conf = dict(conf)
    else:
        conf = {}

    conf["_panel_custom"] = custom_panel_config

    hass.components.frontend.async_register_built_in_panel(
        component_name="custom",
        frontend_url_path="ihc-viewer",
        sidebar_title="IHC Viewer",
        sidebar_icon="mdi:file-tree",
        config=conf,
        require_admin=True,
    )

    return True


def register_frontend(hass):
    """Register frontend static files."""
    path = os.path.join(os.path.dirname(__file__), "frontend")
    dirlist = os.listdir(path)
    for filename in dirlist:
        ext = os.path.splitext(filename)[1].lower()
        if ext == ".png" or ext == ".html" or ext == ".js":
            hass.http.register_static_path(
                url_path="/ihcviewer/{}".format(filename),
                path=os.path.join(path, filename),
            )


class IHCLogView(HomeAssistantView):
    """Get ihc user log."""

    from ihcsdk.ihccontroller import IHCController
    from ihcsdk.ihcclient import IHCSoapClient

    url = "/api/ihc/log"
    name = "api:ihc:log"

    def __init__(self, hass, ihc_controller):
        """Initilalize the IHCLog view."""
        self.hass = hass
        self.ihc_controller = ihc_controller

    @ha.callback
    async def get(self, request):
        """Retrieve IHC log."""
        log = await self.hass.async_add_executor_job(self.get_user_log, "en")
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
                return False
            return base64.b64decode(base64data).decode("UTF-8")
        return False


class IHCProjectView(HomeAssistantView):
    """Get ihc user project."""

    from ihcsdk.ihccontroller import IHCController
    from ihcsdk.ihcclient import IHCSoapClient

    url = "/api/ihc/project"
    name = "api:ihc:project"

    def __init__(self, hass, ihc_controller):
        """Initilalize the IHCProjectView."""
        self.hass = hass
        self.ihc_controller = ihc_controller

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

    url = "/api/ihc/getvalue"
    name = "api:ihc:getvalue"

    def __init__(self, hass, ihc_controller):
        """Initilalize the IHCGetValue."""
        self.hass = hass
        self.ihc_controller = ihc_controller

    @ha.callback
    async def get(self, request):
        """Get runtime value from IHC controller."""
        data = request.query
        id = int(data.get("id"))
        value = await self.hass.async_add_executor_job(
            self.ihc_controller.client.get_runtime_value, id
        )
        return self.json({"value": value, "type": type(value).__name__})
