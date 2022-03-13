"""ApiSystemInfo class"""
import logging

from homeassistant.core import callback

from .apibase import ApiBase

_LOGGER = logging.getLogger(__name__)


class ApiSystemInfo(ApiBase):
    """IHCViewer api systeminfo requests."""

    name = "api:ihcviewer:systeminfo"
    url = "/api/ihcviewer/systeminfo/{controllerid}"

    @callback
    async def get(self, request, controllerid):
        """Get the system info from the ihc controller"""
        self.initialize(controllerid)
        return self.json(
            await self.hass.async_add_executor_job(
                self.ihc_controller.client.get_system_info
            )
        )
