window["Gaclib-DirectoryView"]=function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};Object.defineProperty(e,"__esModule",{value:!0}),e.viewExport=void 0;var s,r,o,l,a,d,u=n(1);e.viewExport={renderView:function(t,e){var n=window["MVC-Resources.directoryInfo"],c=window["MVC-Resources.hrefPrefix"],h=u.html(d||(d=i(['\n<table class="DirectoryTable">\n    <tr>\n        <td valign="top">\n            <div class="TreeView">\n                <h1>Index</h1>\n                ','\n            </div>\n        </td>\n        <td valign="top">\n            <div class="ContentView">\n                <div id="directoryViewContainer"></div>\n            </div>\n        </td>\n    </tr>\n</table>\n'],['\n<table class="DirectoryTable">\n    <tr>\n        <td valign="top">\n            <div class="TreeView">\n                <h1>Index</h1>\n                ','\n            </div>\n        </td>\n        <td valign="top">\n            <div class="ContentView">\n                <div id="directoryViewContainer"></div>\n            </div>\n        </td>\n    </tr>\n</table>\n'])),function t(e,n,d){return u.html(a||(a=i(["",""],["",""])),d.map((function(a){var d=void 0===a.subNodes?void 0:u.html(s||(s=i(['<div class="Children">',"</div>"],['<div class="Children">',"</div>"])),t(e,n,a.subNodes));return a.selected?u.html(r||(r=i(['<div class="DirectoryNode Selected">',"</div>",""],['<div class="DirectoryNode Selected">',"</div>",""])),a.name,d):void 0===a.path?u.html(o||(o=i(['<div class="DirectoryNode">',"</div>",""],['<div class="DirectoryNode">',"</div>",""])),a.name,d):u.html(l||(l=i(['<a class="DirectoryNode" href="',"/",'.html">',"</a>",""],['<a class="DirectoryNode" href="',"/",'.html">',"</a>",""])),n,a.path.join("/"),a.name,d)})))}(n,c,n.subNodes));u.render(h,e)}}},function(t,e,n){"use strict";n.r(e),n.d(e,"DefaultTemplateProcessor",(function(){return j})),n.d(e,"defaultTemplateProcessor",(function(){return I})),n.d(e,"directive",(function(){return s})),n.d(e,"isDirective",(function(){return r})),n.d(e,"removeNodes",(function(){return a})),n.d(e,"reparentNodes",(function(){return l})),n.d(e,"noChange",(function(){return d})),n.d(e,"nothing",(function(){return u})),n.d(e,"AttributeCommitter",(function(){return T})),n.d(e,"AttributePart",(function(){return E})),n.d(e,"BooleanAttributePart",(function(){return C})),n.d(e,"EventPart",(function(){return $})),n.d(e,"isIterable",(function(){return V})),n.d(e,"isPrimitive",(function(){return w})),n.d(e,"NodePart",(function(){return P})),n.d(e,"PropertyCommitter",(function(){return A})),n.d(e,"PropertyPart",(function(){return S})),n.d(e,"parts",(function(){return D})),n.d(e,"render",(function(){return H})),n.d(e,"templateCaches",(function(){return k})),n.d(e,"templateFactory",(function(){return L})),n.d(e,"TemplateInstance",(function(){return x})),n.d(e,"SVGTemplateResult",(function(){return b})),n.d(e,"TemplateResult",(function(){return N})),n.d(e,"createMarker",(function(){return _})),n.d(e,"isTemplatePartActive",(function(){return v})),n.d(e,"Template",(function(){return m})),n.d(e,"html",(function(){return B})),n.d(e,"svg",(function(){return F}));const i=new WeakMap,s=t=>(...e)=>{const n=t(...e);return i.set(n,!0),n},r=t=>"function"==typeof t&&i.has(t),o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,l=(t,e,n=null,i=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,i),e=n}},a=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},d={},u={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,p=new RegExp(`${c}|${h}`);class m{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],s=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,l=0;const{strings:a,values:{length:d}}=t;for(;l<d;){const t=s.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)f(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=a[l],n=g.exec(e)[2],i=n.toLowerCase()+"$lit$",s=t.getAttribute(i);t.removeAttribute(i);const r=s.split(p);this.parts.push({type:"attribute",index:o,name:n,strings:r}),l+=r.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const i=t.parentNode,s=e.split(p),r=s.length-1;for(let e=0;e<r;e++){let n,r=s[e];if(""===r)n=_();else{const t=g.exec(r);null!==t&&f(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(r)}i.insertBefore(n,t),this.parts.push({type:"node",index:++o})}""===s[r]?(i.insertBefore(_(),t),n.push(t)):t.data=s[r],l+=r}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(_(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(n.push(t),o--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1}),l++}}else s.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const f=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},v=t=>-1!==t.index,_=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class x{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let s,r=0,l=0,a=i.nextNode();for(;r<n.length;)if(s=n[r],v(s)){for(;l<s.index;)l++,"TEMPLATE"===a.nodeName&&(e.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=e.pop(),a=i.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,s.name,s.strings,this.options));r++}else this.__parts.push(void 0),r++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}const y=` ${c} `;class N{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],s=t.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===t.indexOf("--\x3e",s+1);const r=g.exec(t);e+=null===r?t+(n?y:h):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+c}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class b extends N{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),l(e,n.firstChild),t}}const w=t=>null===t||!("object"==typeof t||"function"==typeof t),V=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class T{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new E(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(w(t)||!V(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class E{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===d||w(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=d,t(this)}this.value!==d&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(_()),this.endNode=t.appendChild(_())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=_()),t.__insert(this.endNode=_())}insertAfterPart(t){t.__insert(this.startNode=_()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=d,t(this)}const t=this.__pendingValue;t!==d&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof N?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):V(t)?this.__commitIterable(t):t===u?(this.value=u,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof x&&this.value.template===e)this.value.update(t.values);else{const n=new x(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)n=e[i],void 0===n&&(n=new P(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){a(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=d,t(this)}if(this.__pendingValue===d)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=d}}class A extends T{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new S(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class S extends E{}let M=!1;(()=>{try{const t={get capture(){return M=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class ${constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=d,t(this)}if(this.__pendingValue===d)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=O(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=d}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(M?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);class j{handleAttributeExpressions(t,e,n,i){const s=e[0];if("."===s){return new A(t,e.slice(1),n).parts}if("@"===s)return[new $(t,e.slice(1),i.eventContext)];if("?"===s)return[new C(t,e.slice(1),n)];return new T(t,e,n).parts}handleTextExpression(t){return new P(t)}}const I=new j;function L(t){let e=k.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},k.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(c);return n=e.keyString.get(i),void 0===n&&(n=new m(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const k=new Map,D=new WeakMap,H=(t,e,n)=>{let i=D.get(e);void 0===i&&(a(e,e.firstChild),D.set(e,i=new P(Object.assign({templateFactory:L},n))),i.appendInto(e)),i.setValue(t),i.commit()};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const B=(t,...e)=>new N(t,e,"html",I),F=(t,...e)=>new b(t,e,"svg",I)}]).viewExport;