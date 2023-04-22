"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,A=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(A,s(s({ref:t},c),{},{components:n})):r.createElement(A,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "),(0,a.kt)("li",{parentName:"ul"},"Westend: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  "))),(0,a.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,a.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"700",frameborder:"0"}),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);