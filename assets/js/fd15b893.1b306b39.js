"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Polkadot: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AssetHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint"},"dot-rpc.stakeworld.io/statemint")),(0,r.kt)("li",{parentName:"ul"},"BridgeHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub"},"dot-rpc.stakeworld.io/bridgehub")),(0,r.kt)("li",{parentName:"ul"},"Collectives: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives"},"dot-rpc.stakeworld.io/collectives")))),(0,r.kt)("li",{parentName:"ul"},"Kusama: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AssetHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine"},"ksm-rpc.stakeworld.io/statemine")),(0,r.kt)("li",{parentName:"ul"},"BridgeHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub"},"ksm-rpc.stakeworld.io/bridgehub")))),(0,r.kt)("li",{parentName:"ul"},"Westend: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AssetHub: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint"},"wnd-rpc.stakeworld.io/westmint")))))),(0,r.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,r.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1400",frameborder:"0"}),(0,r.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,r.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,r.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,r.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,r.kt)("p",null,"An archive node requires a lot more ",(0,r.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,r.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,r.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,r.kt)("p",null,"Via the node startup settings you can choose ",(0,r.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,r.kt)("strong",{parentName:"p"},"how many")," connections ",(0,r.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,r.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,r.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,r.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,r.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,r.kt)("p",null,"If you want to enable php"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,r.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,r.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,r.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,r.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,r.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,r.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,r.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,r.kt)("p",null,"The number of connections is limited by the node itself (",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,r.kt)("p",null,"We are using: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,r.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,r.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,r.kt)("p",null,"And edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,r.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,r.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,r.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,r.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,r.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,r.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,r.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);