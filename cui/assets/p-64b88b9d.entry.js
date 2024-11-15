/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{l as e,w as o,r as n,i as t,H as s,j as i}from"./p-18a64bdb.js";import{g as a,f as r,p as c}from"./p-2e6f1e03.js";import{e as l,i as d}from"./p-a29d67e4.js";import{h}from"./p-100c2286.js";import{g as p}from"./p-3970d3a9.js";import"./p-bd6f674d.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const b="all 0.2s ease-in-out";const f=e=>{const o=document.querySelector(`${e}.ion-cloned-element`);if(o!==null){return o}const n=document.createElement(e);n.classList.add("ion-cloned-element");n.style.setProperty("display","none");document.body.appendChild(n);return n};const u=e=>{if(!e){return}const o=e.querySelectorAll("ion-toolbar");return{el:e,toolbars:Array.from(o).map((e=>{const o=e.querySelector("ion-title");return{el:e,background:e.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:o,innerTitleEl:o?o.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(e.querySelectorAll("ion-buttons"))}}))}};const y=(n,t,s)=>{e((()=>{const e=n.scrollTop;const i=l(1,1+-e/500,1.1);const a=s.querySelector("ion-refresher.refresher-native");if(a===null){o((()=>{v(t.toolbars,i)}))}}))};const m=(e,o)=>{if(e.collapse==="fade"){return}if(o===undefined){e.style.removeProperty("--opacity-scale")}else{e.style.setProperty("--opacity-scale",o.toString())}};const g=(e,o,n)=>{if(!e[0].isIntersecting){return}const t=e[0].intersectionRatio>.9||n<=0?0:(1-e[0].intersectionRatio)*100/75;m(o.el,t===1?undefined:t)};const x=(e,n,t,s)=>{o((()=>{const o=s.scrollTop;g(e,n,o);const i=e[0];const a=i.intersectionRect;const r=a.width*a.height;const c=i.rootBounds.width*i.rootBounds.height;const l=r===0&&c===0;const d=Math.abs(a.left-i.boundingClientRect.left);const h=Math.abs(a.right-i.boundingClientRect.right);const p=r>0&&(d>=5||h>=5);if(l||p){return}if(i.isIntersecting){k(n,false);k(t)}else{const e=a.x===0&&a.y===0||a.width!==0&&a.height!==0;if(e&&o>0){k(n);k(t,false);m(n.el)}}}))};const k=(e,o=true)=>{const n=e.el;if(o){n.classList.remove("header-collapse-condense-inactive");n.removeAttribute("aria-hidden")}else{n.classList.add("header-collapse-condense-inactive");n.setAttribute("aria-hidden","true")}};const v=(e=[],o=1,n=false)=>{e.forEach((e=>{const t=e.ionTitleEl;const s=e.innerTitleEl;if(!t||t.size!=="large"){return}s.style.transition=n?b:"";s.style.transform=`scale3d(${o}, ${o}, 1)`}))};const w=(n,t,s)=>{e((()=>{const e=n.scrollTop;const i=t.clientHeight;const a=s?s.clientHeight:0;if(s!==null&&e<a){t.style.setProperty("--opacity-scale","0");n.style.setProperty("clip-path",`inset(${i}px 0px 0px 0px)`);return}const r=e-a;const c=10;const d=l(0,r/c,1);o((()=>{n.style.removeProperty("clip-path");t.style.setProperty("--opacity-scale",d.toString())}))}))};const j="ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports (backdrop-filter: blur(0)){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header.header-ios:not(.header-collapse-main):has(~ion-content ion-header.header-ios[collapse=condense],~ion-content ion-header.header-ios.header-collapse-condense){opacity:0}";const $=j;const z="ion-header{display:block;position:relative;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{box-shadow:none}";const A=z;const C=class{constructor(e){n(this,e);this.inheritedAttributes={};this.setupFadeHeader=async(e,o)=>{const n=this.scrollEl=await a(e);this.contentScrollCallback=()=>{w(this.scrollEl,this.el,o)};n.addEventListener("scroll",this.contentScrollCallback);w(this.scrollEl,this.el,o)};this.collapse=undefined;this.translucent=false}componentWillLoad(){this.inheritedAttributes=d(this.el)}componentDidLoad(){this.checkCollapsibleHeader()}componentDidUpdate(){this.checkCollapsibleHeader()}disconnectedCallback(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){const e=p(this);if(e!=="ios"){return}const{collapse:n}=this;const t=n==="condense";const s=n==="fade";this.destroyCollapsibleHeader();if(t){const e=this.el.closest("ion-app,ion-page,.ion-page,page-inner");const n=e?r(e):null;o((()=>{const e=f("ion-title");e.size="large";f("ion-back-button")}));await this.setupCondenseHeader(n,e)}else if(s){const e=this.el.closest("ion-app,ion-page,.ion-page,page-inner");const o=e?r(e):null;if(!o){c(this.el);return}const n=o.querySelector('ion-header[collapse="condense"]');await this.setupFadeHeader(o,n)}}destroyCollapsibleHeader(){if(this.intersectionObserver){this.intersectionObserver.disconnect();this.intersectionObserver=undefined}if(this.scrollEl&&this.contentScrollCallback){this.scrollEl.removeEventListener("scroll",this.contentScrollCallback);this.contentScrollCallback=undefined}if(this.collapsibleMainHeader){this.collapsibleMainHeader.classList.remove("header-collapse-main");this.collapsibleMainHeader=undefined}}async setupCondenseHeader(e,n){if(!e||!n){c(this.el);return}if(typeof IntersectionObserver==="undefined"){return}this.scrollEl=await a(e);const t=n.querySelectorAll("ion-header");this.collapsibleMainHeader=Array.from(t).find((e=>e.collapse!=="condense"));if(!this.collapsibleMainHeader){return}const s=u(this.collapsibleMainHeader);const i=u(this.el);if(!s||!i){return}k(s,false);m(s.el,0);const r=e=>{x(e,s,i,this.scrollEl)};this.intersectionObserver=new IntersectionObserver(r,{root:e,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]});this.intersectionObserver.observe(i.toolbars[i.toolbars.length-1].el);this.contentScrollCallback=()=>{y(this.scrollEl,i,e)};this.scrollEl.addEventListener("scroll",this.contentScrollCallback);o((()=>{if(this.collapsibleMainHeader!==undefined){this.collapsibleMainHeader.classList.add("header-collapse-main")}}))}render(){const{translucent:e,inheritedAttributes:o}=this;const n=p(this);const i=this.collapse||"none";const a=h("ion-menu",this.el)?"none":"banner";return t(s,Object.assign({key:"c687314ef290793a9d633ad20cfc5eeb47621e31",role:a,class:{[n]:true,[`header-${n}`]:true,[`header-translucent`]:this.translucent,[`header-collapse-${i}`]:true,[`header-translucent-${n}`]:this.translucent}},o),n==="ios"&&e&&t("div",{key:"b429996046082405a91e7c23f95516db0b736f12",class:"header-background"}),t("slot",{key:"e17a8965f8d3a33c1bfcb056c153d8242e5229fa"}))}get el(){return i(this)}};C.style={ios:$,md:A};export{C as ion_header};
//# sourceMappingURL=p-64b88b9d.entry.js.map