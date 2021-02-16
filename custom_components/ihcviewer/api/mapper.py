import logging
from .yamlhelper import get_controller_conf, read_manual_setup
from ..const import IHC_PLATFORMS

_LOGGER = logging.getLogger(__name__)


class IhcMapper:
    """This a a static class keeping a map from IHC ids to entity ids.
    Additionally it has a flag for ihc id mapped manually"""

    ihc_mapping = {}

    @staticmethod
    def ismapped(controller_id, id):
        return id in IhcMapper.ihc_mapping[controller_id]

    @staticmethod
    def get(controller_id, id):
        if not IhcMapper.ismapped(controller_id, id):
            return None
        return IhcMapper.ihc_mapping[controller_id][id]

    @staticmethod
    def set(controller_id, id, entity_id, manual):
        IhcMapper.ihc_mapping[controller_id][id] = {
            "entity_id": entity_id,
            "manual": manual,
            "changed": True,
        }

    @staticmethod
    def haschanges():
        for controller_id in IhcMapper.ihc_mapping:
            for entity in IhcMapper.ihc_mapping[controller_id]:
                if "changed" in entity:
                    return True
        return False

    @staticmethod
    async def get_mapping(hass, controllerid):
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

        conf = read_manual_setup(hass)
        controller_conf = get_controller_conf(conf, controllerid)
        for platform in IHC_PLATFORMS:
            if platform in controller_conf:
                for ihc_device in controller_conf[platform]:
                    id = ihc_device["id"]
                    if id not in IhcMapper.ihc_mapping[controllerid]:
                        _LOGGER.warning(
                            f"The id {id}, was not found as an entity state"
                        )
                        continue
                    device_conf = IhcMapper.ihc_mapping[controllerid][id]
                    device_conf["manual"] = True
        return
