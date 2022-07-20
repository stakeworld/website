"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[158],{3905:(t,a,e)=>{e.d(a,{Zo:()=>k,kt:()=>u});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var p=r.createContext({}),i=function(t){var a=r.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},k=function(t){var a=i(t.components);return r.createElement(p.Provider,{value:a},t.children)},s={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},A=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),A=i(e),u=n,c=A["".concat(p,".").concat(u)]||A[u]||s[u]||l;return e?r.createElement(c,o(o({ref:a},k),{},{components:e})):r.createElement(c,o({ref:a},k))}));function u(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,o=new Array(l);o[0]=A;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=t,d.mdxType="string"==typeof t?t:n,o[1]=d;for(var i=2;i<l;i++)o[i]=e[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}A.displayName="MDXCreateElement"},6152:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var r=e(3117),n=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,d={unversionedId:"validate/snapshot",id:"validate/snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/validate/snapshot.mdx",sourceDirName:"validate",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Monitoring a validator node",permalink:"/docs/monitor"}},p={},i=[{value:"Download the database",id:"download-the-database",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-1",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-2",level:3}],k={toc:i};function s(t){let{components:a,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Backup date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"11243853"),(0,n.kt)("td",{parentName:"tr",align:null},"78G"),(0,n.kt)("td",{parentName:"tr",align:null},"93G"),(0,n.kt)("td",{parentName:"tr",align:null},"Wed 20 Jul @ 12:23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"11243258"),(0,n.kt)("td",{parentName:"tr",align:null},"80G"),(0,n.kt)("td",{parentName:"tr",align:null},"93G"),(0,n.kt)("td",{parentName:"tr",align:null},"Wed 20 Jul @ 12:23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"13642314"),(0,n.kt)("td",{parentName:"tr",align:null},"129G"),(0,n.kt)("td",{parentName:"tr",align:null},"144G"),(0,n.kt)("td",{parentName:"tr",align:null},"Wed 20 Jul @ 12:23")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"13642315"),(0,n.kt)("td",{parentName:"tr",align:null},"137G"),(0,n.kt)("td",{parentName:"tr",align:null},"147G"),(0,n.kt)("td",{parentName:"tr",align:null},"Wed 20 Jul @ 12:23")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and rocksdb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," format (rocksdb being the default). They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("h2",{id:"download-the-database"},"Download the database"),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,n.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4\n")),(0,n.kt)("h3",{id:"rocksdb-polkadot-1"},"Rocksdb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,n.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"rocksdb-polkadot-2"},"Rocksdb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}s.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);