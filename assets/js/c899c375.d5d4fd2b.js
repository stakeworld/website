"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[158],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),p=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},d=function(t){var a=p(t.components);return n.createElement(s.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(e),c=r,k=u["".concat(s,".").concat(c)]||u[c]||A[c]||l;return e?n.createElement(k,i(i({ref:a},d),{},{components:e})):n.createElement(k,i({ref:a},d))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},6152:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>A,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},i=void 0,o={unversionedId:"validate/snapshot",id:"validate/snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/validate/snapshot.mdx",sourceDirName:"validate",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Monitoring a validator node",permalink:"/docs/monitor"}},s={},p=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manually download the database and install later",id:"manually-download-the-database-and-install-later",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3}],d={toc:p};function A(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"11886809"),(0,r.kt)("td",{parentName:"tr",align:null},"91G"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 03 Sep @ 12:20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14290271"),(0,r.kt)("td",{parentName:"tr",align:null},"144G"),(0,r.kt)("td",{parentName:"tr",align:null},"163G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 03 Sep @ 12:34")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manually-download-the-database-and-install-later"},"Manually download the database and install later"),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);