/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o="ion-focused";const t="ion-focusable";const n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"];const s=s=>{let e=[];let c=true;const r=s?s.shadowRoot:document;const u=s?s:document.body;const f=t=>{e.forEach((t=>t.classList.remove(o)));t.forEach((t=>t.classList.add(o)));e=t};const i=()=>{c=false;f([])};const d=o=>{c=n.includes(o.key);if(!c){f([])}};const a=o=>{if(c&&o.composedPath!==undefined){const n=o.composedPath().filter((o=>{if(o.classList){return o.classList.contains(t)}return false}));f(n)}};const w=()=>{if(r.activeElement===u){f([])}};r.addEventListener("keydown",d);r.addEventListener("focusin",a);r.addEventListener("focusout",w);r.addEventListener("touchstart",i,{passive:true});r.addEventListener("mousedown",i);const l=()=>{r.removeEventListener("keydown",d);r.removeEventListener("focusin",a);r.removeEventListener("focusout",w);r.removeEventListener("touchstart",i);r.removeEventListener("mousedown",i)};return{destroy:l,setFocus:f}};export{s as startFocusVisible};
//# sourceMappingURL=p-731476bf.js.map