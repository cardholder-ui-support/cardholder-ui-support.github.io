/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{g as n}from"./p-78bffe29.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var e;(function(n){n["Unimplemented"]="UNIMPLEMENTED";n["Unavailable"]="UNAVAILABLE"})(e||(e={}));
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var i;(function(n){n["Body"]="body";n["Ionic"]="ionic";n["Native"]="native";n["None"]="none"})(i||(i={}));const o={getEngine(){const e=n();if(e===null||e===void 0?void 0:e.isPluginAvailable("Keyboard")){return e.Plugins.Keyboard}return undefined},getResizeMode(){const n=this.getEngine();if(!(n===null||n===void 0?void 0:n.getResizeMode)){return Promise.resolve(undefined)}return n.getResizeMode().catch((n=>{if(n.code===e.Unimplemented){return undefined}throw n}))}};export{o as K,i as a};
//# sourceMappingURL=p-9ac21ff8.js.map