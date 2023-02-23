"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),i=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=i(t.components);return n.createElement(d.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),k=i(e),c=r,A=k["".concat(d,".").concat(c)]||k[c]||u[c]||l;return e?n.createElement(A,o(o({ref:a},p),{},{components:e})):n.createElement(A,o({ref:a},p))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=k;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var i=2;i<l;i++)o[i]=e[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC server",permalink:"/docs/rpc"}},d={},i=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:i};function u(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"16752179"),(0,r.kt)("td",{parentName:"tr",align:null},"206G"),(0,r.kt)("td",{parentName:"tr",align:null},"215G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 23 Feb @ 02:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"16754729"),(0,r.kt)("td",{parentName:"tr",align:null},"167G"),(0,r.kt)("td",{parentName:"tr",align:null},"174G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 23 Feb @ 02:32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14367171"),(0,r.kt)("td",{parentName:"tr",align:null},"120G"),(0,r.kt)("td",{parentName:"tr",align:null},"125G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 23 Feb @ 02:39")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14367242"),(0,r.kt)("td",{parentName:"tr",align:null},"120G"),(0,r.kt)("td",{parentName:"tr",align:null},"125G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 23 Feb @ 02:46")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"16754927"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.4T"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 23 Feb @ 02:52")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"14367299"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"857G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 23 Feb @ 02:52")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. Stakeworld checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,r.kt)("a",{target:"_blank",href:e(3993).Z},"pruned")," or ",(0,r.kt)("a",{target:"_blank",href:e(9319).Z},"archive")," database size.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},9319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/archivesize-42bc8d034afcca8870ed9da1bedd778b.png"},3993:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/prunedsize-54ebf97c802d2e5134a222a2aeed3b95.png"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);