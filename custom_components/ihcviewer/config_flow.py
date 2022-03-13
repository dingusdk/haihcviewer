"""Config flow for IHC Viewer integration."""
import logging
import voluptuous as vol

from homeassistant import config_entries
from homeassistant.data_entry_flow import AbortFlow

from .const import DOMAIN

CONFIG_FLOW_VERSION = 1
_LOGGER = logging.getLogger(__name__)


class ConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for IHC Viewer."""

    VERSION = 1
    CONNECTION_CLASS = config_entries.CONN_CLASS_LOCAL_PUSH

    async def async_step_user(self, user_input=None):
        """Handle the initial step."""
        errors = {}
        try:
            if "ihc" not in self.hass.data:
                errors["base"] = "no_ihc"
            else:
                if "ihc0" in self.hass.data["ihc"]:
                    errors["base"] = "old_ihc"
            # We only have one viewer
            await self.async_set_unique_id(
                "ihcviewer-699def04-a621-47f9-bd9b-4ed8b270ef28"
            )
            self._abort_if_unique_id_configured()
            if user_input is not None:
                return self.async_create_entry(title="IHC Viewer", data=user_input)
        except AbortFlow:
            errors["base"] = "already_setup"
        except Exception:  # pylint: disable=broad-except
            _LOGGER.exception("Unexpected exception")
            errors["base"] = "unknown"

        return self.async_show_form(
            step_id="user", data_schema=vol.Schema({}), errors=errors
        )
