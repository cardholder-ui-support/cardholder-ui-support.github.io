/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r,i as s}from"./p-18a64bdb.js";const a=":host{display:block}.mq-progress-bar{width:192px;height:8px;border-radius:var(--borderRadius-radius100);background-color:var(--elements-progress-progressBarTrack);overflow:hidden}.mq-progress-bar-fill{height:8px;border-radius:var(--borderRadius-radius100);background-color:var(--elements-progress-progressBar);transition:width 1s linear;animation-name:progress;animation-duration:10s;animation-direction:reverse;animation-timing-function:linear;animation-fill-mode:forwards;animation-delay:0}@keyframes progress{0%{width:0%}100%{width:100%}}";const i=a;const e=class{constructor(s){r(this,s);this.percentage=0;this.styleOverride={};this.animationDuration=1}render(){return s("div",{key:"036ef2981206a099781f293aaaa0f9623bf13a0d",class:"mq-progress-bar",style:Object.assign({},this.styleOverride)},s("div",{key:"e15137b160f4818fac10fe3cc0d85bb83ab6c5aa",class:"mq-progress-bar-fill",style:{width:`${this.percentage}%`,"animation-duration":this.animationDuration+"s"}}))}};e.style=i;export{e as mq_progress_bar};
//# sourceMappingURL=p-9d4f3bed.entry.js.map