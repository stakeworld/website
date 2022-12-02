"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,s(s({ref:t},p),{},{components:r})):o.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(3117),n=(r(7294),r(3905));const a={id:"tools",title:"Linux tips",description:"Handy commands and tools managiging a validator/server.",slug:"/tools",sidebar_position:20,keywords:["validator setup","validator","validate","polkadot","kusama","tools"]},s=void 0,i={unversionedId:"tools",id:"tools",title:"Linux tips",description:"Handy commands and tools managiging a validator/server.",source:"@site/docs/tools.mdx",sourceDirName:".",slug:"/tools",permalink:"/docs/tools",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/tools.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"tools",title:"Linux tips",description:"Handy commands and tools managiging a validator/server.",slug:"/tools",sidebar_position:20,keywords:["validator setup","validator","validate","polkadot","kusama","tools"]},sidebar:"tutorialSidebar",previous:{title:"Thousand validator resources",permalink:"/docs/1kv"}},l={},c=[{value:"check if ports are open",id:"check-if-ports-are-open",level:2},{value:"see cpu frequencies",id:"see-cpu-frequencies",level:2},{value:"get more disk space by limiting reserved space for root",id:"get-more-disk-space-by-limiting-reserved-space-for-root",level:2},{value:"get disk space information",id:"get-disk-space-information",level:2},{value:"check session keys",id:"check-session-keys",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"check-if-ports-are-open"},"check if ports are open"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"nc -vz <host> <port>\n")),(0,n.kt)("h2",{id:"see-cpu-frequencies"},"see cpu frequencies"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"lscpu --all --extended\n")),(0,n.kt)("h2",{id:"get-more-disk-space-by-limiting-reserved-space-for-root"},"get more disk space by limiting reserved space for root"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"tune2fs -m0 /dev/<disk>\n")),(0,n.kt)("h2",{id:"get-disk-space-information"},"get disk space information"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"du -sh /home/polkadot/*\ndf -h\n")),(0,n.kt)("h2",{id:"check-session-keys"},"check session keys"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_hasSessionKeys", "params":["<session key 0x.....>"]}\' http://localhost:<rpc port>\n')))}d.isMDXComponent=!0}}]);