import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export enum Selection {
  NotSelected,
  Selected,
  OnIdSelected,
  OffIdSelected,
};

@customElement("ihc-tree-node")
export class IhcTreeNode extends LitElement {

  @property({ type: Object })
  public data = null;

  @property({ type: Boolean })
  public expanded = false;

  @property({ type: Number })
  public selected: Selection = Selection.NotSelected;

  static get styles() {
    return css`
      .treeicon {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        vertical-align: middle;
      }
      .treeicon svg {
        display: none;
      }
      span.connection svg {
        display: inline-block;
        position: absolute;
        left: -16px;
        top: 0;
      }
      .connected span.connection {
        display: block;
        position: relative;
        width: 0;
        height: 0;
      }
      .groupicon svg.groupicon {
        display: inline-block;
      }
      .producticon svg.producticon {
        display: inline-block;
      }
      .functionicon svg.functionicon {
        display: inline-block;
      }
      .inputicon svg.inputicon {
        display: inline-block;
      }
      .outputicon svg.outputicon {
        display: inline-block;
      }
      .expandicon {
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;
        vertical-align: middle;
      }
      .treenode.selected {
        background-color: var(--primary-color);
      }
      .treetext.onselected::after {
        content: "on_id";
        font-size: 12px;
        font-weight: bold;
        vertical-align: super;
        padding: 0px 5px 0px 5px
      }
      .treetext.offselected::after {
        content: "off_id";
        font-size: 12px;
        font-weight: bold;
        vertical-align: super;
        padding: 0px 5px 0px 5px
      }
      .treetext {
        cursor: default;
        font-size: 16px;
        vertical-align: middle;
      }
      .treeinfo {
        font-size: 0.8em;
        cursor: default;
      }
      div.treenode {
        width: fit-content;
        user-select: none;
      }
      div.treenode ul {
        margin-top: 0;
      }
    `;
  }

  render() {
    return html`
      <div id="treenode" class="treenode ${this.getNodeClasses()}">
        <span style="display: flex; flex-direction: row">
          <span>
            ${this.render_expandicon()}
            <span class="treeicon ${this.data.iconclass}">
              <span class="connection">
                <svg style="width: 16px; height: 16px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M11 15H6L13 1V9H18L11 23V15Z" />
                </svg>
              </span>
              <svg class="groupicon" style="width: 16px; height: 16px" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" />
              </svg>
              <svg class="producticon" style="width: 16px; height: 16px" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z" />
              </svg>
              <svg class="functionicon" style="width: 16px; height: 16px" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M9,7H15V9H11V11H14V13H11V17H9V7M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z" />
              </svg>
              <svg class="inputicon" style="width: 16px; height: 16px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
              </svg>
              <svg class="outputicon" style="width: 16px; height: 16px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
              </svg>
            </span>
          </span>
          <span style="display: flex; flex-direction: column">
            <span class="treetext ${this.getTextClasses()}" @click=${this.select}>${this.data.Name}</span>
            ${this.data.Note
        ? html` <span class="treeinfo">Note: ${this.data.Note}</span> `
        : ""
      }
            ${this.data.Position ?
        html`<span class="treeinfo">Position: ${this.data.Position}</span>` : ""
      }
          </span>
        </span>
        ${this.render_children()}
      </div>
      </template>
    `;
  }

  render_expandicon() {

    if (!this.data.Children) return "";
    let icon = this.expanded ? html`
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1" width="16" height="16" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
        />
      </svg>` :
      html`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1" width="16" height="16" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
      />
      </svg>`;

    return html`<span class="${this.getExpandClasses(this.expanded)}" @click=${this.toggleExpand}>
      ${icon}
    </span>`;
  }

  render_children() {

    if (!this.expanded) return "";
    var children = [];
    if (this.data.Children) {
      children = this.data.Children.map(
        (child) => html`<ihc-tree-node id="treenode_${child.Id}"></ihc-tree-node>`
      );
    }
    return html` <ul>${children}</ul>`;
  }

  constructor() {
    super();
    this.expanded = false;
    this.selected = Selection.NotSelected;
  }

  async firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
  }

  async updated(changedProps) {
    super.updated(changedProps);

    if (this.data.Children) {
      this.data.Children.map((child) => {
        var treenode = this.shadowRoot.getElementById(`treenode_${child.Id}`) as IhcTreeNode;
        if (treenode) {
          treenode.data = child;
        }
      });
    }
  }

  getExpandClasses(expanded) {
    return expanded ? "expandicon expanded" : "expandicon";
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  getNodeClasses() {
    let cls = "";
    if (this.selected >= Selection.Selected) cls = "selected";
    return cls;
  }

  getTextClasses() {

    let cls = "";
    if (this.selected == Selection.OnIdSelected) cls += " onselected";
    if (this.selected == Selection.OffIdSelected) cls += " offselected";
    return cls;
  }

  select(event) {
    this.dispatchEvent(
      new CustomEvent("select", {
        bubbles: true,
        composed: true,
        detail: {
          node: this,
          shiftKey: event.shiftKey
        },
      })
    );
  }
}
