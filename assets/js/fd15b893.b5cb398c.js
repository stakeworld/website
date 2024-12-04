"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[609],{9184:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"rpc","title":"RPC server","description":"Setting up a secure RPC server","source":"@site/docs/rpc.mdx","sourceDirName":".","slug":"/rpc","permalink":"/docs/rpc","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"rpc","title":"RPC server","description":"Setting up a secure RPC server","slug":"/rpc","sidebar_position":4,"keywords":["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},"sidebar":"tutorialSidebar","previous":{"title":"Database sizes","permalink":"/docs/dbsize"},"next":{"title":"Linux tips","permalink":"/docs/tools"}}');var t=n(4848),i=n(8453);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},a=void 0,d={},c=[{value:"Stakeworld RPC data",id:"stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Polkadot: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/assethub",children:"dot-rpc.stakeworld.io/assethub"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Collectives: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Kusama: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/assethub",children:"ksm-rpc.stakeworld.io/assethub"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Encointer: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Paseo: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io/assethub",children:"pas-rpc.stakeworld.io/assethub"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(s.h2,{id:"stakeworld-rpc-data",children:"Stakeworld RPC data"}),"\n",(0,t.jsx)(s.p,{children:"Last update: Fri 25 Oct"}),"\n",(0,t.jsx)(s.p,{children:"Requests in millions:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Chain"}),(0,t.jsx)(s.th,{children:"Requests in millions (6 months)"}),(0,t.jsx)(s.th,{children:"Requests in millions (per month)"}),(0,t.jsx)(s.th,{children:"Requests in millions (per day)"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ksmcc3"}),(0,t.jsx)(s.td,{children:"9010"}),(0,t.jsx)(s.td,{children:"1502"}),(0,t.jsx)(s.td,{children:"50"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-kusama"}),(0,t.jsx)(s.td,{children:"75"}),(0,t.jsx)(s.td,{children:"12"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bridge-hub-kusama"}),(0,t.jsx)(s.td,{children:"25"}),(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"coretime-kusama"}),(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"encointer-kusama"}),(0,t.jsx)(s.td,{children:"17"}),(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"people-kusama"}),(0,t.jsx)(s.td,{children:"209"}),(0,t.jsx)(s.td,{children:"35"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"polkadot"}),(0,t.jsx)(s.td,{children:"7620"}),(0,t.jsx)(s.td,{children:"1270"}),(0,t.jsx)(s.td,{children:"42"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-polkadot"}),(0,t.jsx)(s.td,{children:"5794"}),(0,t.jsx)(s.td,{children:"966"}),(0,t.jsx)(s.td,{children:"32"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bridge-hub-polkadot"}),(0,t.jsx)(s.td,{children:"42"}),(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"collectives_polkadot"}),(0,t.jsx)(s.td,{children:"11"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"coretime-polkadot"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"people-polkadot"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"paseo"}),(0,t.jsx)(s.td,{children:"149"}),(0,t.jsx)(s.td,{children:"25"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-paseo"}),(0,t.jsx)(s.td,{children:"8"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"westend2"}),(0,t.jsx)(s.td,{children:"135"}),(0,t.jsx)(s.td,{children:"22"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-westend"}),(0,t.jsx)(s.td,{children:"37"}),(0,t.jsx)(s.td,{children:"6"}),(0,t.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,t.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,t.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,t.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,t.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,t.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,t.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,t.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,t.jsx)(s.img,{alt:"snapsize",src:n(3996).A+"",width:"800",height:"300"})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,t.jsx)(s.strong,{children:"what"})," to expose with ",(0,t.jsx)(s.strong,{children:"how many"})," connections ",(0,t.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,t.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,t.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,t.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,t.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,t.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,t.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,t.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,t.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,t.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,t.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,t.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,t.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,t.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,t.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,t.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,t.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,t.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,t.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,t.jsx)(s.p,{children:"We are using:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,t.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,t.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,t.jsxs)(s.p,{children:["And edit ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,t.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,t.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,t.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,t.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,t.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,t.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,t.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,t.jsxs)(s.p,{children:["After the ",(0,t.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,t.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3996:(e,s,n)=>{n.d(s,{A:()=>r});const r="data:image/png;base64,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"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var r=n(6540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);