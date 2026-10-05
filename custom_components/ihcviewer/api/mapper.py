"""IhcMapper class"""
import logging
from xmlrpc.client import Boolean
from .yamlhelper import get_controller_conf, read_manual_setup
from ..const import IHC_PLATFORMS

_LOGGER = logging.getLogger(__name__)


class IhcMapper:
    """This a static class keeping a map from IHC ids to entity ids.
    Additionally it has a flag for ihc id mapped manually"""

    ihc_mapping = {}

    @staticmethod
    def ismapped(controller_id, id) -> Boolean:
        """Returns True if the specified ihc id is already mapped"""
        mapping = IhcMapper.ihc_mapping[controller_id].get(id)
        return mapping is not None and not mapping.get("removed", False)

    @staticmethod
    def ispendingremoval(controller_id, id) -> Boolean:
        """Returns True if the id has been removed but the entity is still there"""
        mapping = IhcMapper.ihc_mapping[controller_id].get(id)
        return mapping is not None and mapping.get("removed", False)

    @staticmethod
    def markremoved(controller_id, id):
        """Mark an ihc id as removed from the manual setup.

        The entity is still there until the ihc integration has been reloaded,
        but the id must be free again right away. Otherwise moving a resource
        from one platform to another - say a button from switch to
        binary_sensor - takes two restarts instead of one: the first one only
        to make the id available again."""
        mapping = IhcMapper.ihc_mapping[controller_id].get(id)
        if mapping is None:
            return
        mapping["removed"] = True
        mapping["manual"] = False
        mapping["changed"] = True

    @staticmethod
    def forget(controller_id):
        """Forget the mapping for a controller.

        Used after the ihc integration has been reloaded, where the entities
        have been created from scratch. The mapping is rebuilt from the entity
        states the next time it is asked for."""
        IhcMapper.ihc_mapping.pop(controller_id, None)

    @staticmethod
    def get(controller_id, id):
        """Get the mapping for the specified ihc id"""
        if not IhcMapper.ismapped(controller_id, id):
            return None
        return IhcMapper.ihc_mapping[controller_id][id]

    @staticmethod
    def set(controller_id, id, entity_id, manual):
        """Set the mapping for a specified ihc id"""
        IhcMapper.ihc_mapping[controller_id][id] = {
            "entity_id": entity_id,
            "manual": manual,
            "changed": True,
        }

    @staticmethod
    def haschanges() -> Boolean:
        """Returns True if there are any changes in the mapping"""
        for mapping in IhcMapper.ihc_mapping.values():
            for entity in mapping:
                if "changed" in entity:
                    return True
        return False

    @staticmethod
    async def get_mapping(hass, controllerid):
        """Return the mapping for the specified controller"""
        if controllerid in IhcMapper.ihc_mapping:
            return IhcMapper.ihc_mapping[controllerid]

        IhcMapper.ihc_mapping[controllerid] = {}
        allstates = await hass.async_add_executor_job(hass.states.all)
        for state in allstates:
            if "ihc_id" not in state.attributes:
                continue
            # Do we have a controller id on the state
            if (
                "ihc_controller" in state.attributes
                and state.attributes["ihc_controller"] != controllerid
            ):
                continue
            id = state.attributes["ihc_id"]
            IhcMapper.ihc_mapping[controllerid][id] = {
                "entity_id": state.entity_id,
                "manual": False,
            }
        await hass.async_add_executor_job(
            IhcMapper.__update_manual_mapping, hass, controllerid
        )
        return IhcMapper.ihc_mapping[controllerid]

    @staticmethod
    def __update_manual_mapping(hass, controllerid):
        """Update the mapping for the specified controller"""
        conf = read_manual_setup(hass)
        controller_conf = get_controller_conf(conf, controllerid)
        for platform in IHC_PLATFORMS:
            if platform in controller_conf:
                for ihc_device in controller_conf[platform]:
                    id = ihc_device["id"]
                    if id not in IhcMapper.ihc_mapping[controllerid]:
                        _LOGGER.warning(
                            "The id %s, was not found as an entity state", id
                        )
                        continue
                    device_conf = IhcMapper.ihc_mapping[controllerid][id]
                    device_conf["manual"] = True
