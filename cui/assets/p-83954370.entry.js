/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,i as r,j as n}from"./p-18a64bdb.js";const e=".button-group-container{padding-top:var(--spacing-spacing1600)}mq-button .primary,mq-button .secondary{width:auto}@media (max-width: 575px){.button-group-container{flex-direction:column;gap:var(--spacing-spacing300)}mq-button .primary,mq-button .secondary{width:100%}}";const i=e;const a=class{constructor(r){t(this,r);this.defaultClickHandler=t=>{};this.showSecondaryButton=true;this.primaryButton={label:"Submit",onClick:this.defaultClickHandler};this.secondaryButton={label:"Close",onClick:this.defaultClickHandler};this.rawPrimaryButton=undefined;this.rawSecondaryButton=undefined}componentDidLoad(){if(this.rawPrimaryButton){this.parsePrimaryButton(this.rawPrimaryButton)}if(this.rawSecondaryButton){this.parseSecondaryButton(this.rawSecondaryButton)}}parsePrimaryButton(t){if(!t)return;try{this.primaryButton=JSON.parse(t)}catch(t){throw new Error("Unable to parse raw-primary-button")}}parseSecondaryButton(t){if(!t)return;try{this.secondaryButton=JSON.parse(t)}catch(t){throw new Error("Unable to parse raw-secondary-button")}}render(){const t=this.primaryButton.fixed!==false;return r("flex-container",{key:"5cd244ba9212063ac6114b9ef95056049f64c021",flexDirection:"row-reverse",class:`button-group-container`,justifyContent:"space-between"},r("mq-button",Object.assign({key:"3cf765177e33c3fba6c1eb8937f645c136be0f36"},this.primaryButton,{fixed:t,kind:"primary"})),this.showSecondaryButton&&r("mq-button",Object.assign({key:"cb65b5f8cd28661d578ff3b27fa213ff7363dc40"},this.secondaryButton,{fixed:t,kind:"secondary"})))}get el(){return n(this)}static get watchers(){return{rawPrimaryButton:["parsePrimaryButton"],rawSecondaryButton:["parseSecondaryButton"]}}};a.style=i;export{a as mq_button_group};
//# sourceMappingURL=p-83954370.entry.js.map