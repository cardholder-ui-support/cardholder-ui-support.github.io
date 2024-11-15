/**
 * Cardholder UI Web Components v0.22.0
 * (c) 2024 Marqeta
 * @license MIT
 */
import{s as e}from"./p-c1f7c0fa.js";import{R as s,F as t}from"./p-d6aded2e.js";const i={properties:{address1:{type:"string",title:"Address line 1",validationRules:[{type:s.stringMinLength,value:1,errorMessage:"Enter address line 1",priority:1}]},address2:{type:"string",title:"Address line 2"},city:{type:"string",title:"City",validationRules:[{type:s.stringMinLength,value:1,errorMessage:"Enter city",priority:1}]},state:{type:"string",title:"State",oneOf:e.map((e=>({const:e.value,title:e.displayName})))},postalCode:{type:"string",title:"Postal code",validationRules:[{type:s.stringMinLength,value:5,errorMessage:"Postal code is too short",priority:1},{type:s.stringMaxLength,value:5,errorMessage:"Postal code is too long",priority:2}]}},required:["address1","city","state","postalCode"]};const r={"ui:rootFieldId":"replaceCard","ui:globalOptions":{fieldSets:[{"ui:fields":["address1","address2","city","state","postalCode"]}],rowGap:{xs:26,sm:26,md:26,lg:26,xl:26},columnGap:{xs:24,sm:24,md:24,lg:24,xl:24}},"ui:fields":{city:{"ui:columnSpan":{xs:12,sm:6,md:4,lg:4,xl:4}},state:{"ui:widget":t.select,"ui:placeholder":" ","ui:columnSpan":{xs:12,sm:6,md:4,lg:4,xl:4}},postalCode:{"ui:widget":t.masked,"ui:columnSpan":{xs:12,sm:6,md:4,lg:4,xl:4},"ui:maskOptions":{maskOptions:{mask:"00000"},maskedFieldName:"postalCode"}}}};const a="An error occurred while processing your request. Try again later.";var o;(function(e){e["REPLACE_CARD"]="REPLACE_CARD"})(o||(o={}));export{a as D,o as R,r as a,i as r};
//# sourceMappingURL=p-747ef1bd.js.map