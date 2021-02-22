!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}([function(t,e,i){"use strict";i.d(e,"c",(function(){return G})),i.d(e,"e",(function(){return K})),i.d(e,"d",(function(){return H})),i.d(e,"b",(function(){return nt})),i.d(e,"a",(function(){return st}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${s}--\x3e`,a=new RegExp(`${s}|${r}`);class l{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let r=0,l=-1,d=0;const{strings:u,values:{length:f}}=t;for(;d<f;){const t=o.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)c(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=u[d],i=p.exec(e)[2],n=i.toLowerCase()+"$lit$",o=t.getAttribute(n);t.removeAttribute(n);const s=o.split(a);this.parts.push({type:"attribute",index:l,name:i,strings:s}),d+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const n=t.parentNode,o=e.split(a),s=o.length-1;for(let e=0;e<s;e++){let i,s=o[e];if(""===s)i=h();else{const t=p.exec(s);null!==t&&c(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(s)}n.insertBefore(i,t),this.parts.push({type:"node",index:++l})}""===o[s]?(n.insertBefore(h(),t),i.push(t)):t.data=o[s],d+=s}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&l!==r||(l++,e.insertBefore(h(),t)),r=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(i.push(t),l--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),d++}}else o.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const c=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},d=t=>-1!==t.index,h=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:i},parts:n}=t,o=document.createTreeWalker(i,133,null,!1);let s=g(n),r=n[s],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,s=g(n,s),r=n[s]}c.forEach(t=>t.parentNode.removeChild(t))}const f=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},g=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(d(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const y=new WeakMap,v=t=>"function"==typeof t&&y.has(t),m={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let s,r=0,a=0,l=o.nextNode();for(;r<i.length;)if(s=i[r],d(s)){for(;a<s.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=e.pop(),l=o.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));r++}else this.__parts.push(void 0),r++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),x=` ${s} `;class S{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const a=p.exec(t);e+=null===a?t+(i?x:r):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==w&&(e=w.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const P=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new O(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!C(t))return t}let n="";for(let o=0;o<e;o++){n+=t[o];const e=i[o];if(void 0!==e){const t=e.value;if(P(t)||!C(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class O{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||P(t)&&t===this.value||(this.value=t,v(t)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=h()),t.__insert(this.endNode=h())}insertAfterPart(t){t.__insert(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;v(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(P(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const i=new b(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const o of t)i=e[n],void 0===i&&(i=new N(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(o),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;v(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class j extends k{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends O{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class R{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;v(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=I(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const I=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function $(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(s);return i=e.keyString.get(n),void 0===i&&(i=new l(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const V=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const L=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,n){const o=e[0];if("."===o){return new j(t,e.slice(1),i).parts}if("@"===o)return[new R(t,e.slice(1),n.eventContext)];if("?"===o)return[new A(t,e.slice(1),i)];return new k(t,e,i).parts}handleTextExpression(t){return new N(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const H=(t,...e)=>new S(t,e,"html",L),U=(t,e)=>`${t}--${e}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const q=t=>e=>{const i=U(e.type,t);let n=V.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(i,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const r=e.strings.join(s);if(o=n.keyString.get(r),void 0===o){const i=e.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(i,t),o=new l(e,i),n.keyString.set(r,o)}return n.stringsArray.set(e.strings,o),o},D=["html","svg"],z=new Set,F=(t,e,i)=>{z.add(t);const n=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:s}=o;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,t);const r=document.createElement("style");for(let t=0;t<s;t++){const e=o[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{D.forEach(e=>{const i=V.get(U(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),u(t,i)})})})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:o}=t;if(null==i)return void n.appendChild(e);const s=document.createTreeWalker(n,133,null,!1);let r=g(o),a=0,l=-1;for(;s.nextNode();){l++;for(s.currentNode===i&&(a=f(e),i.parentNode.insertBefore(e,i));-1!==r&&o[r].index===l;){if(a>0){for(;-1!==r;)o[r].index+=a,r=g(o,r);return}r=g(o,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),u(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:J};class Z extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdateInternal(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Y}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=J){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||W,o="function"==typeof n?n:n.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||W.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=Y){const n=this.constructor,o=n._attributeNameForProperty(t,i);if(void 0!==o){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let n=!0;if(void 0!==t){const o=this.constructor;i=i||o.getPropertyOptions(t),o._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Z.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const G=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function K(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)}const Q=Element.prototype;Q.msMatchesSelector||Q.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const tt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol();class it{constructor(t,e){if(e!==et)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(tt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const nt=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof it)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new it(i,et)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ot={};class st extends Z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!tt){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new it(String(e),et)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?tt?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ot&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return ot}}st.finalized=!0,st.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,s=M.has(e),r=B&&11===e.nodeType&&!!e.host,a=r&&!z.has(n),l=a?document.createDocumentFragment():e;if(((t,e,i)=>{let n=M.get(e);void 0===n&&(o(e,e.firstChild),M.set(e,n=new N(Object.assign({templateFactory:$},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:q(n)},i)),a){const t=M.get(l);M.delete(l);const i=t.value instanceof b?t.value.template:void 0;F(n,l,i),o(e,e.firstChild),e.appendChild(l),M.set(e,t)}!s&&r&&window.ShadyCSS.styleElement(e.host)}},function(t,e,i){"use strict";i.r(e),i.d(e,"IHCManager",(function(){return s}));var n=i(4),o=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((n=n.apply(t,e||[])).next())}))};class s{constructor(t){this._hass=t,this.controllers=[]}static initialize(t){s.theoneandonly=new s(t)}static get instance(){return s.theoneandonly}get hass(){return this._hass}get(t){return t in this.controllers||(this.controllers[t]=new r(t)),this.controllers[t]}fetchWithAuth(t,e={}){return o(this,void 0,void 0,(function*(){let i=this.hass.connection.options.auth;return i.expired&&(yield i.refreshAccessToken()),e.headers||(e.headers={}),e.headers.authorization="Bearer "+i.accessToken,yield fetch(t,e)}))}}class r{constructor(t){this.controllerId=t,this.project=null,this.ihcmapping=null}getProject(){return o(this,void 0,void 0,(function*(){if(null==this.project){let t=yield s.instance.fetchWithAuth("/api/ihcviewer/project/"+this.controllerId);if(t.ok){let e=yield t.text(),i=(new DOMParser).parseFromString(e,"text/xml");this.project=new n.a(i)}}return this.project}))}getMapping(){return o(this,void 0,void 0,(function*(){if(null==this.ihcmapping){let t=yield s.instance.fetchWithAuth("/api/ihcviewer/mapping/"+this.controllerId);t.ok&&(this.ihcmapping=yield t.json())}return this.ihcmapping}))}}},function(t,e,i){"use strict";i.r(e),i.d(e,"IhcResourceDialog",(function(){return a}));var n,o=i(0),s=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},r=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((n=n.apply(t,e||[])).next())}))};let a=n=class extends o.a{static get button_style(){return o.b`
      button {
        border-radius: 4px;
        background-color: var(--mdc-theme-primary, #6200ee);
        color: var(--mdc-theme-on-primary, #fff);
        padding: 5px 10px 5px 10px;
        border: none;
        border-radius: var(--ha-card-border-radius, 4px);
        box-shadow: var( --ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) );
      }`}static get styles(){return[n.button_style,o.b`
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
    `]}render(){return o.d`
      <div id="dlgmask"></div>
      <div id="dlg" class="dlg">
        <div class="dlgtitle">${this.title}</div>
        <div class="coloumn">
          <div class="control-row">
            <div>IHC Resourceid: ${this.ihc_id}</div>
          </div>
          ${this.on_id?o.d`
            <div class="control-row">
              <div>on_id: ${this.on_id}</div>
            </div>
          `:""}
          ${this.off_id?o.d`
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
    `}firstUpdated(t){const e=Object.create(null,{firstUpdated:{get:()=>super.firstUpdated}});return r(this,void 0,void 0,(function*(){e.firstUpdated.call(this,t),this.shadowRoot.getElementById("name").focus()}))}render_controls(){return o.d``}open(){this.shadowRoot.getElementById("dlgmask").style.display="block",this.shadowRoot.getElementById("dlg").style.display="block"}close(){this.shadowRoot.getElementById("dlgmask").style.display="none",this.shadowRoot.getElementById("dlg").style.display="none"}onOk(){return r(this,void 0,void 0,(function*(){this.name=this.shadowRoot.getElementById("name").value,""!=this.name?(this.close(),this.dispatchEvent(new CustomEvent("ok"))):alert("You must specify a name")}))}onCancel(){this.close()}};s([Object(o.e)({type:String,attribute:!1})],a.prototype,"controllerId",void 0),s([Object(o.e)({type:Number,attribute:!1})],a.prototype,"ihc_id",void 0),s([Object(o.e)({type:Number,attribute:!1})],a.prototype,"on_id",void 0),s([Object(o.e)({type:Number,attribute:!1})],a.prototype,"off_id",void 0),s([Object(o.e)({type:String})],a.prototype,"title",void 0),s([Object(o.e)({type:String,attribute:!1})],a.prototype,"name",void 0),a=n=s([Object(o.c)("ihc-resource-dlg")],a)},function(t,e,i){"use strict";i.r(e),i.d(e,"Selection",(function(){return n})),i.d(e,"IhcTreeNode",(function(){return a}));var n,o=i(0),s=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},r=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((n=n.apply(t,e||[])).next())}))};!function(t){t[t.NotSelected=0]="NotSelected",t[t.Selected=1]="Selected",t[t.OnIdSelected=2]="OnIdSelected",t[t.OffIdSelected=3]="OffIdSelected"}(n||(n={}));let a=class extends o.a{constructor(){super(),this.data=null,this.expanded=!1,this.selected=n.NotSelected,this.expanded=!1,this.selected=n.NotSelected}static get styles(){return o.b`
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
    `}render(){return o.d`
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
            ${this.data.Note?o.d` <span class="treeinfo">Note: ${this.data.Note}</span> `:""}
            ${this.data.Position?o.d`<span class="treeinfo">Position: ${this.data.Position}</span>`:""}
          </span>
        </span>
        ${this.render_children()}
      </div>
      </template>
    `}render_expandicon(){if(!this.data.Children)return"";let t=this.expanded?o.d`
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1" width="16" height="16" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
        />
      </svg>`:o.d`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1" width="16" height="16" viewBox="0 0 24 24">
      <path fill="currentColor"
        d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
      />
      </svg>`;return o.d`<span class="${this.getExpandClasses(this.expanded)}" @click=${this.toggleExpand}>
      ${t}
    </span>`}render_children(){if(!this.expanded)return"";var t=[];return this.data.Children&&(t=this.data.Children.map(t=>o.d`<ihc-tree-node id="treenode_${t.Id}"></ihc-tree-node>`)),o.d` <ul>${t}</ul>`}firstUpdated(t){const e=Object.create(null,{firstUpdated:{get:()=>super.firstUpdated}});return r(this,void 0,void 0,(function*(){e.firstUpdated.call(this,t)}))}updated(t){const e=Object.create(null,{updated:{get:()=>super.updated}});return r(this,void 0,void 0,(function*(){e.updated.call(this,t),this.data.Children&&this.data.Children.map(t=>{var e=this.shadowRoot.getElementById("treenode_"+t.Id);e&&(e.data=t)})}))}getExpandClasses(t){return t?"expandicon expanded":"expandicon"}toggleExpand(){this.expanded=!this.expanded}getNodeClasses(){let t="";return this.selected>=n.Selected&&(t="selected"),t}getTextClasses(){let t="";return this.selected==n.OnIdSelected&&(t+=" onselected"),this.selected==n.OffIdSelected&&(t+=" offselected"),t}select(t){this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{node:this,shiftKey:t.shiftKey}}))}};s([Object(o.e)({type:Object})],a.prototype,"data",void 0),s([Object(o.e)({type:Boolean})],a.prototype,"expanded",void 0),s([Object(o.e)({type:Number})],a.prototype,"selected",void 0),a=s([Object(o.c)("ihc-tree-node")],a)},function(t,e,i){"use strict";i.d(e,"b",(function(){return c})),i.d(e,"a",(function(){return p}));class n{constructor(t){this.Name=t.attributes.name.value;var e=t.attributes.id.value;this.Id=parseInt(e.substring(3),16),this.NodeTagName=t.tagName}FindAndAdd(t,e,i){for(var n=t.ownerDocument.evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var o=n.iterateNext();if(null==o)break;i(o)}}}class o extends n{constructor(t){super(t),this.Note=t.attributes.note.value,this.FunctionBlocks=new Array,this.Products=new Array,this.FindAndAdd(t,"functionblock",t=>{this.FunctionBlocks.push(new l(t))});for(var e=t.ownerDocument.evaluate("product_airlink",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){if(null==(n=e.iterateNext()))break;var i=new r(n);this.Products.push(i)}for(e=t.ownerDocument.evaluate("product_dataline",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var n;if(null==(n=e.iterateNext()))break;i=new a(n);this.Products.push(i)}}}class s extends n{constructor(t){super(t),this.Inputs=new Array,this.Outputs=new Array,this.Note=t.attributes.note.value,this.Position=t.attributes.position.value,this.FindAndAdd(t,"airlink_input",t=>{this.Inputs.push(new d(t))}),this.FindAndAdd(t,"airlink_dimmer_increase",t=>{this.Inputs.push(new d(t))}),this.FindAndAdd(t,"airlink_dimmer_decrease",t=>{this.Inputs.push(new d(t))}),this.FindAndAdd(t,"airlink_dimming",t=>{this.Inputs.push(new d(t))}),this.FindAndAdd(t,"dataline_input",t=>{this.Inputs.push(new d(t))}),this.FindAndAdd(t,"airlink_relay",t=>{this.Outputs.push(new h(t))}),this.FindAndAdd(t,"dataline_output",t=>{this.Outputs.push(new h(t))}),this.FindAndAdd(t,"light_indication",t=>{this.Outputs.push(new h(t))})}}class r extends s{constructor(t){super(t)}}class a extends s{constructor(t){super(t)}}class l extends n{constructor(t){super(t),this.Note=t.attributes.note.value,this.Inputs=new Array;for(var e=t.ownerDocument.evaluate("inputs/*",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var i=e.iterateNext();if(null==i)break;var n=new d(i);this.Inputs.push(n)}this.Outputs=new Array;for(var o=t.ownerDocument.evaluate("outputs/*",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var s=o.iterateNext();if(null==s)break;var r=new h(s);this.Outputs.push(r)}}}class c extends n{constructor(t){super(t)}get IsLightLevel(){return"resource_light_level"==this.NodeTagName||"link_dimming"==this.NodeTagName}}class d extends c{constructor(t){super(t)}}class h extends c{constructor(t){super(t)}}class p{constructor(t){this.xmldoc=t,this.Groups=new Array;for(var e=this.xmldoc.evaluate("/utcs_project/groups/group",this.xmldoc,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var i=e.iterateNext();if(null==i)break;var n=new o(i);this.Groups.push(n)}}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return et}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${s}--\x3e`,a=new RegExp(`${s}|${r}`);class l{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let r=0,l=-1,d=0;const{strings:u,values:{length:f}}=t;for(;d<f;){const t=o.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)c(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=u[d],i=p.exec(e)[2],n=i.toLowerCase()+"$lit$",o=t.getAttribute(n);t.removeAttribute(n);const s=o.split(a);this.parts.push({type:"attribute",index:l,name:i,strings:s}),d+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const n=t.parentNode,o=e.split(a),s=o.length-1;for(let e=0;e<s;e++){let i,s=o[e];if(""===s)i=h();else{const t=p.exec(s);null!==t&&c(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(s)}n.insertBefore(i,t),this.parts.push({type:"node",index:++l})}""===o[s]?(n.insertBefore(h(),t),i.push(t)):t.data=o[s],d+=s}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&l!==r||(l++,e.insertBefore(h(),t)),r=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(i.push(t),l--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),d++}}else o.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const c=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},d=t=>-1!==t.index,h=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:i},parts:n}=t,o=document.createTreeWalker(i,133,null,!1);let s=g(n),r=n[s],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,s=g(n,s),r=n[s]}c.forEach(t=>t.parentNode.removeChild(t))}const f=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},g=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(d(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const y=new WeakMap,v=t=>"function"==typeof t&&y.has(t),m={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let s,r=0,a=0,l=o.nextNode();for(;r<i.length;)if(s=i[r],d(s)){for(;a<s.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=e.pop(),l=o.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));r++}else this.__parts.push(void 0),r++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),x=` ${s} `;class S{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const a=p.exec(t);e+=null===a?t+(i?x:r):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==w&&(e=w.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const P=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new O(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!C(t))return t}let n="";for(let o=0;o<e;o++){n+=t[o];const e=i[o];if(void 0!==e){const t=e.value;if(P(t)||!C(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class O{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||P(t)&&t===this.value||(this.value=t,v(t)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=h()),t.__insert(this.endNode=h())}insertAfterPart(t){t.__insert(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;v(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(P(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===_?(this.value=_,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const i=new b(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const o of t)i=e[n],void 0===i&&(i=new N(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(o),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;v(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class j extends k{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends O{}let T=!1;(()=>{try{const t={get capture(){return T=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class R{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;v(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=I(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const I=t=>t&&(T?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function $(t){let e=V.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},V.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(s);return i=e.keyString.get(n),void 0===i&&(i=new l(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const V=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,n){const o=e[0];if("."===o){return new j(t,e.slice(1),i).parts}if("@"===o)return[new R(t,e.slice(1),n.eventContext)];if("?"===o)return[new A(t,e.slice(1),i)];return new k(t,e,i).parts}handleTextExpression(t){return new N(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const L=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const U=t=>e=>{const i=L(e.type,t);let n=V.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(i,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const r=e.strings.join(s);if(o=n.keyString.get(r),void 0===o){const i=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(i,t),o=new l(e,i),n.keyString.set(r,o)}return n.stringsArray.set(e.strings,o),o},B=["html","svg"],q=new Set,D=(t,e,i)=>{q.add(t);const n=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:s}=o;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,t);const r=document.createElement("style");for(let t=0;t<s;t++){const e=o[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{B.forEach(e=>{const i=V.get(L(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),u(t,i)})})})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:o}=t;if(null==i)return void n.appendChild(e);const s=document.createTreeWalker(n,133,null,!1);let r=g(o),a=0,l=-1;for(;s.nextNode();){l++;for(s.currentNode===i&&(a=f(e),i.parentNode.insertBefore(e,i));-1!==r&&o[r].index===l;){if(a>0){for(;-1!==r;)o[r].index+=a,r=g(o,r);return}r=g(o,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),u(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},F=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:F};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdateInternal(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=F){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||z,o="function"==typeof n?n:n.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||z.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=W){const n=this.constructor,o=n._attributeNameForProperty(t,i);if(void 0!==o){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let n=!0;if(void 0!==t){const o=this.constructor;i=i||o.getPropertyOptions(t),o._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;const Y=Element.prototype;Y.msMatchesSelector||Y.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class X{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const K=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new X(i,G)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Q={};class tt extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Z){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new X(String(e),G)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Q}}tt.finalized=!0,tt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,s=M.has(e),r=H&&11===e.nodeType&&!!e.host,a=r&&!q.has(n),l=a?document.createDocumentFragment():e;if(((t,e,i)=>{let n=M.get(e);void 0===n&&(o(e,e.firstChild),M.set(e,n=new N(Object.assign({templateFactory:$},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:U(n)},i)),a){const t=M.get(l);M.delete(l);const i=t.value instanceof b?t.value.template:void 0;D(n,l,i),o(e,e.firstChild),e.appendChild(l),M.set(e,t)}!s&&r&&window.ShadyCSS.styleElement(e.host)};const et=K`
  :host {
    font-family: var(--paper-font-body1_-_font-family);
    -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
    font-size: var(--paper-font-body1_-_font-size);
    font-weight: var(--paper-font-body1_-_font-weight);
    line-height: var(--paper-font-body1_-_line-height);
  }

  app-header-layout,
  ha-app-layout {
    background-color: var(--primary-background-color);
  }

  app-header,
  app-toolbar {
    background-color: var(--app-header-background-color);
    font-weight: 400;
    color: var(--app-header-text-color, white);
  }

  app-toolbar {
    height: var(--header-height);
  }

  app-header div[sticky] {
    height: 48px;
  }

  app-toolbar [main-title] {
    margin-left: 20px;
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

  button.link {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    text-align: left;
    text-decoration: underline;
    cursor: pointer;
  }

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
`;K`
  /* prevent clipping of positioned elements */
  paper-dialog-scrollable {
    --paper-dialog-scrollable: {
      -webkit-overflow-scrolling: auto;
    }
  }

  /* force smooth scrolling for iOS 10 */
  paper-dialog-scrollable.can-scroll {
    --paper-dialog-scrollable: {
      -webkit-overflow-scrolling: touch;
    }
  }

  .paper-dialog-buttons {
    align-items: flex-end;
    padding: 8px;
    padding-bottom: max(env(safe-area-inset-bottom), 8px);
  }

  @media all and (min-width: 450px) and (min-height: 500px) {
    ha-paper-dialog {
      min-width: 400px;
    }
  }

  @media all and (max-width: 450px), all and (max-height: 500px) {
    paper-dialog,
    ha-paper-dialog {
      margin: 0;
      width: calc(
        100% - env(safe-area-inset-right) - env(safe-area-inset-left)
      ) !important;
      min-width: calc(
        100% - env(safe-area-inset-right) - env(safe-area-inset-left)
      ) !important;
      max-width: calc(
        100% - env(safe-area-inset-right) - env(safe-area-inset-left)
      ) !important;
      max-height: calc(100% - var(--header-height));

      position: fixed !important;
      bottom: 0px;
      left: env(safe-area-inset-left);
      right: env(safe-area-inset-right);
      overflow: scroll;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }

  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-heading-ink-color: var(--primary-text-color);
    --mdc-dialog-content-ink-color: var(--primary-text-color);
    --justify-action-buttons: space-between;
  }

  ha-dialog .form {
    padding-bottom: 24px;
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
      --mdc-shape-medium: 0px;
      --vertial-align-dialog: flex-end;
    }
  }
  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }
  .error {
    color: var(--error-color);
  }
`,K`
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
`},function(t,e,i){"use strict";i.r(e),i.d(e,"LoaderElement",(function(){return s}));var n=i(0),o=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let s=class extends n.a{static get styles(){return n.b`
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
    `}render(){return n.d`<div class="loader"></div>`}constructor(){super()}};s=o([Object(n.c)("ihc-loader")],s)},function(t,e,i){"use strict";i.r(e),i.d(e,"HaPanelIHCViewer",(function(){return a}));var n=i(0),o=i(5),s=i(1),r=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};i(8),i(1);let a=class extends n.a{constructor(){super(),this.restartRequired=!1}static get styles(){return[o.a,n.b`
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
    `]}render(){return null==this.panel.config.ihcviewer?n.d`No controllers`:n.d`
      <div id="ihcviewer"  @restartrequired=${this.onRestartRequired}>
        <div id="ihcviewerheader">
          <div id="title">IHC Viewer</div>
          ${this.render_restart()}
          ${this.render_controllersSelector()}
        </div>
        <div id="controllers">
          ${this.panel.config.ihcviewer.map((t,e)=>n.d`
              <ihc-controller id="ihccontroller_${e}" controllerId="${t}" show="${this.selectedcontrollerid==t}"></ihc-controller>
          `)}
        </div>
      </div>
    `}render_restart(){return this.restartRequired?n.d`<span id="restartrequired" title="You have made changes to the manual ihc setup that will require a Home Assistant restart.">Restart required</span>`:""}render_controllersSelector(){return this.panel.config.ihcviewer.length<=1?n.d`<span></span>`:n.d`
      <span id="controllerselector">
        <select @change=${this.onChangeController}>
          ${this.panel.config.ihcviewer.map(t=>n.d`<option value="${t}">${t}</option>`)}
        </select>
      </span>`}connectedCallback(){super.connectedCallback(),s.IHCManager.initialize(this.hass),this.selectedcontrollerid=this.panel.config.ihcviewer[0]}onChangeController(t){this.selectedcontrollerid=t.target.value}onRestartRequired(t){return this.restartRequired=!0,!1}};r([Object(n.e)({type:Object})],a.prototype,"hass",void 0),r([Object(n.e)({type:Boolean})],a.prototype,"narrow",void 0),r([Object(n.e)({type:Boolean})],a.prototype,"showMenu",void 0),r([Object(n.e)({type:Object})],a.prototype,"panel",void 0),r([Object(n.e)({type:String})],a.prototype,"selectedcontrollerid",void 0),r([Object(n.e)({type:Boolean,attribute:!1})],a.prototype,"restartRequired",void 0),a=r([Object(n.c)("ha-panel-ihcviewer")],a)},function(t,e,i){"use strict";i.r(e),i.d(e,"IhcControllerElement",(function(){return d}));var n=i(0),o=i(5),s=i(4),r=i(3),a=i(1),l=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},c=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((n=n.apply(t,e||[])).next())}))};i(9),i(10),i(13),i(3);let d=class extends n.a{constructor(){super(),this.isProjectLoading=!1,this.selected=null,this.onselected=null,this.offselected=null,this.isProjectLoading=!1,this.ihcproject=null,this.ihcmapping=null,this.selectedtab=0}static get styles(){return[o.a,n.b`
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
      `]}render(){return n.d`
        ${"true"==this.show?"":n.d`<style>#content { display:none}</style>`}
        ${0==this.selectedtab?n.d``:n.d`<style>#project { display:none}</style>`}
        ${1==this.selectedtab?n.d`<style>#log { display:block}</style>`:n.d`<style>#log { display:none}</style>`}
        ${2==this.selectedtab?n.d`<style>#info { display:block}</style>`:n.d`<style>#info { display:none}</style>`}
        <div id="content" class="flex-container">
          <div id="controllertab">
            <div class="tab-button ${0==this.selectedtab?"selected":""}" @click=${this.selectTab} data-tabid='0'>Project</div>
            <div class="tab-button ${1==this.selectedtab?"selected":""}" @click=${this.selectTab} data-tabid='1'>Log</div>
            <div class="tab-button ${2==this.selectedtab?"selected":""}" @click=${this.selectTab} data-tabid='2'>Info</div>
          </div>
          <div id="project" class="flex-container">
            ${this.isProjectLoading?n.d`<div class="loader"></div>`:""}
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
    `}render_groups(){return null==this.ihcproject||this.isProjectLoading?"":this.ihcproject.Groups.map(t=>n.d`
      <ihc-tree-node id="group_${t.Id}"></ihc-tree-node>
    `)}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return c(this,void 0,void 0,(function*(){t.connectedCallback.call(this),this.loadController()}))}updated(t){const e=Object.create(null,{updated:{get:()=>super.updated}});return c(this,void 0,void 0,(function*(){e.updated.call(this,t),null!=this.ihcproject&&this.ihcproject.Groups.map(t=>{this.shadowRoot.getElementById("group_"+t.Id).data=t})}))}loadController(){return c(this,void 0,void 0,(function*(){this.isProjectLoading=!0,this.ihcmapping=yield a.IHCManager.instance.get(this.controllerId).getMapping();for(let t in this.ihcmapping){if("changed"in this.ihcmapping[t]){let t=new CustomEvent("restartrequired",{bubbles:!0,composed:!0});this.dispatchEvent(t);break}}this.ihcproject=yield a.IHCManager.instance.get(this.controllerId).getProject(),this.ihcproject&&this.updateProject(this.ihcproject),this.isProjectLoading=!1}))}updateProject(t){for(let e of t.Groups){e.iconclass="groupicon",e.Children=[];for(let t of e.Products){e.Children.push(t),t.iconclass="producticon",t.Children=[];for(let e of t.Inputs)t.Children.push(e),e.iconclass="inputicon",e.Id in this.ihcmapping&&(e.iconclass+=" connected");for(let e of t.Outputs)t.Children.push(e),e.iconclass="outputicon",e.Id in this.ihcmapping&&(e.iconclass+=" connected")}for(let t of e.FunctionBlocks){e.Children.push(t),t.iconclass="functionicon",t.Children=[];for(let e of t.Inputs)t.Children.push(e),e.iconclass="inputicon",e.Id in this.ihcmapping&&(e.iconclass+=" connected");for(let e of t.Outputs)t.Children.push(e),e.iconclass="outputicon",e.Id in this.ihcmapping&&(e.iconclass+=" connected")}}this.ihcproject=t}onSelectNode(t){var e,i,n;return c(this,void 0,void 0,(function*(){var o=this.shadowRoot.getElementById("ihcproperties"),a=null===(e=null==t?void 0:t.detail)||void 0===e?void 0:e.node;if(this.selected&&t.detail.shiftKey){if(this.selected==a)return!1;if(this.offselected)return!1;if(this.onselected){if(this.onselected==a)return!1;this.offselected=a,a.selected=r.Selection.OffIdSelected}else this.onselected=a,a.selected=r.Selection.OnIdSelected;return o.setSelected(this.selected,null===(i=this.onselected)||void 0===i?void 0:i.data.Id,null===(n=this.offselected)||void 0===n?void 0:n.data.Id),!1}return this.selected&&(this.selected.selected=r.Selection.NotSelected,this.selected=null,this.onselected&&(this.onselected.selected=r.Selection.NotSelected,this.onselected=null),this.offselected&&(this.offselected.selected=r.Selection.NotSelected,this.offselected=null),o.setSelected(null)),null==a||(this.selected=a,this.selected.selected=r.Selection.Selected,a.data instanceof s.b&&o.setSelected(this.selected)),!1}))}selectTab(t){var e=t.target.attributes["data-tabid"].value;this.selectedtab=e}};l([Object(n.e)({type:String})],d.prototype,"show",void 0),l([Object(n.e)({type:String})],d.prototype,"controllerId",void 0),l([Object(n.e)({type:Boolean,attribute:!1})],d.prototype,"isProjectLoading",void 0),l([Object(n.e)({type:Object,attribute:!1})],d.prototype,"selected",void 0),l([Object(n.e)({type:Object,attribute:!1})],d.prototype,"onselected",void 0),l([Object(n.e)({type:Object,attribute:!1})],d.prototype,"offselected",void 0),l([Object(n.e)({type:Number,attribute:!1})],d.prototype,"selectedtab",void 0),d=l([Object(n.c)("ihc-controller")],d)},function(t,e,i){"use strict";i.r(e),i.d(e,"IhcInfoElement",(function(){return a}));var n=i(0),o=i(1),s=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},r=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((n=n.apply(t,e||[])).next())}))};i(6);let a=class extends n.a{constructor(){super(...arguments),this.isLoading=!1}static get styles(){return n.b`
      #info {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
      }
    `}render(){if(null==this.systeminfo)return n.d`
      <div id="info">
        ${this.isLoading?n.d`<ihc-loader/>`:""}
      </div>`;var t=this.uptimeAsString();return n.d`
        <div id="info">
          ${this.isLoading?n.d`<ihc-loader/>`:""}
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
    `}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return r(this,void 0,void 0,(function*(){t.connectedCallback.call(this),this.systemInfoRequest()}))}systemInfoRequest(){return r(this,void 0,void 0,(function*(){this.isLoading=!0;try{let t=yield o.IHCManager.instance.fetchWithAuth("/api/ihcviewer/systeminfo/"+this.controllerId);t.ok&&(this.systeminfo=yield t.json())}finally{this.isLoading=!1}}))}uptimeAsString(){var t="";if(null!=this.systeminfo){var e=parseInt(this.systeminfo.uptime)/1e3,i=Math.floor(e/60/60/24);i>0&&(t+=i+" days ",e-=60*i*60*24);var n=Math.floor(e/60/60);(i>0||n>0)&&(t+=n+" hours ",e-=60*n*60);var o=Math.floor(e/60);(i>0||n>0||o>0)&&(t+=o+" min ",e-=60*o),t+=Math.floor(e)+" sec "}return t}};s([Object(n.e)({type:String,reflect:!0})],a.prototype,"controllerId",void 0),s([Object(n.e)({type:Boolean,attribute:!1})],a.prototype,"isLoading",void 0),a=s([Object(n.c)("ihc-info")],a)},function(t,e,i){"use strict";i.r(e),i.d(e,"IhcLogElement",(function(){return a}));var n=i(0),o=i(1),s=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},r=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((n=n.apply(t,e||[])).next())}))};i(6);let a=class extends n.a{constructor(){super(),this.log="",this.isLogLoading=!1,this.isLogLoading=!1,this.log=""}static get styles(){return n.b`
      #log {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
      }
    `}render(){return n.d`
      <div id="log">
        ${this.isLogLoading?n.d`<ihc-loader/>`:""}
        <pre id="ihc_log">${""==this.log?"No log data":this.log}</pre>
      </div>
    `}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return r(this,void 0,void 0,(function*(){t.connectedCallback.call(this),this.logRequest()}))}logRequest(){return r(this,void 0,void 0,(function*(){this.isLogLoading=!0;try{let t=yield o.IHCManager.instance.fetchWithAuth("/api/ihcviewer/log/"+this.controllerId);if(t.ok){let e=yield t.text();this.log=""==e?"Log is empty":e}}finally{this.isLogLoading=!1}}))}};s([Object(n.e)({type:String,reflect:!0})],a.prototype,"controllerId",void 0),s([Object(n.e)({type:String,attribute:!1})],a.prototype,"log",void 0),s([Object(n.e)({type:Boolean,attribute:!1})],a.prototype,"isLogLoading",void 0),a=s([Object(n.c)("ihc-log")],a)},function(t,e,i){"use strict";i.r(e),i.d(e,"IhcBinaryResourceDialog",(function(){return a}));var n=i(0),o=i(2),s=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},r=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((n=n.apply(t,e||[])).next())}))};let a=class extends o.IhcResourceDialog{constructor(){super(),this.title="Add a binary sensor"}static get styles(){return super.styles.concat([n.b`
        #type {
          width: 100%;
        }
      `,,])}render_controls(){return n.d`
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
    `}onOk(){const t=Object.create(null,{onOk:{get:()=>super.onOk}});return r(this,void 0,void 0,(function*(){this.inverted=this.shadowRoot.getElementById("inverted").checked,this.type=this.shadowRoot.getElementById("type").value,t.onOk.call(this)}))}};s([Object(n.e)({type:Boolean,attribute:!1})],a.prototype,"inverted",void 0),s([Object(n.e)({type:String,attribute:!1})],a.prototype,"type",void 0),a=s([Object(n.c)("ihc-binary-res-dlg")],a)},function(t,e,i){"use strict";i.r(e),i.d(e,"IhcSensorResourceDialog",(function(){return a}));var n=i(0),o=i(2),s=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},r=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((n=n.apply(t,e||[])).next())}))};let a=class extends o.IhcResourceDialog{constructor(){super(),this.title="Add a sensor"}static get styles(){return super.styles.concat(n.b`
      `)}render_controls(){return n.d`
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
    `}onOk(){const t=Object.create(null,{onOk:{get:()=>super.onOk}});return r(this,void 0,void 0,(function*(){this.unit=this.shadowRoot.getElementById("unit").value,t.onOk.call(this)}))}};s([Object(n.e)({type:String,attribute:!1})],a.prototype,"unit",void 0),a=s([Object(n.c)("ihc-sensor-res-dlg")],a)},function(t,e,i){"use strict";i.r(e),i.d(e,"IhcPropertiesElement",(function(){return l}));var n=i(0),o=i(2);var s=i(1),r=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},a=function(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((n=n.apply(t,e||[])).next())}))};i(2),i(11),i(12),i(2),i(6);let l=class extends n.a{constructor(){super(),this.isLoading=!1,this.selected=null,this.isLoading=!1}static get styles(){return[o.IhcResourceDialog.button_style,n.b`
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
    `]}render(){var t;return this.isLoading?n.d`<ihc-loader/>`:null==this.selected?"":n.d`
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
        ${this.selected.entity_id?n.d`
          <div>
            <span>Entity:</span><span> ${this.selected.entity_id}</span>
          </div>
        `:""}
        ${this.selected.state?n.d`
          <div>
            <span>Friendly name:</span><span> ${this.selected.state.attributes.friendly_name}</span>
          </div>
        `:""}
      </div>
      <div id="actions">
        ${(null===(t=this.selected)||void 0===t?void 0:t.manual)?n.d`
          <button @click=${this.removeManual}>Remove manual setup</button>
          <div>
            This resource is setup manually, and you can remove the manual setup by clicking the buttom above.
            (A restart is required)
          </div>
        `:""}
        ${this.action_binary_sensor?n.d`<button @click=${()=>{this.showDialog("binary-dlg")}}>Binary sensor</button>`:""}
        ${this.action_light?n.d`<button @click=${()=>{this.showDialog("light-dlg")}}>Light</button>`:""}
        ${this.action_sensor?n.d`<button @click=${()=>{this.showDialog("sensor-dlg")}}>Sensor</button>`:""}
        ${this.action_switch?n.d`<button @click=${()=>{this.showDialog("switch-dlg")}}>Switch</button>`:""}
        ${this.action_binary_sensor||this.action_light||this.action_sensor||this.action_switch?n.d`<div>
            To make a manual setup of this ihc resource id as a Home Assistant entity, click one of the buttons.
            Note: this is a manual setup. You should know what you are doing.
            Just because it is possible to add something, does not mean it make sense.
          </div>`:""}
        </div>
        <ihc-binary-res-dlg id="binary-dlg" @ok=${this.makeBinarySensor}></ihc-binary-res-dlg>
        <ihc-resource-dlg id="light-dlg" @ok=${this.makeLight} title="Add a light"></ihc-resource-dlg>
        <ihc-resource-dlg id="switch-dlg" @ok=${this.makeSwitch} title="Add a switch"></ihc-resource-dlg>
        <ihc-sensor-res-dlg id="sensor-dlg" @ok=${this.makeSensor}></ihc-sensor-res-dlg>
      `}renderValueActions(){return"bool"==this.selected.type?n.d`<span class="valueactions">
        <span @click=${this.runtimeBoolOn} title="Set the value to On(true)">on</span>
        <span @click=${this.runtimeBoolOff} title="Set the value to Off(false)">off</span>
        <span @click=${this.runtimeBoolToggle} title="Toggle the value">toggle</span>
      </span>`:""}connectedCallback(){const t=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return a(this,void 0,void 0,(function*(){t.connectedCallback.call(this)}))}setSelected(t,e=null,i=null){return a(this,void 0,void 0,(function*(){if(this.on_id=e,this.off_id=i,null==t)return this.selected=null,void(this.selectednode=null);this.selectednode=t;let n=t.data.Id;this.isLoading=!0,this.action_binary_sensor=!1,this.action_light=!1,this.action_sensor=!1,this.action_switch=!1;let o=yield s.IHCManager.instance.fetchWithAuth(`/api/ihcviewer/getresource/${this.controllerId}/${n}`);if(o.ok&&(this.selected=yield o.json(),null!=this.selected&&this.selected.type&&!this.selected.entity_id))switch(this.selected.type){case"bool":this.action_binary_sensor=null==e,this.action_light=!0,this.action_switch=!0;break;case"int":this.action_light=this.selectednode.data.IsLightLevel,this.action_sensor=null==e;break;case"time":case"float":this.action_sensor=!0}this.isLoading=!1}))}showDialog(t){var e=this.shadowRoot.getElementById(t);e.controllerId=this.controllerId,e.ihc_id=this.selected.id,e.on_id=this.on_id,e.off_id=this.off_id,e.open()}makeBinarySensor(){return a(this,void 0,void 0,(function*(){var t=this.shadowRoot.getElementById("binary-dlg"),e={id:t.ihc_id,name:t.name,type:t.type,inverted:t.inverted};yield this.apiRequest("/api/ihcviewer/manual/binarysensor/"+this.controllerId,e,"POST"),this.selectednode.data.iconclass+=" connected",this.selectednode.requestUpdate(),yield this.setSelected(this.selectednode);let i=new CustomEvent("restartrequired",{bubbles:!0,composed:!0});this.dispatchEvent(i)}))}makeLight(){return a(this,void 0,void 0,(function*(){var t=this.shadowRoot.getElementById("light-dlg"),e={id:t.ihc_id,name:t.name};null!=t.on_id&&(e.on_id=t.on_id),null!=t.off_id&&(e.off_id=t.off_id),yield this.apiRequest("/api/ihcviewer/manual/light/"+this.controllerId,e,"POST"),yield this.setSelected(this.selectednode)}))}makeSwitch(){return a(this,void 0,void 0,(function*(){var t=this.shadowRoot.getElementById("switch-dlg"),e={id:t.ihc_id,name:t.name};null!=t.on_id&&(e.on_id=t.on_id),null!=t.off_id&&(e.off_id=t.off_id),yield this.apiRequest("/api/ihcviewer/manual/switch/"+this.controllerId,e,"POST"),yield this.setSelected(this.selectednode)}))}makeSensor(){return a(this,void 0,void 0,(function*(){var t=this.shadowRoot.getElementById("sensor-dlg"),e={id:t.ihc_id,name:t.name,unit:t.unit};yield this.apiRequest("/api/ihcviewer/manual/sensor/"+this.controllerId,e,"POST"),yield this.setSelected(this.selectednode)}))}removeManual(){return a(this,void 0,void 0,(function*(){var t=this.selected.id;yield this.apiRequest(`/api/ihcviewer/manual/remove/${this.controllerId}/${t}`,"","POST"),yield this.setSelected(this.selectednode)}))}runtimeBoolOn(){return a(this,void 0,void 0,(function*(){var t=this.selected.id;"on"==(yield this.apiRequest(`/api/ihcviewer/setboolresource/${this.controllerId}/${t}/on`,"","POST"))&&(this.selected.value=!0,this.requestUpdate())}))}runtimeBoolOff(){return a(this,void 0,void 0,(function*(){var t=this.selected.id;"off"==(yield this.apiRequest(`/api/ihcviewer/setboolresource/${this.controllerId}/${t}/off`,"","POST"))&&(this.selected.value=!1,this.requestUpdate())}))}runtimeBoolToggle(){return a(this,void 0,void 0,(function*(){var t=this.selected.id;yield this.apiRequest(`/api/ihcviewer/setboolresource/${this.controllerId}/${t}/toggle`,"","POST")}))}apiRequest(t,e,i="GET"){return a(this,void 0,void 0,(function*(){let n=yield s.IHCManager.instance.fetchWithAuth(t,{method:i,cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return n.ok?yield n.text():"error"}))}onCopy(){var t,e;t=this.selected.data.Id,(e=document.createElement("textarea")).style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="2em",e.style.height="2em",e.style.padding="0",e.style.border="none",e.style.outline="none",e.style.boxShadow="none",e.style.background="transparent",e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}};r([Object(n.e)({type:String})],l.prototype,"controllerId",void 0),r([Object(n.e)({type:Boolean,attribute:!1})],l.prototype,"isLoading",void 0),r([Object(n.e)({type:Object,attribute:!1})],l.prototype,"selected",void 0),l=r([Object(n.c)("ihc-properties")],l)}]);
//# sourceMappingURL=panel.js.map