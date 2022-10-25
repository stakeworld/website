"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var s=r.createContext({}),d=function(t){var a=r.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=d(t.components);return r.createElement(s.Provider,{value:a},t.children)},k={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},A=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),A=d(e),c=n,m=A["".concat(s,".").concat(c)]||A[c]||k[c]||l;return e?r.createElement(m,o(o({ref:a},p),{},{components:e})):r.createElement(m,o({ref:a},p))}));function c(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,o=new Array(l);o[0]=A;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=e[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}A.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=e(3117),n=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},s={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:d};function k(t){let{components:a,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed. "),(0,n.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"15032185"),(0,n.kt)("td",{parentName:"tr",align:null},"150G"),(0,n.kt)("td",{parentName:"tr",align:null},"157G"),(0,n.kt)("td",{parentName:"tr",align:null},"Tue 25 Oct @ 07:10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"15032446"),(0,n.kt)("td",{parentName:"tr",align:null},"150G"),(0,n.kt)("td",{parentName:"tr",align:null},"155G"),(0,n.kt)("td",{parentName:"tr",align:null},"Tue 25 Oct @ 07:36")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12629960"),(0,n.kt)("td",{parentName:"tr",align:null},"106G"),(0,n.kt)("td",{parentName:"tr",align:null},"111G"),(0,n.kt)("td",{parentName:"tr",align:null},"Tue 25 Oct @ 08:02")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12630147"),(0,n.kt)("td",{parentName:"tr",align:null},"106G"),(0,n.kt)("td",{parentName:"tr",align:null},"110G"),(0,n.kt)("td",{parentName:"tr",align:null},"Tue 25 Oct @ 08:21")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,n.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,n.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,n.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,n.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,n.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}k.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);