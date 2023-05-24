"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(7294);function o(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){o(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,o=function(t,a){if(null==t)return{};var e,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(o[e]=t[e]);return o}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=n.createContext({}),d=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(s.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(e),k=o,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||r;return e?n.createElement(m,l(l({ref:a},p),{},{components:e})):n.createElement(m,l({ref:a},p))}));function k(t,a){var e=arguments,o=a&&a.mdxType;if("string"==typeof t||o){var r=e.length,l=new Array(r);l[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var d=2;d<r;d++)l[d]=e[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=e(3117),o=(e(7294),e(3905));const r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},s={},d=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:d};function u(t){let{components:a,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last update: Wed 24 May"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Chain"),(0,o.kt)("th",{parentName:"tr",align:null},"Database"),(0,o.kt)("th",{parentName:"tr",align:null},"Format"),(0,o.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,o.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,o.kt)("th",{parentName:"tr",align:null},"Full"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,o.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"pruned"),(0,o.kt)("td",{parentName:"tr",align:null},"18044875"),(0,o.kt)("td",{parentName:"tr",align:null},"239G"),(0,o.kt)("td",{parentName:"tr",align:null},"247G")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,o.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"pruned"),(0,o.kt)("td",{parentName:"tr",align:null},"15655008"),(0,o.kt)("td",{parentName:"tr",align:null},"183G"),(0,o.kt)("td",{parentName:"tr",align:null},"189G")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"archive"),(0,o.kt)("td",{parentName:"tr",align:null},"18045064"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"1.6T")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"archive"),(0,o.kt)("td",{parentName:"tr",align:null},"15655094"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"1.1T")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"westend2"),(0,o.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,o.kt)("td",{parentName:"tr",align:null},"archive"),(0,o.kt)("td",{parentName:"tr",align:null},"15953780"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"276G")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,o.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,o.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots may become obsolete."),(0,o.kt)("p",{parentName:"admonition"},"For now the snapshots are available for kusama ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,o.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,o.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,o.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,o.kt)("h2",{id:"database-size"},"Database size"),(0,o.kt)("p",null,"Below a overview of database sizes.\n",(0,o.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,o.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,o.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,o.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,o.kt)("h2",{id:"manual-install"},"Manual install"),(0,o.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,o.kt)("p",null,"Setting up a validator node is covered ",(0,o.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,o.kt)("h3",{id:"install-the-database"},"Install the database"),(0,o.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,o.kt)("p",null,"This can be changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,o.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,o.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,o.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,o.kt)("p",null,"Edit the default service script and add for example ",(0,o.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,o.kt)("p",null,"Or create a new script by copying the default service script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,o.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,o.kt)("h2",{id:"different-databases"},"Different databases:"),(0,o.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,o.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,o.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,o.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,o.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,o.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,o.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABRFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr6fn58fHx/f39+/v79fX18/Pz8AnnMvLy9WtOnmnwDw5ELDw8OcfbFOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAbnklEQVR4nO2dabasKtOtdXfD/ux2IMW557xf//9f6sIaBUVzPmOsIklCXAtmEkgYdh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5F9JJxoKsVxiHvgLn1AWgZMTLGyNizqIzw6EXugCfrWgPgdYgx/mHgVwQCwJewyqA96Sgf+5EYr4u5F1Ig8jcupwVfwmQFoWacwRZoXKl013pNVMFbAPAy3NQx8k4ISgflawk5g/gXoxzxbIxLpFzkL7QbekKJFJbBlcoZh0pG0YUK7j0A3oYTiBDmp5aCc7HUi1FVGPpQQvV6RY72Xjlf3Nr7UuOS8T6q4N8D4G1MBSJigahflEg65j7+dck4MF2mvhP3ji01AmFq3ggV3HsAvI3IxWJilEsHKxD/wg54FkqoWVows9RwArGluj61qnIVaLJaAeA9WIHIj3y5bKB+Bgkv3AwSSjq1YO+ZFI1abESekyrVAuEj1UZRBf0eAG/DCITKlYZ2o6idQcILtdpWaxBfQvVAlz6UX5/rI7hSKRBiteAq+PcAeBt2o3BkcvAPlAm1FhGC/p9/4a5i+bfVZGOuYo1Eltj1ii9Vl3m5mThcBf8eAG/DhJqofY6OjL2QjpOcS6Re/Ive7YP4EhLvg3A37InfByFm6cFCBYJ9EAAAAAAAAAAAAAAAAAAAAAAAAACAGSq2wt7DzW2wd09wVzcAGt4TNvRGD5QxNgr5jSLPBwAaPVdwEV7z9boA/CZDyKBjBAIXC4CACNMGBALAhPjGIAgEgJQhvrMUAgEgIU1NAIEAEDOkqTtmAulBU9w8PGJMtgxyNpWFuVV64T7mxY9jld4veWPVfAU+7tc5AJmktpkLZGIw66HdgicsFsZR1jHyzyj/nE600S+1extaIKw/613oZBtMzHMpEZpm59fMBbJmvkIhgYxcNcui1/r7ukD2adMiz+TMOMy1OfU3PC0Qen6jzOYzG8XCe/yIQNbNlygjkEmuQQjk/PF/QiDUjM/ebS+7JPghsz4ZVOgS1698qTPXP0RcW/RqtOns/CaVrDwqFb1K0B+l6U/NjZk/B9nk2KsUgT41vz/AHeT3yJ8mLfJMThw/2+bU35DXHX//5rexjhyiNh+yH5wuCX6SWX/oBaE8LnXmCimxUFtwoj+O1U6cyZksVzjSmaKDykDu0/Sn5sYsCMTV8qn5/QHu4MmPLDAjpzv+asq1LUZhFyBucKZJ8Eeb1VKnt2ROGN4n0yOc+k0Fn4ffCaQz6cMp1TWMQLqQpj8y1+VBIML+ElLzuwPcAQTSFI8KpBd2TyD+9A7rV+ESh6sBSp1AQuJ97cx7l8tnUfYCUQfkwkpLu1hxmv7IXJeHc1C/DGNIzR8OcAdwsWrZFHax/h4lv1mL+gwXOsm3H5wuCX6aWd8JxJdacxUorn5La3uBKCnIgxlXyy/S3VQUzG0jc4HY9XQ4wB1AILVsXikQs0r3g7MzSfCjzPqRQJLs+tFDJSe1vUDkL6zvVmeQKKJ2RSA2NX/rMwioyLNrkM7ug+gxKaXikuBHmfUjgYTSYN51XTepHQQyCHW5N1qD2DT9qblr3p6DF0hIzY81yO/yuEB06B4f1SNTQ9r8kGY/mUF8aWTedd2kthaIoFo0+rNf6KOvXMWyBp0/hyAQn7vfH+AO4GLVsnnjZV79QwpCbTSoMemS4Ps8+skaxJfG5t20tvqusvP7Kv7o/cI+iDWIanmB+NT8/q07gEBq2Ryp/z9JYvLtCf2NQbLf7pGG+V8gKv1yd9C71tVF+XKPtMr/JkRvfbg7iIkXeRtwsWrZLNafaiNVyHMu1kKw+Tis+USLM8HFaPenwt13gUBq2UzrL2ujFYHMg82PCYQk+4Qr0e7zcPcFgTwT7q7uKBz8b5Y4cdyH5/R22NDGxMd6TiD6RxxsfkwgfLINshyuPgt3XxLIhv3OSVyA+QC0lcRxEEht9tTRkkDU5oXLxekEwnoSAth9pLmtpQPZp0dIw93VNois9f+2o90jexMkf1O4O7Fxw47Z/TBwsWrZ/DmkjUQfuS7WP/9kntMq4fNbbdARt50uv6jWgQtgd5HmvtY00mQU3STcfTS1dqLdI3sTJH9fuPuCQC65WBDIEQ5q44pA/tFkndUqPtic6uEy9E4g0S2G+tH0RP0yhlqpQEK0ewh3twLZiXaP7M3Qvy/cvbRAwA452kj8qy6vO4oKxAWb+6ByKxAR1gRylLs4wVBrLdo9hLs7gWxHu0f2ZozeF+4OgdxHpjam8tjqjn+OcurEfbC58YTUGNQC6U0giQtgd5HmoZbg0yNMw92dQLaj3SN7MzrvC3eHi1Xk+Hs2l7XRbbtYtQVif5nMIIKpge4D2LdmED9gJ+HuTiDb0e6R/apAKoW7QyBFju9sFoZ2CW3YJh5dgyimaxCdOMoHsO+tQTSTcHcvkM1o95lA7gt33xGI5I/se3ztf8Uj3Jbla2Pj+JmJ46oIZHYVSxZE4e4u0jxcxdKB7MkRJuHu7irYdrT7TCD3hbtjDVKCpSmg0LwR8/BlXsV0H0Rdx/IB7D7S3NWygezJEdJwd72XomttRbvPBHJTuDuVJzqUTRz3cy5W/ixxShvdk6Emt9BitLsonzjupwRylzTcaX1YIO+Mdv9yj1zkujYy5aH4bne8NNr9wz1ygUe0ofndcHf9wNl5RV/pKf8MLlZKOW2c+ht+N9y9o71YiOT1lZ56MjME4imnjfN/w++Gu3dkZP1cBI8v7OFiKQpr4zxZ3fGvpESjXQvh7moz0bSro91dbLu6nqtXLy4szJ0iKfSX7/HzAjkjhDriUGR0x7+WIu0+H+6u8gjpvQ0T7W4aYKHSOBD9z5FH8HHvd/DLLtbpSeKQNmq7WOUF8mi4uxIHNU9YUC/dcXywuzwVVaZ05uLeb+FHBZKvjVQJByaOsgL59zj57bYQ7q7dK28Unq7g9tHHwR0lNH4Hv+diXdVGVR4TyNPh7i6Y3RfHurECUT5WT+aPTavKTwmkaW1onhOI/eWpcHcuVCi7uiCQ3iYSC0R6YMQcwcS938KvuFjXtZF7Tu9ysR4Od6d2zaFyNgz+NLpUIPIw3D2q6jZ+QSBl5o1nBTLnih5mPB3u7lYU8qeNdrdXqhKBkFGvcXzc+x183cUqoo37eF4gz4S7u2sBUlx2a9A2kAiE2vtlXNx7EX43cdzLtKF5aqPwFh7fFV+gQuK4N7hYNbTRmov1NtoMd/+9xHHV5g0I5BLthrv/0C23tbRxH490h1kAMHNxKPNz3lW/HO3+XLD7bwik2sRxL490h7nUOpjHcc58jIVg9QgvkIvR7g8Gu38+7c8JbZxwfz7sYpldOaHHOl34IJ8Fq8fveYHoH6ej3R8Mdv+yQM7OGxBIgh4ivR6hakPCRZMz8whPG9I++Bh2G4CeJFm/nNydu3xYOtp9HuzeVYt2/6iLdVYbbZPXHf/9V6ZVNepYryKl1Ge7jyaXw1c9BNrug7tSv7+XJFm/GO3ug92N0UKwe1ct2n1HIC9MHHdGG0+f85GvzMRx/2lKDBG1CBmE9oTk0HDR5Dr4vKM2UMTHmLsA9BAzorgY7e6D3U2xO0wU7N5Vi3b/mItVZOb4hItVTiBqaAr5Ga1FEYUrjoNec5tY3DiIMWRbT65inY9298HuungxVLFOtPunEscV0cbJM3pcIP8dJb9ZM28wGy0bosmpdfaNQFypG7Qhbl1xLdo9BLvbu3ypP68oEqtGtHuFxHGPUE4bbfOQQLhgenAS8wkdoskpt/d8hNKVGeRStHsIdrcCWZpBHol2f4FAfkUbmmdcLPnhPGhvn6uB6BYAVI9Sta5OYszdoF1Yg2hORLtHwe5WCkvB7o9Eu7ftYlXTxgtdrDkFBUJNaC4ZzfVcE00uP9DtVSwVrO5jzP2gTZKsX4p2j4LdjdFisPsj0e7NCqTuvPEJgZS7zCsHoLliZa6iuWhyYvZBbLC6K/WDNkmyfinaPQp2t+7/UrB7nWj3PRp0sepqo20a7I5itBjtvk9bPfLL2tC01R0laTPafZ+GXKxr2sg6rY+4WC+i3Wj3HdoQSIF5AwK5iFkinI7heHG8+yaPf2TlauNzXlXC0wJh/dmBuBXvPo+XbyrefZMnBQJtzHhYIHThbpAM824l3n0eL99UvPsmD7lY5bXxgy5W2Y8MOcKpGd4mGlD4ePc4gH1Ql1+5fuVLnbn+ISbh7ip9qYqXF+3Gu29yv0AqzRs/J5DSs6oc4dbJ8QLx8e4+gH0c5C+CUB6XOnOFlFga7u6S6jYc777JvXN6HW18iEcF4hLgOIH4eHeNHqbCRpGEaKmV7O4+3N0JpOF4901uE0ilieNjrHZH/f+b6AU3w97PIC7e3bzvwkzUOKVOIGvZ3X24uxdIo/Hu5RPH5bsO+do45Z7UqnzSpqyLdYNAdHiV9oOcQFy8exrA7gTiS625i3dPa3uBtBnv3kDiuExtnGoj1wQCmWOuYimXxgukM/HukwB2K5BQ6s2NRVrbC6TNePcKieNyqd+1H+JhgZh9EBNkKHy8+ySA3QoklAbzrpuFuweBtBrv/nDSBmgjh2evYnU6N4O+hMRH4ePdJwHsbgbxpZF5Nwt3NxdoqRZNm/HuD9+TfkoccLH2qSMQudimPiLdxbunAexuDeJLY/NuWlt9tyngG413b1ogZdrINvmCQEpvFNbn+W3xRVp1sWo3/EoeD42rR7Px7g8LZEkh1dt8Ld8VyB3x7mqlw7jg85DiLXYEkp047k9mQrRUG3XayP06c/xcm/w2+j9ZieNACh37fpBrHzHOQ4q3eHgN0tk5pHIbv7gGAQlchVIKfTl4MYX2IhUSx4GKoDvOoy4Bm20Vdny185XEcZ9k4SGc6I7z9MxJgxX8N7Zxy+11i5e5WMsPNoeLdQUIpJzJcwL5d4HIBAI5TysCAWdZEsfEy0J3nKcfJfrbCIG8jVVtQCDFEBHljgoXq5aNq7+tjUQgcLHaAwKpZfPngDIgkOKo5EMlj4ceqcBxaUw8LHTHFZi+WSS6y7EE6JGyZGoDAikH6/XtkESnQykGXKxCNmeUMZUHXKwrmJuElTi2HuyeCwRSxOa6OEwTEMh5VKiJEQgpGFiPHilAAW1Y0B3nMY6VSkiCjcLGKCENA7rjPGHl8ewMAhdrShltdHCxrhHSOPDFjUJ1Jzvr/O3uXZwzTqHuwB/1zVbxvcEQSKbNwjgvoQ3bBARyHp+ud1i8ijX0hKnUkXwkjPRDmjOuU2rhjBH9/Ib4WQvokaMsDvcywgigOy7AezEQIieIxeQQvcmsRfVaXt0fn+aMc/KaphNCjxxgcdgXmjVS0B1XICrnab/wlKvOZRN2ubLjPPaG+MEmcLEOVz7kPS1LA7fcPsB6RlIaUl4zxkcjoiAQGk87EMiRyhe0kX9CzgQCqYbJOKwEIhfjJCrTuOSnmmsC+TxnlXHGpZqC7qiGymYq1yd6hnHP7ZkKhCgXjUEgq5zXBgTSPLzvObH/YJsMOPKr9K+UMXJZIN90sS5KY0EfcLEaZBjNE7PYTCAutzCdCqR64rgzX7cmjiuhDQ0Sx7UMMVuALL6aFQnEPQD7+gzyJYpp498S/lX3691xGcqFvid9KdSEj+rqFZVThdoo5LOccYN0wBjh4cEmhh/tkWtKqCWPn+2OUoiRD5qlN7l5oLR+SrXeNJzkjFOPjkOoyRVpLB+j6N8AgVyi5J1S7pDZFu8VyDVt/JkfqvzfAIFcYlzbJjzPT/TIBWWU8p0O8hPdUY9l3+oSH++RK9K4WRuaj3dHbcgo1tcg5/iqi1VeGbnnBBfrfkZHuUN+UCCVZg0I5Cf5VI9UksaNfKo7PsE3euSSMhrRhuYb3fEMA+0GR7mjvtzFuqiMHG3AxWqckWANEnGjNM79FRDIJ3hjj9ysjDt5Y3d8m1f1yO2zxu28qjt+gpe4WIWlccL9gYv1bmgfxSbqRYoJVgxJTN6ZF6vOpAGB/B7qwSGM6+X70GuBcFXio7delxerijJap93ueAuraU30mzrcl/ZaJ2NyMfhFebEuTxrv1Iamwe54FSozFu34mkhMTlIxDHOBvCIv1m3SgIv1TdRdgVIg01nAYZPHjZ0WSM9F76XQeF6sAsrIOi0I5JuMRI5oap+WPkdPIEolZgYRhA1OF83mxbpt0ngHT3fHy1HXqOQXXfk3ahGo6WXwCnK5SNvLiwVlLAGBXMLOICvPB9FJsYi66zAIhLl70tvJi3VdGYvagIsF5Hyg0vqQcTlYUXtY3O6H2CrECaSFvFglpPFc3q1cG+TFeoAhHvxT9LinikFNI1oZ3P3HH82LVUIZd5zn80AgV2FsNbNJWIcrF4uqjcEhiOmxvFiQRgYQSBFWnhBC3K96DaLzYJHw/jN5sW5TBtYgoNOZ4brVq1inDpltcYdATg2uWpVP2kAg99OPepZ4ViBZVJ00PggEcomeyjXE+j7IqUOWO9QSUEYeEMgl9C76yF7kYp2UBlwscAa1qaEmkW8IpFQbJ0wgkG9idv1Iye2k2j0CfyoLCOQSdlecknKHvFcglRt7PxBIa9SPxTojDbhYIBskjitnAoF8kLGRxHGgIuiO1kCPNAW6ozXgYtWygYt1N4zIb1SMghQ8KARSywYCuRmmk8CNIxeLz/J0eeJCvrhh7MeoZqnEcaAi6I7zCHXDoL6FdjGricsT5/PFDT1hPGjpdYnjfhJ0x3n0bKBvq13MauKmBT896HulvJbKJY6Di1WtDbhYV9BxJnr4s6V/41QgNkmWq/qKxHEXLCCQn0fNIGbUL84gLk+c+2mquqQNBRPHgYqgO86jnCObnFosvO3yxPl8cVoS3AuERFUhkFZBd5yH9aPQw3yIB3uK86jUT94TOoyJQIokjoOLVa0NuFiXYJwT9bNfSc3bhTxx+ifvVSpf+047iePqWEAgwEHX33JLDp8vzudYLJc4Dl+1vlRflB8uwKAVwfuQL44ke4KPJo4DR0F31MLliQv54vionjjlp5tiiePgYlVrAy5WRVyeuJAvjo82j1ZU4XXPKKxjAoGAg6BHmgLd0RrokaZAd7QGXKxaNnCxPgEEUssGAvkE6JGmQHe0BnqkKdAdrQEXq5YNXKxPAIHUsoFAPgF6pCnQHa2BHmkKdEdrwMWqZQMX6xNAILVsIJBPgB5pCnRHPVSeuKGjvYG6Ag8Sx70AdEc1+EgY6YdOpY1jKrmDK3Dvl0ocBxerWhtwsepB9T0gJuuJvq82KUDiuMvHh0C+gDAJgbiYFJRMHAcqgu6oiPKsdCpeajPy+gIkjnsL6I6KyEU40b+4CcQXFE0cBxerWhtwsSrDRr3CCGKwBUgcd/34EMgX0PmwSD8pUJRLHAcqgu6ohhaCyagoJgUKJI5r/wuJ4yrCwtMOzPhn6eMPyiWOg4tVrQ24WBURel9QLTnsEiQUaJA47trxIZCXQ7mNLHEXrHyBpVTiOFARdEdroEeaAt3RGnCxatnAxfoEEEgtGwjkE6BHmgLd0RrokaZAd7QGXKxaNlv1/wukJhBIa0AgNWyS8f/fDnETEEhroEcOE0b03pDPI24D3dEa6JEjlFXEhkLQHa0BF2ufuvKIBAIXqz0gkH3u0gcE0iDokV0q6wNrkKZBj+xSVx5///6N2kJ3VISbWz58vjgmqiSOg4uVOf5XigPRaUEg1WCj0ALhI6P67ig6ckpGJI67fvzp6N5XTGjj7z7xaUEg1SDE3HduVWLvvGXMve1uo7qcOO4X8aM+nxyBoDvqkgokdqSQOO4xcuSB7qiL1sYwso7J6YL2hPcu60/JxHG/52Kds/H1gxj+WSA1gUBqYkTA+14vQfqRUJ+8GonjsiofWDkcRB5sSRbLEoFA6hIW6fo5CGr2cFlNCiaOewXlRvhV9uSRziEf7Y5GMBMH6XTuOPOLz4vVUOK4p4fsvewLJFYIBFITJQKTDkvpQkuieOK4s+Pkz5+So+49HNDHPz5x3B8kjqtKMoOYJx8M7vkgZRLHPT3cWuaIFHYmEKxBKiLdp35gTE4Vag3ClSR4/ISpIonjnh6ED3NaAwcFAherIsI9m3At1KRA4rinB2hl6oz/DHlAIO3xMwJ5ZPRP2Pv/wsVqj8+4WE8P/h0O/XshkPbIFcjZAdL8CK5Lne4A9cnrkafH2Wup0x2gPhBIXfQ/7ei/Fy5We2T1yNOjrWmm/yzk5v0EEEgGtTohAIG0BlysQKV/cQ4QSGv8jkDiv+Pp3LyrJhBIa+T2yPnhWXKwL9DuDVM5JhBIa6BHmgLd0RrokaZAd7QGbrmtZQMX6y2QsR/J2psQSC0bCOQlkJ7QoWcr76JHmgLdcT/67g8uVt5FjzQFuuN2qJ48yNp/Hi5WLRu4WO/ApG1gaz4WBFLLBgJ5B2buoOUE0qZFnsmZcZhrc+pvgEBuBwIpc3wI5KNkulizHtoteMJiYRxlHSP/jPLP6UQbEMgD7C3SQVPcOTSARmd4F2uXeQH4cbY3CgH4dTZDTQAAAAAAAACgHn45wl3ad/3SvVpYrexY8H7ouiwLn1t7zyKczOFGfGnaSFblg+ckX4/H65vM4pMHDO80Mck9Dm7AXdByz1RXuyQ0vFq43rVtEUoPt8F7wobUaNnCn8zxRrxJ2she5ZHEj4k4ZNOpx0mMx+sLziQ0p4nJY+7BHbjId/dMddnNIjxhfSkwftsilJZvw1c83og3SRvZrkzN/DZmNaAGc2Jy5ITy/ob0MffgDuJNddsnwvwwTzCc77nvWEQ/j1t00XOv1i2SkznWyOT8XSOHKk82UvdtxBD/EXv1FwRywgRUJg7Lsn1i/YXoeYZJ1NaORTcfu/sWnfI4di2SkznWyOT8XSP7lRnjI8trQKojFshe/Z7PFhQ7Julj7sEtxIG9pk+Y/QQ1DtM87nfHopuP3X0L5b7TXYvkZI41kp6/b2S/slxCk7wG1FcskL36o1hYeW2apI+5B7cw75PBehbHBZJYdEfG7tRCDl2yb5EpkJlJaORA5Y5NPqv3bNTstC2QeRv+mfWHTNLH3INbmM/qIh7mh1wsMRHGvvczteCTuLBli0wXa2oSNXLg+Gpg0owGyEi7HRdroQ2WtLFjMnnMPbiD2brQf7gdXqSnFt187O5azOImly3yFulTk7iRvcp6CE5G4o4Nt7Hpw9E2NKkI90yizyxwF1Hku3Gq3IegvQQ7D4zfsZiP3T0LMtXHmkV8Mgcb8aVpI9uVzWf41JfZtqGKYaRH6xsR8rSNHZP0MffgFtwulHumOteet3u1tVG4bOEtj7cx6i2zA22EHbPDjXiTtJGdykJvFE53ubdtFMng3a4vFxRsukjfa2LymHtwCzaOwT1T3cQ0+Cesb4SaLFsEy6MWrF8wWbSYhGkcacSVThvZPj7lG6EmKzaK9NN9u75+Rv3kP7vXBEJNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcyP8Hp6LjE6uj+q4AAAAASUVORK5CYII="}}]);