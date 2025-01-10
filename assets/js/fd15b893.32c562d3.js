"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[609],{9184:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"rpc","title":"RPC server","description":"Setting up a secure RPC server","source":"@site/docs/rpc.mdx","sourceDirName":".","slug":"/rpc","permalink":"/docs/rpc","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"rpc","title":"RPC server","description":"Setting up a secure RPC server","slug":"/rpc","sidebar_position":4,"keywords":["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},"sidebar":"tutorialSidebar","previous":{"title":"Database sizes","permalink":"/docs/dbsize"},"next":{"title":"Linux tips","permalink":"/docs/tools"}}');var r=n(4848),i=n(8453);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},a=void 0,c={},d=[{value:"Stakeworld RPC data",id:"stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Polkadot: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/assethub",children:"dot-rpc.stakeworld.io/assethub"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Collectives: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Kusama: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/assethub",children:"ksm-rpc.stakeworld.io/assethub"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Encointer: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Paseo: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io/assethub",children:"pas-rpc.stakeworld.io/assethub"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"stakeworld-rpc-data",children:"Stakeworld RPC data"}),"\n",(0,r.jsx)(s.p,{children:"Last update: Sat 04 Jan"}),"\n",(0,r.jsx)(s.p,{children:"Requests in millions:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Chain"}),(0,r.jsx)(s.th,{children:"Requests in millions (6 months)"}),(0,r.jsx)(s.th,{children:"Requests in millions (per month)"}),(0,r.jsx)(s.th,{children:"Requests in millions (per day)"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ksmcc3"}),(0,r.jsx)(s.td,{children:"6306"}),(0,r.jsx)(s.td,{children:"1051"}),(0,r.jsx)(s.td,{children:"35"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"asset-hub-kusama"}),(0,r.jsx)(s.td,{children:"86"}),(0,r.jsx)(s.td,{children:"14"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bridge-hub-kusama"}),(0,r.jsx)(s.td,{children:"26"}),(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"coretime-kusama"}),(0,r.jsx)(s.td,{children:"11"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"encointer-kusama"}),(0,r.jsx)(s.td,{children:"29"}),(0,r.jsx)(s.td,{children:"5"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"people-kusama"}),(0,r.jsx)(s.td,{children:"321"}),(0,r.jsx)(s.td,{children:"54"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"polkadot"}),(0,r.jsx)(s.td,{children:"5192"}),(0,r.jsx)(s.td,{children:"865"}),(0,r.jsx)(s.td,{children:"29"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"asset-hub-polkadot"}),(0,r.jsx)(s.td,{children:"6628"}),(0,r.jsx)(s.td,{children:"1105"}),(0,r.jsx)(s.td,{children:"36"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"bridge-hub-polkadot"}),(0,r.jsx)(s.td,{children:"44"}),(0,r.jsx)(s.td,{children:"7"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"collectives_polkadot"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"coretime-polkadot"}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"N/A"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"people-polkadot"}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"N/A"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"paseo"}),(0,r.jsx)(s.td,{children:"76"}),(0,r.jsx)(s.td,{children:"13"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"asset-hub-paseo"}),(0,r.jsx)(s.td,{children:"9"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"westend2"}),(0,r.jsx)(s.td,{children:"49"}),(0,r.jsx)(s.td,{children:"8"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"asset-hub-westend"}),(0,r.jsx)(s.td,{children:"33"}),(0,r.jsx)(s.td,{children:"5"}),(0,r.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,r.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,r.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,r.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,r.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,r.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,r.jsx)(s.img,{alt:"snapsize",src:n(3996).A+"",width:"800",height:"300"})]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,r.jsx)(s.strong,{children:"what"})," to expose with ",(0,r.jsx)(s.strong,{children:"how many"})," connections ",(0,r.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,r.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,r.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,r.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,r.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,r.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,r.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,r.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,r.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,r.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,r.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,r.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,r.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,r.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,r.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,r.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,r.jsx)(s.p,{children:"We are using:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,r.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,r.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,r.jsxs)(s.p,{children:["And edit ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,r.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,r.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,r.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,r.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,r.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,r.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,r.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,r.jsxs)(s.p,{children:["After the ",(0,r.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,r.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3996:(e,s,n)=>{n.d(s,{A:()=>t});const t="data:image/png;base64,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"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(6540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);