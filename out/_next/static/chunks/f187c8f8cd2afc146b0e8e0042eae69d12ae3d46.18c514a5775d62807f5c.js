(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"+JPL":function(t,e,n){t.exports={default:n("+SFK"),__esModule:!0}},"+SFK":function(t,e,n){n("AUvm"),n("wgeU"),n("adOz"),n("dl0q"),t.exports=n("WEpk").Symbol},"+plK":function(t,e,n){n("ApPD"),t.exports=n("WEpk").Object.getPrototypeOf},"29s/":function(t,e,n){var r=n("WEpk"),o=n("5T2Y"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("uOPS")?"pure":"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"})},"2GTP":function(t,e,n){var r=n("eaoh");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"2Nb0":function(t,e,n){n("FlQf"),n("bBy9"),t.exports=n("zLkG").f("iterator")},"2faE":function(t,e,n){var r=n("5K7Z"),o=n("eUtF"),i=n("G8Mo"),u=Object.defineProperty;e.f=n("jmDH")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"3GJH":function(t,e,n){n("lCc8");var r=n("WEpk").Object;t.exports=function(t,e){return r.create(t,e)}},"5K7Z":function(t,e,n){var r=n("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5vMV":function(t,e,n){var r=n("B+OT"),o=n("NsO/"),i=n("W070")(!1),u=n("VVlx")("IE_PROTO");t.exports=function(t,e){var n,s=o(t),a=0,f=[];for(n in s)n!=u&&r(s,n)&&f.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~i(f,n)||f.push(n));return f}},"6/1s":function(t,e,n){var r=n("YqAc")("meta"),o=n("93I4"),i=n("B+OT"),u=n("2faE").f,s=0,a=Object.isExtensible||function(){return!0},f=!n("KUxP")((function(){return a(Object.preventExtensions({}))})),c=function(t){u(t,r,{value:{i:"O"+ ++s,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";c(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;c(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!i(t,r)&&c(t),t}}},"6tYh":function(t,e,n){var r=n("93I4"),o=n("5K7Z"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n("2GTP")(Function.call,n("vwuL").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},"93I4":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},A5Xg:function(t,e,n){var r=n("NsO/"),o=n("ar/p").f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return u.slice()}}(t):o(r(t))}},AUvm:function(t,e,n){"use strict";var r=n("5T2Y"),o=n("B+OT"),i=n("jmDH"),u=n("Y7ZC"),s=n("kTiW"),a=n("6/1s").KEY,f=n("KUxP"),c=n("29s/"),l=n("RfKB"),p=n("YqAc"),d=n("UWiX"),y=n("zLkG"),v=n("Zxgi"),h=n("R+7+"),m=n("kAMH"),b=n("5K7Z"),g=n("93I4"),O=n("JB68"),_=n("NsO/"),x=n("G8Mo"),S=n("rr1i"),w=n("oVml"),P=n("A5Xg"),E=n("vwuL"),k=n("mqlF"),j=n("2faE"),M=n("w6GO"),T=E.f,L=j.f,N=P.f,D=r.Symbol,F=r.JSON,C=F&&F.stringify,A=d("_hidden"),U=d("toPrimitive"),Y={}.propertyIsEnumerable,W=c("symbol-registry"),B=c("symbols"),H=c("op-symbols"),R=Object.prototype,V="function"==typeof D&&!!k.f,G=r.QObject,K=!G||!G.prototype||!G.prototype.findChild,J=i&&f((function(){return 7!=w(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=T(R,e);r&&delete R[e],L(t,e,n),r&&t!==R&&L(R,e,r)}:L,I=function(t){var e=B[t]=w(D.prototype);return e._k=t,e},Z=V&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},q=function(t,e,n){return t===R&&q(H,e,n),b(t),e=x(e,!0),b(n),o(B,e)?(n.enumerable?(o(t,A)&&t[A][e]&&(t[A][e]=!1),n=w(n,{enumerable:S(0,!1)})):(o(t,A)||L(t,A,S(1,{})),t[A][e]=!0),J(t,e,n)):L(t,e,n)},z=function(t,e){b(t);for(var n,r=h(e=_(e)),o=0,i=r.length;i>o;)q(t,n=r[o++],e[n]);return t},X=function(t){var e=Y.call(this,t=x(t,!0));return!(this===R&&o(B,t)&&!o(H,t))&&(!(e||!o(this,t)||!o(B,t)||o(this,A)&&this[A][t])||e)},Q=function(t,e){if(t=_(t),e=x(e,!0),t!==R||!o(B,e)||o(H,e)){var n=T(t,e);return!n||!o(B,e)||o(t,A)&&t[A][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=N(_(t)),r=[],i=0;n.length>i;)o(B,e=n[i++])||e==A||e==a||r.push(e);return r},tt=function(t){for(var e,n=t===R,r=N(n?H:_(t)),i=[],u=0;r.length>u;)!o(B,e=r[u++])||n&&!o(R,e)||i.push(B[e]);return i};V||(s((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===R&&e.call(H,n),o(this,A)&&o(this[A],t)&&(this[A][t]=!1),J(this,t,S(1,n))};return i&&K&&J(R,t,{configurable:!0,set:e}),I(t)}).prototype,"toString",(function(){return this._k})),E.f=Q,j.f=q,n("ar/p").f=P.f=$,n("NV0k").f=X,k.f=tt,i&&!n("uOPS")&&s(R,"propertyIsEnumerable",X,!0),y.f=function(t){return I(d(t))}),u(u.G+u.W+u.F*!V,{Symbol:D});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var rt=M(d.store),ot=0;rt.length>ot;)v(rt[ot++]);u(u.S+u.F*!V,"Symbol",{for:function(t){return o(W,t+="")?W[t]:W[t]=D(t)},keyFor:function(t){if(!Z(t))throw TypeError(t+" is not a symbol!");for(var e in W)if(W[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),u(u.S+u.F*!V,"Object",{create:function(t,e){return void 0===e?w(t):z(w(t),e)},defineProperty:q,defineProperties:z,getOwnPropertyDescriptor:Q,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=f((function(){k.f(1)}));u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return k.f(O(t))}}),F&&u(u.S+u.F*(!V||f((function(){var t=D();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!Z(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Z(e))return e}),r[1]=e,C.apply(F,r)}}),D.prototype[U]||n("NegM")(D.prototype,U,D.prototype.valueOf),l(D,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},ApPD:function(t,e,n){var r=n("JB68"),o=n("U+KD");n("zn7N")("getPrototypeOf",(function(){return function(t){return o(r(t))}}))},AyUB:function(t,e,n){t.exports={default:n("3GJH"),__esModule:!0}},"B+OT":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},D8kY:function(t,e,n){var r=n("Ojgd"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},EJiy:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n("F+2o")),o=u(n("+JPL")),i="function"===typeof o.default&&"symbol"===typeof r.default?function(t){return typeof t}:function(t){return t&&"function"===typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"===typeof o.default&&"symbol"===i(r.default)?function(t){return"undefined"===typeof t?"undefined":i(t)}:function(t){return t&&"function"===typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":"undefined"===typeof t?"undefined":i(t)}},"F+2o":function(t,e,n){t.exports={default:n("2Nb0"),__esModule:!0}},FYw3:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("EJiy"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"===typeof e?"undefined":(0,i.default)(e))&&"function"!==typeof e?t:e}},FlQf:function(t,e,n){"use strict";var r=n("ccE7")(!0);n("MPFp")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},FpHa:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(t,e,n){var r=n("93I4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Hfiw:function(t,e,n){var r=n("Y7ZC");r(r.S,"Object",{setPrototypeOf:n("6tYh").set})},Hsns:function(t,e,n){var r=n("93I4"),o=n("5T2Y").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},JB68:function(t,e,n){var r=n("Jes0");t.exports=function(t){return Object(r(t))}},JbBM:function(t,e,n){n("Hfiw"),t.exports=n("WEpk").Object.setPrototypeOf},Jes0:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},KUxP:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},M1xp:function(t,e,n){var r=n("a0xu");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MPFp:function(t,e,n){"use strict";var r=n("uOPS"),o=n("Y7ZC"),i=n("kTiW"),u=n("NegM"),s=n("SBuE"),a=n("j2DC"),f=n("RfKB"),c=n("U+KD"),l=n("UWiX")("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,y,v,h,m){a(n,e,y);var b,g,O,_=function(t){if(!p&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",S="values"==v,w=!1,P=t.prototype,E=P[l]||P["@@iterator"]||v&&P[v],k=E||_(v),j=v?S?_("entries"):k:void 0,M="Array"==e&&P.entries||E;if(M&&(O=c(M.call(new t)))!==Object.prototype&&O.next&&(f(O,x,!0),r||"function"==typeof O[l]||u(O,l,d)),S&&E&&"values"!==E.name&&(w=!0,k=function(){return E.call(this)}),r&&!m||!p&&!w&&P[l]||u(P,l,k),s[e]=k,s[x]=d,v)if(b={values:S?k:_("values"),keys:h?k:_("keys"),entries:j},m)for(g in b)g in P||i(P,g,b[g]);else o(o.P+o.F*(p||w),e,b);return b}},MvwC:function(t,e,n){var r=n("5T2Y").document;t.exports=r&&r.documentElement},NV0k:function(t,e){e.f={}.propertyIsEnumerable},NegM:function(t,e,n){var r=n("2faE"),o=n("rr1i");t.exports=n("jmDH")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"NsO/":function(t,e,n){var r=n("M1xp"),o=n("Jes0");t.exports=function(t){return r(o(t))}},Ojgd:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},P2sY:function(t,e,n){t.exports={default:n("UbbE"),__esModule:!0}},QbLZ:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("P2sY"),i=(r=o)&&r.__esModule?r:{default:r};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},"R+7+":function(t,e,n){var r=n("w6GO"),o=n("mqlF"),i=n("NV0k");t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,s=n(t),a=i.f,f=0;s.length>f;)a.call(t,u=s[f++])&&e.push(u);return e}},"RU/L":function(t,e,n){n("Rqdy");var r=n("WEpk").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},RfKB:function(t,e,n){var r=n("2faE").f,o=n("B+OT"),i=n("UWiX")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},Rqdy:function(t,e,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperty:n("2faE").f})},SBuE:function(t,e){t.exports={}},SEkw:function(t,e,n){t.exports={default:n("RU/L"),__esModule:!0}},"U+KD":function(t,e,n){var r=n("B+OT"),o=n("JB68"),i=n("VVlx")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},UO39:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},UWiX:function(t,e,n){var r=n("29s/")("wks"),o=n("YqAc"),i=n("5T2Y").Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},UbbE:function(t,e,n){n("o8NH"),t.exports=n("WEpk").Object.assign},V7oC:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("SEkw"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},VVlx:function(t,e,n){var r=n("29s/")("keys"),o=n("YqAc");t.exports=function(t){return r[t]||(r[t]=o(t))}},W070:function(t,e,n){var r=n("NsO/"),o=n("tEej"),i=n("D8kY");t.exports=function(t){return function(e,n,u){var s,a=r(e),f=o(a.length),c=i(u,f);if(t&&n!=n){for(;f>c;)if((s=a[c++])!=s)return!0}else for(;f>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return!t&&-1}}},WEpk:function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},Y7ZC:function(t,e,n){var r=n("5T2Y"),o=n("WEpk"),i=n("2GTP"),u=n("NegM"),s=n("B+OT"),a=function(t,e,n){var f,c,l,p=t&a.F,d=t&a.G,y=t&a.S,v=t&a.P,h=t&a.B,m=t&a.W,b=d?o:o[e]||(o[e]={}),g=b.prototype,O=d?r:y?r[e]:(r[e]||{}).prototype;for(f in d&&(n=e),n)(c=!p&&O&&void 0!==O[f])&&s(b,f)||(l=c?O[f]:n[f],b[f]=d&&"function"!=typeof O[f]?n[f]:h&&c?i(l,r):m&&O[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((b.virtual||(b.virtual={}))[f]=l,t&a.R&&g&&!g[f]&&u(g,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},YqAc:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"Yz+Y":function(t,e,n){t.exports={default:n("+plK"),__esModule:!0}},Zxgi:function(t,e,n){var r=n("5T2Y"),o=n("WEpk"),i=n("uOPS"),u=n("zLkG"),s=n("2faE").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},a0xu:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},adOz:function(t,e,n){n("Zxgi")("asyncIterator")},"ar/p":function(t,e,n){var r=n("5vMV"),o=n("FpHa").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},bBy9:function(t,e,n){n("w2d+");for(var r=n("5T2Y"),o=n("NegM"),i=n("SBuE"),u=n("UWiX")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<s.length;a++){var f=s[a],c=r[f],l=c&&c.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},ccE7:function(t,e,n){var r=n("Ojgd"),o=n("Jes0");t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),a=r(n),f=s.length;return a<0||a>=f?t?"":void 0:(i=s.charCodeAt(a))<55296||i>56319||a+1===f||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},dl0q:function(t,e,n){n("Zxgi")("observable")},eUtF:function(t,e,n){t.exports=!n("jmDH")&&!n("KUxP")((function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a}))},eaoh:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},fpC5:function(t,e,n){var r=n("2faE"),o=n("5K7Z"),i=n("w6GO");t.exports=n("jmDH")?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),s=u.length,a=0;s>a;)r.f(t,n=u[a++],e[n]);return t}},hDam:function(t,e){t.exports=function(){}},hxQi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=p(n("QbLZ")),o=p(n("Yz+Y")),i=p(n("iCc5")),u=p(n("V7oC")),s=p(n("FYw3")),a=p(n("mRg0")),f=p(n("q1tI")),c=p(n("17x9")),l=p(n("lPHp"));function p(t){return t&&t.__esModule?t:{default:t}}var d=function(t){function e(){var t,n,r,u;(0,i.default)(this,e);for(var a=arguments.length,f=Array(a),c=0;c<a;c++)f[c]=arguments[c];return n=r=(0,s.default)(this,(t=e.__proto__||(0,o.default)(e)).call.apply(t,[this].concat(f))),r.handleClickToPause=function(){r.anim.isPaused?r.anim.play():r.anim.pause()},u=n,(0,s.default)(r,u)}return(0,a.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.options,n=t.eventListeners,o=e.loop,i=e.autoplay,u=e.animationData,s=e.rendererSettings,a=e.segments;this.options={container:this.el,renderer:"svg",loop:!1!==o,autoplay:!1!==i,segments:!1!==a,animationData:u,rendererSettings:s},this.options=(0,r.default)({},this.options,e),this.anim=l.default.loadAnimation(this.options),this.registerEvents(n)}},{key:"componentWillUpdate",value:function(t){this.options.animationData!==t.options.animationData&&(this.deRegisterEvents(this.props.eventListeners),this.destroy(),this.options=(0,r.default)({},this.options,t.options),this.anim=l.default.loadAnimation(this.options),this.registerEvents(t.eventListeners))}},{key:"componentDidUpdate",value:function(){this.props.isStopped?this.stop():this.props.segments?this.playSegments():this.play(),this.pause(),this.setSpeed(),this.setDirection()}},{key:"componentWillUnmount",value:function(){this.deRegisterEvents(this.props.eventListeners),this.destroy(),this.options.animationData=null,this.anim=null}},{key:"setSpeed",value:function(){this.anim.setSpeed(this.props.speed)}},{key:"setDirection",value:function(){this.anim.setDirection(this.props.direction)}},{key:"play",value:function(){this.anim.play()}},{key:"playSegments",value:function(){this.anim.playSegments(this.props.segments)}},{key:"stop",value:function(){this.anim.stop()}},{key:"pause",value:function(){(this.props.isPaused&&!this.anim.isPaused||!this.props.isPaused&&this.anim.isPaused)&&this.anim.pause()}},{key:"destroy",value:function(){this.anim.destroy()}},{key:"registerEvents",value:function(t){var e=this;t.forEach((function(t){e.anim.addEventListener(t.eventName,t.callback)}))}},{key:"deRegisterEvents",value:function(t){var e=this;t.forEach((function(t){e.anim.removeEventListener(t.eventName,t.callback)}))}},{key:"render",value:function(){var t=this,e=this.props,n=e.width,o=e.height,i=e.ariaRole,u=e.ariaLabel,s=e.isClickToPauseDisabled,a=e.title,c=function(t){return"number"===typeof t?t+"px":t||"100%"},l=(0,r.default)({width:c(n),height:c(o),overflow:"hidden",margin:"0 auto",outline:"none"},this.props.style),p=s?function(){return null}:this.handleClickToPause;return f.default.createElement("div",{ref:function(e){t.el=e},style:l,onClick:p,title:a,role:i,"aria-label":u,tabIndex:"0"})}}]),e}(f.default.Component);e.default=d,d.propTypes={eventListeners:c.default.arrayOf(c.default.object),options:c.default.object.isRequired,height:c.default.oneOfType([c.default.string,c.default.number]),width:c.default.oneOfType([c.default.string,c.default.number]),isStopped:c.default.bool,isPaused:c.default.bool,speed:c.default.number,segments:c.default.arrayOf(c.default.number),direction:c.default.number,ariaRole:c.default.string,ariaLabel:c.default.string,isClickToPauseDisabled:c.default.bool,title:c.default.string},d.defaultProps={eventListeners:[],isStopped:!1,isPaused:!1,speed:1,ariaRole:"button",ariaLabel:"animation",isClickToPauseDisabled:!1,title:""}},iCc5:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},j2DC:function(t,e,n){"use strict";var r=n("oVml"),o=n("rr1i"),i=n("RfKB"),u={};n("NegM")(u,n("UWiX")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},jmDH:function(t,e,n){t.exports=!n("KUxP")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},kAMH:function(t,e,n){var r=n("a0xu");t.exports=Array.isArray||function(t){return"Array"==r(t)}},kTiW:function(t,e,n){t.exports=n("NegM")},kwZ1:function(t,e,n){"use strict";var r=n("jmDH"),o=n("w6GO"),i=n("mqlF"),u=n("NV0k"),s=n("JB68"),a=n("M1xp"),f=Object.assign;t.exports=!f||n("KUxP")((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||Object.keys(f({},e)).join("")!=r}))?function(t,e){for(var n=s(t),f=arguments.length,c=1,l=i.f,p=u.f;f>c;)for(var d,y=a(arguments[c++]),v=l?o(y).concat(l(y)):o(y),h=v.length,m=0;h>m;)d=v[m++],r&&!p.call(y,d)||(n[d]=y[d]);return n}:f},lCc8:function(t,e,n){var r=n("Y7ZC");r(r.S,"Object",{create:n("oVml")})},mRg0:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n("s3Ml")),o=u(n("AyUB")),i=u(n("EJiy"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},mqlF:function(t,e){e.f=Object.getOwnPropertySymbols},o8NH:function(t,e,n){var r=n("Y7ZC");r(r.S+r.F,"Object",{assign:n("kwZ1")})},oVml:function(t,e,n){var r=n("5K7Z"),o=n("fpC5"),i=n("FpHa"),u=n("VVlx")("IE_PROTO"),s=function(){},a=function(){var t,e=n("Hsns")("iframe"),r=i.length;for(e.style.display="none",n("MvwC").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},rr1i:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},s3Ml:function(t,e,n){t.exports={default:n("JbBM"),__esModule:!0}},tEej:function(t,e,n){var r=n("Ojgd"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},uOPS:function(t,e){t.exports=!0},vwuL:function(t,e,n){var r=n("NV0k"),o=n("rr1i"),i=n("NsO/"),u=n("G8Mo"),s=n("B+OT"),a=n("eUtF"),f=Object.getOwnPropertyDescriptor;e.f=n("jmDH")?f:function(t,e){if(t=i(t),e=u(e,!0),a)try{return f(t,e)}catch(n){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},"w2d+":function(t,e,n){"use strict";var r=n("hDam"),o=n("UO39"),i=n("SBuE"),u=n("NsO/");t.exports=n("MPFp")(Array,"Array",(function(t,e){this._t=u(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},w6GO:function(t,e,n){var r=n("5vMV"),o=n("FpHa");t.exports=Object.keys||function(t){return r(t,o)}},wgeU:function(t,e){},zLkG:function(t,e,n){e.f=n("UWiX")},zn7N:function(t,e,n){var r=n("Y7ZC"),o=n("WEpk"),i=n("KUxP");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i((function(){n(1)})),"Object",u)}}}]);