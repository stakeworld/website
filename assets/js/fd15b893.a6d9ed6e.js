"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{964:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(5893),r=n(1151);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},a=void 0,i={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},d={},l=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Polkadot: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/assethub",children:"dot-rpc.stakeworld.io/assethub"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Collectives: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Kusama: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/assethub",children:"ksm-rpc.stakeworld.io/assethub"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Encointer: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Westend: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Paseo: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io/assethub",children:"pas-rpc.stakeworld.io/assethub"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(s.h2,{id:"live-stakeworld-rpc-data",children:"Live stakeworld RPC data"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Monthly data can take a minute to load"})}),"\n",(0,t.jsx)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1600",frameborder:"0"}),"\n",(0,t.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,t.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,t.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,t.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,t.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,t.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,t.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,t.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,t.jsx)(s.img,{alt:"snapsize",src:n(9735).Z+"",width:"800",height:"300"})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,t.jsx)(s.strong,{children:"what"})," to expose with ",(0,t.jsx)(s.strong,{children:"how many"})," connections ",(0,t.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,t.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,t.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,t.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,t.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,t.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,t.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,t.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,t.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,t.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,t.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,t.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,t.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,t.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,t.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,t.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,t.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,t.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,t.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,t.jsx)(s.p,{children:"We are using:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,t.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,t.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,t.jsxs)(s.p,{children:["And edit ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,t.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,t.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,t.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,t.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,t.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,t.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,t.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,t.jsxs)(s.p,{children:["After the ",(0,t.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,t.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9735:(e,s,n)=>{n.d(s,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABOFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr7f398/Pz+fn5+/v78fHx9fX18AnnMvLy93wofgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAb2klEQVR4nO2dCZazKhCF5d+G+8k6QLTf/nfwBARxQlSGMrnfOd2dOJQV4DaFQqVpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQgz98Tufvr1m9+rxAJRBsJFedJGHBwTSDd4bNHjwHQjVxnnLIhUSEMgAgYDvQ5g2LkTTd4I1DVMte1Dv2p4JPr4Z//ZKPlywvnWScO/4YParrkjaN43axwY+727keIDuqKw9jd3at5Jp+HyAOwOAangC0a3SCWTsA3g/dgotk02nOhjRc972vTtveidGFXXjMY0YvDfj6Vz2/hZluBvbv7OnsVunHmd0Yz7A7gOgHnOI1Qv13glEmL/Thr7hulFbgSzfNVoKg/dGn96yeQtXIpkv4MxMW41A2p77F5RZPjEAF9CDdBPl6AbuBKL+tn0jdTPt2PTCtuzlO9N7DN4bfbq0//71ljGKcid2Tjpmqz1e+gfYfQDUQ7hxtvknvhXINDYwwY6VxPxODTIYmwTi3rgG77ZwM7Rw9oydaas+nk8n2QP4YrQCQA3OBTL9Fz/oQbgeyU89yPzG9iDzlkbJh0m5CZzUVn28ELNlfx8A9VgLRP/uZ4E0djx9MAbR7ZlPPcj8xo5B5i2a8aydG8pqANSOR3P7brkPgHqsBTLou1OeQNpexUnD0V0sPnY5Uqh//uPP/EbdEpN6bD5tkaMZcxfL2lO4reo27yQFe4DbB0A91gLRzzdaTyD6sYR+oqH3LJ6DqHddz8QYOI19Sc+ke8PagennIG7LaGZ85dnT2K29Ol7RzQe4MwAAAAAAAAAAAAAAAAAAAAAAAAAAKoHF0uD3MKt+Bvd3tfC5abpxTz9gXg/4TexiNreobeilWQk9be873kisLQA/io2b7F+zWmEQ02670mAYEGKBX2QtELMqzc8ZsDkUgN+BDWp1wvzX9CC24+DMEwUEAn4PMXC9fs3+NWOQ3gnEG65DIOBHsasz9V+V169b9CCdusElIRDwq9gsTC4bk1se2k+jdb4SCAPgFTzVhlbEOCa3f5tODdLdTd92ur+7EYhvgx28Pt5xx0Axaw/Pv2Es4Y4KflWvy8DHXL+9DGd67NHavzo3hxujjwys5Q3v+p4fC+QOjw3ks0bVGFW/KNflc2tSmAfn9q8eg/gJMTq1Q5i04wmvS6wY3mCMql+U6zKxtYLX/ZfCizzWqBqj6hfluoRAMlijaoyqX5Tr8r0CAaAEEAgAAV4rEMLdMlVjVP2iXJcQSAZrVI1R9YtyXb5XIACUAAIBIMBrBUK4W6ZqjKpflOsSAslgjaoxqn5Rrsv3CgSAEpRsqEnnYgFQgscNVehJ8zrdj1leq7582JdCJ/bS/iDEKm+Mql+U6zKBQKaVH1xMAhGCN3Jein6Q9gcCKW+Mql/l6vLz+Vy19rih2s6ik+Z7vptRD/N3eh+m/UGIBcrysVw7LZlAlK35pRPIUdofCASU4+Nz7dTnC5emdD+NLxA+p5E7SPuDEKu8Map+Za7Lz5pL1hKMQaZ0P55AuLCJFQ/T/kAg5Y1R9StnXW7UUbwH0ZgsP1Yg3KYyCaT9QYgFcrMjjloCkb5AJPPHHYG0P/9GreMHPzl+DsTx+VyykzLtjxPIYtgRl/bnDv+eGshnjaoxqn6lr8skfYchVdofbcs8BxkWB+RK+wOB1DRFWCAJxaFIlvbHPFFnnE8J6bg9IFPaHwA2HMVVD0xisiL4Dj6p+w7DawWCEKumKWohVoauYwICSW+NqjGqfj21daCNBOpoXiwQAJqcXccEBALeSqZRx5LXCgQhVk1T9UOsI218qK0HqXVdCKSmqcoCCQZWEAj4ZY4Cq0yXg0DAiygw6FjxWoEgxKppqkaIdTzqyOcZBJLDGlVjVP2KsRUcdeTzDGl/wAsoH1jNpGiovFcr0KVdeuteGDKl/QG/QU1xKFI01IH1ZhmInvbuXhiQ9oeMMap+Hdo6iqvC8iAXYnV9OwpkUEsHpfReaLKl/YFAapoqIJBb4kjtWQqBcCaVQFhnLXb+XqT9ATeoHVjNPG+oY7MfBcLZONZQanAvNPnS/oBv5XbXkYXHDVVFVFogvdTpf9wLDff7E4RYdY1R9cuzdW/Ukc+z5w1V5zPRAjH5feYXmnxpfyCQmqZyCCTV5FxaAhmmJeit7iqUXNwLDdL+4Of851Abn7p+pUj7o1CDdJ3MRHUc7oXZlSvtD/gWDsOqSqOOJckEIllnhh7uhQFpf8gYI+jXsTjuqyNty0gmkKaz35vTrb9AJ0vaHwikpqkUxnKII41nPq+drAjeTEAbJAKrGQgEFOZ4RJ591PH393f1lNcKBCFWTVO3jeWKq849+7NcswaBpLdG1Vhlvwpo48izP59r1l4rEPAiAtrIPuT423DpdAgEZCWkjfxDjh15/EoPghCrpqkYY6HB+PJuVY663NUGBELCGlVj5fwKa2PTdSSvyyNt/NJdLECTU21kjqsC2rgsDgUEAtJxpo2XiUPxWoEgxKppamvsiTYSOBbUxm11NBBIDmtUjWXz62m/8dCxoDaeiEOBvFjgCXVjqnDP8VQbmnR5sZp2Wn/emm/1tCAv1tdSWxsp71YdkS4vlpgEMvSy6eY0WMiLRcZYSr8+wbtV2R0LaiOZOBTJ8mJ10nxPOmeq9ximlbbIi0XIWCJTSbVx3bFTbVBbDzLlxVK2lACk7itaaxd5sb6JsDYKrOQIaiNpz2FJlRdL25p7ENtxIC/W1/B72tBENVTOVUpq0e3tm/JiaVvzGKR3AvFOQohV19htU/GzqjI5dkkcxUMs3jM2cCbEeqCtsHmxtC0jgKFnQ7foQZAXi4SxO6bOZo5kdyysjb2eo7hAhr7rejE27lbs7LR5sRonEMUkGeTFevHP519YGp9Pbh9C4hi1kb8M4vJijSGT6Sh4f3DEogfpVD8j7NgcebHeyNlgvPIDwLQ3csNENFS2/LXDagzC3Ri9QV4sQsaiTMVqI+WHXNl6qI20LSOZQIQJtbgegwhvtIK8WFSMnZk60cZyxJFHIOGn43EdB0GB5LkuKMe5NvLfyC33dPwKMQLpR8yvotcFRXiBNqqpo4lqqGKm6HXDIMR6buqJNtL59WzEkdMzBdaDpLdG1Zhv6kwbpzeq0viVo+OoJBApJa9xXZCa006jzPcOkA2qlsQ0VKkeajDGjh6D5LouSA0RbeRdA5iWiIYqmRYI5/4yqALXDYMQ6xqptXHXr+CII4k2iodYwzAd2GGQ/kpjWfqNO37lF8ddz46JmWrCpwMPp5rkuS54DpWYqtD62AzEPihsuriDE14XPIKMNog+AYwkRiB8ekGqB0GIdciZNJJ8jVOcX2FtWHEQrsuoB4V2bP50DIK5WCWM5ddGpF/xHQfhuoxpqJ0ZhOivr93CB/2dnZzZyYrThvl0pP0pgXnwl3npXyyEp45cJaahCja0XSvYsLezF3yUziQItf52sSFf2h/gOJ8wUvSrMb9GG5qohtr26jFhu7tP8kbNcDev1XDF34C0P5mNXdJGfr/C2jgUB+G6jG2oXOVtOGZKgyXa1YaMaX8IF2oZY9f7jax+hbTxd3KvinBdpgl1pkSKnbvf5TIrIu1PDojFVHTWx2YgQUMdB+Fm9G4F4DbkTPvzo0Roo9jzDcU3a0OTpKFKHUjJeSG6tJEV0v6kMxaxekMfUcyvZOIgXJeJ/pPr4KrtVxsUL0n784+AD4Gfz0kKnk/+FDzLn1NtfEddxqX9CcJbbvVgeg1vgwJpfx5CYUXsghNtfEFUtSAu9egges3Orn7gY0Sl+gnWrTZocqX9+QGgDQJENVTRD61mZ59+cD5qwo3H3YYJpP25QRZtPPMrozYI12VcQ7XxUunrhiBcqM+M5es3bvuVe+YI4bqMa6gp19peue6P8XmcSSEHebVBnripJl2d6/4Op90GOW38gjgUUQ1VJXc/GoPkvG4Iwt3yNWNn8VQ6bVzy60wbKUuMcF1GhliWwtcNQbhQ44xFPvdL6Fmsqah+AwLJy0+HWJHaqOFaOKr6QSCQsrxVG7+pjiamoaqvlrKUvO4JhLvlA2P3tFEmxLquDYRYlh5jkMfGToVxPD89u0BufiUHBJKXnwmxIrRRJ6Jq0nxdzbcDgeQjIp6qpo3IhDygZEP9qblYV8caBTyzppJ0HAixIrFZfuZsP1KUSPtDuFCTfkVsYoEkm1YFgURis/yI6a9eRCj7n037k1AbifmiZFUFiW6o/GC7VDuGvummvyahibR6yJb2hyAnQVVFz860AXEcEtdQu14tPfQWeaywWX6UQNhiZuOvpP3Jpo3nnzOPNhBiebRs6MYDxW5qxWbO8sN1DtJx0OFkkS/tD6FCzdpvPPIspI2/Z/0GBOKhvlrq+PtBXJYfrr4Gl7Ne+llNvP7kC0OscFRVFQRVSYhbUej97GH0wPVCdJvox+zJl/anPkFxVFVHxo7j54jrQaQ+UB5ONVFJTOSU3Fr3GS5H1nem/Qmn4an8WYLiIFDWxOoy9BOb9qdlrWSy20tf7bL8uNGGHqnYHiRf2p9/Tw3ct3bWcSR17bKx446jrl+FbKW2FtdQW/3dH7tJTWyWHzeCV18jIuebV1+Y9odmUNX8/R0+Iq/p2suJbahSrp+FT0xZfuYv0FH3hJdP0rOk/akHQXFgxJGNuMRx09+u8HVD1OqWt9rYqKNcKHNtVhVCrBvE3cUSPP7ghNcNUaZQP40/PWTqKwLaSO/akbEzbez0HBDIDSIF0svogxNetzKLCGoRSNWdVnWiDURVKYl8DtLqEfovCYTSKMPjTBsQSGJiHxRKNWuXkkCydcufvcXj9VzzjJ1OOTS/ivtFyladEKtR80hY9/0CSXIHN0tDvDrgKOUXNVvVBKIfhhS+bkHMmPuIur6d9Bt1nft2ohrq9AhEHs3mzXXdUhwKo7o8oI3avDZpQ5qO9EQan+bOfPVEfXxybSDEusEvJ47L1XEkcC3Uc9zuNyCQG7w2cdwTwgOOT+3F48G+A5TltWl/bpMjqEoJxEGKVGl/vMmK7bjBm7VFJu1PsX7jbh//F3hEXtOv7MbeHWI1jVTNve39Vj8jxJTuR6GSNwy9dIvUm3xpf64Vw0m3kfJbOO7VUOAhYFW/ihh7uUD0UsGODYLtKcSl+2nMOkKuj7JpTiik/TkTB92YCkFVfSIaql4KJdTNLHF0yCQQdZDUfUVr7WZL+3PO5/wbB/I7cUJAG1AHCSIaqu4D1K+DrCYm3U9jVqZPPYjtOCql/bn8TRzlo4/QgMPvOhJ6hhDrBjECaWy+hoODdbqfxgpAj0F6JxAvLCsikBhtxFtL6polEFNtAysIpK61iIba87FHMHl9dvfzKXOJzWQy9CrPnHldOO3PxX6jPKfawLiDGDFjkNakjmu63TGITffTtJ5+3OtiaX8i+o3K6WhOxUEgZQ5+Fj9xaX8kE/oZese6nb3zKGMaj3dqkO5ynORP+xM13oi2loKtsfOOo4RnmT8kDVuprcU01E7otNVsdzLvnLB30s8whmR2jN7kS/tjiuE8oIqLqfK1nQfaSO0ZBHKDCw2V7250T9C57WDGMYjwHgtmS/tzHlNVBgOOL+Cd093Ja+M0WRWk8RJeJ5A82kjZLd9IyFPGM4RYN3iVQPJ1HKkKNf3XnEEgda29RSD0g6omSWIFQIwXCOQN0jBAG98HbYEU6zeSdMtZtIEQq641ogK5N6PqPjcL1btPm6vfgEDqWqMokLLauMksBPPa34YHHN8DMYG8Qhub7sLbAW18GVQEcnlGVcVu+VAed4ydgRCrrjUCArk325CMQB4aOwMCqWutrkCSzMTNy1YCZx0I+Caq5cV6gTaatQjcEBzy+BlS5cVyf+cXE3t5sT4fdqKNU7J3y8tbtludHKuDaihD1a/vDrGEMHmx+unv/GLav5cXKyiQuOvmLNTtjKrV4eGeg2pDpOrXdwvE5sWS09/5hWY3L9bnSCBPnXnO/mzD2l6BaqQZg1g9uHxx7sV+XqytQJK48YwSyQ3B20gikCkv1pxx1L04yIu1EMi9aybtSP/+HWrjhjyohjJU/fruEKtxebHGwbhZdOtehPJi6btYDy6aqBjWd6VS9B1UGyJVv75dIDYvlkovN6xeFM6LFQ++ThlE8byhSi/bSWezmbgXxfJiXfqJEMdfLd/wQ+cnLi9WmGmUwVtudOFemN3582JdJE4bVVzLbYyqX98dYk15sXg/8DGyEvOLibx5sS5RQBt3XStijKpfXy0QlxdLP0BXCebci4lsebGuUEob4NsgMJs3M+fCgDbAIa8VyFlH+hdzo8otiyUbfSDEqmztGwVyI54i23YgkMrWXiuQfWK0gTQ8IJ6vEUiUNKANcJHXCsR1pFHPxM+0QTb6QIhV2dqbBXIyjepKv0G27UAgla29UyBxukBMBR7zMoFc6DOgDJCA9wgkXTy1A9noAyFWZWtvEEjCscYRZNsOBFLZWrW0P1Fn/MVrA4AcJBBIaya8tzbbjxSnaX9Orxupi520bgCk5Pl6EGEEMvTSZPtRC0RkH077E7hugXhqB7LRB0Ksytaep/2RjRbIpJIpoYm0ethN+7N/3WvxFOFCpWqMql+U6zLJGGQpENb5+/bT/qyvG6cLxFOgOMkE0qoQq+9UHpNxDGJlcZD2Z75ubDgFbYAqJBNIMzCm0jdwppXispp4/clCIPFDjX1pEO6WqRqj6hflukwnECG41oVN9GN2HaX9+WNR2ghclHChUjVG1S/KdZlMIFLfplLJTHSfIW1Wk/20P38hgeh4qn7KF/zgJ0Xan41AdJoT24McpP05EgiWhwNiJAux1Lce6BykknXzGGQ/7c/fjkCuPtb4l8DxTNaoGqPqF+W6TJAXa532p+nWX6CzTfuzFEj96YV02w4EUtlancmKTiBVrg5ANG+YzQtANV4rEMLdMlVjVP2iXJcQSAZrVI1R9YtyXb5XIACUAAIBIMBrBUK4W6ZqjKpflOsSAslgjaoxqn5Rrsv3CgSAEkAgAAR4rUAId8tUjVH1i3JdEk/7E4BwoVI1RtUvynWZMO2P+iLPXr/vWd/Nu2+l/QGABsnS/jRqZrsSiF6czpxCrqb9AYASydL+qGnurRJIb1I4TLsvpP25BuFumaoxqn5RrsuESRs4k0oWZmnhvOQ2Ku3PDQgXKlVjVP2iXJcJBTI2fyWQTktDupW2J2l/7l/0qYF81qgao+oX5bpMJxCVUNEIRG3iTiDecB0CqWuMql+U6zJhVhPeHPYg27Q/y+uyg9fHO+4YKGbt4fk3jCXcUcGv6nUZ+JjJBDKYpemsndObaPbT/oznAPAKEglEM9/FGua7WHtpfwD4IZYCUc9BunnosZf2B4CfQZiOiKvX7f6T9G3aHwAAAAAAAAB4Gf4wh5g1qsao+kW5LhNby4Yb+Nupw9w8mNRbOfNuFDy2trnLcMvYvAigZRfuTZx4dsVY2JROpRzvWNiYuVEzBM6PtlW3LtNWZkHsFPp5bn0r1hPrB5HI2qDvU68XsFwz5t55qwGee3bF2IkplYxfpjImYrURYUtTqS7TVmZJ7BT6eW69aFcT62X8P52wNTN9LLqK9o25d/Pm555dMnZiSvLGe5z70Nil+/eE6zJtZRbEn0I/ecjkamK9iPb8xJp50UZOMdg31jTe49P4Mo34nLHGYoosuuWcGbsiEMJ1mbYyS+JPgDQeSraaFtnF/9M5sWb+67SR9vaNNc2tMo34nLHGIkzFxx5nxtggogc0hOsybWWWxJ9CbzxUoeFiYv2Ff2Jn1nTc2kcLZM9Y09wUSNizC8bOTY0j69jR65kxMXD/S8UeOlatLtNWZkm2ytahobf1QtR6bm3o2RD7X2zfWNMk6kHWn/NBD7IxFd2mo4zF/t8nXJdpK7Mk/hR67aEWub+1jR1uRlm7YHDfWNPcKtMIz66NQU4+ZGzLiTIW2a4J12XayiyKN4Vee9j1q62x/wtjrHU6AIk1uG+suVemp5/z4l2sQ1O85c2FYP/EL20ldihMuC7TVmZJvCn02sNhWG+98rzzxNrQ8/hx3YGx5l6Znn7OeGNhU7zXw4bY+58nxpg2FukZ4bpMW5lFmZ5w2rn19rmyfe7JLxXqmbUxbhXRz5b2jblFAOLag+GwZ5eMhU3NX0qcwJgUV55XE67LtJUJAAAAAAAAAAAAAAAAAAAAvpPdR8fD1fVDewbKotzdd/maL3nKo0KB/BpCl3B37QGtd7p6eGoy323oNrN8Ng0idPoemdvDjjtxAnEfNfiBNgWyFQixAgFGILf1YU7n7e75Q4RAAqfvkVsgW3fiBOI+avADbQpkRyC0CgToGjH5AMwENKEmDzGm/ofpGUlqT98NjLV8MJk1Bn9qkemAGiH8owVT9a7+GUqhZ/yNVrlaVmcahFqFwNenm9OcD33X9kyoo9z8KGsgc2FM7rRTXhMrEJ2tYFj7Mh2lP+rawrJAxsPUUf+Fy8M73xRj5QIBqkam/B2uLti0qkaM9aEXnvZjhbRqWlvrb7Wn6z9iebRuVGoi9bR8oBsP5LxVX/Tb9y13i5F8gajT5vYwns/VUSoBvu7gnIG8hTG5oxbbSSsO7YvSgf2I1hd3lBg2FlYFMh11Uh6+QPrFf606BQLGYrb5bWxduHUwGlUnauI3V5md3K7+IKSwRzuB6OnZY6sws1B1g1C77fII73S9fW4PopnVqtdoOAPHfJ4VheeOXa5tBcLnZRjjK+vLfJQ4CrFcgVgZhcvDO98U47MC+XtaIKDR2eX1K/+f1SwRYb+AV9WHE4hYDEqZG1Tqo/U+KxBlcPwxy9FczO0ydMyn69NmH9SLtnfL2DwDR3wUDwvDurPMSTKGi/PakPFTWV/mo47KYy4QK5BweXjnm2J8UiB/imcFAsYakXxVF9zm8RuDY50ScCEQt9Wc7ipoebQTiG5k3RRaeA1Crk6fLrJtD9Mqg9nAESkEYs3P66+1QJj+jnv3Ea0v81HrEMs/unFjGXVUuDy88/tl3HujQCCQFJhB+qJxNqpyR93oMeG6B5m3utPNGcujnUDGFyo7zFEPci6QqeVs/mF+IrlaGN7VOtuDCGkCzOkjLnuQbtGDzP8wlgXiRirB8ogRyFGB/EVypUCAd5vX1KONJVina4Cve5B563y6YnX0LJBWDEPThMYgBteM9BEul6CN5s9D7pQ9yHoMokfb7iOejUH2CsQJJFgeG4E8KRDIIQWmRgadJUndFRnD415O48i2kUKIZtWD2K3e6Y35xl7vaC0QYXaYRFPzXZuuWd/Fmk5onA9ze1ALoblqUqc3bVIKxNyfYvNdLO2Z+4iLu1isbZpteawLpLdHBctjI5AnBQKBpMDeVxxLW91XN8mNmV6q3KkVy3IMvxdjELfVP71ZH61+y35qCuq9sa7+A7YDWz8HmU6wR/ntQd/2V4c7A8ekuYtlWD8HUQM19xGdL/ao6aMuLCwLRD9L6c094uPy2AjkWYFAHm/g2WSj7wPlATw4nvUuQHkAn9ZMjwATKA8AAAAAAAAAyML/3QB3d9vWKi4AAAAASUVORK5CYII="},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>a});var t=n(7294);const r={},o=t.createContext(r);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);