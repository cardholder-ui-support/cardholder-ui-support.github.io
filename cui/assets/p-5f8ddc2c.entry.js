/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,k as n}from"./p-18a64bdb.js";const o=class{constructor(o){t(this,o);this.ionRouteDataChanged=n(this,"ionRouteDataChanged",7);this.url="";this.component=undefined;this.componentProps=undefined;this.beforeLeave=undefined;this.beforeEnter=undefined}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,n){if(t===n){return}const o=t?Object.keys(t):[];const e=n?Object.keys(n):[];if(o.length!==e.length){this.onUpdate(t);return}for(const e of o){if(t[e]!==n[e]){this.onUpdate(t);return}}}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}};export{o as ion_route};
//# sourceMappingURL=p-5f8ddc2c.entry.js.map