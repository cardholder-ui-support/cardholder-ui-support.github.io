/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,i as e,j as s}from"./p-18a64bdb.js";import{c as i,a as n,I as o,v as a}from"./p-675e89df.js";import{b as c,m as d}from"./p-d8241bab.js";import{o as r}from"./p-c7bc8265.js";import"./p-0462f723.js";const h=class{constructor(e){t(this,e);this.sendPostMessage=t=>{if(this.windowParent){const e=Object.assign(Object.assign({},t),{componentName:this.componentName});if(this.activeEnvName!=="production"){console.info("sending postmessage",e)}if(this.windowParentType==="react-native-webview"){this.windowParent.postMessage(JSON.stringify(e))}else{this.windowParent.postMessage(e,"*")}}else{console.error("Unable to send postmessage - no windowParent set")}};this.renderCustomFontFaces=async()=>{const t=i.get(n);const{theme:e}=await t.execute();const s=e===null||e===void 0?void 0:e.fontFaces;let o=document.getElementById("font-face-styles");if(o){o.innerHTML=""}else{o=document.createElement("style");o.id="font-face-styles";document.head.appendChild(o)}s.forEach((t=>{const e=`@font-face { ${t} }`;o.appendChild(document.createTextNode(e))}))};this.theme=null;this.resizeObserverDefined=false;this.componentName=undefined;this.activeEnvName=undefined;this.windowParent=undefined;this.windowParentType=undefined}async connectedCallback(){{this.componentName=this.loadComponentName();this.autoAssignListenersUponEventDispatch();this.initializeResizeObserver();const{activeEnvName:t,authToken:e,isMockMode:s,themeName:i}=this.loadEnvironmentDetails();this.activeEnvName=t;this.setWindowParent();await this.configureMsw(s);const n=window.marqeta.isServedFromUxtService()?"/static/assets/public/":new URL("../cui/assets/public/",window.location.href).toString();await c({authToken:e,assetPath:n,themeName:i,envName:t,enableRumAgent:!s});r((t=>{t&&this.renderCustomFontFaces()}))}}setWindowParent(){if(window.ReactNativeWebView){this.windowParentType="react-native-webview";this.windowParent=window.ReactNativeWebView}else{this.windowParentType="window";this.windowParent=window.parent}}loadComponentName(){if(window.marqeta.globalProps){const{componentName:t}=window.marqeta.globalProps;return t}else{const t=window.location.pathname.split("/");const e=t[t.length-1];return e}}autoAssignListenersUponEventDispatch(){const t=EventTarget.prototype.dispatchEvent;const e=t=>this.proxyEventViaPostMessage(t);function s(s){window.addEventListener(s.type,e);return t.apply(this,arguments)}EventTarget.prototype.dispatchEvent=s;if(EventTarget.prototype.dispatchEvent!==s){console.error("failed to add custom iframe event dispatcher")}}proxyEventViaPostMessage(t){const{type:e,detail:s}=t;if(e.substring(0,2)==="mq"){this.sendPostMessage(Object.assign({eventName:e},s||{}))}}initializeResizeObserver(){if(!this.resizeObserverDefined){let t=0;const e=new ResizeObserver((e=>e.forEach((e=>{var s;const{inlineSize:i,blockSize:n}=(s=e.contentBoxSize)===null||s===void 0?void 0:s[0];const o=Math.ceil(i);const a=Math.ceil(n);if(a!==t){this.sendPostMessage({eventName:"iframeBodyResize",componentName:this.componentName,width:o,height:a});t=a}}))));e.observe(this.el,{box:"content-box"});this.resizeObserverDefined=true}}loadEnvironmentDetails(){var t;const e=window.marqeta.globalProps;const s=(e===null||e===void 0?void 0:e.envName)||((t=window.marqeta)===null||t===void 0?void 0:t.activeEnvName);const n=e===null||e===void 0?void 0:e.isMockMode;const c=i.get(o);const d=i.get(a);c.execute(s);d.execute(n);return{activeEnvName:s,authToken:e===null||e===void 0?void 0:e.authToken,isMockMode:n,themeName:e===null||e===void 0?void 0:e.themeName}}async configureMsw(t){if(t&&!d.isRunning){d.init({onUnhandledRequest:"bypass"});await d.start()}else if(d.isRunning){d.stop()}}getComponentProps(){return window.marqeta.componentProps}render(){if(!this.componentName){return null}const t=this.componentName;return e(t,Object.assign({},this.getComponentProps()))}static get assetsDirs(){return["public"]}get el(){return s(this)}};export{h as iframe_page_root};
//# sourceMappingURL=p-8ab9d177.entry.js.map