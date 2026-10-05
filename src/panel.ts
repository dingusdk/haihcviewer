import { customElement, property } from 'lit/decorators.js';
import { haStyle } from "../homeassistant-frontend/src/resources/styles"
import { IHCManager } from "./ihcmanager";
import { IhcControllerElement } from "./elements/ihc-controller-element";
import { CSSResultGroup, LitElement, css, html } from "lit";

require("./elements/ihc-controller-element");
require("./ihcmanager");

// This is the main Home Assistant panel for the IHCViewer
@customElement("ha-panel-ihcviewer")
export class HaPanelIHCViewer extends LitElement {

  // Home Assistant object
  @property({ type: Object })
  public hass;

  // If should render in narrow mode
  @property({ type: Boolean })
  public narrow;

  // If sidebar is currently shown
  @property({ type: Boolean })
  public showMenu;

  // Home Assistant panel info
  // panel.config contains config passed to register_panel serverside
  @property({ type: Object })
  public panel;

  // The selected controller id
  @property({ type: String })
  public selectedcontrollerid;

  // Set to true when a change to the manual ihc setup is not in effect yet,
  // because reloading the ihc integration did not go through
  @property({ type: Boolean, attribute: false })
  public restartRequired = false;

  // Set while the ihc integration is being reloaded
  @property({ type: Boolean, attribute: false })
  public reloading = false;

  // Set when the reload did not succeed
  @property({ type: Boolean, attribute: false })
  public reloadFailed = false;

  static panelStyles =
    css`
    #ihcviewer {
      width: 100%;
      height: 100%;
    }
    #ihcviewerheader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--app-header-background-color);
      color: var(--app-header-text-color);
    }
    #title {
      padding: 15px 10px 0px 10px;
      font-size: 20px;
      height: calc( var(--header-height) - 16px);
    }
    #controllerselector {
      justify-self: right;
      padding-right: 10px;
    }
    #controllers {
      height: calc(100% - var(--header-height));
    }
    #reloadihc {
      cursor: pointer;
    }
    #reloadstatus {
      display: inline-block;
      cursor: default;
    }
  `;

  static get styles(): CSSResultGroup {
    return [
      haStyle,
      HaPanelIHCViewer.panelStyles
    ];
  }


  render() {

    if (this.panel.config['ihcviewer'] == null) return html`No controllers`
    return html`
      <div id="ihcviewer"  @restartrequired=${this.onRestartRequired} @ihcreloaded=${this.onReloaded}>
        <div id="ihcviewerheader">
          <div id="title">IHC Viewer</div>
          ${this.render_restart()}
          ${this.render_controllersSelector()}
        </div>
        <div id="controllers">
          ${this.panel.config['ihcviewer'].map((controllerid, index) => html`
              <ihc-controller id="ihccontroller_${index}" controllerId="${controllerid}" show="${this.selectedcontrollerid == controllerid}"></ihc-controller>
          `)}
        </div>
      </div>
    `;
  }

  render_restart() {
    if (this.reloading)
      return html`<span id="reloadstatus">Reloading the ihc integration...</span>`;
    if (!this.restartRequired) return "";
    return html`
      <span>
        <button id="reloadihc" @click=${this.onReload}
          title="A change to the manual ihc setup is not in effect yet. Reload the ihc integration to try again.">Reload ihc</button>
        ${this.reloadFailed ? html`<span id="reloadstatus">The reload failed - see the Home Assistant log</span>` : ""}
      </span>`
  }

  render_controllersSelector() {
    if (this.panel.config['ihcviewer'].length <= 1) return html`<span></span>`;
    return html`
      <span id="controllerselector">
        <select @change=${this.onChangeController}>
          ${this.panel.config['ihcviewer'].map(id => html`<option value="${id}">${id}</option>`)}
        </select>
      </span>`;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    IHCManager.initialize(this.hass);
    // Select the first controller by default
    this.selectedcontrollerid = this.panel.config['ihcviewer'][0];
  }

  onChangeController(event) {
    this.selectedcontrollerid = event.target.value;
    this.requestUpdate();
  }

  onRestartRequired(event) {
    this.restartRequired = true;
    return false;
  }

  // A change was put into effect by the add or remove itself - redraw
  onReloaded(event) {
    this.restartRequired = false;
    this.reloadFailed = false;
    this.refreshControllers();
    return false;
  }

  // Reload the ihc integration by hand, for a change that could not be put
  // into effect when it was made. The ihc integration reads
  // ihc_manual_setup.yaml when its config entry is set up, so this does what a
  // Home Assistant restart used to do.
  async onReload() {
    if (this.reloading) return;
    this.reloading = true;
    this.reloadFailed = false;
    let response = await IHCManager.instance.fetchWithAuth(
      `/api/ihcviewer/reload/${this.selectedcontrollerid}`, { method: 'POST' });
    this.reloading = false;
    if (!response.ok) {
      this.reloadFailed = true;
      return;
    }
    this.restartRequired = false;
    await this.refreshControllers();
  }

  // The entities were made from scratch, so every controller redraws its tree
  async refreshControllers() {
    let controllers = this.shadowRoot.querySelectorAll("ihc-controller");
    for (let controller of Array.from(controllers) as IhcControllerElement[]) {
      await controller.refreshAfterReload();
    }
  }
}