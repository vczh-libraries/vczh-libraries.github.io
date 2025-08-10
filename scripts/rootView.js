var sanitized_Gaclib_RootView=(()=>{var Q=Object.freeze,I=Object.defineProperty;var it=Object.getOwnPropertyDescriptor;var st=Object.getOwnPropertyNames;var ot=Object.prototype.hasOwnProperty;var rt=(i,t)=>{for(var e in t)I(i,e,{get:t[e],enumerable:!0})},at=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of st(t))!ot.call(i,s)&&s!==e&&I(i,s,{get:()=>t[s],enumerable:!(n=it(t,s))||n.enumerable});return i};var lt=i=>at(I({},"__esModule",{value:!0}),i);var X=(i,t)=>Q(I(i,"raw",{value:Q(t||i.slice())}));var gt={};rt(gt,{viewExport:()=>ft});var ct=new WeakMap;var _=i=>typeof i=="function"&&ct.has(i);var D=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0;var E=(i,t,e=null)=>{for(;t!==e;){let n=t.nextSibling;i.removeChild(t),t=n}};var d={},O={};var m=`{{lit-${String(Math.random()).slice(2)}}}`,F=`<!--${m}-->`,Y=new RegExp(`${m}|${F}`),T="$lit$",A=class{constructor(t,e){this.parts=[],this.element=e;let n=[],s=[],r=document.createTreeWalker(e.content,133,null,!1),l=0,a=-1,c=0,{strings:S,values:{length:nt}}=t;for(;c<nt;){let o=r.nextNode();if(o===null){r.currentNode=s.pop();continue}if(a++,o.nodeType===1){if(o.hasAttributes()){let p=o.attributes,{length:L}=p,g=0;for(let h=0;h<L;h++)Z(p[h].name,T)&&g++;for(;g-- >0;){let h=S[c],w=$.exec(h)[2],b=w.toLowerCase()+T,x=o.getAttribute(b);o.removeAttribute(b);let f=x.split(Y);this.parts.push({type:"attribute",index:a,name:w,strings:f}),c+=f.length-1}}o.tagName==="TEMPLATE"&&(s.push(o),r.currentNode=o.content)}else if(o.nodeType===3){let p=o.data;if(p.indexOf(m)>=0){let L=o.parentNode,g=p.split(Y),h=g.length-1;for(let w=0;w<h;w++){let b,x=g[w];if(x==="")b=u();else{let f=$.exec(x);f!==null&&Z(f[2],T)&&(x=x.slice(0,f.index)+f[1]+f[2].slice(0,-T.length)+f[3]),b=document.createTextNode(x)}L.insertBefore(b,o),this.parts.push({type:"node",index:++a})}g[h]===""?(L.insertBefore(u(),o),n.push(o)):o.data=g[h],c+=h}}else if(o.nodeType===8)if(o.data===m){let p=o.parentNode;(o.previousSibling===null||a===l)&&(a++,p.insertBefore(u(),o)),l=a,this.parts.push({type:"node",index:a}),o.nextSibling===null?o.data="":(n.push(o),a--),c++}else{let p=-1;for(;(p=o.data.indexOf(m,p+1))!==-1;)this.parts.push({type:"node",index:-1}),c++}}for(let o of n)o.parentNode.removeChild(o)}},Z=(i,t)=>{let e=i.length-t.length;return e>=0&&i.slice(e)===t},W=i=>i.index!==-1,u=()=>document.createComment(""),$=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var y=class{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(let n of this.__parts)n!==void 0&&n.setValue(t[e]),e++;for(let n of this.__parts)n!==void 0&&n.commit()}_clone(){let t=D?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1),r=0,l=0,a,c=s.nextNode();for(;r<n.length;){if(a=n[r],!W(a)){this.__parts.push(void 0),r++;continue}for(;l<a.index;)l++,c.nodeName==="TEMPLATE"&&(e.push(c),s.currentNode=c.content),(c=s.nextNode())===null&&(s.currentNode=e.pop(),c=s.nextNode());if(a.type==="node"){let S=this.processor.handleTextExpression(this.options);S.insertAfterNode(c.previousSibling),this.__parts.push(S)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,a.name,a.strings,this.options));r++}return D&&(document.adoptNode(t),customElements.upgrade(t)),t}};var pt=` ${m} `,v=class{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){let t=this.strings.length-1,e="",n=!1;for(let s=0;s<t;s++){let r=this.strings[s],l=r.lastIndexOf("<!--");n=(l>-1||n)&&r.indexOf("-->",l+1)===-1;let a=$.exec(r);a===null?e+=r+(n?pt:F):e+=r.substr(0,a.index)+a[1]+a[2]+T+a[3]+m}return e+=this.strings[t],e}getTemplateElement(){let t=document.createElement("template");return t.innerHTML=this.getHTML(),t}};var R=i=>i===null||!(typeof i=="object"||typeof i=="function"),j=i=>Array.isArray(i)||!!(i&&i[Symbol.iterator]),V=class{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let s=0;s<n.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new C(this)}_getValue(){let t=this.strings,e=t.length-1,n="";for(let s=0;s<e;s++){n+=t[s];let r=this.parts[s];if(r!==void 0){let l=r.value;if(R(l)||!j(l))n+=typeof l=="string"?l:String(l);else for(let a of l)n+=typeof a=="string"?a:String(a)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},C=class{constructor(t){this.value=void 0,this.committer=t}setValue(t){t!==d&&(!R(t)||t!==this.value)&&(this.value=t,_(t)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){let t=this.value;this.value=d,t(this)}this.value!==d&&this.committer.commit()}},N=class i{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(u()),this.endNode=t.appendChild(u())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=u()),t.__insert(this.endNode=u())}insertAfterPart(t){t.__insert(this.startNode=u()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;_(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=d,e(this)}let t=this.__pendingValue;t!==d&&(R(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):j(t)?this.__commitIterable(t):t===O?(this.value=O,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){let e=this.startNode.nextSibling;t=t??"";let n=typeof t=="string"?t:String(t);e===this.endNode.previousSibling&&e.nodeType===3?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){let e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{let n=new y(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());let e=this.value,n=0,s;for(let r of t)s=e[n],s===void 0&&(s=new i(this.options),e.push(s),n===0?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(r),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){E(this.startNode.parentNode,t.nextSibling,this.endNode)}},P=class{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==""||n[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){let e=this.__pendingValue;this.__pendingValue=d,e(this)}if(this.__pendingValue===d)return;let t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=d}},k=class extends V{constructor(t,e,n){super(t,e,n),this.single=n.length===2&&n[0]===""&&n[1]===""}_createPart(){return new B(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},B=class extends C{},tt=!1;(()=>{try{let i={get capture(){return tt=!0,!1}};window.addEventListener("test",i,i),window.removeEventListener("test",i,i)}catch{}})();var M=class{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=d,r(this)}if(this.__pendingValue===d)return;let t=this.__pendingValue,e=this.value,n=t==null||e!=null&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=t!=null&&(e==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=ht(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=d}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}},ht=i=>i&&(tt?{capture:i.capture,passive:i.passive,once:i.once}:i.capture);var H=class{handleAttributeExpressions(t,e,n,s){let r=e[0];return r==="."?new k(t,e.slice(1),n).parts:r==="@"?[new M(t,e.slice(1),s.eventContext)]:r==="?"?[new P(t,e.slice(1),n)]:new V(t,e,n).parts}handleTextExpression(t){return new N(t)}},U=new H;function q(i){let t=G.get(i.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},G.set(i.type,t));let e=t.stringsArray.get(i.strings);if(e!==void 0)return e;let n=i.strings.join(m);return e=t.keyString.get(n),e===void 0&&(e=new A(i,i.getTemplateElement()),t.keyString.set(n,e)),t.stringsArray.set(i.strings,e),e}var G=new Map;var z=new WeakMap,J=(i,t,e)=>{let n=z.get(t);n===void 0&&(E(t,t.firstChild),z.set(t,n=new N(Object.assign({templateFactory:q},e))),n.appendInto(t)),n.setValue(i),n.commit()};typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");var K=(i,...t)=>new v(i,t,"html",U);var ut=[["Home","index","HOME"],["Tutorial","doc/current/gacui/running","TUTORIAL"],["Demo","demo","DEMOS"],["Download","doc/current/home/download","DOWNLOAD"],["Document","document","DOCUMENT"],["Contact","contact","CONTACT"]],et,ft={renderView(i,t){let e=K(et||(et=X([`
<table class="RootTable">
    <tr>
        <td align="center" valign="top">
            <table class="NavigateTable" cellpadding="0" cellspacing="0">
                <tr>
                    <td align="center">
                        <table class="NavigateButtonTable">
                            <tr>
                                <td colspan="6" align="left">
                                    <img src="/logo.gif" />
                                </td>
                            </tr>
                            <tr>`,`
                            </td>
                        </tr>
                    </table>
                </tr>
                <tr>
                    <td align="left" valign="top" colspan="6">
                        <div id="rootViewContainer"></div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<script lang="javascript">
document.getElementById("nav" + activeButton).classList.add("Selected");
<\/script>
`])),ut.map(n=>{let[s,r,l]=n;return K`
                <td align="center" valign="middle">
                    <a id="nav${s}" class="MenuButton ${s}Button" href="/${r}.html">
                        ${l}
                    </a>
                </td>
                `}));J(e,t)}};return lt(gt);})();
/*! Bundled license information:

lit-html/lib/directive.js:
lit-html/lib/dom.js:
lit-html/lib/template.js:
lit-html/lib/template-instance.js:
lit-html/lib/template-result.js:
lit-html/lib/parts.js:
lit-html/lib/default-template-processor.js:
lit-html/lib/template-factory.js:
lit-html/lib/render.js:
lit-html/lit-html.js:
  (**
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
   *)

lit-html/lib/part.js:
  (**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   *)
*/
window['Gaclib-RootView'] = sanitized_Gaclib_RootView.viewExport;
