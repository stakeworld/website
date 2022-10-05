"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>A,kt:()=>c});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var s=r.createContext({}),p=function(t){var a=r.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},A=function(t){var a=p(t.components);return r.createElement(s.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,A=i(t,["components","mdxType","originalType","parentName"]),u=p(e),c=n,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return e?r.createElement(m,l(l({ref:a},A),{},{components:e})):r.createElement(m,l({ref:a},A))}));function c(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,l=new Array(o);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var p=2;p<o;p++)l[p]=e[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=e(3117),n=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Validate",permalink:"/docs/category/validate"}},s={},p=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],A={toc:p};function d(t){let{components:a,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},A,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12339124"),(0,n.kt)("td",{parentName:"tr",align:null},"102G"),(0,n.kt)("td",{parentName:"tr",align:null},"123G"),(0,n.kt)("td",{parentName:"tr",align:null},"Wed 05 Oct @ 01:20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"14741120"),(0,n.kt)("td",{parentName:"tr",align:null},"156G"),(0,n.kt)("td",{parentName:"tr",align:null},"178G"),(0,n.kt)("td",{parentName:"tr",align:null},"Wed 05 Oct @ 01:36")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,n.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,n.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,n.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot paritydb"))),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}d.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);