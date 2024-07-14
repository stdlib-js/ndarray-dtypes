"use strict";var r=function(n,t){return function(){return t||n((t={exports:{}}).exports,t),t.exports}};var a=r(function(O,y){y.exports={all:["binary","bool","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","bool","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],boolean:["bool"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var f=r(function(S,s){
var _=require('@stdlib/string-base-replace/dist'),l=a(),c=/_and_generic$/;function d(){var n,t,i;return arguments.length===0?l.all.slice():(i=!1,n=arguments[0],c.test(n)&&(n=_(n,c,""),n!=="all"&&(i=!0)),t=l[n],t=t?t.slice():[],i&&t.length>0&&t.push("generic"),t)}s.exports=d
});var m=r(function(j,p){
function b(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}p.exports=b
});var x=r(function(D,g){
var q=require('@stdlib/utils-define-read-only-property/dist'),h=require('@stdlib/utils-keys/dist');function k(n,t){var i,u,e;for(i=h(t),e=0;e<i.length;e++)u=i[e],q(n,u,t[u]);return n}g.exports=k
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=f(),v=m(),R=x();F(o,"enum",v);R(o,v());module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
