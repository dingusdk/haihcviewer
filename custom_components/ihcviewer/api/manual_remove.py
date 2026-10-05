"""ApiManualRemove class"""
import logging

from homeassistant.core import callback

from .apibase import ApiBase
from .change import put_into_effect
from .mapper import IhcMapper
from .yamlhelper import get_controller_conf, read_manual_setup, write_manual_setup

_LOGGER = logging.getLogger(__name__)

IHC_PLATFORMS = ("binary_sensor", "light", "sensor", "switch")


class ApiManualRemove(ApiBase):
    """IHCViewer api remove resource  requests."""

    name = "api:ihcviewer:manual:remove"
    url = "/api/ihcviewer/manual/remove/{controllerid}/{id}"

    @callback
    async def post(self, request, controllerid, id):
        """handle api post requests"""
        self.initialize(controllerid)
        await IhcMapper.get_mapping(self.hass, controllerid)
        id = int(id)
        await self.hass.async_add_executor_job(self.remove_id, controllerid, id)
        # Reloading takes the entity out of Home Assistant straight away
        return self.json(await put_into_effect(self.hass, controllerid, id))

    def remove_id(self, controller_id: str, id: int):
        """Remove the specified ihc resource id"""
        conf = read_manual_setup(self.hass)
        controller_conf = get_controller_conf(conf, controller_id)
        for platform in IHC_PLATFORMS:
            if platform in controller_conf:
                for ihc_device in controller_conf[platform]:
                    if ihc_device["id"] == id:
                        controller_conf[platform].remove(ihc_device)
                        IhcMapper.markremoved(controller_id, id)
                        break
        write_manual_setup(self.hass, conf)
