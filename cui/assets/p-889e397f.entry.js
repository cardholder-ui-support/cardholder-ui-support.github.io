/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{r as t,k as i,i as e,H as s,j as n}from"./p-18a64bdb.js";const o=":host{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;flex:1;contain:layout size style}";const a=o;const r=class{constructor(e){t(this,e);this.ionNavWillLoad=i(this,"ionNavWillLoad",7);this.ionTabsWillChange=i(this,"ionTabsWillChange",3);this.ionTabsDidChange=i(this,"ionTabsDidChange",3);this.transitioning=false;this.onTabClicked=t=>{const{href:i,tab:e}=t.detail;if(this.useRouter&&i!==undefined){const t=document.querySelector("ion-router");if(t){t.push(i)}}else{this.select(e)}};this.selectedTab=undefined;this.useRouter=false}async componentWillLoad(){if(!this.useRouter){this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")}if(!this.useRouter){const t=this.tabs;if(t.length>0){await this.select(t[0])}}this.ionNavWillLoad.emit()}componentWillRender(){const t=this.el.querySelector("ion-tab-bar");if(t){const i=this.selectedTab?this.selectedTab.tab:undefined;t.selectedTab=i}}async select(t){const i=h(this.tabs,t);if(!this.shouldSwitch(i)){return false}await this.setActive(i);await this.notifyRouter();this.tabSwitch();return true}async getTab(t){return h(this.tabs,t)}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:undefined)}async setRouteId(t){const i=h(this.tabs,t);if(!this.shouldSwitch(i)){return{changed:false,element:this.selectedTab}}await this.setActive(i);return{changed:true,element:this.selectedTab,markVisible:()=>this.tabSwitch()}}async getRouteId(){var t;const i=(t=this.selectedTab)===null||t===void 0?void 0:t.tab;return i!==undefined?{id:i,element:this.selectedTab}:undefined}setActive(t){if(this.transitioning){return Promise.reject("transitioning already happening")}this.transitioning=true;this.leavingTab=this.selectedTab;this.selectedTab=t;this.ionTabsWillChange.emit({tab:t.tab});t.active=true;return Promise.resolve()}tabSwitch(){const t=this.selectedTab;const i=this.leavingTab;this.leavingTab=undefined;this.transitioning=false;if(!t){return}if(i!==t){if(i){i.active=false}this.ionTabsDidChange.emit({tab:t.tab})}}notifyRouter(){if(this.useRouter){const t=document.querySelector("ion-router");if(t){return t.navChanged("forward")}}return Promise.resolve(false)}shouldSwitch(t){const i=this.selectedTab;return t!==undefined&&t!==i&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return e(s,{key:"239bdb2ff2ec5cfcc74c51812cf6240f48acc617",onIonTabButtonClick:this.onTabClicked},e("slot",{key:"2b266d0f87c7c82e992fe0d9b5c8f25569b118e3",name:"top"}),e("div",{key:"4cbbd010f0b0b1cd82714db7d098d28fab6d5218",class:"tabs-inner"},e("slot",{key:"72b2a02cd29d5b30e47758f3d6daaa1021916256"})),e("slot",{key:"25494076dbbf7606d477b44f1b969719e7b4a805",name:"bottom"}))}get el(){return n(this)}};const h=(t,i)=>{const e=typeof i==="string"?t.find((t=>t.tab===i)):i;if(!e){console.error(`tab with id: "${e}" does not exist`)}return e};r.style=a;export{r as ion_tabs};
//# sourceMappingURL=p-889e397f.entry.js.map