/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as o,k as r,i as e,H as t,j as i}from"./p-18a64bdb.js";import{i as a}from"./p-a29d67e4.js";import{o as n,c,h as s}from"./p-100c2286.js";import{d,e as l}from"./p-0a7eb0cd.js";import{g as b}from"./p-3970d3a9.js";const p=":host{display:flex;flex:0 0 auto;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:flex;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:flex;flex:1 1 100%;align-items:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #2d4665));--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, var(--ion-background-color-step-50, rgba(233, 237, 243, 0.7)));font-size:clamp(16px, 1rem, 22px)}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, var(--ion-text-color-step-250, #445b78))}.breadcrumb-separator{color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}::slotted(ion-icon){color:var(--ion-color-step-400, var(--ion-text-color-step-600, #92a0b3));font-size:min(1.125rem, 21.6px)}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, var(--ion-text-color-step-150, #242d39))}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e9edf3));color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9e0ea))}.breadcrumbs-collapsed-indicator ion-icon{font-size:min(1.375rem, 22px)}";const h=p;const u=":host{display:flex;flex:0 0 auto;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:flex;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:flex;flex:1 1 100%;align-items:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #677483));--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, var(--ion-text-color-step-200, #35404e));--background-focused:var(--ion-color-step-50, var(--ion-background-color-step-50, #fff))}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}.breadcrumb-separator{-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:-1px}:host(.ion-focused) .breadcrumb-native{border-radius:4px;box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}::slotted(ion-icon){color:var(--ion-color-step-550, var(--ion-text-color-step-450, #7d8894));font-size:1.125rem}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, var(--ion-text-color-step-150, #222d3a))}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, var(--ion-background-color-step-100, #eef1f3));color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, var(--ion-background-color-step-150, #dfe5e8))}";const m=u;const f=class{constructor(e){o(this,e);this.ionFocus=r(this,"ionFocus",7);this.ionBlur=r(this,"ionBlur",7);this.collapsedClick=r(this,"collapsedClick",7);this.inheritedAttributes={};this.onFocus=()=>{this.ionFocus.emit()};this.onBlur=()=>{this.ionBlur.emit()};this.collapsedIndicatorClick=()=>{this.collapsedClick.emit({ionShadowTarget:this.collapsedRef})};this.collapsed=false;this.last=undefined;this.showCollapsedIndicator=undefined;this.color=undefined;this.active=false;this.disabled=false;this.download=undefined;this.href=undefined;this.rel=undefined;this.separator=undefined;this.target=undefined;this.routerDirection="forward";this.routerAnimation=undefined}componentWillLoad(){this.inheritedAttributes=a(this.el)}isClickable(){return this.href!==undefined}render(){const{color:o,active:r,collapsed:i,disabled:a,download:p,el:h,inheritedAttributes:u,last:m,routerAnimation:f,routerDirection:v,separator:g,showCollapsedIndicator:x,target:k}=this;const w=this.isClickable();const y=this.href===undefined?"span":"a";const z=a?undefined:this.href;const j=b(this);const C=y==="span"?{}:{download:p,href:z,target:k};const A=m?false:i?x&&!m?true:false:g;return e(t,{key:"dfe55ad57f23e5da5f2e2c51fea99964812472e3",onClick:o=>n(z,o,v,f),"aria-disabled":a?"true":null,class:c(o,{[j]:true,"breadcrumb-active":r,"breadcrumb-collapsed":i,"breadcrumb-disabled":a,"in-breadcrumbs-color":s("ion-breadcrumbs[color]",h),"in-toolbar":s("ion-toolbar",this.el),"in-toolbar-color":s("ion-toolbar[color]",this.el),"ion-activatable":w,"ion-focusable":w})},e(y,Object.assign({key:"e361b1f0e7de6dd5c5dd4f6deae72c2c8210466d"},C,{class:"breadcrumb-native",part:"native",disabled:a,onFocus:this.onFocus,onBlur:this.onBlur},u),e("slot",{key:"9daeb45a8a28c89f3ad5751f71b8412197846371",name:"start"}),e("slot",{key:"4849e63cdffd6c712292745138b68730442c8b0d"}),e("slot",{key:"6edf9bac5aec06ccec2844efac2d9afa1d24cf57",name:"end"})),x&&e("button",{key:"de7f5faea75b44011b289d259265e2435a65874f",part:"collapsed-indicator","aria-label":"Show more breadcrumbs",onClick:()=>this.collapsedIndicatorClick(),ref:o=>this.collapsedRef=o,class:{"breadcrumbs-collapsed-indicator":true}},e("ion-icon",{key:"957d8851af9c99dda263f34eff0b35a0fc212c32","aria-hidden":"true",icon:l,lazy:false})),A&&e("span",{key:"97d646c37c4c41ad6b12c3a543d1146fde06fc9a",class:"breadcrumb-separator",part:"separator","aria-hidden":"true"},e("slot",{key:"0429f671a986f2d7be1b1b69fc879e80806d2916",name:"separator"},j==="ios"?e("ion-icon",{icon:d,lazy:false,"flip-rtl":true}):e("span",null,"/"))))}get el(){return i(this)}};f.style={ios:h,md:m};export{f as ion_breadcrumb};
//# sourceMappingURL=p-111a99b6.entry.js.map