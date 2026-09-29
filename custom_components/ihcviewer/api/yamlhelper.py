"""Helper functions to do yaml"""
import os.path
from ruamel.yaml import YAML

from homeassistant.core import HomeAssistant

from ..const import CONF_CONTROLLER, IHC_PLATFORMS

MANUAL_SETUP_YAML = "ihc_manual_setup.yaml"


def _yaml() -> YAML:
    """Round trip yaml, so comments and order survive a write.

    ruamel.yaml removed load() and dump() with a Loader/Dumper in 0.18 -
    calling them raises AttributeError. YAML(typ="rt") is what replaces them."""
    yaml = YAML(typ="rt")
    yaml.default_flow_style = False
    return yaml


def read_manual_setup(hass: HomeAssistant):
    """Read the manual configuration yaml file.

    Shaped the way the ihc integration reads it: it runs the file through a
    schema with ensure_list on "ihc" and on every platform, so a controller
    written as a single mapping, and a platform with nothing under it, are
    both valid there - and everything here that reads the file expects lists.

    Only what is in the file is shaped. A platform the file does not mention
    is not added, so nothing is written back that the user did not write."""
    yaml_path = hass.config.path(MANUAL_SETUP_YAML)
    conf = None
    if os.path.isfile(yaml_path):
        with open(yaml_path, "r", encoding="utf-8") as file:
            conf = _yaml().load(file)
    # An empty file parses to None
    if not isinstance(conf, dict):
        conf = {"ihc": []}
    controllers = conf.get("ihc")
    if controllers is None:
        controllers = []
    elif not isinstance(controllers, list):
        controllers = [controllers]
    conf["ihc"] = controllers
    for controller_conf in controllers:
        for platform in IHC_PLATFORMS:
            if platform in controller_conf and controller_conf[platform] is None:
                controller_conf[platform] = []
    return conf


def write_manual_setup(hass: HomeAssistant, conf):
    """Write the manual configuration yaml file"""
    yaml_path = hass.config.path(MANUAL_SETUP_YAML)
    with open(yaml_path, "w", encoding="utf-8") as file:
        _yaml().dump(conf, file)


def get_controller_conf(conf, controller_id):
    """Get ihc controller with specified id from config."""
    for controller_conf in conf["ihc"]:
        if controller_conf[CONF_CONTROLLER] == controller_id:
            return controller_conf
    controller_conf = {CONF_CONTROLLER: controller_id}
    conf["ihc"].append(controller_conf)
    return controller_conf


def find_manual_platform(hass: HomeAssistant, controller_id: str, id: int):
    """Which platform this ihc id is already set up as, or None.

    The mapping only knows the ids that exist as an entity, and a row written
    here is not one until Home Assistant has been restarted. So a resource
    added and not yet loaded is invisible to the mapping - and could be added
    a second time. This reads the file, which is what actually says what has
    been set up by hand."""
    conf = read_manual_setup(hass)
    controller_conf = get_controller_conf(conf, controller_id)
    for platform in IHC_PLATFORMS:
        for ihc_device in controller_conf.get(platform, []):
            if ihc_device["id"] == id:
                return platform
    return None
