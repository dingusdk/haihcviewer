import { html, css, customElement, property } from "lit-element";
import { IhcResourceDialog} from "./ihc-resource-dlg"

@customElement("ihc-sensor-res-dlg")
export class IhcSensorResourceDialog extends IhcResourceDialog {

  @property({ type: String, attribute: false })
  public unit : string;

  constructor() {
    super();
    this.title = "Add a sensor";
  }

  static get styles() {
    return super.styles.concat(
      css`
      `
    );
  }

  render_controls() {
    return html`
      <div class="controll-row">
        <div>Unit of measurement (optional)</div>
        <input id="unit" type="text" size="30" list="common-units"/>
        <datalist id="common-units">
          <option>%</option>
          <option>% RH</option>
          <option>°C</option>
          <option>kW</option>
          <option>kWh</option>
          <option>Lux</option>
          <option>W</option>
          <option>Wh</option>
        </datalist>
      </div>
    `;
  }

  async onOk() {
    this.unit  = (<HTMLInputElement>this.shadowRoot.getElementById("unit")).value;
    super.onOk();
  }
}
