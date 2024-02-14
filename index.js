// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).dtypes=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function s(r){return"string"==typeof r}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):u.call(n)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function x(r,e,t){var n=e-r.length;return n<0?r:r=t?r+S(n):S(n)+r}var E=String.fromCharCode,k=isNaN,j=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,a,o,l,u,f,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",u=1,f=0;f<r.length;f++)if(s(n=r[f]))l+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,k(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!k(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),l+=n.arg||"",u+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function _(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function $(r){return"string"==typeof r}function F(r){var e,t;if(!$(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[_(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var A,C=Object.prototype,N=C.toString,R=C.__defineGetter__,P=C.__defineSetter__,Z=C.__lookupGetter__,W=C.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Z.call(r,e)||W.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R&&R.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var L=A;function G(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var X={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function M(){var r;return 0===arguments.length?X.all.slice():(r=X[arguments[0]])?r.slice():[]}function U(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function B(r,e,t){L(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function Y(r){return Object.keys(Object(r))}var z=void 0!==Object.keys;function H(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var D=H();var q=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function K(r,e){return null!=r&&J.call(r,e)}var Q="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof Q?Q.toStringTag:"";var er,tr=D&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return q.call(r);t=r[rr],e=K(r,rr);try{r[rr]=void 0}catch(e){return q.call(r)}return n=q.call(r),e?r[rr]=t:delete r[rr],n}:function(r){return q.call(r)};function nr(r){return"[object Arguments]"===tr(r)}er=function(){return nr(arguments)}();var ir=er;function ar(r){return"string"==typeof r}var or=H();function cr(){return or&&"symbol"==typeof Symbol.toStringTag}var sr=Object.prototype.toString;var lr="function"==typeof Symbol?Symbol:void 0,ur="function"==typeof lr?lr.toStringTag:"";var fr=cr()?function(r){var e,t,n;if(null==r)return sr.call(r);t=r[ur],e=K(r,ur);try{r[ur]=void 0}catch(e){return sr.call(r)}return n=sr.call(r),e?r[ur]=t:delete r[ur],n}:function(r){return sr.call(r)},pr=String.prototype.valueOf;var gr=cr();function dr(r){return"object"==typeof r&&(r instanceof String||(gr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object String]"===fr(r)))}function hr(r){return ar(r)||dr(r)}function br(r){return"number"==typeof r}G(hr,"isPrimitive",ar),G(hr,"isObject",dr);var yr=H();function vr(){return yr&&"symbol"==typeof Symbol.toStringTag}var wr=Object.prototype.toString;var mr="function"==typeof Symbol?Symbol:void 0,Sr="function"==typeof mr?mr.toStringTag:"";var xr=vr()?function(r){var e,t,n;if(null==r)return wr.call(r);t=r[Sr],e=K(r,Sr);try{r[Sr]=void 0}catch(e){return wr.call(r)}return n=wr.call(r),e?r[Sr]=t:delete r[Sr],n}:function(r){return wr.call(r)},Er=Number,kr=Er.prototype.toString;var jr=vr();function Tr(r){return"object"==typeof r&&(r instanceof Er||(jr?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===xr(r)))}function Ir(r){return br(r)||Tr(r)}function Vr(r){return r!=r}function Or(r){return br(r)&&Vr(r)}function _r(r){return Tr(r)&&Vr(r.valueOf())}function $r(r){return Or(r)||_r(r)}function Fr(r){return"number"==typeof r}G(Ir,"isPrimitive",br),G(Ir,"isObject",Tr),G($r,"isPrimitive",Or),G($r,"isObject",_r);var Ar=Number,Cr=Ar.prototype.toString;var Nr=cr();function Rr(r){return"object"==typeof r&&(r instanceof Ar||(Nr?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===fr(r)))}function Pr(r){return Fr(r)||Rr(r)}G(Pr,"isPrimitive",Fr),G(Pr,"isObject",Rr);var Zr=Number.POSITIVE_INFINITY,Wr=Ar.NEGATIVE_INFINITY,Lr=Math.floor;function Gr(r){return r<Zr&&r>Wr&&Lr(e=r)===e;var e}function Xr(r){return Fr(r)&&Gr(r)}function Mr(r){return Rr(r)&&Gr(r.valueOf())}function Ur(r){return Xr(r)||Mr(r)}G(Ur,"isPrimitive",Xr),G(Ur,"isObject",Mr);var Br=Object.prototype.propertyIsEnumerable;var Yr=!Br.call("beep","0");function zr(r,e){var t;return null!=r&&(!(t=Br.call(r,e))&&Yr&&hr(r)?!Or(e=+e)&&Xr(e)&&e>=0&&e<r.length:t)}var Hr=Array.isArray?Array.isArray:function(r){return"[object Array]"===tr(r)},Dr=Math.floor;var qr=ir?nr:function(r){return null!==r&&"object"==typeof r&&!Hr(r)&&"number"==typeof r.length&&(e=r.length,Dr(e)===e)&&r.length>=0&&r.length<=4294967295&&K(r,"callee")&&!zr(r,"callee");var e},Jr=Array.prototype.slice;var Kr=H();var Qr=Object.prototype.toString;var re="function"==typeof Symbol?Symbol:void 0,ee="function"==typeof re?re.toStringTag:"";var te=Kr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Qr.call(r);t=r[ee],e=K(r,ee);try{r[ee]=void 0}catch(e){return Qr.call(r)}return n=Qr.call(r),e?r[ee]=t:delete r[ee],n}:function(r){return Qr.call(r)};var ne=Array.isArray?Array.isArray:function(r){return"[object Array]"===te(r)};function ie(r){return"number"==typeof r}function ae(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function oe(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+ae(i):ae(i)+r,n&&(r="-"+r)),r}var ce=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function le(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!ie(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=oe(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=oe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===se.call(r.specifier)?se.call(t):ce.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ue(r){return"string"==typeof r}var fe=Math.abs,pe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,be=/e-(\d)$/,ye=/^(\d+)$/,ve=/^(\d+)e/,we=/\.0$/,me=/\.0*e/,Se=/(\..*[^0])0*e/;function xe(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!ie(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":fe(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=de.call(t,Se,"$1e"),t=de.call(t,me,"e"),t=de.call(t,we,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=de.call(t,he,"e+0$1"),t=de.call(t,be,"e-0$1"),r.alternate&&(t=de.call(t,ye,"$1."),t=de.call(t,ve,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ge.call(r.specifier)?ge.call(t):pe.call(t)}function Ee(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ke(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Ee(n):Ee(n)+r}var je=String.fromCharCode,Te=isNaN,Ie=Array.isArray;function Ve(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Oe(r){var e,t,n,i,a,o,c,s,l;if(!Ie(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(ue(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Ve(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Te(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Te(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=le(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Te(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Te(a)?String(n.arg):je(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=xe(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=oe(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ke(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var _e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Fe(r){var e,t,n,i;for(t=[],i=0,n=_e.exec(r);n;)(e=r.slice(i,_e.lastIndex-n[0].length)).length&&t.push(e),t.push($e(n)),i=_e.lastIndex,n=_e.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Ae(r){return"string"==typeof r}function Ce(r){var e,t;if(!Ae(r))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Fe(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Oe.apply(null,e)}function Ne(r){return null!==r&&"object"==typeof r}G(Ne,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Ce("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ne(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ne));var Re=zr((function(){}),"prototype"),Pe=!zr({toString:null},"toString"),Ze=Math.floor;function We(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(e=r.length,Ze(e)===e)&&r.length>=0&&r.length<=9007199254740991;var e}function Le(r){return"string"==typeof r}var Ge=H();function Xe(){return Ge&&"symbol"==typeof Symbol.toStringTag}var Me=Object.prototype.toString;var Ue="function"==typeof Symbol?Symbol:void 0,Be="function"==typeof Ue?Ue.toStringTag:"";var Ye=Xe()?function(r){var e,t,n;if(null==r)return Me.call(r);t=r[Be],e=K(r,Be);try{r[Be]=void 0}catch(e){return Me.call(r)}return n=Me.call(r),e?r[Be]=t:delete r[Be],n}:function(r){return Me.call(r)},ze=String.prototype.valueOf;var He=Xe();function De(r){return"object"==typeof r&&(r instanceof String||(He?function(r){try{return ze.call(r),!0}catch(r){return!1}}(r):"[object String]"===Ye(r)))}function qe(r){return Le(r)||De(r)}function Je(r){return"number"==typeof r}G(qe,"isPrimitive",Le),G(qe,"isObject",De);var Ke=Number,Qe=Ke.prototype.toString;var rt=Xe();function et(r){return"object"==typeof r&&(r instanceof Ke||(rt?function(r){try{return Qe.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Ye(r)))}function tt(r){return Je(r)||et(r)}G(tt,"isPrimitive",Je),G(tt,"isObject",et);var nt=Number.POSITIVE_INFINITY,it=Ke.NEGATIVE_INFINITY,at=Math.floor;function ot(r){return r<nt&&r>it&&at(e=r)===e;var e}function ct(r){return Je(r)&&ot(r)}function st(r){return et(r)&&ot(r.valueOf())}function lt(r){return ct(r)||st(r)}function ut(r){return"number"==typeof r}function ft(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function pt(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+ft(i):ft(i)+r,n&&(r="-"+r)),r}G(lt,"isPrimitive",ct),G(lt,"isObject",st);var gt=String.prototype.toLowerCase,dt=String.prototype.toUpperCase;function ht(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!ut(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=pt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=pt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===dt.call(r.specifier)?dt.call(t):gt.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function bt(r){return"string"==typeof r}var yt=Math.abs,vt=String.prototype.toLowerCase,wt=String.prototype.toUpperCase,mt=String.prototype.replace,St=/e\+(\d)$/,xt=/e-(\d)$/,Et=/^(\d+)$/,kt=/^(\d+)e/,jt=/\.0$/,Tt=/\.0*e/,It=/(\..*[^0])0*e/;function Vt(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!ut(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":yt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=mt.call(t,It,"$1e"),t=mt.call(t,Tt,"e"),t=mt.call(t,jt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=mt.call(t,St,"e+0$1"),t=mt.call(t,xt,"e-0$1"),r.alternate&&(t=mt.call(t,Et,"$1."),t=mt.call(t,kt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===wt.call(r.specifier)?wt.call(t):vt.call(t)}function Ot(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _t(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Ot(n):Ot(n)+r}var $t=String.fromCharCode,Ft=isNaN,At=Array.isArray;function Ct(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Nt(r){var e,t,n,i,a,o,c,s,l;if(!At(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(bt(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Ct(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ft(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ft(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ht(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ft(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ft(a)?String(n.arg):$t(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Vt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=pt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_t(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Rt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Pt(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Zt(r){var e,t,n,i;for(t=[],i=0,n=Rt.exec(r);n;)(e=r.slice(i,Rt.lastIndex-n[0].length)).length&&t.push(e),t.push(Pt(n)),i=Rt.lastIndex,n=Rt.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Wt(r){return"string"==typeof r}function Lt(r){var e,t;if(!Wt(r))throw new TypeError(Lt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Zt(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Nt.apply(null,e)}function Gt(r,e,t){var n,i;if(!We(r)&&!Le(r))throw new TypeError(Lt("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!ct(t))throw new TypeError(Lt("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if($r(e)){for(;i<n;i++)if($r(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Xt=/./;function Mt(r){return"boolean"==typeof r}var Ut=H();function Bt(){return Ut&&"symbol"==typeof Symbol.toStringTag}var Yt=Object.prototype.toString;var zt="function"==typeof Symbol?Symbol:void 0,Ht="function"==typeof zt?zt.toStringTag:"";var Dt=Bt()?function(r){var e,t,n;if(null==r)return Yt.call(r);t=r[Ht],e=K(r,Ht);try{r[Ht]=void 0}catch(e){return Yt.call(r)}return n=Yt.call(r),e?r[Ht]=t:delete r[Ht],n}:function(r){return Yt.call(r)},qt=Boolean,Jt=Boolean.prototype.toString;var Kt=Bt();function Qt(r){return"object"==typeof r&&(r instanceof qt||(Kt?function(r){try{return Jt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Dt(r)))}function rn(r){return Mt(r)||Qt(r)}function en(r){return"number"==typeof r}function tn(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function nn(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+tn(i):tn(i)+r,n&&(r="-"+r)),r}G(rn,"isPrimitive",Mt),G(rn,"isObject",Qt);var an=String.prototype.toLowerCase,on=String.prototype.toUpperCase;function cn(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!en(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=nn(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=nn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===on.call(r.specifier)?on.call(t):an.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function sn(r){return"string"==typeof r}var ln=Math.abs,un=String.prototype.toLowerCase,fn=String.prototype.toUpperCase,pn=String.prototype.replace,gn=/e\+(\d)$/,dn=/e-(\d)$/,hn=/^(\d+)$/,bn=/^(\d+)e/,yn=/\.0$/,vn=/\.0*e/,wn=/(\..*[^0])0*e/;function mn(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!en(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":ln(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=pn.call(t,wn,"$1e"),t=pn.call(t,vn,"e"),t=pn.call(t,yn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=pn.call(t,gn,"e+0$1"),t=pn.call(t,dn,"e-0$1"),r.alternate&&(t=pn.call(t,hn,"$1."),t=pn.call(t,bn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===fn.call(r.specifier)?fn.call(t):un.call(t)}function Sn(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function xn(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Sn(n):Sn(n)+r}var En=String.fromCharCode,kn=isNaN,jn=Array.isArray;function Tn(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function In(r){var e,t,n,i,a,o,c,s,l;if(!jn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(sn(n=r[s]))o+=n;else{if(e=void 0!==n.precision,!(n=Tn(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,kn(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,kn(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=cn(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!kn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=kn(a)?String(n.arg):En(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=mn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=nn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=xn(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Vn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function On(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function _n(r){var e,t,n,i;for(t=[],i=0,n=Vn.exec(r);n;)(e=r.slice(i,Vn.lastIndex-n[0].length)).length&&t.push(e),t.push(On(n)),i=Vn.lastIndex,n=Vn.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function $n(r){return"string"==typeof r}function Fn(r){var e,t;if(!$n(r))throw new TypeError(Fn("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[_n(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return In.apply(null,e)}function An(){return new Function("return this;")()}var Cn="object"==typeof self?self:null,Nn="object"==typeof window?window:null,Rn="object"==typeof global?global:null,Pn="object"==typeof globalThis?globalThis:null;var Zn=function(r){if(arguments.length){if(!Mt(r))throw new TypeError(Fn("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return An()}if(Pn)return Pn;if(Cn)return Cn;if(Nn)return Nn;if(Rn)return Rn;throw new Error("unexpected error. Unable to resolve global object.")}(),Wn=Zn.document&&Zn.document.childNodes,Ln=Int8Array;var Gn=H();var Xn=Object.prototype.toString;var Mn="function"==typeof Symbol?Symbol:void 0,Un="function"==typeof Mn?Mn.toStringTag:"";var Bn=Gn&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Xn.call(r);t=r[Un],e=K(r,Un);try{r[Un]=void 0}catch(e){return Xn.call(r)}return n=Xn.call(r),e?r[Un]=t:delete r[Un],n}:function(r){return Xn.call(r)};function Yn(){return/^\s*function\s*([^(]*)/i}var zn=/^\s*function\s*([^(]*)/i;function Hn(r){var e,t,n,i;if(("Object"===(t=Bn(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=zn.exec(n.toString()))return e[1]}return Ne(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}G(Yn,"REGEXP",zn);var Dn="function"==typeof Xt||"object"==typeof Ln||"function"==typeof Wn?function(r){return Hn(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Hn(r).toLowerCase():e};function qn(r){return r.constructor&&r.constructor.prototype===r}var Jn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kn="undefined"==typeof window?void 0:window;var Qn=function(){var r;if("undefined"===Dn(Kn))return!1;for(r in Kn)try{-1===Gt(Jn,r)&&K(Kn,r)&&null!==Kn[r]&&"object"===Dn(Kn[r])&&qn(Kn[r])}catch(r){return!0}return!1}(),ri="undefined"!=typeof window;var ei,ti=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ei=z?function(){return 2!==(Y(arguments)||"").length}(1,2)?function(r){return qr(r)?Y(Jr.call(r)):Y(r)}:Y:function(r){var e,t,n,i,a,o,c;if(i=[],qr(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!K(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Ne(r))return i;t=Re&&n}for(a in r)t&&"prototype"===a||!K(r,a)||i.push(String(a));if(Pe)for(e=function(r){if(!1===ri&&!Qn)return qn(r);try{return qn(r)}catch(r){return!1}}(r),c=0;c<ti.length;c++)o=ti[c],e&&"constructor"===o||!K(r,o)||i.push(String(o));return i};var ni=ei;return G(M,"enum",U),function(r,e){var t,n,i;for(t=ni(e),i=0;i<t.length;i++)B(r,n=t[i],e[n])}(M,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}),M}));
//# sourceMappingURL=index.js.map
