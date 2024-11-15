/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,k as i,i as n,F as e,j as s}from"./p-18a64bdb.js";import"./p-52af63d3.js";import{i as o}from"./p-fd1eb924.js";import"./p-675e89df.js";import{m as a}from"./p-c7bc8265.js";import{C as h,H as c}from"./p-cb5bbf71.js";const r=".bones .content{flex-direction:column;gap:var(--spacing-spacing600);padding:var(--spacing-spacing600)}.bones .content>flex-container:first-child>mq-bone:nth-child(2)>.mq-bone,.bones .content>flex-container:nth-child(2)>mq-bone:nth-child(2)>.mq-bone{width:392px}.bones .footer{padding:0 var(--spacing-spacing600) var(--spacing-spacing600)}.bones .footer>mq-bone>.mq-bone{width:392px}mq-bone{width:100%}@media screen and (max-width: 480px){.bones .content{padding:var(--spacing-spacing600) var(--spacing-spacing600) var(--spacing-spacing800)}.bones .content>flex-container:first-child>mq-bone:nth-child(2)>.mq-bone,.bones .content>flex-container:nth-child(2)>mq-bone:nth-child(2)>.mq-bone{width:100%}.bones .footer>mq-bone>.mq-bone{width:100%}}";const p=r;var d;(function(t){t["SET_PIN"]="SET_PIN"})(d||(d={}));const l=class{constructor(n){t(this,n);this.mqSetPinLoadInitiated=i(this,"mqSetPinLoadInitiated",7);this.mqSetPinLoadCompleted=i(this,"mqSetPinLoadCompleted",7);this.mqSetPinActionTriggered=i(this,"mqSetPinActionTriggered",7);this.mqSetPinActionCompleted=i(this,"mqSetPinActionCompleted",7);this.mqSetPinActionHook=i(this,"mqSetPinActionHook",7);this.handleIframeLoaded=t=>{const{status:i}=t.detail;if(i===h.SUCCESS){this.isLoading=false}};this.handleClose=()=>{this.mqSetPinActionHook.emit({type:c.SUCCESS_DONE,data:{cardToken:this.cardToken}})};this.cardToken=undefined;this.isAfterActivation=undefined;this.showTitle=undefined;this.showDescription=undefined;this.activeEnvName="";this.cuiIframeBaseUrl=undefined;this.iframeSrc="";this.isLoading=true;this.isMobile=undefined;this.lastFour=undefined;this.showSuccess=false;this.themeName=""}connectedCallback(){this.mqSetPinLoadInitiated.emit();this.isMobile=o()}handleActionCompleted(t){const{type:i,status:n,data:{lastFour:e}}=t===null||t===void 0?void 0:t.detail;if(i===d.SET_PIN&&n===h.SUCCESS){this.showSuccess=true;this.lastFour=e}}renderBodySkeleton(){return this.isLoading&&n("div",{class:"bones"},(this.showTitle||this.showDescription)&&n("div",null,n("flex-container",{flex:"initial",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",gap:"var(--spacing-spacing200)"},this.showTitle&&n("mq-bone",{height:"28px",width:"132px"}),this.showDescription&&n(e,null,n("mq-bone",{height:"20px",width:"368px"}),n("mq-bone",{height:"20px",width:"245px"}))),n("mq-vspacer",{factor:5})),n("flex-container",{class:"content"},n("flex-container",{"flex-direction":"column",gap:"var(--spacing-spacing100)"},n("mq-bone",{height:"16px",width:"96px"}),n("mq-bone",{height:"40px"})),n("flex-container",{"flex-direction":"column",gap:"var(--spacing-spacing100)"},n("mq-bone",{height:"16px",width:"96px"}),n("mq-bone",{height:"40px"}))),n("flex-container",{class:"footer"},n("mq-bone",{height:"40px"})))}render(){if(!a.mqCuiReady){return null}return n("theme-provider",null,n("div",{class:"mq-set-pin"},this.showSuccess&&n("div",{style:{padding:"var(--spacing-spacing600)"}},n("mq-set-pin-success",{onCloseSetPinSuccess:this.handleClose,lastFour:this.lastFour,style:{margin:"auto","min-height":"75%"}})),!this.showSuccess&&n(e,null,this.renderBodySkeleton(),n("mq-iframe-component",{component:"set-pin",onMqIframeComponentLoadCompleted:t=>this.handleIframeLoaded(t),iframeTitle:"Set PIN form",eventProxyParent:this,props:{cardToken:this.cardToken,isAfterActivation:this.isAfterActivation,showTitle:this.showTitle,showDescription:this.showDescription}}))))}get el(){return s(this)}};l.style=p;export{l as M,d as S};
//# sourceMappingURL=p-d0978ff0.js.map