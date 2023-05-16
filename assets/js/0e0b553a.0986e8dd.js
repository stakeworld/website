"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(a),k=r,m=c["".concat(i,".").concat(k)]||c[k]||u[k]||o;return a?n.createElement(m,l(l({ref:e},p),{},{components:a})):n.createElement(m,l({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=c;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3025:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(3117),r=(a(7294),a(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},d=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:d};function u(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Last update: Tue 16 May"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"17930212"),(0,r.kt)("td",{parentName:"tr",align:null},"235G"),(0,r.kt)("td",{parentName:"tr",align:null},"244G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15539853"),(0,r.kt)("td",{parentName:"tr",align:null},"180G"),(0,r.kt)("td",{parentName:"tr",align:null},"185G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"17930398"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.5T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15539935"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.1T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"westend2"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15840864"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"273G")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,r.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots may become obsolete."),(0,r.kt)("p",{parentName:"admonition"},"For now the snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes.\n",(0,r.kt)("img",{alt:"snapsize",src:a(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);