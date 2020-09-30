import { LitElement, html, css, customElement, property } from "lit-element";

import { IHCProject } from "./ihcproject";
//import { IhcTreeNode } from "./ihc-tree-node";
require("./ihc-tree-node");

var instance = null;

@customElement("ha-panel-ihcviewer")
export class HaPanelIHCViewer extends LitElement {
  // Home Assistant object
  @property({ type: Object, reflect: true })
  public hass;

  // If should render in narrow mode
  @property({ type: Boolean, reflect: true })
  public narrow;

  // If sidebar is currently shown
  @property({ type: Boolean, reflect: true })
  public showMenu;

  // Home Assistant panel info
  // panel.config contains config passed to register_panel serverside
  @property({ type: Object, reflect: true })
  public panel;

  @property({ type: String })
  public log = "";

  @property({ type: Boolean })
  public isProjectLoading = false;

  @property({ type: Boolean })
  public isLogLoading = false;

  @property({ type: Object })
  public selected = null;

  @property({ type: String })
  public selectedtype = "";

  @property({ type: String })
  public selectedvalue = "";

  @property({ type: String })
  public selectedentity;

  static get styles() {
    return css`
      #ihcviewer {
        width: 100%;
        height: calc(100% - 10px);
      }
      #title {
        background-color: var(--app-header-background-color);
        color: var(--app-header-text-color);
        font-size: x-large;
        padding: 15px;
        flex: 0;
        height: 50px;
      }
      #content {
        height: calc(100% - 50px);
      }
      .flex-contianer {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }
      .topbox {
        flex: 1;
        overflow-y: auto;
      }
      #log {
        padding: 10px;
      }
      #ihcproperties {
        flex: 0;
        padding-top: 5px;
        padding-left: 20px;
        height: 100px;
        font-size: 14px;
        border-top: solid 1px gray;
        background-color: var(--primary-background-color);
        cursor: default;
      }
      #copyres {
        cursor: pointer;
      }
      h2 {
        font-size: large;
        font-weight: normal;
      }
      /* spinner */
      .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 50px;
        height: 50px;
        animation: spin 2s linear infinite;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `;
  }

  render() {
    const gruopitems = this.ihcproject.Groups.map(
      (item) => html`
        <ihc-tree-node data="${JSON.stringify(item)}"></ihc-tree-node>
      `
    );
    return html`
      <div id="ihcviewer" class="flex-contianer">
        <div id="title">IHC Viewer</div>
        <div id="content" class="flex-contianer">
          <div class="topbox">
            ${this.isProjectLoading ? html`<div class="loader"></div>` : ""}
            <div id="ihcprojecttree">
              <ul>
                ${gruopitems}
              </ul>
            </div>
            <div id="log">
              <h2>IHC controller log:</h2>
              ${this.isLogLoading ? html`<div class="loader"></div>` : ""}
              <pre id="ihc_log">${this.log}</pre>
            </div>
          </div>
          <div id="ihcproperties">
            ${this.selected
              ? html`
                  <div>
                    <span>Resource id:</span>
                    <span id="resourceid"> ${this.selected.data.Id}</span>
                    <span
                      id="copyres"
                      title="copy resource id to clipboard"
                      @click=${this.OnCopy}
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
                    <span>Type:</span><span> ${this.selectedtype}</span>
                  </div>
                  <div>
                    <span>Value:</span><span> ${this.selectedvalue}</span>
                  </div>
                  <div>
                    <span>Entity:</span><span> ${this.selectedentity}</span>
                  </div>
                `
              : ""}
          </div>
        </div>
      </div>
    `;
  }

  private ihcproject;
  private ihcmapping;
  private headers;

  constructor() {
    super();
    instance = this;
    this.isProjectLoading = false;
    this.isLogLoading = false;
    this.log = "";
    this.ihcproject = null;
    this.ihcmapping = null;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.addEventListener("select", this._OnSelectNode);
    this.isProjectLoading = true;
    this.headers = {
      headers: {
        Authorization:
          "Bearer " + this.hass.connection.options.auth.accessToken,
      },
    };
    await this.ihcMappingRequest();
    await this.projectRequest();
    this.isProjectLoading = false;
    await this.logRequest();
  }

  async ihcMappingRequest() {
    let response = await fetch("/api/ihcviewer/mapping", this.headers);
    if (response.ok) {
      this.ihcmapping = await response.json();
    }
  }
  async projectRequest() {
    let response = await fetch("/api/ihcviewer/project", this.headers);
    if (response.ok) {
      let projectdata = await response.text();
      let xmlparser = new DOMParser();
      let projectxml = xmlparser.parseFromString(projectdata, "text/xml");
      let project = new IHCProject(projectxml);
      this.updateProject(project);
    }
  }

  async logRequest() {
    this.isLogLoading = true;
    let response = await fetch("/api/ihcviewer/log", this.headers);
    if (response.ok) {
      let txt = await response.text();
      if (txt == "") {
        this.log = "Log is empty";
      } else {
        this.log = txt;
      }
    }
    this.isLogLoading = false;
  }

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

  async _OnSelectNode(e) {
    if (this.selected) {
      this.selected.selected = false;
      this.selected = null;
    }
    var node = e.detail.node;
    if (
      node.data.iconclass.startsWith("inputicon") &&
      node.data.iconclass.startsWith("outputicon")
    ) {
      this.selected = null;
      return false;
    }
    this.selected = e.detail.node;
    if (this.selected == null) return false;
    this.selected.selected = true;
    this.selectedtype = "";
    this.selectedvalue = "";
    this.selectedentity = "";
    let response = await fetch(
      "/api/ihcviewer/getvalue?id=" + this.selected.data.Id,
      this.headers
    );
    if (response.ok) {
      let result = await response.json();
      this.selectedtype = result.type;
      this.selectedvalue = result.value;
      this.selectedentity = result.entity;
    }
    return false;
  }

  OnCopy() {
    this.copyTextToClipboard(this.selected.data.Id);
  }

  copyTextToClipboard(txt) {
    //source: http://stackoverflow.com/a/30810322/1016548
    var textArea = document.createElement("textarea");
    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a flash,
    // so some of these are just precautions. However in IE the element
    // is visible whilst the popup box asking the user for permission for
    // the web page to copy to the clipboard.
    //
    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = "0";
    // Clean up any borders.
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = "transparent";
    textArea.value = txt;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
}
