/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,k as s,d as i,i as a,F as r}from"./p-18a64bdb.js";import{c as o,B as e,z as n,C as d}from"./p-675e89df.js";import{A as h}from"./p-52af63d3.js";import{o as l,m as c}from"./p-c7bc8265.js";import{b as p}from"./p-ac6d60ea.js";import{D as f}from"./p-1c71d34b.js";import{C as u}from"./p-cb5bbf71.js";import"./p-0462f723.js";const y=".card-front-container{width:300px;height:186px;position:relative}.card-image{width:100%;height:100%;position:relative;border-radius:var(--borderRadius-radius300)}.card-info{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;justify-content:flex-end;padding:var(--spacing-spacing400)}.card-last-four{display:flex;align-items:center;flex-direction:row;font-size:var(--typography-body-defaultBodyFontSize);line-height:var(--typography-body-defaultBodyLineHeight);height:var(--typography-body-defaultBodyLineHeight)}.card-last-four mq-text{color:var(--components-cardDetails-cardDetailsTextColor);font-weight:var(--typography-body-defaultBodyFontWeight);letter-spacing:var(--typography-body-defaultBodyLetterSpacing)}.ellipsis{display:inline-flex;align-items:center;color:var(--components-cardDetails-cardDetailsTextColor);font-size:2rem;line-height:var(--typography-body-defaultBodyLineHeight);font-weight:var(--typography-body-defaultBodyFontWeight);letter-spacing:var(--typography-body-defaultBodyLetterSpacing);transform:translateY(-43%)}";const g=y;const m=o.get(e);const v=o.get(n);const b=class{constructor(i){t(this,i);this.mqCardFrontLoadCompleted=s(this,"mqCardFrontLoadCompleted",7);this.loadEnvConfigVars=()=>{this.cuiCardArtBaseUrl=m.execute("CDN_CARD_ART_BASE_URL")};this.loadCardInfo=async()=>{try{await this.tryToLoadCard()}catch(t){this.handleCardLoadingError(t)}finally{this.isLoading=false}};this.tryToLoadCard=async()=>{this.isLoading=true;this.errorMessage=null;const{lastFour:t,state:s,cardProductToken:i}=await v.execute(this.cardToken);this.lastFour=t;this.cardState=s;this.cardProductToken=i;const a=await d();this.programShortCode=a;this.mqCardFrontLoadCompleted.emit({status:u.SUCCESS,data:{cardToken:this.cardToken}});h.CardManagement.getCardByTokenSuccess()};this.handleCardInfoRefresh=()=>{this.tryToLoadCard()};this.handleImageLoad=()=>{this.backgroundImageLoaded=true};this.handleImageError=()=>{this.useFallbackImage=true};this.cardToken=undefined;this.backgroundImageLoaded=false;this.cardProductToken=undefined;this.cardState="";this.cuiCardArtBaseUrl=undefined;this.errorMessage=null;this.isLoading=true;this.lastFour="";this.programShortCode=undefined;this.useFallbackImage=false}connectedCallback(){l((t=>{if(t){this.loadCardInfo();this.loadEnvConfigVars()}}))}handleCardLoadingError(t){var s;const i=t;const a=((s=i===null||i===void 0?void 0:i.originalError)===null||s===void 0?void 0:s.message)||"INTERNAL_ERROR";this.errorMessage=i.message||f;h.CardManagement.Exception(i.message);this.mqCardFrontLoadCompleted.emit({status:u.ERROR,data:{cardToken:this.cardToken},error:{code:a,message:this.errorMessage}});h.CardManagement.getCardByTokenError()}render(){if(!this.cardToken||!c.mqCuiReady){return null}const t=!this.isLoading&&!this.errorMessage;const s=!this.isLoading&&!this.errorMessage&&this.cardState!==p.ACTIVE;const o=i("digital-card-front.png");const e=`${this.cuiCardArtBaseUrl}/${this.programShortCode}/cardproducts/${this.cardProductToken}/front.png`;const n=this.useFallbackImage?o:e;return a("theme-provider",null,a("div",{class:"card-front-container"},this.isLoading&&a("mq-card-skeleton",null),this.errorMessage&&a("mq-card-error",{onRefreshCardDetailsButtonClick:()=>this.handleCardInfoRefresh()}),t&&a(r,null,a("img",{class:"card-image",src:n,alt:"Your card art",onError:this.handleImageError,onLoad:this.handleImageLoad,style:{opacity:this.backgroundImageLoaded?"1":"0"}}),a("div",{class:`card-info`},a("div",{class:"card-last-four"},a("span",{class:"ellipsis"},".."),a("span",null,a("mq-text",null,this.lastFour))))),s&&a("mq-card-disabled",{cardState:this.cardState})))}};b.style=g;export{b as card_front};
//# sourceMappingURL=p-8f56821b.entry.js.map