var instance = null;

class IhcResourceNode extends Polymer.Element {
  static get is() {
    return "ihc-resource";
  }
  static get properties() {
    return {
      data: {
        type: Object,
      },
      expanded: {
        type: Boolean,
      },
      iconclass: {
        type: String,
      },
      expandclass: {
        type: String,
      },
    };
  }

  select() {
    instance.selectedresource = this.data;
    instance.selectedtype = "";
    instance.selectedvalue = "";
    $.ajax({
      type: "GET",
      url: "/api/ihc/getvalue",
      async: true,
      data: { id: this.data.Id },
      cache: false,
      success: (result) => {
        instance.selectedtype = result.type;
        instance.selectedvalue = result.value;
      },
    });
  }
}


class HaPanelIHCViewer extends Polymer.Element {

  static get is() {
    return "ha-panel-ihcviewer";
  }

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
    };
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
  }

  connectedCallback() {
    super.connectedCallback();
    this.isProjectLoading = true;
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
            }
            for (let output of product.Outputs) {
              product.Children.push(output);
              output.iconclass = "outputicon";
            }
          }
          for (let fn of group.FunctionBlocks) {
            group.Children.push(fn);
            fn.iconclass = "functionicon";
            fn.Children = [];
            for (let input of fn.Inputs) {
              fn.Children.push(input);
              input.iconclass = "inputicon";
            }
            for (let output of fn.Outputs) {
              fn.Children.push(output);
              output.iconclass = "outputicon";
            }
          }
        }
        this.ihcproject = project;
        this.isProjectLoading = false;
        this.isLogLoading = true;
        $.ajax({
          url: "/api/ihc/log",
          headers: {
            Authorization:
              "Bearer " + this.hass.connection.options.auth.accessToken,
          },
          async: true,
          success: (result) => {
            this.log = result;
            this.isLogLoading = false;
          },
        });
      },
    });
  }

  ready() {
    super.ready();
    this.addEventListener("select", this._OnSelectNode);
  }

  _OnSelectNode(e) {
    if (this.selected) {
      this.selected.selected = false;
      this.selected = null;
    }
    var node = e.detail.node;
    if (!(node.data instanceof IHCResource)) {
      this.selected = null;
      return false;
    }
    this.selected = e.detail.node;
    if (this.selected == null) return false;
    this.selected.selected = true;
    this.selectedtype = "";
    this.selectedvalue = "";
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

customElements.define(HaPanelIHCViewer.is, HaPanelIHCViewer);
