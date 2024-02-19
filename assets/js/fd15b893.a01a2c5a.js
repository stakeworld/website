"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{640:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(5893),t=n(1151);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},i=void 0,a={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},c={},d=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Polkadot: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint",children:"dot-rpc.stakeworld.io/statemint"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Collectives: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Kusama: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine",children:"ksm-rpc.stakeworld.io/statemine"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Westend: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"live-stakeworld-rpc-data",children:"Live stakeworld RPC data"}),"\n",(0,r.jsx)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1400",frameborder:"0"}),"\n",(0,r.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,r.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,r.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,r.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,r.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,r.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,r.jsx)(s.img,{alt:"snapsize",src:n(9735).Z+"",width:"800",height:"300"})]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,r.jsx)(s.strong,{children:"what"})," to expose with ",(0,r.jsx)(s.strong,{children:"how many"})," connections ",(0,r.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,r.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,r.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,r.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,r.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,r.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,r.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,r.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,r.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,r.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,r.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,r.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,r.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,r.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,r.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,r.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,r.jsx)(s.p,{children:"We are using:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,r.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,r.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,r.jsxs)(s.p,{children:["And edit ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,r.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,r.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,r.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,r.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,r.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,r.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,r.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,r.jsxs)(s.p,{children:["After the ",(0,r.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,r.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9735:(e,s,n)=>{n.d(s,{Z:()=>r});const r="data:image/png;base64,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"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var r=n(7294);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);