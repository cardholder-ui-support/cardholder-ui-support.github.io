/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,k as e,i}from"./p-18a64bdb.js";import{A as s}from"./p-52af63d3.js";import{c as n,aa as a,a0 as o}from"./p-675e89df.js";import{o as r,m as c}from"./p-c7bc8265.js";import{R as l,D as h,a as d,b as m}from"./p-7abf3574.js";import{C as p}from"./p-cb5bbf71.js";import"./p-0462f723.js";import"./p-fd1eb924.js";const u=":host{display:block}.pin-container{opacity:0;transition:opacity var(--animation-animationDuration-duration50) ease-in-out}.pin-container.show{opacity:1}";const f=u;const y=n.get(a);const g=class{constructor(i){t(this,i);this.mqRevealPinLoadCompleted=e(this,"mqRevealPinLoadCompleted",7);this.mqRevealPinActionTriggered=e(this,"mqRevealPinActionTriggered",7);this.mqRevealPinActionCompleted=e(this,"mqRevealPinActionCompleted",7);this.loadPin=async()=>{try{const{pin:t}=await y.execute(this.cardToken,this.cardholderVerificationMethod);this.pin=t;this.mqRevealPinLoadCompleted.emit({status:p.SUCCESS,data:{cardToken:this.cardToken}})}catch(t){this.handleLoadPinError(t)}};this.handleLoadPinError=t=>{var e;const i=(e=t===null||t===void 0?void 0:t.originalError)===null||e===void 0?void 0:e.message;this.mqRevealPinLoadCompleted.emit({status:p.ERROR,error:{code:i||"INTERNAL_ERROR"},data:{cardToken:this.cardToken}})};this.handleRevealPin=()=>{this.mqRevealPinActionTriggered.emit({type:l.REVEAL_PIN,data:{cardToken:this.cardToken}});this.revealPin=true;this.startCountdown();this.mqRevealPinActionCompleted.emit({type:l.REVEAL_PIN,status:p.SUCCESS,data:{cardToken:this.cardToken}});s.CardManagement.revealPinSuccess()};this.cardToken=undefined;this.cardholderVerificationMethod=o.OTHER;this.timeout=h;this.countdown=this.timeout;this.isReady=false;this.pin=undefined;this.revealPin=false;this.intervalId=undefined}validateTimeout(t){if(!t){this.timeout=h}else if(t<d){this.timeout=d}else if(t>m){this.timeout=m}this.countdown=this.timeout}connectedCallback(){r((t=>{t&&this.loadPin()}))}componentDidLoad(){this.validateTimeout(this.timeout)}startCountdown(){const t=1e3;this.countdown=this.countdown-1;this.intervalId=setInterval((()=>{if(this.countdown>0){this.countdown--}else{clearInterval(this.intervalId);this.mqRevealPinActionCompleted.emit({type:l.HIDE_PIN,status:p.SUCCESS,data:{cardToken:this.cardToken}});this.revealPin=false;this.countdown=this.timeout}}),t)}render(){if(!this.cardToken||!c.mqCuiReady){return null}const t={padding:"16px 4px"};return i("theme-provider",null,i("flex-container",{"flex-direction":"column",alignItems:"center",gap:"0"},this.revealPin&&this.pin?i("div",{class:{"pin-container":true,show:this.revealPin}},i("flex-container",{"flex-direction":"column",justifyContent:"flex-start",gap:"var(--spacing-spacing600)",styleOverride:{"min-height":"136px"}},i("flex-container",{flexDirection:"row",justifyContent:"center",alignItems:"center",styleOverride:{"max-height":"56px"}},i("mq-text",{type:"number",style:t,content:this.pin.split("")[0]}),i("mq-text",{type:"number",style:t,content:this.pin.split("")[1]}),i("mq-text",{type:"number",style:t,content:this.pin.split("")[2]}),i("mq-text",{type:"number",style:t,content:this.pin.split("")[3]})),i("flex-container",{flexDirection:"column",gap:"var(--spacing-spacing400)",alignItems:"center"},i("mq-progress-bar",{animationDuration:this.timeout}),i("mq-text",null,"Hiding PIN in ",this.countdown," ",this.countdown>1||this.countdown<1?"seconds":"second")))):i("flex-container",{"flex-direction":"column",justifyContent:"flex-start",gap:"var(--spacing-spacing600)",styleOverride:{"min-height":"136px"}},i("flex-container",{flexDirection:"row",gap:"16px",alignItems:"center",styleOverride:{"max-height":"56px"}},i("mq-icon",{name:"dot",size:"md",style:t,backgroundColor:"var(--colors-neutral-neutral900)"}),i("mq-icon",{name:"dot",size:"md",style:t,backgroundColor:"var(--colors-neutral-neutral900)"}),i("mq-icon",{name:"dot",size:"md",style:t,backgroundColor:"var(--colors-neutral-neutral900)"}),i("mq-icon",{name:"dot",size:"md",style:t,backgroundColor:"var(--colors-neutral-neutral900)"})),i("mq-button",{type:"button",kind:"tertiary",fullWidth:true,styleOverride:{gap:"var(--spacing-spacing200)"},onClick:()=>this.handleRevealPin()},i("mq-icon",{name:"input-show-icon",size:"md",color:"none",strokeColor:"var(--elements-tertiaryButton-buttonTertiaryText)"})," Reveal PIN"))))}static get watchers(){return{timeout:["validateTimeout"]}}};g.style=f;export{g as reveal_pin};
//# sourceMappingURL=p-79d0d544.entry.js.map