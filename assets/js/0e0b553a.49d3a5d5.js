"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(7294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var i=n.createContext({}),d=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(i.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),k=d(e),c=l,m=k["".concat(i,".").concat(c)]||k[c]||u[c]||r;return e?n.createElement(m,o(o({ref:a},p),{},{components:e})):n.createElement(m,o({ref:a},p))}));function c(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,o=new Array(r);o[0]=k;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=t,s.mdxType="string"==typeof t?t:l,o[1]=s;for(var d=2;d<r;d++)o[d]=e[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=e(3117),l=(e(7294),e(3905));const r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},d=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:d};function u(t){let{components:a,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Chain"),(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Full"),(0,l.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,l.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,l.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,l.kt)("td",{parentName:"tr",align:null},"pruned"),(0,l.kt)("td",{parentName:"tr",align:null},"17801081"),(0,l.kt)("td",{parentName:"tr",align:null},"171G"),(0,l.kt)("td",{parentName:"tr",align:null},"179G"),(0,l.kt)("td",{parentName:"tr",align:null},"Sun 07 May @ 02:22")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,l.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,l.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,l.kt)("td",{parentName:"tr",align:null},"pruned"),(0,l.kt)("td",{parentName:"tr",align:null},"15410544"),(0,l.kt)("td",{parentName:"tr",align:null},"147G"),(0,l.kt)("td",{parentName:"tr",align:null},"154G"),(0,l.kt)("td",{parentName:"tr",align:null},"Sun 07 May @ 02:55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,l.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,l.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,l.kt)("td",{parentName:"tr",align:null},"pruned"),(0,l.kt)("td",{parentName:"tr",align:null},"15410698"),(0,l.kt)("td",{parentName:"tr",align:null},"148G"),(0,l.kt)("td",{parentName:"tr",align:null},"152G"),(0,l.kt)("td",{parentName:"tr",align:null},"Sun 07 May @ 03:10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,l.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,l.kt)("td",{parentName:"tr",align:null},"archive"),(0,l.kt)("td",{parentName:"tr",align:null},"17801663"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.5T"),(0,l.kt)("td",{parentName:"tr",align:null},"Sun 07 May @ 03:20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,l.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,l.kt)("td",{parentName:"tr",align:null},"archive"),(0,l.kt)("td",{parentName:"tr",align:null},"15410795"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1017G"),(0,l.kt)("td",{parentName:"tr",align:null},"Sun 07 May @ 03:20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"westend2"),(0,l.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,l.kt)("td",{parentName:"tr",align:null},"archive"),(0,l.kt)("td",{parentName:"tr",align:null},"15712034"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"270G"),(0,l.kt)("td",{parentName:"tr",align:null},"Sun 07 May @ 03:20")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,l.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,l.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,l.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots will become absolete."),(0,l.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,l.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,l.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,l.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,l.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,l.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,l.kt)("h2",{id:"database-size"},"Database size"),(0,l.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,l.kt)("a",{target:"_blank",href:e(3993).Z},"pruned")," or ",(0,l.kt)("a",{target:"_blank",href:e(9319).Z},"archive")," database size.\n",(0,l.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,l.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,l.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,l.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,l.kt)("h2",{id:"manual-install"},"Manual install"),(0,l.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,l.kt)("p",null,"Setting up a validator node is covered ",(0,l.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,l.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,l.kt)("h3",{id:"install-the-database"},"Install the database"),(0,l.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,l.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,l.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,l.kt)("p",null,"This can be changed with ",(0,l.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,l.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,l.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,l.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,l.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,l.kt)("p",null,"Edit the default service script and add for example ",(0,l.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,l.kt)("p",null,"Or create a new script by copying the default service script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,l.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,l.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,l.kt)("h2",{id:"different-databases"},"Different databases:"),(0,l.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,l.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,l.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,l.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,l.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,l.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,l.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,l.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,l.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},9319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/archivesize-da2cddd01bc271299f0c80b636a8a3b9.png"},3993:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/prunedsize-de13bd058766b1d1e512807037786bd0.png"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);