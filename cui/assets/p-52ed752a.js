/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{G as e}from"./p-c7ee7cfe.js";export{G as GESTURE_CONTROLLER}from"./p-c7ee7cfe.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const t=(e,t,s,o)=>{const r=n(e)?{capture:!!o.capture,passive:!!o.passive}:!!o.capture;let c;let i;if(e["__zone_symbol__addEventListener"]){c="__zone_symbol__addEventListener";i="__zone_symbol__removeEventListener"}else{c="addEventListener";i="removeEventListener"}e[c](t,s,r);return()=>{e[i](t,s,r)}};const n=e=>{if(s===undefined){try{const t=Object.defineProperty({},"passive",{get:()=>{s=true}});e.addEventListener("optsTest",(()=>{}),t)}catch(e){s=false}}return!!s};let s;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=2e3;const r=(e,n,s,r,i)=>{let f;let u;let l;let a;let d;let m;let p;let v=0;const y=r=>{v=Date.now()+o;if(!n(r)){return}if(!u&&s){u=t(e,"touchmove",s,i)}if(!l){l=t(r.target,"touchend",h,i)}if(!a){a=t(r.target,"touchcancel",h,i)}};const _=o=>{if(v>Date.now()){return}if(!n(o)){return}if(!m&&s){m=t(c(e),"mousemove",s,i)}if(!p){p=t(c(e),"mouseup",b,i)}};const h=e=>{E();if(r){r(e)}};const b=e=>{L();if(r){r(e)}};const E=()=>{if(u){u()}if(l){l()}if(a){a()}u=l=a=undefined};const L=()=>{if(m){m()}if(p){p()}m=p=undefined};const x=()=>{E();L()};const D=(n=true)=>{if(!n){if(f){f()}if(d){d()}f=d=undefined;x()}else{if(!f){f=t(e,"touchstart",y,i)}if(!d){d=t(e,"mousedown",_,i)}}};const T=()=>{D(false);r=s=n=undefined};return{enable:D,stop:x,destroy:T}};const c=e=>e instanceof Document?e:e.ownerDocument;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const i=(e,t,n)=>{const s=n*(Math.PI/180);const o=e==="x";const r=Math.cos(s);const c=t*t;let i=0;let f=0;let u=false;let l=0;return{start(e,t){i=e;f=t;l=0;u=true},detect(e,t){if(!u){return false}const n=e-i;const s=t-f;const a=n*n+s*s;if(a<c){return false}const d=Math.sqrt(a);const m=(o?n:s)/d;if(m>r){l=1}else if(m<-r){l=-1}else{l=0}u=false;return true},isGesture(){return l!==0},getDirection(){return l}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const f=t=>{let n=false;let s=false;let o=true;let c=false;const f=Object.assign({disableScroll:false,direction:"x",gesturePriority:0,passive:true,maxAngle:40,threshold:10},t);const d=f.canStart;const m=f.onWillStart;const p=f.onStart;const v=f.onEnd;const y=f.notCaptured;const _=f.onMove;const h=f.threshold;const b=f.passive;const E=f.blurOnStart;const L={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:undefined,data:undefined};const x=i(f.direction,f.threshold,f.maxAngle);const D=e.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll});const T=e=>{const t=a(e);if(s||!o){return false}l(e,L);L.startX=L.currentX;L.startY=L.currentY;L.startTime=L.currentTime=t;L.velocityX=L.velocityY=L.deltaX=L.deltaY=0;L.event=e;if(d&&d(L)===false){return false}D.release();if(!D.start()){return false}s=true;if(h===0){return G()}x.start(L.startX,L.startY);return true};const g=e=>{if(n){if(!c&&o){c=true;u(L,e);requestAnimationFrame(j)}return}u(L,e);if(x.detect(L.currentX,L.currentY)){if(!x.isGesture()||!G()){S()}}};const j=()=>{if(!n){return}c=false;if(_){_(L)}};const G=()=>{if(!D.capture()){return false}n=true;o=false;L.startX=L.currentX;L.startY=L.currentY;L.startTime=L.currentTime;if(m){m(L).then(X)}else{X()}return true};const O=()=>{if(typeof document!=="undefined"){const e=document.activeElement;if(e===null||e===void 0?void 0:e.blur){e.blur()}}};const X=()=>{if(E){O()}if(p){p(L)}o=true};const Y=()=>{n=false;s=false;c=false;o=true;D.release()};const M=e=>{const t=n;const s=o;Y();if(!s){return}u(L,e);if(t){if(v){v(L)}return}if(y){y(L)}};const R=r(f.el,T,g,M,{capture:false,passive:b});const S=()=>{Y();R.stop();if(y){y(L)}};return{enable(e=true){if(!e){if(n){M(undefined)}Y()}R.enable(e)},destroy(){D.destroy();R.destroy()}}};const u=(e,t)=>{if(!t){return}const n=e.currentX;const s=e.currentY;const o=e.currentTime;l(t,e);const r=e.currentX;const c=e.currentY;const i=e.currentTime=a(t);const f=i-o;if(f>0&&f<100){const t=(r-n)/f;const o=(c-s)/f;e.velocityX=t*.7+e.velocityX*.3;e.velocityY=o*.7+e.velocityY*.3}e.deltaX=r-e.startX;e.deltaY=c-e.startY;e.event=t};const l=(e,t)=>{let n=0;let s=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];n=e.clientX;s=e.clientY}else if(e.pageX!==undefined){n=e.pageX;s=e.pageY}}t.currentX=n;t.currentY=s};const a=e=>e.timeStamp||Date.now();export{f as createGesture};
//# sourceMappingURL=p-52ed752a.js.map