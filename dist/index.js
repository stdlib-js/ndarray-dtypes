"use strict";var e=function(t,n){return function(){return n||t((n={exports:{}}).exports,n),n.exports}};var l=e(function(R,v){v.exports={all:["binary","bool","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","bool","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],boolean:["bool"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var s=e(function(j,c){
var a=l();function y(){var t;return arguments.length===0?a.all.slice():(t=a[arguments[0]],t?t.slice():[])}c.exports=y
});var f=e(function(D,p){
function b(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}p.exports=b
});var x=e(function(E,m){
var d=require('@stdlib/utils-define-read-only-property/dist'),_=require('@stdlib/utils-keys/dist');function q(t,n){var r,o,i;for(r=_(n),i=0;i<r.length;i++)o=r[i],d(t,o,n[o]);return t}m.exports=q
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=s(),g=f(),k=x();h(u,"enum",g);k(u,g());module.exports=u;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
