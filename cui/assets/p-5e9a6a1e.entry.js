/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,k as o,i as s,H as i,j as e}from"./p-18a64bdb.js";import{c as n,h as a}from"./p-100c2286.js";import{g as r}from"./p-3970d3a9.js";const c=":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;flex-wrap:wrap;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;justify-content:center}";const l=c;const d=":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;flex-wrap:wrap;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}";const h=d;const p=class{constructor(s){t(this,s);this.ionCollapsedClick=o(this,"ionCollapsedClick",7);this.breadcrumbsInit=()=>{this.setBreadcrumbSeparator();this.setMaxItems()};this.resetActiveBreadcrumb=()=>{const t=this.getBreadcrumbs();const o=t.find((t=>t.active));if(o&&this.activeChanged){o.active=false}};this.setMaxItems=()=>{const{itemsAfterCollapse:t,itemsBeforeCollapse:o,maxItems:s}=this;const i=this.getBreadcrumbs();for(const t of i){t.showCollapsedIndicator=false;t.collapsed=false}const e=s!==undefined&&i.length>s&&o+t<=s;if(e){i.forEach(((s,e)=>{if(e===o){s.showCollapsedIndicator=true}if(e>=o&&e<i.length-t){s.collapsed=true}}))}};this.setBreadcrumbSeparator=()=>{const{itemsAfterCollapse:t,itemsBeforeCollapse:o,maxItems:s}=this;const i=this.getBreadcrumbs();const e=i.find((t=>t.active));for(const n of i){const a=s!==undefined&&t===0?n===i[o]:n===i[i.length-1];n.last=a;const r=n.separator!==undefined?n.separator:a?undefined:true;n.separator=r;if(!e&&a){n.active=true;this.activeChanged=true}}};this.getBreadcrumbs=()=>Array.from(this.el.querySelectorAll("ion-breadcrumb"));this.slotChanged=()=>{this.resetActiveBreadcrumb();this.breadcrumbsInit()};this.collapsed=undefined;this.activeChanged=undefined;this.color=undefined;this.maxItems=undefined;this.itemsBeforeCollapse=1;this.itemsAfterCollapse=1}onCollapsedClick(t){const o=this.getBreadcrumbs();const s=o.filter((t=>t.collapsed));this.ionCollapsedClick.emit(Object.assign(Object.assign({},t.detail),{collapsedBreadcrumbs:s}))}maxItemsChanged(){this.resetActiveBreadcrumb();this.breadcrumbsInit()}componentWillLoad(){this.breadcrumbsInit()}render(){const{color:t,collapsed:o}=this;const e=r(this);return s(i,{key:"18ffba1642f10cc2bc31440e84f23aa6f042e501",class:n(t,{[e]:true,"in-toolbar":a("ion-toolbar",this.el),"in-toolbar-color":a("ion-toolbar[color]",this.el),"breadcrumbs-collapsed":o})},s("slot",{key:"3db6d31590e3047889ce554d57d155c8ea2e1455",onSlotchange:this.slotChanged}))}get el(){return e(this)}static get watchers(){return{maxItems:["maxItemsChanged"],itemsBeforeCollapse:["maxItemsChanged"],itemsAfterCollapse:["maxItemsChanged"]}}};p.style={ios:l,md:h};export{p as ion_breadcrumbs};
//# sourceMappingURL=p-5e9a6a1e.entry.js.map