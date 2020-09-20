import "./jquery-2.2.3.min.js"
import "./ihc-tree-node.js"
import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

var instance = null;

class HaPanelIHCViewer extends LitElement {

  static get properties() {
    return {
      // Home Assistant object
      hass: Object,
      // If should render in narrow mode
      narrow: {
        type: Boolean,
        value: false,
      },
      // If sidebar is currently shown
      showMenu: {
        type: Boolean,
        value: false,
      },
      // Home Assistant panel info
      // panel.config contains config passed to register_panel serverside
      panel: Object,
      log: {
        type: String,
      },
      isProjectLoading: {
        type: Boolean,
      },
      isLogLoading: {
        type: Boolean,
      },
      selectedtab: {
        type: Number,
      },
      ihcproject: {
        type: Object,
      },
      selected: {
        type: Object,
        value: null,
        notify: true,
      },
      selectedtype: {
        type: String,
      },
      selectedvalue: {
        type: Object,
      },
      selectedentity: {
        type: Object,
      }
    };
  }

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
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
      }
      /* Safari */
      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
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
    const gruopitems = this.ihcproject.Groups.map(item => html`
      <ihc-tree-node data="${JSON.stringify(item)}"></ihc-tree-node>
      `
    )
    return html`
    <div id="ihcviewer" class="flex-contianer">
      <div id="title">IHC Viewer</div>
      <div id="content" class="flex-contianer">
        <div class="topbox">
          ${this.isProjectLoading ? html`<div class='loader'></div>` : ""}
          <div id="ihcprojecttree">
            <ul>${gruopitems}</ul>
          </div>
          <div id="log">
            <h2>IHC controller log:</h2>
            ${this.isLogLoading ? html`<div class='loader'></div>` : ''}
            <pre id="ihc_log" hidden$="[[isLogLoading]]">${this.log}</pre>
          </div>
        </div>
        <div id="ihcproperties">
          ${this.selected ? html`
            <div>
                <span>Resource id:</span>
                <span id="resourceid"> ${this.selected.data.Id}</span>
                <span
                  id="copyres"
                  title="copy resource id to clipboard"
                  @click=${this.OnCopy}
                >
                  <svg style="width: 16px; height: 16px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                    />
                  </svg>
                </span>
              </div>
              <div><span>Type:</span><span> ${this.selectedtype}</span></div>
              <div><span>Value:</span><span> ${this.selectedvalue}</span></div>
              <div><span>Entity:</span><span> ${this.selectedentity}</span></div>
          ` : ''}
        </div>
      </div>
    </div>
    `;
  }

  constructor() {
    super();
    instance = this;
    this.isProjectLoading = false;
    this.isLogLoading = false;
    this.log = "";
    this.selectedtab = 0;
    this.ihcproject = null;
    this.selectedresource = null;
    this.ihcmapping = null;
    $.getScript("/ihcviewer/ihcproject.js");
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("select", this._OnSelectNode);
    this.ihcMappingRequest();
  }

  ihcMappingRequest() {

    this.isProjectLoading = true;
    $.ajax({
      type: "GET",
      url: "/api/ihc/mapping",
      headers: {
        Authorization:
          "Bearer " + this.hass.connection.options.auth.accessToken,
      },
      async: true,
      cache: false,
      success: (result) => {
        this.ihcmapping = result;
        this.projectRequest();
      },
    });
  }


  projectRequest() {

    $.ajax({
      type: "GET",
      url: "/api/ihc/project",
      headers: {
        Authorization:
          "Bearer " + this.hass.connection.options.auth.accessToken,
      },
      async: true,
      cache: false,
      success: (result) => {
        var project = new IHCProject(result);
        this.updateProject(project);
        this.isProjectLoading = false;
        this.logRequest();
      },
    });
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
          if (input.Id in this.ihcmapping)
            input.iconclass += " connected";
        }
        for (let output of product.Outputs) {
          product.Children.push(output);
          output.iconclass = "outputicon";
          if (output.Id in this.ihcmapping)
            output.iconclass += " connected";
        }
      }
      for (let fn of group.FunctionBlocks) {
        group.Children.push(fn);
        fn.iconclass = "functionicon";
        fn.Children = [];
        for (let input of fn.Inputs) {
          fn.Children.push(input);
          input.iconclass = "inputicon";
          if (input.Id in this.ihcmapping)
            input.iconclass += " connected";
        }
        for (let output of fn.Outputs) {
          fn.Children.push(output);
          output.iconclass = "outputicon";
          if (output.Id in this.ihcmapping)
            output.iconclass += " connected";
        }
      }
    }
    this.ihcproject = project;
  }

  logRequest() {
    this.isLogLoading = true;
    $.ajax({
      url: "/api/ihc/log",
      headers: {
        Authorization:
          "Bearer " + this.hass.connection.options.auth.accessToken,
      },
      async: true,
      success: (result) => {
        if (result == "")
          this.log = "Log is empty";
        else
          this.log = result;
        this.isLogLoading = false;
      },
    });
  }

  _OnSelectNode(e) {
    if (this.selected) {
      this.selected.selected = false;
      this.selected = null;
    }
    var node = e.detail.node;
    if (node.data.iconclass.startsWith('inputicon') &&
      node.data.iconclass.startsWith('outputicon')) {
      this.selected = null;
      return false;
    }
    this.selected = e.detail.node;
    if (this.selected == null) return false;
    this.selected.selected = true;
    this.selectedtype = "";
    this.selectedvalue = "";
    this.selectedentity = "";
    $.ajax({
      type: "GET",
      url: "/api/ihc/getvalue",
      headers: {
        Authorization:
          "Bearer " + this.hass.connection.options.auth.accessToken,
      },
      async: true,
      data: { id: this.selected.data.Id },
      cache: false,
      success: (result) => {
        this.selectedtype = result.type;
        this.selectedvalue = result.value;
        this.selectedentity = result.entity;
      },
    });
    return false;
  }

  OnCopy() {
    this.copyTextToClipboard(this.selected.data.Id);
  }

  copyTextToClipboard(txt) {
    //source: http://stackoverflow.com/a/30810322/1016548
    var textArea = document.createElement('textarea');
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
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;
    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';
    textArea.value = txt;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
}


customElements.define('ha-panel-ihcviewer', HaPanelIHCViewer);
