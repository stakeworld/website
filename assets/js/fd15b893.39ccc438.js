"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "),(0,a.kt)("li",{parentName:"ul"},"Westend: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  "))),(0,a.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,a.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"700",frameborder:"0"}),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}c.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);