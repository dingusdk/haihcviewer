import { LitElement, html, css, customElement, property } from "lit-element";

import { IhcBinaryResourceDialog } from "../dialogs/ihc-binary-res-dlg";
import { IhcResourceDialog} from "../dialogs/ihc-resource-dlg"
import { IhcSensorResourceDialog } from "../dialogs/ihc-sensor-res-dlg";

import { copyTextToClipboard } from "../copytoclipboard";
import { IHCManager } from "../ihcmanager";
import { IhcTreeNode } from "./ihc-tree-node";
import { IHCResource } from "../ihcproject";

require("../dialogs/ihc-resource-dlg");
require("../dialogs/ihc-binary-res-dlg");
require("../dialogs/ihc-sensor-res-dlg");
require("../dialogs/ihc-resource-dlg");
require("./loader-element");

@customElement("ihc-properties")
export class IhcPropertiesElement extends LitElement {

  private action_binary_sensor : boolean;
  private action_light : boolean;
  private action_sensor : boolean;
  private action_switch : boolean;
  private selectednode: IhcTreeNode;

  @property({ type: String })
  public controllerId;

  @property({ type: Boolean, attribute : false })
  public isLoading = false;

  @property({ type: Object, attribute: false })
  public selected = null;

  public on_id;
  public off_id;

  static get styles() {
    return [
      IhcResourceDialog.button_style,
      css`
      :host {
        display: flex;
        flex-direction: row;
        align-items: stretch;
      }
      #properties {
        display: inline-block;
        width: fit-content;
        vertical-align: top;
        flex-grow: 0;
        width: 30em;
      }
      #actions {
        display: inline-block;
        padding-left: 20px;
        flex-grow: 1;
      }
      .valueactions span{
        font-size: 10px;
        font-weight: bold;
        padding: 0px 5px 0px 5px;
        cursor: pointer;
        border-radius: 4px;
        background-color: var(--mdc-theme-primary, #6200ee);
        color: var(--mdc-theme-on-primary, #fff);
        padding: 1px 2px 1px 2px;
        border: none;
        box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
        margin: 0px 2px 0px 2px;
      }
    `];
  }

  render() {
    if (this.isLoading)
      return html`<ihc-loader/>`;
    if (this.selected == null)
      return '';
    return html`
      <div id="properties">
        <div>
          <span>Resource id:</span>
          <span id="resourceid"> ${this.selected.id}</span>
          <span
            id="copyres"
            title="copy resource id to clipboard"
              @click=${this.onCopy}
          >
            <svg
              style="width: 16px; height: 16px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
              />
            </svg>
          </span>
        </div>
        <div>
          <span>Type:</span><span> ${this.selected.type}</span>
        </div>
        <div>
          <span>Value:</span><span> ${this.selected.value}</span>${this.renderValueActions()}
        </div>
        ${this.selected.entity_id ? html`
          <div>
            <span>Entity:</span><span> ${this.selected.entity_id}</span>
          </div>
        ` : ""}
        ${this.selected.state ? html`
          <div>
            <span>Friendly name:</span><span> ${this.selected.state.attributes.friendly_name}</span>
          </div>
        ` : ""}
      </div>
      <div id="actions">
        ${ this.selected?.manual ? html`
          <button @click=${this.removeManual}>Remove manual setup</button>
          <div>
            This resource is setup manually, and you can remove the manual setup by clicking the buttom above.
            (A restart is required)
          </div>
        ` : ""}
        ${ this.action_binary_sensor ? html`<button @click=${() => { this.showDialog("binary-dlg") }}>Binary sensor</button>`: ""}
        ${ this.action_light ? html`<button @click=${() => { this.showDialog("light-dlg") }}>Light</button>`: ""}
        ${ this.action_sensor ? html`<button @click=${() => { this.showDialog("sensor-dlg") }}>Sensor</button>`: ""}
        ${ this.action_switch ? html`<button @click=${() => { this.showDialog("switch-dlg") }}>Switch</button>` : ""}
        ${ this.action_binary_sensor || this.action_light || this.action_sensor || this.action_switch ?
          html`<div>
            To make a manual setup of this ihc resource id as a Home Assistant entity, click one of the buttons.
            Note: this is a manual setup. You should know what you are doing.
            Just because it is possible to add something, does not mean it make sense.
          </div>` : ""}
        </div>
        <ihc-binary-res-dlg id="binary-dlg" @ok=${this.makeBinarySensor}></ihc-binary-res-dlg>
        <ihc-resource-dlg id="light-dlg" @ok=${this.makeLight} title="Add a light"></ihc-resource-dlg>
        <ihc-resource-dlg id="switch-dlg" @ok=${this.makeSwitch} title="Add a switch"></ihc-resource-dlg>
        <ihc-sensor-res-dlg id="sensor-dlg" @ok=${this.makeSensor}></ihc-sensor-res-dlg>
      `;
  }

  renderValueActions() {

    if (this.selected.type == 'bool') {
      return html`<span class="valueactions">
        <span @click=${this.runtimeBoolOn} title="Set the value to On(true)">on</span>
        <span @click=${this.runtimeBoolOff} title="Set the value to Off(false)">off</span>
        <span @click=${this.runtimeBoolToggle} title="Toggle the value">toggle</span>
      </span>`;
    }
    return '';
  }


