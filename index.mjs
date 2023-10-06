// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-finite@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-ends-with@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.1.0-esm/index.mjs";var E=[{VAL:1,EN:"zero",DE:"null"},{VAL:10,EN:"ten",DE:"zehn"},{VAL:100,EN:"hundred",DE:"hundert"},{VAL:1e3,EN:"thousand",DE:"tausend"},{VAL:1e6,EN:"million",DE:"Million"},{VAL:1e9,EN:"billion",DE:"Milliarde"},{VAL:1e12,EN:"trillion",DE:"Billion"},{VAL:1e15,EN:"quadrillion",DE:"Billiarde"},{VAL:1e18,EN:"quintillion",DE:"Trillion"},{VAL:1e21,EN:"sextillion",DE:"Trilliarde"},{VAL:1e24,EN:"septillion",DE:"Quadrillion"},{VAL:1e27,EN:"octillion",DE:"Quadrilliarde"},{VAL:1e30,EN:"nonillion",DE:"Quintillion"},{VAL:1e33,EN:"decillion",DE:"Quintilliarde"},{VAL:1e36,EN:"undecillion",DE:"Sextillion"},{VAL:1e39,EN:"duodecillion",DE:"Sextilliarde"},{VAL:1e42,EN:"tredecillion",DE:"Septillion"},{VAL:1e45,EN:"quattuordecillion",DE:"Septilliarde"},{VAL:1e48,EN:"quindecillion",DE:"Octillion"},{VAL:1e51,EN:"sedecillion",DE:"Octilliarde"},{VAL:1e54,EN:"septendecillion",DE:"Nonillion"},{VAL:1e57,EN:"octodecillion",DE:"Nonilliarde"},{VAL:1e60,EN:"novendecillion",DE:"Decillion"},{VAL:1e63,EN:"vigintillion",DE:"Decilliarde"},{VAL:1e66,EN:"unvigintillion",DE:"Undecillion"},{VAL:1e69,EN:"duovigintillion",DE:"Undecilliarde"},{VAL:1e72,EN:"tresvigintillion",DE:"Duodecillion"},{VAL:1e75,EN:"quattuorvigintillion",DE:"Duodecilliarde"},{VAL:1e78,EN:"quinquavigintillion",DE:"Tredecillion"},{VAL:1e81,EN:"sesvigintillion",DE:"Tredecilliarde"},{VAL:1e84,EN:"septemvigintillion",DE:"Quattuordecillion"},{VAL:1e87,EN:"octovigintillion",DE:"Quattuordecilliarde"},{VAL:1e90,EN:"novemvigintillion",DE:"Quindecillion"},{VAL:1e93,EN:"trigintillion",DE:"Quindecilliarde"},{VAL:1e96,EN:"untrigintillion",DE:"Sedecillion"},{VAL:1e99,EN:"duotrigintillion",DE:"Sedecilliarde"},{VAL:1e102,EN:"trestrigintillion",DE:"Septendecillion"},{VAL:1e105,EN:"quattuortrigintillion",DE:"Septendecilliarde"},{VAL:1e108,EN:"quinquatrigintillion",DE:"Octodecillion"},{VAL:1e111,EN:"sestrigintillion",DE:"Octodecilliarde"},{VAL:1e114,EN:"septentrigintillion",DE:"Novendecillion"},{VAL:1e117,EN:"octotrigintillion",DE:"Novendecilliarde"},{VAL:1e120,EN:"noventrigintillion",DE:"Vigintillion"},{VAL:1e123,EN:"quadragintillion",DE:"Vigintilliarde"},{VAL:1e153,EN:"quinquagintillion",DE:"Quinvigintilliarde"},{VAL:1e183,EN:"sexagintillion",DE:"Trigintilliarde"},{VAL:1e213,EN:"septuagintillion",DE:"Quintrigintilliarde"},{VAL:1e243,EN:"octogintillion",DE:"Quadragintilliarde"},{VAL:1e273,EN:"nonagintillion",DE:"Quin­quadra­gint­illiarde"},{VAL:1e303,EN:"centillion",DE:"Quinquagintilliarde"},{VAL:1e306,EN:"uncentillion",DE:"Unquinquagintillione"}],a=["null","eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun","zehn","elf","zwölf","dreizehn","vierzehn","fünfzehn","sechzehn","siebzehn","achtzehn","neunzehn"],u=["null","zehn","zwanzig","dreißig","vierzig","fünfzig","sechzig","siebzig","achtzig","neunzig"];function g(i){return r(i,"e")?i+"n":i+"en"}function c(i,e){var n,l,r;if(0===i)return e||"null";if(i<0&&(e+="minus ",i*=-1),i<20)l=0,n=1===i&&0===e.length?"ein":a[i];else if(i<100)l=i%10,n=u[t(i/10)],l&&(n=(1===l?"ein":a[l])+"und"+n,l=0);else if(i<1e3)l=i%100,n=c(t(i/100),"")+"hundert";else if(i<1e6)l=i%1e3,n=c(t(i/1e3),"")+"tausend";else for(r=5;r<E.length;r++)if(i<E[r].VAL){l=i%E[r-1].VAL,n=1===t(i/E[r-1].VAL)?"eine "+E[r-1].DE:c(t(i/E[r-1].VAL),"")+" "+g(E[r-1].DE),l&&(n+=" ");break}return c(l,e+=n)}var V=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],L=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function A(i,e){var n,l,r;if(0===i)return e||"zero";if(i<0&&(e+="minus",i*=-1),i<20)l=0,n=V[i];else if(i<100)l=i%10,n=L[t(i/10)],l>0&&(n+="-"+V[l],l=0);else{for(r=3;r<E.length-1;r++)if(i<E[r].VAL){l=i%E[r-1].VAL,n=A(t(i/E[r-1].VAL),"")+" "+E[r-1].EN;break}r===E.length-1&&(l=i%E[r-1].VAL,n=A(t(i/E[r-1].VAL),"")+" "+E[r-1].EN)}return e.length>0&&(e+=" "),A(l,e+=n)}var h=["en","de"];function D(i,e){return o(e)?s(e,"lang")&&(i.lang=e.lang,-1===d(h,i.lang))?new TypeError(l("1gvLi","lang",h.join('", "'),i.lang)):null:new TypeError(l("1gv2V,FD",e))}function N(i,e){var n,l,t;for(l=i.length,n="",t=0;t<l;t++)n+=e(i[t],""),t<l-1&&(n+=" ");return n}function v(t,r){var o,s,d;if(!i(t))throw new TypeError(l("1gv49,Hq",t));if(s={},arguments.length>1&&(d=D(s,r)))throw d;return e(t)?"de"===s.lang?c(t,""):A(t,""):n(t)?(o=t.toString().split("."),"de"===s.lang?c(o[0],"")+" Komma "+N(o[1],c):A(o[0],"")+" point "+N(o[1],A)):"de"===s.lang?t<0?"minus unendlich":"unendlich":t<0?"negative infinity":"infinity"}export{v as default};
//# sourceMappingURL=index.mjs.map
