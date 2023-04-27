"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[35],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(d,".").concat(b)]||u[b]||c[b]||a;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(3117),r=(n(7294),n(3905));const a={id:"bootnode",title:"Bootnode",description:"Setting up a bootnode",slug:"/bootnode",sidebar_position:4,keywords:["bootnode","bootnode server","wss","ws","polkadot.js","light client","polkadot","kusama","westend"]},i=void 0,s={unversionedId:"bootnode",id:"bootnode",title:"Bootnode",description:"Setting up a bootnode",source:"@site/docs/bootnodes.mdx",sourceDirName:".",slug:"/bootnode",permalink:"/docs/bootnode",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/bootnodes.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"bootnode",title:"Bootnode",description:"Setting up a bootnode",slug:"/bootnode",sidebar_position:4,keywords:["bootnode","bootnode server","wss","ws","polkadot.js","light client","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Database sizes",permalink:"/docs/dbsize"}},d={},p=[{value:"Accessing your own bootnode",id:"accessing-your-own-bootnode",level:2},{value:"Getting your key",id:"getting-your-key",level:2},{value:"Running the bootnode",id:"running-the-bootnode",level:2},{value:"Testing the bootnode connection",id:"testing-the-bootnode-connection",level:2}],l={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When you first start a node it has to find it's first other node to expand it's network. After the first node is found it can use the connections of that node to continue expanding its network and to be able to for example validate in the network. Bootnodes are used to startup this process.")),(0,r.kt)("h2",{id:"accessing-your-own-bootnode"},"Accessing your own bootnode"),(0,r.kt)("p",null,"The consensus is that bootnodes have to be accessible in three ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"p2p"),": the p2p port, default is 30333 which can be changed by ",(0,r.kt)("inlineCode",{parentName:"li"},"--port")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"p2p/ws"),": the websocket version which listens on the same P2P port"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"p2p/wss"),": the ",(0,r.kt)("em",{parentName:"li"},"secure")," websocket version. A ssl secured connection will have to be achieved by a proxy mechanism since the node itself has no way to include certificates. It is needed for light clients.")),(0,r.kt)("h2",{id:"getting-your-key"},"Getting your key"),(0,r.kt)("p",null,"When you startup a node it creates its node-key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"chains/<chain>/network/secret_ed25519")," file. You can also create a node-key by ",(0,r.kt)("inlineCode",{parentName:"p"},"polkadot key generate-node-key")," and use that node-key in the startup command line."),(0,r.kt)("p",null,"It is essential you backup the node-key because if it gets included in the polkadot binary it gets hardcoded in the binary and needs to be recompiled to change."),(0,r.kt)("h2",{id:"running-the-bootnode"},"Running the bootnode"),(0,r.kt)("p",null,"Say we are running a polkadot node with ",(0,r.kt)("inlineCode",{parentName:"p"},"polkadot --chain polkadot --name dot-bootnode --port 30310")," then we would have the p2p and p2p/ws running on port 30310. For the p2p/wss port we would need to setup a proxy, a dns name and a corresponding certificate. These concepts and example setups are described ",(0,r.kt)("a",{parentName:"p",href:"/docs/rpc"},"here"),". "),(0,r.kt)("h2",{id:"testing-the-bootnode-connection"},"Testing the bootnode connection"),(0,r.kt)("p",null,"Say we have a running node with ",(0,r.kt)("inlineCode",{parentName:"p"},"--port 30310"),", dns name ",(0,r.kt)("inlineCode",{parentName:"p"},"dot-bootnode.stakeworld.io")," and node-id ",(0,r.kt)("inlineCode",{parentName:"p"},"12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg")," then we can check the connection by:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"p2p"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30310/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks -lsub-libp2p=trace\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ws"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30310/ws/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks -lsub-libp2p=trace\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"wss"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/443/wss/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks -lsub-libp2p=trace\n')))}c.isMDXComponent=!0}}]);