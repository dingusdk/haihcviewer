"""ApiManualSwitch class"""
import json
import logging

from http import HTTPStatus

from homeassistant.core import callback

from .apibase import ApiBase
from .mapper import IhcMapper
from .yamlhelper import get_controller_conf, read_manual_setup, write_manual_setup

_LOGGER = logging.getLogger(__name__)


class ApiManualSwitch(ApiBase):
    """IHCViewer api manual switch requests."""

    name = "api:ihcviewer:manual:switch"
    url = "/api/ihcviewer/manual/switch/{controllerid}"

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
        on_id = data.get("on_id")
        off_id = data.get("off_id")
        return self.json(
            await self.hass.async_add_executor_job(
                self.make_switch, controllerid, id, name, on_id, off_id
            )
        )

    def make_switch(
        self, controller_id: str, id: int, name: str, on_id: int, off_id: int
    ):
        """Make a new switch"""
        if IhcMapper.ismapped(controller_id, id):
            raise Exception("IHC resource id already added")

        conf = read_manual_setup(self.hass)
        controller_conf = get_controller_conf(conf, controller_id)
        switch = {"id": id, "name": name}
        if on_id:
            switch["on_id"] = on_id
        if off_id:
            switch["off_id"] = off_id
        if "switch" not in controller_conf:
            controller_conf["switch"] = [switch]
        else:
            controller_conf["switch"].append(switch)
        IhcMapper.set(controller_id, id, "not loaded yet. HA restart required.", True)
        write_manual_setup(self.hass, conf)
