/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,i as o,H as n,j as i}from"./p-18a64bdb.js";import{i as e}from"./p-a29d67e4.js";import{m as r}from"./p-4675e455.js";import{c as a,h as d}from"./p-100c2286.js";import{m as s,k as c}from"./p-0a7eb0cd.js";import{g as l,c as h}from"./p-3970d3a9.js";import{u as p}from"./p-93cd4096.js";import"./p-3647f076.js";import"./p-591639ef.js";import"./p-bd6f674d.js";import"./p-1fd4aad1.js";const u=':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;user-select:none;z-index:0;appearance:none}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}';const b=u;const g=':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;user-select:none;z-index:0;appearance:none}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}';const f=g;const m=class{constructor(o){t(this,o);this.inheritedAttributes={};this.onClick=async()=>r.toggle(this.menu);this.visible=false;this.color=undefined;this.disabled=false;this.menu=undefined;this.autoHide=true;this.type="button"}componentWillLoad(){this.inheritedAttributes=e(this.el)}componentDidLoad(){this.visibilityChanged()}async visibilityChanged(){this.visible=await p(this.menu)}render(){const{color:t,disabled:i,inheritedAttributes:e}=this;const r=l(this);const p=h.get("menuIcon",r==="ios"?s:c);const u=this.autoHide&&!this.visible;const b={type:this.type};const g=e["aria-label"]||"menu";return o(n,{key:"95a8b9f09c7fae9713a8dc003ed277f6f31403da",onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":u?"true":null,class:a(t,{[r]:true,button:true,"menu-button-hidden":u,"menu-button-disabled":i,"in-toolbar":d("ion-toolbar",this.el),"in-toolbar-color":d("ion-toolbar[color]",this.el),"ion-activatable":true,"ion-focusable":true})},o("button",Object.assign({key:"39f3ce20c400d2fac4890a042e8e44426709fca5"},b,{disabled:i,class:"button-native",part:"native","aria-label":g}),o("span",{key:"310978dc1cdef668de6720cde2a2304253679176",class:"button-inner"},o("slot",{key:"2a2b9de524c1fc3c526fe9559cb077b976852725"},o("ion-icon",{key:"9c22d7ea9fc3d76c32ec1c1b4b13d982c60b8c2d",part:"icon",icon:p,mode:r,lazy:false,"aria-hidden":"true"}))),r==="md"&&o("ion-ripple-effect",{key:"c58c9e29c763070383472f65a9d322a684bcb564",type:"unbounded"})))}get el(){return i(this)}};m.style={ios:b,md:f};export{m as ion_menu_button};
//# sourceMappingURL=p-3268ab3c.entry.js.map