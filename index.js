// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).dtypes=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,u=r.__defineSetter__,l=r.__lookupGetter__,c=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var f,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(l.call(t,n)||c.call(t,n)?(f=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=f):t[n]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,n,e.get),s&&u&&u.call(t,n,e.set),t};var f=n;function a(t,n,e){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integral:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function s(){var t;return 0===arguments.length?p.all.slice():(t=p[arguments[0]])?t.slice():[]}function y(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function b(t,n,e){f(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function g(t){return Object.keys(Object(t))}var v=void 0!==Object.keys;var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return m&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;function _(t,n){return null!=t&&j.call(t,n)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var O,S=d()?function(t){var n,e,r;if(null==t)return h.call(t);e=t[w],n=_(t,w);try{t[w]=void 0}catch(n){return h.call(t)}return r=h.call(t),n?t[w]=e:delete t[w],r}:function(t){return h.call(t)};function x(t){return"[object Arguments]"===S(t)}O=function(){return x(arguments)}();var E=O;function I(t){return"string"==typeof t}var T=String.prototype.valueOf;var P=d();function A(t){return"object"==typeof t&&(t instanceof String||(P?function(t){try{return T.call(t),!0}catch(t){return!1}}(t):"[object String]"===S(t)))}function N(t){return I(t)||A(t)}function k(t){return"number"==typeof t}a(N,"isPrimitive",I),a(N,"isObject",A);var B=Number,V=B.prototype.toString;var F=d();function L(t){return"object"==typeof t&&(t instanceof B||(F?function(t){try{return V.call(t),!0}catch(t){return!1}}(t):"[object Number]"===S(t)))}function G(t){return k(t)||L(t)}function Y(t){return t!=t}function C(t){return k(t)&&Y(t)}function M(t){return L(t)&&Y(t.valueOf())}function X(t){return C(t)||M(t)}a(G,"isPrimitive",k),a(G,"isObject",L),a(X,"isPrimitive",C),a(X,"isObject",M);var H=Number.POSITIVE_INFINITY,W=B.NEGATIVE_INFINITY,D=Math.floor;function R(t){return D(t)===t}function U(t){return t<H&&t>W&&R(t)}function q(t){return k(t)&&U(t)}function z(t){return L(t)&&U(t.valueOf())}function J(t){return q(t)||z(t)}a(J,"isPrimitive",q),a(J,"isObject",z);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(t,n){var e;return null!=t&&(!(e=K.call(t,n))&&Q&&N(t)?!C(n=+n)&&q(n)&&n>=0&&n<t.length:e)}var $=Array.isArray?Array.isArray:function(t){return"[object Array]"===S(t)};var tt=E?x:function(t){return null!==t&&"object"==typeof t&&!$(t)&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=4294967295&&_(t,"callee")&&!Z(t,"callee")},nt=Array.prototype.slice;function et(t){return null!==t&&"object"==typeof t}a(et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!$(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(et));var rt=Z((function(){}),"prototype"),ot=!Z({toString:null},"toString");function it(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function ut(t,n,e){var r,o;if(!it(t)&&!I(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!q(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(X(n)){for(;o<r;o++)if(X(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var lt=/./;function ct(t){return"boolean"==typeof t}var ft=Boolean.prototype.toString;var at=d();function pt(t){return"object"==typeof t&&(t instanceof Boolean||(at?function(t){try{return ft.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===S(t)))}function st(t){return ct(t)||pt(t)}function yt(){return new Function("return this;")()}a(st,"isPrimitive",ct),a(st,"isObject",pt);var bt="object"==typeof self?self:null,gt="object"==typeof window?window:null,vt="object"==typeof global?global:null;var mt=function(t){if(arguments.length){if(!ct(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return yt()}if(bt)return bt;if(gt)return gt;if(vt)return vt;throw new Error("unexpected error. Unable to resolve global object.")}(),dt=mt.document&&mt.document.childNodes,ht=Int8Array;function jt(){return/^\s*function\s*([^(]*)/i}var _t=/^\s*function\s*([^(]*)/i;function wt(t){var n,e,r,o;if(("Object"===(e=S(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=_t.exec(r.toString()))return n[1]}return et(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(jt,"REGEXP",_t);var Ot="function"==typeof lt||"object"==typeof ht||"function"==typeof dt?function(t){return wt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?wt(t).toLowerCase():n};function St(t){return t.constructor&&t.constructor.prototype===t}var xt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Et="undefined"==typeof window?void 0:window;var It=function(){var t;if("undefined"===Ot(Et))return!1;for(t in Et)try{-1===ut(xt,t)&&_(Et,t)&&null!==Et[t]&&"object"===Ot(Et[t])&&St(Et[t])}catch(t){return!0}return!1}(),Tt="undefined"!=typeof window;var Pt,At=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Pt=v?function(){return 2!==(g(arguments)||"").length}(1,2)?function(t){return tt(t)?g(nt.call(t)):g(t)}:g:function(t){var n,e,r,o,i,u,l;if(o=[],tt(t)){for(l=0;l<t.length;l++)o.push(l.toString());return o}if("string"==typeof t){if(t.length>0&&!_(t,"0"))for(l=0;l<t.length;l++)o.push(l.toString())}else{if(!1==(r="function"==typeof t)&&!et(t))return o;e=rt&&r}for(i in t)e&&"prototype"===i||!_(t,i)||o.push(String(i));if(ot)for(n=function(t){if(!1===Tt&&!It)return St(t);try{return St(t)}catch(t){return!1}}(t),l=0;l<At.length;l++)u=At[l],n&&"constructor"===u||!_(t,u)||o.push(String(u));return o};var Nt=Pt;return a(s,"enum",y),function(t,n){var e,r,o;for(e=Nt(n),o=0;o<e.length;o++)b(t,r=e[o],n[r])}(s,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}),s}));
//# sourceMappingURL=index.js.map
