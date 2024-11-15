/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{d as o}from"./p-a29d67e4.js";import{b as t}from"./p-bd6f674d.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s="ION-CONTENT";const n="ion-content";const r=".ion-content-scroll-host";const e=`${n}, ${r}`;const a=o=>o.tagName===s;const c=async t=>{if(a(t)){await new Promise((s=>o(t,s)));return t.getScrollElement()}return t};const i=o=>{const t=o.querySelector(r);if(t){return t}return o.querySelector(e)};const f=o=>o.closest(e);const u=(o,t)=>{if(a(o)){const s=o;return s.scrollToTop(t)}return Promise.resolve(o.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"}))};const l=(o,t,s,n)=>{if(a(o)){const r=o;return r.scrollByPoint(t,s,n)}return Promise.resolve(o.scrollBy({top:s,left:t,behavior:n>0?"smooth":"auto"}))};const m=o=>t(o,n);const p=o=>{if(a(o)){const t=o;const s=t.scrollY;t.scrollY=false;return s}else{o.style.setProperty("overflow","hidden");return true}};const d=(o,t)=>{if(a(o)){o.scrollY=t}else{o.style.removeProperty("overflow")}};export{r as I,f as a,n as b,l as c,p as d,i as f,c as g,a as i,m as p,d as r,u as s};
//# sourceMappingURL=p-2e6f1e03.js.map