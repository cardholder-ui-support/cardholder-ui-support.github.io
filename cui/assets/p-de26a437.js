/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{g as t}from"./p-78bffe29.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var n;(function(t){t["Heavy"]="HEAVY";t["Medium"]="MEDIUM";t["Light"]="LIGHT"})(n||(n={}));var i;(function(t){t["Success"]="SUCCESS";t["Warning"]="WARNING";t["Error"]="ERROR"})(i||(i={}));const s={getEngine(){const n=t();if(n===null||n===void 0?void 0:n.isPluginAvailable("Haptics")){return n.Plugins.Haptics}return undefined},available(){const n=this.getEngine();if(!n){return false}const i=t();if((i===null||i===void 0?void 0:i.getPlatform())==="web"){return typeof navigator!=="undefined"&&navigator.vibrate!==undefined}return true},impact(t){const n=this.getEngine();if(!n){return}n.impact({style:t.style})},notification(t){const n=this.getEngine();if(!n){return}n.notification({type:t.type})},selection(){this.impact({style:n.Light})},selectionStart(){const t=this.getEngine();if(!t){return}t.selectionStart()},selectionChanged(){const t=this.getEngine();if(!t){return}t.selectionChanged()},selectionEnd(){const t=this.getEngine();if(!t){return}t.selectionEnd()}};const e=()=>s.available();const o=()=>{e()&&s.selection()};const r=()=>{e()&&s.selectionStart()};const c=()=>{e()&&s.selectionChanged()};const a=()=>{e()&&s.selectionEnd()};const f=t=>{e()&&s.impact(t)};export{n as I,r as a,c as b,a as c,o as d,f as h};
//# sourceMappingURL=p-de26a437.js.map