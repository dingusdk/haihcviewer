"""ApiManualSensor class"""
import json
import logging

from http import HTTPStatus

from homeassistant.core import callback

from .apibase import ApiBase
from .mapper import IhcMapper
from .yamlhelper import get_controller_conf, read_manual_setup, write_manual_setup

_LOGGER = logging.getLogger(__name__)


class ApiManualSensor(ApiBase):
    """IHCViewer api make sensor requests."""

    name = "api:ihcviewer:manual:sensor"
    url = "/api/ihcviewer/manual/sensor/{controllerid}"

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
        unit = data.get("unit")
        return self.json(
            await self.hass.async_add_executor_job(
                self.make_sensor, controllerid, id, name, unit
            )
        )

    def make_sensor(self, controller_id: str, id: int, name: str, unit: str):
        """Make a new sensor."""
        if IhcMapper.ismapped(controller_id, id):
            raise Exception("IHC resource id already added")

        conf = read_manual_setup(self.hass)
        controller_conf = get_controller_conf(conf, controller_id)
        sensor = {"id": id, "name": name}
        if unit:
            sensor["unit_of_measurement"] = unit
        if "sensor" not in controller_conf:
            controller_conf["sensor"] = [sensor]
        else:
            controller_conf["sensor"].append(sensor)
        IhcMapper.set(controller_id, id, "not loaded yet. HA restart required.", True)
        write_manual_setup(self.hass, conf)
