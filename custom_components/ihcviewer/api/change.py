"""Put a change to the manual setup into effect - with no restart, and nothing
left for the user to press.

The ihc integration reads ihc_manual_setup.yaml when it is set up, and it has
a working unload, so reloading its config entry is enough to add or remove an
entity. Every route that changes the manual setup ends by doing that here, so
by the time the panel gets its answer the entity is there - or gone.
"""
import asyncio
import logging

from homeassistant.core import callback
from homeassistant.helpers import entity_registry as er

from .mapper import IhcMapper

_LOGGER = logging.getLogger(__name__)

IHC_DOMAIN = "ihc"

# The pause before each attempt at reloading, in seconds. A reload logs out of
# the controller and straight back in, and the controller does not always take
# the second login at once: on a real installation one reload in four came back
# as not loaded, while the next, a minute later, went through. The ihc
# integration then raises ConfigEntryNotReady and Home Assistant retries by
# itself in the background - but the panel would already have said it failed,
# and pointed at a log with nothing in it.
RETRY_DELAYS = (0, 2, 5)


@callback
def find_entry(hass, controller_id: str):
    """The ihc config entry for a controller, loaded or not.

    Looked up among the config entries rather than in hass.data: a reload
    that failed has taken the entry out of hass.data, and the next attempt
    must still be able to find it."""
    for entry in hass.config_entries.async_entries(IHC_DOMAIN):
        if entry.unique_id == controller_id:
            return entry
    return None


async def reload_ihc(hass, controller_id: str) -> bool:
    """Reload the ihc integration, trying again if the controller says no.

    Everything that goes wrong is written to the log, so that "see the log"
    in the panel leads somewhere."""
    entry = find_entry(hass, controller_id)
    if entry is None:
        _LOGGER.error("There is no ihc integration set up for controller %s",
                      controller_id)
        return False
    for attempt, delay in enumerate(RETRY_DELAYS, start=1):
        if delay:
            await asyncio.sleep(delay)
        try:
            if await hass.config_entries.async_reload(entry.entry_id):
                # The entities were made from scratch, so the mapping is stale
                IhcMapper.forget(controller_id)
                return True
            _LOGGER.warning(
                "The ihc integration did not load again (attempt %s of %s)",
                attempt, len(RETRY_DELAYS))
        except Exception:  # noqa: BLE001 - logged, and the next attempt follows
            _LOGGER.exception(
                "Reloading the ihc integration failed (attempt %s of %s)",
                attempt, len(RETRY_DELAYS))
    _LOGGER.error(
        "The ihc integration could not be reloaded for controller %s. The change "
        "to the manual setup is saved, and takes effect the next time the ihc "
        "integration loads", controller_id)
    return False


async def put_into_effect(hass, controller_id: str, id: int, platform=None):
    """Reload the ihc integration after a change, and say how it went.

    Given the platform a resource was just added as, the answer also carries
    the entity id it became."""
    reloaded = await reload_ihc(hass, controller_id)
    entity_id = None
    if reloaded and platform:
        entity_id = entity_id_for(hass, controller_id, id, platform)
    return {"reloaded": reloaded, "entity_id": entity_id}


@callback
def entity_id_for(hass, controller_id: str, id: int, platform: str):
    """The entity id an ihc resource has as the given platform, if any.

    The ihc integration gives each entity the unique id
    "<controller id>-<ihc id>", and the registry keys on that together with
    the domain - so the same resource has one entry per platform."""
    return er.async_get(hass).async_get_entity_id(
        platform, IHC_DOMAIN, f"{controller_id}-{id}")
