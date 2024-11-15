/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const t={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const s=`${t*n/e-t}ms`;const r=2*Math.PI*n/e;return{r:5,style:{top:`${32*Math.sin(r)}%`,left:`${32*Math.cos(r)}%`,"animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const s=n/e;const r=`${t*s-t}ms`;const a=2*Math.PI*s;return{r:5,style:{top:`${32*Math.sin(a)}%`,left:`${32*Math.cos(a)}%`,"animation-delay":r}}}},circular:{dur:1400,elmDuration:true,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>{const e=-(110*n)+"ms";return{r:6,style:{left:`${32-32*n}%`,"animation-delay":e}}}},lines:{dur:1e3,lines:8,fn:(t,n,e)=>{const s=`rotate(${360/e*n+(n<e/2?180:-180)}deg)`;const r=`${t*n/e-t}ms`;return{y1:14,y2:26,style:{transform:s,"animation-delay":r}}}},"lines-small":{dur:1e3,lines:8,fn:(t,n,e)=>{const s=`rotate(${360/e*n+(n<e/2?180:-180)}deg)`;const r=`${t*n/e-t}ms`;return{y1:12,y2:20,style:{transform:s,"animation-delay":r}}}},"lines-sharp":{dur:1e3,lines:12,fn:(t,n,e)=>{const s=`rotate(${30*n+(n<6?180:-180)}deg)`;const r=`${t*n/e-t}ms`;return{y1:17,y2:29,style:{transform:s,"animation-delay":r}}}},"lines-sharp-small":{dur:1e3,lines:12,fn:(t,n,e)=>{const s=`rotate(${30*n+(n<6?180:-180)}deg)`;const r=`${t*n/e-t}ms`;return{y1:12,y2:20,style:{transform:s,"animation-delay":r}}}}};const n=t;export{n as S};
//# sourceMappingURL=p-c35c69fb.js.map