  constructor() {
    super();
    this.isLoading = false;
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  async setSelected(selectednode : IhcTreeNode, onid = null, offid = null) {
    this.on_id = onid;
    this.off_id = offid;
    if (selectednode == null) {
      this.selected = null;
      this.selectednode = null;
      return;
    }
    this.selectednode = selectednode;
    let selectedid = selectednode.data.Id
    this.isLoading = true;
    this.action_binary_sensor = false;
    this.action_light = false;
    this.action_sensor = false;
    this.action_switch = false
    let response = await IHCManager.instance.fetchWithAuth(
      `/api/ihcviewer/getresource/${this.controllerId}/${selectedid}`);
    if (response.ok) {
      this.selected = await response.json();
      if (this.selected != null && this.selected.type && ! this.selected.entity_id) {
        switch (this.selected.type) {
          case 'bool':
            this.action_binary_sensor = onid == null;
            this.action_light = true;
            this.action_switch = true
            break;
          case 'int':
            this.action_light = (<IHCResource>this.selectednode.data).IsLightLevel;
            this.action_sensor = onid == null;
            break;
          case 'time' :
          case 'float':
            this.action_sensor = true;
            break;
        }
      }
    }
    this.isLoading = false;
  }

  showDialog(id) {

    var dlg = this.shadowRoot.getElementById(id) as IhcResourceDialog
    dlg.controllerId = this.controllerId;
    dlg.ihc_id = this.selected.id;
    dlg.on_id = this.on_id;
    dlg.off_id = this.off_id;
    dlg.open();
  }

  async makeBinarySensor() {

    var dlg = this.shadowRoot.getElementById('binary-dlg') as IhcBinaryResourceDialog;
    var data = {
      id: dlg.ihc_id,
      name: dlg.name,
      type: dlg.type,
      inverted: dlg.inverted,
    };
    await this.apiRequest(`/api/ihcviewer/manual/binarysensor/${this.controllerId}`,
      data, 'POST');
    this.selectednode.data.iconclass += " connected";
    this.selectednode.requestUpdate();
      // Reload properties
    await this.setSelected(this.selectednode);
    let restartevent = new CustomEvent("restartrequired", { bubbles: true, composed: true});
    this.dispatchEvent(restartevent);
  }

  async makeLight() {

    var dlg = this.shadowRoot.getElementById('light-dlg') as IhcResourceDialog;
    var data = {
      id: dlg.ihc_id,
      name: dlg.name,
    };
    if (dlg.on_id != null)
      data['on_id'] = dlg.on_id
    if (dlg.off_id != null)
      data['off_id'] = dlg.off_id
    await this.apiRequest(`/api/ihcviewer/manual/light/${this.controllerId}`,
      data, 'POST');
    // Reload properties
    await this.setSelected(this.selectednode);
  }

  async makeSwitch() {

    var dlg = this.shadowRoot.getElementById('switch-dlg') as IhcResourceDialog;
    var data = {
      id: dlg.ihc_id,
      name: dlg.name,
    };
    if (dlg.on_id != null)
      data['on_id'] = dlg.on_id
    if (dlg.off_id != null)
      data['off_id'] = dlg.off_id

    await this.apiRequest(`/api/ihcviewer/manual/switch/${this.controllerId}`,
      data, 'POST');
    // Reload properties
    await this.setSelected(this.selectednode);
  }

  async makeSensor() {

    var dlg = this.shadowRoot.getElementById('sensor-dlg') as IhcSensorResourceDialog
    var data = {
      id: dlg.ihc_id,
      name: dlg.name,
      unit: dlg.unit
    };
    await this.apiRequest(`/api/ihcviewer/manual/sensor/${this.controllerId}`,
      data, 'POST');
    // Reload properties
    await this.setSelected(this.selectednode);
  }

  async removeManual() {

    var id = this.selected.id;
    await this.apiRequest(`/api/ihcviewer/manual/remove/${this.controllerId}/${id}`, '', 'POST');
    // Reload properties
    await this.setSelected(this.selectednode);
  }

  async runtimeBoolOn() {

    var id = this.selected.id;
    if ((await this.apiRequest(`/api/ihcviewer/setboolresource/${this.controllerId}/${id}/on`, '', 'POST')) == 'on') {
      this.selected.value = true;
      this.requestUpdate();
    }
  }

  async runtimeBoolOff() {

    var id = this.selected.id;
    if ((await this.apiRequest(`/api/ihcviewer/setboolresource/${this.controllerId}/${id}/off`, '', 'POST')) == 'off') {
      this.selected.value = false;
      this.requestUpdate();
    }
  }

  async runtimeBoolToggle() {

    var id = this.selected.id;
    await this.apiRequest(`/api/ihcviewer/setboolresource/${this.controllerId}/${id}/toggle`, '', 'POST');
  }

  async apiRequest(url: string, data, method: string = "GET") {

    let response = await IHCManager.instance.fetchWithAuth( url, {
      method: method,
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( data)
    });
    if (response.ok) {
      return await response.text();
    }
    return "error";
  }

  onCopy() {
    copyTextToClipboard(this.selected.data.Id);
  }
}
