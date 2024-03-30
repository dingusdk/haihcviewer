import { customElement, property } from 'lit/decorators.js';
import { IHCManager } from "../ihcmanager";
import { LitElement, css, html } from 'lit';

require("./loader-element");

@customElement("ihc-info")
export class IhcInfoElement extends LitElement {

  private systeminfo;

  @property({ type: String, reflect: true })
  public controllerId;

  @property({ type: Boolean, attribute: false })
  public isLoading = false;

  static get styles() {
    return css`
      #info {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
      }
    `;
  }

  render() {
    if (this.systeminfo == null) {
      return html`
      <div id="info">
        ${this.isLoading ? html`<ihc-loader/>` : ""}
      </div>`;
    }
    var uptimestr = this.uptimeAsString();
    return html`
        <div id="info">
          ${this.isLoading ? html`<ihc-loader/>` : ""}
          <table>
            <tr><td>Uptime</td><td>${uptimestr}</td></tr>
            <tr><td>Brand</td><td>${this.systeminfo.brand}</td></tr>
            <tr><td>Hardware version</td><td>${this.systeminfo.hw_revision}</td></tr>
            <tr><td>Led dimmer software version</td><td>${this.systeminfo.led_dimmer_software_version}</td></tr>
            <tr><td>Productiondate</td><td>${this.systeminfo.production_date}</td></tr>
            <tr><td>Serial number</td><td>${this.systeminfo.serial_number}</td></tr>
            <tr><td>Software date</td><td>${this.systeminfo.sw_date}</td></tr>
            <tr><td>Version</td><td>${this.systeminfo.version}</td></tr>
          </table>
        </div>
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.systemInfoRequest();
  }

  async systemInfoRequest() {
    this.isLoading = true;
    try {
      let response = await IHCManager.instance.fetchWithAuth(`/api/ihcviewer/systeminfo/${this.controllerId}`);
      if (response.ok) {
        this.systeminfo = await response.json();
      }
    }
    finally {
      this.isLoading = false;
    }
  }

  uptimeAsString(): string {
    var uptimestr = "";
    if (this.systeminfo != null) {
      var uptime: number = parseInt(this.systeminfo.uptime) / 1000;
      var days = Math.floor(uptime / 60 / 60 / 24);
      if (days > 0) {
        uptimestr += days + " days ";
        uptime -= days * 60 * 60 * 24;
      }
      var hours = Math.floor(uptime / 60 / 60);
      if (days > 0 || hours > 0) {
        uptimestr += hours + " hours ";
        uptime -= hours * 60 * 60;
      }
      var minutes = Math.floor(uptime / 60);
      if (days > 0 || hours > 0 || minutes > 0) {
        uptimestr += minutes + " min ";
        uptime -= minutes * 60;
      }
      uptimestr += Math.floor(uptime) + " sec ";
    }
    return uptimestr;
  }
}
