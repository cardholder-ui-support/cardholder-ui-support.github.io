/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
const t=(t,s,e)=>{const r=n(t);const c=o(s,e,r);return c};const o=function(t,o,n){const s=t.createElement("style");s.textContent=`:host,:root { ${n}}`;o.appendChild(s);return s};const n=(t,o="-",s="")=>Object.keys(t).reduce(((s,e)=>{const r=t[e];const c=`${o}-${e}`;if(typeof r==="string"){return`${s}${c}: ${r}; `}else if(typeof r==="object"){return n(r,c,s)}}),s);export{t as r};
//# sourceMappingURL=p-bc4f08b6.js.map