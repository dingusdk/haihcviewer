import { LitElement, html, css, customElement, property } from "lit-element";
import { haStyle } from "../homeassistant-frontend/src/resources/styles"
import { IHCManager } from "./ihcmanager";

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

  // Set to true when a restart of home assistant is required
  @property({ type: Boolean, attribute: false })
  public restartRequired = false;

  static get styles() {
    return [
      haStyle,
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
      #restartrequired {
        display: inline-block;
        animation: blinker 1s linear infinite;
        cursor: default;
      }
      @keyframes blinker { 50% { opacity: 0;}}
    `];
  }


  render() {

    if (this.panel.config['ihcviewer'] == null) return html`No controllers`
    return html`
      <div id="ihcviewer"  @restartrequired=${this.onRestartRequired}>
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
    if (!this.restartRequired) return "";
    return html`<span id="restartrequired" title="You have made changes to the manual ihc setup that will require a Home Assistant restart.">Restart required</span>`
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
  }

  onRestartRequired( event) {
    this.restartRequired = true;
    return false;
  }
}