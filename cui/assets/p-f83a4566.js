/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const t=(t,h,M,r,s)=>n(t[1],h[1],M[1],r[1],s).map((n=>a(t[0],h[0],M[0],r[0],n)));const a=(t,a,n,h,M)=>{const r=3*a*Math.pow(M-1,2);const s=-3*n*M+3*n+h*M;const e=t*Math.pow(M-1,3);return M*(r+M*s)-e};const n=(t,a,n,h,r)=>{t-=r;a-=r;n-=r;h-=r;const s=M(h-3*n+3*a-t,3*n-6*a+3*t,3*a-3*t,t);return s.filter((t=>t>=0&&t<=1))};const h=(t,a,n)=>{const h=a*a-4*t*n;if(h<0){return[]}else{return[(-a+Math.sqrt(h))/(2*t),(-a-Math.sqrt(h))/(2*t)]}};const M=(t,a,n,M)=>{if(t===0){return h(a,n,M)}a/=t;n/=t;M/=t;const r=(3*n-a*a)/3;const s=(2*a*a*a-9*a*n+27*M)/27;if(r===0){return[Math.pow(-s,1/3)]}else if(s===0){return[Math.sqrt(-r),-Math.sqrt(-r)]}const e=Math.pow(s/2,2)+Math.pow(r/3,3);if(e===0){return[Math.pow(s/2,1/2)-a/3]}else if(e>0){return[Math.pow(-(s/2)+Math.sqrt(e),1/3)-Math.pow(s/2+Math.sqrt(e),1/3)-a/3]}const o=Math.sqrt(Math.pow(-(r/3),3));const c=Math.acos(-(s/(2*Math.sqrt(Math.pow(-(r/3),3)))));const u=2*Math.pow(o,1/3);return[u*Math.cos(c/3)-a/3,u*Math.cos((c+2*Math.PI)/3)-a/3,u*Math.cos((c+4*Math.PI)/3)-a/3]};export{t as g};
//# sourceMappingURL=p-f83a4566.js.map