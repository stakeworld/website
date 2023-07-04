"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1647:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Polkadot: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AssetHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint"},"dot-rpc.stakeworld.io/statemint")),(0,r.kt)("li",{parentName:"ul"},"BridgeHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub"},"dot-rpc.stakeworld.io/bridgehub")),(0,r.kt)("li",{parentName:"ul"},"Collectives: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives"},"dot-rpc.stakeworld.io/collectives")))),(0,r.kt)("li",{parentName:"ul"},"Kusama: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AssetHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine"},"ksm-rpc.stakeworld.io/statemine")),(0,r.kt)("li",{parentName:"ul"},"BridgeHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub"},"ksm-rpc.stakeworld.io/bridgehub")))),(0,r.kt)("li",{parentName:"ul"},"Westend: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AssetHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint"},"wnd-rpc.stakeworld.io/westmint")))))),(0,r.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,r.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"700",height:"1400",frameborder:"0"}),(0,r.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,r.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,r.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,r.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,r.kt)("p",null,"An archive node requires a lot more ",(0,r.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,r.kt)("img",{alt:"snapsize",src:a(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,r.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,r.kt)("p",null,"Via the node startup settings you can choose ",(0,r.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,r.kt)("strong",{parentName:"p"},"how many")," connections ",(0,r.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,r.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,r.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,r.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,r.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,r.kt)("p",null,"If you want to enable php"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,r.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,r.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,r.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,r.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,r.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,r.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,r.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,r.kt)("p",null,"The number of connections is limited by the node itself (",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,r.kt)("p",null,"We are using: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,r.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,r.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,r.kt)("p",null,"And edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,r.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,r.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,r.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,r.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,r.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,r.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,r.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);