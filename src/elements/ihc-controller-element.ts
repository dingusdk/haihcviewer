import { LitElement, html, css, customElement, property } from "lit-element";
import { haStyle } from "../../homeassistant-frontend/src/resources/styles"

import { IHCProject, IHCResource } from "../ihcproject";
import { IhcPropertiesElement } from "./ihc-properties-element"
import { IhcTreeNode, Selection } from "./ihc-tree-node"
import { IHCManager } from "../ihcmanager";

require("./ihc-info-element");
require("./ihc-log-element");
require("./ihc-properties-element");
require("./ihc-tree-node");

@customElement("ihc-controller")
export class IhcControllerElement extends LitElement {

  private ihcmapping;
//  @property({ attribute: false })
  private ihcproject: IHCProject;

  @property({ type: Boolean, attribute: true })
  public show;

  @property({ type: String, attribute: true })
  public controllerId;

  @property({ type: Boolean, attribute: false })
  public isProjectLoading = false;

  @property({ type: Object, attribute: false })
  public selected = null;

  @property({ type: Object, attribute: false })
  public onselected = null;

  @property({ type: Object, attribute: false })
  public offselected = null;

  // Selected tab index 0=Project, 1=Log, 2=Info
  @property({ type: Number, attribute: false })
  public selectedtab;

  static get styles() {
    return [
      haStyle,
      css`
      #content {
        height: 100%;
      }
      .flex-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
      #project {
        height: calc(100% - 33px);
      }
      #ihcprojecttree {
        padding-left: 10px;
        padding-top: 10px;
        flex-grow: 1;
        overflow-y: auto;
      }
      #ihcproperties {
        flex-grow: 0;
        border-top: 1px solid var(--divider-color);
        padding-bottom: 10px;
        padding-top: 10px;
        padding-left: 10px;
      }
      #log {
        height: calc(100% - 33px);
        padding-left: 10px;
      }
      #info {
        height: calc(100% - 33px);
        padding-left: 10px;
      }
      #controllertab {
        border-bottom: 1px solid var(--divider-color);
        border-top: 1px solid var(--divider-color);
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        cursor: default;
      }
      .tab-button {
        display: inline-block;
        font-size: 14px;
        padding: 6px 20px 6px 10px;
        cursor: pointer;
      }
      .tab-button.selected {
        background-color: var(--dark-primary-color);
        color: var(--text-primary-color);
        font-weight: bold;
      }
      `
    ];
  }

