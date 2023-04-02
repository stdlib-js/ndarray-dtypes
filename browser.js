// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).dtypes=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,u=r.__defineSetter__,f=r.__lookupGetter__,l=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var c,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,n)||l.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=c):t[n]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,n,e.get),s&&u&&u.call(t,n,e.set),t};var c=n;function a(t,n,e){c(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function s(){var t;return 0===arguments.length?p.all.slice():(t=p[arguments[0]])?t.slice():[]}function y(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function b(t,n,e){c(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function g(t){return Object.keys(Object(t))}var v=void 0!==Object.keys;var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return d&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;function w(t,n){return null!=t&&j.call(t,n)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var O,S=m()?function(t){var n,e,r;if(null==t)return h.call(t);e=t[_],n=w(t,_);try{t[_]=void 0}catch(n){return h.call(t)}return r=h.call(t),n?t[_]=e:delete t[_],r}:function(t){return h.call(t)};function x(t){return"[object Arguments]"===S(t)}O=function(){return x(arguments)}();var E=O;function I(t){return"string"==typeof t}var T=String.prototype.valueOf;var P=m();function A(t){return"object"==typeof t&&(t instanceof String||(P?function(t){try{return T.call(t),!0}catch(t){return!1}}(t):"[object String]"===S(t)))}function N(t){return I(t)||A(t)}function k(t){return"number"==typeof t}a(N,"isPrimitive",I),a(N,"isObject",A);var B=Number,V=B.prototype.toString;var F=m();function L(t){return"object"==typeof t&&(t instanceof B||(F?function(t){try{return V.call(t),!0}catch(t){return!1}}(t):"[object Number]"===S(t)))}function G(t){return k(t)||L(t)}function Y(t){return t!=t}function C(t){return k(t)&&Y(t)}function M(t){return L(t)&&Y(t.valueOf())}function X(t){return C(t)||M(t)}a(G,"isPrimitive",k),a(G,"isObject",L),a(X,"isPrimitive",C),a(X,"isObject",M);var H=Number.POSITIVE_INFINITY,W=B.NEGATIVE_INFINITY,D=Math.floor;function R(t){return D(t)===t}function U(t){return t<H&&t>W&&R(t)}function q(t){return k(t)&&U(t)}function z(t){return L(t)&&U(t.valueOf())}function J(t){return q(t)||z(t)}a(J,"isPrimitive",q),a(J,"isObject",z);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(t,n){var e;return null!=t&&(!(e=K.call(t,n))&&Q&&N(t)?!C(n=+n)&&q(n)&&n>=0&&n<t.length:e)}var $=Array.isArray?Array.isArray:function(t){return"[object Array]"===S(t)};var tt=E?x:function(t){return null!==t&&"object"==typeof t&&!$(t)&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=4294967295&&w(t,"callee")&&!Z(t,"callee")},nt=Array.prototype.slice;function et(t){return null!==t&&"object"==typeof t}a(et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!$(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(et));var rt=Z((function(){}),"prototype"),ot=!Z({toString:null},"toString");function it(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}function ut(t,n,e){var r,o;if(!it(t)&&!I(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!q(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(X(n)){for(;o<r;o++)if(X(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var ft=/./;function lt(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var at=m();function pt(t){return"object"==typeof t&&(t instanceof Boolean||(at?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===S(t)))}function st(t){return lt(t)||pt(t)}function yt(){return new Function("return this;")()}a(st,"isPrimitive",lt),a(st,"isObject",pt);var bt="object"==typeof self?self:null,gt="object"==typeof window?window:null,vt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},dt="object"==typeof vt?vt:null;var mt=function(t){if(arguments.length){if(!lt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return yt()}if(bt)return bt;if(gt)return gt;if(dt)return dt;throw new Error("unexpected error. Unable to resolve global object.")}(),ht=mt.document&&mt.document.childNodes,jt=Int8Array;function wt(){return/^\s*function\s*([^(]*)/i}var _t=/^\s*function\s*([^(]*)/i;function Ot(t){var n,e,r,o;if(("Object"===(e=S(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=_t.exec(r.toString()))return n[1]}return et(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(wt,"REGEXP",_t);var St="function"==typeof ft||"object"==typeof jt||"function"==typeof ht?function(t){return Ot(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Ot(t).toLowerCase():n};function xt(t){return t.constructor&&t.constructor.prototype===t}var Et=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],It="undefined"==typeof window?void 0:window;var Tt=function(){var t;if("undefined"===St(It))return!1;for(t in It)try{-1===ut(Et,t)&&w(It,t)&&null!==It[t]&&"object"===St(It[t])&&xt(It[t])}catch(t){return!0}return!1}(),Pt="undefined"!=typeof window;var At,Nt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];At=v?function(){return 2!==(g(arguments)||"").length}(1,2)?function(t){return tt(t)?g(nt.call(t)):g(t)}:g:function(t){var n,e,r,o,i,u,f;if(o=[],tt(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!w(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(r="function"==typeof t)&&!et(t))return o;e=rt&&r}for(i in t)e&&"prototype"===i||!w(t,i)||o.push(String(i));if(ot)for(n=function(t){if(!1===Pt&&!Tt)return xt(t);try{return xt(t)}catch(t){return!1}}(t),f=0;f<Nt.length;f++)u=Nt[f],n&&"constructor"===u||!w(t,u)||o.push(String(u));return o};var kt=At;return a(s,"enum",y),function(t,n){var e,r,o;for(e=kt(n),o=0;o<e.length;o++)b(t,r=e[o],n[r])}(s,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}),s}));
//# sourceMappingURL=browser.js.map
