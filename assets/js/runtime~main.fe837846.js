(()=>{"use strict";var e,t,r,a,o,f={},n={};function d(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=f,d.c=n,e=[],d.O=(t,r,a,o)=>{if(!r){var f=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var n=!0,i=0;i<r.length;i++)(!1&o||f>=o)&&Object.keys(d.O).every((e=>d.O[e](r[i])))?r.splice(i--,1):(n=!1,o<f&&(f=o));if(n){e.splice(b--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var f={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,d.d(o,f),o},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",195:"c4f5d8e4",280:"44ce8a97",423:"c96a2d03",446:"6880cad0",514:"1be78505",537:"1d027521",568:"9fbdee33",585:"8fb24621",598:"beb33250",615:"9b33427a",669:"0e0b553a",683:"e07f5a68",693:"bd00a780",723:"f5da855d",748:"ea9fb3f1",817:"14eb3368",840:"97ff0659",847:"e35d94cf",918:"17896441",961:"fd15b893",967:"3e44a806",999:"a1331aac"}[e]||e)+"."+{53:"df34c335",85:"83cb37dc",195:"2ab4858e",280:"25a7a04c",423:"7ba7bad2",446:"970f204b",514:"dc52a235",537:"fc5900e3",568:"9cc99c95",585:"25beeff4",598:"65daa454",615:"0499d903",669:"0aa7042f",683:"0409ca01",693:"92a030a6",723:"6fd58304",748:"f46669d8",817:"fdd5e306",840:"1d608442",847:"a0afa924",918:"39b863e2",961:"81a8586a",967:"b71c57bc",972:"dc1150a1",985:"2e2ddf47",999:"055f587b"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="stakeworld:",d.l=(e,t,r,f)=>{if(a[e])a[e].push(t);else{var n,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),b=0;b<c.length;b++){var l=c[b];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){n=l;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,d.nc&&n.setAttribute("nonce",d.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var u=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=u.bind(null,n.onerror),n.onload=u.bind(null,n.onload),i&&document.head.appendChild(n)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/",d.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85",c4f5d8e4:"195","44ce8a97":"280",c96a2d03:"423","6880cad0":"446","1be78505":"514","1d027521":"537","9fbdee33":"568","8fb24621":"585",beb33250:"598","9b33427a":"615","0e0b553a":"669",e07f5a68:"683",bd00a780:"693",f5da855d:"723",ea9fb3f1:"748","14eb3368":"817","97ff0659":"840",e35d94cf:"847",fd15b893:"961","3e44a806":"967",a1331aac:"999"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(t,r)=>{var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var f=d.p+d.u(t),n=new Error;d.l(f,(r=>{if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,a[1](n)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,f=r[0],n=r[1],i=r[2],c=0;if(f.some((t=>0!==e[t]))){for(a in n)d.o(n,a)&&(d.m[a]=n[a]);if(i)var b=i(d)}for(t&&t(r);c<f.length;c++)o=f[c],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(b)},r=self.webpackChunkstakeworld=self.webpackChunkstakeworld||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();