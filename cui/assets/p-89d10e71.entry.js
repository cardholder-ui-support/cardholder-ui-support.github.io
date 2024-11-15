/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r,i as s,H as e}from"./p-18a64bdb.js";const a=".progress-bar{display:flex;gap:var(--spacing-spacing200)}.step{flex:1;height:10px;background-color:var(--colors-neutral-neutral200);border-radius:2rem}.step.completed{background-color:var(--colors-primary-primary500)}";const t=a;const o=class{constructor(s){r(this,s);this.totalSteps=2;this.completedSteps=0;this.steps=Array.from({length:this.totalSteps},((r,s)=>s+1))}render(){return s(e,{key:"87c81a38c170cb2cb7226669dee6a7a268cbd55e",class:"progress-bar"},this.steps.map((r=>s("div",{class:{step:true,completed:r<=this.completedSteps},key:r}))))}};o.style=t;export{o as mq_step_progress};
//# sourceMappingURL=p-89d10e71.entry.js.map