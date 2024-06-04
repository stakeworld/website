"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{640:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=n(5893),r=n(1151);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},i=void 0,a={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},c={},d=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Polkadot: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint",children:"dot-rpc.stakeworld.io/statemint"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Collectives: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Kusama: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine",children:"ksm-rpc.stakeworld.io/statemine"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Encointer: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Westend: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Paseo: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"})]}),"\n"]})]}),"\n",(0,t.jsx)(s.h2,{id:"live-stakeworld-rpc-data",children:"Live stakeworld RPC data"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Monthly data can take a minute to load"})}),"\n",(0,t.jsx)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1600",frameborder:"0"}),"\n",(0,t.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,t.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,t.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,t.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,t.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,t.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,t.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,t.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,t.jsx)(s.img,{alt:"snapsize",src:n(9735).Z+"",width:"800",height:"300"})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,t.jsx)(s.strong,{children:"what"})," to expose with ",(0,t.jsx)(s.strong,{children:"how many"})," connections ",(0,t.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,t.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,t.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,t.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,t.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,t.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,t.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,t.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,t.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,t.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,t.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,t.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,t.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,t.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,t.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,t.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,t.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,t.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,t.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,t.jsx)(s.p,{children:"We are using:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,t.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,t.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,t.jsxs)(s.p,{children:["And edit ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,t.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,t.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,t.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,t.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,t.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,t.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,t.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,t.jsxs)(s.p,{children:["After the ",(0,t.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,t.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9735:(e,s,n)=>{n.d(s,{Z:()=>t});const t="data:image/png;base64,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"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var t=n(7294);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);