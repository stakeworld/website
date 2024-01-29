"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{640:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(5893),t=n(1151);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},i=void 0,a={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},c={},d=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Polkadot: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/statemint",children:"dot-rpc.stakeworld.io/statemint"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Collectives: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Kusama: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/statemine",children:"ksm-rpc.stakeworld.io/statemine"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Westend: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"live-stakeworld-rpc-data",children:"Live stakeworld RPC data"}),"\n",(0,r.jsx)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1400",frameborder:"0"}),"\n",(0,r.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,r.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,r.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,r.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,r.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,r.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,r.jsx)(s.img,{alt:"snapsize",src:n(9735).Z+"",width:"800",height:"300"})]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,r.jsx)(s.strong,{children:"what"})," to expose with ",(0,r.jsx)(s.strong,{children:"how many"})," connections ",(0,r.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,r.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,r.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,r.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,r.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,r.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,r.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,r.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,r.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,r.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,r.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,r.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,r.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,r.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,r.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,r.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,r.jsx)(s.p,{children:"We are using:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,r.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,r.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,r.jsxs)(s.p,{children:["And edit ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,r.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,r.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,r.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,r.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,r.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,r.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,r.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,r.jsxs)(s.p,{children:["After the ",(0,r.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,r.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9735:(e,s,n)=>{n.d(s,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABdFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr5fX1+/v78fHx8/Pz+fn5/f3993d3fDw8MvLy8bGxtjY2Nvb28TExMDAwMjIyMXFxePj48LCwtHR0cPDw9TU1Onp6c7OzuLi4snJycHBwdPT08AnnM2dgGCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAczklEQVR4nO2di7qjNrKFUV6D99nPoQv0JJNkuqf7dHJO9ssf3SVAAoPBFHj9/e02xoWEEcsqQaFqGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvAjFNFKJB825rL/Lke263VhrD8BrUFJoFHtQITMC6Xj2Zu0J3/Xr7AF4Dcqd41I9Zj4jEM6zN+gRwD3wAlGqkZ1iTcPMmc3Nu1YyZX7X9avs9GuvmGyjJOK7nrvPja8mwpvGfMZ4nz5udC/FrCcXyrOEtbLtmSUziFsAcBqpB5GKd5lA9CkrJNenK+v6jnXWGetbKeN2/p1Sfd8aD03x7E3cPK7RctELfSrPEtbqHqfXmI4sGoTPADgPKxB9HnaNO/ejQJR79Stk09uTOghk+K6xUuDZG/tJy9Ka3o5y+lSeL8avdS4ZZ31eof8MgPOwV7GsS2PO60wg5rWVjbCnacd6txDO7OE713vw7I0tTISff7tGtiJu2IVP/FpXnTCqSwbhMwDOw17Fsmer+xGfCsTRu3M6SCK9E0rqj7lTQXzjT3iR1vRuaBHLc+X4tda+96oKBv1gtALAGah4IaomEGEGB31T6UH0sKGPPUh6E3qQtKYxA3YmYnkRs9ZWx2XvSk4G9jMAzmMsEPu/TAJpwni6MgaxblTve5D0xg5h9Bgkruntia63YnmfENfq6jqvhVihyN8BcApjgXBprtVmAmll1wvF3XUrPriKZd71rNUfK2WvV/0rvglXseLHenzhr2KF8gxxrbnMy13HEQziZwCcx1gg9v6GFkYUiL0tYe9o+E8c8V0nmdKOk+5LpBTxDQv3QeKaLr8PwsNp38X7IJ0beohk0OE+CAAAAAAAAAAAAAAAAAAAAAAAAADujotW4sw9lG3CJrJoCRM9IblZgYe2wVvSMvOMhFROIC3rRBaxzRkXorNTiGAaD/CO9Mw8MdF17rkK97/i/sPwKHZcAcCboUK8q5WGe6w6PZqdza0DFwu8IVodU4GEB7B7lokCAgHvhxFELhD/AGsUSPZ0HAQC3g/Fm6FAOOvM1AO5QDr3WBAEAt6OTvYjgWiFMN6FMYhzu4ToIBDwjnA/Y40597PxRpue43av/UggDNDkZWdOxJ0i3dapKqpz9Rd/j80F18EHK6f6n5ndv4ydrqa1k9d4gXSDe4LCq2bcgzD/l96Nl2rr2ZLBsgUqeaCSl2EFIthW96I6V3/XD2fft0wFsm6q/9UCsZj+QrtRrBXCzhEi3HRP7jPtb4mOx5nVPEOB1Fi02KEIVLLOYneMQNwEeps3bypz9Q9m33drpgKpb15is0DcfJ5mbM79FOkeM8/gNNQEArlqJbuj7FR8tnI/g1+c5D7NnN+1TJ8+3L6La8Pm9kXl1mbSftna2feVLVqXGifnj9PwDzd3m8V9WJrr/2BMQ/yyaLVosUMRqCTnHIG4kzidnGGS+8HM+S1TXc/ztWFzg5ZYsraT9mtBKR5uyekRTpycP07DP9zcbZYEsjDX/8Gc0BDgAVa2y8cOVaoQxRdPzuEk93bmfOWnrxRBGNEnS3P1J2t7EnuBNG568D5NkzmYhj/b3K5PApmf6/9oIBCarGqXD8PTVSqmfHBr/uudBs2Ke+/cnKB9EIhZ6ze316G63Np+FgRiCuQqm2g5TKI83tyuT/swP9f/0cDFolnJGQIxI1h7VSeenGGS++HM+UEgca3fPMzVP7SOAjFS0IWlyfnjNPzDzX0lU4H40fVwrv+jgUBoVjIjkI8HWaxjhLuKZRyaeHI2bpL7bOb8TCCD2fOziWRH1lEgekGwptqDpBO+JpDiXP9HAxeLJif1IO4+SJhmP0xyn82cnwkkrU2bN03TjKyTQFplLvdmYxA/Df9w81C934eluf6PBgKhyVkCMdeK4jT7YZL7NI3+oAeJa7PNm6YZWVuBqN6Kxv72x6n6S1ex/AZpqv/Fuf4PBi4WzUpOuYrlXrQg4vT5/j5InCd/MAaJa/PNm7G1+d/Mvh9NYumscB/Eb5BZLc31fzAQCM1KbtmzXzFK9pYNcQNu2C79q8bVu3LDhrgF92uXbhD4dBngYtGs5MUCKQSby7bmExV7giej3Q8Pd98KBEKzklcLZBps/phAYiD7XLT7NNy9IJBXhLtv4H5d+T14uUDsy3jum2WBxED22XD1Sbh7SSAz2y/sxJFAIDQ5RyDm5oW5mBru1Jk/wboUwB4jzb2VDWQflzAMdze3QbTVr/PR7tn2Lkge4e6oZI7TehBzg64Lt9P1X291EALYQ6R5tFJ8UsIo3F06q4Vo92x7FyRPKdz9PqfVfSpZKZDPdeYTYrC5m0CtZUEg2SOGkscoj2Sl+LiEZO3CQbxAFqLds+3dqY9wdzDHqnb5NDxVXQw2j0HlXiAqjQkUj3GCyUqvHJWQrF00YhDIfLR7tr2TJKVwd0CPVwskBJs7T0j4qT0kc4EkIYA9RJonK8XHJYzD3YNA5qPds+1lNu8hwt1RSZkZgXw+yGIdGVko7qAHUcKc6DGAfa4HiSfsKNw9CGQ+2j3bviqQ08Ld73Na3aeSl/cgfmE8BrHzRMUA9qUxiGUU7h4FMhvtPhEIwt3BHGcJZHIVS6/Iwt1DpHm6imUD2QcljMLdw1Ww+Wj3iUAohbsDepxxFcsxvg9irmPFAPYYaR6sfCD7oIRhuLu9l2Kt5qLdJwJBuDsqmeOOP1xXjHaHQIhWcj+BnB7t7jq9PlwMS72gp5zE834NcQ9u1y6nR7tz2QkzbDIxkcKINawIn5eTeN6uIW4C2mVnensP0/di5oHhwYp6Ek+4WOdV8vFRf5YcAjkEHxjA1WjFNJA5AIGcVMnC9FUQyP4Yz8pecgvTQsYVM0k80RCv56NZnt8N7bI/ehDu3KjQgcQVM0k80RAv5sEZENEuR+DvSyYxxBuV1SSecLFeWMlHadrQsikEcgg20LFjoxWGWhJPCORVlaybQhcC2Rs3r7bNLKVGKwzhTn4piecvukHxd+RfVRwfRftzknjeGxcDbGMj3fmfrXBvnSpKPQg4lE2zr6Nd9kbZ+4K8iUOQtMIyk8STsmNy9Uo2qaOBQPbHTiVhBxpeIHGFp57Ek95pdY9K6uJYLgICIQIa4iC2dh0etAsR0BD7U7yau0IcBrQLEeBi7VxETRsDdcDFugwQyI5F1LqODZVAIERAQ+zFk4OOEWgXIqAh9qAqjs2p0dAuRICL9WQR1RH5nDbgYl0GCOSJIuriWOg5IJDLgIbYSFUaOyRkbtAuZEBDbOFgdTRoFzLAxVppMONWRXHs8E0gECJAIKsM6trIuw4I5D6gIR7kY/OIfBNoFyKgIZaZuZJ7iDgMaBciwMVaMNgyHIeLdR8gkBmDrV4VBHIf0BA16l3HUW5VDtqFCGiIEueKw4B2IQJcrInB0oj8Jd8EAiECBDLgkY4DAnkn0BCBTWG5h4F2IQIawnH2mGMM2oUIcLEMq8QBF+udgEDK6ph5FhACeSfevSEouVU5794uZHjrhqCqjubN2+UYQlLbmNxWqAez3NL1fo6spCIOIt8EAtmbkNSWs060Zir3XvK+k49kuSV37h5eyUzPQeSbQCA7E5PaWkmYFCE2TYjwOQpns9y+GYQdq8QbtssrCEltWzl0pOaz3L4Tl1BH837t8gqypLaKmywInIUUhfNZbkl5P0cW8Yg6iHwTCGR/UlLblvVaErLru6CL2Sy3FM7d4yspqmPLtLkQyGXxSW1bo4ae8SalYJvNcvsGPKgOOrxJu7wam9SW2+yEThLikSy3d6eoDcrqaN6jXXan1ye74IqL4ofmP6OHlrnPrSR2ynL7y1Im1192yAa7QxmF/Sypg+J+5n/IcruFXjLWCiaVZAWFxKS2XfjUXtFqZfy8nuX29OHBcZWs96uIfBMIZDVcdi1T5txWqvBxSGoruTAYSXDRpYtXM1lu78rFhh0D7twuB2HuBLoxt5CFj31SW8Ec/STUpJ7l9p5cWB3NndvlMIzr5KQhdjx693Wxyuq4yjeBQFYDgawqotJ3XOWbQCCrOU4gd+SinlXkru1yIExq7H8SApnHiuIC6vjU/yrcsl2ORWXsV+rtXKxMFCV1kPkmn4GyBQRChHsIJEni6dscL/kmnxllCwhkI+4ex35cviHCdFaPqIMGnyOKRpdvlxMQvHGhIXzHQi/dEB+XG4uPxYEeZD8EM0MPZmLYd+xDLuxiFe5zUP4mnyV1QCD7YR+htRd7Od+v1MsKpHgfkO43KYujJg8IZAP2oXMrkK4UarKRKzZEcRbds3dqlrI2quportkuJ+McKzMjyTvfKCxIg7o8VvUcgau1CwHSyGPvHoSuYzI2WJIHvW9SVgdCTQ5A8bDE3/FGYS0N8967sec3qfYdEMgBdGlKhp2vYtGn0nNQdq02OVaJa7QLLThTbde1krXLtg9zgYaoioOuPJ4Th+EC7UKPTprbhGr3O+nEHJMB67oOEt/kgb4DLtZB9H2/bLQKugKppUSb6zjO/yaPeVYQyGWg2hDXG3TUbgZuK4tqu7wdNBui0nW8jTyotssbQs3FmruaS+ehkyklbdTVARfrMpASyIJfRVggK3sOCOQyEGqIC446HLv5VRmE2uVC9FzZZ9JvF6z4UR12nL1nS+w36hhCo12uhpK8texXJAEXq+ZYTcRBzsWqDTsw7c9JzMaYuOSdfZpZ0azINqCZxLMqji0TLrzym8xdsYJATkLO3CYMyTvtzLxc2iwhgidJ8XoSz/MoS4O8X7VDKMkSEMgW5nyrmLyzcTkOXPoDxf3H9JJ4lq/nnrY7j1NSx976gEA20Uk1Pwbx2Q6MTvqQD8Exl8Tz9S7WtgtWFFyssjrWhlrBxToGGagZKG7+t9pwAul8Ah0ySTxrNwI/bFqbnSp5xmLGoKKNDaFWEMg5tE4OfnoH63NFgcwk8XwZ9ctV1F2rypQks4+VPwUEcgCtV4F70aP2vpUDgZyZxLMmDurSaB50q3YGAllN2zdtoGgQLll1LLxnPCzPJvE83sWqqiOXB00Xa4s64GKdgezmxyDxSdz8kfWYo1D5hROSeNbV8fFwGfskx1z7V5vr7ej9RBLPA0jzLfrzvxvcE5xL4nkgdWmQd60qXcexnlUEAtmbmLzTD0EaLs0Nw3hP8IwknheVRlN3rF4kDwhkd1LyznjBikumsnvm9SSeB3jutejDOXFQGYMsdR0vuSoOgRDhEIFs86pICOQBvwoCeSd2b4hH5nejyqmjjiEQyEb2ntZk54ZY7VeR4dwx+QQIZBNmZqy+4TuKZD8XqzpNz4NFnOlirRIHXCyymCtRWiCK71fkTgIpayPvO+gKZG3XAYGQxaQI0QIRxRuF29ijIWrquIBrVdHGWY5VAgLZggmsshdydyzy2QJq0riuOkgAgWzB9yBk8oMsDDseKWKNxa4uVs2xetHNliUgkC20rBVMdLL6wNR6tgtkpVtFSyB1xwoCuTKtvVtOIP3BZQcdHqKOVQIC2YgLt9qPDQ1xdXE0E32cvTsFIJBnODFPekUdRByTBy3m1EHkm0AgW/DBh3tfxXq0xSvi+FhRxFMWO1ViNFHvOoh8EwhkC0zaSN0TLvPWp1rYb1deQlQFSccqAYFsgfWc8dffB6lp4yLiSDf+aA43ikAgW7B30aV4qYv1mDqIOCZTi2yoYdVBIqYeLtZBmDvpphN5lUAeTxNI5LQaWRSuVUEgd8bN4dPt+UR/taiL+1XNFa7lzgCBbMGHuffdvNkayg1RFcd15HFtfUAgVJi4WNuuVxFxTHKLskDgYt2WxYnjNjESyFa/ishplVlMo6wOqGSrBQRyAEsTx20jNcSVb3UMHahL+1YeCIQIriGqI/JLqCPTwXjxovKAQMjAZjqOJA6yjslooDHqSXaqZH8LuFhHIGyYiZJqx4tYH+yhjoPoaTXRBp2Ar2eLgEBWIxhvTA4drsq5PF0Sz/SaFhylJJ4fZYEc+TV243M2KPfqQCCrUWbSdmHuFSpe+Dgk8eSyE515piouhM8LSTwLAjn+i+zB2LWCQIBN6WxTGxRnNfFJPHvz3LoWRxMXHMUknh9jgdTqpuWYTNXx8F0OYt+kDgSyGhtnYmUgqkcvpANRIUVIXCgn8UwCmb9HTue0KohjTYJyQt9kHghkNTJm5qzPi6W4+Vhw29ukhWoSTy+QI3b3CObVcSsgkNUoHjymVlVMXBJPPRj37hSLqTtpJPF8hqI47iqPC7ULHQSTyp7mLatc540fCMlHC7NJPOk7JhV1TORB/5s8WgQEsh7BuRWAvdxbgKfLvyE9elo4N4nnExa1PIHFvoP0N1lVBASyncrc7j6Jp/3UXA2OCxblxy3bknie9FcVx+f5+3bkH5J4HoBP4insS8vSguOkJJ4b+axLg8LM0i+AZrtcmZDEU9n7g7xJC46ZJJ7UHJOqNhYH5dS+yfYiIJCdiUk8e+4jTOJCsHhlEs/tFjPaWO46SH2Tp4qAQIhArCE29hz3g1i7vC+UGgLqSFBql7eGiIs1c71qv0oesiBSCQRCBAoCKQ84pmMOIucuBPJOnN0Q8KnKnN0uwHNmQ2DIUQcCIcJpLtaGETkR7wcu1jtxhkBmRuSzvQeRcxcCeSde2hAzASTwrIZAIER4XUPMaQPiGAOBEOE1LtasNq42bS5crHfiBQJ5RBxPV7KbBZFKIBAiHNoQGHNsBgIhwnENMTvmgDoWgECIcIyL9dCY49lKjrEgUgkEQoS9BTL3LOCzTzsROXchkHdiz4bY1G+AIhAIEXZqCAzHdwYCIcIOLtacND5vOG0uXKx34kmBPKSN+SIetyBy7kIg78T2hljwquBXPQUEQoRtDTEvDWjjeSAQIqx2sWY7jpl+4z7eD1ysd2KVQJ65VnWfcxcCeScebggMOF4KBEKERxoCNzleDwSyP5wNk9sKtZjldtnFmpPGvrnPLuP9wMW6JEIqKxAuRW+ncu8l77ukBV7KcjsvkBVeFZHT6j6VQCB703UuSY5XSUiIG3LqFLPcNtWGgFd1MhDIAQwFkjtStSy3xYZ40KsCRwKBHIDVRitFI3R30bOOs5CisJblduJirfCqBhBxTO5TCQRyAE4EnDE7BGGy67ugi9kst665nvKqiJxW96kEAjmANEjXEugZb1IKttkst4iqogcEcgCu43BK8AtiMcvt/IAD4jgJCOQAjAhc7k6jCyuJhSy3n58zAskyr/6ylJn1lx2yu+5QxuJ+7vF3/H4iy+0xDHqQRpnrVq3XRSXLbUUg6zNzEPHc71MJBLI32n1irc1ya8Yg3EiCiy5dvCpluf0sCeSUvQcjIJC9UT7LbTXUpJTldiyQl+81qACBkCAJ5MnEA0Qck/tUAoEQgWlp3Oe0uk8lEAgR0BA0QbsQAQ1BE7QLESikgUYlUyAQIkAgNCuBQIiAhqAJ2oUIaAiaoF2IABeLZiUQCBEgEJqVQCBEQEPQBO1CBDQETdAuRICLRbMSCIQIEAjNSiAQIqAhaIJ2IQIagiZoFyLAxaJZCQRCBAiEZiUQCBHQEDRBuxABDUETtAsR4GLRrAQCIQIEQrMSCIQIaAiaoF2IgIagCdqFCHCxaFYCgewPj/OMSmn+7ySTWVaQbUk8HVc5re5TCQSyNyGJZ2Om4TUC6VjXtyzkKJxL4gnogXbZm5DE00zwblIUun6Ch9SEK5N4gpNBuxyAF4hqTdKD3nYeXTjQc0k87+OY3KcSCOQAnEC0OoxAXOoc4X2sR5N4VrjKaXWfSiCQA3Bp1rQkjEBc39FHgcwk8VxujEWLHYpAJesswGqsQBRvqgKpJPEk0uKoZJUFWI0RSCf7puBi1ZN4NnljlJZq69mSwbIFKnmgErAbRgTcJZpi7WiQrqR77ccCATR59cnzDtgknobWdCOSNz6Tp6GcxBOAdyEk8TS0hRuFpSSeALwNMYlnE5I/j0JNSkk8AQAAAAAAAOBweAhJYX4wYkYqYcDihzJm2S3ysYUezLA/3aamCDEpwhj8+JEsJpX0/krm736HXHT+sAy94Z9uUZdW2E9j8OPr7G6MLFIZ8cEAbfrf0TMCQwP9GoqrFGEq8d81PW8wtvhz5mA4S2dcO+JpQ3A4ISyey050PjilT5e8FBdf2Jd/mWW9qOnHFr38D/v3V1NIyzrB7XWykQH/H/YHb7UF1xbttBJd7LevX4fR+UMLLvVeMBOcr0vrOzkpQtf9nbFvbX03MovhbsQHAzr25TfpzsfBXgQD8/qPL45L0YtpEbrk7z8YNwcyPW8wsvhLF2LeVI64sfyhfBRE8Yin3QfH48Pie/crZ06KVmWx8XohLKcfrYEFV3pRCL0YQ1vGBnpZiFiEDbkfWJjd+JsNo/OHFqyV5ozSi9beXr4eGehlXXd9NzKL4W7EBwNkaxblZC+CgXn94Tf1PyrTIvSBNHsps+cNRhbmmyiuakfcWP7jjCtHfPjgAjic9GNk7yOqNouNl+kWfGqukYVd10q3qmUVA3+x2b8OLAw8/N666PyRBfvd/mpX9yLWXd2NzGK4G/EIOAt/zzrbi/wQsVBcEsjIwpXsbsjGbzS1CHsxPeLOciSQyeGKXwMcj2853QtY1103RArcYvxX9ltrlxkP3n9u0bOOM8n1T3Zowb5sEJ/Nsq+DShp7dg6i80cW7VemPZpOsJ+htHElvu6Z3YgWw92IR8CZOgnke5EdooaF4lppyu6mFppfv7sDGdZNLXQHwmtHvEkCKR/xbPfBSwg/dMw2uGB56K9U/2bG39XLUnnXd2DR64Fj32mnuve/qsbhLhi0rbtp2djXYSVN8lpCdP7Y4i/G7F789KWNDXzdv1d3I7cY7EY8As7UCmSwF9kh8v2L+Zgz5mU1tDAlM/8wgVtXsnB7UTziTdaDFI942n3wGmLLCfPTbD3mrDH0csuyhhlZ9HZUq0xLczOKlLrlCgZtOGla+zqupGHdMDp/ZMH/0D2Icfd++tImBq7u+m7kFoPdiEcgE8hgL/JDFAViB+nm131sYUsWvo9zfeLU4p/wOE7xiEeBlI942n3wGlJjGMdEtcPYeGGcmz507WJs0btz0r7VL9y049Sg+c5+2u3d5aVJJXac0WbR+eMyvtjLONbFKu2Fq/sv3xuVdmNgke9GPALJxRruRX6Igov10z9PM7XgycPz66YW31NIXOmIDwVS+K5h98FrcL6NWdKN0AcXI/vN0q0YBofdxMJeWP0We3x9Xk0NTAfiosLiiGNYib/MNIrOjxbmjDRe+N8snsuTIkzhX+N3mu5GbpHvRjoCcZA+ekagyQXiiou/HWOL1v0QiCSQqYU/vatHfCiQ6RFvWujjpTgv145Nmf71NKusi2CusNg4ec7Msm1QPrFQqjNjVv2uM0Vot2NioJvVXTTtfMuOLNz1mkF0/tBC90J6UY90lLPX1Y2K0HV37Ku7nVHejdxisBtNOHetqbnMO9qLJhPID1dceCJzbNHpnwp/IMO6icUXV3vtiDdJIJUj3kEfLySExSt724o3nJu14aaUHkCIL4z93tqxhLBDxqGFbuj/fv9iPjM3z7Rv3k8N+Ne/jIEe8ts7X2JsoU+Jv0fR+SMLZW4U/var7Ua4vb02MtB1f/3P15+ivhuZxXA34oMBHfv7p50ubLQXwcC8/sO+2OKUHYPwcRG65F+/fvlmDmRYN7H4+v3bt2/VI24t+TdjXDviYffBKwhh8T138Qs+3CGENZig+D/+sMs2Pr6bWDTfWIis10WofmogfvUWP4Pl2KJn/zuKzh9bTEJNxgb869JuRIvRbqQHA7r/K+5FMPCvg1CToYXwFubCuCpWEizqR1wli/IRD0XgMhYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOP4f6QEpnoJIlzvAAAAAElFTkSuQmCC"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var r=n(7294);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);