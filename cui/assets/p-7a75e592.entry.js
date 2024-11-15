/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as s,i as t,H as e}from"./p-18a64bdb.js";import{m as i}from"./p-4675e455.js";import{g as o}from"./p-3970d3a9.js";import{u as a}from"./p-93cd4096.js";import"./p-3647f076.js";import"./p-591639ef.js";import"./p-bd6f674d.js";import"./p-a29d67e4.js";import"./p-1fd4aad1.js";const d=":host(.menu-toggle-hidden){display:none}";const n=d;const r=class{constructor(t){s(this,t);this.onClick=()=>i.toggle(this.menu);this.visible=false;this.menu=undefined;this.autoHide=true}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await a(this.menu)}render(){const s=o(this);const i=this.autoHide&&!this.visible;return t(e,{key:"90e621f09792383f1badcc1b402b1ac7d08c5f98",onClick:this.onClick,"aria-hidden":i?"true":null,class:{[s]:true,"menu-toggle-hidden":i}},t("slot",{key:"c0abdd1d91e9d80ee3704e3e374ebe1f29078460"}))}};r.style=n;export{r as ion_menu_toggle};
//# sourceMappingURL=p-7a75e592.entry.js.map