/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,i as s}from"./p-18a64bdb.js";const o=":host{display:block;position:fixed;bottom:20px;right:20px;z-index:1000}.toast{background-color:#333;color:#fff;padding:10px 20px;border-radius:4px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);display:flex;align-items:center;justify-content:space-between;max-width:300px}.message{flex-grow:1}.close-button{background:none;border:none;font-size:18px;color:#fff;cursor:pointer}.action-icon{font-style:normal;font-size:12px;color:white;border-radius:50%;height:20px;width:20px;display:flex;justify-content:center;align-items:center;margin-right:10px}.action-icon.success{background-color:#8cd18c;content:✔}.action-icon.error{background-color:#f76e6e;content:✕}";const e=o;const i=class{constructor(s){t(this,s);this.getIcon=()=>this.type==="success"?"✔":"✕";this.isVisible=false;this.message="";this.type=""}async showToast(t,s=""){this.message=t;this.isVisible=true;this.type=s;setTimeout((()=>{this.hideToast()}),3e3)}async hideToast(){this.isVisible=false}render(){return this.isVisible&&s("div",{key:"bf434a175b482f1245a7a2a75030aaa9c6b93ad4",class:"toast"},!!this.type&&s("i",{key:"d6eca290db288f8dffbc9c215941bf97d7067731",class:`action-icon ${this.type}`},this.getIcon()),s("div",{key:"a662f6485f6b06ef5184578da7f749b15ec92065",class:"message"},this.message),s("button",{key:"feeb9379f0d02b618365479ba6a75bfef956a90e",class:"close-button",onClick:()=>this.hideToast()},"✖"))}};i.style=e;export{i as mq_toast};
//# sourceMappingURL=p-5c830320.entry.js.map