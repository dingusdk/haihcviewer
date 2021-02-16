import logging

from homeassistant.core import callback, HomeAssistant

from .apibase import ApiBase

_LOGGER = logging.getLogger(__name__)


class ApiSystemInfo(ApiBase):
    """IHCViewer api systeminfo requests."""

    name = "api:ihcviewer:systeminfo"
    url = "/api/ihcviewer/systeminfo/{controllerid}"

    def __init__(self, hass: HomeAssistant):
        """Initilalize the IHC api."""
        self.hass = hass
        self.ihc_controller = None

    @callback
    async def get(self, request, controllerid):
        self.initialize(controllerid)
        return self.json(
            await self.hass.async_add_executor_job(
                self.ihc_controller.client.get_system_info
            )
        )
