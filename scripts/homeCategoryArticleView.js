(()=>{"use strict";var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{viewExport:()=>bt});const n=new WeakMap,i=t=>"function"==typeof t&&n.has(t),s="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},o={},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,h=new RegExp(`${l}|${c}`),u="$lit$";class d{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],s=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:c,values:{length:d}}=t;for(;a<d;){const t=s.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)p(e[t].name,u)&&i++;for(;i-- >0;){const e=c[a],n=f.exec(e)[2],i=n.toLowerCase()+u,s=t.getAttribute(i);t.removeAttribute(i);const r=s.split(h);this.parts.push({type:"attribute",index:o,name:n,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(l)>=0){const i=t.parentNode,s=e.split(h),r=s.length-1;for(let e=0;e<r;e++){let n,r=s[e];if(""===r)n=m();else{const t=f.exec(r);null!==t&&p(t[2],u)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-5)+t[3]),n=document.createTextNode(r)}i.insertBefore(n,t),this.parts.push({type:"node",index:++o})}""===s[r]?(i.insertBefore(m(),t),n.push(t)):t.data=s[r],a+=r}}else if(8===t.nodeType)if(t.data===l){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(m(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(n.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(l,e+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const p=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},g=t=>-1!==t.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class v{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,l=i.nextNode();for(;o<n.length;)if(r=n[o],g(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}const _=` ${l} `;class x{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],s=t.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===t.indexOf("--\x3e",s+1);const r=f.exec(t);e+=null===r?t+(n?_:c):t.substr(0,r.index)+r[1]+r[2]+u+r[3]+l}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const w=t=>null===t||!("object"==typeof t||"function"==typeof t),y=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class b{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new N(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(w(t)||!y(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===o||w(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=o,t(this)}this.value!==o&&this.committer.commit()}}class E{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}const t=this.__pendingValue;t!==o&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof x?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):y(t)?this.__commitIterable(t):t===a?(this.value=a,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const n=new v(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)n=e[i],void 0===n&&(n=new E(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class V{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=o}}class T extends b{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends N{}let P=!1;(()=>{try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class S{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=o,t(this)}if(this.__pendingValue===o)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=L(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=o}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const L=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const B=new class{handleAttributeExpressions(t,e,n,i){const s=e[0];if("."===s){return new T(t,e.slice(1),n).parts}if("@"===s)return[new S(t,e.slice(1),i.eventContext)];if("?"===s)return[new V(t,e.slice(1),n)];return new b(t,e,n).parts}handleTextExpression(t){return new E(t)}};function C(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(l);return n=e.keyString.get(i),void 0===n&&(n=new d(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const j=new Map,k=new WeakMap;"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const H=(t,...e)=>new x(t,e,"html",B);var O,I,M,W,$,F,R,z,G,Z,q,D,J,K,Q,U,X,Y,tt,et,nt,it,st,rt,ot,at,lt,ct,ht,ut=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};function dt(t,e){return H(M||(M=ut(["",""],["",""])),t.items.map((function(t){return"ContentListItem"===t.kind?H(O||(O=ut(["<li>","</li>"],["<li>","</li>"])),mt(t.content,e)):H(I||(I=ut(["<li>","</li>"],["<li>","</li>"])),t.paragraphs.map((function(t){return ft(t,e)})))})))}function pt(t,e){return t.startsWith("//")?t.substr(1):t.startsWith("/")?(void 0===e.hrefPrefix?"":e.hrefPrefix)+t:t}function gt(t,e,n){var i=t.startsWith(".")||t.startsWith("/")?"_self":"_blank",s=pt(t,e);return H(W||(W=ut(['<a href="','" target="','">',"</a>"],['<a href="','" target="','">',"</a>"])),s,i,n)}function mt(t,e){return H(U||(U=ut(["",""],["",""])),t.map((function(t){switch(t.kind){case"PageLink":return gt(t.href,e,mt(t.content,e));case"MultiPageLink":if(t.href.length<2)throw new Error("There must be at least two <a> in <as>.");var n=gt(t.href[0],e,mt(t.content,e)),i=t.href.slice(1).map((function(t,n){return gt(t,e,H($||($=ut(["[","]"],["[","]"])),n+2))}));return H(F||(F=ut(["","<sub>(... and ",")</sub>"],["","<sub>(... and ",")</sub>"])),n,i);case"Name":return H(R||(R=ut(['<span class="name">',"</span>"],['<span class="name">',"</span>"])),t.text);case"Image":return void 0===t.caption?H(z||(z=ut(['<img src="','">'],['<img src="','">'])),pt(t.src,e)):H(G||(G=ut(['<figure><img src="','"><figcaption>',"</figcaption></figure>"],['<figure><img src="','"><figcaption>',"</figcaption></figure>"])),pt(t.src,e),t.caption);case"List":return t.ordered?H(Z||(Z=ut(["<ol>","</ol>"],["<ol>","</ol>"])),dt(t,e)):H(q||(q=ut(["<ul>","</ul>"],["<ul>","</ul>"])),dt(t,e));case"Strong":return H(D||(D=ut(["<strong>","</strong>"],["<strong>","</strong>"])),mt(t.content,e));case"Emphasise":return H(J||(J=ut(["<em>","<em>"],["<em>","<em>"])),mt(t.content,e));case"Program":var s=H(K||(K=ut(['<pre class="code"><code data-project="','" data-language="','">',"</code></pre>"],['<pre class="code"><code data-project="','" data-language="','">',"</code></pre>"])),void 0===t.project?"":t.project,void 0===t.language?"":t.language,t.code);return void 0!==t.output?H(Q||(Q=ut(["",'<div>Output:</div><pre class="code"><code>',"</code></pre>"],["",'<div>Output:</div><pre class="code"><code>',"</code></pre>"])),s,t.output.join("\n")):s;case"Plugin":throw new Error('Plugin must be processed by calling "consumePlugin" before calling "renderArticle".');default:return t.text}})))}function ft(t,e){return H(X||(X=ut(["<p>","</p>"],["<p>","</p>"])),mt(t.content,e))}function vt(t,e){var n=e.content.filter((function(t){return"Topic"===t.kind}));return 0===n.length?"":H(ot||(ot=ut(["<ul>","</ul>"],["<ul>","</ul>"])),n.map((function(e){return H(rt||(rt=ut(['<li><a href="#','">',"</a>","</li>"],['<li><a href="#','">',"</a>","</li>"])),xt(t,e),e.title,vt(t,e))})))}function _t(t,e,n,i,s,r){var o=0;return H(ct||(ct=ut(["\n","\n","\n","\n"],["\n","\n","\n","\n"])),function(t,e){switch(t){case 1:return H(Y||(Y=ut(["<h1>","</h1>"],["<h1>","</h1>"])),e);case 2:return H(tt||(tt=ut(["<h2>","</h2>"],["<h2>","</h2>"])),e);case 3:return H(et||(et=ut(["<h3>","</h3>"],["<h3>","</h3>"])),e);case 4:return H(nt||(nt=ut(["<h4>","</h4>"],["<h4>","</h4>"])),e);case 5:return H(it||(it=ut(["<h5>","</h5>"],["<h5>","</h5>"])),e);default:return H(st||(st=ut(["<h6>","</h6>"],["<h6>","</h6>"])),e)}}(n,H(at||(at=ut(['\n<a id="','"></a>\n','<span class="subtitle">',"</span>\n        "],['\n<a id="','"></a>\n','<span class="subtitle">',"</span>\n        "])),xt(t,e),void 0===i?"":"".concat(i," "),e.title)),r.buildIndex&&s?H(lt||(lt=ut(['<div class="index">',"</div>"],['<div class="index">',"</div>"])),vt(t,e)):"",e.content.map((function(e){if("Topic"===e.kind){var s=i;return void 0!==s&&(s+="".concat(++o,".")),_t(t,e,n+1,s,!1,r)}return ft(e,r)})))}function xt(t,e){if(void 0===t.anchors&&(t.anchors={}),void 0===e.anchor){var n=e.title.split(/[^a-zA-Z0-9]+/).join("-");if(void 0!==t.anchors[n]){for(var i=2;void 0!==t.anchors["".concat(n,"_").concat(i)];)i++;n="".concat(n,"_").concat(i)}return t.anchors[n]=e,e.anchor=n,n}return e.anchor}var wt,yt=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},bt={renderView:function(t,e){var n,i,s,o=window["MVC-Resources.categoryArticle"];((t,e,n)=>{let i=k.get(e);void 0===i&&(r(e,e.firstChild),k.set(e,i=new E(Object.assign({templateFactory:C},n))),i.appendInto(e)),i.setValue(t),i.commit()})(H(wt||(wt=yt(["\n","\n"],["\n","\n"])),(n=o,s={hrefPrefix:null==i?void 0:i.hrefPrefix,buildIndex:n.index},H(ht||(ht=ut(['<div class="article">','<div>\n<script lang="javascript">\nconst highlightSubtitleByHash = function() {\n    const topics = document.getElementsByClassName("subtitle");\n    if (topics) {\n        for (const topic of topics) {\n            topic.classList.remove("highlight");\n        }\n    }\n    const anchor = document.getElementById(window.location.hash.substr(1));\n    if (anchor) {\n        const topic = anchor.parentElement.getElementsByClassName("subtitle")[0];\n        topic.classList.add("highlight");\n    }\n}\nwindow.addEventListener("hashchange", highlightSubtitleByHash, false);\nhighlightSubtitleByHash();\n<\/script>'],['<div class="article">','<div>\n<script lang="javascript">\nconst highlightSubtitleByHash = function() {\n    const topics = document.getElementsByClassName("subtitle");\n    if (topics) {\n        for (const topic of topics) {\n            topic.classList.remove("highlight");\n        }\n    }\n    const anchor = document.getElementById(window.location.hash.substr(1));\n    if (anchor) {\n        const topic = anchor.parentElement.getElementsByClassName("subtitle")[0];\n        topic.classList.add("highlight");\n    }\n}\nwindow.addEventListener("hashchange", highlightSubtitleByHash, false);\nhighlightSubtitleByHash();\n<\/script>'])),_t(n,n.topic,1,n.numberBeforeTitle?"":void 0,!0,s)))),e)}};window["Gaclib-HomeCategoryArticleView"]=e.viewExport})();