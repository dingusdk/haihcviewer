!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=2)}([function(e,t,s){"use strict";s.d(t,"c",(function(){return Y})),s.d(t,"e",(function(){return K})),s.d(t,"d",(function(){return $})),s.d(t,"b",(function(){return ie})),s.d(t,"a",(function(){return re}));
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
const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},r=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${r}--\x3e`,a=new RegExp(`${r}|${o}`);class l{constructor(e,t){this.parts=[],this.element=t;const s=[],i=[],n=document.createTreeWalker(t.content,133,null,!1);let o=0,l=-1,d=0;const{strings:u,values:{length:f}}=e;for(;d<f;){const e=n.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)c(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=u[d],s=h.exec(t)[2],i=s.toLowerCase()+"$lit$",n=e.getAttribute(i);e.removeAttribute(i);const r=n.split(a);this.parts.push({type:"attribute",index:l,name:s,strings:r}),d+=r.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const i=e.parentNode,n=t.split(a),r=n.length-1;for(let t=0;t<r;t++){let s,r=n[t];if(""===r)s=p();else{const e=h.exec(r);null!==e&&c(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(r)}i.insertBefore(s,e),this.parts.push({type:"node",index:++l})}""===n[r]?(i.insertBefore(p(),e),s.push(e)):e.data=n[r],d+=r}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&l!==o||(l++,t.insertBefore(p(),e)),o=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(s.push(e),l--),d++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),d++}}else n.currentNode=i.pop()}for(const e of s)e.parentNode.removeChild(e)}}const c=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},d=e=>-1!==e.index,p=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(e,t){const{element:{content:s},parts:i}=e,n=document.createTreeWalker(s,133,null,!1);let r=y(i),o=i[r],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=y(i,r),o=i[r]}c.forEach(e=>e.parentNode.removeChild(e))}const f=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},y=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(d(t))return s}return-1};
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
const g=new WeakMap,v=e=>"function"==typeof e&&g.has(e),m={},_={};
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
class w{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,o=0,a=0,l=n.nextNode();for(;o<s.length;)if(r=s[o],d(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const x=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),b=` ${r} `;class S{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const e=this.strings[i],n=e.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===e.indexOf("--\x3e",n+1);const a=h.exec(e);t+=null===a?e+(s?b:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==x&&(t=x.createHTML(t)),e.innerHTML=t,e}}
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
const P=e=>null===e||!("object"==typeof e||"function"==typeof e),C=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class A{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new N(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=s[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!C(e))return e}let i="";for(let n=0;n<t;n++){i+=e[n];const t=s[n];if(void 0!==t){const e=t.value;if(P(e)||!C(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===m||P(e)&&e===this.value||(this.value=e,v(e)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const e=this.value;this.value=m,e(this)}this.value!==m&&this.committer.commit()}}class O{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(p()),this.endNode=e.appendChild(p())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=p()),e.__insert(this.endNode=p())}insertAfterPart(e){e.__insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}const e=this.__pendingValue;e!==m&&(P(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):C(e)?this.__commitIterable(e):e===_?(this.value=_,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof w&&this.value.template===t)this.value.update(e.values);else{const s=new w(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const n of e)s=t[i],void 0===s&&(s=new O(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(n),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=m}}class k extends A{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends N{}let V=!1;(()=>{try{const e={get capture(){return V=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class j{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=m,e(this)}if(this.__pendingValue===m)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=R(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=m}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const R=e=>e&&(V?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;function H(e){let t=M.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},M.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const i=e.strings.join(r);return s=t.keyString.get(i),void 0===s&&(s=new l(e,e.getTemplateElement()),t.keyString.set(i,s)),t.stringsArray.set(e.strings,s),s}const M=new Map,L=new WeakMap;
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
 */const I=new
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
class{handleAttributeExpressions(e,t,s,i){const n=t[0];if("."===n){return new k(e,t.slice(1),s).parts}if("@"===n)return[new j(e,t.slice(1),i.eventContext)];if("?"===n)return[new E(e,t.slice(1),s)];return new A(e,t,s).parts}handleTextExpression(e){return new O(e)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const $=(e,...t)=>new S(e,t,"html",I),U=(e,t)=>`${e}--${t}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const B=e=>t=>{const s=U(t.type,e);let i=M.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},M.set(s,i));let n=i.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(r);if(n=i.keyString.get(o),void 0===n){const s=t.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(s,e),n=new l(t,s),i.keyString.set(o,n)}return i.stringsArray.set(t.strings,n),n},F=["html","svg"],q=new Set,z=(e,t,s)=>{q.add(e);const i=s?s.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{F.forEach(t=>{const s=M.get(U(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),u(e,s)})})})(e);const a=i.content;s?function(e,t,s=null){const{element:{content:i},parts:n}=e;if(null==s)return void i.appendChild(t);const r=document.createTreeWalker(i,133,null,!1);let o=y(n),a=0,l=-1;for(;r.nextNode();){l++;for(r.currentNode===s&&(a=f(t),s.parentNode.insertBefore(t,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=y(n,o);return}o=y(n,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),u(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},J=(e,t)=>t!==e&&(t==t||e==e),Z={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:J};class X extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Z){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdateInternal(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Z}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=J){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||W,n="function"==typeof i?i:i.fromAttribute;return n?n(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||W.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=Z){const i=this.constructor,n=i._attributeNameForProperty(e,s);if(void 0!==n){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,s){let i=!0;if(void 0!==e){const n=this.constructor;s=s||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}X.finalized=!0;
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
const Y=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),G=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(s){s.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function K(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):G(e,t)}const Q=Element.prototype;Q.msMatchesSelector||Q.webkitMatchesSelector;
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
const ee=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol();class se{constructor(e,t){if(t!==te)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ee?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ie=(e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof se)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new se(s,te)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ne={};class re extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),i=[];s.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!ee){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new se(String(t),te)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ee?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ne&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ne}}re.finalized=!0,re.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,r=L.has(t),o=D&&11===t.nodeType&&!!t.host,a=o&&!q.has(i),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let i=L.get(t);void 0===i&&(n(t,t.firstChild),L.set(t,i=new O(Object.assign({templateFactory:H},s))),i.appendInto(t)),i.setValue(e),i.commit()})(e,l,Object.assign({templateFactory:B(i)},s)),a){const e=L.get(l);L.delete(l);const s=e.value instanceof w?e.value.template:void 0;z(i,l,s),n(t,t.firstChild),t.appendChild(l),L.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)}},function(e,t,s){"use strict";s.r(t),s.d(t,"IhcTreeNode",(function(){return r}));var i=s(0),n=function(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o};let r=class extends i.a{constructor(){super(),this.data=null,this.expanded=!1,this.selected=!1,this.expanded=!1,this.selected=!1}static get styles(){return i.b`
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
      .expandicon .minus {
        display: none;
      }
      .expandicon.expanded .plus {
        display: none;
      }
      .expandicon.expanded .minus {
        display: inline-block;
      }
      .treenode.selected {
        background-color: var(--sidebar-selected-text-color);
      }
      .treetext {
        cursor: default;
        font-size: 18px;
        vertical-align: middle;
      }
      .treeinfo {
        font-size: 0.8em;
        cursor: default;
      }
      div.treenode ul {
        margin-top: 0;
      }
    `}render(){var e=[];return this.data.Children&&(e=this.data.Children.map(e=>i.d`
          <ihc-tree-node data="${JSON.stringify(e)}"></ihc-tree-node>
        `)),i.d`
      <div id="treenode" class="treenode ${this.getSelectedClasses(this.selected)} ${this.getThemeClasses()}">
        <span style="display: flex; flex-direction: row">
          <span>
            ${this.data.Children?i.d`
                    <span
                      class="${this.getExpandClasses(this.expanded)}"
                      @click=${this.toggleExpand}
                    >
                      <svg
                        class="plus"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
                        />
                      </svg>
                      <svg
                        class="minus"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
                        />
                      </svg>
                    </span>
                  `:""}
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
            <span class="treetext" @click=${this.select}>${this.data.Name}</span>
            ${this.data.Note?i.d` <span class="treeinfo">Note: ${this.data.Note}</span> `:""}
            ${this.data.Position?i.d`
                    <span class="treeinfo"
                      >Position: ${this.data.Position}</span
                    >
                  `:""}
          </span>
        </span>
        ${this.expanded?i.d`
                <ul>
                  ${e}
                </ul>
              `:""}
      </div>
      </template>
    `}getThemeClasses(){return""}getExpandClasses(e){return e?"expandicon expanded":"expandicon"}toggleExpand(){this.expanded=!this.expanded}getSelectedClasses(e){return e?"selected":""}select(e){this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{node:this}}))}};n([Object(i.e)({type:Object,reflect:!0})],r.prototype,"data",void 0),n([Object(i.e)({type:Boolean,reflect:!0})],r.prototype,"expanded",void 0),n([Object(i.e)({type:Boolean,reflect:!0})],r.prototype,"selected",void 0),r=n([Object(i.c)("ihc-tree-node")],r)},function(e,t,s){"use strict";s.r(t),s.d(t,"HaPanelIHCViewer",(function(){return g}));var i=s(0);class n{constructor(e){this.Name=e.attributes.name.value;var t=e.attributes.id.value;this.Id=parseInt(t.substring(3),16)}FindAndAdd(e,t,s){for(var i=e.ownerDocument.evaluate(t,e,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var n=i.iterateNext();if(null==n)break;s(n)}}}class r extends n{constructor(e){super(e),this.Note=e.attributes.note.value,this.FunctionBlocks=new Array,this.Products=new Array,this.FindAndAdd(e,"functionblock",e=>{this.FunctionBlocks.push(new c(e))});for(var t=e.ownerDocument.evaluate("product_airlink",e,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){if(null==(i=t.iterateNext()))break;var s=new a(i);this.Products.push(s)}for(t=e.ownerDocument.evaluate("product_dataline",e,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var i;if(null==(i=t.iterateNext()))break;s=new l(i);this.Products.push(s)}}}class o extends n{constructor(e){super(e),this.Inputs=new Array,this.Outputs=new Array,this.Note=e.attributes.note.value,this.Position=e.attributes.position.value,this.FindAndAdd(e,"airlink_input",e=>{this.Inputs.push(new p(e))}),this.FindAndAdd(e,"airlink_dimmer_increase",e=>{this.Inputs.push(new p(e))}),this.FindAndAdd(e,"airlink_dimmer_decrease",e=>{this.Inputs.push(new p(e))}),this.FindAndAdd(e,"airlink_dimming",e=>{this.Inputs.push(new p(e))}),this.FindAndAdd(e,"dataline_input",e=>{this.Inputs.push(new p(e))}),this.FindAndAdd(e,"airlink_relay",e=>{this.Outputs.push(new h(e))}),this.FindAndAdd(e,"dataline_output",e=>{this.Outputs.push(new h(e))}),this.FindAndAdd(e,"light_indication",e=>{this.Outputs.push(new h(e))})}}class a extends o{constructor(e){super(e)}}class l extends o{constructor(e){super(e)}}class c extends n{constructor(e){super(e),this.Note=e.attributes.note.value,this.Inputs=new Array;for(var t=e.ownerDocument.evaluate("inputs/*",e,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var s=t.iterateNext();if(null==s)break;var i=new p(s);this.Inputs.push(i)}this.Outputs=new Array;for(var n=e.ownerDocument.evaluate("outputs/*",e,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var r=n.iterateNext();if(null==r)break;var o=new h(r);this.Outputs.push(o)}}}class d extends n{constructor(e){super(e)}}class p extends d{constructor(e){super(e)}}class h extends d{constructor(e){super(e)}}class u{constructor(e){this.xmldoc=e,this.Groups=new Array;for(var t=this.xmldoc.evaluate("/utcs_project/groups/group",this.xmldoc,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);;){var s=t.iterateNext();if(null==s)break;var i=new r(s);this.Groups.push(i)}}}var f=function(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o},y=function(e,t,s,i){return new(s||(s=Promise))((function(n,r){function o(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))};s(1);let g=class extends i.a{constructor(){super(),this.log="",this.isProjectLoading=!1,this.isLogLoading=!1,this.selected=null,this.selectedtype="",this.selectedvalue="",this,this.isProjectLoading=!1,this.isLogLoading=!1,this.log="",this.ihcproject=null,this.ihcmapping=null}static get styles(){return i.b`
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
    `}render(){const e=this.ihcproject.Groups.map(e=>i.d`
        <ihc-tree-node data="${JSON.stringify(e)}"></ihc-tree-node>
      `);return i.d`
      <div id="ihcviewer" class="flex-contianer">
        <div id="title">IHC Viewer</div>
        <div id="content" class="flex-contianer">
          <div class="topbox">
            ${this.isProjectLoading?i.d`<div class="loader"></div>`:""}
            <div id="ihcprojecttree">
              <ul>
                ${e}
              </ul>
            </div>
            <div id="log">
              <h2>IHC controller log:</h2>
              ${this.isLogLoading?i.d`<div class="loader"></div>`:""}
              <pre id="ihc_log">${this.log}</pre>
            </div>
          </div>
          <div id="ihcproperties">
            ${this.selected?i.d`
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
                `:""}
          </div>
        </div>
      </div>
    `}connectedCallback(){const e=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return y(this,void 0,void 0,(function*(){e.connectedCallback.call(this),this.addEventListener("select",this._OnSelectNode),this.isProjectLoading=!0,this.headers={headers:{Authorization:"Bearer "+this.hass.connection.options.auth.accessToken}},yield this.ihcMappingRequest(),yield this.projectRequest(),this.isProjectLoading=!1,yield this.logRequest()}))}ihcMappingRequest(){return y(this,void 0,void 0,(function*(){let e=yield fetch("/api/ihcviewer/mapping",this.headers);e.ok&&(this.ihcmapping=yield e.json())}))}projectRequest(){return y(this,void 0,void 0,(function*(){let e=yield fetch("/api/ihcviewer/project",this.headers);if(e.ok){let t=yield e.text(),s=(new DOMParser).parseFromString(t,"text/xml"),i=new u(s);this.updateProject(i)}}))}logRequest(){return y(this,void 0,void 0,(function*(){this.isLogLoading=!0;let e=yield fetch("/api/ihcviewer/log",this.headers);if(e.ok){let t=yield e.text();this.log=""==t?"Log is empty":t}this.isLogLoading=!1}))}updateProject(e){for(let t of e.Groups){t.iconclass="groupicon",t.Children=[];for(let e of t.Products){t.Children.push(e),e.iconclass="producticon",e.Children=[];for(let t of e.Inputs)e.Children.push(t),t.iconclass="inputicon",t.Id in this.ihcmapping&&(t.iconclass+=" connected");for(let t of e.Outputs)e.Children.push(t),t.iconclass="outputicon",t.Id in this.ihcmapping&&(t.iconclass+=" connected")}for(let e of t.FunctionBlocks){t.Children.push(e),e.iconclass="functionicon",e.Children=[];for(let t of e.Inputs)e.Children.push(t),t.iconclass="inputicon",t.Id in this.ihcmapping&&(t.iconclass+=" connected");for(let t of e.Outputs)e.Children.push(t),t.iconclass="outputicon",t.Id in this.ihcmapping&&(t.iconclass+=" connected")}}this.ihcproject=e}_OnSelectNode(e){return y(this,void 0,void 0,(function*(){this.selected&&(this.selected.selected=!1,this.selected=null);var t=e.detail.node;if(t.data.iconclass.startsWith("inputicon")&&t.data.iconclass.startsWith("outputicon"))return this.selected=null,!1;if(this.selected=e.detail.node,null==this.selected)return!1;this.selected.selected=!0,this.selectedtype="",this.selectedvalue="",this.selectedentity="";let s=yield fetch("/api/ihcviewer/getvalue?id="+this.selected.data.Id,this.headers);if(s.ok){let e=yield s.json();this.selectedtype=e.type,this.selectedvalue=e.value,this.selectedentity=e.entity}return!1}))}OnCopy(){this.copyTextToClipboard(this.selected.data.Id)}copyTextToClipboard(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="2em",t.style.height="2em",t.style.padding="0",t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}};f([Object(i.e)({type:Object,reflect:!0})],g.prototype,"hass",void 0),f([Object(i.e)({type:Boolean,reflect:!0})],g.prototype,"narrow",void 0),f([Object(i.e)({type:Boolean,reflect:!0})],g.prototype,"showMenu",void 0),f([Object(i.e)({type:Object,reflect:!0})],g.prototype,"panel",void 0),f([Object(i.e)({type:String})],g.prototype,"log",void 0),f([Object(i.e)({type:Boolean})],g.prototype,"isProjectLoading",void 0),f([Object(i.e)({type:Boolean})],g.prototype,"isLogLoading",void 0),f([Object(i.e)({type:Object})],g.prototype,"selected",void 0),f([Object(i.e)({type:String})],g.prototype,"selectedtype",void 0),f([Object(i.e)({type:String})],g.prototype,"selectedvalue",void 0),f([Object(i.e)({type:String})],g.prototype,"selectedentity",void 0),g=f([Object(i.c)("ha-panel-ihcviewer")],g)}]);
//# sourceMappingURL=panel.js.map