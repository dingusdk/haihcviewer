import logging

from homeassistant.core import callback, HomeAssistant

from .apibase import ApiBase
from .mapper import IhcMapper
from .yamlhelper import get_controller_conf, read_manual_setup, write_manual_setup

_LOGGER = logging.getLogger(__name__)

IHC_PLATFORMS = ("binary_sensor", "light", "sensor", "switch")


class ApiManualRemove(ApiBase):
    """IHCViewer api log requests."""

    name = "api:ihcviewer:manual:remove"
    url = "/api/ihcviewer/manual/remove/{controllerid}/{id}"

    def __init__(self, hass: HomeAssistant):
        """Initilalize the IHC api."""
        self.hass = hass
        self.ihc_controller = None

    @callback
    async def post(self, request, controllerid, id):
        """handle api post requests"""
        self.initialize(controllerid)

        return self.json(
            await self.hass.async_add_executor_job(
                self.remove_id, controllerid, int(id)
            )
        )

    def remove_id(self, controller_id: str, id: int):

        conf = read_manual_setup(self.hass)
        controller_conf = get_controller_conf(conf, controller_id)
        for platform in IHC_PLATFORMS:
            if platform in controller_conf:
                for ihc_device in controller_conf[platform]:
                    if ihc_device["id"] == id:
                        controller_conf[platform].remove(ihc_device)
                        IhcMapper.set(
                            controller_id,
                            id,
                            "Will be removed after HA restart",
                            False,
                        )
                        break
        write_manual_setup(self.hass, conf)
        return
