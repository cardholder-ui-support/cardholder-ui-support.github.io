/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{w as e}from"./p-3647f076.js";import{r as n}from"./p-a29d67e4.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const t=(t,r,i)=>{let o;const s=()=>{const e=r();if(e===undefined||t.label!==undefined||i()===null){return false}return true};const d=()=>{if(s()){n((()=>{f()}))}};const f=()=>{const n=r();if(n===undefined){return}if(!s()){n.style.removeProperty("width");return}const d=i().scrollWidth;if(d===0&&n.offsetParent===null&&e!==undefined&&"IntersectionObserver"in e){if(o!==undefined){return}const e=o=new IntersectionObserver((n=>{if(n[0].intersectionRatio===1){f();e.disconnect();o=undefined}}),{threshold:.01,root:t});e.observe(n);return}n.style.setProperty("width",`${d*.75}px`)};const u=()=>{if(o){o.disconnect();o=undefined}};return{calculateNotchWidth:d,destroy:u}};export{t as c};
//# sourceMappingURL=p-4a68af4e.js.map