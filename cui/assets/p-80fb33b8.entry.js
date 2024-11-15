/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,k as i,i as e,H as s,j as o}from"./p-18a64bdb.js";import{g as n}from"./p-3970d3a9.js";const a=":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;flex:1;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--side-min-width:270px;--side-max-width:28%}";const l=a;const d=":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:row;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;flex:1;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--side-min-width:270px;--side-max-width:28%}";const r=d;const p="split-pane-main";const c="split-pane-side";const h={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""};const f=class{constructor(e){t(this,e);this.ionSplitPaneVisible=i(this,"ionSplitPaneVisible",7);this.visible=false;this.contentId=undefined;this.disabled=false;this.when=h["lg"]}visibleChanged(t){this.ionSplitPaneVisible.emit({visible:t})}async isVisible(){return Promise.resolve(this.visible)}async connectedCallback(){if(typeof customElements!=="undefined"&&customElements!=null){await customElements.whenDefined("ion-split-pane")}this.styleMainElement();this.updateState()}disconnectedCallback(){if(this.rmL){this.rmL();this.rmL=undefined}}updateState(){if(this.rmL){this.rmL();this.rmL=undefined}if(this.disabled){this.visible=false;return}const t=this.when;if(typeof t==="boolean"){this.visible=t;return}const i=h[t]||t;if(i.length===0){this.visible=false;return}const e=t=>{this.visible=t.matches};const s=window.matchMedia(i);s.addListener(e);this.rmL=()=>s.removeListener(e);this.visible=s.matches}styleMainElement(){const t=this.contentId;const i=this.el.children;const e=this.el.childElementCount;let s=false;for(let o=0;o<e;o++){const e=i[o];const n=t!==undefined&&e.id===t;if(n){if(s){console.warn("split pane cannot have more than one main node");return}else{m(e,n);s=true}}}if(!s){console.warn("split pane does not have a specified main node")}}render(){const t=n(this);return e(s,{key:"d54c356cd4bff7e55325160882dea8249f47f388",class:{[t]:true,[`split-pane-${t}`]:true,"split-pane-visible":this.visible}},e("slot",{key:"af62690d0fd686cfbd29d888c79eda9001f13e2f"}))}get el(){return o(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}};const m=(t,i)=>{let e;let s;if(i){e=p;s=c}else{e=c;s=p}const o=t.classList;o.add(e);o.remove(s)};f.style={ios:l,md:r};export{f as ion_split_pane};
//# sourceMappingURL=p-80fb33b8.entry.js.map