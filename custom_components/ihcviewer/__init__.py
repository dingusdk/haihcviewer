"""
IHC Viever component.

see http://www.dingus.dk for more information
"""

import logging
import os.path
from xmlrpc.client import boolean

from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry
from homeassistant.components.http import StaticPathConfig
from homeassistant.components.frontend import async_register_built_in_panel

from .const import DOMAIN, NAME_SHORT, URL_PANEL, VERSION

from .api.getresource import ApiGetResource
from .api.log import ApiLog
from .api.manual_binarysensor import ApiManualBinarySensor
from .api.manual_light import ApiManualLight
from .api.manual_remove import ApiManualRemove
from .api.manual_sensor import ApiManualSensor
from .api.manual_switch import ApiManualSwitch
from .api.mapping import ApiMapping
from .api.project import ApiProject
from .api.setboolresource import ApiSetBoolResource
from .api.systeminfo import ApiSystemInfo


DEPENDENCIES = ["ihc"]

_LOGGER = logging.getLogger(__name__)

MANUAL_SETUP_YAML = "ihc_manual_setup.yaml"


async def async_setup(hass: HomeAssistant, config):
    """Setup the IHC viewer component."""

    if DOMAIN in config and config is not None:
        _LOGGER.error("Setup using configuration is not supported anymore")
        return False

    await async_register_frontend(hass)
    hass.http.register_view(ApiGetResource(hass))
    hass.http.register_view(ApiLog(hass))
    hass.http.register_view(ApiManualBinarySensor(hass))
    hass.http.register_view(ApiManualLight(hass))
    hass.http.register_view(ApiManualRemove(hass))
    hass.http.register_view(ApiManualSensor(hass))
    hass.http.register_view(ApiManualSwitch(hass))
    hass.http.register_view(ApiMapping(hass))
    hass.http.register_view(ApiProject(hass))
    hass.http.register_view(ApiSetBoolResource(hass))
    hass.http.register_view(ApiSystemInfo(hass))
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> boolean:
    """Set up the IHC Viewer from a config entry."""

    if "ihc" not in hass.data:
        if "ihc0" in hass.data:
            _LOGGER.error(
                "IHCViewer 2.x does not support the old IHC integration."
                "You must update your IHC integration"
            )
        else:
            _LOGGER.error("IHC integration is not loaded")
        return False
    hass.data.setdefault(DOMAIN, {})
    try:
        hass.data[DOMAIN] = [v["controller_id"] for v in hass.data["ihc"].values()]
    except KeyError:
        _LOGGER.error(
            "IHCViewer does not support the old IHC integration."
            "You must update your IHC integration"
        )
        return False

    add_side_panel(hass)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> boolean:
    """Unload a config entry."""
    hass.components.frontend.async_remove_panel(URL_PANEL)
    hass.data.pop(DOMAIN)
    return True


def add_side_panel(hass):
    """Add the IHCViewer sidepanel"""

    custom_panel_config = {
        "name": "ha-panel-ihcviewer",
        "embed_iframe": False,
        "trust_external": False,
        "module_url": f"/ihcviewer/frontend-{VERSION}/panel.js",
    }
    panelconf = {}
    panelconf["_panel_custom"] = custom_panel_config
    panelconf["version"] = VERSION
    panelconf[DOMAIN] = hass.data[DOMAIN]
    async_register_built_in_panel(
        hass,
        component_name="custom",
        frontend_url_path=URL_PANEL,
        sidebar_title=NAME_SHORT,
        sidebar_icon="mdi:file-tree",
        config=panelconf,
        require_admin=True,
    )


async def async_register_frontend(hass):
    """Register frontend static files."""
    path = os.path.join(os.path.dirname(__file__), "frontend")
    dirlist = await hass.async_add_executor_job(os.listdir, path)
    for filename in dirlist:
        ext = os.path.splitext(filename)[1].lower()
        if ext in (".png", ".html", ".js"):
            await hass.http.async_register_static_paths(
                [
                    StaticPathConfig(
                        f"/ihcviewer/frontend-{VERSION}/{filename}",
                        os.path.join(path, filename),
                        True,
                    )
                ]
            )
