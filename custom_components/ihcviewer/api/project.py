from aiohttp import web

from homeassistant.core import callback, HomeAssistant
from .apibase import ApiBase


class ApiProject(ApiBase):
    """IHCViewer api project requests."""

    name = "api:ihcviewer:project"
    url = "/api/ihcviewer/project/{controllerid}"

    def __init__(self, hass: HomeAssistant):
        """Initilalize the IHC api."""
        self.hass = hass
        self.ihc_controller = None

    @callback
    async def get(self, request, controllerid):
        self.initialize(controllerid)
        project = await self.hass.async_add_executor_job(
            self.ihc_controller.get_project
        )
        return web.Response(
            body=project, content_type="text/xml", charset="utf-8", status=200
        )
