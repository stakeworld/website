"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),p=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},d=function(t){var a=p(t.components);return n.createElement(s.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(e),c=r,h=u["".concat(s,".").concat(c)]||u[c]||A[c]||o;return e?n.createElement(h,l(l({ref:a},d),{},{components:e})):n.createElement(h,l({ref:a},d))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,l=new Array(o);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=e[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>A,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=e(3117),r=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Validate",permalink:"/docs/category/validate"}},s={},p=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],d={toc:p};function A(t){let{components:a,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12353516"),(0,r.kt)("td",{parentName:"tr",align:null},"102G"),(0,r.kt)("td",{parentName:"tr",align:null},"123G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 06 Oct @ 01:20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14755504"),(0,r.kt)("td",{parentName:"tr",align:null},"157G"),(0,r.kt)("td",{parentName:"tr",align:null},"178G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 06 Oct @ 01:36")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot paritydb"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);