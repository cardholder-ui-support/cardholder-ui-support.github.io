/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{K as t}from"./p-9ac21ff8.js";import"./p-78bffe29.js";import"./p-3647f076.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o="ionKeyboardDidShow";const e="ionKeyboardDidHide";const s=150;let n={};let c={};let f=false;const i=()=>{n={};c={};f=false};const a=o=>{const e=t.getEngine();if(e){r(o)}else{if(!o.visualViewport){return}c=y(o.visualViewport);o.visualViewport.onresize=()=>{w(o);if(l()||h(o)){d(o)}else if(b(o)){p(o)}}}};const r=t=>{t.addEventListener("keyboardDidShow",(o=>d(t,o)));t.addEventListener("keyboardDidHide",(()=>p(t)))};const d=(t,o)=>{m(t,o);f=true};const p=t=>{u(t);f=false};const l=()=>{const t=(n.height-c.height)*c.scale;return!f&&n.width===c.width&&t>s};const h=t=>f&&!b(t);const b=t=>f&&c.height===t.innerHeight;const m=(t,e)=>{const s=e?e.keyboardHeight:t.innerHeight-c.height;const n=new CustomEvent(o,{detail:{keyboardHeight:s}});t.dispatchEvent(n)};const u=t=>{const o=new CustomEvent(e);t.dispatchEvent(o)};const w=t=>{n=Object.assign({},c);c=y(t.visualViewport)};const y=t=>({width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale});export{e as KEYBOARD_DID_CLOSE,o as KEYBOARD_DID_OPEN,y as copyVisualViewport,b as keyboardDidClose,l as keyboardDidOpen,h as keyboardDidResize,i as resetKeyboardAssist,p as setKeyboardClose,d as setKeyboardOpen,a as startKeyboardAssist,w as trackViewportChanges};
//# sourceMappingURL=p-aff00c02.js.map