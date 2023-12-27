"""ApiBase class"""
import logging

from homeassistant.components.http import HomeAssistantView
from homeassistant.components.ihc import IHC_CONTROLLER

_LOGGER = logging.getLogger(__name__)


class ApiBase(HomeAssistantView):
    """Base class for all IHCViewer api views."""

    requires_auth = True

    def __init__(self, hass):
        """Initilalize the IHC api."""
        self.hass = hass
        self.ihc_controller = None

    def initialize(self, controller_id):
        """Initialize the view with the associated ihc controller"""
        for entry_id, data in self.hass.data["ihc"].items():
            if data['controller_id'] == controller_id:
                self.ihc_controller = data['controller']
                return
        _LOGGER.error("Controller %s not found.", controller_id)
