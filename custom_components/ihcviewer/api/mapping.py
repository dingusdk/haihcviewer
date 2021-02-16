from homeassistant.core import callback, HomeAssistant
from .apibase import ApiBase
from .mapper import IhcMapper


class ApiMapping(ApiBase):
    """IHCViewer api mapping requests."""

    name = "api:ihcviewer:mapping"
    url = "/api/ihcviewer/mapping/{controllerid}"

    def __init__(self, hass: HomeAssistant):
        """Initilalize the IHC api."""
        self.hass = hass
        self.ihc_controller = None

    @callback
    async def get(self, request, controllerid):
        self.initialize(controllerid)
        return self.json(await IhcMapper.get_mapping(self.hass, controllerid))
