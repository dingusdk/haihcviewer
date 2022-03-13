"""ApiLog class"""
import logging
from aiohttp import web

from homeassistant.core import callback

from .apibase import ApiBase

_LOGGER = logging.getLogger(__name__)


class ApiLog(ApiBase):
    """IHCViewer api log requests."""

    name = "api:ihcviewer:log"
    url = "/api/ihcviewer/log/{controllerid}"

    @callback
    async def get(self, request, controllerid):
        """Get request."""
        self.initialize(controllerid)
        log = await self.hass.async_add_executor_job(
            self.ihc_controller.client.get_user_log, "en"
        )
        if log is False:
            log = "Failed to get log from the ihc controller"
        return web.Response(
            body=log, content_type="text/plain", charset="utf-8", status=200
        )
