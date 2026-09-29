""" Constants used by ihcviewer."""
NAME_SHORT = "IHCViewer"
DOMAIN = "ihcviewer"
VERSION = "2.0.6"
PROJECT_URL = "https://github.com/dingusdk/haihcviewer/"
ISSUE_URL = f"{PROJECT_URL}issues"

CONF_CONTROLLER_ID = "controller_id"

# The key in ihc_manual_setup.yaml that says which controller a block is for -
# the ihc integration's own, "controller" in its MANUAL_SETUP_SCHEMA. It used
# to be imported from homeassistant.components.ihc, which is Home Assistant's
# built-in ihc integration and not the one IHC Viewer runs on, and it only
# worked because both happen to use the same word. Were the built-in one ever
# removed, IHC Viewer would not load at all.
CONF_CONTROLLER = "controller"

IHC_PLATFORMS = ("binary_sensor", "light", "sensor", "switch")

URL_PANEL = "ihc_viewer"
