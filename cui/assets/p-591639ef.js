/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{w as t}from"./p-3647f076.js";import{c as e}from"./p-3970d3a9.js";import"./p-18a64bdb.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=()=>e.get("experimentalCloseWatcher",false)&&t!==undefined&&"CloseWatcher"in t;const o=()=>{document.addEventListener("backbutton",(()=>{}))};const s=()=>{const e=document;let o=false;const s=()=>{if(o){return}let t=0;let n=[];const s=new CustomEvent("ionBackButton",{bubbles:false,detail:{register(e,o){n.push({priority:e,handler:o,id:t++})}}});e.dispatchEvent(s);const i=async t=>{try{if(t===null||t===void 0?void 0:t.handler){const e=t.handler(c);if(e!=null){await e}}}catch(t){console.error(t)}};const c=()=>{if(n.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>undefined,id:-1};n.forEach((e=>{if(e.priority>=t.priority){t=e}}));o=true;n=n.filter((e=>e.id!==t.id));i(t).then((()=>o=false))}};c()};if(n()){let e;const n=()=>{e===null||e===void 0?void 0:e.destroy();e=new t.CloseWatcher;e.onclose=()=>{s();n()}};n()}else{e.addEventListener("backbutton",s)}};const i=100;const c=99;export{c as MENU_BACK_BUTTON_PRIORITY,i as OVERLAY_BACK_BUTTON_PRIORITY,o as blockHardwareBackButton,n as shouldUseCloseWatcher,s as startHardwareBackButton};
//# sourceMappingURL=p-591639ef.js.map