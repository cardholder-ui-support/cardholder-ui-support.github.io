/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{l as o,w as s}from"./p-18a64bdb.js";import{a as t,s as a}from"./p-2e6f1e03.js";import{d as r}from"./p-a29d67e4.js";import"./p-bd6f674d.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=()=>{const n=window;n.addEventListener("statusTap",(()=>{o((()=>{const o=n.innerWidth;const e=n.innerHeight;const i=document.elementFromPoint(o/2,e/2);if(!i){return}const p=t(i);if(p){new Promise((o=>r(p,o))).then((()=>{s((async()=>{p.style.setProperty("--overflow","hidden");await a(p,300);p.style.removeProperty("--overflow")}))}))}}))}))};export{n as startStatusTap};
//# sourceMappingURL=p-db8ce0a8.js.map