// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).num2words=n()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function i(e){return"number"==typeof e}function r(e){var n,i="";for(n=0;n<e;n++)i+="0";return i}function t(e,n,i){var t=!1,o=n-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+r(o):r(o)+e,t&&(e="-"+e)),e}var o=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function a(e){var n,r,a;switch(e.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(r=e.arg,a=parseInt(r,10),!isFinite(a)){if(!i(r))throw new Error("invalid integer. Value: "+r);a=0}return a<0&&("u"===e.specifier||10!==n)&&(a=4294967295+a+1),a<0?(r=(-a).toString(n),e.precision&&(r=t(r,e.precision,e.padRight)),r="-"+r):(r=a.toString(n),a||e.precision?e.precision&&(r=t(r,e.precision,e.padRight)):r="",e.sign&&(r=e.sign+r)),16===n&&(e.alternate&&(r="0x"+r),r=e.specifier===l.call(e.specifier)?l.call(r):o.call(r)),8===n&&e.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function u(e){return"string"==typeof e}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,E=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function w(e){var n,r,t=parseFloat(e.arg);if(!isFinite(t)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+r);t=e.arg}switch(e.specifier){case"e":case"E":r=t.toExponential(e.precision);break;case"f":case"F":r=t.toFixed(e.precision);break;case"g":case"G":c(t)<1e-4?((n=e.precision)>0&&(n-=1),r=t.toExponential(n)):r=t.toPrecision(e.precision),e.alternate||(r=p.call(r,b,"$1e"),r=p.call(r,y,"e"),r=p.call(r,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=p.call(r,g,"e+0$1"),r=p.call(r,d,"e-0$1"),e.alternate&&(r=p.call(r,h,"$1."),r=p.call(r,E,"$1.e")),t>=0&&e.sign&&(r=e.sign+r),r=e.specifier===s.call(e.specifier)?s.call(r):f.call(r)}function V(e){var n,i="";for(n=0;n<e;n++)i+=" ";return i}function A(e,n,i){var r=n-e.length;return r<0?e:e=i?e+V(r):V(r)+e}var m=String.fromCharCode,N=isNaN,L=Array.isArray;function D(e){var n={};return n.specifier=e.specifier,n.precision=void 0===e.precision?1:e.precision,n.width=e.width,n.flags=e.flags||"",n.mapping=e.mapping,n}function j(e){var n,i,r,o,l,c,f,s,p;if(!L(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",f=1,s=0;s<e.length;s++)if(u(r=e[s]))c+=r;else{if(n=void 0!==r.precision,!(r=D(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+r+"`.");for(r.mapping&&(f=r.mapping),i=r.flags,p=0;p<i.length;p++)switch(o=i.charAt(p)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=i.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[f],10),f+=1,N(r.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[f],10),f+=1,N(r.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[f],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=a(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!N(r.arg)){if((l=parseInt(r.arg,10))<0||l>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=N(l)?String(r.arg):m(l)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=w(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=t(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=A(r.arg,r.width,r.padRight)),c+=r.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var n={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(n.precision="1"),n}function O(e){var n,i,r,t;for(i=[],t=0,r=S.exec(e);r;)(n=e.slice(t,S.lastIndex-r[0].length)).length&&i.push(n),i.push(_(r)),t=S.lastIndex,r=S.exec(e);return(n=e.slice(t)).length&&i.push(n),i}function T(e){return"string"==typeof e}function x(e){var n,i,r;if(!T(e))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",e));for(n=O(e),(i=new Array(arguments.length))[0]=n,r=1;r<i.length;r++)i[r]=arguments[r];return j.apply(null,i)}var z,k=Object.prototype,I=k.toString,q=k.__defineGetter__,P=k.__defineSetter__,F=k.__lookupGetter__,Q=k.__lookupSetter__;z=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?n:function(e,n,i){var r,t,o,l;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===I.call(i))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((t="value"in i)&&(F.call(e,n)||Q.call(e,n)?(r=e.__proto__,e.__proto__=k,delete e[n],e[n]=i.value,e.__proto__=r):e[n]=i.value),o="get"in i,l="set"in i,t&&(o||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&q&&q.call(e,n,i.get),l&&P&&P.call(e,n,i.set),e};var C=z;function $(e,n,i){C(e,n,{configurable:!1,enumerable:!1,writable:!1,value:i})}function B(e){return"number"==typeof e}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return R&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function W(e,n){return null!=e&&M.call(e,n)}var Z="function"==typeof Symbol?Symbol:void 0,X="function"==typeof Z?Z.toStringTag:"";var Y=U()?function(e){var n,i,r;if(null==e)return G.call(e);i=e[X],n=W(e,X);try{e[X]=void 0}catch(n){return G.call(e)}return r=G.call(e),n?e[X]=i:delete e[X],r}:function(e){return G.call(e)},H=Number,K=H.prototype.toString;var J=U();function ee(e){return"object"==typeof e&&(e instanceof H||(J?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Y(e)))}function ne(e){return B(e)||ee(e)}$(ne,"isPrimitive",B),$(ne,"isObject",ee);var ie=Number.POSITIVE_INFINITY,re=H.NEGATIVE_INFINITY,te=Math.floor;function oe(e){return te(e)===e}function le(e){return e<ie&&e>re&&oe(e)}function ae(e){return B(e)&&le(e)}function ue(e){return ee(e)&&le(e.valueOf())}function ce(e){return ae(e)||ue(e)}function fe(e){return e==e&&e>re&&e<ie}function se(){var e,n=arguments,i=n[0],r="https://stdlib.io/e/"+i+"?";for(e=1;e<n.length;e++)r+="&arg[]="+encodeURIComponent(n[e]);return r}$(ce,"isPrimitive",ae),$(ce,"isObject",ue);var pe=void 0!==String.prototype.endsWith;var ge=String.prototype.endsWith;var de=pe?function(e,n,i){var r,t;return t=n.length,0===i?0===t:(r=i<0?e.length+i:i,0===t||!(r-t<0||r>e.length)&&ge.call(e,n,r))}:function(e,n,i){var r,t,o;if(t=n.length,0===i)return 0===t;if(r=i<0?e.length+i:i,0===t)return!0;if((r-=t)<0)return!1;for(o=0;o<t;o++)if(e.charCodeAt(r+o)!==n.charCodeAt(o))return!1;return!0},he=[{VAL:1,EN:"zero",DE:"null"},{VAL:10,EN:"ten",DE:"zehn"},{VAL:100,EN:"hundred",DE:"hundert"},{VAL:1e3,EN:"thousand",DE:"tausend"},{VAL:1e6,EN:"million",DE:"Million"},{VAL:1e9,EN:"billion",DE:"Milliarde"},{VAL:1e12,EN:"trillion",DE:"Billion"},{VAL:1e15,EN:"quadrillion",DE:"Billiarde"},{VAL:1e18,EN:"quintillion",DE:"Trillion"},{VAL:1e21,EN:"sextillion",DE:"Trilliarde"},{VAL:1e24,EN:"septillion",DE:"Quadrillion"},{VAL:1e27,EN:"octillion",DE:"Quadrilliarde"},{VAL:1e30,EN:"nonillion",DE:"Quintillion"},{VAL:1e33,EN:"decillion",DE:"Quintilliarde"},{VAL:1e36,EN:"undecillion",DE:"Sextillion"},{VAL:1e39,EN:"duodecillion",DE:"Sextilliarde"},{VAL:1e42,EN:"tredecillion",DE:"Septillion"},{VAL:1e45,EN:"quattuordecillion",DE:"Septilliarde"},{VAL:1e48,EN:"quindecillion",DE:"Octillion"},{VAL:1e51,EN:"sedecillion",DE:"Octilliarde"},{VAL:1e54,EN:"septendecillion",DE:"Nonillion"},{VAL:1e57,EN:"octodecillion",DE:"Nonilliarde"},{VAL:1e60,EN:"novendecillion",DE:"Decillion"},{VAL:1e63,EN:"vigintillion",DE:"Decilliarde"},{VAL:1e66,EN:"unvigintillion",DE:"Undecillion"},{VAL:1e69,EN:"duovigintillion",DE:"Undecilliarde"},{VAL:1e72,EN:"tresvigintillion",DE:"Duodecillion"},{VAL:1e75,EN:"quattuorvigintillion",DE:"Duodecilliarde"},{VAL:1e78,EN:"quinquavigintillion",DE:"Tredecillion"},{VAL:1e81,EN:"sesvigintillion",DE:"Tredecilliarde"},{VAL:1e84,EN:"septemvigintillion",DE:"Quattuordecillion"},{VAL:1e87,EN:"octovigintillion",DE:"Quattuordecilliarde"},{VAL:1e90,EN:"novemvigintillion",DE:"Quindecillion"},{VAL:1e93,EN:"trigintillion",DE:"Quindecilliarde"},{VAL:1e96,EN:"untrigintillion",DE:"Sedecillion"},{VAL:1e99,EN:"duotrigintillion",DE:"Sedecilliarde"},{VAL:1e102,EN:"trestrigintillion",DE:"Septendecillion"},{VAL:1e105,EN:"quattuortrigintillion",DE:"Septendecilliarde"},{VAL:1e108,EN:"quinquatrigintillion",DE:"Octodecillion"},{VAL:1e111,EN:"sestrigintillion",DE:"Octodecilliarde"},{VAL:1e114,EN:"septentrigintillion",DE:"Novendecillion"},{VAL:1e117,EN:"octotrigintillion",DE:"Novendecilliarde"},{VAL:1e120,EN:"noventrigintillion",DE:"Vigintillion"},{VAL:1e123,EN:"quadragintillion",DE:"Vigintilliarde"},{VAL:1e153,EN:"quinquagintillion",DE:"Quinvigintilliarde"},{VAL:1e183,EN:"sexagintillion",DE:"Trigintilliarde"},{VAL:1e213,EN:"septuagintillion",DE:"Quintrigintilliarde"},{VAL:1e243,EN:"octogintillion",DE:"Quadragintilliarde"},{VAL:1e273,EN:"nonagintillion",DE:"Quin­quadra­gint­illiarde"},{VAL:1e303,EN:"centillion",DE:"Quinquagintilliarde"},{VAL:1e306,EN:"uncentillion",DE:"Unquinquagintillione"}],Ee=["null","eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun","zehn","elf","zwölf","dreizehn","vierzehn","fünfzehn","sechzehn","siebzehn","achtzehn","neunzehn"],ve=["null","zehn","zwanzig","dreißig","vierzig","fünfzig","sechzig","siebzig","achtzig","neunzig"];function ye(e){return de(e,"e")?e+"n":e+"en"}function be(e,n){var i,r,t;if(0===e)return n||"null";if(e<0&&(n+="minus ",e*=-1),e<20)r=0,i=1===e&&0===n.length?"ein":Ee[e];else if(e<100)r=e%10,i=ve[te(e/10)],r&&(i=(1===r?"ein":Ee[r])+"und"+i,r=0);else if(e<1e3)r=e%100,i=be(te(e/100),"")+"hundert";else if(e<1e6)r=e%1e3,i=be(te(e/1e3),"")+"tausend";else for(t=5;t<he.length;t++)if(e<he[t].VAL){r=e%he[t-1].VAL,i=1===te(e/he[t-1].VAL)?"eine "+he[t-1].DE:be(te(e/he[t-1].VAL),"")+" "+ye(he[t-1].DE),r&&(i+=" ");break}return be(r,n+=i)}var we=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],Ve=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function Ae(e,n){var i,r,t;if(0===e)return n||"zero";if(e<0&&(n+="minus",e*=-1),e<20)r=0,i=we[e];else if(e<100)r=e%10,i=Ve[te(e/10)],r>0&&(i+="-"+we[r],r=0);else{for(t=3;t<he.length-1;t++)if(e<he[t].VAL){r=e%he[t-1].VAL,i=Ae(te(e/he[t-1].VAL),"")+" "+he[t-1].EN;break}t===he.length-1&&(r=e%he[t-1].VAL,i=Ae(te(e/he[t-1].VAL),"")+" "+he[t-1].EN)}return n.length>0&&(n+=" "),Ae(r,n+=i)}var me=Array.isArray?Array.isArray:function(e){return"[object Array]"===Y(e)};var Ne=/./;function Le(e){return"boolean"==typeof e}var De=Boolean,je=Boolean.prototype.toString;var Se=U();function _e(e){return"object"==typeof e&&(e instanceof De||(Se?function(e){try{return je.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Y(e)))}function Oe(e){return Le(e)||_e(e)}function Te(){return new Function("return this;")()}$(Oe,"isPrimitive",Le),$(Oe,"isObject",_e);var xe="object"==typeof self?self:null,ze="object"==typeof window?window:null,ke="object"==typeof global?global:null,Ie="object"==typeof globalThis?globalThis:null;var qe=function(e){if(arguments.length){if(!Le(e))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Te()}if(Ie)return Ie;if(xe)return xe;if(ze)return ze;if(ke)return ke;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=qe.document&&qe.document.childNodes,Fe=Int8Array;function Qe(){return/^\s*function\s*([^(]*)/i}var Ce=/^\s*function\s*([^(]*)/i;function $e(e){return null!==e&&"object"==typeof e}function Be(e){var n,i,r,t;if(("Object"===(i=Y(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(r=e.constructor).name)return r.name;if(n=Ce.exec(r.toString()))return n[1]}return $e(t=e)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))?"Buffer":i}$(Qe,"REGEXP",Ce),$($e,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",e));return function(n){var i,r;if(!me(n))return!1;if(0===(i=n.length))return!1;for(r=0;r<i;r++)if(!1===e(n[r]))return!1;return!0}}($e));var Re="function"==typeof Ne||"object"==typeof Fe||"function"==typeof Pe?function(e){return Be(e).toLowerCase()}:function(e){var n;return null===e?"null":"object"===(n=typeof e)?Be(e).toLowerCase():n};function Ue(e){return"function"===Re(e)}var Ge,Me=Object,We=Object.getPrototypeOf;Ge=Ue(Object.getPrototypeOf)?We:function(e){var n=function(e){return e.__proto__}(e);return n||null===n?n:"[object Function]"===Y(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ze=Ge;var Xe=Object.prototype;function Ye(e){var n;return!!function(e){return"object"==typeof e&&null!==e&&!me(e)}(e)&&(n=function(e){return null==e?null:(e=Me(e),Ze(e))}(e),!n||!W(e,"constructor")&&W(n,"constructor")&&Ue(n.constructor)&&"[object Function]"===Y(n.constructor)&&W(n,"isPrototypeOf")&&Ue(n.isPrototypeOf)&&(n===Xe||function(e){var n;for(n in e)if(!W(e,n))return!1;return!0}(e)))}function He(e){return e!=e}function Ke(e){return B(e)&&He(e)}function Je(e){return ee(e)&&He(e.valueOf())}function en(e){return Ke(e)||Je(e)}$(en,"isPrimitive",Ke),$(en,"isObject",Je);function nn(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&oe(e.length)&&e.length>=0&&e.length<=9007199254740991}function rn(e){return"string"==typeof e}var tn=String.prototype.valueOf;var on=U();function ln(e){return"object"==typeof e&&(e instanceof String||(on?function(e){try{return tn.call(e),!0}catch(e){return!1}}(e):"[object String]"===Y(e)))}function an(e){return rn(e)||ln(e)}$(an,"isPrimitive",rn),$(an,"isObject",ln);var un=["en","de"];function cn(e,n){return Ye(n)?W(n,"lang")&&(e.lang=n.lang,-1===function(e,n,i){var r,t;if(!nn(e)&&!rn(e))throw new TypeError(x("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(r=e.length))return-1;if(3===arguments.length){if(!ae(i))throw new TypeError(x("invalid argument. Third argument must be an integer. Value: `%s`.",i));if(i>=0){if(i>=r)return-1;t=i}else(t=r+i)<0&&(t=0)}else t=0;if(en(n)){for(;t<r;t++)if(en(e[t]))return t}else for(;t<r;t++)if(e[t]===n)return t;return-1}(un,e.lang))?new TypeError(se("1gvLi","lang",un.join('", "'),e.lang)):null:new TypeError(se("1gv2V,FD",n))}function fn(e,n){var i,r,t;for(r=e.length,i="",t=0;t<r;t++)i+=n(e[t],""),t<r-1&&(i+=" ");return i}return function(e,n){var i,r,t;if(!B(e))throw new TypeError(se("1gv49,Hq",e));if(r={},arguments.length>1&&(t=cn(r,n)))throw t;return ae(e)?"de"===r.lang?be(e,""):Ae(e,""):fe(e)?(i=e.toString().split("."),"de"===r.lang?be(i[0],"")+" Komma "+fn(i[1],be):Ae(i[0],"")+" point "+fn(i[1],Ae)):"de"===r.lang?e<0?"minus unendlich":"unendlich":e<0?"negative infinity":"infinity"}}));
//# sourceMappingURL=index.js.map