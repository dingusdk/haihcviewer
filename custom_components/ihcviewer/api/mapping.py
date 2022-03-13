"""ApiMapping class"""
from homeassistant.core import callback
from .apibase import ApiBase
from .mapper import IhcMapper


class ApiMapping(ApiBase):
    """IHCViewer api mapping requests."""

    name = "api:ihcviewer:mapping"
    url = "/api/ihcviewer/mapping/{controllerid}"

    @callback
    async def get(self, request, controllerid):
        """Get the mapping for the specified controller"""
        self.initialize(controllerid)
        return self.json(await IhcMapper.get_mapping(self.hass, controllerid))
