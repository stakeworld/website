"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[423],{6513:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=o(5893),i=o(1151);const r={id:"logs",title:"Validator error logs",description:"Analysing error log for a node",slug:"/logs",sidebar_position:4,keywords:["validator setup","validator","validate","logs","error logs","polkadot","kusama"]},a=void 0,s={id:"validate/logs",title:"Validator error logs",description:"Analysing error log for a node",source:"@site/docs/validate/logs.mdx",sourceDirName:"validate",slug:"/logs",permalink:"/docs/logs",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/logs.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"logs",title:"Validator error logs",description:"Analysing error log for a node",slug:"/logs",sidebar_position:4,keywords:["validator setup","validator","validate","logs","error logs","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Monitoring a validator node",permalink:"/docs/monitor"},next:{title:"Disaster managment",permalink:"/docs/disaster"}},l={},d=[{value:"Got a bad approval from peer peer_id=PeerId(\u201c\u2026\u201d) error=Unknown block: \u2026",id:"got-a-bad-approval-from-peer-peer_idpeerid-errorunknown-block-",level:3},{value:"Incoming substream exceeding maximum number of negotiating inbound streams. Dropping",id:"incoming-substream-exceeding-maximum-number-of-negotiating-inbound-streams-dropping",level:3},{value:"Cannot create a runtime error=Other(&quot;cannot create module: compilation settings are not compatible with the native host&quot;) Error at calling runtime api: Failed to get runtime version: cannot create module: compilation settings are not compatible with the native host",id:"cannot-create-a-runtime-errorothercannot-create-module-compilation-settings-are-not-compatible-with-the-native-host-error-at-calling-runtime-api-failed-to-get-runtime-version-cannot-create-module-compilation-settings-are-not-compatible-with-the-native-host",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"This page contains information about logging errors on a polkadot/kusama validator node"})}),"\n",(0,n.jsx)(t.h3,{id:"got-a-bad-approval-from-peer-peer_idpeerid-errorunknown-block-",children:"Got a bad approval from peer peer_id=PeerId(\u201c\u2026\u201d) error=Unknown block: \u2026"}),"\n",(0,n.jsx)(t.p,{children:"kusama validator lounge: \u201cThat\u2019s known and being investigated, but should be benign and does not affect era points\u201d by rphmeier"}),"\n",(0,n.jsx)(t.h3,{id:"incoming-substream-exceeding-maximum-number-of-negotiating-inbound-streams-dropping",children:"Incoming substream exceeding maximum number of negotiating inbound streams. Dropping"}),"\n",(0,n.jsx)(t.p,{children:'kusama validator lounge: "This one is not too big of an issue so long as it isn\u2019t being emitted constantly (as in multiple times per second)" by will'}),"\n",(0,n.jsx)(t.h3,{id:"cannot-create-a-runtime-errorothercannot-create-module-compilation-settings-are-not-compatible-with-the-native-host-error-at-calling-runtime-api-failed-to-get-runtime-version-cannot-create-module-compilation-settings-are-not-compatible-with-the-native-host",children:'Cannot create a runtime error=Other("cannot create module: compilation settings are not compatible with the native host") Error at calling runtime api: Failed to get runtime version: cannot create module: compilation settings are not compatible with the native host'}),"\n",(0,n.jsxs)(t.p,{children:['This seems to be a problem with virtualized hosts, especially KVM which don\'t show their CPU right or show "Generic KVM CPU". The solution seems to be to set the CPU to ',(0,n.jsx)(t.code,{children:"passthrough (host)"})," ",(0,n.jsx)(t.a,{href:"https://qemu.readthedocs.io/en/latest/system/qemu-cpu-models.html#libvirt-guest-xml",children:"https://qemu.readthedocs.io/en/latest/system/qemu-cpu-models.html#libvirt-guest-xml"})]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>a});var n=o(7294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);