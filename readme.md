# Home Assistant IHC Viewer

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)

This is a IHC viewer custom component for Home Assistant.

NOTE: Version 2.x requires the new IHC integration - [Read about it here](https://www.dingus.dk/help-testing-the-new-home-assistant-ihc-integration/)
If you have the build in IHC integration in Home Assistant - you should not update IHCViewer.

[Read more about on my blog here](https://www.dingus.dk/ihc-viewer-for-home-assistant/)

To use it, the easist way is to install it with [HACS](https://hacs.xyz). Add this repo as a Custom Repository in HACS and install it.

Without HACS you will have to place the custom_components folder in your HA configuration folder.

To use it go to Configuration|Integrations and click the add integration. Find the IHCViwer in the list.

And you MUST have [IHC configured in Home Assistant](https://www.home-assistant.io/integrations/ihc/).

You will get a new menu item:

![menu](images/menu.png)

And you can view your IHC project:

![treeview](images/treeview.png)

Use IHC Viewer to get IHC resource ids to be used for manual setup or the ihc service functions.

## License

IHC Viewer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

IHC Viewer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with HAIhc. If not, see <http://www.gnu.org/licenses/>.
