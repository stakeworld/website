"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),d=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(i.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(e),k=r,A=c["".concat(i,".").concat(k)]||c[k]||u[k]||o;return e?n.createElement(A,l(l({ref:a},p),{},{components:e})):n.createElement(A,l({ref:a},p))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,l=new Array(o);l[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var d=2;d<o;d++)l[d]=e[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},d=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:d};function u(t){let{components:a,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Last update: Sat 13 May"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"17893435"),(0,r.kt)("td",{parentName:"tr",align:null},"234G"),(0,r.kt)("td",{parentName:"tr",align:null},"243G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15502937"),(0,r.kt)("td",{parentName:"tr",align:null},"179G"),(0,r.kt)("td",{parentName:"tr",align:null},"184G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"17893622"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.5T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15503021"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.1T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"westend2"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15803980"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"272G")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,r.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots may become obsolete."),(0,r.kt)("p",{parentName:"admonition"},"For now the snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);