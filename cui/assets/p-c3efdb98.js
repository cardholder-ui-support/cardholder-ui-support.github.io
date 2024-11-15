/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{e as t}from"./p-a29d67e4.js";import{i as o}from"./p-15a24f88.js";import{createGesture as s}from"./p-52ed752a.js";import"./p-c7ee7cfe.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const n=(n,c,r,e,a)=>{const i=n.ownerDocument.defaultView;let p=o(n);const m=t=>{const o=50;const{startX:s}=t;if(p){return s>=i.innerWidth-o}return s<=o};const f=t=>p?-t.deltaX:t.deltaX;const u=t=>p?-t.velocityX:t.velocityX;const d=t=>{p=o(n);return m(t)&&c()};const h=t=>{const o=f(t);const s=o/i.innerWidth;e(s)};const j=o=>{const s=f(o);const n=i.innerWidth;const c=s/n;const r=u(o);const e=n/2;const p=r>=0&&(r>.2||s>e);const m=p?1-c:c;const d=m*n;let h=0;if(d>5){const t=d/Math.abs(r);h=Math.min(t,540)}a(p,c<=0?.01:t(0,c,.9999),h)};return s({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:d,onStart:r,onMove:h,onEnd:j})};export{n as createSwipeBackGesture};
//# sourceMappingURL=p-c3efdb98.js.map