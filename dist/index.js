"use strict";var e=function(t,n){return function(){return n||t((n={exports:{}}).exports,n),n.exports}};var a=e(function(R,v){v.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var s=e(function(j,c){
var l=a();function y(){var t;return arguments.length===0?l.all.slice():(t=l[arguments[0]],t?t.slice():[])}c.exports=y
});var f=e(function(D,p){
function d(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}p.exports=d
});var x=e(function(E,m){
var _=require('@stdlib/utils-define-read-only-property/dist'),q=require('@stdlib/utils-keys/dist');function b(t,n){var r,u,i;for(r=q(n),i=0;i<r.length;i++)u=r[i],_(t,u,n[u]);return t}m.exports=b
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=s(),g=f(),k=x();h(o,"enum",g);k(o,g());module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
