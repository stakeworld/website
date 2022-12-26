"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>A});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),A=a,h=d["".concat(l,".").concat(A)]||d[A]||u[A]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function A(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},p=[{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs two public, multi location, load balanced archive RPC servers: "),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Polkadot: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,a.kt)("li",{parentName:"ul"},"Kusama: ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "))),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network a can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:r(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,a.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,a.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,a.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,a.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}u.isMDXComponent=!0},2307:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);