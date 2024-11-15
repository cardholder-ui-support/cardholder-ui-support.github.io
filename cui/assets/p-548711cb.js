/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{w as t}from"./p-3647f076.js";import{r}from"./p-a29d67e4.js";import{a as e}from"./p-bd6f674d.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=(e,n,o)=>{let s;let i;if(t!==undefined&&"MutationObserver"in t){const t=Array.isArray(n)?n:[n];s=new MutationObserver((e=>{for(const n of e){for(const e of n.addedNodes){if(e.nodeType===Node.ELEMENT_NODE&&t.includes(e.slot)){o();r((()=>f(e)));return}}}}));s.observe(e,{childList:true,subtree:true})}const f=t=>{var r;if(i){i.disconnect();i=undefined}i=new MutationObserver((t=>{o();for(const r of t){for(const t of r.removedNodes){if(t.nodeType===Node.ELEMENT_NODE&&t.slot===n){d()}}}}));i.observe((r=t.parentElement)!==null&&r!==void 0?r:t,{subtree:true,childList:true})};const u=()=>{if(s){s.disconnect();s=undefined}d()};const d=()=>{if(i){i.disconnect();i=undefined}};return{destroy:u}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=(t,r,n)=>{const o=t==null?0:t.toString().length;const i=s(o,r);if(n===undefined){return i}try{return n(o,r)}catch(t){e("Exception in provided `counterFormatter`.",t);return i}};const s=(t,r)=>`${t} / ${r}`;export{n as c,o as g};
//# sourceMappingURL=p-548711cb.js.map