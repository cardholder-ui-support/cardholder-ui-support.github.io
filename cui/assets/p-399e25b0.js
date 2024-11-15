/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
function e(e,t){let n=null;return(...l)=>new Promise(((u,o)=>{const r=()=>{n=null;e(...l).then(u).catch(o)};if(n){clearTimeout(n)}n=setTimeout(r,t)}))}const t=(e,t)=>{let n;return(...l)=>{clearTimeout(n);n=setTimeout((()=>{e.apply(null,l)}),t)}};export{e as d,t as n};
//# sourceMappingURL=p-399e25b0.js.map