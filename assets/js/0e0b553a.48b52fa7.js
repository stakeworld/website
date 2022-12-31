"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),i=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=i(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},A=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),A=i(a),k=r,c=A["".concat(s,".").concat(k)]||A[k]||u[k]||l;return a?n.createElement(c,o(o({ref:e},p),{},{components:a})):n.createElement(c,o({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=A;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}A.displayName="MDXCreateElement"},3025:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=a(3117),r=(a(7294),a(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,d={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC server",permalink:"/docs/rpc"}},s={},i=[{value:"Snapshots",id:"snapshots",level:2},{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:i};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. Stakeworld checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage.")),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node."),(0,r.kt)("p",null,"An example systemctl service file can be found here: ",(0,r.kt)("a",{target:"_blank",href:a(9418).Z},(0,r.kt)("code",null,"yourvalidator.service")),". Copy to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," and of course change ",(0,r.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--database")," to your preference."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15979360"),(0,r.kt)("td",{parentName:"tr",align:null},"201G"),(0,r.kt)("td",{parentName:"tr",align:null},"214G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 31 Dec @ 02:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15979471"),(0,r.kt)("td",{parentName:"tr",align:null},"156G"),(0,r.kt)("td",{parentName:"tr",align:null},"163G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 31 Dec @ 02:33")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13590173"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"115G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 31 Dec @ 02:40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13590244"),(0,r.kt)("td",{parentName:"tr",align:null},"111G"),(0,r.kt)("td",{parentName:"tr",align:null},"115G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 31 Dec @ 02:47")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15979673"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.2T"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 31 Dec @ 02:53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"13590301"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"752G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 31 Dec @ 02:53")))),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,r.kt)("a",{target:"_blank",href:a(3993).Z},"pruned")," or ",(0,r.kt)("a",{target:"_blank",href:a(9319).Z},"archive")," database size.\n",(0,r.kt)("img",{alt:"snapsize",src:a(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DBDIR"),": By default the polkadot binary runs in ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," but it is easier and less error sensitive to run it in ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/<mynodename>/chains/<chain>")," and set the datadir in your startup options, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/mynode")),(0,r.kt)("p",null,"To restore a kusama paritydb database snapshot for your node with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/mynode"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /home/polkadot/mynode/chains/ksmcc3\nsudo curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/mynode/chains/ksmcc3\nchown polkadot:polkadot /home/polkadot/mynode -R\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C DBDIR\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C DBDIR\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C DBDIR\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C DBDIR\n")))}u.isMDXComponent=!0},9418:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/yourvalidator-bb75e2b610b99850dea2ae3746ea5d53.service"},9319:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/archivesize-d8c4daabbd42510c68dcc69fd4ad5f40.png"},3993:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/prunedsize-d4de24f96e4ea0748d1109c8d979d587.png"},2307:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);