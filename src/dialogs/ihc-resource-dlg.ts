import { LitElement, html, css, customElement, property, CSSResult } from "lit-element";


// Base class for all resource dialogs
@customElement("ihc-resource-dlg")
export class IhcResourceDialog extends LitElement {

  @property({ type: String, attribute: false })
  public controllerId: string;

  @property({ type: Number, attribute: false })
  public ihc_id: number;

  @property({ type: Number, attribute: false })
  public on_id: number;

  @property({ type: Number, attribute: false })
  public off_id: number;

  @property({ type: String })
  public title: string;

  @property({ type: String, attribute: false })
  public name: string;

  static get button_style() {
    return css`
      button {
        border-radius: 4px;
        background-color: var(--mdc-theme-primary, #6200ee);
        color: var(--mdc-theme-on-primary, #fff);
        padding: 5px 10px 5px 10px;
        border: none;
        border-radius: var(--ha-card-border-radius, 4px);
        box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
      }`;
  }

  static get styles() {
    return [
      IhcResourceDialog.button_style,
      css`
      #dlgmask {
        display:none;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: 8000;
        background-color: #80808080;
      }
      .dlg {
        display: none;
        border: 2px solid var(--divider-color);
        padding: 10px 20px 10px 20px;
        position: absolute;
        left: 100px;
        bottom: calc( 0% + 100px);
        z-index: 8001;
        background-color: var(--primary-background-color);
      }
      .dlgtitle {
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 10px;
      }
      .coloumn {
        display: flex;
        flex-direction: column;
        width: fit-content;
      }
      .row {
        display: flex;
        flex-direction: row;
      }
      .control-row {
        display: inline-block;
        padding-bottom: 8px;
      }
      .buttonrow {
        text-align:center;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .buttonrow button {
        width: 6em;
      }
    `];
  }

  render() {
    return html`
      <div id="dlgmask"></div>
      <div id="dlg" class="dlg">
        <div class="dlgtitle">${this.title}</div>
        <div class="coloumn">
          <div class="control-row">
            <div>IHC Resourceid: ${this.ihc_id}</div>
          </div>
          ${this.on_id ? html`
            <div class="control-row">
              <div>on_id: ${this.on_id}</div>
            </div>
          `: ''}
          ${this.off_id ? html`
            <div class="control-row">
              <div>off_id: ${this.off_id}</div>
            </div>
          `: ''}
          <div class="control-row">
            <div>Name</div>
            <input id="name" type="text" size="30"/>
          </div>
          ${this.render_controls()}
          <slot></slot>
        </div>
        <div class="buttonrow">
            <button @click=${this.onOk}>Ok</button>
            <button @click="${this.onCancel}">Cancel</button>
          </div>
      </div>
    `;
  }

  async firstUpdated( changedProperties) {
    super.firstUpdated(changedProperties);

    this.shadowRoot.getElementById("name").focus();
  }

  // Derived classes will overwrite this to add more
  render_controls() {
    return html``;
  }

  open() {
    this.shadowRoot.getElementById("dlgmask").style.display = 'block';
    this.shadowRoot.getElementById("dlg").style.display = 'block';
  }

  close() {
    this.shadowRoot.getElementById("dlgmask").style.display = 'none';
    this.shadowRoot.getElementById("dlg").style.display = 'none';
  }

  async onOk() {
    this.name = (<HTMLInputElement>this.shadowRoot.getElementById("name")).value
    if (this.name == "") {
      alert("You must specify a name");
      return;
    }
    this.close();
    this.dispatchEvent(new CustomEvent('ok'));
  }

  onCancel() {
    this.close();
  }
}
