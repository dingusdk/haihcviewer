"""ApiReload class"""
import logging

from http import HTTPStatus

from homeassistant.core import callback

from .apibase import ApiBase
from .change import reload_ihc

_LOGGER = logging.getLogger(__name__)


class ApiReload(ApiBase):
    """IHCViewer api reload request.

    Adding and removing reload the ihc integration by themselves - see
    change.py. This is what is left for the case where that did not go
    through: the panel offers it as a way to try again."""

    name = "api:ihcviewer:reload"
    url = "/api/ihcviewer/reload/{controllerid}"

    @callback
    async def post(self, request, controllerid):
        """handle api post requests"""
        if not await reload_ihc(self.hass, controllerid):
            return self.json_message(
                "The ihc integration did not load again. See the Home Assistant log",
                HTTPStatus.INTERNAL_SERVER_ERROR,
            )
        return self.json({"reloaded": True})
