var sanitized_Gaclib_RootView=(()=>{var B=Object.defineProperty;var ee=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames;var ie=Object.prototype.hasOwnProperty;var ne=(n,e)=>{for(var t in e)B(n,t,{get:e[t],enumerable:!0})},se=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of te(e))!ie.call(n,s)&&s!==t&&B(n,s,{get:()=>e[s],enumerable:!(i=ee(e,s))||i.enumerable});return n};var re=n=>se(B({},"__esModule",{value:!0}),n);var he={};ne(he,{viewExport:()=>de});var oe=new WeakMap;var _=n=>typeof n=="function"&&oe.has(n);var O=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0;var A=(n,e,t=null)=>{for(;e!==t;){let i=e.nextSibling;n.removeChild(e),e=i}};var p={},I={};var m=`{{lit-${String(Math.random()).slice(2)}}}`,W=`<!--${m}-->`,Q=new RegExp(`${m}|${W}`),y="$lit$",E=class{constructor(e,t){this.parts=[],this.element=t;let i=[],s=[],a=document.createTreeWalker(t.content,133,null,!1),l=0,o=-1,c=0,{strings:M,values:{length:Z}}=e;for(;c<Z;){let r=a.nextNode();if(r===null){a.currentNode=s.pop();continue}if(o++,r.nodeType===1){if(r.hasAttributes()){let d=r.attributes,{length:L}=d,x=0;for(let h=0;h<L;h++)U(d[h].name,y)&&x++;for(;x-- >0;){let h=M[c],w=R.exec(h)[2],b=w.toLowerCase()+y,g=r.getAttribute(b);r.removeAttribute(b);let f=g.split(Q);this.parts.push({type:"attribute",index:o,name:w,strings:f}),c+=f.length-1}}r.tagName==="TEMPLATE"&&(s.push(r),a.currentNode=r.content)}else if(r.nodeType===3){let d=r.data;if(d.indexOf(m)>=0){let L=r.parentNode,x=d.split(Q),h=x.length-1;for(let w=0;w<h;w++){let b,g=x[w];if(g==="")b=u();else{let f=R.exec(g);f!==null&&U(f[2],y)&&(g=g.slice(0,f.index)+f[1]+f[2].slice(0,-y.length)+f[3]),b=document.createTextNode(g)}L.insertBefore(b,r),this.parts.push({type:"node",index:++o})}x[h]===""?(L.insertBefore(u(),r),i.push(r)):r.data=x[h],c+=h}}else if(r.nodeType===8)if(r.data===m){let d=r.parentNode;(r.previousSibling===null||o===l)&&(o++,d.insertBefore(u(),r)),l=o,this.parts.push({type:"node",index:o}),r.nextSibling===null?r.data="":(i.push(r),o--),c++}else{let d=-1;for(;(d=r.data.indexOf(m,d+1))!==-1;)this.parts.push({type:"node",index:-1}),c++}}for(let r of i)r.parentNode.removeChild(r)}},U=(n,e)=>{let t=n.length-e.length;return t>=0&&n.slice(t)===e},j=n=>n.index!==-1,u=()=>document.createComment(""),R=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var T=class{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(let i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(let i of this.__parts)i!==void 0&&i.commit()}_clone(){let e=O?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1),a=0,l=0,o,c=s.nextNode();for(;a<i.length;){if(o=i[a],!j(o)){this.__parts.push(void 0),a++;continue}for(;l<o.index;)l++,c.nodeName==="TEMPLATE"&&(t.push(c),s.currentNode=c.content),(c=s.nextNode())===null&&(s.currentNode=t.pop(),c=s.nextNode());if(o.type==="node"){let M=this.processor.handleTextExpression(this.options);M.insertAfterNode(c.previousSibling),this.__parts.push(M)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));a++}return O&&(document.adoptNode(e),customElements.upgrade(e)),e}};var le=` ${m} `,v=class{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){let e=this.strings.length-1,t="",i=!1;for(let s=0;s<e;s++){let a=this.strings[s],l=a.lastIndexOf("<!--");i=(l>-1||i)&&a.indexOf("-->",l+1)===-1;let o=R.exec(a);o===null?t+=a+(i?le:W):t+=a.substr(0,o.index)+o[1]+o[2]+y+o[3]+m}return t+=this.strings[e],t}getTemplateElement(){let e=document.createElement("template");return e.innerHTML=this.getHTML(),e}};var $=n=>n===null||!(typeof n=="object"||typeof n=="function"),D=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]),V=class{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new P(this)}_getValue(){let e=this.strings,t=e.length-1,i="";for(let s=0;s<t;s++){i+=e[s];let a=this.parts[s];if(a!==void 0){let l=a.value;if($(l)||!D(l))i+=typeof l=="string"?l:String(l);else for(let o of l)i+=typeof o=="string"?o:String(o)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},P=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==p&&(!$(e)||e!==this.value)&&(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){let e=this.value;this.value=p,e(this)}this.value!==p&&this.committer.commit()}},N=class n{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;_(this.__pendingValue);){let t=this.__pendingValue;this.__pendingValue=p,t(this)}let e=this.__pendingValue;e!==p&&($(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):D(e)?this.__commitIterable(e):e===I?(this.value=I,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let t=this.startNode.nextSibling;e=e??"";let i=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){let t=this.options.templateFactory(e);if(this.value instanceof T&&this.value.template===t)this.value.update(e.values);else{let i=new T(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());let t=this.value,i=0,s;for(let a of e)s=t[i],s===void 0&&(s=new n(this.options),t.push(s),i===0?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(a),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){A(this.startNode.parentNode,e.nextSibling,this.endNode)}},C=class{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){let t=this.__pendingValue;this.__pendingValue=p,t(this)}if(this.__pendingValue===p)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=p}},k=class extends V{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new H(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},H=class extends P{},X=!1;(()=>{try{let n={get capture(){return X=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{}})();var S=class{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){let a=this.__pendingValue;this.__pendingValue=p,a(this)}if(this.__pendingValue===p)return;let e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=ce(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=p}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}},ce=n=>n&&(X?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);var F=class{handleAttributeExpressions(e,t,i,s){let a=t[0];return a==="."?new k(e,t.slice(1),i).parts:a==="@"?[new S(e,t.slice(1),s.eventContext)]:a==="?"?[new C(e,t.slice(1),i)]:new V(e,t,i).parts}handleTextExpression(e){return new N(e)}},G=new F;function z(n){let e=q.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},q.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;let i=n.strings.join(m);return t=e.keyString.get(i),t===void 0&&(t=new E(n,n.getTemplateElement()),e.keyString.set(i,t)),e.stringsArray.set(n.strings,t),t}var q=new Map;var J=new WeakMap,K=(n,e,t)=>{let i=J.get(e);i===void 0&&(A(e,e.firstChild),J.set(e,i=new N(Object.assign({templateFactory:z},t))),i.appendInto(e)),i.setValue(n),i.commit()};typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");var Y=(n,...e)=>new v(n,e,"html",G);var de={renderView(n,e){let t=window["MVC-Resources.hrefPrefix"],i=Y`
<table class="RootTable">
    <tr>
        <td align="center" valign="top">
            <table class="ArticleTable" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="NavigateHeader" colspan="6" align="left">
                        <a href="/"><img src="${t}/logo.gif" /></a>
                    </td>
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
`;K(i,e)}};return re(he);})();
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
