/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{w as n,d as e}from"./p-3647f076.js";import{K as i,a as o}from"./p-9ac21ff8.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const t=n=>{if(e===undefined||n===o.None||n===undefined){return null}const i=e.querySelector("ion-app");return i!==null&&i!==void 0?i:e.body};const s=n=>{const e=t(n);return e===null?0:e.clientHeight};const d=async e=>{let o;let d;let l;let r;const u=async()=>{const e=await i.getResizeMode();const t=e===undefined?undefined:e.mode;o=()=>{if(r===undefined){r=s(t)}l=true;a(l,t)};d=()=>{l=false;a(l,t)};n===null||n===void 0?void 0:n.addEventListener("keyboardWillShow",o);n===null||n===void 0?void 0:n.addEventListener("keyboardWillHide",d)};const a=(n,i)=>{if(e){e(n,c(i))}};const c=n=>{if(r===0||r===s(n)){return}const e=t(n);if(e===null){return}return new Promise((n=>{const i=()=>{if(e.clientHeight===r){o.disconnect();n()}};const o=new ResizeObserver(i);o.observe(e)}))};const f=()=>{n===null||n===void 0?void 0:n.removeEventListener("keyboardWillShow",o);n===null||n===void 0?void 0:n.removeEventListener("keyboardWillHide",d);o=d=undefined};const v=()=>l;await u();return{init:u,destroy:f,isKeyboardVisible:v}};export{d as c};
//# sourceMappingURL=p-db0ee376.js.map