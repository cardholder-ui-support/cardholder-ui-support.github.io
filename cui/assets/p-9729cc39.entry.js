/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as i,h as n,i as d,H as a}from"./p-18a64bdb.js";import{g as o}from"./p-3970d3a9.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const r={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};const g=i=>{if(i===undefined||i===""){return true}if(window.matchMedia){const n=r[i];return window.matchMedia(n).matches}return false};const t=":host{-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;box-sizing:border-box;position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}";const e=t;const p=typeof window!=="undefined"?window:undefined;const l=p&&!!(p.CSS&&p.CSS.supports&&p.CSS.supports("--a: 0"));const u=["","xs","sm","md","lg","xl"];const s=class{constructor(n){i(this,n);this.offset=undefined;this.offsetXs=undefined;this.offsetSm=undefined;this.offsetMd=undefined;this.offsetLg=undefined;this.offsetXl=undefined;this.pull=undefined;this.pullXs=undefined;this.pullSm=undefined;this.pullMd=undefined;this.pullLg=undefined;this.pullXl=undefined;this.push=undefined;this.pushXs=undefined;this.pushSm=undefined;this.pushMd=undefined;this.pushLg=undefined;this.pushXl=undefined;this.size=undefined;this.sizeXs=undefined;this.sizeSm=undefined;this.sizeMd=undefined;this.sizeLg=undefined;this.sizeXl=undefined}onResize(){n(this)}getColumns(i){let n;for(const d of u){const a=g(d);const o=this[i+d.charAt(0).toUpperCase()+d.slice(1)];if(a&&o!==undefined){n=o}}return n}calculateSize(){const i=this.getColumns("size");if(!i||i===""){return}const n=i==="auto"?"auto":l?`calc(calc(${i} / var(--ion-grid-columns, 12)) * 100%)`:i/12*100+"%";return{flex:`0 0 ${n}`,width:`${n}`,"max-width":`${n}`}}calculatePosition(i,n){const d=this.getColumns(i);if(!d){return}const a=l?`calc(calc(${d} / var(--ion-grid-columns, 12)) * 100%)`:d>0&&d<12?d/12*100+"%":"auto";return{[n]:a}}calculateOffset(i){return this.calculatePosition("offset",i?"margin-right":"margin-left")}calculatePull(i){return this.calculatePosition("pull",i?"left":"right")}calculatePush(i){return this.calculatePosition("push",i?"right":"left")}render(){const i=document.dir==="rtl";const n=o(this);return d(a,{key:"c37fa4c4c993385ccbb6f4e89b2f390b140507a0",class:{[n]:true},style:Object.assign(Object.assign(Object.assign(Object.assign({},this.calculateOffset(i)),this.calculatePull(i)),this.calculatePush(i)),this.calculateSize())},d("slot",{key:"6a5296ff0b9dee6600c2dafe7363a065d053bac2"}))}};s.style=e;export{s as ion_col};
//# sourceMappingURL=p-9729cc39.entry.js.map