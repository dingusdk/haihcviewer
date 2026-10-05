"""ApiManualBinarySensor class"""
import json
import logging

from http import HTTPStatus

from homeassistant.core import callback

from .apibase import ApiBase
from .change import put_into_effect
from .mapper import IhcMapper
from .yamlhelper import (
    find_manual_platform,
    get_controller_conf,
    read_manual_setup,
    write_manual_setup,
)

_LOGGER = logging.getLogger(__name__)


class ApiManualBinarySensor(ApiBase):
    """IHCViewer api make binary sensor requests."""

    name = "api:ihcviewer:manual:binarysensor"
    url = "/api/ihcviewer/manual/binarysensor/{controllerid}"

    @callback
    async def post(self, request, controllerid):
        """handle api post requests"""
        self.initialize(controllerid)
        body = await request.text()
        data = json.loads(body) if body else None
        if data is None or not isinstance(data, dict):
            return self.json_message(
                "Body should be a JSON object", HTTPStatus.BAD_REQUEST
            )
        id = int(data["id"])
        name = data.get("name")
        type = data.get("type")
        inverting = data.get("inverted")
        await IhcMapper.get_mapping(self.hass, controllerid)
        await self.hass.async_add_executor_job(
            self.make_binary_sensor, controllerid, id, name, type, inverting
        )
        # The change is put into Home Assistant here and now, so there is
        # nothing left to press - and no restart
        return self.json(
            await put_into_effect(self.hass, controllerid, id, "binary_sensor")
        )

    def make_binary_sensor(
        self, controller_id: str, id: int, name: str, type: str, inverting: bool
    ):
        """Make a new binary sensor."""
        # The file is read as well as the mapping: the mapping only knows the
        # ids that are entities, so a resource added but not yet loaded could
        # otherwise be added a second time.
        if find_manual_platform(self.hass, controller_id, id) or IhcMapper.ismapped(
            controller_id, id
        ):
            raise Exception("IHC resource id already added")

        conf = read_manual_setup(self.hass)
        controller_conf = get_controller_conf(conf, controller_id)
        binary_sensor = {"id": id, "name": name}
        if inverting:
            binary_sensor["inverting"] = True
        if type:
            binary_sensor["type"] = type
        if "binary_sensor" not in controller_conf:
            controller_conf["binary_sensor"] = [binary_sensor]
        else:
            controller_conf["binary_sensor"].append(binary_sensor)
        IhcMapper.set(controller_id, id, "not created yet. Reload the ihc integration.", True)
        write_manual_setup(self.hass, conf)
