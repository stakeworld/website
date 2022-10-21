"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>A});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),i=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=i(t.components);return n.createElement(d.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),k=i(e),A=r,c=k["".concat(d,".").concat(A)]||k[A]||u[A]||o;return e?n.createElement(c,l(l({ref:a},p),{},{components:e})):n.createElement(c,l({ref:a},p))}));function A(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,l=new Array(o);l[0]=k;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var i=2;i<o;i++)l[i]=e[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=e(3117),r=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},d={},i=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:i};function u(t){let{components:a,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed. "),(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14973546"),(0,r.kt)("td",{parentName:"tr",align:null},"160G"),(0,r.kt)("td",{parentName:"tr",align:null},"170G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 21 Oct @ 05:20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14973884"),(0,r.kt)("td",{parentName:"tr",align:null},"148G"),(0,r.kt)("td",{parentName:"tr",align:null},"154G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 21 Oct @ 05:53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12572199"),(0,r.kt)("td",{parentName:"tr",align:null},"115G"),(0,r.kt)("td",{parentName:"tr",align:null},"123G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 21 Oct @ 06:25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12572411"),(0,r.kt)("td",{parentName:"tr",align:null},"105G"),(0,r.kt)("td",{parentName:"tr",align:null},"109G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 21 Oct @ 06:47")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);