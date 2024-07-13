// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function r(e){return"number"==typeof e}function n(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function i(e,t,r){var i=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=r?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var t,n,u;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!r(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(t),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var t,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":c(i)<1e-4?((t=e.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function w(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}var j=String.fromCharCode,_=isNaN,x=Array.isArray;function S(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function E(e){var t,r,n,o,a,c,l,f,s,p,g,d,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if(n=e[f],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),r=n.flags,s=0;s<r.length;s++)switch(o=r.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,_(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+w(y):w(y)+p)),c+=n.arg||"",l+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function I(e){var t,r,n,i;for(r=[],i=0,n=O.exec(e);n;)(t=e.slice(i,O.lastIndex-n[0].length)).length&&r.push(t),r.push(k(n)),i=O.lastIndex,n=O.exec(e);return(t=e.slice(i)).length&&r.push(t),r}function T(e){var t,r;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[I(e)],r=1;r<arguments.length;r++)t.push(arguments[r]);return E.apply(null,t)}var A,V=Object.prototype,P=V.toString,F=V.__defineGetter__,N=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&($.call(e,t)||C.call(e,t)?(n=e.__proto__,e.__proto__=V,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,t,r.get),a&&N&&N.call(e,t,r.set),e};var B=A;function L(e,t,r){B(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var R={all:["binary","bool","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","bool","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],boolean:["bool"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function G(){var e;return 0===arguments.length?R.all.slice():(e=R[arguments[0]])?e.slice():[]}function W(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function X(e,t,r){B(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Z(e){return Object.keys(Object(e))}var M=void 0!==Object.keys;var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return Y&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(e,t){return null!=e&&z.call(e,t)}var q="function"==typeof Symbol?Symbol:void 0,J="function"==typeof q?q.toStringTag:"";var K=U()?function(e){var t,r,n;if(null==e)return H.call(e);r=e[J],t=D(e,J);try{e[J]=void 0}catch(t){return H.call(e)}return n=H.call(e),t?e[J]=r:delete e[J],n}:function(e){return H.call(e)};function Q(e){return"[object Arguments]"===K(e)}var ee=function(){return Q(arguments)}();function te(e){return"string"==typeof e}var re=String.prototype.valueOf;var ne=U();function ie(e){return"object"==typeof e&&(e instanceof String||(ne?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function oe(e){return te(e)||ie(e)}function ae(e){return"number"==typeof e}L(oe,"isPrimitive",te),L(oe,"isObject",ie);var ue=Number,ce=ue.prototype.toString;var le=U();function fe(e){return"object"==typeof e&&(e instanceof ue||(le?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function se(e){return ae(e)||fe(e)}function pe(e){return e!=e}function ge(e){return ae(e)&&pe(e)}function de(e){return fe(e)&&pe(e.valueOf())}function ye(e){return ge(e)||de(e)}L(se,"isPrimitive",ae),L(se,"isObject",fe),L(ye,"isPrimitive",ge),L(ye,"isObject",de);var be=Number.POSITIVE_INFINITY,he=ue.NEGATIVE_INFINITY,ve=Math.floor;function me(e){return ve(e)===e}function we(e){return e<be&&e>he&&me(e)}function je(e){return ae(e)&&we(e)}function _e(e){return fe(e)&&we(e.valueOf())}function xe(e){return je(e)||_e(e)}L(xe,"isPrimitive",je),L(xe,"isObject",_e);var Se=Object.prototype.propertyIsEnumerable;var Ee=!Se.call("beep","0");function Oe(e,t){var r;return null!=e&&(!(r=Se.call(e,t))&&Ee&&oe(e)?!ge(t=+t)&&je(t)&&t>=0&&t<e.length:r)}var ke=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};var Ie=ee?Q:function(e){return null!==e&&"object"==typeof e&&!ke(e)&&"number"==typeof e.length&&me(e.length)&&e.length>=0&&e.length<=4294967295&&D(e,"callee")&&!Oe(e,"callee")},Te=Array.prototype.slice;function Ae(e){return null!==e&&"object"==typeof e}L(Ae,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",e));return function(t){var r,n;if(!ke(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(Ae));var Ve=Oe((function(){}),"prototype"),Pe=!Oe({toString:null},"toString"),Fe=9007199254740991;function Ne(e,t,r){var n,i,o;if(!(o=e,"object"==typeof o&&null!==o&&"number"==typeof o.length&&me(o.length)&&o.length>=0&&o.length<=Fe||te(e)))throw new TypeError(T("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!je(r))throw new TypeError(T("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(ye(t)){for(;i<n;i++)if(ye(e[i]))return i}else for(;i<n;i++)if(e[i]===t)return i;return-1}var $e=/./;function Ce(e){return"boolean"==typeof e}var Be=Boolean,Le=Boolean.prototype.toString;var Re=U();function Ge(e){return"object"==typeof e&&(e instanceof Be||(Re?function(e){try{return Le.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function We(e){return Ce(e)||Ge(e)}L(We,"isPrimitive",Ce),L(We,"isObject",Ge);var Xe="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Me="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ye="object"==typeof Me?Me:null,Ue="object"==typeof globalThis?globalThis:null;var He=function(e){if(arguments.length){if(!Ce(e))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Ue)return Ue;if(Xe)return Xe;if(Ze)return Ze;if(Ye)return Ye;throw new Error("unexpected error. Unable to resolve global object.")}(),ze=He.document&&He.document.childNodes,De=Int8Array;function qe(){return/^\s*function\s*([^(]*)/i}var Je=/^\s*function\s*([^(]*)/i;function Ke(e){var t,r,n,i;if(("Object"===(r=K(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=Je.exec(n.toString()))return t[1]}return Ae(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}L(qe,"REGEXP",Je);var Qe="function"==typeof $e||"object"==typeof De||"function"==typeof ze?function(e){return Ke(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?Ke(e).toLowerCase():t};function et(e){return e.constructor&&e.constructor.prototype===e}var tt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],rt="undefined"==typeof window?void 0:window;var nt=function(){var e;if("undefined"===Qe(rt))return!1;for(e in rt)try{-1===Ne(tt,e)&&D(rt,e)&&null!==rt[e]&&"object"===Qe(rt[e])&&et(rt[e])}catch(e){return!0}return!1}(),it="undefined"!=typeof window;var ot=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var at=M?function(){return 2!==(Z(arguments)||"").length}(1,2)?function(e){return Ie(e)?Z(Te.call(e)):Z(e)}:Z:function(e){var t,r,n,i,o,a,u;if(i=[],Ie(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!D(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!Ae(e))return i;r=Ve&&n}for(o in e)r&&"prototype"===o||!D(e,o)||i.push(String(o));if(Pe)for(t=function(e){if(!1===it&&!nt)return et(e);try{return et(e)}catch(e){return!1}}(e),u=0;u<ot.length;u++)a=ot[u],t&&"constructor"===a||!D(e,a)||i.push(String(a));return i};L(G,"enum",W),function(e,t){var r,n,i;for(r=at(t),i=0;i<r.length;i++)X(e,n=r[i],t[n])}(G,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});export{G as default,W as enum};
//# sourceMappingURL=mod.js.map
