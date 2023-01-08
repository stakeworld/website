"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),i=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=i(t.components);return n.createElement(d.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),k=i(e),c=r,A=k["".concat(d,".").concat(c)]||k[c]||u[c]||l;return e?n.createElement(A,o(o({ref:a},p),{},{components:e})):n.createElement(A,o({ref:a},p))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=k;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var i=2;i<l;i++)o[i]=e[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,s={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC server",permalink:"/docs/rpc"}},d={},i=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:i};function u(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"16094141"),(0,r.kt)("td",{parentName:"tr",align:null},"200G"),(0,r.kt)("td",{parentName:"tr",align:null},"213G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 08 Jan @ 02:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"16094251"),(0,r.kt)("td",{parentName:"tr",align:null},"156G"),(0,r.kt)("td",{parentName:"tr",align:null},"163G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 08 Jan @ 02:33")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13705302"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"115G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 08 Jan @ 02:40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13705370"),(0,r.kt)("td",{parentName:"tr",align:null},"111G"),(0,r.kt)("td",{parentName:"tr",align:null},"115G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 08 Jan @ 02:47")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"16094448"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.2T"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 08 Jan @ 02:52")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"13705426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"767G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 08 Jan @ 02:52")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. Stakeworld checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,r.kt)("a",{target:"_blank",href:e(3993).Z},"pruned")," or ",(0,r.kt)("a",{target:"_blank",href:e(9319).Z},"archive")," database size.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n")),(0,r.kt)("h3",{id:"edit-the-systemctl-startup-script"},"Edit the systemctl startup script"),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n")),(0,r.kt)("p",null,"You can edit settings at wish, changing ports and settings at will."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h2",{id:"different-databases"},"Different databases:"),(0,r.kt)("p",null,"Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,r.kt)("inlineCode",{parentName:"p"},"su - polkadot -s /bin/bash"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),") or when running as root do a ",(0,r.kt)("inlineCode",{parentName:"p"},"chown polkadot:polkadot <dbdir>"),". Of course change the part after ",(0,r.kt)("inlineCode",{parentName:"p"},"-C")," when installing to another location."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},9319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/archivesize-554568f3adf31c8faa428e1d4d5065a7.png"},3993:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/prunedsize-2eb8ed50213f75ebaf701b5a7059ea5d.png"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABa1BMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr4fHx+fn5+/v7/f399fX18/Pz8TExMPDw8LCwtPT08bGxsDAwNHR0cnJydvb2+np6c7OzsXFxfDw8MAnnNWtOnmnwAvLy/w5EIAcrJJ5jPnAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAbkElEQVR4nO2dC5ajOpKGobbBfnIdAqHb090zPT1TVXPv8keht0BgMKCH8//OSRvjECgd+o0kwqGuAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA3bDhWXsAakb0EjbzcN84By/Q4MF3RrCu49Pcj8G+GQIBQEMCkQw97/jMejbqi8pkX0iByC26wrg9kzQQtDGYHQq7lw1Tr+DewJUAoDGMQLp+6ITg3dhPcp+8grgXjA18YuEeaSo3uBTVJJ9tu7d7zRVHiM4b2PcAaA0rEGrQhJKC7WLRC0ZvDL3fw0kkBDX7bjbl3V4tkIFxb+DeA6A1lgIRoUBoQzX4yX79qz2yF6X20ePopKP3WvspNLDvAdAagUBokNH3RiDuhWvwbg/XQwsz1LDSMXuVPTeFrAGPRisAtIMRCO8H3stBhr2C+Bf2CuL3kPncT9Oq40R7lb2+HEUG6j0AWsMIZO65as/cXEH8CzsG8XsUcuzdr68JcpcUyGCuKrFBwhyA2lECmejrXV5EuknQlz91t9wLRr0pNTY3eyY2mVksRv0uoxi3l6Z5jRSsgXsPgNYI7qSPrBey48Rkg+4n96If5l7dB3F75IBCbnX6Noe7B2/3MrInRm/gSgAAAAAAAAAAAAAAAAAAAAAAAAAAgH3wq24ADENv1WAiknoEsQJg4MILhGDzpikA349x6hICQRcLAAsEAsAOEAgAO0AgAOwAgQCww75AelAVuVvH8yS/jSm737WvaZsf8DovBBI/LF8ffhsF7ytYAJ1KZnz3FpnKI7BMyW84KBCdiuB4vuSsAnl1hEOnqczmcyv0BEogb+vD6GuyOf8ijgqEyvLhcBVuEoiWts9vA4EUs7lfIF+SM/Y7UPPUyZF0+mLhE+D7rPrj3PcDn9Urt9cV78wRKHGMyYbsElvSG+54oqf8/EGW/vAQQsjziD6oBxvlgShFoEvN746QgyMe+XHkQEeMctq0WaETAvkyHC+xg2yek+5quIZpE+AHWfXHbqBkSUO41xYnKJXfzKZuIlHQxqgTW6rEr+54jPOBsSBLf3gIEgiLhMrUAeYgNb87Qg4+cFTYMuUEYvThGmacAN9m1VeJLH3e/Lh1UxeLq8sQ5d63nSUpAxYU0gZKIFGWft/FUvsDgYjOK1an5rdHyAEEUhWb7vg6zjvnFbL3orPph9/cXiIuJzI1TicQn3Rf9+Rlf0mnP55M3liCDToxcpSC341BfJZ+dQS14NEc14M2BuZT8/sj5ABdrFw217pYTwukn/iiYdoE+HFWfSsQt1cXZ51eE8zkc50ok7hp+dKO3rXH0waBQKbgELpA3NXzAjHjaX+EHEAguWxio78kCZtyV5DODEJcw+x0AvxFVn0jkCizvm3ddA2y3/PBFURMVkg+BX/iCsJsXTYFYg5Y3xUE3IBShHswrKxKCkSPgFV7NN0t0kOQVT8QyCKzvr2NMoVjEDNVKov50Xw/7o5BbIEuqIcViBvUYAzyOWgR/LXJqkDBWayOflJHs1A0ReRT5gdZ9aMriN0bFFdPaharH+yGWn2CDuoS6gezWDpLf3SIzgrE1sMLxOXur24W6wN6NFltlteJHZYHKisQ1fToJsMgfAJ8l0M/GoO4vWFxJYzUfRAa39jj6ROwzmfpDw/RWYG4ejiBuNT87gg5gEDusjkhi1sEcuuNQrAFuliXeEsVdwkEZAAeOYdTxBVZQCDtgC7WARvdlG9RxL4+PlIgz8S71zTN+00FolrwA6qoVSB3hLxvxKuPq2Q6K4GUC3ff5xO/si6RQRab8qhAIBdD3jfi1ecDAtkpngICyYQTRAZVBCfboLRAroe804LE3poC19lAV4dJ3zShMMhkvLsvrosh3P1hm+LdJ6cKq4ibw90lP3+eMn/BPSHvsoVH1upCQTEpOoRKCjAd7x4KhIq1FO7+AQIJvrozycKo4mStzwjkp+JEgRfcEfLu+0jW2glE3WNUt+aTsSZBcbUf4e4ZcC01F7vdpyOUFcgNIe9ulK2s7e9XlREdUP5tRCsGxVWxlsLd20K30ZZUEbDtjp9Hefvcd4S8K2JrJxCSwna8e/B7dhZFFSPc/T6brIoIZZHhJ7cZBMJuCHmnErG1E4jcmPrNX0wdEEi+cPeTSRvqFUjUUh9Wxd6FosRv0h/oYnXXQ94704D5+grSDWKeN39zuxRItnD3F+uDtNzFSjTg22Wxo4onKC6QyyHv9FZkrQQi9Bvquz8d774USKZw95frg3yMQFqWhafwNK9+uhTy3i2t6XFiRhr0Oh3vvhRIpnD3l+uDNNzFulsQG6qo4zfpH0GdOaEhkF1ZZKv0txcIzzXxdJLrAqmUNwVxTBaFaNgdrxh0vEh9fHOB1C2IJbW4g1pIukN0/jJQe7j7x3axdmaxjl4n6gkOMxQRSCLS/JhAxvguejq7+0GBVJvdXfJDuq7Fv0ggtM8+q78fB46R00aZ7dqUWh8kEWl+TCBzfA8knd39qEDWldilpitIvbTXh3rBKXf8ktxx0iCQ1qYksQKh8HcXve7CzI2VimIPj6CD5d9L714u3P2TBfJxnHDHL8P1k/q26VKzmz+Vlt1Fr9sbdM5qGWai7qG/md69ULj7LeuD1DoGqedkJcYgNwuEejc+LaIWCPf3leWWDfHwViLRxXo3vXvL4e6f2x6rq9CmO34d50hdIlykuUvNbgTiwkiUFmyQoLdKZHd/O707wt3BAcoIhJkNl5pdC8SmZTfR6zbM3FvFVxCV3f3t9O4th7uDbJQViEvNrgWi07K76PX4CjJGVxB1BNUZeje9e1Xh7gHoYuWyqbiLxczGcgyixtguev3lGGTUlm4MYka6x9K7Fwt3fwEEksum8kG6wqVmtzNZFHTuotejWax+6LpUdvd307sXCnd/CbpYVVFYIKv7IDT/5KLXXZi5tTJR7HF29zfTuxcKd38JBFIVRW4Ugh3QxcplU28sFtgBAsllA4E0CTxSFRW5466I92ei3aua5gXZKOWOmyLet8LVV9nd1wJpObv75/ZoqqtQMYGw7o6I961w9VV294RA9sq/qMSTQCC5bOoXyB0R73SEOLs7Zf2RVv+3n9w9KK9zwreU3R1k45w7fv++67y3RbyrG4pRdndj9SK5eygQpYKWsruDbJxxx2/FPee9KeI96CK57O5WRvvJ3YPyOqUjwt0ftmmzQsUEclPEux9ku+zuViD7yd2D8osE2g2Eu39ue6yuQtvu+H2UI1VZcVPEuybO7m4Fsp/cPSivB+8IdwcJigvkYsQ7scju7kYqu8ndjwik2nB3kI2iYxDiYsQ7scju7gSym9x9JRCEuz9s02aFigvkasR7t8ruzqzVbnL3lUBKhruHd2ggkFw2D9wHuX2al7gW8U7E2d3VvRSm54jp3XS0+0og94e7B6tlGQXEKx+MgnLfTYtS6GJVxUe741rw1VVcFiI5QlIXv8XSIIKN8o25Xyjkoz3SHh/sjsLJ3fXIheaZ7RzYGC0NMpjZgnlGF6uMTdWhJs9TOrm7nvuycwJzsJyvJlxaCgIpYdOaQOoId3dGV/tnduJNqdQmkfAC4WFv66xAQDa+b7g7rY6YKHzfuEWNQRgJRLhlOkOBLAKZLRBIVXzfcHfZRFMztzcO7Cl2WN+Fd7PLyyvI2KvoZHSxStjc38X6U3LGfofy4e6y96M7Pjra3adEMcHuNizMVvHwL6si7OSwEUo4BjE3dPhSIA2vD7L/9+nrg/xpeKuhLCkf7k6jZB3cqNq+m5Rlg/6+Z8OoPhx5BBf3foqR1CdmPvgEqfEslhb6SiAnTwMepahAioa70yyTGkKbaHdzHBfsLqtijuDi3s8xM04n4HSvcWKrWSw5BJLS4aP85yCQetl0x5/Heee8FYS7MzNSVoWC1PCd7hhRT20OjjCebrkz03nrZnNDfrk0yCiYmWXAGKSEzbUxyNMCYWajVLi7HiQLttRNKBDSBK1U1S9a9qNAILls2hBIqXD3wbT6afEzkVAgcngw9sF7WUAXqyqKC6RUuLsZ6tBI3f8cpIsFIg+j5otPj8+vAIFUReFZrK5UuLu9tS1H0Tba3aeGdwIZ9QyXi3vPAbpYuWzuvg/ykEDKhLsLdxdisKHozKWGdwLhZhrcxr3nAALJZVP1jcIslA13fxN0sarig91RONz9XT7YIy3yue7IEu7OaZldcTzB7wHQxcpl01q4+11cCnc/Fe3OGY1peiHunAeGQHLZ1C4QuxDnm1+/e+Huq2j3lECuR7vPbByZGGhC+USpF3zgV1bLlBbI2/rYDXdfT8muBXJDtDutEqpuPPLEkd4FAqmKU+74S3LfqamFT6p9u5xtk9DRVUH8+tz3A599epAxLN6p+do42p3iuegOuXgR7m6j3U2pdbR79zLcvY8f7gFdrFw2d3ex/jIcL7GPYGaVWi8Q2lDxJGH8+kAhf0O41xZXT2IR7W6jDF+Fu9tod10qEe3evQx3h0DO2LRZoaICMfpwAuHRYNfGr3MdnTX5vaZ4F3axXLS7FciLcHcX7a53J6Ldu5fh7sUEArKx6Y6/jvPmqVWwt66EvYLI728vERd9SO3UCWQr3N1FuzuB7Ie7u2h3VSoZq/gy3F2OYhjTD29+BgkgkKooKZB+4ouVB3iQjNDHr1uBuL26OLMHiq2dQHbD3X20u/mZbyLa/WW4u/C8+RkkQBcrl821LlaOK0hnBiFOIB21dqmbOH7dCMTvdcV1idjaCWQ33N1HuxuBpK4g1Ya7f257rK5ChQWix746xtB+C/fjIn7dCMTv9cWJhbUXyF64u492N+dIRbsfC3efpunOW/boYlVF2Vmsjm7XTS6x+kQ3FtS4Oopfd1cQuzco3q2i3f0E7U64exDtrkslo91fhrtPSj7mV5A3AYFURXGBqPZrE6vLIYj6GXccv27HIG5vWLxbWndqotZIg16nwt2DaHdTKhXt/ircXf36saO8DDcGY6GLlcsmNtoIVS94o/B5ng531xeVntIvXDsQkjYUsFGKcA9bP3b64Av68+HuTOe6Soea8GDui6uoFj0x7XtqWB8kK14QO78nX5X6XHdkCHfXH97Y7XyMem5uVv1CEY9isD7IwyQvEWcTLMAdF3B3RjjbsNCTyiNTGUjjHh/WB7nb5i1BQCAP4m7jb45BhB7qTwmBYH2Qyza3KAICeY5RD0JMTHLKQAd7DTqHdT+L3kkB64OcItbCjYKAQJ5E9PMwDqJP3CJRMBsioAQiVJJeY4v1QXbxWnhQDAf0AXdcg27c9JuzyWoEoh78ErkmzTvWB0nhZFGMVZUgkItwvj1XpmQxm+leowEfFvm91wdxWvjxw20WZ1nnc+uDgLP4cbiSiomStLu+2fog1AAruETEhF25NJ/qjirwwwwSCO/VGMRp4TusD+LaXyUEw5qD/8FHuaMyeCyQbhLxT9s/bH0Q3wBt+yslg4DdS8SlcHdQiEYFkmibJQTyus908j+DQGqjUY8UEMN5RbxBo+6oBT4LprjvkG16JLMWnhPEkjbdUQ2CzYPivkO22cV6ThBrMWSNfYFALvHAuoXfXSCvrw4QSDuw+w/ZpkeuaOGYLArRpjuqYbjxt7aGRj2SaP7rfXVrIUmj7qgFSu6OMcjWNO/i4tBgcBgEchFmue+QjQokdaOwcIVuMYJAagMeqQq4ozbgkaqAO96Hlpay3HfUZrtYVZ0MXawKYBiDnLFps0IQSG3AI1UBd9QGPFIVcEdtoIuVywZdrCaBQHLZQCBNAo9UBdxxmZsDeuGRqoA7rjEySgyTWDvkbdDFymWDLtbzDP1MqxiKrdSKB/mIpA1VnQwCqQNKUrKxPohbDsQvCzIss5pgfZDqgTsu0Qd/S+xlxV1eaB1Euzhih/VB2gDuuAStOkoLRbPUe0P8rNNkzXalBKwPUtoGXaznGfph6qcxmb56KRC93LpLPYr1QUrbQCAZGMLE1DF2ORD7rK8gQ5Td3fCxqUfbB+64yjQth9kGuxyIWxZEjUGYEwjWB2kBuOMS9v7HZu4GuxyIep4ZzQpjfZBKbNDFeh67ku7mx2iXA3HLgrildL75+iAV2CizXRusD3KVXjDVwUp9jHY5ELcsyEimbtL3u60P0ihwxyV6msfqkh+jXQ7ELwsyM+7G6N33WB+kfeCOS6h7ILKblfoY7XIgflkQOQYRwYj+w9YHqepkGIPUAX18XPTjjR8jBJLLBgJ5Hv3xDXcO5eCRqoA7LmE6TNPFaN4QeKQq4I7aQBcrlw26WA+DxHGnbNqsEATyPqxY4jiQDbijNuCRqoA7agNdrFw26GI9zqQC2Fn4O9rLQCC5bCCQp5nol+Yj/d7jRoXAI1UBd1xABR4KmswSL20PA49UBdxxARV4SA+c3XjQAzaf26OprkIQyAXow9P5GhCLVdnJIJAaYPLiMVA3i7P7DgqPVAXccQEafqgZrBFjkE8F7rjA1At1D33MPYv1uT2a6ioEgVxhFCptdX9jMC8Eks0GAsnFrQsgwCNVAXfUBjxSFXBHbaCLlcsGXaxmQNKGEjYQSFn4zCgnL+813O5wYH2QBoA7HoPSAU02RTWtehDtwPogbQB3PMZEk1sz09sUsRXuwPog5W3QxaoAs16OGBY7sD5IeRsIpDxmxbXRJRx1S7BhfZA2gDseRA7CdQyKFYDbgfVBWgHueBS1cI5f+8Du6LA+SAU26GJVgOpcuTVBuqC3hfVBSttgfZCi8IGUoPSgrxrBDgLrgzQB3PEUnKl1Qeg6oYcbwQ4F1gdpAbjjMdSNcwqHt+Nxt8OA9UHK2mAM0iQQSC4bCKRJ4JGqgDtqAx6pCrijNtDFymWDLlaTQCC5bCCQJoFHqgLuqA14pCrgjtpAFyuXDbpYTQKB5LKBQJoEHqkKuKM24JGqgDtqA12sXDboYjUJBJLLBgJpEnikKuCO2oBHqgLuqA10sXLZoIvVJBBILhsIpEngkfv5krxZFO6oDXjkVr488c5u82UE3FEb6GJdt3Et/usrIRD3+sfSJnEoCKQGkLThNpu4uUcC+VqYrAWSkAgE8iCDzr87MLMsyCSwPsgz2Lb99YLYplsXWR0Z7ngMLrRAZjbpZUEo2+jEsD7IvbzSxL5gkhIKgTseY5w6JRCjErPywWT1gPVBLK6lJh9evHM3y8pBIE8SCyTM5471QYgnWvhFllWEQJ5EaWOgLhYbKcGiHINYWWB9kBrlAYHkRYtg7vt+JkkopbjlD779+iCltZBiVcnv444SKIEIWrtT6sKuCKLfuro+iPamekw9XOvY31EwWWvHHY35MCfOt3bhUV+DNyARTGqailY9UNeM6d31Qch9P9xDAyTqb/j5M3pYvj789sGC8vwvC8r6yS2sD5KZWCBi7vwV5OT6IE81ngcLdl/pt39WTMKFtzYIEKO6UbQ8OheCpDL6McjJ9UGqblZJtCYaI+HCu9sEsIhewf2yICNb3ElnR9cHabCtNSmQtUIgkNpIC6R0w/kuHHMHKAgEUpCD7gAF+Zgulqx26Tqc5qA7QEFODdJ/SZIP2++8ePu2gkogm293/qFbvD789gMFj7oDlGNrmpccuHi4zO/f64fkziNvL1+rdvhOwbfPeEPBg+4A5Uh75InG8/tRSCDPnuEBIJD62RBI6aZzGq3CxlhfQiCQ2kh6pMG21iYQSPWkBVK64XwXIJDq+RSBoIsFHuFTulgYpINHyDhIxzQvpnnb4/Q0b5d6SO5cvf3rwbtvttol7ve9XfCoO0A5tjxyzJ/gZiCQ2oBHqgLuqI3vlPanrA2WP2gSCCSXDQTSJPBIVcAdtQGPVAXcURvoYuWyQRerSSCQXDYQSK3QgiHj1pvwSFXAHflR2az7LYXAI1UBd+SH6ZzvG++ii5XLBl2sOtG5SF2O3iUQSC4bCKRORiWNabn0muWIRw557a4DoUIgKzp9NYdASttAIHVy5AriH5avD7+NgvcVBDnx6yEk6UFVZG0bgGB2VU8AwBq6DzJu3gcB4LuzeycdAAAAAAAAAHJyZHRyaARz14FQIVAMtcDn0HEz587pDjvdHxl6vaynGs6bMb2x7ZY2ZsO8dBMAKSP1sHky2vAn6ThjG8dx57B7IxtzCGs0JGttjdQrvdzpnLT5l6nQxn8f2Wz883GFFifzEyb+E1qebGED8iEE7yb7oc9CPgzygQvX2ikw/g8dHc+cbWSjN+xLH0q/NnKv0idTG0GF5p51SRt7Dn+8yEYfQhijWT2vaq2NmBGIWxo7ZaMrJNL/fWQzq/nzab9C8cnc5xV9QvHJYptb/A4OMtIXnblnqON7hfTAOOkV1vUtxb/9rVPR8ZOzjWz0hn3pQ+nXRu5V+mTaxp1kZDoif21jz+GPF9uoQ/zTGPXuruja6N//E1R640D//ocuP27894ENV18MSvk7FYpP5j6v6BOKTxbbHPYtuAsjEKE+exOipRyhglIm1Rmy0fHK/aGN36DHIJQ+aeRerU8WbFCFeD9pgaxs5iBc3+xd2nTdf1ojL5C10cyWAkna+LCD7ePQg/7nh36/QtHJop8exJ+QO9naBmTFuMzGMOqd+ouMdo29lsmkjaaFjd+gRx8ImTayrxIn8xuqQqrTnrT5exBsqfeubDr+hzVS/RPqwSeM5Dl0rWahu/xpG/sJ6edtG30FGXq+W6HoZFHgaCwQd7K1DcgJF0I960Yw6BdWIJ0ViIqOl+PLcWnjN7RA1CGlcdrIvkqczG2oCs3C9NTWNn9357B7VzZc/Jczms2QOGEkzCsxyzbN5i0b+wnp5x0bNQZhsj3vVSg6WfTTg+gT8idb24CMcKadaS7hwjhg4wqiPBvZ+I34CpI2Mq9SJ7MbqkKTnrxJ2qyvIEsbeQhXETXeTdVa/+O+wVGJpI39hMzzns3M+nnjOPGPDKzR5hUkOBmuICWZejOpojv87mdUyzGIjY6Xz7GN3/BjkG0jO+uUOJnZ0BWazVTwkLCZg3B9fclZ2NAhbEX+e6tC5h/3DW7asLGfkHnetTH/216FeHSyaG/wCYUnW9uAbHD3gTPlkZGZl8Es1n/QLNbM+EAekn5a2HShQFwo/YaReZU8mdrgQQtQEzcJmyBcX1/oYhseVsS1rqSRVZg6W588kDW0z3s2I51LzLsVWpws/OmB/4Tik61sQDb8pLwOf5/ta9O5VxP7f6joeM5U51ksbbpIIDaUfsPINsvUydSGr5AWSMomCNfXc1SxjT6ENaK7N9SfTxqZTl2v/rMhaWMN7fOejfwWUWP0vQotThb+9MB/QvHJVjYgF/6mtp6BMYENwt3qXt1Jl95d2Ijw52/c3vXdMdo6WWzTaYGkbf4R3JPueWxj/6d/7dWa9wF8EqlKRzb/a233jkNjEDFtHcdUKD6Zu0se/veLky1tNn4KCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3Mn/A4XfXL0RtdyLAAAAAElFTkSuQmCC"}}]);