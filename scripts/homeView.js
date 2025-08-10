var sanitized_Gaclib_HomeView=(()=>{var ee=Object.freeze,H=Object.defineProperty;var ue=Object.getOwnPropertyDescriptor;var me=Object.getOwnPropertyNames;var fe=Object.prototype.hasOwnProperty;var ge=(n,e)=>{for(var t in e)H(n,t,{get:e[t],enumerable:!0})},xe=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of me(e))!fe.call(n,s)&&s!==t&&H(n,s,{get:()=>e[s],enumerable:!(i=ue(e,s))||i.enumerable});return n};var _e=n=>xe(H({},"__esModule",{value:!0}),n);var B=(n,e)=>ee(H(n,"raw",{value:ee(e||n.slice())}));var Ee={};ge(Ee,{viewExport:()=>Ae});var be=new WeakMap;var b=n=>typeof n=="function"&&be.has(n);var D=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0;var C=(n,e,t=null)=>{for(;e!==t;){let i=e.nextSibling;n.removeChild(e),e=i}};var h={},R={};var m=`{{lit-${String(Math.random()).slice(2)}}}`,U=`<!--${m}-->`,te=new RegExp(`${m}|${U}`),T="$lit$",P=class{constructor(e,t){this.parts=[],this.element=t;let i=[],s=[],a=document.createTreeWalker(t.content,133,null,!1),c=0,r=-1,d=0,{strings:v,values:{length:pe}}=e;for(;d<pe;){let l=a.nextNode();if(l===null){a.currentNode=s.pop();continue}if(r++,l.nodeType===1){if(l.hasAttributes()){let p=l.attributes,{length:M}=p,x=0;for(let u=0;u<M;u++)ne(p[u].name,T)&&x++;for(;x-- >0;){let u=v[d],y=O.exec(u)[2],$=y.toLowerCase()+T,_=l.getAttribute($);l.removeAttribute($);let g=_.split(te);this.parts.push({type:"attribute",index:r,name:y,strings:g}),d+=g.length-1}}l.tagName==="TEMPLATE"&&(s.push(l),a.currentNode=l.content)}else if(l.nodeType===3){let p=l.data;if(p.indexOf(m)>=0){let M=l.parentNode,x=p.split(te),u=x.length-1;for(let y=0;y<u;y++){let $,_=x[y];if(_==="")$=f();else{let g=O.exec(_);g!==null&&ne(g[2],T)&&(_=_.slice(0,g.index)+g[1]+g[2].slice(0,-T.length)+g[3]),$=document.createTextNode(_)}M.insertBefore($,l),this.parts.push({type:"node",index:++r})}x[u]===""?(M.insertBefore(f(),l),i.push(l)):l.data=x[u],d+=u}}else if(l.nodeType===8)if(l.data===m){let p=l.parentNode;(l.previousSibling===null||r===c)&&(r++,p.insertBefore(f(),l)),c=r,this.parts.push({type:"node",index:r}),l.nextSibling===null?l.data="":(i.push(l),r--),d++}else{let p=-1;for(;(p=l.data.indexOf(m,p+1))!==-1;)this.parts.push({type:"node",index:-1}),d++}}for(let l of i)l.parentNode.removeChild(l)}},ne=(n,e)=>{let t=n.length-e.length;return t>=0&&n.slice(t)===e},G=n=>n.index!==-1,f=()=>document.createComment(""),O=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;var A=class{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(let i of this.__parts)i!==void 0&&i.setValue(e[t]),t++;for(let i of this.__parts)i!==void 0&&i.commit()}_clone(){let e=D?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1),a=0,c=0,r,d=s.nextNode();for(;a<i.length;){if(r=i[a],!G(r)){this.__parts.push(void 0),a++;continue}for(;c<r.index;)c++,d.nodeName==="TEMPLATE"&&(t.push(d),s.currentNode=d.content),(d=s.nextNode())===null&&(s.currentNode=t.pop(),d=s.nextNode());if(r.type==="node"){let v=this.processor.handleTextExpression(this.options);v.insertAfterNode(d.previousSibling),this.__parts.push(v)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,r.name,r.strings,this.options));a++}return D&&(document.adoptNode(e),customElements.upgrade(e)),e}};var Ne=` ${m} `,w=class{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){let e=this.strings.length-1,t="",i=!1;for(let s=0;s<e;s++){let a=this.strings[s],c=a.lastIndexOf("<!--");i=(c>-1||i)&&a.indexOf("-->",c+1)===-1;let r=O.exec(a);r===null?t+=a+(i?Ne:U):t+=a.substr(0,r.index)+r[1]+r[2]+T+r[3]+m}return t+=this.strings[e],t}getTemplateElement(){let e=document.createElement("template");return e.innerHTML=this.getHTML(),e}};var j=n=>n===null||!(typeof n=="object"||typeof n=="function"),z=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]),E=class{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let s=0;s<i.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new k(this)}_getValue(){let e=this.strings,t=e.length-1,i="";for(let s=0;s<t;s++){i+=e[s];let a=this.parts[s];if(a!==void 0){let c=a.value;if(j(c)||!z(c))i+=typeof c=="string"?c:String(c);else for(let r of c)i+=typeof r=="string"?r:String(r)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}},k=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==h&&(!j(e)||e!==this.value)&&(this.value=e,b(e)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){let e=this.value;this.value=h,e(this)}this.value!==h&&this.committer.commit()}},N=class n{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=f()),e.__insert(this.endNode=f())}insertAfterPart(e){e.__insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;b(this.__pendingValue);){let t=this.__pendingValue;this.__pendingValue=h,t(this)}let e=this.__pendingValue;e!==h&&(j(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):z(e)?this.__commitIterable(e):e===R?(this.value=R,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let t=this.startNode.nextSibling;e=e??"";let i=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){let t=this.options.templateFactory(e);if(this.value instanceof A&&this.value.template===t)this.value.update(e.values);else{let i=new A(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());let t=this.value,i=0,s;for(let a of e)s=t[i],s===void 0&&(s=new n(this.options),t.push(s),i===0?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(a),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){C(this.startNode.parentNode,e.nextSibling,this.endNode)}},S=class{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){let t=this.__pendingValue;this.__pendingValue=h,t(this)}if(this.__pendingValue===h)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=h}},L=class extends E{constructor(e,t,i){super(e,t,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new W(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}},W=class extends k{},ie=!1;(()=>{try{let n={get capture(){return ie=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{}})();var I=class{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){let a=this.__pendingValue;this.__pendingValue=h,a(this)}if(this.__pendingValue===h)return;let e=this.__pendingValue,t=this.value,i=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=e!=null&&(t==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=ve(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=h}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}},ve=n=>n&&(ie?{capture:n.capture,passive:n.passive,once:n.once}:n.capture);var F=class{handleAttributeExpressions(e,t,i,s){let a=t[0];return a==="."?new L(e,t.slice(1),i).parts:a==="@"?[new I(e,t.slice(1),s.eventContext)]:a==="?"?[new S(e,t.slice(1),i)]:new E(e,t,i).parts}handleTextExpression(e){return new N(e)}},Z=new F;function J(n){let e=q.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},q.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;let i=n.strings.join(m);return t=e.keyString.get(i),t===void 0&&(t=new P(n,n.getTemplateElement()),e.keyString.set(i,t)),e.stringsArray.set(n.strings,t),t}var q=new Map;var K=new WeakMap,Q=(n,e,t)=>{let i=K.get(e);i===void 0&&(C(e,e.firstChild),K.set(e,i=new N(Object.assign({templateFactory:J},t))),i.appendInto(e)),i.setValue(n),i.commit()};typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");var o=(n,...e)=>new w(n,e,"html",Z);function se(n,e){return o`${n.items.map(t=>t.kind==="ContentListItem"?o`<li>${V(t.content,e)}</li>`:o`<li>${t.paragraphs.map(i=>oe(i,e))}</li>`)}`}function Y(n,e){return n.startsWith("//")?n.substr(1):n.startsWith("/")?(e.hrefPrefix===void 0?"":e.hrefPrefix)+n:n}function X(n,e,t){let i=n.startsWith(".")||n.startsWith("/")?"_self":"_blank",s=Y(n,e);return o`<a href="${s}" target="${i}">${t}</a>`}function V(n,e){return o`${n.map(t=>{switch(t.kind){case"PageLink":return X(t.href,e,V(t.content,e));case"MultiPageLink":{if(t.href.length<2)throw new Error("There must be at least two <a> in <as>.");let i=X(t.href[0],e,V(t.content,e)),s=t.href.slice(1).map((a,c)=>X(a,e,o`[${c+2}]`));return o`${i}<sub>(... and ${s})</sub>`}case"Name":return o`<span class="name">${t.text}</span>`;case"Image":return t.caption===void 0?o`<img src="${Y(t.src,e)}">`:o`<figure><img src="${Y(t.src,e)}"><figcaption>${t.caption}</figcaption></figure>`;case"List":return t.ordered?o`<ol>${se(t,e)}</ol>`:o`<ul>${se(t,e)}</ul>`;case"Strong":return o`<strong>${V(t.content,e)}</strong>`;case"Emphasise":return o`<em>${V(t.content,e)}<em>`;case"Program":{let i=o`<pre class="code"><code data-project="${t.project===void 0?"":t.project}" data-language="${t.language===void 0?"":t.language}">${t.code}</code></pre>`;return t.output!==void 0?o`${i}<div>Output:</div><pre class="code"><code>${t.output.join(`
`)}</code></pre>`:i}case"Plugin":throw new Error('Plugin must be processed by calling "consumePlugin" before calling "renderArticle".');default:return t.text}})}`}function oe(n,e){return o`<p>${V(n.content,e)}</p>`}function $e(n,e){switch(n){case 1:return o`<h1>${e}</h1>`;case 2:return o`<h2>${e}</h2>`;case 3:return o`<h3>${e}</h3>`;case 4:return o`<h4>${e}</h4>`;case 5:return o`<h5>${e}</h5>`;default:return o`<h6>${e}</h6>`}}function ae(n,e){let t=e.content.filter(i=>i.kind==="Topic");return t.length===0?"":o`<ul>${t.map(i=>o`<li><a href="#${ce(n,i)}">${i.title}</a>${ae(n,i)}</li>`)}</ul>`}function le(n,e,t,i,s,a){let c=0;return o`
${$e(t,o`
<a id="${ce(n,e)}"></a>
${i===void 0?"":`${i} `}<span class="subtitle">${e.title}</span>
        `)}
