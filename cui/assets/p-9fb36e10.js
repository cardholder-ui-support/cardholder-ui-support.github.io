/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const t=false;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=t=>{try{if(t instanceof i){return t.value}if(!s()||typeof t!=="string"||t===""){return t}if(t.includes("onload=")){return""}const n=document.createDocumentFragment();const r=document.createElement("div");n.appendChild(r);r.innerHTML=t;c.forEach((t=>{const s=n.querySelectorAll(t);for(let t=s.length-1;t>=0;t--){const r=s[t];if(r.parentNode){r.parentNode.removeChild(r)}else{n.removeChild(r)}const c=o(r);for(let t=0;t<c.length;t++){e(c[t])}}}));const l=o(n);for(let t=0;t<l.length;t++){e(l[t])}const u=document.createElement("div");u.appendChild(n);const f=u.querySelector("div");return f!==null?f.innerHTML:u.innerHTML}catch(t){console.error(t);return""}};const e=t=>{if(t.nodeType&&t.nodeType!==1){return}if(typeof NamedNodeMap!=="undefined"&&!(t.attributes instanceof NamedNodeMap)){t.remove();return}for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n);const o=e.name;if(!r.includes(o.toLowerCase())){t.removeAttribute(o);continue}const s=e.value;const c=t[o];if(s!=null&&s.toLowerCase().includes("javascript:")||c!=null&&c.toLowerCase().includes("javascript:")){t.removeAttribute(o)}}const n=o(t);for(let t=0;t<n.length;t++){e(n[t])}};const o=t=>t.children!=null?t.children:t.childNodes;const s=()=>{var t;const n=window;const e=(t=n===null||n===void 0?void 0:n.Ionic)===null||t===void 0?void 0:t.config;if(e){if(e.get){return e.get("sanitizerEnabled",true)}else{return e.sanitizerEnabled===true||e.sanitizerEnabled===undefined}}return true};const r=["class","id","href","src","name","slot"];const c=["script","style","iframe","meta","link","object","embed"];class i{constructor(t){this.value=t}}export{t as E,n as s};
//# sourceMappingURL=p-9fb36e10.js.map