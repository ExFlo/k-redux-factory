!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("lodash/at"),require("lodash/omit"),require("lodash/uniq"),require("lodash/without"),require("lodash/keyBy")):"function"==typeof define&&define.amd?define(["lodash/at","lodash/omit","lodash/uniq","lodash/without","lodash/keyBy"],n):t["trampss-redux-data-store"]=n(t._at,t._omit,t._uniq,t._without,t._keyBy)}(this,function(t,n,e,r,u){"use strict";t=t&&"default"in t?t.default:t,n=n&&"default"in n?n.default:n,e=e&&"default"in e?e.default:e,r=r&&"default"in r?r.default:r,u=u&&"default"in u?u.default:u;var a=function(t){return"SET_"+t},i=function(t){return"RESET_"+t},o=function(t){return"ADD_"+t},f=function(t){return"DEL_"+t},c=Object.freeze({SET:a,set:function(t){return function(n){return{type:a(t),payload:n}}},RESET:i,reset:function(t){return function(){return{type:i(t)}}},ADD:o,add:function(t){return function(n){return{type:o(t),payload:n}}},DEL:f,del:function(t){return function(n){return{type:f(t),payload:n}}}}),d=function(n){return function(e){return function(r){var u=r;return void 0!==n&&(u=t(r,n)[0]),u[e]}}},s=function(t){return function(n){return function(e){return function(r){return d(n)(e)(r)[t]}}}},l=s("keys"),y=s("array"),p=s("nb"),h=s("initialized"),b=s("datas"),g=Object.freeze({getState:d,getKeys:l,getAsArray:y,getNb:p,isInitialized:h,get:function(t){return function(n){return function(e){return function(r){var u=b(t)(n)(r);return e?Array.isArray(e)?e.map(function(t){return u[t]}):u[e]:u}}}}}),k=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t},m=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},v=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)},O={datas:{},keys:[],array:[],nb:0,initialized:!1},j=function(t){return function(c){return function(){var d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=s.type,y=void 0===l?"UNKONWN":l,p=s.payload;switch(y){case a(c):return{datas:u(p,t),keys:p.map(function(n){return n[t]}),array:p,nb:p.length,initialized:!0};case o(c):return m({},d,{datas:m({},d.datas,k({},p[t],p)),keys:e([].concat(v(d.keys),[p[t]])),array:[].concat(v(d.array),[p]),nb:d.keys.length+1,initialized:!0});case f(c):return m({},d,{datas:n(d.datas,[p]),keys:r(d.keys,p),array:d.array?d.array.filter(function(n){return n[t]!==p}):[],nb:d.keys.length-1});case i(c):return O;default:return d}}}};return function(t){return function(n){return function(e){return Object.assign.apply(Object,[j(t)(e)].concat(v(Object.keys(c).map(function(t){return k({},t,c[t](e))})),v(Object.keys(g).map(function(t){return k({},t,g[t](n)(e))}))))}}}});
//# sourceMappingURL=index.js.map
