// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).dtypes=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;var l,p=function(t,r,e){var n,l,p,v;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(t,r)||a.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,v="set"in e,l&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),v&&f&&f.call(t,r,e.set),t},v=n,s=p,y=(l=e()?v:s,l);var b=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},g=b,d=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function m(){return d.slice()}function h(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}var j=l;var w=function(t,r,e){j(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})},_=w;var O=function(t){return Object.keys(Object(t))},S=O;var P=function(){return function(){return 2!==(S(arguments)||"").length}(1,2)},E=void 0!==Object.keys;var x=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return x&&"symbol"==typeof Symbol.toStringTag},T=Object.prototype.toString,A=T;var k=function(t){return A.call(t)},N=Object.prototype.hasOwnProperty;var B=function(t,r){return null!=t&&N.call(t,r)},V="function"==typeof Symbol?Symbol.toStringTag:"",F=B,G=V,L=T;var M=k,X=function(t){var r,e,n;if(null==t)return L.call(t);e=t[G],r=F(t,G);try{t[G]=void 0}catch(r){return L.call(t)}return n=L.call(t),r?t[G]=e:delete t[G],n},Y=I()?X:M,C=Y;var D,H=function(t){return"[object Arguments]"===C(t)},R=H;D=function(){return R(arguments)}();var W=D;var z=function(t){return"string"==typeof t},U=String.prototype.valueOf;var q=Y,J=function(t){try{return U.call(t),!0}catch(t){return!1}},K=I();var Q=function(t){return"object"==typeof t&&(t instanceof String||(K?J(t):"[object String]"===q(t)))},Z=z,$=Q;var tt=g,rt=function(t){return Z(t)||$(t)},et=Q;tt(rt,"isPrimitive",z),tt(rt,"isObject",et);var nt=rt;var ot=function(t){return"number"==typeof t},it=Number,ut=it.prototype.toString;var ft=Y,ct=it,at=function(t){try{return ut.call(t),!0}catch(t){return!1}},lt=I();var pt=function(t){return"object"==typeof t&&(t instanceof ct||(lt?at(t):"[object Number]"===ft(t)))},vt=ot,st=pt;var yt=g,bt=function(t){return vt(t)||st(t)},gt=pt;yt(bt,"isPrimitive",ot),yt(bt,"isObject",gt);var dt=bt;var mt=function(t){return t!=t},ht=dt.isPrimitive,jt=mt;var wt=function(t){return ht(t)&&jt(t)},_t=dt.isObject,Ot=mt;var St=function(t){return _t(t)&&Ot(t.valueOf())},Pt=wt,Et=St;var xt=g,It=function(t){return Pt(t)||Et(t)},Tt=St;xt(It,"isPrimitive",wt),xt(It,"isObject",Tt);var At=It,kt=Number.POSITIVE_INFINITY,Nt=it.NEGATIVE_INFINITY,Bt=Math.floor;var Vt=function(t){return Bt(t)===t},Ft=kt,Gt=Nt,Lt=Vt;var Mt=function(t){return t<Ft&&t>Gt&&Lt(t)},Xt=dt.isPrimitive,Yt=Mt;var Ct=function(t){return Xt(t)&&Yt(t)},Dt=dt.isObject,Ht=Mt;var Rt=function(t){return Dt(t)&&Ht(t.valueOf())},Wt=Ct,zt=Rt;var Ut=g,qt=function(t){return Wt(t)||zt(t)},Jt=Rt;Ut(qt,"isPrimitive",Ct),Ut(qt,"isObject",Jt);var Kt,Qt=qt,Zt=Object.prototype.propertyIsEnumerable;Kt=!Zt.call("beep","0");var $t=nt,tr=At.isPrimitive,rr=Qt.isPrimitive,er=Zt,nr=Kt;var or=function(t,r){var e;return null!=t&&(!(e=er.call(t,r))&&nr&&$t(t)?!tr(r=+r)&&rr(r)&&r>=0&&r<t.length:e)},ir=or,ur=Y;var fr=Array.isArray?Array.isArray:function(t){return"[object Array]"===ur(t)},cr=B,ar=ir,lr=fr,pr=Vt;var vr=W?H:function(t){return null!==t&&"object"==typeof t&&!lr(t)&&"number"==typeof t.length&&pr(t.length)&&t.length>=0&&t.length<=4294967295&&cr(t,"callee")&&!ar(t,"callee")},sr=vr,yr=O,br=Array.prototype.slice;var gr=function(t){return sr(t)?yr(br.call(t)):yr(t)},dr=fr;var mr=function(t){return null!==t&&"object"==typeof t};g(mr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!dr(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(mr));var hr=mr;var jr=ir((function(){}),"prototype"),wr=!ir({toString:null},"toString"),_r=Vt;var Or=At,Sr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&_r(t.length)&&t.length>=0&&t.length<=9007199254740991},Pr=nt.isPrimitive,Er=Qt.isPrimitive;var xr=function(t,r,e){var n,o;if(!Sr(t)&&!Pr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Er(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Or(r)){for(;o<n;o++)if(Or(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1},Ir=xr,Tr=/./;var Ar=function(t){return"boolean"==typeof t},kr=Boolean.prototype.toString;var Nr=Y,Br=function(t){try{return kr.call(t),!0}catch(t){return!1}},Vr=I();var Fr=function(t){return"object"==typeof t&&(t instanceof Boolean||(Vr?Br(t):"[object Boolean]"===Nr(t)))},Gr=Ar,Lr=Fr;var Mr=g,Xr=function(t){return Gr(t)||Lr(t)},Yr=Fr;Mr(Xr,"isPrimitive",Ar),Mr(Xr,"isObject",Yr);var Cr=Xr;var Dr=function(){return new Function("return this;")()},Hr="object"==typeof self?self:null,Rr="object"==typeof window?window:null,Wr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},zr="object"==typeof Wr?Wr:null;module.exports=zr;var Ur=Cr.isPrimitive,qr=Dr,Jr=Hr,Kr=Rr,Qr=t(Object.freeze({__proto__:null}));var Zr=function(t){if(arguments.length){if(!Ur(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return qr()}if(Jr)return Jr;if(Kr)return Kr;if(Qr)return Qr;throw new Error("unexpected error. Unable to resolve global object.")},$r=Zr(),te=$r.document&&$r.document.childNodes,re=Int8Array,ee=Tr,ne=te,oe=re;var ie=function(){return"function"==typeof ee||"object"==typeof oe||"function"==typeof ne};var ue=function(){return/^\s*function\s*([^(]*)/i},fe=ue;g(fe,"REGEXP",ue());var ce=hr;var ae=Y,le=fe.REGEXP,pe=function(t){return ce(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ve=function(t){var r,e,n;if(("Object"===(e=ae(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=le.exec(n.toString()))return r[1]}return pe(t)?"Buffer":e},se=ve;var ye=ve;var be=function(t){var r;return null===t?"null":"object"===(r=typeof t)?se(t).toLowerCase():r},ge=function(t){return ye(t).toLowerCase()},de=ie()?ge:be;var me,he=function(t){return t.constructor&&t.constructor.prototype===t},je="undefined"==typeof window?void 0:window,we=B,_e=Ir,Oe=de,Se=he,Pe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ee=je;me=function(){var t;if("undefined"===Oe(Ee))return!1;for(t in Ee)try{-1===_e(Pe,t)&&we(Ee,t)&&null!==Ee[t]&&"object"===Oe(Ee[t])&&Se(Ee[t])}catch(t){return!0}return!1}();var xe="undefined"!=typeof window,Ie=me,Te=he,Ae=xe;var ke=hr,Ne=B,Be=vr,Ve=jr,Fe=wr,Ge=function(t){if(!1===Ae&&!Ie)return Te(t);try{return Te(t)}catch(t){return!1}},Le=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Me=O,Xe=gr,Ye=function(t){var r,e,n,o,i,u,f;if(o=[],Be(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!Ne(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1===(n="function"==typeof t)&&!ke(t))return o;e=Ve&&n}for(i in t)e&&"prototype"===i||!Ne(t,i)||o.push(String(i));if(Fe)for(r=Ge(t),f=0;f<Le.length;f++)u=Le[f],r&&"constructor"===u||!Ne(t,u)||o.push(String(u));return o},Ce=E?P()?Xe:Me:Ye;return g(m,"enum",h),function(t,r){var e,n,o;for(e=Ce(r),o=0;o<e.length;o++)n=e[o],_(t,n,r[n])}(m,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}),m}));
//# sourceMappingURL=index.js.map
