"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={id:"rpc",title:"RPC node",description:"Public RPC server of STAKEWORLD",slug:"/rpc",sidebar_position:4,keywords:["rpc","wss","ws","polkadot.js","validator","polkadot","kusama"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC node",description:"Public RPC server of STAKEWORLD",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC node",description:"Public RPC server of STAKEWORLD",slug:"/rpc",sidebar_position:4,keywords:["rpc","wss","ws","polkadot.js","validator","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Linux tips",permalink:"/docs/tools"}},p={},c=[{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Stress testing your RPC server",id:"stress-testing-your-rpc-server",level:3}],l={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama ecosystem. Stakeworld runs two public, multi location, load balanced archive RPC servers; ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")," and ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  ")),(0,a.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,a.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,a.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,a.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,a.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network a can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,a.kt)("p",null,"An archive node requires a lot more ",(0,a.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,a.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,a.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,a.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,a.kt)("p",null,"Via the node startup settings you can choose ",(0,a.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,a.kt)("strong",{parentName:"p"},"how many")," connections ",(0,a.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,a.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,a.kt)("p",null,"The ws port is a way to access the RPC server is preferably exposed from the outside as a wss port and secured with a SSL certificate."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss")," on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a proxy. So from outside one see's the SSL enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,a.kt)("h3",{id:"using-apache2-for-proxying"},"Using apache2 for proxying"),(0,a.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,a.kt)("p",null,"If you want to enable php"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,a.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,a.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. There are multiple ways of obtaining a letsencrypt certificate, a popular being certbot but we are using ",(0,a.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," which has more dns provider option."),(0,a.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,a.kt)("p",null,"In a virtualhost add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLCertificateFile <cert.crt>\nSSLCertificateKeyFile <cert.key> \nSSLProxyEngine on\n\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,a.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,a.kt)("p",null,"The number of connections is limited by the node itself (",(0,a.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,a.kt)("p",null,"We are using: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,a.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,a.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,a.kt)("p",null,"And edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,a.kt)("p",null,"Be carefull when running behind load balancing server (for example cloudflare) because the the load balancer will only use a few ip's and thus can trigger the rate limit, better to use the rate limit options from the load balancer."),(0,a.kt)("h3",{id:"stress-testing-your-rpc-server"},"Stress testing your RPC server"),(0,a.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,a.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,a.kt)("p",null,"After the ",(0,a.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,a.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}u.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);