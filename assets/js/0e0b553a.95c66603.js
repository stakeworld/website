"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>s,kt:()=>k});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var p=r.createContext({}),d=function(t){var a=r.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},s=function(t){var a=d(t.components);return r.createElement(p.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=d(e),k=n,c=u["".concat(p,".").concat(k)]||u[k]||A[k]||o;return e?r.createElement(c,i(i({ref:a},s),{},{components:e})):r.createElement(c,i({ref:a},s))}));function k(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,i=new Array(o);i[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var d=2;d<o;d++)i[d]=e[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>A,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=e(3117),n=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},i=void 0,l={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},p={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],s={toc:d};function A(t){let{components:a,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12425496"),(0,n.kt)("td",{parentName:"tr",align:null},"104G"),(0,n.kt)("td",{parentName:"tr",align:null},"125G"),(0,n.kt)("td",{parentName:"tr",align:null},"Tue 11 Oct @ 01:20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"14827471"),(0,n.kt)("td",{parentName:"tr",align:null},"159G"),(0,n.kt)("td",{parentName:"tr",align:null},"181G"),(0,n.kt)("td",{parentName:"tr",align:null},"Tue 11 Oct @ 01:38")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,n.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,n.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,n.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot paritydb"))),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);