/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{c as o}from"./p-1fd4aad1.js";import{g as t}from"./p-97bf4e2e.js";import"./p-3647f076.js";import"./p-3970d3a9.js";import"./p-18a64bdb.js";import"./p-bd6f674d.js";import"./p-a29d67e4.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=(s,i)=>{var n,r,a;const c="40px";const p="0px";const e=i.direction==="back";const b=i.enteringEl;const l=i.leavingEl;const f=t(b);const d=f.querySelector("ion-toolbar");const m=o();m.addElement(f).fill("both").beforeRemoveClass("ion-page-invisible");if(e){m.duration(((n=i.duration)!==null&&n!==void 0?n:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)")}else{m.duration(((r=i.duration)!==null&&r!==void 0?r:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${c})`,`translateY(${p})`).fromTo("opacity",.01,1)}if(d){const t=o();t.addElement(d);m.addAnimation(t)}if(l&&e){m.duration(((a=i.duration)!==null&&a!==void 0?a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const s=o();s.addElement(t(l)).onFinish((o=>{if(o===1&&s.elements.length>0){s.elements[0].style.setProperty("display","none")}})).fromTo("transform",`translateY(${p})`,`translateY(${c})`).fromTo("opacity",1,0);m.addAnimation(s)}return m};export{s as mdTransitionAnimation};
//# sourceMappingURL=p-ccb560d0.js.map