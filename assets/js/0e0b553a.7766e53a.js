"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),i=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=i(t.components);return n.createElement(d.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=i(e),k=r,A=c["".concat(d,".").concat(k)]||c[k]||u[k]||l;return e?n.createElement(A,o(o({ref:a},p),{},{components:e})):n.createElement(A,o({ref:a},p))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=c;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var i=2;i<l;i++)o[i]=e[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC server",permalink:"/docs/rpc"}},d={},i=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:i};function u(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rebuilding"),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 27 Feb @ 02:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"16812118"),(0,r.kt)("td",{parentName:"tr",align:null},"167G"),(0,r.kt)("td",{parentName:"tr",align:null},"175G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 27 Feb @ 02:25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14424623"),(0,r.kt)("td",{parentName:"tr",align:null},"121G"),(0,r.kt)("td",{parentName:"tr",align:null},"126G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 27 Feb @ 02:32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14424695"),(0,r.kt)("td",{parentName:"tr",align:null},"121G"),(0,r.kt)("td",{parentName:"tr",align:null},"125G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 27 Feb @ 02:40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"16812321"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.4T"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 27 Feb @ 02:45")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"14424753"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"865G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 27 Feb @ 02:45")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. Stakeworld checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,r.kt)("a",{target:"_blank",href:e(3993).Z},"pruned")," or ",(0,r.kt)("a",{target:"_blank",href:e(9319).Z},"archive")," database size.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},9319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/archivesize-5b863abad411c4b280b9f7eeba777dcd.png"},3993:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/prunedsize-f02ce06ed5e99ebe145975bc33ce89db.png"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);