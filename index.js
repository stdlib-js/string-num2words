// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).num2words=n()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,i=Object.prototype,r=i.toString,o=i.__defineGetter__,l=i.__defineSetter__,u=i.__lookupGetter__,c=i.__lookupSetter__;n=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,n,t){var a,f,d,s;if("object"!=typeof e||null===e||"[object Array]"===r.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===r.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(u.call(e,n)||c.call(e,n)?(a=e.__proto__,e.__proto__=i,delete e[n],e[n]=t.value,e.__proto__=a):e[n]=t.value),d="get"in t,s="set"in t,f&&(d||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return d&&o&&o.call(e,n,t.get),s&&l&&l.call(e,n,t.set),e};var a=n;function f(e,n,t){a(e,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function d(e){return"number"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function E(){return s&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function v(e,n){return null!=e&&p.call(e,n)}var y="function"==typeof Symbol?Symbol.toStringTag:"";var b=E()?function(e){var n,t,i;if(null==e)return g.call(e);t=e[y],n=v(e,y);try{e[y]=void 0}catch(n){return g.call(e)}return i=g.call(e),n?e[y]=t:delete e[y],i}:function(e){return g.call(e)},h=Number,A=h.prototype.toString;var V=E();function N(e){return"object"==typeof e&&(e instanceof h||(V?function(e){try{return A.call(e),!0}catch(e){return!1}}(e):"[object Number]"===b(e)))}function L(e){return d(e)||N(e)}f(L,"isPrimitive",d),f(L,"isObject",N);var D=Number.POSITIVE_INFINITY,m=h.NEGATIVE_INFINITY,j=Math.floor;function w(e){return j(e)===e}function _(e){return e<D&&e>m&&w(e)}function O(e){return d(e)&&_(e)}function S(e){return N(e)&&_(e.valueOf())}function z(e){return O(e)||S(e)}function T(e){return e==e&&e>m&&e<D}function q(){var e,n=arguments,t=n[0],i="https://stdlib.io/e/"+t+"?";for(e=1;e<n.length;e++)i+="&arg[]="+encodeURIComponent(n[e]);return i}f(z,"isPrimitive",O),f(z,"isObject",S);var P=void 0!==String.prototype.endsWith;var x=String.prototype.endsWith;var Q=P?function(e,n,t){var i,r;return r=n.length,0===t?0===r:(i=t<0?e.length+t:t,0===r||!(i-r<0||i>e.length)&&x.call(e,n,i))}:function(e,n,t){var i,r,o;if(r=n.length,0===t)return 0===r;if(i=t<0?e.length+t:t,0===r)return!0;if((i-=r)<0)return!1;for(o=0;o<r;o++)if(e.charCodeAt(i+o)!==n.charCodeAt(o))return!1;return!0},I=[{VAL:1,EN:"zero",DE:"null"},{VAL:10,EN:"ten",DE:"zehn"},{VAL:100,EN:"hundred",DE:"hundert"},{VAL:1e3,EN:"thousand",DE:"tausend"},{VAL:1e6,EN:"million",DE:"Million"},{VAL:1e9,EN:"billion",DE:"Milliarde"},{VAL:1e12,EN:"trillion",DE:"Billion"},{VAL:1e15,EN:"quadrillion",DE:"Billiarde"},{VAL:1e18,EN:"quintillion",DE:"Trillion"},{VAL:1e21,EN:"sextillion",DE:"Trilliarde"},{VAL:1e24,EN:"septillion",DE:"Quadrillion"},{VAL:1e27,EN:"octillion",DE:"Quadrilliarde"},{VAL:1e30,EN:"nonillion",DE:"Quintillion"},{VAL:1e33,EN:"decillion",DE:"Quintilliarde"},{VAL:1e36,EN:"undecillion",DE:"Sextillion"},{VAL:1e39,EN:"duodecillion",DE:"Sextilliarde"},{VAL:1e42,EN:"tredecillion",DE:"Septillion"},{VAL:1e45,EN:"quattuordecillion",DE:"Septilliarde"},{VAL:1e48,EN:"quindecillion",DE:"Octillion"},{VAL:1e51,EN:"sedecillion",DE:"Octilliarde"},{VAL:1e54,EN:"septendecillion",DE:"Nonillion"},{VAL:1e57,EN:"octodecillion",DE:"Nonilliarde"},{VAL:1e60,EN:"novendecillion",DE:"Decillion"},{VAL:1e63,EN:"vigintillion",DE:"Decilliarde"},{VAL:1e66,EN:"unvigintillion",DE:"Undecillion"},{VAL:1e69,EN:"duovigintillion",DE:"Undecilliarde"},{VAL:1e72,EN:"tresvigintillion",DE:"Duodecillion"},{VAL:1e75,EN:"quattuorvigintillion",DE:"Duodecilliarde"},{VAL:1e78,EN:"quinquavigintillion",DE:"Tredecillion"},{VAL:1e81,EN:"sesvigintillion",DE:"Tredecilliarde"},{VAL:1e84,EN:"septemvigintillion",DE:"Quattuordecillion"},{VAL:1e87,EN:"octovigintillion",DE:"Quattuordecilliarde"},{VAL:1e90,EN:"novemvigintillion",DE:"Quindecillion"},{VAL:1e93,EN:"trigintillion",DE:"Quindecilliarde"},{VAL:1e96,EN:"untrigintillion",DE:"Sedecillion"},{VAL:1e99,EN:"duotrigintillion",DE:"Sedecilliarde"},{VAL:1e102,EN:"trestrigintillion",DE:"Septendecillion"},{VAL:1e105,EN:"quattuortrigintillion",DE:"Septendecilliarde"},{VAL:1e108,EN:"quinquatrigintillion",DE:"Octodecillion"},{VAL:1e111,EN:"sestrigintillion",DE:"Octodecilliarde"},{VAL:1e114,EN:"septentrigintillion",DE:"Novendecillion"},{VAL:1e117,EN:"octotrigintillion",DE:"Novendecilliarde"},{VAL:1e120,EN:"noventrigintillion",DE:"Vigintillion"},{VAL:1e123,EN:"quadragintillion",DE:"Vigintilliarde"},{VAL:1e153,EN:"quinquagintillion",DE:"Quinvigintilliarde"},{VAL:1e183,EN:"sexagintillion",DE:"Trigintilliarde"},{VAL:1e213,EN:"septuagintillion",DE:"Quintrigintilliarde"},{VAL:1e243,EN:"octogintillion",DE:"Quadragintilliarde"},{VAL:1e273,EN:"nonagintillion",DE:"Quin­quadra­gint­illiarde"},{VAL:1e303,EN:"centillion",DE:"Quinquagintilliarde"},{VAL:1e306,EN:"uncentillion",DE:"Unquinquagintillione"}],B=["null","eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun","zehn","elf","zwölf","dreizehn","vierzehn","fünfzehn","sechzehn","siebzehn","achtzehn","neunzehn"],F=["null","zehn","zwanzig","dreißig","vierzig","fünfzig","sechzig","siebzig","achtzig","neunzig"];function k(e){return Q(e,"e")?e+"n":e+"en"}function C(e,n){var t,i,r;if(0===e)return n||"null";if(e<0&&(n+="minus ",e*=-1),e<20)i=0,t=1===e&&0===n.length?"ein":B[e];else if(e<100)i=e%10,t=F[j(e/10)],i&&(t=(1===i?"ein":B[i])+"und"+t,i=0);else if(e<1e3)i=e%100,t=C(j(e/100),"")+"hundert";else if(e<1e6)i=e%1e3,t=C(j(e/1e3),"")+"tausend";else for(r=5;r<I.length;r++)if(e<I[r].VAL){i=e%I[r-1].VAL,t=1===j(e/I[r-1].VAL)?"eine "+I[r-1].DE:C(j(e/I[r-1].VAL),"")+" "+k(I[r-1].DE),i&&(t+=" ");break}return C(i,n+=t)}var M=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],U=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function G(e,n){var t,i,r;if(0===e)return n||"zero";if(e<0&&(n+="minus",e*=-1),e<20)i=0,t=M[e];else if(e<100)i=e%10,t=U[j(e/10)],i>0&&(t+="-"+M[i],i=0);else{for(r=3;r<I.length-1;r++)if(e<I[r].VAL){i=e%I[r-1].VAL,t=G(j(e/I[r-1].VAL),"")+" "+I[r-1].EN;break}r===I.length-1&&(i=e%I[r-1].VAL,t=G(j(e/I[r-1].VAL),"")+" "+I[r-1].EN)}return n.length>0&&(n+=" "),G(i,n+=t)}var R=Array.isArray?Array.isArray:function(e){return"[object Array]"===b(e)};var W=/./;function Y(e){return"boolean"==typeof e}var H=Boolean.prototype.toString;var K=E();function X(e){return"object"==typeof e&&(e instanceof Boolean||(K?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===b(e)))}function J(e){return Y(e)||X(e)}function Z(){return new Function("return this;")()}f(J,"isPrimitive",Y),f(J,"isObject",X);var $="object"==typeof self?self:null,ee="object"==typeof window?window:null,ne="object"==typeof global?global:null;var te=function(e){if(arguments.length){if(!Y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Z()}if($)return $;if(ee)return ee;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ie=te.document&&te.document.childNodes,re=Int8Array;function oe(){return/^\s*function\s*([^(]*)/i}var le=/^\s*function\s*([^(]*)/i;function ue(e){return null!==e&&"object"==typeof e}function ce(e){var n,t,i,r;if(("Object"===(t=b(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(n=le.exec(i.toString()))return n[1]}return ue(r=e)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))?"Buffer":t}f(oe,"REGEXP",le),f(ue,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(n){var t,i;if(!R(n))return!1;if(0===(t=n.length))return!1;for(i=0;i<t;i++)if(!1===e(n[i]))return!1;return!0}}(ue));var ae="function"==typeof W||"object"==typeof re||"function"==typeof ie?function(e){return ce(e).toLowerCase()}:function(e){var n;return null===e?"null":"object"===(n=typeof e)?ce(e).toLowerCase():n};function fe(e){return"function"===ae(e)}var de,se=Object.getPrototypeOf;de=fe(Object.getPrototypeOf)?se:function(e){var n=function(e){return e.__proto__}(e);return n||null===n?n:"[object Function]"===b(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ee=de;var ge=Object.prototype;function pe(e){var n;return!!function(e){return"object"==typeof e&&null!==e&&!R(e)}(e)&&(n=function(e){return null==e?null:(e=Object(e),Ee(e))}(e),!n||!v(e,"constructor")&&v(n,"constructor")&&fe(n.constructor)&&"[object Function]"===b(n.constructor)&&v(n,"isPrototypeOf")&&fe(n.isPrototypeOf)&&(n===ge||function(e){var n;for(n in e)if(!v(e,n))return!1;return!0}(e)))}function ve(e){return e!=e}function ye(e){return d(e)&&ve(e)}function be(e){return N(e)&&ve(e.valueOf())}function he(e){return ye(e)||be(e)}f(he,"isPrimitive",ye),f(he,"isObject",be);function Ae(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&w(e.length)&&e.length>=0&&e.length<=9007199254740991}function Ve(e){return"string"==typeof e}var Ne=String.prototype.valueOf;var Le=E();function De(e){return"object"==typeof e&&(e instanceof String||(Le?function(e){try{return Ne.call(e),!0}catch(e){return!1}}(e):"[object String]"===b(e)))}function me(e){return Ve(e)||De(e)}f(me,"isPrimitive",Ve),f(me,"isObject",De);var je=["en","de"];function we(e,n){return pe(n)?v(n,"lang")&&(e.lang=n.lang,-1===function(e,n,t){var i,r;if(!Ae(e)&&!Ve(e))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+e+"`.");if(0===(i=e.length))return-1;if(3===arguments.length){if(!O(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=i)return-1;r=t}else(r=i+t)<0&&(r=0)}else r=0;if(he(n)){for(;r<i;r++)if(he(e[r]))return r}else for(;r<i;r++)if(e[r]===n)return r;return-1}(je,e.lang))?new TypeError(q("1gvLi","lang",je.join('", "'),e.lang)):null:new TypeError(q("1gv2V,FD",n))}function _e(e,n){var t,i,r;for(i=e.length,t="",r=0;r<i;r++)t+=n(e[r],""),r<i-1&&(t+=" ");return t}return function(e,n){var t,i,r;if(!d(e))throw new TypeError(q("1gv49,Hq",e));if(i={},arguments.length>1&&(r=we(i,n)))throw r;return O(e)?"de"===i.lang?C(e,""):G(e,""):T(e)?(t=e.toString().split("."),"de"===i.lang?C(t[0],"")+" Komma "+_e(t[1],C):G(t[0],"")+" point "+_e(t[1],G)):"de"===i.lang?e<0?"minus unendlich":"unendlich":e<0?"negative infinity":"infinity"}}));
//# sourceMappingURL=index.js.map
