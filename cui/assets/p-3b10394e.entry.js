/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as e,k as r,i as s,H as t}from"./p-18a64bdb.js";const i=".stepper-title{margin-bottom:var(--spacing-spacing800)}.progress-container{border-radius:var(--borderRadius-radius100);background-color:var(--elements-progress-progressBarTrack);overflow:hidden;width:100%}.progress-bar{border-radius:0;background-color:var(--elements-progress-progressBar);transition:width 0.25s linear;animation-name:progress;animation-duration:10s;animation-direction:reverse;animation-timing-function:linear;animation-fill-mode:forwards;animation-delay:0}.progress-container,.progress-bar{height:8px;max-width:655px}";const a=i;const n=class{constructor(s){e(this,s);this.next=r(this,"next",7);this.prev=r(this,"prev",7);this.submit=r(this,"submit",7);this.currentStep=undefined;this.totalSteps=undefined;this.prevButtonText="Previous";this.nextButtonText="Next";this.submitButtonText="Submit";this.prevBtnProps=undefined;this.nextBtnProps=undefined;this.submitBtnProps=undefined}render(){return s(t,{key:"2298dd9d2b0a265df24dcd42cbe60830ea6eebea",class:"stepper-actions"},s("mq-button-group",{key:"fc585cd49dcd000b208503f05e1475c371e39c56",showSecondaryButton:this.currentStep>0,primaryButton:Object.assign(Object.assign(Object.assign({},this.nextBtnProps),{label:this.nextButtonText,onClick:()=>{this.next.emit()}}),this.currentStep===this.totalSteps-1&&Object.assign(Object.assign({},this.submitBtnProps),{label:this.submitButtonText,onClick:()=>this.submit.emit()})),secondaryButton:Object.assign(Object.assign({},this.prevBtnProps),{label:this.prevButtonText,onClick:()=>this.prev.emit()})}))}};n.style=a;const o=".stepper-title{margin-bottom:var(--spacing-spacing800)}.progress-container{border-radius:var(--borderRadius-radius100);background-color:var(--elements-progress-progressBarTrack);overflow:hidden;width:100%}.progress-bar{border-radius:0;background-color:var(--elements-progress-progressBar);transition:width 0.25s linear;animation-name:progress;animation-duration:10s;animation-direction:reverse;animation-timing-function:linear;animation-fill-mode:forwards;animation-delay:0}.progress-container,.progress-bar{height:8px;max-width:655px}";const c=o;const d=class{constructor(s){e(this,s);this.prev=r(this,"prev",7);this.totalSteps=undefined;this.currentStep=undefined}render(){const e=Math.round((this.currentStep+1)/this.totalSteps*100);const r={width:`${e}%`};return s(t,{key:"d5df5872b1462c0becfa1f840068c01057bfbd97",class:"stepper-title"},s("flex-container",{key:"777a9c7433c0bcfeff255fec6a5c29e92e9c1b62",gap:"var(--spacing-spacing400)",alignItems:"center",flexDirection:"column"},s("mq-text",{key:"9ca7b120e30705e4cb9820cb625971b7c27a4eea",type:"label",colorType:"tertiary",small:true},`Step ${this.currentStep+1} of ${this.totalSteps}`),s("div",{key:"bc1f5f912cd558f9bc785f747e0e04db524c6ce7",class:"progress-container"},s("div",{key:"56e6bf4368ec2d902de16e2cd04c042df9342a64",class:"progress-bar",style:r}))))}};d.style=c;export{n as stepper_actions,d as stepper_title};
//# sourceMappingURL=p-3b10394e.entry.js.map