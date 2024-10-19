"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{964:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(5893),r=n(1151);const i={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},o=void 0,a={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},d={},c=[{value:"Stakeworld RPC data",id:"stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Polkadot: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/assethub",children:"dot-rpc.stakeworld.io/assethub"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Collectives: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Kusama: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/assethub",children:"ksm-rpc.stakeworld.io/assethub"})]}),"\n",(0,t.jsxs)(s.li,{children:["BridgeHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,t.jsxs)(s.li,{children:["Encointer: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Westend: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Paseo: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["AssetHub: ",(0,t.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io/assethub",children:"pas-rpc.stakeworld.io/assethub"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(s.h2,{id:"stakeworld-rpc-data",children:"Stakeworld RPC data"}),"\n",(0,t.jsx)(s.p,{children:"Requests in millions:\n(update: 16 okt 2024)"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Chain"}),(0,t.jsx)(s.th,{children:"Requests in millions (6 months)"}),(0,t.jsx)(s.th,{children:"Requests in millions (per month)"}),(0,t.jsx)(s.th,{children:"Requests in millions (per day)"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ksmcc3"}),(0,t.jsx)(s.td,{children:"8966"}),(0,t.jsx)(s.td,{children:"1494"}),(0,t.jsx)(s.td,{children:"49"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-kusama"}),(0,t.jsx)(s.td,{children:"72"}),(0,t.jsx)(s.td,{children:"12"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bridge-hub-kusama"}),(0,t.jsx)(s.td,{children:"25"}),(0,t.jsx)(s.td,{children:"4"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"coretime-kusama"}),(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"encointer-kusama"}),(0,t.jsx)(s.td,{children:"16"}),(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"people-kusama"}),(0,t.jsx)(s.td,{children:"193"}),(0,t.jsx)(s.td,{children:"32"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"polkadot"}),(0,t.jsx)(s.td,{children:"7607"}),(0,t.jsx)(s.td,{children:"1268"}),(0,t.jsx)(s.td,{children:"42"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-polkadot"}),(0,t.jsx)(s.td,{children:"5521"}),(0,t.jsx)(s.td,{children:"920"}),(0,t.jsx)(s.td,{children:"30"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"bridge-hub-polkadot"}),(0,t.jsx)(s.td,{children:"41"}),(0,t.jsx)(s.td,{children:"7"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"collectives_polkadot"}),(0,t.jsx)(s.td,{children:"16"}),(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"coretime-polkadot"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"people-polkadot"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"}),(0,t.jsx)(s.td,{children:"N/A"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"paseo"}),(0,t.jsx)(s.td,{children:"148"}),(0,t.jsx)(s.td,{children:"25"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-paseo"}),(0,t.jsx)(s.td,{children:"8"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"westend2"}),(0,t.jsx)(s.td,{children:"147"}),(0,t.jsx)(s.td,{children:"24"}),(0,t.jsx)(s.td,{children:"1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"asset-hub-westend"}),(0,t.jsx)(s.td,{children:"38"}),(0,t.jsx)(s.td,{children:"6"}),(0,t.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,t.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,t.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,t.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,t.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,t.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,t.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,t.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,t.jsx)(s.img,{alt:"snapsize",src:n(9735).Z+"",width:"800",height:"300"})]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,t.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,t.jsx)(s.strong,{children:"what"})," to expose with ",(0,t.jsx)(s.strong,{children:"how many"})," connections ",(0,t.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,t.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,t.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,t.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,t.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,t.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,t.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,t.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,t.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,t.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,t.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,t.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,t.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,t.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,t.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,t.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,t.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,t.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,t.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,t.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,t.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,t.jsx)(s.p,{children:"We are using:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,t.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,t.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,t.jsxs)(s.p,{children:["And edit ",(0,t.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,t.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,t.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,t.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,t.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,t.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,t.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,t.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,t.jsxs)(s.p,{children:["After the ",(0,t.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,t.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9735:(e,s,n)=>{n.d(s,{Z:()=>t});const t="data:image/png;base64,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"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(7294);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);