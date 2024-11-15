/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,k as r,i,j as s}from"./p-18a64bdb.js";import{m as e}from"./p-c7bc8265.js";import"./p-52af63d3.js";import"./p-675e89df.js";import{g as o}from"./p-324125bc.js";import{B as n}from"./p-3b5975cd.js";import{H as a,C as c}from"./p-cb5bbf71.js";const d=".mq-link-external-card{background-color:var(--styles-background-surfacePrimaryColor)}.add-linked-account-success{padding:var(--spacing-spacing600);text-align:center}.add-linked-account-success mq-button button{margin-left:auto;margin-right:auto}.linked-account-success-icon{width:4rem;height:4rem;border-radius:100%;border:5px solid var(--colors-primary-primary500);margin:0 auto;background-color:var(--colors-primary-primary50);display:flex;align-items:center;justify-content:center}";const l=d;var m;(function(t){t["LINK_ACCOUNT"]="LINK_ACCOUNT"})(m||(m={}));const u=class{constructor(i){t(this,i);this.mqLinkExternalCardLoadInitiated=r(this,"mqLinkExternalCardLoadInitiated",7);this.mqLinkExternalCardLoadCompleted=r(this,"mqLinkExternalCardLoadCompleted",7);this.mqLinkExternalCardActionTriggered=r(this,"mqLinkExternalCardActionTriggered",7);this.mqLinkExternalCardActionCompleted=r(this,"mqLinkExternalCardActionCompleted",7);this.mqLinkExternalCardActionHook=r(this,"mqLinkExternalCardActionHook",7);this.handleClose=()=>{this.mqLinkExternalCardActionHook.emit({type:a.SUCCESS_DONE})};this.showTitle=true;this.showDescription=true;this.activeEnvName="";this.cuiIframeBaseUrl=undefined;this.iframeSrc="";this.isLoading=true;this.showSuccess=false;this.themeName=""}connectedCallback(){this.mqLinkExternalCardLoadInitiated.emit()}handleActionCompleted(t){const{type:r,status:i}=t.detail;if(r===m.LINK_ACCOUNT&&i===c.SUCCESS){this.showSuccess=true}}renderSuccess(){const t=i("div",{class:"linked-account-success-icon"},i("mq-icon",{strokeWidth:"4",name:"default-network-icon",backgroundColor:"var(--colors-primary-primary50)",strokeColor:"var(--styles-icons-iconBrandColor)",size:"2rem"}));return i("mq-end-card",{icon:t,showAnimation:true,titleText:"Your card is linked",subtitleText:"You can start using the card to move money.",buttonSize:o(this.el)==="xs"?n.large:n.small,onMqEndCardButtonClicked:this.handleClose})}render(){if(!e.mqCuiReady){return null}return i("theme-provider",null,i("div",{class:"mq-link-external-card"},this.showSuccess&&this.renderSuccess(),!this.showSuccess&&i("div",{class:"mq-link-external-card-body"},i("mq-iframe-component",{component:"add-linked-account",iframeTitle:"Add linked account form",eventProxyParent:this,props:{showTitle:this.showTitle,showDescription:this.showDescription}}))))}get el(){return s(this)}};u.style=l;export{m as L,u as M};
//# sourceMappingURL=p-9fa6e82d.js.map