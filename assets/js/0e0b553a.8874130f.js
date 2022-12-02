"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>A});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),d=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(s.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(e),A=r,k=u["".concat(s,".").concat(A)]||u[A]||c[A]||l;return e?n.createElement(k,o(o({ref:a},p),{},{components:e})):n.createElement(k,o({ref:a},p))}));function A(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=e[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},s={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:d};function c(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed. "),(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15576452"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"161G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 03:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15576544"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"160G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 03:31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13174360"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 03:38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13174430"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 03:45")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"14958604"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1004G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 03:51")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"13174487"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"696G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 02 Dec @ 03:51")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}c.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);