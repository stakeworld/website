"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,A=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(A,s(s({ref:t},p),{},{components:n})):a.createElement(A,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(3117),r=(n(7294),n(3905));const o={id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},s=void 0,i={unversionedId:"rpc",id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",source:"@site/docs/rpc.mdx",sourceDirName:".",slug:"/rpc",permalink:"/docs/rpc",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/rpc.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"rpc",title:"RPC server",description:"Setting up a secure RPC server",slug:"/rpc",sidebar_position:4,keywords:["rpc","rpc server","wss","ws","polkadot.js","validator","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Snapshot",permalink:"/docs/snapshot"},next:{title:"Linux tips",permalink:"/docs/tools"}},l={},c=[{value:"Live stakeworld RPC data",id:"live-stakeworld-rpc-data",level:2},{value:"Setting up your own secure RPC server",id:"setting-up-your-own-secure-rpc-server",level:2},{value:"Archive node vs pruned node",id:"archive-node-vs-pruned-node",level:3},{value:"Secure the RPC server",id:"secure-the-rpc-server",level:3},{value:"Secure the ws port",id:"secure-the-ws-port",level:3},{value:"Using Apache2 for proxying",id:"using-apache2-for-proxying",level:3},{value:"Enabling ssl through letsencrypt",id:"enabling-ssl-through-letsencrypt",level:4},{value:"Add the proxy to the apache2 config",id:"add-the-proxy-to-the-apache2-config",level:4},{value:"Tweaking connections",id:"tweaking-connections",level:4},{value:"Rate limiting",id:"rate-limiting",level:4},{value:"Load balancing &amp; failover",id:"load-balancing--failover",level:3},{value:"Stress testing",id:"stress-testing",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"RPC servers allow access into the polkadot/kusama and parachains ecosystem. Stakeworld runs two public, multi location, load balanced archive RPC servers: "),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Polkadot: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io"},"dot-rpc.stakeworld.io")),(0,r.kt)("li",{parentName:"ul"},"Kusama: ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss://ksm-rpc.stakeworld.io"},"ksm-rpc.stakeworld.io"),"  "))),(0,r.kt)("h2",{id:"live-stakeworld-rpc-data"},"Live stakeworld RPC data"),(0,r.kt)("iframe",{src:"https://monitor.stakeworld.io/public-dashboards/cb9695f06cc94b9d878d5c77fe8017d0",width:"700",height:"700",frameborder:"0"}),(0,r.kt)("h2",{id:"setting-up-your-own-secure-rpc-server"},"Setting up your own secure RPC server"),(0,r.kt)("p",null,"To access the polkadot, kusama and parachains networks we need some kind of access into the network. This can be achieved by ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"setting up a node")," with a RPC server and allowing access to that RPC server via a secure websocket (wss) port. The default node setup already exposes a non secure ws socket on port 9944 (which can optionally be changed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-port")," parameter), but for a more usable situation we need a secure websocket which is accesible through a public port."),(0,r.kt)("h3",{id:"archive-node-vs-pruned-node"},"Archive node vs pruned node"),(0,r.kt)("p",null,"A pruned node knows only the recent information about the network and not its full history. Most frequently done actions can be done with a pruned node, for example see account balances, make transfers, setup session keys, staking, etc. An archive node has the full history (database) of the network and can be queried in all kind of ways, give information about transfers since the network started, historical balances, advanced queries about past events, etc. "),(0,r.kt)("p",null,"An archive node requires a lot more ",(0,r.kt)("a",{parentName:"p",href:"./snapshot"},"diskspace"),".  For an archive node you need the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning archive --blocks-pruning archive")," in your startup settings.\n",(0,r.kt)("img",{alt:"snapsize",src:n(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Inclusion in the Polkadot.js UI requires an archive node.")),(0,r.kt)("h3",{id:"secure-the-rpc-server"},"Secure the RPC server"),(0,r.kt)("p",null,"Via the node startup settings you can choose ",(0,r.kt)("strong",{parentName:"p"},"what")," to expose with ",(0,r.kt)("strong",{parentName:"p"},"how many")," connections ",(0,r.kt)("strong",{parentName:"p"},"from where")," through your rpc server."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"How many"),": You can set your maximum connections through ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections 100")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"From where"),": by default localhost and the polkadot.js are allowed to access the RPC server, you can change this by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors"),", to allow access from everywhere you need ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"What"),": you can limit the methods to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods"),", an easy way to set this to a safe mode is ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe")),(0,r.kt)("h3",{id:"secure-the-ws-port"},"Secure the ws port"),(0,r.kt)("p",null,'The ws port is preferably exposed from the outside as a ssl secured wss port. The "',(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-wss"},"maintain wss"),"\" on the wiki already covers a lot of information about this, especially in relation to setting it up in a nginx configuration. This page is focussed more on a apache2 but principles are the same. The main idea is converting the non secure ws port to a secure wss port by putting it behind a ssl enabled proxy. So from outside one see's the ssl enabled apache2/nginx/other proxy server, witch redirect the request to the internal rpc node."),(0,r.kt)("h3",{id:"using-apache2-for-proxying"},"Using Apache2 for proxying"),(0,r.kt)("p",null,"Apache2 is a little heavier then nginx but also has some more tweaking posibilities. You can run it in different modes, prefork, worker or event. We chose ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/event.html"},"event")," since this seems best suited for high load enviroments. Downside is that you can't use the default php module and need to enable it via php-fm. The proxy_wstunnel module works out of the box. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install apache2\na2dismod mpm_prefork\na2enmod mpm_event proxy proxy_html proxy_http proxy_wstunnel rewrite ssl\n")),(0,r.kt)("p",null,"If you want to enable php"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apt install php-fpm\na2enmod proxy_fcgi setenvif\n")),(0,r.kt)("h4",{id:"enabling-ssl-through-letsencrypt"},"Enabling ssl through letsencrypt"),(0,r.kt)("p",null,"There are multiple options for getting a ssl certificate, one popular (and free) being letsencrypt. Obtaining a letsencrypt certificate can be done through for example ",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot")," or ",(0,r.kt)("a",{parentName:"p",href:"https://go-acme.github.io/lego/dns/"},"lego")," (which has more dns provider options)."),(0,r.kt)("h4",{id:"add-the-proxy-to-the-apache2-config"},"Add the proxy to the apache2 config"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"},"mod_proxy_wstunnel")," provides ",(0,r.kt)("em",{parentName:"p"},"support for the tunnelling of web socket connections to a backend websockets server. The connection is automatically upgraded to a websocket connection"),". In a ssl enabled virtualhost add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"SSLProxyEngine on\nProxyRequests off\n\nProxyPass / ws://localhost:9944\nProxyPassReverse / ws://localhost:9944\n")),(0,r.kt)("p",null,"Older versions of mod_proxy_wstunnel do not upgrade the connection automatically and will need the following config added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"RewriteEngine on\nRewriteCond %{HTTP:Upgrade} websocket [NC]\nRewriteRule /(.*) ws://localhost:9944/$1 [P,L]\nRewriteRule /(.*) http://localhost:9944/$1 [P,L]\n")),(0,r.kt)("h4",{id:"tweaking-connections"},"Tweaking connections"),(0,r.kt)("p",null,"The number of connections is limited by the node itself (",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-max-connections"),") but also by the number of threads available on the proxy server. For apache2 this can be tweaked by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-enabled/mpm_event.conf")),(0,r.kt)("p",null,"We are using: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"StartServers         4\nMinSpareThreads      25\nMaxSpareThreads      75\nThreadLimit      128\nThreadsPerChild      128\nMaxRequestWorkers    896\nMaxConnectionsPerChild   0\n")),(0,r.kt)("h4",{id:"rate-limiting"},"Rate limiting"),(0,r.kt)("p",null,"Theoretically one client could use all connections/resources, draining the resources of the server and making it inaccessible. This can be countered by rate limiting the connections, for example by using mod_qos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libapache2-mod-qos\na2enmod qos\n")),(0,r.kt)("p",null,"And edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apache2/mods-available/qos.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # allows max 50 connections from a single ip address:\n  QS_SrvMaxConnPerIP                                 50\n")),(0,r.kt)("p",null,"Be carefull when running behind a load balancer (for example cloudflare) because the load balancer will only use a few ip's and thus can trigger the rate limit, iso in this case it is better to use the rate limit options from the load balancer itself."),(0,r.kt)("h3",{id:"load-balancing--failover"},"Load balancing & failover"),(0,r.kt)("p",null,"With multiple servers it is possible to build a load balancing or even a failover construction. A simple load balancing can be a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-robin_DNS"},"round robin-robin dns")," up to a more advanced (dedicated) load balancer or a content delivery network (CDN) like cloudflare.   "),(0,r.kt)("h3",{id:"stress-testing"},"Stress testing"),(0,r.kt)("p",null,"You can test basic usage by accessing your server through the polkadot.js UI as a custom endpoint. For example staking target display is RPC intensive and can give you an indication of performance. "),(0,r.kt)("p",null,"There are also more dedicated stress testing solutions, we have forked the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dwellir-public/artillery-engine-substrate"},"Dwellir repository")," for our testing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nnvm install --lts\nnpm install -g yarn\nyarn global add artillery\nyarn global add artillery-engine-substrate\ncd /opt\ngit clone git@github.com:stakeworld/stakeworld-rpc-artillery.git\ncd /opt/stakeworld-rpc-artillery\nyarn\n./run.sh\n")),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"run.sh")," you can edit some variables like how many connections per second, the wss node, etc. The following is a test run for 10 seconds with 10 connections per second and maximum 20 concurrent users. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'config:\n  target: "wss://ksm-rpc.stakeworld.io"\n  processor: "./functions.js"\n  phases:\n    - duration: 10\n      arrivalRate: 10\n      maxVusers: 20\n')),(0,r.kt)("p",null,"After this you get some info about the run and a report is created, which can be used for further diagnostics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--------------------------------\nSummary report @ 23:38:40(+0100)\n--------------------------------\n\nvusers.completed: .............................................................. 100\nvusers.created: ................................................................ 100\nvusers.created_by_name.balance: ................................................ 35\nvusers.created_by_name.complex_call: ........................................... 33\nvusers.created_by_name.headers_blocks: ......................................... 32\nvusers.failed: ................................................................. 0\nvusers.session_length:\n  min: ......................................................................... 231.7\n  max: ......................................................................... 656.1\n  median: ...................................................................... 361.5\n  p95: ......................................................................... 518.1\n  p99: ......................................................................... 645.6\nws.messages_sent: .............................................................. 163\nws.send_rate: .................................................................. 29/sec\nLog file: reports/report.json\nReport generated: reports/report.html\n")))}u.isMDXComponent=!0},2307:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABR1BMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr6fn58fHx/f39+/v79fX18/Pz8AnnNWtOnmnwAvLy/w5EIAcrLDw8NDqsWEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAbPUlEQVR4nO2d7bazqLKFtW/D+3mvAwW6++y97//34VtUFBUUMPMZY60kBksSmKGQsuw6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUhfeCcZh2C4zDNYNXywNQM3yklJKxp942wrwXVzs82dcaAM3BR/9Bw1IEAsCXMMqYetJNbOxHor0ual8IgYhnTAwLbgsVBbgccQazQWG3CnetV3gF3B4ANIYdOkbWcT5Ng/S1uBhB3ItR9Hg6+luEXMSTqRt6MhEhLI3dKkacSTDybi5g3wOgNaxAONePSgrWxZIvRllg6Octk5qviN7eS+eLmf3dVu2Ssd4r4N4DoDXWAuG+QOQTKZKO2p9/tWUcqNom/xP7jtmqBULluDEXsO8B0Bqei0X5KKYORiDuhenwdN4y6akF1VMNKxCzVZWfjKpsgWkxWwGgHYxAxE++mDZMbgSZX9gRZN7SyQl7T4Vo5GTD85zkViUQNk5qJ6+Aeg+A1tACmcRMQ7lRkxlB5hdyti3nIG7LpDq68KHc/FxZsFuFQIjRgi3g3gOgNcxC4UhF5x8myuVchPPpf+6FPYvl3paDjT6LNRKxxcxX3FZ5mpfpgcMWcO8B0Bo61ESuc3Rk7LlwnMRYIvTiXvR2HcRtIf46CLPdnrh1EKKnHnQuQLAOAgAAAAAAAAAAAAAAAAAAAAAAAACwhfWDe2YguKobAAUduRPIRKl4Kf5NyPMBgIKQrveHi5HtFgXgJwkIBC4WABYIBIADIBAADoBAADgAAgHggGOB9KAq3u4dBp0pg9xNY6Euk+7Dv7vBrTK73/INfaX1+cug2Rgvc46IQML7XNga3pxu4e1KpFUjw0eQbxQVCO3vehYq0QYlIw+8d1YgygQ/nYopk0AmKj41nQ96UiCXSDdRRSXSbGTp2WUFMt1fJDO5zEioe58WiC4d0liITALRY9+c3wYCechGCYH8EeQ4bKe656T7pk5fzOcE+HNWfTJIL4qpV26r3V0iM/KrxDGqf3mJLWXiV2eP9zI/v5el3zfBuTgO7716iMOOvUwR6FLzOwtvkKFh/6rAQg4TSTZyHF8YudAcfww5Diy7p8mF7DqmTYC/yKo/9JxMzN9qd5fIEYSNdCK9SmYpn6jElpMUibMntg8yAbnL0u+bECodOSO+QGwxl5rfWXiDUmP6r/NfQWBzOYHYmD3bMZcJ8EeT0VKltqRWGKveTUeZN1/uL3Pv2wm/6N+ynLWnRplOC6TzsvQrE0JBRG/3BMLNkzk1v7XwBhDI+/zXsXlrtzn+nOdOlXjPTapi/5d7nlFwmzRcds7JCmROuq89eeEIuQT6s4oGPTYtUvArF2uZpV+fCCNWdnM9lOLGtWW4WK+beN7F+u+ajZFiAhnln+yrrmPaBPjLrPpWIG6r2Z1SqhKE65tPUJlJ3N6FQnR7+Wjs6QJuku50pEyoXfQMJiAQM5+eLbwBBJLHRnTfjTgCCikrED1Ldx2z0wnwvaz6nkAWmfWtfzSyLjSCcGqFZFLwd8ERxHX4XYGY1PzNjSDgkLAydnyskgLR6yCqPwqp2AT4XlZ9TyDz1nl3NUd3c5DJLqqY5PrWnjcHMVn6fRNmh26uhxPInJofc5CPcCiNiwLZkqKHDbp7yimyPPnExjll/pxifzGCuK3e7uphPotlTjqZ27O4hPpcHWDvLFbnbpln6jELxOXudxbeAC5WHhurfU9o45qLteUBgYiZ8qQWGWR/tAnwXQ79xRzEbfV3V0PQYh1kmG/wRfx1EDUihNZBOisQV8wJxKXmd2+9AQSSx4bb96w0QgPIJYFkXSgEe8DFysclbYQEguaoD7RIDq5LIygPNEd9wMVKtHFPG2F5XHSxMpMj5D0Ur34uWrFcuPsxEMhtG7elERSHrkBxgaSGvAfi1cnUkU2c8FYgZcLdo2BMv05+ZThKCyQ95D0Yr87OCGR/9xAQSJ08KA5JYYFkCHnn3C8tA9fHQbpPVC+ayDDIYLz7vLveDeHuWS0872I9rAxTgWvN8fffl4pHyBPyLiQ2l1aB60JQcnlPh1CJGU443t0bQdRur4W7R3LzQiAnbDwvDVuBK83xt+LiIQ7IEfKu4tXn0qoTG4GoNUYql+ZliU28u7e72v5SuHs0Ny9crENeGDYWFBVIjpB353Kp0vb6VVVIGmR8L97d211tfyncPZqbFwIJc18ZN6Wh2W+Ov89y+9g5Qt5VZ1+WdgKRUtiPd593Nwd5Ldz9TlaTS3zOxSqjje7YxXpHIKkh72qPZWknEPGE9rtXTM2xWLsCeSjcHQI5bSNh2Hj/mvQH5iBdesh7Z7r8tB1BuoEz5kerL+Ld1wJ5L9z9cYF8g2LDxoLiAkkOeZdvLUorgfBJiUb99ofj3dcCeS/cHQI5JmHYyF+Zwqd51UNayHu3Li3/03Gkrkg43n0tkPfC3eFi7ZFTGQVcrPYIRmUVJyIQwV+idRP+/krcv8Rf0rDxVL36v4rl5n2D6a3F74vAxVqQc9jIz4ebg+h4kcp4IzdvMyQNG+9QpDkCkeb2WtktwWHgKLt73eHub+TmbWAO8rwyWp6DBCLNzwmELBYJaTi7+1mBfDfcvW6BvDRotC0Q9eB373MCYas1kGB299MC2VTikIYEUivPDxv5udQc/whyHNSLNLcpSaxAZFp2F73uwsxNKRXF7lvQS3j30rt/ONy9Ou4ro6A0NBea4x9D+kHnH2+X1MoIRKVld9HrNszclVqHmagR5GZ692Lh7hG+5mKliCOlGu+7WJkFIiPN59TsWiDe9YXimQ3xmEutBCKzu99O714o3D3KZwSSYdioWSD/nOfyYV2kuYsoNwLh84RAaMEGCc6lAtndb6d3LxTuHuUTLlaqMuqhjEBspLlLza4FYtKy2+h1G2Y+l+KLs1gqu/vt9O7lwt2PaVsgGYaNuigkEPNkNYLotOwuev1oBFH+kRkR7qV3Lxfufky7LlZ+Zfysi+XF4Xb+HETNul30enQOoubod9O7lwt3P6ZFgTw1bNQskC239bBh7pvrs1gyLfscvW7DzOezWCqKfbagHm6mdy8X7n5MYy7WQ9KohsIC2ayDqLTsNnrdhZnbUiaKfZnd/WZ693Lh7sc0I5Cnho26KLJQCA6o38W6r4zrWXce+gjnjTTze/UzVCyQ95RxWI3n9/WMQCC1UWmLvC6OSijVHJki3u8nd/9ydve8/KgyDMUEkiniPZzcfZvdPSAQhLtHLaQMGzlcnB92sbJFvIfD1TfZ3UMCOdg/UokkmsjNmz5sQCBJZIt4lxaW2d1l1h9R6v+Ok7t7++uc8C+FuzeRmzdVHB/iWnP8+2+u42aLeJcjwDK7+6hLRZK7e/vrnPAvhbs3kZsXynBcaY5/FXmOmynifU7uPmd3NwKJJHf39tdd/71w9+rzYmURxw+6WFkFkiniXblAtrTubVYgx8ndvf11H30v3P0rAnm2Eqk2HhfIv2e5deRMEe+6sy+zu1uBHCd39/bXvfO9cPfq82L9sEe1oZxAzJO0iHfFKru7Fchxcndv/12BtJrdPRUoY6boHESSGPEuWWV3dwI5TO6+Ech74e7Vu1hhhbxdiUQbrc9BckW8d5vs7vYs2HFy941AqsnuXkFu3rUynsp9W/vf5dy82U/zStIi3iXL7O5qLUWVOkruvhHIh7K7Z+BXPaoNdTTHQ4TX5cuC3Lxt8eHmqDO5O3LzvmSjwBykLepM7h4HAsljo3GBlA93V9ewbwu6QqX8s+/+ZDXJ74a7d1PPA5G8rhApNP5AIFXxu+HuHRlpvxVB8Yk9XKw8Nkq4WP8R5DhsV0O4u1xM1MdV0e5zangT7G7DwmwVSaZPHgMCyWPjfYH8x5DjwBWEu8vc1mptQ0e7u9TwttA4EPXlCAsu7v0N4GJVRVGBFA13l+JQCeBNtLux44LdRVXkNqkzG/f+ChBIVew2x3/Oc+e45cPdlXvldvJSw3daPNJTY54FEpiwPAFcrDw2nnaxnhZI6XB3G8zuNvu6MQKRPlZP5rj3Ox/0MhBIHhvNC8Q8KRXuzrgMZZcnBJaXifgCER4Y0RZ03PsrwMWqiuICKRTuPpk5h8zZMLhqdEuBCDPqfPFb83MFBFIVhc9idaXC3e2MQjyaaHcvNbwTCBnVHMfFvb8BXKw8Nr5xmldSJNzdngsQ4jJLg15qeCeQyVwOYOPe3wACyWOj8YXCVyi+Kn4HuFhV8eHmqDPcPcqHW6RFvtscb4S7y+kQZZydzoB9ArhYeWw0Hu7e2RnC7RCO5HD35Gj3aez7QUx9+BjOgC1nLrTz7oDlpeWVyDtgjUpc/sEgkDw2PiIQ2t+dJxyFu2+i3QMCSY92ZyMZeq4W5EMhxUNPKBPVE8WoOgHnp+WVu/eMUqI+gH+w747pTVJYIF7k1Z3du51w9020e0Ag6dHu8hSwXlahodlOr2NZJnWmWB5/mZbXDp3r08cQSFVcao68iS5ED5909+5tzjZqb7s5x68P0j1h6pXbandXD3wV7S7juWRMPI9ld2c2IZbaaxvt3sXC3eVvv5YGDXyNKhByvum01rEnkPWlMM7qia8uAlysTMe/5mLlzq4nerjfbVS6aGZu3Ozi18dBPOFkYv5Wu7tE9LNltLuNMoyEu7tod71XINq9i4W7nxGIqgWlzCzezAKZfG8LAslv4wsCsS65FYjuU/YnXnVTboJI5lipnXB3F+1uBRIJd3fR7npzINq9i4W7HwvE7CUFIkY04m1TTL7gMgsEXGZ3DXy3OaIJjJMTtvKeM93t3Qgifr/nObeLPpRdaXI5p3fC3V3guhPIcbi7i3ZXm4OxirFw934UqH9j6GuUwSvCN1N72YFrLRDSqyskIZBixOIKSwpklH/KD7ICmYyzv4xftwJxW83uNtx9WdoJ5DDcfY52N5f5BqLdY+Hu3CP0AZmoFDFfsJGX51eppxOlJL9A4GLF9z0XeHvgYr0jED1LdwLp5Ey8p6v4dSOQeavbXe+xLO0EchjuPke7G4GERpAM4e7ClBbxRiC2/tNaIBXk5v3yXyw03S97lJv3HYHodRAdYyjmINrhIqv4dSOQeeuig62j3WeBHIS7e9HuRgqhaPdT4e5yNSb4BtFLgNQ/m+UJxK4APTCCgB1uXLtR9ixWp5bTXGJ18YOuzmKt4tftCOK2ert3m2h3fYJ2UqLZDXf3ot31XsFo91i4O1Xq8dy+BeJTUSZcSK4WCtkmLe8gHDBK2KxsDQTyACeUUatAxGR7cgHpxKyDLOPX7RzEbfV379al5X8TE78f7u5Fu5u9QtHukXB32iv/kKjzwwGYXlFRyzRqPFpNZeTcCaEmT9mQ+57XxY5ALoaa5JTHGzwc7q5nTVIc25X7+0AgOWzckEZoAPly8urnw92V+6UEQjIe6cMt8gZ3lREWyJeb4/lwd+1YyUDD4ELhXav5TP0WidIIygPNkcI886hsBPkpFyuDLvbE8XEX63Hm81osuFB4DwjkpI1HleEqAIHcx8UvDuGzWPdAi0R5XBceaI4EWM8HQobx9kVfIdAie2TRxXlpaNAcKRAZBNYHLvtNAC7W1kYuaVxOygMXK5X8GUkhEM9GMWW4DwGB1AZapOCIsQXNURu/3SIVSUPz281RIz/pYuXThVNGDhcPLlaF/JZAcipjOWhAIB/lV1rkIV3k5lea4yEmxtU16XWFmtRMPl28k0j9483xNHxkgyKfyc+6WC9LAy5WDRzEmEx+qgc1xOgLpuZLR34jN+/Lusj5ESCQZMaDZUJ5sTpl5rpiJRBG3X1Hu+/n5i2ljLx8pjnKEPOtTCq8XulklRvY5o34Wm7enMIof8Om5pujLGTkh3MQHQfP1SXxK4F8LTfvE7pIvSY9GbhYiYyW8NsmgfWoswD3jPdOCt/JzZtXGYshAwL5OGoAcWmyR07oYHXRfm7e53RRE800R5MoEchJxuCGGJs8u+HcvL+hDEP9zVEvw9QNlmABlZiXyDNds0BcFuAGc/PmVcYJacDFapqRROYgysNiZj3EaMAliW8oN29eXeSt26N/R7l5QTo6O6NkkMOIUgaz33gLuXnzKqP0p7lFTc3xOeZ5uL5dD6PzJL3m3Lx5ddGmMCwVNMdnmZYC0bl4yfx+pbl5K1IG5iBgQ/sCyVGJdBsQyEcp3SIFB4waKd0c7ZM7rUnpFoEyFpRujtaRmbGmbnvvkPuUdrFy6QIuFtBnooRAAnefuk0LAnm8EhlsQCA1IE9KCYHQL11y+6vOVJjizdE2cllc/E1fuj8IhOFTvDnaxowgH7s/SBZdwMUCcg4ib/NMct4MsQKBPJO04WUbEEgVDH4gYhbQIlWB5kiF0qx3P0CL1AWaIwt13WEKLlam48PFSsXcSbeys1gQSKbjQyCp9KOK2K1MICAfaI4k+on17GPrIMAHzZGEWkUfaWUCgYuV6fhwsVKRK+lyEAl9jTYV75ySdxj70ZvO/0Zu3lI2IJAa0BkYSPDSfpuK16XkHXpC2Zzu+uu5eb8BmiMJ07EnEnjPDgtueFDriS7w97O5eb8FmuMx1gIxeUjtN/613LwPmICL1TaRxHE2Fa991AKxebG+k5v3ORMQSNuMx4njbCpel5JXSYI5gRCvaF1pf8AMmuNZrEclH1lPpmFcCKTJ3Lw/BZrjWWwqXvXIenmFrnmnwdy8b5uAi9U4lIh/Exc+1G4RO+VwKXldGuuGcvP+7B9y8yZB1erfODIevJenUgTr55S8ZLEm2EJuXoDmSIDLE7XKdwplNbGpeOeUvGyUN/V0a4L15uYFM2iO+6iwEXWLg2BWE5uKd07Jy0YTHu8VQKjJQzYwBymOmlaovk0RrPiECQikbeQIolf/PpUXC/igOe4jZx7qBujdwGNlz4MWqQo0x31oP3K13Df4q+KpwMXKYwMuVnkoY0Q+9hlT80IgmWxAIPUwxYucBy1SFWiO2kCLVAWaozbgYuWxARfro0AgeWxAIB8FLVIVaI7aQItUBZqjNuBi5bEBF+ujQCB5bEAgHwUtUhVojtpAi1QFmqM24GLlsQEXq3pkKt6hm3rNZDc4kJv3SRsQSO2wkVDSD/IebfJS23mDfR+5eRsAzfEUk7rMVl8voq6rWmxAbt5GQHM8C9eXUjG+2oDcvE/bgItVP9KzUgmBJpMXyG1Abt7HbUAg9SMm4UQ9sQOI24DcvK2A5ngUOqoZxiwGswG5eVsBzfEsKuUo6VcbJMjN+6wNuFi1o4Sgk1bz1QYJcvPW/4fcvA9C5xtK6f5Pl3eYQm7eJkBzPAZX64JyymFXPNwGBXLztgCa4zEmZiJL7Akrt8GA3LxP2sAc5KNAIHlsQCAfBS1SFWiO2kCLVAWaozbgYuWxARfro0AgeWxAIB8FLVIVaI7aQItUBZqjNuBi5bEBF+ujQCB5bEAgHwUtUhVojtpAi1QFmqM24GItbPwRFDs+XKwKgUA8G38MmY6/MhW3DIHUxy+0yIk+r4skCCRs0jN2zvYvNEdbfKJFFh0v8Lv9Z9E7tx31z5oc9VnZ21QhuOcnmuNTtO1iLXriukvaAsuuH1DBptCfzUH2CH2Eo/L7R9FGIJAHYfqqWpeSl/KP5+Y90QNPd9bbbD/C1V397wECeQw6ciUQNtJJXYA+jWwi41dz8z7Y5a+RVJ/Nx2q1ORqAEJ3ax6jEJDeh1L5tr1T/RG7evH08jZT6bD5Ym83RCkuB+I5Uk7l5c/biWll/DxDIkyhtDCPtqBgupp6w3iZWbDA3b+mu+w7r7wECeRItAtb3agrSj2Ry9wdpLTdv6Y77FuvPXWlzfIR5kq5uNSVHD5s4rrXcvKU77oq/FeZh9XRve7SINLz+3JU2x0fQAwfpVHpe/cSlHn0qN2/ObviM1SgnO/wDrPUBF+tZpAh0xlGpCyWJh3Pz/rE/rkf96myR0131RJHr20vwB7l5X2UxguibSw32FmzP5OYt3sUaZ9uESc0BDhDuUz9QKoYKOQdhUhLMv4nnE7l5/fED3GDzjUIgj8Ht7Z/3Qk0eyM37p3QHq51/DtnoA3OQ+oBArnLc6Vf8a3BPvKfi7dX3CYHUB1wsx5Vu73X4cO9fFQmzFghcrPpInaRf+j2tnuNefqLLX2MzhEAg1ZHWIv/8c+LX82wRbevWrsnbs/f9c6wEAherPhIFUqZffQYIpHqSWuQfCCQJuFj1kyaQ0j2scTBJrx8I5BVwmrdV4GLd4uy8//Cc2eb7hEDqA5P0LdETYBdOHL/aHCA/OM3rP32k018BAqmN1Ba58GNaPwnfA3LzfpRqr0l/3wTuDwK2oEWqAs1RG2iRqkBz1AZcrDw24GK1Cxn7key9CYHksQGBNAvpyTT0dOddtEhVoDneR11gy/jOu2iRqkBzvM6kBg+y983DxcpjAy5Wq+jMWHTPx4JA8tiAQFpFjx3TgwJJN1FFJdJsZOnZPQTyPhDIKzYgkFa55WJd2RrenG7h7UqkVSPDR4BAihCbpIOqeLNrAIW6iQ7fO80LwI9zvFAIwK9zGGoCAAAAAAAAAM/hpiPM3llHvbSvzsxWIiZYP4T3O23B3d/ksom5+idqEbNxWI2UfU9/CPF6DO0HHsOe0KIjN20y9dP86sz5rmMT89bblWA9oUPESNiEq/6ZWsRsHFYjtu9I/Ht73atAJ28KBoG8i418J6SzP9e8m18dB8afMTFvLVAJt+eZWsRsHFbjeN9JD4ixzh2pgNRL1AbIir+obtqE6wd9k+jjNfczJrzH+xY6796jF0wsqh8VyAkbu9U4tW9saTZuhA/HXwPIjR+WZdrEDObeLaN3o7bOmOjiXTNuQcDZdROL6kcFcsLGbjXi+1LKxsjSbNSIUAcE8i5+YK9uE2p+77R/dBz3e8ZEF++acQvS+Z6um1hU/8QMIGpjtxrxfXmv7sadUgH5B4G8y7ZNBuMHJAhkYaK7I5C1BdExyQ0TqQLZ2Nitxol9O3Un7pQKyNELAnmX7ajO/V59z8XiK2Fcd7HWFlgscCxsItXFWtvYr8aJ48uufjgKxoyQcYJA3mYzL3Sjxf1J+tJEF++aUQvxwMqwicRJ+trGQTVi+ypl0IhAIkaYCX+PL6eAfHiR79qpsr9Q5gzricD4iIkTXTNigZwIPA6b8Kt/4jTvsY3Dahzvq0eFIXZpx7GRSTKMxyIDmbGrUBOl/UBpx5SfbF9dWigMm3Cm7ldiZFRyw4Sr/plaxGwcViOyL1cLhZE5SMyIBC7W25g4Bq6Hb72i5V5dCjUJm5hN3bVA+9smXPVP1eLYRqQax8ef2JVQkx0jEggEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBb/D8nZd/8mu4gjwAAAABJRU5ErkJggg=="}}]);