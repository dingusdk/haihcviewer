import json
import logging

from homeassistant.core import callback, HomeAssistant
from homeassistant.components.ihc import IHC_CONTROLLER
from http import HTTPStatus

from .apibase import ApiBase
from .mapper import IhcMapper
from .yamlhelper import get_controller_conf, read_manual_setup, write_manual_setup

_LOGGER = logging.getLogger(__name__)


class ApiManualBinarySensor(ApiBase):
    """IHCViewer api make binary sensor requests."""

    name = "api:ihcviewer:manual:binarysensor"
    url = "/api/ihcviewer/manual/binarysensor/{controllerid}"

    def __init__(self, hass: HomeAssistant):
        """Initilalize the IHC api."""
        self.hass = hass
        self.ihc_controller = None

    @callback
    async def post(self, request, controllerid):
        """handle api post requests"""
        self.initialize(controllerid)
        self.ihc_controller = self.hass.data["ihc"][controllerid][IHC_CONTROLLER]
        body = await request.text()
        data = json.loads(body) if body else None
        if data is None or not isinstance(data, dict):
            return self.json_message(
                "Body should be a JSON object", HTTPStatus.BAD_REQUEST
            )
        id = int(data["id"])
        name = data.get("name")
        type = data.get("type")
        inverting = data.get("inverting")
        return self.json(
            await self.hass.async_add_executor_job(
                self.make_binary_sensor, controllerid, id, name, type, inverting
            )
        )

    def make_binary_sensor(
        self, controller_id: str, id: int, name: str, type: str, inverting: bool
    ):
        if IhcMapper.ismapped(controller_id, id):
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
        IhcMapper.set(controller_id, id, "not loaded yet. HA restart required.", True)
        write_manual_setup(self.hass, conf)
        return
