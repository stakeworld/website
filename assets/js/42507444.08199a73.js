"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[35],{8963:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var t=n(5893),s=n(1151);const d={id:"bootnode",title:"Bootnodes",description:"Setting up a bootnode",slug:"/bootnode",sidebar_position:4,keywords:["bootnode","bootnode server","wss","ws","polkadot.js","light client","polkadot","kusama","westend"]},i=void 0,r={id:"bootnode",title:"Bootnodes",description:"Setting up a bootnode",source:"@site/docs/bootnodes.mdx",sourceDirName:".",slug:"/bootnode",permalink:"/docs/bootnode",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/bootnodes.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"bootnode",title:"Bootnodes",description:"Setting up a bootnode",slug:"/bootnode",sidebar_position:4,keywords:["bootnode","bootnode server","wss","ws","polkadot.js","light client","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Database sizes",permalink:"/docs/dbsize"}},a={},c=[{value:"Accessing your bootnode",id:"accessing-your-bootnode",level:2},{value:"Your network key",id:"your-network-key",level:2},{value:"Running the bootnode",id:"running-the-bootnode",level:2},{value:"Testing the bootnode connection",id:"testing-the-bootnode-connection",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsx)(o.p,{children:'When you first start a node it has to find a way to find other nodes in the network. For that purpose you need "bootnodes". After the first bootnode is found it can use the connections of that node to continue expanding its network and be able to play its role in the network, like participate as a validator.'})}),"\n",(0,t.jsx)(o.h2,{id:"accessing-your-bootnode",children:"Accessing your bootnode"}),"\n",(0,t.jsx)(o.p,{children:"The consensus is that bootnodes have to be accessible in three ways:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"p2p"}),": the p2p port, which can be set by ",(0,t.jsx)(o.code,{children:"--listen-addr /ip4/0.0.0.0/tcp/<port>"}),". This port is not automatically set on a non validator node (for example an archive rpc node)."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"p2p/ws"}),": the websocket version, which can be set by ",(0,t.jsx)(o.code,{children:"--listen-addr /ip4/0.0.0.0/tcp/<port>/ws"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"p2p/wss"}),": the ",(0,t.jsx)(o.em,{children:"secure"})," websocket version. A ssl secured connection to the p2p/ws port which will have to be achieved by a proxy since the node itself has no way to include certificates. It is needed for light clients. See ",(0,t.jsx)(o.a,{href:"https://wiki.polkadot.network/docs/maintain-wss#secure-the-ws-port",children:"here"})," for info about setting this up."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"your-network-key",children:"Your network key"}),"\n",(0,t.jsxs)(o.p,{children:["When you startup a node it creates its node-key in the ",(0,t.jsx)(o.code,{children:"chains/<chain>/network/secret_ed25519"})," file. You can also create a node-key by ",(0,t.jsx)(o.code,{children:"polkadot key generate-node-key"})," and use that node-key in the startup command line."]}),"\n",(0,t.jsx)(o.p,{children:"It is essential you backup the node-key, especially if it gets included in the polkadot binary because it gets hardcoded in the binary and needs to be recompiled to change."}),"\n",(0,t.jsx)(o.h2,{id:"running-the-bootnode",children:"Running the bootnode"}),"\n",(0,t.jsxs)(o.p,{children:["Say we are running a polkadot node with ",(0,t.jsx)(o.code,{children:"polkadot --chain polkadot --name dot-bootnode --listen-addr /ip4/0.0.0.0/tcp/30310 --listen-addr /ip4/0.0.0.0/tcp/30311/ws"})," then we would have the p2p on port 30310 and p2p/ws on port 30311. For the p2p/wss port we need to setup a proxy, a dns name and a corresponding certificate. These concepts and example setups are described ",(0,t.jsx)(o.a,{href:"https://wiki.polkadot.network/docs/maintain-wss#secure-the-ws-port",children:"here"}),". The following example is for the popular nginx server and enables p2p/wss on port 30312 by proxying the p2p/ws port 30311:"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.em,{children:"/etc/nginx/sites-enabled/dot-bootnode"})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'server {\n       listen       30312 ssl http2 default_server;\n       server_name  dot-bootnode.stakeworld.io;\n       root         /var/www/html;\n\n       ssl_certificate "<your_cert";\n       ssl_certificate_key "<your_key>";\n\n       location / {\n         proxy_buffers 16 4k;\n         proxy_buffer_size 2k;\n         proxy_pass http://localhost:30311;\n         proxy_http_version 1.1;\n         proxy_set_header Upgrade $http_upgrade;\n         proxy_set_header Connection "Upgrade";\n         proxy_set_header Host $host;\n   }\n\n} \n'})}),"\n",(0,t.jsx)(o.h2,{id:"testing-the-bootnode-connection",children:"Testing the bootnode connection"}),"\n",(0,t.jsxs)(o.p,{children:["If we have above node running with dns name ",(0,t.jsx)(o.code,{children:"dot-bootnode.stakeworld.io"}),", proxied with a valid certificate and node-id ",(0,t.jsx)(o.code,{children:"12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg"}),' then the following commands should give you a: "syncing 1 peers".']}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["You can add ",(0,t.jsx)(o.code,{children:"-lsub-libp2p=trace"})," on the end to get libp2p trace logging for debugging purposes."]})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"p2p"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30310/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks \n'})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"p2p/ws"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30311/ws/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks \n'})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"p2p/wss"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:'polkadot --chain polkadot --base-path /tmp/node --name "Bootnode testnode" --reserved-only --reserved-nodes "/dns/dot-bootnode.stakeworld.io/tcp/30312/wss/p2p/12D3KooWAb5MyC1UJiEQJk4Hg4B2Vi3AJdqSUhTGYUqSnEqCFMFg" --no-hardware-benchmarks \n'})})]})}function p(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>r,a:()=>i});var t=n(7294);const s={},d=t.createContext(s);function i(e){const o=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:o},e.children)}}}]);