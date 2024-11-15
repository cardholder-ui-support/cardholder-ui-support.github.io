/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as s,i as t}from"./p-18a64bdb.js";import{m as r}from"./p-c7bc8265.js";import{g as o}from"./p-675e89df.js";import"./p-0462f723.js";const a=class{constructor(t){s(this,t);this.isStorybookMockMode=undefined}connectedCallback(){if(this.isStorybookMockMode&&!r.mqCuiReady){this.tryLoadingEnabledComponents();r.mqCuiReady=true}}async tryLoadingEnabledComponents(){try{await o()}catch(s){console.error(s)}}render(){return t("slot",{key:"0cd9859322a05bd3dba6abe03280b9697a0b7668"})}};export{a as mq_store_provider};
//# sourceMappingURL=p-219735d5.entry.js.map