import { html, css, customElement, property } from "lit-element";
import { IhcResourceDialog} from "./ihc-resource-dlg"

@customElement("ihc-binary-res-dlg")
export class IhcBinaryResourceDialog extends IhcResourceDialog {

  @property({ type: Boolean, attribute: false })
  public inverted: boolean;

  @property({ type: String, attribute: false })
  public type : string;

  constructor() {
    super();
    this.title = "Add a binary sensor";
  }

  static get styles() {
    return super.styles.concat( [
      css`
        #type {
          width: 100%;
        }
      `,
      ,
    ]);
  }

  render_controls() {
    return html`
      <div class="control-row">
        <input id="inverted" type="checkbox"/><label for="inverted">Inverted</label>
      </div>
      <div class="control-row">
        <div>Type</div>
        <select id="type">
          <option></option>
          <option>battery</option>
          <option>battery_charging</option>
          <option>cold</option>
          <option>connectivity</option>
          <option>door</option>
          <option>garage_door</option>
          <option>gas</option>
          <option>heat</option>
          <option>light</option>
          <option>lock</option>
          <option>moisture</option>
          <option>motion</option>
          <option>moving</option>
          <option>occupancy</option>
          <option>opening</option>
          <option>plug</option>
          <option>power</option>
          <option>presence</option>
          <option>safety</option>
          <option>smoke</option>
          <option>sound</option>
          <option>vibration</option>
          <option>window</option>
        </select>
      </div>
    `;
  }

  async onOk() {
    this.inverted = (<HTMLInputElement>this.shadowRoot.getElementById("inverted")).checked;
    this.type = (<HTMLSelectElement>this.shadowRoot.getElementById("type")).value;
    super.onOk();
  }

}
