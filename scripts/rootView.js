var sanitized_Gaclib_RootView=(()=>{var V=Object.freeze,M=Object.defineProperty;var et=Object.getOwnPropertyDescriptor;var st=Object.getOwnPropertyNames;var it=Object.prototype.hasOwnProperty;var nt=(n,t)=>{for(var s in t)M(n,s,{get:t[s],enumerable:!0})},ot=(n,t,s,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of st(t))!it.call(n,e)&&e!==s&&M(n,e,{get:()=>t[e],enumerable:!(i=et(t,e))||i.enumerable});return n};var rt=n=>ot(M({},"__esModule",{value:!0}),n);var j=(n,t)=>V(M(n,"raw",{value:V(t||n.slice())}));var At={};nt(At,{viewExport:()=>dt});var U=globalThis,W=n=>n,w=U.trustedTypes,k=w?w.createPolicy("lit-html",{createHTML:n=>n}):void 0,J="$lit$",p=`lit$${Math.random().toFixed(9).slice(2)}$`,K="?"+p,ht=`<${K}>`,m=document,x=()=>m.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",L=Array.isArray,lt=n=>L(n)||typeof n?.[Symbol.iterator]=="function",E=`[ 	
\f\r]`,y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,z=/>/g,u=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Z=/'/g,q=/"/g,Q=/^(?:script|style|textarea|title)$/i,P=n=>(t,...s)=>({_$litType$:n,strings:t,values:s}),R=P(1),pt=P(2),ut=P(3),N=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),G=new WeakMap,g=m.createTreeWalker(m,129);function X(n,t){if(!L(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return k!==void 0?k.createHTML(t):t}var at=(n,t)=>{let s=n.length-1,i=[],e,o=t===2?"<svg>":t===3?"<math>":"",r=y;for(let d=0;d<s;d++){let h=n[d],a,$,l=-1,A=0;for(;A<h.length&&(r.lastIndex=A,$=r.exec(h),$!==null);)A=r.lastIndex,r===y?$[1]==="!--"?r=F:$[1]!==void 0?r=z:$[2]!==void 0?(Q.test($[2])&&(e=RegExp("</"+$[2],"g")),r=u):$[3]!==void 0&&(r=u):r===u?$[0]===">"?(r=e??y,l=-1):$[1]===void 0?l=-2:(l=r.lastIndex-$[2].length,a=$[1],r=$[3]===void 0?u:$[3]==='"'?q:Z):r===q||r===Z?r=u:r===F||r===z?r=y:(r=u,e=void 0);let _=r===u&&n[d+1].startsWith("/>")?" ":"";o+=r===y?h+ht:l>=0?(i.push(a),h.slice(0,l)+J+h.slice(l)+p+_):h+p+(l===-2?d:_)}return[X(n,o+(n[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},T=class n{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let o=0,r=0,d=t.length-1,h=this.parts,[a,$]=at(t,s);if(this.el=n.createElement(a,i),g.currentNode=this.el.content,s===2||s===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(e=g.nextNode())!==null&&h.length<d;){if(e.nodeType===1){if(e.hasAttributes())for(let l of e.getAttributeNames())if(l.endsWith(J)){let A=$[r++],_=e.getAttribute(l).split(p),C=/([.?@])?(.*)/.exec(A);h.push({type:1,index:o,name:C[2],strings:_,ctor:C[1]==="."?O:C[1]==="?"?S:C[1]==="@"?D:f}),e.removeAttribute(l)}else l.startsWith(p)&&(h.push({type:6,index:o}),e.removeAttribute(l));if(Q.test(e.tagName)){let l=e.textContent.split(p),A=l.length-1;if(A>0){e.textContent=w?w.emptyScript:"";for(let _=0;_<A;_++)e.append(l[_],x()),g.nextNode(),h.push({type:2,index:++o});e.append(l[A],x())}}}else if(e.nodeType===8)if(e.data===K)h.push({type:2,index:o});else{let l=-1;for(;(l=e.data.indexOf(p,l+1))!==-1;)h.push({type:7,index:o}),l+=p.length-1}o++}}static createElement(t,s){let i=m.createElement("template");return i.innerHTML=t,i}};function v(n,t,s=n,i){if(t===N)return t;let e=i!==void 0?s._$Co?.[i]:s._$Cl,o=H(t)?void 0:t._$litDirective$;return e?.constructor!==o&&(e?._$AO?.(!1),o===void 0?e=void 0:(e=new o(n),e._$AT(n,s,i)),i!==void 0?(s._$Co??=[])[i]=e:s._$Cl=e),e!==void 0&&(t=v(n,e._$AS(n,t.values),e,i)),t}var B=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:s},parts:i}=this._$AD,e=(t?.creationScope??m).importNode(s,!0);g.currentNode=e;let o=g.nextNode(),r=0,d=0,h=i[0];for(;h!==void 0;){if(r===h.index){let a;h.type===2?a=new b(o,o.nextSibling,this,t):h.type===1?a=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(a=new I(o,this,t)),this._$AV.push(a),h=i[++d]}r!==h?.index&&(o=g.nextNode(),r++)}return g.currentNode=m,e}p(t){let s=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}},b=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=v(this,t,s),H(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):lt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(m.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:i}=t,e=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===e)this._$AH.p(s);else{let o=new B(e,this),r=o.u(this.options);o.p(s),this.T(r),this._$AH=o}}_$AC(t){let s=G.get(t.strings);return s===void 0&&G.set(t.strings,s=new T(t)),s}k(t){L(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,e=0;for(let o of t)e===s.length?s.push(i=new n(this.O(x()),this.O(x()),this,this.options)):i=s[e],i._$AI(o),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let i=W(t).nextSibling;W(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},f=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}_$AI(t,s=this,i,e){let o=this.strings,r=!1;if(o===void 0)t=v(this,t,s,0),r=!H(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{let d=t,h,a;for(t=o[0],h=0;h<o.length-1;h++)a=v(this,d[i+h],s,h),a===N&&(a=this._$AH[h]),r||=!H(a)||a!==this._$AH[h],a===c?t=c:t!==c&&(t+=(a??"")+o[h+1]),this._$AH[h]=a}r&&!e&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},O=class extends f{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}},S=class extends f{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}},D=class extends f{constructor(t,s,i,e,o){super(t,s,i,e,o),this.type=5}_$AI(t,s=this){if((t=v(this,t,s,0)??c)===N)return;let i=this._$AH,e=t===c&&i!==c||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==c&&(i===c||e);e&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},I=class{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){v(this,t)}};var ct=U.litHtmlPolyfillSupport;ct?.(T,b),(U.litHtmlVersions??=[]).push("3.3.2");var Y=(n,t,s)=>{let i=s?.renderBefore??t,e=i._$litPart$;if(e===void 0){let o=s?.renderBefore??null;i._$litPart$=e=new b(t.insertBefore(x(),o),o,void 0,s??{})}return e._$AI(n),e};var $t=[["Home","index","HOME"],["Tutorial","doc/current/gacui/running","TUTORIAL"],["Demo","demo","DEMOS"],["Download","doc/current/home/download","DOWNLOAD"],["Document","document","DOCUMENT"],["Contact","contact","CONTACT"]],tt,dt={renderView(n,t){let s=R(tt||(tt=j([`
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
`])),$t.map(i=>{let[e,o,r]=i;return R`
                <td align="center" valign="middle">
                    <a id="nav${e}" class="MenuButton ${e}Button" href="/${o}.html">
                        ${r}
                    </a>
                </td>
                `}));Y(s,t)}};return rt(At);})();
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
window['Gaclib-RootView'] = sanitized_Gaclib_RootView.viewExport;
