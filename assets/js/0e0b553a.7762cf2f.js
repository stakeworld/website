"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),d=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(s.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=d(e),k=r,c=u["".concat(s,".").concat(k)]||u[k]||A[k]||l;return e?n.createElement(c,i(i({ref:a},p),{},{components:e})):n.createElement(c,i({ref:a},p))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>A,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},i=void 0,o={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},s={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:d};function A(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12486944"),(0,r.kt)("td",{parentName:"tr",align:null},"105G"),(0,r.kt)("td",{parentName:"tr",align:null},"127G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 15 Oct @ 07:46")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14888879"),(0,r.kt)("td",{parentName:"tr",align:null},"160G"),(0,r.kt)("td",{parentName:"tr",align:null},"183G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 15 Oct @ 08:03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12487371"),(0,r.kt)("td",{parentName:"tr",align:null},"106G"),(0,r.kt)("td",{parentName:"tr",align:null},"111G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 15 Oct @ 08:29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14889306"),(0,r.kt)("td",{parentName:"tr",align:null},"151G"),(0,r.kt)("td",{parentName:"tr",align:null},"158G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 15 Oct @ 08:46")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot paritydb"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);