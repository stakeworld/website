"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),d=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(i.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=d(e),k=r,m=u["".concat(i,".").concat(k)]||u[k]||c[k]||o;return e?n.createElement(m,l(l({ref:a},p),{},{components:e})):n.createElement(m,l({ref:a},p))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,l=new Array(o);l[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var d=2;d<o;d++)l[d]=e[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},d=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:d};function c(t){let{components:a,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Last update: Thu 01 Jun"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"242G"),(0,r.kt)("td",{parentName:"tr",align:null},"251G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"186G"),(0,r.kt)("td",{parentName:"tr",align:null},"191G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"18159977"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.6T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15770339"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.1T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"westend2"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"16069036"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"279G")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,r.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots may become obsolete."),(0,r.kt)("p",{parentName:"admonition"},"For now the snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}c.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);