${a.buildIndex&&s?o`<div class="index">${ae(n,e)}</div>`:""}
${e.content.map(r=>{if(r.kind==="Topic"){let d=i;return d!==void 0&&(d+=`${++c}.`),le(n,r,t+1,d,!1,a)}else return oe(r,a)})}
`}function ce(n,e){if(n.anchors===void 0&&(n.anchors={}),e.anchor===void 0){let t=e.title.split(/[^a-zA-Z0-9]+/).join("-");if(n.anchors[t]!==void 0){let i=2;for(;n.anchors[`${t}_${i}`]!==void 0;)i++;t=`${t}_${i}`}return n.anchors[t]=e,e.anchor=t,t}else return e.anchor}var re;function de(n,e){let t={hrefPrefix:e?.hrefPrefix,buildIndex:n.index};return o(re||(re=B(['<div class="article">',`<div>
<script lang="javascript">
const highlightSubtitleByHash = function() {
    const topics = document.getElementsByClassName("subtitle");
    if (topics) {
        for (const topic of topics) {
            topic.classList.remove("highlight");
        }
    }
    const anchor = document.getElementById(window.location.hash.substr(1));
    if (anchor) {
        const topic = anchor.parentElement.getElementsByClassName("subtitle")[0];
        topic.classList.add("highlight");
    }
}
window.addEventListener("hashchange", highlightSubtitleByHash, false);
highlightSubtitleByHash();
<\/script>`])),le(n,n.topic,1,n.numberBeforeTitle?"":void 0,!0,t))}var Te=[["Hello","home/index","Hello"],["GacUI","home/gacui","GacUI !"],["Data","home/data-processing","Data"],["String","home/string-processing","Text"],["Scripting","home/reflection-scripting","Scripting"],["Showcase","home/showcase","Showcase"]],he,Ae={renderView(n,e){let t=window["MVC-Resources.homeArticle"],i=o(he||(he=B([`
<table class="HomeArticleContainer"><tr><td align="center">
    <div class="HomeArticle">`,`</div></div>
</td></tr></table>
<table class="CategoryTable"><tr><td align="center">
<h2 class="CategoryHeaders">`,`
</h2>
</td></tr></table>
<div id="homeViewContainer"></div>
<script lang="javascript">
document.getElementById("cat" + activeCategory).classList.remove("Unselected");
document.getElementById("cat" + activeCategory).classList.add("Selected");
<\/script>
`])),de(t),(()=>{let s=Te.map(c=>{let[r,d,v]=c;return o`
                        <a id="cat${r}" class="CategoryButton ${r}Button Unselected" href="/${d}.html">&nbsp;&nbsp;${v}&nbsp;&nbsp;</a>
                    `}),a=o`;`;return s.map(c=>[c,a]).reduce((c,r)=>c.concat(r))})());Q(i,e)}};return _e(Ee);})();
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
window['Gaclib-HomeView'] = sanitized_Gaclib_HomeView.viewExport;
