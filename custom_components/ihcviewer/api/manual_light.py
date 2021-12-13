import json
import logging

from homeassistant.core import callback, HomeAssistant
from homeassistant.components.ihc import IHC_CONTROLLER
from http import HTTPStatus

from .apibase import ApiBase
from .mapper import IhcMapper
from .yamlhelper import get_controller_conf, read_manual_setup, write_manual_setup

_LOGGER = logging.getLogger(__name__)


class ApiManualLight(ApiBase):
    """IHCViewer api manual light requests."""

    name = "api:ihcviewer:manual:light"
    url = "/api/ihcviewer/manual/light/{controllerid}"

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
        on_id = data.get("on_id")
        off_id = data.get("off_id")
        return self.json(
            await self.hass.async_add_executor_job(
                self.make_light, controllerid, id, name, on_id, off_id
            )
        )

    def make_light(
        self,
        controller_id: str,
        id: int,
        name: str,
        on_id: int,
        off_id: int,
    ):
        if IhcMapper.ismapped(controller_id, id):
            raise Exception("IHC resource id already added")

        conf = read_manual_setup(self.hass)
        controller_conf = get_controller_conf(conf, controller_id)
        light = {"id": id, "name": name}
        if on_id:
            light["on_id"] = on_id
        if off_id:
            light["off_id"] = off_id
        if "light" not in controller_conf:
            controller_conf["light"] = [light]
        else:
            controller_conf["light"].append(light)
        IhcMapper.set(controller_id, id, "not loaded yet. HA restart required.", True)
        write_manual_setup(self.hass, conf)
        return
