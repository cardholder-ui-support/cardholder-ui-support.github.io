/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
const n=n=>{const t=new Date(n);const e=new Date;e.setDate(e.getDate()-7);e.setHours(0,0,0);return t.getTime()>e.getTime()};const t=(n,t=false)=>{const e=new Intl.DateTimeFormat([],{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone,month:"short",day:"numeric"});const s=e.format(new Date(n));const r=t||(new Date).getFullYear()!==new Date(n).getFullYear();const o=r?`, ${new Date(n).getFullYear()}`:"";return`${s}${o}`};const e=(n,t=false)=>{const e={hour:"numeric",minute:"numeric",hour12:t};if(!t){e.seconds="numeric"}const s=new Intl.DateTimeFormat([],e).format(new Date(n));return s};const s=(n,t,e)=>{if(e||n)return"tertiary";if(t&&!n&&!e)return"success";return"primary"};const r=n=>{const t=/-?\$?(\d+\.\d{2}|\d+)/;const e=n.status.toUpperCase()==="DECLINED";const s=n.status.toUpperCase()==="PENDING";const r=n.amount.match(t);const o=parseFloat(r[0].replace("$",""));const c=o>0?true:false;return{isDeclined:e,isPending:s,isDeposit:c}};export{t as a,e,s as f,r as g,n as i};
//# sourceMappingURL=p-ad77a72d.js.map