"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),d=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(i.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(e),k=r,m=c["".concat(i,".").concat(k)]||c[k]||u[k]||o;return e?n.createElement(m,l(l({ref:a},p),{},{components:e})):n.createElement(m,l({ref:a},p))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,l=new Array(o);l[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var d=2;d<o;d++)l[d]=e[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},d=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:d};function u(t){let{components:a,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Last update: Wed 10 May @ 10:14"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Snapshot"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"17848846"),(0,r.kt)("td",{parentName:"tr",align:null},"233G"),(0,r.kt)("td",{parentName:"tr",align:null},"241G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15458103"),(0,r.kt)("td",{parentName:"tr",align:null},"177G"),(0,r.kt)("td",{parentName:"tr",align:null},"183G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"17848846"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.5T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15458104"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.1T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"westend2"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15759127"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"271G")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--sync warp")," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks. "),(0,r.kt)("p",{parentName:"admonition"},"In the future this will probably become the default for syncing a database and snapshots may become obsolete."),(0,r.kt)("p",{parentName:"admonition"},"For now the snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);