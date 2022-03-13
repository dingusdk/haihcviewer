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
        if controller_id not in self.hass.data["ihc"]:
            _LOGGER.error("Controller %s not found.", controller_id)
            return
        self.ihc_controller = self.hass.data["ihc"][controller_id][IHC_CONTROLLER]
