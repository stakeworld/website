"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,A=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(A,s(s({ref:t},p),{},{components:n})):r.createElement(A,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},c={},l=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "),(0,a.kt)("li",{parentName:"ul"},"Westend: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io"},"wnd-rpc.stakeworld.io"),"  "))),(0,a.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,a.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"1050",frameborder:"0"}),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}d.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);