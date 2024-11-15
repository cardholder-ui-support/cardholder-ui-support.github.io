/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,k as o,i,H as e,j as n}from"./p-18a64bdb.js";import{c as a}from"./p-a29d67e4.js";import{c as l,g as d}from"./p-3970d3a9.js";const s=':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;flex:1;flex-direction:column;align-items:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:flex;position:relative;flex-direction:inherit;align-items:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:flex;position:relative;flex-flow:inherit;align-items:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}::slotted(ion-label){order:0}::slotted(ion-icon){order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){flex-direction:row}:host(.tab-layout-icon-end){flex-direction:row-reverse}:host(.tab-layout-icon-bottom){flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:24px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){font-size:30px}';const r=s;const b=':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;flex:1;flex-direction:column;align-items:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:flex;position:relative;flex-direction:inherit;align-items:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:flex;position:relative;flex-flow:inherit;align-items:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}::slotted(ion-label){order:0}::slotted(ion-icon){order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){flex-direction:row}:host(.tab-layout-icon-end){flex-direction:row-reverse}:host(.tab-layout-icon-bottom){flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}';const c=b;const h=class{constructor(i){t(this,i);this.ionTabButtonClick=o(this,"ionTabButtonClick",7);this.inheritedAttributes={};this.onKeyUp=t=>{if(t.key==="Enter"||t.key===" "){this.selectTab(t)}};this.onClick=t=>{this.selectTab(t)};this.disabled=false;this.download=undefined;this.href=undefined;this.rel=undefined;this.layout=undefined;this.selected=false;this.tab=undefined;this.target=undefined}onTabBarChanged(t){const o=t.target;const i=this.el.parentElement;if(t.composedPath().includes(i)||(o===null||o===void 0?void 0:o.contains(this.el))){this.selected=this.tab===t.detail.tab}}componentWillLoad(){this.inheritedAttributes=Object.assign({},a(this.el,["aria-label"]));if(this.layout===undefined){this.layout=l.get("tabButtonLayout","icon-top")}}selectTab(t){if(this.tab!==undefined){if(!this.disabled){this.ionTabButtonClick.emit({tab:this.tab,href:this.href,selected:this.selected})}t.preventDefault()}}get hasLabel(){return!!this.el.querySelector("ion-label")}get hasIcon(){return!!this.el.querySelector("ion-icon")}render(){const{disabled:t,hasIcon:o,hasLabel:n,href:a,rel:l,target:s,layout:r,selected:b,tab:c,inheritedAttributes:h}=this;const p=d(this);const g={download:this.download,href:a,rel:l,target:s};return i(e,{key:"4b528ce31f67e10ad849e0c99bd034bba675c227",onClick:this.onClick,onKeyup:this.onKeyUp,id:c!==undefined?`tab-button-${c}`:null,class:{[p]:true,"tab-selected":b,"tab-disabled":t,"tab-has-label":n,"tab-has-icon":o,"tab-has-label-only":n&&!o,"tab-has-icon-only":o&&!n,[`tab-layout-${r}`]:true,"ion-activatable":true,"ion-selectable":true,"ion-focusable":true}},i("a",Object.assign({key:"0da8784b1b243ffaaaf04dd7adb55d6881ed0c08"},g,{class:"button-native",part:"native",role:"tab","aria-selected":b?"true":null,"aria-disabled":t?"true":null,tabindex:t?"-1":undefined},h),i("span",{key:"2c628e8f1ebc129f84876c01530468cb97d8bf3a",class:"button-inner"},i("slot",{key:"8052a171d197a7de1a7eb12b091c35f73ae1ee21"})),p==="md"&&i("ion-ripple-effect",{key:"4186bdb5ed045ec16f495a14fa30ac864c576227",type:"unbounded"})))}get el(){return n(this)}};h.style={ios:r,md:c};export{h as ion_tab_button};
//# sourceMappingURL=p-194a3f68.entry.js.map