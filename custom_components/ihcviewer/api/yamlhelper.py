"""Helper functions to do yaml"""
import os.path
from ruamel import yaml

from homeassistant.components.ihc import IHC_CONTROLLER
from homeassistant.core import HomeAssistant

MANUAL_SETUP_YAML = "ihc_manual_setup.yaml"


def read_manual_setup(hass: HomeAssistant):
    """Read the manual configuration yaml file."""
    yaml_path = hass.config.path(MANUAL_SETUP_YAML)
    conf = {"ihc": []}
    if os.path.isfile(yaml_path):
        with open(yaml_path, "r", encoding="utf-8") as file:
            conf = yaml.load(file, Loader=yaml.RoundTripLoader)
        if "ihc" not in conf:
            conf = {"ihc": []}
        if not isinstance(conf["ihc"], list):
            conf = [conf]
    return conf


def write_manual_setup(hass: HomeAssistant, conf):
    """Write the manual configuration yaml file"""
    yaml_path = hass.config.path(MANUAL_SETUP_YAML)
    with open(yaml_path, "w", encoding="utf-8") as file:
        yaml.dump(conf, file, default_flow_style=False, Dumper=yaml.RoundTripDumper)


def get_controller_conf(conf, controller_id):
    """Get ihc controller with specified id from config."""
    for controller_conf in conf["ihc"]:
        if controller_conf[IHC_CONTROLLER] == controller_id:
            return controller_conf
    controller_conf = {IHC_CONTROLLER: controller_id}
    conf["ihc"].append(controller_conf)
    return controller_conf