  render() {
    return html`
        ${ this.show ? "" : html`<style>#content { display:none}</style>`}
        ${ this.selectedtab == 0 ? html`` : html`<style>#project { display:none}</style>`}
        ${ this.selectedtab == 1 ? html`<style>#log { display:block}</style>` : html`<style>#log { display:none}</style>`}
        ${ this.selectedtab == 2 ? html`<style>#info { display:block}</style>` : html`<style>#info { display:none}</style>`}
        <div id="content" class="flex-container">
          <div id="controllertab">
            <div class="tab-button ${this.selectedtab == 0 ? 'selected' : ''}" @click=${this.selectTab} data-tabid='0'>Project</div>
            <div class="tab-button ${this.selectedtab == 1 ? 'selected' : ''}" @click=${this.selectTab} data-tabid='1'>Log</div>
            <div class="tab-button ${this.selectedtab == 2 ? 'selected' : ''}" @click=${this.selectTab} data-tabid='2'>Info</div>
          </div>
          <div id="project" class="flex-container">
            ${this.isProjectLoading ? html`<div class="loader"></div>` : ""}
            <div id="ihcprojecttree" @select=${this.onSelectNode}>
              ${this.render_groups()}
            </div>
            <ihc-properties id="ihcproperties" controllerId="${this.controllerId}"></ihc-properties>
          </div>
          <div id="log">
            <ihc-log id="ihclog" controllerId="${this.controllerId}"></ihc-log>
          </div>
          <div id="info">
            <ihc-info id="ihcinfo" controllerId="${this.controllerId}"></ihc-info>
          </div>
      </div>
    `;
  }

  render_groups() {

    if (this.ihcproject == null || this.isProjectLoading) return "";
    return this.ihcproject.Groups.map( item => html`
      <ihc-tree-node id="group_${item.Id}"></ihc-tree-node>
    `);
  }

  constructor() {
    super();
    this.isProjectLoading = false;
    this.ihcproject = null;
    this.ihcmapping = null;
    this.selectedtab = 0;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.loadController();
  }

  async updated(changedProps) {
    super.updated(changedProps);

    if (this.ihcproject == null) return;
    this.ihcproject.Groups.map((item) => {
      var treenode = this.shadowRoot.getElementById(`group_${item.Id}`) as IhcTreeNode;
      treenode.data = item;
    });
  }

  async loadController() {
    this.isProjectLoading = true;
    this.ihcmapping = await IHCManager.instance.get(this.controllerId).getMapping();
    // If any entityes are new will we require restart
    for (let id in this.ihcmapping) {
      let entity = this.ihcmapping[id];
      if ('changed' in entity) {
        let restartevent = new CustomEvent("restartrequired", { bubbles: true, composed: true});
        this.dispatchEvent(restartevent);
        break;
      }
    }
    this.ihcproject = await IHCManager.instance.get(this.controllerId).getProject();
    if (this.ihcproject) {
      this.updateProject( this.ihcproject);
    }
    this.isProjectLoading = false;
  }

  // Update the iconclass of connected resources
  updateProject(project) {
    for (let group of project.Groups) {
      group.iconclass = "groupicon";
      group.Children = [];
      for (let product of group.Products) {
        group.Children.push(product);
        product.iconclass = "producticon";
        product.Children = [];
        for (let input of product.Inputs) {
          product.Children.push(input);
          input.iconclass = "inputicon";
          if (input.Id in this.ihcmapping) input.iconclass += " connected";
        }
        for (let output of product.Outputs) {
          product.Children.push(output);
          output.iconclass = "outputicon";
          if (output.Id in this.ihcmapping) output.iconclass += " connected";
        }
      }
      for (let fn of group.FunctionBlocks) {
        group.Children.push(fn);
        fn.iconclass = "functionicon";
        fn.Children = [];
        for (let input of fn.Inputs) {
          fn.Children.push(input);
          input.iconclass = "inputicon";
          if (input.Id in this.ihcmapping) input.iconclass += " connected";
        }
        for (let output of fn.Outputs) {
          fn.Children.push(output);
          output.iconclass = "outputicon";
          if (output.Id in this.ihcmapping) output.iconclass += " connected";
        }
      }
    }
    this.ihcproject = project;
  }

  async onSelectNode(event) {
    var properties: IhcPropertiesElement = this.shadowRoot.getElementById("ihcproperties") as IhcPropertiesElement;
    var node = event?.detail?.node;
    // When shift is down we have multiselect
    if (this.selected && event.detail.shiftKey) {
      if (this.selected == node) return false;
      if (this.offselected) return false;
      if (this.onselected) {
        if (this.onselected == node) return false;
        this.offselected = node;
        node.selected = Selection.OffIdSelected;
      }
      else {
        this.onselected = node;
        node.selected = Selection.OnIdSelected;
      }
      properties.setSelected( this.selected,this.onselected?.data.Id,this.offselected?.data.Id);
      return false;
    }
    if (this.selected) {
      this.selected.selected = Selection.NotSelected;
      this.selected = null;
      if (this.onselected) {
        this.onselected.selected = Selection.NotSelected;
        this.onselected = null;
      }
      if (this.offselected) {
        this.offselected.selected = Selection.NotSelected;
        this.offselected = null;
      }
      properties.setSelected(null);
    }
    if (node == null) return false;
    this.selected = node;
    this.selected.selected = Selection.Selected;
    if ( node.data instanceof IHCResource) {
      properties.setSelected( this.selected);
    }
    return false;
  }

  selectTab(event) {
    var tab = event.target.attributes['data-tabid'].value;
    this.selectedtab = tab;
  }

}
