"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},A={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(s,".").concat(c)]||u[c]||A[c]||o;return a?r.createElement(k,l(l({ref:e},d),{},{components:a})):r.createElement(k,l({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3025:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>A,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(3117),n=(a(7294),a(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Validate",permalink:"/docs/category/validate"}},s={},p=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],d={toc:p};function A(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12324743"),(0,n.kt)("td",{parentName:"tr",align:null},"101G"),(0,n.kt)("td",{parentName:"tr",align:null},"122G"),(0,n.kt)("td",{parentName:"tr",align:null},"Tue 04 Oct @ 01:20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"14726742"),(0,n.kt)("td",{parentName:"tr",align:null},"156G"),(0,n.kt)("td",{parentName:"tr",align:null},"177G"),(0,n.kt)("td",{parentName:"tr",align:null},"Tue 04 Oct @ 01:36")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:a(2307).Z,width:"800",height:"300"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,n.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,n.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,n.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot paritydb"))),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,e,a)=>{a.d(e,{Z:()=>r});const r="data:image/png;base64,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"}}]);