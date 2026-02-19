/*! For license information please see panel.js.LICENSE.txt */
(()=>{"use strict";var t={679(t,e,i){i.d(e,{RF:()=>s});var o=i(174);const n=o.AH`
  button.link {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    text-align: left;
    text-decoration: underline;
    cursor: pointer;
    outline: none;
  }
`,s=o.AH`
  :host {
    font-family: var(--paper-font-body1_-_font-family);
    -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
    font-size: var(--paper-font-body1_-_font-size);
    font-weight: var(--paper-font-body1_-_font-weight);
    line-height: var(--paper-font-body1_-_line-height);
  }

  app-header div[sticky] {
    height: 48px;
  }

  app-toolbar [main-title] {
    margin-left: 20px;
    margin-inline-start: 20px;
    margin-inline-end: initial;
  }

  h1 {
    font-family: var(--paper-font-headline_-_font-family);
    -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
    white-space: var(--paper-font-headline_-_white-space);
    overflow: var(--paper-font-headline_-_overflow);
    text-overflow: var(--paper-font-headline_-_text-overflow);
    font-size: var(--paper-font-headline_-_font-size);
    font-weight: var(--paper-font-headline_-_font-weight);
    line-height: var(--paper-font-headline_-_line-height);
  }

  h2 {
    font-family: var(--paper-font-title_-_font-family);
    -webkit-font-smoothing: var(--paper-font-title_-_-webkit-font-smoothing);
    white-space: var(--paper-font-title_-_white-space);
    overflow: var(--paper-font-title_-_overflow);
    text-overflow: var(--paper-font-title_-_text-overflow);
    font-size: var(--paper-font-title_-_font-size);
    font-weight: var(--paper-font-title_-_font-weight);
    line-height: var(--paper-font-title_-_line-height);
  }

  h3 {
    font-family: var(--paper-font-subhead_-_font-family);
    -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
    white-space: var(--paper-font-subhead_-_white-space);
    overflow: var(--paper-font-subhead_-_overflow);
    text-overflow: var(--paper-font-subhead_-_text-overflow);
    font-size: var(--paper-font-subhead_-_font-size);
    font-weight: var(--paper-font-subhead_-_font-weight);
    line-height: var(--paper-font-subhead_-_line-height);
  }

  a {
    color: var(--primary-color);
  }

  .secondary {
    color: var(--secondary-text-color);
  }

  .error {
    color: var(--error-color);
  }

  .warning {
    color: var(--error-color);
  }

  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }

  ${n}

  .card-actions a {
    text-decoration: none;
  }

  .card-actions .warning {
    --mdc-theme-primary: var(--error-color);
  }

  .layout.horizontal,
  .layout.vertical {
    display: flex;
  }
  .layout.inline {
    display: inline-flex;
  }
  .layout.horizontal {
    flex-direction: row;
  }
  .layout.vertical {
    flex-direction: column;
  }
  .layout.wrap {
    flex-wrap: wrap;
  }
  .layout.no-wrap {
    flex-wrap: nowrap;
  }
  .layout.center,
  .layout.center-center {
    align-items: center;
  }
  .layout.bottom {
    align-items: flex-end;
  }
  .layout.center-justified,
  .layout.center-center {
    justify-content: center;
  }
  .flex {
    flex: 1;
    flex-basis: 0.000000001px;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }
  .layout.justified {
    justify-content: space-between;
  }
`;o.AH`
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-max-width: min(600px, 95vw);
    --justify-action-buttons: space-between;
  }

  ha-dialog .form {
    color: var(--primary-text-color);
  }

  a {
    color: var(--primary-color);
  }

  /* make dialog fullscreen on small screens */
  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      --mdc-dialog-min-width: calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );
      --mdc-dialog-max-width: calc(
        100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
      );
      --mdc-dialog-min-height: 100%;
      --mdc-dialog-max-height: 100%;
      --vertical-align-dialog: flex-end;
      --ha-dialog-border-radius: 0;
    }
  }
  mwc-button.warning,
  ha-button.warning {
    --mdc-theme-primary: var(--error-color);
  }
  .error {
    color: var(--error-color);
  }
`,o.AH`
  .ha-scrollbar::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  .ha-scrollbar::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: var(--scrollbar-thumb-color);
  }

  .ha-scrollbar {
    overflow-y: auto;
    scrollbar-color: var(--scrollbar-thumb-color) transparent;
    scrollbar-width: thin;
  }
`,o.AH`
  body {
    background-color: var(--primary-background-color);
    color: var(--primary-text-color);
    height: calc(100vh - 32px);
    width: 100vw;
  }
`},531(t,e,i){i.r(e),i.d(e,{IhcBinaryResourceDialog:()=>l});var o=i(791),n=i(805),s=i(174),r=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let l=class extends n.IhcResourceDialog{constructor(){super(),this.title="Add a binary sensor"}static get styles(){return super.styles.concat([s.AH`
        #type {
          width: 100%;
        }
      `,,])}render_controls(){return s.qy`
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
    `}onOk(){const t=Object.create(null,{onOk:{get:()=>super.onOk}});return e=this,i=void 0,n=function*(){this.inverted=this.shadowRoot.getElementById("inverted").checked,this.type=this.shadowRoot.getElementById("type").value,t.onOk.call(this)},new((o=void 0)||(o=Promise))(function(t,s){function r(t){try{a(n.next(t))}catch(t){s(t)}}function l(t){try{a(n.throw(t))}catch(t){s(t)}}function a(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o(function(t){t(i)})).then(r,l)}a((n=n.apply(e,i||[])).next())});var e,i,o,n}};r([(0,o.MZ)({type:Boolean,attribute:!1})],l.prototype,"inverted",void 0),r([(0,o.MZ)({type:String,attribute:!1})],l.prototype,"type",void 0),l=r([(0,o.EM)("ihc-binary-res-dlg")],l)},805(t,e,i){i.r(e),i.d(e,{IhcResourceDialog:()=>a});var o,n=i(174),s=i(791),r=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},l=function(t,e,i,o){return new(i||(i=Promise))(function(n,s){function r(t){try{a(o.next(t))}catch(t){s(t)}}function l(t){try{a(o.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(r,l)}a((o=o.apply(t,e||[])).next())})};let a=o=class extends n.WF{static get button_style(){return n.AH`
      button {
        border-radius: 4px;
        background-color: var(--mdc-theme-primary, #6200ee);
        color: var(--mdc-theme-on-primary, #fff);
        padding: 5px 10px 5px 10px;
        border: none;
        border-radius: var(--ha-card-border-radius, 4px);
        box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
      }`}static get styles(){return[o.button_style,n.AH`
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
    `]}render(){return n.qy`
      <div id="dlgmask"></div>
      <div id="dlg" class="dlg">
        <div class="dlgtitle">${this.title}</div>
        <div class="coloumn">
          <div class="control-row">
            <div>IHC Resourceid: ${this.ihc_id}</div>
          </div>
          ${this.on_id?n.qy`
            <div class="control-row">
              <div>on_id: ${this.on_id}</div>
            </div>
          `:""}
          ${this.off_id?n.qy`
            <div class="control-row">
              <div>off_id: ${this.off_id}</div>
            </div>
          `:""}
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
    `}firstUpdated(t){const e=Object.create(null,{firstUpdated:{get:()=>super.firstUpdated}});return l(this,void 0,void 0,function*(){e.firstUpdated.call(this,t),this.shadowRoot.getElementById("name").focus()})}render_controls(){return n.qy``}open(){this.shadowRoot.getElementById("dlgmask").style.display="block",this.shadowRoot.getElementById("dlg").style.display="block"}close(){this.shadowRoot.getElementById("dlgmask").style.display="none",this.shadowRoot.getElementById("dlg").style.display="none"}onOk(){return l(this,void 0,void 0,function*(){this.name=this.shadowRoot.getElementById("name").value,""!=this.name?(this.close(),this.dispatchEvent(new CustomEvent("ok"))):alert("You must specify a name")})}onCancel(){this.close()}};r([(0,s.MZ)({type:String,attribute:!1})],a.prototype,"controllerId",void 0),r([(0,s.MZ)({type:Number,attribute:!1})],a.prototype,"ihc_id",void 0),r([(0,s.MZ)({type:Number,attribute:!1})],a.prototype,"on_id",void 0),r([(0,s.MZ)({type:Number,attribute:!1})],a.prototype,"off_id",void 0),r([(0,s.MZ)({type:String})],a.prototype,"title",void 0),r([(0,s.MZ)({type:String,attribute:!1})],a.prototype,"name",void 0),a=o=r([(0,s.EM)("ihc-resource-dlg")],a)},348(t,e,i){i.r(e),i.d(e,{IhcSensorResourceDialog:()=>l});var o=i(791),n=i(805),s=i(174),r=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let l=class extends n.IhcResourceDialog{constructor(){super(),this.title="Add a sensor"}static get styles(){return super.styles.concat(s.AH`
      `)}render_controls(){return s.qy`
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
    `}onOk(){const t=Object.create(null,{onOk:{get:()=>super.onOk}});return e=this,i=void 0,n=function*(){this.unit=this.shadowRoot.getElementById("unit").value,t.onOk.call(this)},new((o=void 0)||(o=Promise))(function(t,s){function r(t){try{a(n.next(t))}catch(t){s(t)}}function l(t){try{a(n.throw(t))}catch(t){s(t)}}function a(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o(function(t){t(i)})).then(r,l)}a((n=n.apply(e,i||[])).next())});var e,i,o,n}};r([(0,o.MZ)({type:String,attribute:!1})],l.prototype,"unit",void 0),l=r([(0,o.EM)("ihc-sensor-res-dlg")],l)},518(t,e,i){i.r(e),i.d(e,{IhcControllerElement:()=>h});var o=i(791),n=i(679),s=i(781),r=i(360),l=i(503),a=i(174),c=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},d=function(t,e,i,o){return new(i||(i=Promise))(function(n,s){function r(t){try{a(o.next(t))}catch(t){s(t)}}function l(t){try{a(o.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(r,l)}a((o=o.apply(t,e||[])).next())})};i(646),i(480),i(668),i(360);let h=class extends a.WF{static get styles(){return[n.RF,a.AH`
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
      `]}render(){return a.qy`
        ${this.show?"":a.qy`<style>#content { display:none}</style>`}
        ${0==this.selectedtab?a.qy``:a.qy`<style>#project { display:none}</style>`}
        ${1==this.selectedtab?a.qy`<style>#log { display:block}</style>`:a.qy`<style>#log { display:none}</style>`}
        ${2==this.selectedtab?a.qy`<style>#info { display:block}</style>`:a.qy`<style>#info { display:none}</style>`}
        <div id="content" class="flex-container">
          <div id="controllertab">
            <div class="tab-button ${0==this.selectedtab?"selected":""}" @click=${this.selectTab} data-tabid='0'>Project</div>
            <div class="tab-button ${1==this.selectedtab?"selected":""}" @click=${this.selectTab} data-tabid='1'>Log</div>
            <div class="tab-button ${2==this.selectedtab?"selected":""}" @click=${this.selectTab} data-tabid='2'>Info</div>
          </div>
          <div id="project" class="flex-container">
            ${this.isProjectLoading?a.qy`<div class="loader"></div>`:""}
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
    `}render_groups(){return null==this.ihcproject||this.isProjectLoading?"":this.ihcproject.Groups.map(t=>a.qy`
      <ihc-tree-node id="group_${t.Id}"></ihc-tree-node>
    `)}constructor(){super(),this.isProjectLoading=!1,this.selected=null,this.onselected=null,this.offselected=null,this.isProjectLoading=!1,this.ihcproject=null,this.ihcmapping=null,this.selectedtab=0}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return d(this,void 0,void 0,function*(){t.connectedCallback.call(this),this.loadController()})}updated(t){const e=Object.create(null,{updated:{get:()=>super.updated}});return d(this,void 0,void 0,function*(){e.updated.call(this,t),null!=this.ihcproject&&this.ihcproject.Groups.map(t=>{this.shadowRoot.getElementById(`group_${t.Id}`).data=t})})}loadController(){return d(this,void 0,void 0,function*(){this.isProjectLoading=!0,this.ihcmapping=yield l.IHCManager.instance.get(this.controllerId).getMapping();for(let t in this.ihcmapping)if("changed"in this.ihcmapping[t]){let t=new CustomEvent("restartrequired",{bubbles:!0,composed:!0});this.dispatchEvent(t);break}this.ihcproject=yield l.IHCManager.instance.get(this.controllerId).getProject(),this.ihcproject&&this.updateProject(this.ihcproject),this.isProjectLoading=!1})}updateProject(t){for(let e of t.Groups){e.iconclass="groupicon",e.Children=[];for(let t of e.Products){e.Children.push(t),t.iconclass="producticon",t.Children=[];for(let e of t.Inputs)t.Children.push(e),e.iconclass="inputicon",e.Id in this.ihcmapping&&(e.iconclass+=" connected");for(let e of t.Outputs)t.Children.push(e),e.iconclass="outputicon",e.Id in this.ihcmapping&&(e.iconclass+=" connected")}for(let t of e.FunctionBlocks){e.Children.push(t),t.iconclass="functionicon",t.Children=[];for(let e of t.Inputs)t.Children.push(e),e.iconclass="inputicon",e.Id in this.ihcmapping&&(e.iconclass+=" connected");for(let e of t.Outputs)t.Children.push(e),e.iconclass="outputicon",e.Id in this.ihcmapping&&(e.iconclass+=" connected")}}this.ihcproject=t}onSelectNode(t){return d(this,void 0,void 0,function*(){var e,i,o,n=this.shadowRoot.getElementById("ihcproperties"),l=null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.node;if(this.selected&&t.detail.shiftKey){if(this.selected==l)return!1;if(this.offselected)return!1;if(this.onselected){if(this.onselected==l)return!1;this.offselected=l,l.selected=r.Selection.OffIdSelected}else this.onselected=l,l.selected=r.Selection.OnIdSelected;return n.setSelected(this.selected,null===(i=this.onselected)||void 0===i?void 0:i.data.Id,null===(o=this.offselected)||void 0===o?void 0:o.data.Id),!1}return this.selected&&(this.selected.selected=r.Selection.NotSelected,this.selected=null,this.onselected&&(this.onselected.selected=r.Selection.NotSelected,this.onselected=null),this.offselected&&(this.offselected.selected=r.Selection.NotSelected,this.offselected=null),n.setSelected(null)),null==l||(this.selected=l,this.selected.selected=r.Selection.Selected,l.data instanceof s.xC&&n.setSelected(this.selected)),!1})}selectTab(t){var e=t.target.attributes["data-tabid"].value;this.selectedtab=e}};c([(0,o.MZ)({type:Boolean,attribute:!0})],h.prototype,"show",void 0),c([(0,o.MZ)({type:String,attribute:!0})],h.prototype,"controllerId",void 0),c([(0,o.MZ)({type:Boolean,attribute:!1})],h.prototype,"isProjectLoading",void 0),c([(0,o.MZ)({type:Object,attribute:!1})],h.prototype,"selected",void 0),c([(0,o.MZ)({type:Object,attribute:!1})],h.prototype,"onselected",void 0),c([(0,o.MZ)({type:Object,attribute:!1})],h.prototype,"offselected",void 0),c([(0,o.MZ)({type:Number,attribute:!1})],h.prototype,"selectedtab",void 0),h=c([(0,o.EM)("ihc-controller")],h)},646(t,e,i){i.r(e),i.d(e,{IhcInfoElement:()=>a});var o=i(791),n=i(503),s=i(174),r=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},l=function(t,e,i,o){return new(i||(i=Promise))(function(n,s){function r(t){try{a(o.next(t))}catch(t){s(t)}}function l(t){try{a(o.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(r,l)}a((o=o.apply(t,e||[])).next())})};i(560);let a=class extends s.WF{constructor(){super(...arguments),this.isLoading=!1}static get styles(){return s.AH`
      #info {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
      }
    `}render(){if(null==this.systeminfo)return s.qy`
      <div id="info">
        ${this.isLoading?s.qy`<ihc-loader/>`:""}
      </div>`;var t=this.uptimeAsString();return s.qy`
        <div id="info">
          ${this.isLoading?s.qy`<ihc-loader/>`:""}
          <table>
            <tr><td>Uptime</td><td>${t}</td></tr>
            <tr><td>Brand</td><td>${this.systeminfo.brand}</td></tr>
            <tr><td>Hardware version</td><td>${this.systeminfo.hw_revision}</td></tr>
            <tr><td>Led dimmer software version</td><td>${this.systeminfo.led_dimmer_software_version}</td></tr>
            <tr><td>Productiondate</td><td>${this.systeminfo.production_date}</td></tr>
            <tr><td>Serial number</td><td>${this.systeminfo.serial_number}</td></tr>
            <tr><td>Software date</td><td>${this.systeminfo.sw_date}</td></tr>
            <tr><td>Version</td><td>${this.systeminfo.version}</td></tr>
          </table>
        </div>
    `}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,function*(){t.connectedCallback.call(this),this.systemInfoRequest()})}systemInfoRequest(){return l(this,void 0,void 0,function*(){this.isLoading=!0;try{let t=yield n.IHCManager.instance.fetchWithAuth(`/api/ihcviewer/systeminfo/${this.controllerId}`);t.ok&&(this.systeminfo=yield t.json())}finally{this.isLoading=!1}})}uptimeAsString(){var t="";if(null!=this.systeminfo){var e=parseInt(this.systeminfo.uptime)/1e3,i=Math.floor(e/60/60/24);i>0&&(t+=i+" days ",e-=60*i*60*24);var o=Math.floor(e/60/60);(i>0||o>0)&&(t+=o+" hours ",e-=60*o*60);var n=Math.floor(e/60);(i>0||o>0||n>0)&&(t+=n+" min ",e-=60*n),t+=Math.floor(e)+" sec "}return t}};r([(0,o.MZ)({type:String,reflect:!0})],a.prototype,"controllerId",void 0),r([(0,o.MZ)({type:Boolean,attribute:!1})],a.prototype,"isLoading",void 0),a=r([(0,o.EM)("ihc-info")],a)},480(t,e,i){i.r(e),i.d(e,{IhcLogElement:()=>a});var o=i(791),n=i(503),s=i(174),r=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},l=function(t,e,i,o){return new(i||(i=Promise))(function(n,s){function r(t){try{a(o.next(t))}catch(t){s(t)}}function l(t){try{a(o.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(r,l)}a((o=o.apply(t,e||[])).next())})};i(560);let a=class extends s.WF{static get styles(){return s.AH`
      #log {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
      }
    `}render(){return s.qy`
      <div id="log">
        ${this.isLogLoading?s.qy`<ihc-loader/>`:""}
        <pre id="ihc_log">${""==this.log?"No log data":this.log}</pre>
      </div>
    `}constructor(){super(),this.log="",this.isLogLoading=!1,this.isLogLoading=!1,this.log=""}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return l(this,void 0,void 0,function*(){t.connectedCallback.call(this),this.logRequest()})}logRequest(){return l(this,void 0,void 0,function*(){this.isLogLoading=!0;try{let t=yield n.IHCManager.instance.fetchWithAuth(`/api/ihcviewer/log/${this.controllerId}`);if(t.ok){let e=yield t.text();this.log=""==e?"Log is empty":e}}finally{this.isLogLoading=!1}})}};r([(0,o.MZ)({type:String,reflect:!0})],a.prototype,"controllerId",void 0),r([(0,o.MZ)({type:String,attribute:!1})],a.prototype,"log",void 0),r([(0,o.MZ)({type:Boolean,attribute:!1})],a.prototype,"isLogLoading",void 0),a=r([(0,o.EM)("ihc-log")],a)},668(t,e,i){i.r(e),i.d(e,{IhcPropertiesElement:()=>c});var o=i(791),n=i(805),s=i(503),r=i(174),l=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},a=function(t,e,i,o){return new(i||(i=Promise))(function(n,s){function r(t){try{a(o.next(t))}catch(t){s(t)}}function l(t){try{a(o.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(r,l)}a((o=o.apply(t,e||[])).next())})};i(805),i(531),i(348),i(805),i(560);let c=class extends r.WF{static get styles(){return[n.IhcResourceDialog.button_style,r.AH`
      :host {
        display: flex;
        flex-direction: row;
        align-items: stretch;
      }
      #properties {
        display: inline-block;
        width: fit-content;
        vertical-align: top;
        flex-grow: 0;
        width: 30em;
      }
      #actions {
        display: inline-block;
        padding-left: 20px;
        flex-grow: 1;
      }
      .valueactions span{
        font-size: 10px;
        font-weight: bold;
        padding: 0px 5px 0px 5px;
        cursor: pointer;
        border-radius: 4px;
        background-color: var(--mdc-theme-primary, #6200ee);
        color: var(--mdc-theme-on-primary, #fff);
        padding: 1px 2px 1px 2px;
        border: none;
        box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
        margin: 0px 2px 0px 2px;
      }
    `]}render(){var t;return this.isLoading?r.qy`<ihc-loader/>`:null==this.selected?"":r.qy`
      <div id="properties">
        <div>
          <span>Resource id:</span>
          <span id="resourceid"> ${this.selected.id}</span>
          <span
            id="copyres"
            title="copy resource id to clipboard"
              @click=${this.onCopy}
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
          <span>Type:</span><span> ${this.selected.type}</span>
        </div>
        <div>
          <span>Value:</span><span> ${this.selected.value}</span>${this.renderValueActions()}
        </div>
        ${this.selected.entity_id?r.qy`
          <div>
            <span>Entity:</span><span> ${this.selected.entity_id}</span>
          </div>
        `:""}
        ${this.selected.state?r.qy`
          <div>
            <span>Friendly name:</span><span> ${this.selected.state.attributes.friendly_name}</span>
          </div>
        `:""}
      </div>
      <div id="actions">
        ${(null===(t=this.selected)||void 0===t?void 0:t.manual)?r.qy`
          <button @click=${this.removeManual}>Remove manual setup</button>
          <div>
            This resource is setup manually, and you can remove the manual setup by clicking the buttom above.
            (A restart is required)
          </div>
        `:""}
        ${this.action_binary_sensor?r.qy`<button @click=${()=>{this.showDialog("binary-dlg")}}>Binary sensor</button>`:""}
        ${this.action_light?r.qy`<button @click=${()=>{this.showDialog("light-dlg")}}>Light</button>`:""}
        ${this.action_sensor?r.qy`<button @click=${()=>{this.showDialog("sensor-dlg")}}>Sensor</button>`:""}
        ${this.action_switch?r.qy`<button @click=${()=>{this.showDialog("switch-dlg")}}>Switch</button>`:""}
        ${this.action_binary_sensor||this.action_light||this.action_sensor||this.action_switch?r.qy`<div>
            To make a manual setup of this ihc resource id as a Home Assistant entity, click one of the buttons.
            Note: this is a manual setup. You should know what you are doing.
            Just because it is possible to add something, does not mean it make sense.
          </div>`:""}
        </div>
        <ihc-binary-res-dlg id="binary-dlg" @ok=${this.makeBinarySensor}></ihc-binary-res-dlg>
        <ihc-resource-dlg id="light-dlg" @ok=${this.makeLight} title="Add a light"></ihc-resource-dlg>
        <ihc-resource-dlg id="switch-dlg" @ok=${this.makeSwitch} title="Add a switch"></ihc-resource-dlg>
        <ihc-sensor-res-dlg id="sensor-dlg" @ok=${this.makeSensor}></ihc-sensor-res-dlg>
      `}renderValueActions(){return"bool"==this.selected.type?r.qy`<span class="valueactions">
        <span @click=${this.runtimeBoolOn} title="Set the value to On(true)">on</span>
        <span @click=${this.runtimeBoolOff} title="Set the value to Off(false)">off</span>
        <span @click=${this.runtimeBoolToggle} title="Toggle the value">toggle</span>
      </span>`:""}constructor(){super(),this.isLoading=!1,this.selected=null,this.isLoading=!1}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,function*(){t.connectedCallback.call(this)})}setSelected(t){return a(this,arguments,void 0,function*(t,e=null,i=null){if(this.on_id=e,this.off_id=i,null==t)return this.selected=null,void(this.selectednode=null);this.selectednode=t;let o=t.data.Id;this.isLoading=!0,this.action_binary_sensor=!1,this.action_light=!1,this.action_sensor=!1,this.action_switch=!1;let n=yield s.IHCManager.instance.fetchWithAuth(`/api/ihcviewer/getresource/${this.controllerId}/${o}`);if(n.ok&&(this.selected=yield n.json(),null!=this.selected&&this.selected.type&&!this.selected.entity_id))switch(this.selected.type){case"bool":this.action_binary_sensor=null==e,this.action_light=!0,this.action_switch=!0;break;case"int":this.action_light=this.selectednode.data.IsLightLevel,this.action_sensor=null==e;break;case"time":case"float":this.action_sensor=!0}this.isLoading=!1})}showDialog(t){var e=this.shadowRoot.getElementById(t);e.controllerId=this.controllerId,e.ihc_id=this.selected.id,e.on_id=this.on_id,e.off_id=this.off_id,e.open()}makeBinarySensor(){return a(this,void 0,void 0,function*(){var t=this.shadowRoot.getElementById("binary-dlg"),e={id:t.ihc_id,name:t.name,type:t.type,inverted:t.inverted};yield this.apiRequest(`/api/ihcviewer/manual/binarysensor/${this.controllerId}`,e,"POST"),this.selectednode.data.iconclass+=" connected",this.selectednode.requestUpdate(),yield this.setSelected(this.selectednode);let i=new CustomEvent("restartrequired",{bubbles:!0,composed:!0});this.dispatchEvent(i)})}makeLight(){return a(this,void 0,void 0,function*(){var t=this.shadowRoot.getElementById("light-dlg"),e={id:t.ihc_id,name:t.name};null!=t.on_id&&(e.on_id=t.on_id),null!=t.off_id&&(e.off_id=t.off_id),yield this.apiRequest(`/api/ihcviewer/manual/light/${this.controllerId}`,e,"POST"),yield this.setSelected(this.selectednode)})}makeSwitch(){return a(this,void 0,void 0,function*(){var t=this.shadowRoot.getElementById("switch-dlg"),e={id:t.ihc_id,name:t.name};null!=t.on_id&&(e.on_id=t.on_id),null!=t.off_id&&(e.off_id=t.off_id),yield this.apiRequest(`/api/ihcviewer/manual/switch/${this.controllerId}`,e,"POST"),yield this.setSelected(this.selectednode)})}makeSensor(){return a(this,void 0,void 0,function*(){var t=this.shadowRoot.getElementById("sensor-dlg"),e={id:t.ihc_id,name:t.name,unit:t.unit};yield this.apiRequest(`/api/ihcviewer/manual/sensor/${this.controllerId}`,e,"POST"),yield this.setSelected(this.selectednode)})}removeManual(){return a(this,void 0,void 0,function*(){var t=this.selected.id;yield this.apiRequest(`/api/ihcviewer/manual/remove/${this.controllerId}/${t}`,"","POST"),yield this.setSelected(this.selectednode)})}runtimeBoolOn(){return a(this,void 0,void 0,function*(){var t=this.selected.id;"on"==(yield this.apiRequest(`/api/ihcviewer/setboolresource/${this.controllerId}/${t}/on`,"","POST"))&&(this.selected.value=!0,this.requestUpdate())})}runtimeBoolOff(){return a(this,void 0,void 0,function*(){var t=this.selected.id;"off"==(yield this.apiRequest(`/api/ihcviewer/setboolresource/${this.controllerId}/${t}/off`,"","POST"))&&(this.selected.value=!1,this.requestUpdate())})}runtimeBoolToggle(){return a(this,void 0,void 0,function*(){var t=this.selected.id;yield this.apiRequest(`/api/ihcviewer/setboolresource/${this.controllerId}/${t}/toggle`,"","POST")})}apiRequest(t,e){return a(this,arguments,void 0,function*(t,e,i="GET"){let o=yield s.IHCManager.instance.fetchWithAuth(t,{method:i,cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return o.ok?yield o.text():"error"})}onCopy(){var t,e;t=this.selected.data.Id,(e=document.createElement("textarea")).style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="2em",e.style.height="2em",e.style.padding="0",e.style.border="none",e.style.outline="none",e.style.boxShadow="none",e.style.background="transparent",e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}};l([(0,o.MZ)({type:String})],c.prototype,"controllerId",void 0),l([(0,o.MZ)({type:Boolean,attribute:!1})],c.prototype,"isLoading",void 0),l([(0,o.MZ)({type:Object,attribute:!1})],c.prototype,"selected",void 0),c=l([(0,o.EM)("ihc-properties")],c)},360(t,e,i){i.r(e),i.d(e,{IhcTreeNode:()=>a,Selection:()=>o});var o,n=i(174),s=i(791),r=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},l=function(t,e,i,o){return new(i||(i=Promise))(function(n,s){function r(t){try{a(o.next(t))}catch(t){s(t)}}function l(t){try{a(o.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(r,l)}a((o=o.apply(t,e||[])).next())})};!function(t){t[t.NotSelected=0]="NotSelected",t[t.Selected=1]="Selected",t[t.OnIdSelected=2]="OnIdSelected",t[t.OffIdSelected=3]="OffIdSelected"}(o||(o={}));let a=class extends n.WF{static get styles(){return n.AH`
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
    `}render(){return n.qy`
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
            ${this.data.Note?n.qy` <span class="treeinfo">Note: ${this.data.Note}</span> `:""}
            ${this.data.Position?n.qy`<span class="treeinfo">Position: ${this.data.Position}</span>`:""}
          </span>
        </span>
        ${this.render_children()}
      </div>
      </template>
    `}render_expandicon(){if(!this.data.Children)return"";let t=this.expanded?n.qy`
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1" width="16" height="16" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
        />
      </svg>`:n.qy`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1" width="16" height="16" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
      />
      </svg>`;return n.qy`<span class="${this.getExpandClasses(this.expanded)}" @click=${this.toggleExpand}>
      ${t}
    </span>`}render_children(){if(!this.expanded)return"";var t=[];return this.data.Children&&(t=this.data.Children.map(t=>n.qy`<ihc-tree-node id="treenode_${t.Id}"></ihc-tree-node>`)),n.qy` <ul>${t}</ul>`}constructor(){super(),this.data=null,this.expanded=!1,this.selected=o.NotSelected,this.expanded=!1,this.selected=o.NotSelected}firstUpdated(t){const e=Object.create(null,{firstUpdated:{get:()=>super.firstUpdated}});return l(this,void 0,void 0,function*(){e.firstUpdated.call(this,t)})}updated(t){const e=Object.create(null,{updated:{get:()=>super.updated}});return l(this,void 0,void 0,function*(){e.updated.call(this,t),this.data.Children&&this.data.Children.map(t=>{var e=this.shadowRoot.getElementById(`treenode_${t.Id}`);e&&(e.data=t)})})}getExpandClasses(t){return t?"expandicon expanded":"expandicon"}toggleExpand(){this.expanded=!this.expanded}getNodeClasses(){let t="";return this.selected>=o.Selected&&(t="selected"),t}getTextClasses(){let t="";return this.selected==o.OnIdSelected&&(t+=" onselected"),this.selected==o.OffIdSelected&&(t+=" offselected"),t}select(t){this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{node:this,shiftKey:t.shiftKey}}))}};r([(0,s.MZ)({type:Object})],a.prototype,"data",void 0),r([(0,s.MZ)({type:Boolean})],a.prototype,"expanded",void 0),r([(0,s.MZ)({type:Number})],a.prototype,"selected",void 0),a=r([(0,s.EM)("ihc-tree-node")],a)},560(t,e,i){i.r(e),i.d(e,{LoaderElement:()=>s});var o=i(174),n=i(791);let s=class extends o.WF{static get styles(){return o.AH`
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
    `}render(){return o.qy`<div class="loader"></div>`}constructor(){super()}};s=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([(0,n.EM)("ihc-loader")],s)},503(t,e,i){i.r(e),i.d(e,{IHCManager:()=>s});var o=i(781),n=function(t,e,i,o){return new(i||(i=Promise))(function(n,s){function r(t){try{a(o.next(t))}catch(t){s(t)}}function l(t){try{a(o.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(r,l)}a((o=o.apply(t,e||[])).next())})};class s{constructor(t){this._hass=t,this.controllers=[]}static initialize(t){s.theoneandonly=new s(t)}static get instance(){return s.theoneandonly}get hass(){return this._hass}get(t){return t in this.controllers||(this.controllers[t]=new r(t)),this.controllers[t]}fetchWithAuth(t){return n(this,arguments,void 0,function*(t,e={}){let i=this.hass.connection.options.auth;return i.expired&&(yield i.refreshAccessToken()),e.headers||(e.headers={}),e.headers.authorization=`Bearer ${i.accessToken}`,yield fetch(t,e)})}}class r{constructor(t){this.controllerId=t,this.project=null,this.ihcmapping=null}getProject(){return n(this,void 0,void 0,function*(){if(null==this.project){let t=yield s.instance.fetchWithAuth(`/api/ihcviewer/project/${this.controllerId}`);if(t.ok){let e=yield t.text(),i=(new DOMParser).parseFromString(e,"text/xml");this.project=new o.A4(i)}}return this.project})}getMapping(){return n(this,void 0,void 0,function*(){if(null==this.ihcmapping){let t=yield s.instance.fetchWithAuth(`/api/ihcviewer/mapping/${this.controllerId}`);t.ok&&(this.ihcmapping=yield t.json())}return this.ihcmapping})}}},781(t,e,i){i.d(e,{A4:()=>p,xC:()=>c});class o{constructor(t){this.Name=t.attributes.name.value;var e=t.attributes.id.value;this.Id=parseInt(e.substring(3),16),this.NodeTagName=t.tagName}FindAndAdd(t,e,i){for(var o=t.ownerDocument.evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var n=o.iterateNext();if(null==n)break;i(n)}}}class n extends o{constructor(t){super(t),this.Note=t.attributes.note.value,this.FunctionBlocks=new Array,this.Products=new Array,this.FindAndAdd(t,"functionblock",t=>{this.FunctionBlocks.push(new a(t))});for(var e=t.ownerDocument.evaluate("product_airlink",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);null!=(o=e.iterateNext());){var i=new r(o);this.Products.push(i)}for(e=t.ownerDocument.evaluate("product_dataline",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var o;if(null==(o=e.iterateNext()))break;i=new l(o),this.Products.push(i)}}}class s extends o{constructor(t){super(t),this.Inputs=new Array,this.Outputs=new Array,this.Note=t.attributes.note.value,this.Position=t.attributes.position.value,this.FindAndAdd(t,"airlink_input",t=>{this.Inputs.push(new d(t))}),this.FindAndAdd(t,"airlink_dimmer_increase",t=>{this.Inputs.push(new d(t))}),this.FindAndAdd(t,"airlink_dimmer_decrease",t=>{this.Inputs.push(new d(t))}),this.FindAndAdd(t,"airlink_dimming",t=>{this.Inputs.push(new d(t))}),this.FindAndAdd(t,"dataline_input",t=>{this.Inputs.push(new d(t))}),this.FindAndAdd(t,"airlink_relay",t=>{this.Outputs.push(new h(t))}),this.FindAndAdd(t,"dataline_output",t=>{this.Outputs.push(new h(t))}),this.FindAndAdd(t,"light_indication",t=>{this.Outputs.push(new h(t))})}}class r extends s{constructor(t){super(t)}}class l extends s{constructor(t){super(t)}}class a extends o{constructor(t){super(t),this.Note=t.attributes.note.value,this.Inputs=new Array;for(var e=t.ownerDocument.evaluate("inputs/*",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var i=e.iterateNext();if(null==i)break;var o=new d(i);this.Inputs.push(o)}this.Outputs=new Array;for(var n=t.ownerDocument.evaluate("outputs/*",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var s=n.iterateNext();if(null==s)break;var r=new h(s);this.Outputs.push(r)}}}class c extends o{constructor(t){super(t)}get IsLightLevel(){return"resource_light_level"==this.NodeTagName||"link_dimming"==this.NodeTagName}}class d extends c{constructor(t){super(t)}}class h extends c{constructor(t){super(t)}}class p{constructor(t){this.xmldoc=t,this.Groups=new Array;for(var e=this.xmldoc.evaluate("/utcs_project/groups/group",this.xmldoc,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var i=e.iterateNext();if(null==i)break;var o=new n(i);this.Groups.push(o)}}}},842(t,e,i){i.d(e,{mN:()=>k,AH:()=>a,W3:()=>x,Ec:()=>$});const o=globalThis,n=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;class l{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new l(i,t,s)},c=(t,e)=>{if(n)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=o.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}},d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:h,defineProperty:p,getOwnPropertyDescriptor:u,getOwnPropertyNames:f,getOwnPropertySymbols:v,getPrototypeOf:g}=Object,y=globalThis,m=y.trustedTypes,b=m?m.emptyScript:"",_=y.reactiveElementPolyfillSupport,w=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!h(t,e),A={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&p(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:n}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const s=o?.call(this);n.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...f(t),...v(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(t){}firstUpdated(t){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[w("elementProperties")]=new Map,k[w("finalized")]=new Map,_?.({ReactiveElement:k}),(y.reactiveElementVersions??=[]).push("2.0.4")},791(t,e,i){i.d(e,{EM:()=>o,MZ:()=>l});const o=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var n=i(842);const s={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec},r=(t=s,e,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];e.call(this,i),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+o)};function l(t){return(e,i)=>"object"==typeof i?r(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},174(t,e,i){i.d(e,{WF:()=>U,AH:()=>o.AH,qy:()=>A});var o=i(842);const n=globalThis,s=n.trustedTypes,r=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,c="?"+a,d=`<${c}>`,h=document,p=()=>h.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,f=Array.isArray,v="[ \t\n\f\r]",g=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,m=/>/g,b=RegExp(`>|${v}(?:([^\\s"'>=/]+)(${v}*=${v}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,w=/"/g,x=/^(?:script|style|textarea|title)$/i,$=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),A=$(1),k=($(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),E=new WeakMap,O=h.createTreeWalker(h,129);function C(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==r?r.createHTML(e):e}const R=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=g;for(let e=0;e<i;e++){const i=t[e];let c,h,p=-1,u=0;for(;u<i.length&&(r.lastIndex=u,h=r.exec(i),null!==h);)u=r.lastIndex,r===g?"!--"===h[1]?r=y:void 0!==h[1]?r=m:void 0!==h[2]?(x.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=b):void 0!==h[3]&&(r=b):r===b?">"===h[0]?(r=n??g,p=-1):void 0===h[1]?p=-2:(p=r.lastIndex-h[2].length,c=h[1],r=void 0===h[3]?b:'"'===h[3]?w:_):r===w||r===_?r=b:r===y||r===m?r=g:(r=b,n=void 0);const f=r===b&&t[e+1].startsWith("/>")?" ":"";s+=r===g?i+d:p>=0?(o.push(c),i.slice(0,p)+l+i.slice(p)+a+f):i+a+(-2===p?e:f)}return[C(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class P{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const d=t.length-1,h=this.parts,[u,f]=R(t,e);if(this.el=P.createElement(u,i),O.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=O.nextNode())&&h.length<d;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(l)){const e=f[r++],i=o.getAttribute(t).split(a),s=/([.?@])?(.*)/.exec(e);h.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?q:"?"===s[1]?T:"@"===s[1]?N:j}),o.removeAttribute(t)}else t.startsWith(a)&&(h.push({type:6,index:n}),o.removeAttribute(t));if(x.test(o.tagName)){const t=o.textContent.split(a),e=t.length-1;if(e>0){o.textContent=s?s.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],p()),O.nextNode(),h.push({type:2,index:++n});o.append(t[e],p())}}}else if(8===o.nodeType)if(o.data===c)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(a,t+1));)h.push({type:7,index:n}),t+=a.length-1}n++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,o){if(e===k)return e;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const s=u(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(e=I(t,n._$AS(t,e.values),n,o)),e}class M{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??h).importNode(e,!0);O.currentNode=o;let n=O.nextNode(),s=0,r=0,l=i[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new H(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new L(n,this,t)),this._$AV.push(e),l=i[++r]}s!==l?.index&&(n=O.nextNode(),s++)}return O.currentNode=h,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),u(t)?t===S||null==t||""===t?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==k&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>f(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==S&&u(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=P.createElement(C(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new M(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=E.get(t.strings);return void 0===e&&E.set(t.strings,e=new P(t)),e}k(t){f(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new H(this.S(p()),this.S(p()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=I(this,t,e,0),s=!u(t)||t!==this._$AH&&t!==k,s&&(this._$AH=t);else{const o=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=I(this,o[i+r],e,r),l===k&&(l=this._$AH[r]),s||=!u(l)||l!==this._$AH[r],l===S?t=S:t!==S&&(t+=(l??"")+n[r+1]),this._$AH[r]=l}s&&!o&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class q extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}class T extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}}class N extends j{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=I(this,t,e,0)??S)===k)return;const i=this._$AH,o=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==S&&(i===S||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const B=n.litHtmlPolyfillSupport;B?.(P,H),(n.litHtmlVersions??=[]).push("3.1.2");class U extends o.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=i?.renderBefore??null;o._$litPart$=n=new H(e.insertBefore(p(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}}U._$litElement$=!0,U.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:U});const D=globalThis.litElementPolyfillSupport;D?.({LitElement:U}),(globalThis.litElementVersions??=[]).push("4.0.4")}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,i),s.exports}i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o,n=i(791),s=i(679),r=i(503),l=i(174),a=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};i(518),i(503);let c=o=class extends l.WF{static get styles(){return[s.RF,o.panelStyles]}render(){return null==this.panel.config.ihcviewer?l.qy`No controllers`:l.qy`
      <div id="ihcviewer"  @restartrequired=${this.onRestartRequired}>
        <div id="ihcviewerheader">
          <div id="title">IHC Viewer</div>
          ${this.render_restart()}
          ${this.render_controllersSelector()}
        </div>
        <div id="controllers">
          ${this.panel.config.ihcviewer.map((t,e)=>l.qy`
              <ihc-controller id="ihccontroller_${e}" controllerId="${t}" show="${this.selectedcontrollerid==t}"></ihc-controller>
          `)}
        </div>
      </div>
    `}render_restart(){return this.restartRequired?l.qy`<span id="restartrequired" title="You have made changes to the manual ihc setup that will require a Home Assistant restart.">Restart required</span>`:""}render_controllersSelector(){return this.panel.config.ihcviewer.length<=1?l.qy`<span></span>`:l.qy`
      <span id="controllerselector">
        <select @change=${this.onChangeController}>
          ${this.panel.config.ihcviewer.map(t=>l.qy`<option value="${t}">${t}</option>`)}
        </select>
      </span>`}constructor(){super(),this.restartRequired=!1}connectedCallback(){super.connectedCallback(),r.IHCManager.initialize(this.hass),this.selectedcontrollerid=this.panel.config.ihcviewer[0]}onChangeController(t){this.selectedcontrollerid=t.target.value,this.requestUpdate()}onRestartRequired(t){return this.restartRequired=!0,!1}};c.panelStyles=l.AH`
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
  `,a([(0,n.MZ)({type:Object})],c.prototype,"hass",void 0),a([(0,n.MZ)({type:Boolean})],c.prototype,"narrow",void 0),a([(0,n.MZ)({type:Boolean})],c.prototype,"showMenu",void 0),a([(0,n.MZ)({type:Object})],c.prototype,"panel",void 0),a([(0,n.MZ)({type:String})],c.prototype,"selectedcontrollerid",void 0),a([(0,n.MZ)({type:Boolean,attribute:!1})],c.prototype,"restartRequired",void 0),c=o=a([(0,n.EM)("ha-panel-ihcviewer")],c)})();
//# sourceMappingURL=panel.js.map