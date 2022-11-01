// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||c.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&u&&u.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var p=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function y(){return p.slice()}function s(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function b(t,e,r){l(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function v(t){return Object.keys(Object(t))}var g=void 0!==Object.keys;var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return d&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;function w(t,e){return null!=t&&j.call(t,e)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var O=m()?function(t){var e,r,n;if(null==t)return h.call(t);r=t[_],e=w(t,_);try{t[_]=void 0}catch(e){return h.call(t)}return n=h.call(t),e?t[_]=r:delete t[_],n}:function(t){return h.call(t)};function S(t){return"[object Arguments]"===O(t)}var E=function(){return S(arguments)}();function I(t){return"string"==typeof t}var P=String.prototype.valueOf;var x=m();function T(t){return"object"==typeof t&&(t instanceof String||(x?function(t){try{return P.call(t),!0}catch(t){return!1}}(t):"[object String]"===O(t)))}function A(t){return I(t)||T(t)}function N(t){return"number"==typeof t}a(A,"isPrimitive",I),a(A,"isObject",T);var k=Number,B=k.prototype.toString;var V=m();function F(t){return"object"==typeof t&&(t instanceof k||(V?function(t){try{return B.call(t),!0}catch(t){return!1}}(t):"[object Number]"===O(t)))}function L(t){return N(t)||F(t)}function G(t){return t!=t}function Y(t){return N(t)&&G(t)}function C(t){return F(t)&&G(t.valueOf())}function M(t){return Y(t)||C(t)}a(L,"isPrimitive",N),a(L,"isObject",F),a(M,"isPrimitive",Y),a(M,"isObject",C);var X=Number.POSITIVE_INFINITY,H=k.NEGATIVE_INFINITY,W=Math.floor;function D(t){return W(t)===t}function R(t){return t<X&&t>H&&D(t)}function U(t){return N(t)&&R(t)}function q(t){return F(t)&&R(t.valueOf())}function z(t){return U(t)||q(t)}a(z,"isPrimitive",U),a(z,"isObject",q);var J=Object.prototype.propertyIsEnumerable;var K=!J.call("beep","0");function Q(t,e){var r;return null!=t&&(!(r=J.call(t,e))&&K&&A(t)?!Y(e=+e)&&U(e)&&e>=0&&e<t.length:r)}var Z=Array.isArray?Array.isArray:function(t){return"[object Array]"===O(t)};var $=E?S:function(t){return null!==t&&"object"==typeof t&&!Z(t)&&"number"==typeof t.length&&D(t.length)&&t.length>=0&&t.length<=4294967295&&w(t,"callee")&&!Q(t,"callee")},tt=Array.prototype.slice;function et(t){return null!==t&&"object"==typeof t}a(et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Z(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(et));var rt=Q((function(){}),"prototype"),nt=!Q({toString:null},"toString");function ot(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&D(t.length)&&t.length>=0&&t.length<=9007199254740991}function it(t,e,r){var n,o;if(!ot(t)&&!I(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!U(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(M(e)){for(;o<n;o++)if(M(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var ut=/./;function ft(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var lt=m();function at(t){return"object"==typeof t&&(t instanceof Boolean||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===O(t)))}function pt(t){return ft(t)||at(t)}function yt(){return new Function("return this;")()}a(pt,"isPrimitive",ft),a(pt,"isObject",at);var st="object"==typeof self?self:null,bt="object"==typeof window?window:null,vt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},gt="object"==typeof vt?vt:null;var dt=function(t){if(arguments.length){if(!ft(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return yt()}if(st)return st;if(bt)return bt;if(gt)return gt;throw new Error("unexpected error. Unable to resolve global object.")}(),mt=dt.document&&dt.document.childNodes,ht=Int8Array;function jt(){return/^\s*function\s*([^(]*)/i}var wt=/^\s*function\s*([^(]*)/i;function _t(t){var e,r,n,o;if(("Object"===(r=O(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=wt.exec(n.toString()))return e[1]}return et(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(jt,"REGEXP",wt);var Ot="function"==typeof ut||"object"==typeof ht||"function"==typeof mt?function(t){return _t(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?_t(t).toLowerCase():e};function St(t){return t.constructor&&t.constructor.prototype===t}var Et=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],It="undefined"==typeof window?void 0:window;var Pt=function(){var t;if("undefined"===Ot(It))return!1;for(t in It)try{-1===it(Et,t)&&w(It,t)&&null!==It[t]&&"object"===Ot(It[t])&&St(It[t])}catch(t){return!0}return!1}(),xt="undefined"!=typeof window;var Tt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var At=g?function(){return 2!==(v(arguments)||"").length}(1,2)?function(t){return $(t)?v(tt.call(t)):v(t)}:v:function(t){var e,r,n,o,i,u,f;if(o=[],$(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!w(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!et(t))return o;r=rt&&n}for(i in t)r&&"prototype"===i||!w(t,i)||o.push(String(i));if(nt)for(e=function(t){if(!1===xt&&!Pt)return St(t);try{return St(t)}catch(t){return!1}}(t),f=0;f<Tt.length;f++)u=Tt[f],e&&"constructor"===u||!w(t,u)||o.push(String(u));return o};a(y,"enum",s),function(t,e){var r,n,o;for(r=At(e),o=0;o<r.length;o++)b(t,n=r[o],e[n])}(y,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});export{y as default,s as enum};
//# sourceMappingURL=mod.js.map
