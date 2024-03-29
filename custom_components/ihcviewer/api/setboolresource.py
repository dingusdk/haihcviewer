"""ApiSetBoolResource class"""
import logging

from homeassistant.core import callback

from .apibase import ApiBase

_LOGGER = logging.getLogger(__name__)


class ApiSetBoolResource(ApiBase):
    """IHCViewer api set bool resource requests."""

    name = "api:ihcviewer:setboolresource"
    url = "/api/ihcviewer/setboolresource/{controllerid}/{id}/{value}"

    @callback
    async def post(self, request, controllerid, id, value):
        """Set a boolean ihc resource value"""
        id = int(id)
        self.initialize(controllerid)
        if value == "on":
            await self.hass.async_add_executor_job(
                self.ihc_controller.set_runtime_value_bool, id, True
            )
            return "on"
        if value == "off":
            await self.hass.async_add_executor_job(
                self.ihc_controller.set_runtime_value_bool, id, False
            )
            return "off"
        if value == "toggle":
            return await self.hass.async_add_executor_job(self.toggle, id)
        return ""

    def toggle(self, id):
        """Toggle a boolean resource on and off."""
        value = self.ihc_controller.get_runtime_value(id)
        self.ihc_controller.set_runtime_value_bool(id, not value)
        self.ihc_controller.set_runtime_value_bool(id, value)
        return "on" if value else "off"
