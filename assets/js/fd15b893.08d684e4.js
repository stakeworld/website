"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[961],{640:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(5893),t=n(1151);const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},i=void 0,a={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama","westend"]},sidebar:"tutorialSidebar",previous:{title:"Database sizes",permalink:"/docs/dbsize"},next:{title:"Linux tips",permalink:"/docs/tools"}},c={},l=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsx)(s.p,{children:"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs multiple public archive RPC servers:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Polkadot: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io",children:"dot-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/assethub",children:"dot-rpc.stakeworld.io/assethub"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/bridgehub",children:"dot-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Collectives: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io/collectives",children:"dot-rpc.stakeworld.io/collectives"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Kusama: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io",children:"ksm-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/assethub",children:"ksm-rpc.stakeworld.io/assethub"})]}),"\n",(0,r.jsxs)(s.li,{children:["BridgeHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/bridgehub",children:"ksm-rpc.stakeworld.io/bridgehub"})]}),"\n",(0,r.jsxs)(s.li,{children:["Encointer: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io/encointer",children:"ksm-rpc.stakeworld.io/encointer"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Westend: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io",children:"wnd-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://wnd-rpc.stakeworld.io/westmint",children:"wnd-rpc.stakeworld.io/westmint"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Paseo: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io",children:"pas-rpc.stakeworld.io"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["AssetHub: ",(0,r.jsx)(s.a,{href:"https://polkadot.js.org/apps/?rpc=wss://pas-rpc.stakeworld.io/assethub",children:"pas-rpc.stakeworld.io/assethub"})]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"live-stakeworld-rpc-data",children:"Live stakeworld RPC data"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Monthly data can take a minute to load"})}),"\n",(0,r.jsx)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cef69420acd44165be7df9ad65c7cd89?orgId=1",width:"800",height:"1600",frameborder:"0"}),"\n",(0,r.jsx)(s.h2,{id:"setting-up-your-own-secure-rpc-server",children:"Setting up your own secure RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.jsx)(s.a,{href:"./validate",children:"setting up a node"})," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.jsx)(s.code,{children:"--ws-port"})," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."]}),"\n",(0,r.jsx)(s.h3,{id:"archive-node-vs-pruned-node",children:"Archive node vs pruned node"}),"\n",(0,r.jsx)(s.p,{children:"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc."}),"\n",(0,r.jsxs)(s.p,{children:["An archive node requires a lot more ",(0,r.jsx)(s.a,{href:"./snapshot",children:"diskspace"}),".  For an archive node you need the options ",(0,r.jsx)(s.code,{children:"--state-pruning archive --blocks-pruning archive"})," in your startup settings.\n",(0,r.jsx)(s.img,{alt:"snapsize",src:n(9735).Z+"",width:"800",height:"300"})]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Inclusion in the Polkadot.js UI requires an archive node."})}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-rpc-server",children:"Secure the RPC server"}),"\n",(0,r.jsxs)(s.p,{children:["Via the node startup settings you can choose ",(0,r.jsx)(s.strong,{children:"what"})," to expose with ",(0,r.jsx)(s.strong,{children:"how many"})," connections ",(0,r.jsx)(s.strong,{children:"from where"})," through your rpc server."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"How many"}),": You can set your maximum connections through ",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),", for example ",(0,r.jsx)(s.code,{children:"--ws-max-connections 100"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"From where"}),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.jsx)(s.code,{children:"--rpc-cors"}),", to allow access from everywhere you need ",(0,r.jsx)(s.code,{children:"--rpc-cors all"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"What"}),": you can limit the methods to use with ",(0,r.jsx)(s.code,{children:"--rpc-methods"}),", an easy way to set this to a safe mode is ",(0,r.jsx)(s.code,{children:"--rpc-methods Safe"})]}),"\n",(0,r.jsx)(s.h3,{id:"secure-the-ws-port",children:"Secure the ws port"}),"\n",(0,r.jsxs)(s.p,{children:['The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/maintain-wss",children:"maintain wss"}),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."]}),"\n",(0,r.jsx)(s.h3,{id:"using-apache2-for-proxying",children:"Using Apache2 for proxying"}),"\n",(0,r.jsxs)(s.p,{children:["Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/event.html",children:"event"})," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you want to enable php"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"apt install php-fpm\na2enmod proxy_fcgi setenvif\n"})}),"\n",(0,r.jsx)(s.h4,{id:"enabling-ssl-through-letsencrypt",children:"Enabling ssl through letsencrypt"}),"\n",(0,r.jsxs)(s.p,{children:["There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.jsx)(s.a,{href:"https://certbot.eff.org/",children:"certbot"})," or ",(0,r.jsx)(s.a,{href:"https://go-acme.github.io/lego/dns/",children:"lego"})," (which has more dns provider options)."]}),"\n",(0,r.jsx)(s.h4,{id:"add-the-proxy-to-the-apache2-config",children:"Add the proxy to the apache2 config"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html",children:"mod_proxy_wstunnel"})," provides ",(0,r.jsx)(s.em,{children:"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"}),". In a ssl enabled virtualhost add:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n"})}),"\n",(0,r.jsx)(s.p,{children:"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n"})}),"\n",(0,r.jsx)(s.h4,{id:"tweaking-connections",children:"Tweaking connections"}),"\n",(0,r.jsxs)(s.p,{children:["The number of connections is limited by the node itself (",(0,r.jsx)(s.code,{children:"--ws-max-connections"}),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-enabled/mpm_event.conf"})]}),"\n",(0,r.jsx)(s.p,{children:"We are using:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-apacheconf",children:"StartServers\t\t 4\nMinSpareThreads\t\t 25\nMaxSpareThreads\t\t 75\nThreadLimit\t\t 128\nThreadsPerChild\t\t 128\nMaxRequestWorkers  \t 896\nMaxConnectionsPerChild   0\n"})}),"\n",(0,r.jsx)(s.h4,{id:"rate-limiting",children:"Rate limiting"}),"\n",(0,r.jsx)(s.p,{children:"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"apt install libapache2-mod-qos\na2enmod qos\n"})}),"\n",(0,r.jsxs)(s.p,{children:["And edit ",(0,r.jsx)(s.code,{children:"/etc/apache2/mods-available/qos.conf"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n"})}),"\n",(0,r.jsx)(s.p,{children:"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."}),"\n",(0,r.jsx)(s.h3,{id:"load-balancing--failover",children:"Load balancing & failover"}),"\n",(0,r.jsxs)(s.p,{children:["With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Round-robin_DNS",children:"round robin-robin dns"})," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare."]}),"\n",(0,r.jsx)(s.h3,{id:"stress-testing",children:"Stress testing"}),"\n",(0,r.jsx)(s.p,{children:"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance."}),"\n",(0,r.jsxs)(s.p,{children:["There are also more dedicated stress testing solutions, we have forked the ",(0,r.jsx)(s.a,{href:"https://github.com/dwellir-public/artillery-engine-substrate",children:"Dwellir repository"})," for our testing."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n"})}),"\n",(0,r.jsxs)(s.p,{children:["After the ",(0,r.jsx)(s.code,{children:"run.sh"})," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n'})}),"\n",(0,r.jsx)(s.p,{children:"After this you get some info about the run and a report is created, which can be used for further diagnostics"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9735:(e,s,n)=>{n.d(s,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABOFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr7f398/Pz+fn5+/v78fHx9fX18AnnMvLy93wofgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAbcklEQVR4nO2dC7ajKhBFsafhfDIOULxv/jN48hWNAiIgmrNXp2+iWJIKJxQKFUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8TPz4lQvvz9k9Wx6AOrBuhrMhsrhHIMPkvECDB++AiTZO+y5SIR6BTBAIeB9MtXHGCB9YR0gnWvYkXvW8Y3R+Mf/lQj6Udby3krCv6KT2i65oNC+I2NdNdNlNxrmA7KiMPYnZyvuxk9ClgD0CgNtwBCJbpRXI3AdQPncKfTeSQXQwjFPac26P06/YrKJhLkPY5LyYD6cjd7cIw8Pc/q09idmqe5y5GksBsw+A+1hCLM7EaysQpv7qDZxQ2aiNQNaviJTC5LyQh/fdsoUKkSwnsGb0ViWQnlP3hGORdwzACeQgXUU5soFbgYi/PSejbKZDp5+Ylr1+pXqPyXkhDx/N17/cMkdR9sDBSkdtNeVHt4DZB8B9MDvOVl/i3wLRYwMV7BhJLK/EIKPrtEDsC9vg7RaqhhbWnrKjt8ryVB9kCtDVaAWAOwgLRH+LH/QgVI7kdQ+yvDA9yLKFCPl04/gVOImtsjxji2V3HwD3sRWI/J8vAiFmPH0wBpHtmeoeZHlhxiDLFsl81M4FZTEA6ufS1Lxa7wPgPrYCmeTVKUcgPRdx0nR0FYvOXc7IxJf//FheiEtioxyb6y3jbEZdxTL2BHaruMyrpWAK2H0A3MdWIPL+Ru8IRN6WkHc05J7VfRDxauAdmwOnuS/h3WhfdP3UyfsgdstsZn7m2JOYrVyUFwxLAXsEAAAAAAAAAAAAAAAAAAAAAAAAAMBNYLE0+D3Uqh8xAa7v1IwisRLakcIwl+AT5vWA38QsZqNMC0SshB47qxDGh/k11haAH8V0FsOoFvyQWQ/OglCz0mCaEGKBX8Rp9Uu3sQiET7tFAfgRuomZIcciEGq0QB3RQCDgB2ETlevXiCMQqpY4E7M8VAOBgB9Frc40AqHc6EP3IIO40DVCIOBXGV2BjJ077tBaoRuBdAA8gqvaEMrQefz0fRB32CGTWe4KZGXE98q/84ylFuwm7/TXtkhli5jJ9p5z1eBUMzgP7eQYZMnrtGT5U0xdTwkdOKcegVwhn6UadgvVtohZeCCH3ZEtGcZnKNU9EzUFBlGAqbTjGc9bwFINu09qHvBAQbv1zvsvm6UadgvVtohZeIBAILXtPql5wAPkDQIBoCAQCAAeni8QhFilzMIDBAKpbfdJzQMeIG8QCAAFgUAA8PB8gSDEKmUWHiAQSG27T2oeL/fA5xNT6vkCAeAsn1kdknBRCAT8Gp+FcOHnCwQhVimzL/TAx1VHlEIgkLp2IZD7PPD5JnxQTYGUme4OQJivrqOmQKj8geLRZDexTxQD28usCIGAauxqI0oeeRrq1HG10lauLLRPFAeZFRFitW/2HR64og6SpaEOXPxm9ySyM4yj80RylFkRAmnf7PM9cBBYxYpDcL2h0m4UArEJsNxMWMeZFRFigcJc7Do01xvq3OxngdBuHmsINdgnksPMihAIKEgecQguN1QRUUmB8FFmWLRPJIeZFRFitW/2oR44EkeCOsj1hipTxkmBqBSKyxPJYWZFCKR9sw/0QF5xCK421Eln+ellVyHkYp9IfJkV/81vCg88cj0O1ZFsM0dmRYEYpMt8caLjsE/UrqjMigBc4uhy1ZW+Q5FNIGM3qKGHfaIonlnxXzZLNewWqm0Rsw/xQDlxCLIJhAzmpwmH7W8Uls2sCIGUMvsADxxKY1ZNnjM8f7Ii+FHKi0MAgYAn4lFHXp4vEIRYpcy26oFq4hBAIHXtQiCXrHoG5CXUQd4gEPAjHEujlDgEEAhoHm+/UVAcgucLBCFWKbNNeMDXb7jaKNUMIJC6diGQaKu+fuM7qoJAwO/wCYijcFjlAoGApghJo6Y4BM8XCEKsUmareyDYb3jEgRDrCAiklNmqHgj2G4GeAwIBr+WaNMoCgYA7CV2qulUcgudnVkSIVcpsaQ/47/+dlEbLIZbKrEh6ncGk5x0flr2lMytCIKXMlvSAv99INpuffJkVmRbIxEcyLIkUi2dWBE8juzhKki2z4jASKRDaid5j0rkaKmRWBM/BewPw/vHGHtkyKwpbQgCj7Ct6Y7d8ZkWEWKXM5jRa/Nb4+cr+/cWUypVZUdpaehDTcVTIrAiBlDKby6hfGpmiqjOVnaXxpwiXzZVZUdpaxiDcCsQZriPE+kFqiOMMfyvC5XNlVpS2lAAm3k3DqgcpmlkRNItfGtXF8bdRR5RCsmVWJFYgAi2ZGpkV/xXK1FfKbpHHvwbq4D4+/wIdR+06/f37FofQh/+4nJkVrUAGMUhnZmxePrPiv2yWatgtVNsiZhONBvqNQh2Hp7K70qg2BhFsxiDUjtFJhcyKoBnaWcVh8Yij1lUsonPzqlCLyjEIc24Lls6sCBqgxSlVe0MOK404dZA3TFZEiFXKbKTRk/1GFQ94+41YbUggkLp23yUQvzL2u47iHrgcVa14vkDALYSXxt5wjyOzOAQQCDhLSr9RHL800sQheL5AEGKVMrtjNEO/UaCqXnGka0MCgdS1+1yB5Oo38la1RFS14vkCAaUJZqm6aRVHqahqBQQCfDQ53iCVxCF4vkAQYpUx+wnNp0rsN65XteSQ4wsIpK7dZwikZL9xqar+u+NXLB/xfIGAnLQ63iC5bwDGAoEAQ6vjDXKXOARRDZVSQkYmJxxWPW8UCLGumw0nxc0njbNVjYyqSjWDiIZKeddNtGNsm7qn8HkjgUCumI2IqDJ3Gyeq+ndiyHGjQCY+DJz1hPQsXNgHpru3Rr1+4zTeoKpsVLUioqHyUS89p3xnL514N7d82pn1IHqDpXRmRXCejxqMN5qkqvjd8TNENNRu/d8GzugsHy0IkeJktaFCZkWEWKfMhn+8yfYbd3jALw2POG4MsfwCGSkRUZh6LvoZd0ONzIoQSKTZmCu4q36jtgeSxeE3e43LApHoTKOs32yokVkRBImYg/u5NytuU1HVihiB8Bn130EJnat6sKkabPLqCpkVgZeYCer3JsXNs3a8FBENlS3s7+86dYfECMBuqJJZESHWgdm4fqP6z/6trObrN24MscKMMpAal1w/o4msKmRWhEB2zEb1G6HruEU9kDuoul0g4zjSw50yuOr5ZoOgfGZFPFaPmJH45+Y6+qXxd7sP7SMys+I4qRa9exukp0YPqtdwNgjKZ1YElpozRlIJiOPu6n0R0VDHTgqEUveH1QyUT3SOqEQ/0Q2bDZLimRX/ZbNUw26h2gaXbqSMxHPXteilqlLNIGaqyaQLDnuDdHnjfNaEHY/bDZrSmRV/XiDFJqhnq+uff1bVZXEIbhTI/N2vCu5ONSl3XhCkRL+RG68wmoyqVsTeKCRDXOGM5wUeGl7YtOLR4hDECITqJ232IL8WYtW783exrnWXx94YYjEzNt8dg5Q7byS/JJCgNLL2G+l1PbOQIxM3CmRQgxAydjtXsQqeFzi0P2NE0+6sqjRiGirrpn7oWTeFi2Y9L5BEdBtNSKP1WVVpRDXUnovbhH24YObzRvHaECuwpGnVbxSp7Cmj0d1GqTtBZczGNlQq8jbccN4I3iiQOGU4/ca9AjkVVL1TIK85b/O0v3ZjxduGHF9AIO0QH1G1wRuHHF88XyBvCLEudxuVQ6wr/QZCrMrnfbpAoqQR6jcqCuRqUAWBNH3eljg7Er8fvzReElStiUs9OjEuqXzeN/MsZZB2MrlVJqqhMj71kmvnwnR3bfXCYMNnNjfWaNZLVW8Msex0xR1MIsUloeLIqmZWfJhAyvQbxQSSfyHHGwXiC61MIkWm/8o8DSOvl1nxQeTuN8oSksZ7wyqXuKkmnlmKIyUykeKg/6qccaPRQ/nMis+g1Ty4B7z+/l80UQ1VJHf3jkFMIkUhkPWc3/KZFdsPsSr0GzmdULjfeGWIZTjYbxIpUpnmfR50WFlUyKzYtkAqxVS5nOAVR56O440C8WMTKVKRepF2fHQTxzn9yY+FWIiq3kDGzIpU5voxuRTVngqZFZvkWeIILAD8WXEIwg1V/LSU4aiMyBM36gVVss+waUjLZ1b8VyirXrJd75CjUBbAf6nH/gXSHDbk1xseUZkVuXcMYhMp2tEGm8jSg1TIrPgvm6UMdoPj8UK1TTQbEEfeOmra8kCQqw3VJlJkZlwulq6Py8Wr4pkVG+JBUZXiMKq6u2LtcLmh6kSKy28UkmH7G4VlMys2xEPEoQcWGI3H8PzZvO2EWAdR1UWrUUSaPTdxBCEWgUCy2Y0QR4LVWCLM+pWx13NAIOQNArkJp/1bObQaVeEWRzrRDZXedN4GMWvH1fNVV/E4cUAeAeIa6jzungs6v2lQ6bwxVA6xYuKo81avsmc2KI2QQBBikdjZvN0kbmywjKkVnyeQz/c4I4PVTGzNhsRB7L/qdX2jQMRPS/3y74McTBy5u1oHBJUBThC3otB51DxvG+yKo1GBYLiRm7geZJQFxyZ7kGIhVig3bprVzLVczOa/VIUQi0SPQfqxG4ec6asbF0ggI096zpEyn2NoymEaEAiJbai9nEaSM717uyFWMFvV3RXcEBhy3F29pxPbUMdxm5ekznkrE9BGa+rAiKM4cYnj9N+h8nmjyNW3hqKqPHcAM0YCxfsNhFgk9ioWo/GFM543ique+YR/qCZLPRW5PscaHQcEQqIFwsfowhnPW4FQRNVaUCVBVFWPyPsgvRyhX2zVTa0Hqdpv5MI3Xf3uur2U2BuFo8iguFdYpxx1Fkz18wZntNJg6tFwWvU0uxGkW/UOOYpUtjUP3GE2/k46Zd2wV5gxnXJUIBLITXM4NiyZRounHr28bmMrjU+S3UiSrHqTjqSbDdGQB24zGy8QeTNkZ59NOUpULhPaid7DpFpsK/VoSBxNRlVVxuPgiKiGqr/9x8PZvFogrBciEaV7Y7d86tEI1Fj7WBZtDsaxzKkFsjRUqpr+IHoL1YOYjuP21KPhH8ZMs5tK7OLxk9MOEWLdF2KFE8fJlKPECECOQbgViDNcryuQqz9wdlPzCP7owO5tQAjkPoH4E8cRk3J0yaY4cbG+Sj2/KfVoUBoNRlQEQVWLXG+oJuUo6R392OflU49+PcL9RpnzXnv4Q6q/v7vr95OPqNSjAZZRhh6PD2KQblfn1kw9Gh5vnOk4/oWLJLBjNbx2PMnsdap5oGGzUQ11HIjoE9y7fwvLQvVO7Z84tWN0UiH1qPJMhDJORlVVmkdQGpFxFQRyo0BkDDV0E+t2FLLcQadm9zwGYc5tweKpR4stbirM9X4DlCeioco+Qtzi6FmwbM7zxhAKqvKcJTfBDKAQRzNENFQZLon/mspqEuw3rp6gUIBRpt9AiHVjiCWKqHwNrUx3r9JvFPB4nvHGHhDIjQKZh9ekV7+xVvW8+wTHG42GVX55IKhqlZgxSK9Sx83D7arn3fLM8YYB0ngmUVexmLyHPuxdxSp4Xhe/NIqII3OfXVYcCLHuvA8yMJm2usuYmjdeIFGLm0qQ1+Nf0sjbcUAgdwpEQ2ufN6SMlscbq84BQdVzafQHdG7rNzKwumK7foK7f4+jPYGc7TdK9a1Jdr+HGc6+ZKthEGI1EGKVP2/SZMOGBOJRxwWrMUAgbxfIg8cbC2F9gKdxv0DyTlKvxk7zj+hAwNO4USBRyghr44YQ64+sBOBcuw3K40kBBkIsUlcgq+nuQW3Edhu1BbK6mbGWQsSF3Cc1DwiEZBCIzqxo/y5PNHuZFT8fr0CaHW8EYyjc5XgblwXCmMqsyPXf5Ynev5dZ0SOQq/UpxN4KjrvrBCpwWSAms+Ko/y5PJLuZFT+7AknsN8qHWN/SSBfIkwIMhFgk1xjE6MFmHLVP9jMrrgVybVFsSYF4V/4lWy0ABNK0QHRmxSVntX1ykFlxEUizw43QkvG7qwfqkEMgOrPiPBhX8+HtE19mxZalAXEAQwaBmMyKYmHutHlSIbNivr5VJ/b0a+OiOp4UYCDEIlkzKxKdvnr1pHxmxX95sugFOg3Bv78c9S3y+NdAHep+XlUeGTMr0p4qXdgnanf5zIo5CEkDNzd+luv3QVT/QflExe+0LU80xTMrXiMi7yfE8ctcbag2s6K8gS6W5tonmtKZFf+lHlh8vLFHcm1vMFumrk/yAGlhNu9VEjwT7jbmEmge8AB5g0BOEfPzNAipwMIPCeTsz5oB8AaBBPpWKYtwSPUtDwQY8AB5t0DCqjCB1Tm7ZWrbnll4gLxBIAfEKQNxFfDzPoHERVSQBoji+QJZ+tZYZcRpAwEGPEBeIpBIZZzrNtA84AHyeIFEKgNrxUEiTxVI3nAKgAOeJ5AS4dQeCDDgAfIwgUQqI8/lWzQPeIA8RiDRERVCKpCV2zIrxh4UrQxIAxQgg0B6taawNwkVRxbMrBhz3uixRiFlIMCAB0iO1KNMCWTio0qoKNbgjtyfWdF/3vhwSmijlGfQPOABkiOz4kikQLRKdM640ehhN7Pi0XkjsooYcVytNgBR5BiDrAXSDe6+/cyK3+eNDqcgDVCTbALpRYjFB5Eqbh6DGFkcZFZ0zvt39QIVQqxSZuEBklEgZOo6kSGLdlIpNnGc059sBBI/g8rba0AgpczCAySjQBijUhcml6LadZxZEREVeAK5BDLKy1QiX5zsM0aTOG4/s+LfX0ggDWcxxONnHjkyK34JRGaSMz3IQWZFj0BO3wz/l+Ed1LNbqLZFzMIDJGOIJX5YSqZ5H7thGYPsZ1b82xVIYjgFgZQyCw+QHKlHt5kVybD9jcLvzIprgWAGFWiWeyYraoFAGaB1bpvNm00aCLFKmYUHyGOmu3uAQEqZhQfIGwQCQEEgEAA8PF8gCLFKmYUHCARS2+6Tmgc8QN4gEAAKAoEA4OH5AkGIVcosPEAgkNp2n9Q84AHyBoEAUBAIBAAPzxcIQqxSZuEB8oDMikEgkFJm4QGSM7MiIZRz+Zp3fFh2p2ZWBKABsmVWJGLxoBCIzP/TWYUkZFYEoBmyZVYUKwl7IRCusmTp3acyKyaBEKuUWXiA5MyLRbtRyEJlb1iymkRmVkwHAillFh4gOQUyN38hkEFKY7TJTEKZFa+fPZulGnYL1baIWXggk12VlpcRLRCxiVqBOMN1CORZzQMeyGRX5cWi5LAH2cus6KnFpk7enWcstWA3eae/tkUqW8RMtvecqwanmkEaQgSTyv7T9UsGOcl+ZsX5GAAeQSaBSJarWNNyFWsvsyIAP8RaIOI+yLAMPfYyKwLwMzDVEVHxvN+/k/6dWREAAAAAAAAAnoo73mnfbqHaFjELDxS0Wwp7BcDMIabqDqXcSjvnikFGu18XHq5ZXRYI9F3SdYtAZdPM+o3KX7fIblVd4Zk8x6eYba4ZVMTMpV8m2fdsO8N+YtntTvLS9XZNS6JV+8pZKZCzsmlmA0bF7yON580GrLIEbUSYlbTTDGpi5tIvk+xZv5lhP6Z8c/jtqhll5z2+b9W+WjbnrGyi2YDRkRLn9m8uq6kX/p/VDCrizqXX76AbNzPsWYLTA3bVk/7srIN9q4Q4t1ZTBBLhhPNmYzx7vm2ErCYK5FnNoCbuTEj1DsZuMz9ySPnmCNhVXx39Wcv7Vgm5KJAIJ5w3G2E0IboIWe0mljKyeVYzqIk7l169AxEjrmbYJ30phezK4JOfF8ieVUIuC8Rf2SSzYaPzgPr0+DRklU3U/cHXfJVtqRnU5FviMqh3tiaFnmG7E++m019K+1YJyd6DbJ2QpQf5MprQlGOsJnzZP6sZ1MSdSy/fgVS7u7U/PY6Ms5tiet8qIRcFElHZ1DFIwAOn20aU1fON+VnNoCrOXHq1FItvtp7vr2PsDjLGOG163yq5KJCwE5KvYh0apT0lKd/1gapKcwmj3mc1g5o4c+nVQt9puzXtPk7A7sRpyuBs3yq5KpCgE1LM+o1SLkcLp69wBqx20mruypLGmkFV9L1MM8ne3Do2dzhpomdCdufgkyXcINq1ahcIsNQbvv7KJpr1G5V30qfcVR1Z4q3pZzUDAAAAAAAAAAAAAAAAAAAA8Cp27wBPF5YBWQN14f1Rlc/VpYw/bnDIr8Gkh4fUm6vyrqrKfPfF8DUv56tB+A7fo3B72KlOnEDsW/W+oS+HfAukMYcAJZBkfajDab97/BQhEM/he5QWyHd14gRi36r3DX05ZEcgbTkEyE9EreVXE9CYmAPUdeI7TM4wEnv4MHVdTyeVFWNyZwipDogw5pZmnfjcxZfhyOQMvtkqFavjVIMQ6wbo9nB1mK0DH3reMVHKzncyBgo7Q1en13lKjEBktoJpWxddSr7VrYW1Q+ZiotR/fn84xys33uwQID4RnY/DfhadXgfD5s9DLiTl8wfSi4lovbvVHC7/sHVp2ajE1Ge9fGCYC1Laix/65byndnGRKxBx2NIe5uOpKCUS4MsOzhoo6wxdHbE8bjTikHUROjBv0dTFlmLTl4WNQ3SpgD9cgfDVt9Y9DgGzm02+GvNZ2IVLEvGZiIncVCRosrv4QUhhSluByKnVc6tQM0hlgxC7zSoH53C5fWkPjCxqlWsurIFjPtdc4VTHLLA2AqHLEor5manLUoodhVjWIUZGfn84xys3XnPI31WHACKzy8tn7pfVIhFmfoBXfB5WIGw1KO3soFKWlvuMQITB+aEWntmY22bXWA6Xhy11EE96bhesOQaO+AguOsNUZ51aZA4Xl7Ue87sydVlKHfljcYgRiN8fzvHKjVcc8ie45hAwfyIj3XwW1OTgm4NjmdlvJRC7VR1uP6B1aSsQ2cgGHVo4DWLcHK5P8t0e9OKDxcAROQRizC8rraVAOvkb9/YtmrospbYhllua2LGMKOX3h3M8X8e9CQ6BQHKgBumrxknEhzvrRo4Jtz3IstUero5Yl7YCmZ+I7DBHPUhYILrlfH1hfiI56wznbIPpQdioAkz9Ftc9yLDqQZYvjLVD7EjF648YgRw55C+SMw4BzmVe9TmaWKIb5CdAtz3IsnU5XLApvQikZ9NEiG8MorDNSJaweQBNNB8OuXP2INsxiBxt27cYGoPsOcQKxOuPL4FccQjkkAP1iUwyr5G4KjKHx3zU48iejIwxsulBzFbncKJ+sdcpLQXC1A6VOGq5ajOQ7VUsfQCxdVjag1jyTEWTCl60ySkQdX2qW65iyZrZt7i6itX1hHz7Y+sQbkp5/fElkCsOgUByYK4rzt4W19VVOuJOLi4exBrjcQ6/V2MQu9U9nGxLi/9HrpuCeK2si2/Afuq290H0AaaU2x7kZX9R3Bo4Js9VLMX2PogYqNm3aOtiSum3urKwdoi8l8LVNeJjf3wJ5JpDII8ncG2y0fuAP4ADxb3eFfAHcOnV9AiggT8AAAAAAAAAoAj/AwfkGlRVfitpAAAAAElFTkSuQmCC"},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var r=n(7294);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);