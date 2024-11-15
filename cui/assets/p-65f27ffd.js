/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{d as e}from"./p-a29d67e4.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const t=async(t,o,n,i,r,s)=>{var a;if(t){return t.attachViewToDom(o,n,r,i)}if(!s&&typeof n!=="string"&&!(n instanceof HTMLElement)){throw new Error("framework delegate is missing")}const c=typeof n==="string"?(a=o.ownerDocument)===null||a===void 0?void 0:a.createElement(n):n;if(i){i.forEach((e=>c.classList.add(e)))}if(r){Object.assign(c,r)}o.appendChild(c);await new Promise((t=>e(c,t)));return c};const o=(e,t)=>{if(t){if(e){const o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()};const n=()=>{let t;let o;const n=async(n,i,r={},s=[])=>{var a,c;t=n;let d;if(i){const o=typeof i==="string"?(a=t.ownerDocument)===null||a===void 0?void 0:a.createElement(i):i;s.forEach((e=>o.classList.add(e)));Object.assign(o,r);t.appendChild(o);d=o;await new Promise((t=>e(o,t)))}else if(t.children.length>0&&(t.tagName==="ION-MODAL"||t.tagName==="ION-POPOVER")){const e=d=t.children[0];if(!e.classList.contains("ion-delegate-host")){const e=(c=t.ownerDocument)===null||c===void 0?void 0:c.createElement("div");e.classList.add("ion-delegate-host");s.forEach((t=>e.classList.add(t)));e.append(...t.children);t.appendChild(e);d=e}}const l=document.querySelector("ion-app")||document.body;o=document.createComment("ionic teleport");t.parentNode.insertBefore(o,t);l.appendChild(t);return d!==null&&d!==void 0?d:t};const i=()=>{if(t&&o){o.parentNode.insertBefore(t,o);o.remove()}return Promise.resolve()};return{attachViewToDom:n,removeViewFromDom:i}};export{n as C,t as a,o as d};
//# sourceMappingURL=p-65f27ffd.js.map