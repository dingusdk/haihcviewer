import datetime
import logging
from aiohttp import web

from homeassistant.core import callback, HomeAssistant

from .apibase import ApiBase
from .mapper import IhcMapper

_LOGGER = logging.getLogger(__name__)


class ApiGetResource(ApiBase):
    """IHCViewer api get requests."""

    name = "api:ihcviewer:getresource"
    url = "/api/ihcviewer/getresource/{controllerid}/{id}"

    def __init__(self, hass: HomeAssistant):
        """Initilalize the IHC api."""
        self.hass = hass
        self.ihc_controller = None

    @callback
    async def get(self, request, controllerid, id):
        id = int(id)
        self.initialize(controllerid)
        value = await self.hass.async_add_executor_job(
            self.ihc_controller.get_runtime_value, id
        )
        if value is None:
            return web.Response(status=404)
        value_type = type(value).__name__
        if isinstance(value, datetime.time):
            value = f"{value.hour}:{value.minute:02d}:{value.second:02d}"
            value_type = "time"

        entity_id = ""
        state = ""
        manual = False
        if IhcMapper.ismapped(controllerid, id):
            mapping = IhcMapper.get(controllerid, id)
            entity_id = mapping["entity_id"]
            manual = mapping["manual"]
            state = self.hass.states.get(entity_id)
        json = {
            "id": id,
            "value": value,
            "type": value_type,
            "entity_id": entity_id,
            "manual": manual,
            "state": state,
        }
        return self.json(json)
