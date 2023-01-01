"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>A});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),d=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):s(s({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(i.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=d(e),A=r,k=c["".concat(i,".").concat(A)]||c[A]||u[A]||l;return e?n.createElement(k,s(s({ref:a},p),{},{components:e})):n.createElement(k,s({ref:a},p))}));function A(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,s=new Array(l);s[0]=c;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var d=2;d<l;d++)s[d]=e[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},s=void 0,o={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC server",permalink:"/docs/rpc"}},i={},d=[{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:d};function u(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15993711"),(0,r.kt)("td",{parentName:"tr",align:null},"205G"),(0,r.kt)("td",{parentName:"tr",align:null},"219G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 01 Jan @ 02:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15993823"),(0,r.kt)("td",{parentName:"tr",align:null},"156G"),(0,r.kt)("td",{parentName:"tr",align:null},"163G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 01 Jan @ 02:33")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13604573"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"115G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 01 Jan @ 02:40")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13604643"),(0,r.kt)("td",{parentName:"tr",align:null},"111G"),(0,r.kt)("td",{parentName:"tr",align:null},"115G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 01 Jan @ 02:47")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15994025"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.2T"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 01 Jan @ 02:53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"13604701"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"754G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sun 01 Jan @ 02:53")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."),(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. Stakeworld checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,r.kt)("a",{target:"_blank",href:e(3993).Z},"pruned")," or ",(0,r.kt)("a",{target:"_blank",href:e(9319).Z},"archive")," database size.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manual-install"},"Manual install"),(0,r.kt)("h3",{id:"setup-a-validator-node"},"Setup a validator node"),(0,r.kt)("p",null,"Setting up a validator node is covered ",(0,r.kt)("a",{parentName:"p",href:"./validate"},"here"),". The default apt install creates an user polkadot with a home directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot")," and a default service script ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/systemd/system/polkadot.service"),"."),(0,r.kt)("h3",{id:"install-the-database"},"Install the database"),(0,r.kt)("p",null,"Database location: By default the polkadot binary runs as user polkadot and creates ",(0,r.kt)("inlineCode",{parentName:"p"},".local/share/polkadot")," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot"),"."),(0,r.kt)("p",null,"This can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," so for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path /home/polkadot/myvalidator")," or whatever you prefer."),(0,r.kt)("p",null,"To restore a kusama paritydb database snapshot for your node with a default install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("p",null,"You can check the startup by running the binary as user polkadot: ",(0,r.kt)("inlineCode",{parentName:"p"},"polkadot --chain kusama --database paritydb")," and see if it accepts the database or throws any errors."),(0,r.kt)("p",null,"Edit the default service script and add for example ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb --chain kusama"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su - -c "vi /usr/lib/systemd/system/polkadot.service"\n')),(0,r.kt)("p",null,"Or create a new script by copying the default service script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'su - -c "cp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service"\nsu - -c "vi /etc/systemd/system/validator.service"\n')),(0,r.kt)("p",null,"You can edit setting at wish, changing ports, "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --state-pruning 1000 --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot DBDIR"))),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C DBDIR\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C DBDIR\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C DBDIR\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C DBDIR\n")))}u.isMDXComponent=!0},9319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/archivesize-ac9c9f6d480b02d09866ed4d99a1a7f8.png"},3993:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/prunedsize-f34bf512cbb78b7c3a66e93bc27f2c51.png"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABSlBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr4fHx+fn5+/v7/f399fX18/Pz+np6fDw8MAnnNWtOnmnwAvLy/w5EIAcrLRKBNlAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAan0lEQVR4nO2da7akKpCFtabhfGoc+KC7bvW98//bBm8UfCuhZ39rnUwPGaKZwU4BI4OqAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb0Rzrz0AnJH1iBj6sKwdgn/Q4MFPRoqq6ruhboOyAQIBQEMCGWnqvuoHUYtWX1Q6+88okHGLrjCupBsNJG00pkBhS0XT1YreG7g9AHgZRiBV3VRS9lVbd2PZeAVx/wjR9J0IS0bTcaMfRdWNz7bd21JzxZGy8gb2NQDehhUINWhCScF2segfQS80tS/pSSQENftqMPu7Ui2QRvTewL0GwNuYCkSGAqEN1eA7+/WvSsZelCqjx9ZJR5da+y40sK8B8DYCgdAgo66NQNw/rsG7kl4PLcxQw0rHlCr73uxkDfpotALAezAC6eumr8dBhr2C+H/sFcSXkPlQd92s40Slyl5fjiID9RoAb8MIZKh71Z57cwXx/9gxiC9RjGPven5NGItGgTTmqhIbJMwB4I4SSEdf7+NFpOokfflTd8v9I6g3pcbmpqQTnZnFEtTvMopxpTTNa6RgDdxrALyN4E56K2o5dpzE2KDrzv1TN0Ot7oO4knFAMW5V+jaHuwdvSwXZE603cHsAAAAAAAAAAAAAAAAAAAAAAAAAAIBl8KtuAAxNbdVgIpJqBLECYOilFwghhqwpAD+PtqsSAkEXCwALBALAAhAIAAtAIAAsAIEAsMCyQGrAiqdbx/0kv40pu9+5r2mbH/A8KwLxj/W0IFO8XvATdrzzFJ5Hp5Jpj94iU3kEpin5DRsFolMRbM+X/KxANtTyDTvmp1dWIIf1YfTV2Zx/EVsFQvv2zeZTuEggWto+vw0E8g07xe+RPfYLUPPUyZF0+mLpE+D7rPrtUNdNP6j/XKnbvTI1UOIYkw3ZJbakF1x9sqb8/EGW/rAKKcfjyDo4D9GOFVGKQJea39XwBFs98usbdsxPb49Afhu277HA2Dw73dVwDdMmwA+y6rdVQ8mSmrDU7k5QKr9BdFVHoqCNVie2VIlfXX2i7xshgiz9YRUkEBEJVagKhiA1v6vhCT44Knwz5QRi9OEaZpwA32bVV4ksfd78uHVTF6tXlyHKvW87S6MMRLCTNlACibL0+y6WKg8EIiuvWJ2a39bwBBAIK7Lu+L2dI8eVY+9FZ9MPv7m9RFxOZGqcTiA+6b7uyY/9JZ3+uDN5YwnR6MTIUQp+NwbxWfpVDWrBoyE+D9pohE/N72t4AnSxWNkVE0jd9ZOGaRPgx1n1rUBcqd5dVHpNMJPPtaNM4qblj3b0qq1PGwQC6YIq9A5xV88LxIynfQ1PAIGwsit3BanMIMQ1zEonwJ9k1TcCiTLr29ZN1yD7PR9cQWRnheRT8CeuIMKeS1YgpkKeVxDwCCUFokfAqj2a7hbpIciqHwhkklnf3kbpwjGImSodd/Oj+bpdHIPYHargPKxA3KAGY5AfTMFZrIp+UkezUDRF5FPmB1n1oyuILQ12V09qFqtu7IZafYIqdQn1g1ksnaU/qqKyArHn4QXicveznMXi3jd5Vxfrv5GkXVmBqKZHNxka6RPguxz60RjElYa7K2Gk7oPQ+MbWpw8gKp+lP6yisgJx5+EE4lLzuxqeAAJ5zE6p4r+AhF2pG4UgB7pYt6J18F+ahD3cwQ145Eq8HrKqWFYI3MENdLFO223Www8VyD3x7tymeZk3/KcFclwUfAVyRch7Jl69nSXTmQmkXLj7Ml/8yrqLa1TBWyAnQ94z8erDBoEs7J4CAimO18OVoljUR3GBnA95pwWJvTUFrouGrg6dvmlCYZDJeHe/u94N4e5F7FbNbtTD9QL582eX+QrXhLyPLTyyVhcKiknRIVSjANPx7qFAaLe3hbszb/hHBeL0cGnX6ag89gnkj2LHDitcEfLu+0jW2glE3WNUt+aTsSbB7qoc4e7FKKMHo4qsNDRlBXJByLsbZStr+/tVZUQVjn+ZaMVgd7Xb28Ld345rnQVEsaaKgLw7/mzl8Ed0Rci7IrZ2AiEp5OPdg9+ziyiqGOHuN9uV0kOkivM/uX1AIOKCkHfaI7Z2Ahk3ujr7i6kNAnku3P1A0gZ+DT9jN2mdD6vi7Nso28Wqzoe8V6YB9/MrSNXIYcj+5nYqkMfC3VfWB/lYF2vabO8UyJ6u01aKC+R0yDu9FFkrgUj9gvruT8e7TwXyULj76vognxbIS1QRUHiaVz+dCnmvptb02AkjDfo/He8+FchD4e6r64N8q4t1lx6yonjsJ7efgGdOaAhktyqyerj9bXxZIP1TE087uUYg7+CMHrar4ka+5Y6IRseL8AMCSYmChx5mcHEHtZB0h2j/ZYB7uPtP6mItz2IV7Dqx7mIlIs23CaSN76Kns7tvFAjb7O4jv0b3feQvFogq06owr//aWE8Ru1LrgyQizbcJZIjvgaSzu28VyPwkFuF2BXkNnDtQ6+xyxz8jVxw0CKS1KUmsQCj83UWvuzBzY6Wi2MMadLD8sfTu5cLdf5hA3s0Od/xjOH9Q3zZdanbzp9Kyu+h1e4POWU3DTNQ99IPp3QuFu1+2PshLxiBMD3vHGORigVDvxqdF1ALp/X3lccuGeHgrmehiHU3v/vZwd+4t6+sC+Wc7Gw/lcZHmLjW7EYgLI1FasEGC3iqR3f1weneEu4MNlBGIMBsuNbsWiE3LbqLXbZi5t4qvICq7++H07m8PdwePUFYgLjW7FohOy+6i1+MrSBtdQVQNqjN0NL07q3D3AHSxWNmVFch0DKLG2C56fXUM0mpLNwYxI91t6d2LhbuvAIGwsis5i1UFqdntTBYFnbvo9WgWq26qKpXd/Wh690Lh7qugi8WKwgKZ3Qeh+ScXve7CzK2ViWKPs7sfTO9eKNx9FQiEFUVuFIIF0MViZYfvK25AIKzsIBBuwCOsYOSOqyLe74l2ZzfNCx6hlDsuinjPhavPsrvPBfL27O7c+yboYp3iooj3XLj6LLt7QiBL+6+cxJ1AIKzsigrkioh3qiHO7k5Zf0ar/1tO7h7sr3PCvy27O3iEfe74+/eq414W8a5uKEbZ3Y3VSnL3UCBKBW/L7g4eYY87/iquOe5FEe9BF8lld7cyWk7uHuyvUzoi3L2IHfPTKyeQiyLe/SDbZXe3AllO7h7sP0mg/ZJwd+4t6/MC+buVjUeKuSjiXRNnd7cCWU7uHuyvB+8IdwcJigvkZMQ7Mcnu7kYqi8ndtwiEdbg7eISiYxDiZMQ7Mcnu7gSymNx9JhCEuxexY3565QVyNuK9mmV3F9ZqMbn7TCAlw93DOzQQCCu7wtO8xLmIdyLO7q7upQg9R0yvpqPdZwK5Ptw9WC3LKCBe+aCVlPuum+yFLhYrPu2Oc8FXZ3FZiMYRkrr4TZYGkaIdXxjqiUI+7ZH38WF3FE7urkcuNM9s58DaaGmQxswWDAO6WIztviuQ0snd9dyXnRMYguV8NeHSUhAIWztGAuER7u6MzvbP7MSbUqlNIuEF0oe9rSMCAY/wc8PdaXXExM7XjVvUGESQQKRbpjMUyCSQ2QKBsOLnhruPTTQ1c3vhwJ5ih/VdeDe7PL2CtLWKTkYXi63dLoH8O7LHfoHy4e5j70d3fHS0u0+JYoLdbViYPcXNv6yKsJPDRijhGMTc0OmnAvnW+iAs1/3YardvfZB/DYcaypTy4e40StbBjartu0lZ0ejve9G06sMZa3Bx77toSX1y6BufIDWexdJCnwlk52HArRQVSNFwd5plUkNoE+1u6nHB7uOpmBpc3Ps+BtHTAXq619iJ2SzWOAQapdO345uDQPiSdce/2zlyXAbh7sKMlNVOQWr4SneMqKc2BDW0u1vuIHTeusHckJ8uDdJKYWYZMAZha1dMIMJslAp314NkKaa6CQVCmqCVqupJy74VCISVXXGBlAp3b0yr7yY/EwkFMg4P2jp47RHQxWJFcYGUCnc3Qx0aqfufg1SxQMZq1Hzx7vH5GSAQVhSexapKhbvbW9vjKNpGu/vU8E4grZ7hcnHvT4AuFiu78gIpE+4u3V2IxoaiC5ca3gmkN9PgNu79CSAQVnalbhQ+Qtlw94Ogi8WKD7ujcLj7UT7skTfyXXc8Eu7e0zK7cnuC3w2gi8XK7oMCORXuvivavRc0pqmlvHIeGAJhZVdQIHYhzoNfv0vh7rNo95RAzke7D6JthWxoQnnHXit88CvrzZQWyGF9LIa7z6dk5wK5INqdVglVNx77RE1HgUBYscsd/41cd2hq4Z1q3y5nWyd1dFUQvz7UddMPPj1IG+5eqfnaONqd4rnoDrlcCXe30e5mr3m0e7Ua7l7HD9eALhYrux2e/c+wfY9lpDCr1HqB0IaKJwnj1xsK+WvCUru7epKTaHcbZbgW7m6j3fVeiWj3ajXcHQI5b8f89MoKxOjDCaSPBrs2fr3X0VmdLzW7V2EXy0W7W4GshLu7aHddnIh2r1bD3YsKBDxC1h3/befgoVWwtz4JewUZv7+9RFz0IbVTJ5BcuLuLdncCWQ53d9Huaq9krOJquPs4ihFCPxz8DBJAIKwoKZC66ycrD/RBMkIfv24F4kr17sJWFFs7gSyGu/tod/Mz30S0+2q4u/Qc/AwSoIvFyq7oFaQygxAnkIpa+6ibOH7dCMSXut31HrG1E8hiuLuPdjcCSV1BWIe7c29ZEMgVAtFjXx1jaL+F63YSv24E4kv97sTE2gtkKdzdR7ubY6Si3beFu3ddd+Ute3SxWFF2Fqui23WdS6ze0Y0FNa6O4tfdFcSWBrtXs2h3P0G7EO4eRLvrvZLR7qvh7p2Sj/kV5EVAIKwoLhDVfm1i9XEIon7GHcev2zGIKw13r6bWlZqoNdKg/1Ph7kG0u9krFe2+Fu6ufv1YUV6GC4Ox0MViZVfwRuH93B3uri8qNaVfOFcRkjawtfvwBf3+cHehc12lQ036YO6rV1EtemLa99SwPsgL+K47Hgh31x9eWy18jHpublD9QhmPYrA+SGnUDwD1rwCzvwWEO07g7oz0ImOhJ5VboTKQxj0+rA/y9GEnetiWfgQCOYG7jZ8dg0g91O8SAsH6IDcfdl0PEMjNtHoQYmKSUwY62KvROazrQdZOClgf5DJmPaWtetiiELjjDLIemraRdeIWiULYEAElEKmS9BpbrA9ylANXBgikFHTjps7OJqsRiHrwS+SaNO9YH2SX2U16gEDup+/zc2VKFoOZ7jUa8GGRWB8ktU6Haqb08OvXU6oImJzfvvVBwF78OFxJxURJ2iKXRfsHrw/iNfCwEtIkzvBHueNp/DCDBNLXagzitPBj1wfRTbG0GFIkTvb77ihHHwuk6mT80/bPrw+i21z4WLETBm4Uvo3PCCTZHEsLZE0PMyAQbnzGI2WVoNmthxmfcUcZ+kEKxXVVfsUjBZVwQg8zvuKOQkgxNIrrqvxKF+s5Pdz6NiCQU9ywbiEEkhPFpisDBMIKcX2VX/HIGSmEetiiihv5ijsK0Vz4W1vDZzySvgrMi5koIcNn3FEGSu6OMUjaLiOQiR64vw0I5BTCcl2VnxFI5kbh/Ye91A4C4QY8wgq4gxvwCCvgjuPQ0lKW62r9UBeL8WHRxXoAgTHIeTvmpweBsAMeYQXcwQ14hBVwBzfQxWJlB4FwAwJhZQeBcAMeYQXccZqLA3rhEVbAHedoBSWGSawdchh0sVjZQSCnaOqBVjGUudSKG/lo0gbGh4VAnoGSlGTWB3HLgfhlQZppVhOsD8IeuOMUdfA3xV5W3OWF1kG0iyNWWB/kHcAdp6BVR2mhaJF6rYmfdZqswa6UgPVBSh4WXaxnaOqmq7s2mb56KhC93LpLPYr1QUoeFgJ5iCZMTB1jlwOxz/oK0kTZ3Q0/K/Xoq4A7ztJ102G2wS4H4pYFUWMQ4QSC9UHeANxxCnv/I5u7wS4Hop4HQbPCWB+EwWHRxXoGu5Ju9mO0y4G4ZUHcUjpYH6RKrQ/Cyg7rg5yllkJ1sFIfo10OxC0L0pKpm/TF+iCvAO44RU3zWFXyY7TLgfhlQQbRuzF69YPXB3kVcMcp1D2QsZuV+hjtciB+WZBxDCKDEf3n1wdhfFiMQZ6BPr5e1u2FHyMEwsoOAjmF/viaK4dy8Agr4I5TmA5TdzKaNwQeYQXcwQ10sVjZQSDHQeK4C+yYnx4EcgJRNHEceAS4gxvwCCvgDm6gi8XKDgI5Q6cC2EX4O9rTQCCs7CCQE3T0S/OWfu9xoULgEVbAHSdQgYeSJrPkqu1m4BFWwB0nUIGH9NCLCyvdaMe9b4IuFqAPT+drQCzWUTvmpweBnEGMF4+Gulm9uK5SeIQVcMcJaPihZrBajEG+Ctxxgq6W6h56W2IWi3vfBF0sMF45VNrq+sJgXgiElx0EcgGXLoAAj7AC7uAGPMIKuIMb6GKxsoNAOICkDWztIJDb6AdBOXn7WtPbAgfWB3kBcMdtUDqgzqaoplUPogKsD/IO4I7b6GhyaxB6myK2wgKsD1L2sOhiMcGslyObSQHWByl7WAiEB2bFtdYlHHVLsGF9kHcAd9zIOAjXMShWAK4A64O8BbjjVtTCOX7tA1tQYX2QwodFF4sJqnPl1gSpgt4W1gepsD7IT6ZvSAlKD/qqERQQWB/kFcAdd9ELtS4IXSf0cCMoUGB9kDcAd9yGunFO4fB2PO4KDFgfpNxhMQZ5LRAIKzsIhBvwCCvgDm7AI6yAO7iBLhYrOwiEGxAIKzsIhBvwCCvgDm7AI6yAO7iBLhYrOwiEGxAIKzsIhBvwCCvgDm7AI6yAO7iBLhYrOwiEGxAIKzsIhBvwCCvgDm7AI6yAO7iBLhYrOwiEGxAIKzsIhBvwSAl+jyRfgDu4AY88y++AxMtwBzfQxXrAzqnh928I5AUgacNjdhM9/F5TCARyI43Ov9sIsyxIJ7E+SBEyF4w5813hjtvopRbIIDq9LAhlG+0E1gd5kjVFQCDlaLtKCcSoxKx80Fk9YH2QNTPdYtVjsLm1YK82IJACxAIJ87ljfZAlsyNt+woSpwKB3InSRkNdLNFSgsVxDGJlgfVBspSSBwTyOFoEQ13XA0lCKcUtf4D1QTIwkgfccS9KIJLW7hx1YVcE0S9dsj6Icqv2bfA4KzjXj79wx8zb8FzRzg+w5MKN7gBHIBF0apqKVj1Q14zuxPogrtX9+lWoJZ1l9p7CF//8cY/B5uGC7TvSufz5k/jMsT7IzcQCkUPlryD71wd5pK3cvKO+RiQt/pQn6cKr2gJIoLpRtDx6LyVJpfVjkP3rg3BoQicxFwquJF14YXMAEbJW9H5ZkFZM7qTvWR+Ec8vaCnOBpBQCgXAjK5DSrecHsMMdoBQQSDH2uAOU4tNdLHojpU8izx53gFLsHqT/MxI9zgoyxc/vqAWStqjosdKPwebhgiM77nEHKMTCNC95UT8Ejxfx9699mD8eKMgUV6opHtjxulNYKtjjDlCIrEfubCt/n0EJ5KFjHQACeQN5gZRuP+cx1yqupC4hEAg3ch7h3LK+AgTyArICKd16fgAQyAv4skDQxQKn+XIXC4N0cJoig3RM82Ka9y0cmuZV8rGPs4JMcVTwz1U32xaL7Ru5/oiX1LTHHaAQCx5ZanXgHiAQbsAjrIA7uIG0P6zsIBBuQCCs7CAQbsAjrIA7uAGPsALu4Aa6WKzsIBBuQCCs7CCQAtCCIW3uRXiEFXDH86hs1nVOIfAIK+CO5xE653vmVXSxWNlBII+jc5G6HL1TIBBWdhDI47RKGt106TXLVo98xI756UEgz6PTV/cQSMnDQiB82XQFqSebi8XrBT9hxztPATyIXw8hSQ1Y8WjbAISwq3oCAObQfZA2ex8EgJ/O4p10AAAAAAAAAHiSraOTj9gxP73NduAW1AKfTdWbOfee7rDT/ZGm1st6uuG82TD21dRutuF2XLTLHtdu+ONVvRAL9fkTNQWRnavGmjXJtxEcTZfodVCHrJ3dyHwsM7vMx+J3N69PjusnVdz7Bs8gZV919kMf5PjQjA+9dM3cBMbbDeHsI7vZho+oX7bLHNdtBOc31KLK2tnj+XojO1uNNRvU8+xtuKPZEunWzE7b2Q2Z/lhmdoOaYO+ydvb84uO6DzP61MATtPQ9Zu4Z6vheOXqg7fQK6z4w3m50zj6ym234iPplu8xx/YY7Xit0gH7azh7P1xvbmWqsWe1ulSbN4reRr85ttJmPZWLXq68M9X2QtrPnFx/XfZjhpwaewwhEqs/ehGgpR7jA+DhCXnk4tJttBPaLdpnjRhv6/Pq60wJJ2oXnZ16Z2lE1zswLJGXmS3xDzdr5jeX6/PGbOmfnzi86bvThQyDPY9xhYxh1oXKEC2uM4htVHyGym214+2W7zHGjDX1+otEXpLRdeH76lZkdVePMVKeFuvVJM19SD1IPDvJ2bkM9L9vpK0hT9xk7d37RcaMPHwJ5nF5K9WxGifof2+6UAQnEbKjxYzu1m214+2W7zHGjDXV+gzQ9trRdGMFfp+ujarzZYMbASTNfIoexLYthyc5u6OcVOzUGEWODT9u584uOG/08AQJ5ml5oX5lLuDQOWLiCKM9FdrMNb79slzluuKHOr9NzOVm7+RVkaqeqcWZqVJx6G/bTCFsi7ZW1sxvmec1uEPWQry/+IYK1wxWkJF1tJkx0D9/9jCro2rd2DGIj5Mfn2G624exX7DLHDTb0+Q1mOrjJ2IXnpwqmdroaa/Y/udNzn0bYErsFO7thnlftzDvO2MUfsz1uVAqBPEvvPnChXNQK828wOeSmVwbRN+Sl0VcTu9mG3XHNLnNct9EHDULN42Tsggh+fUmJ7Ww1xsw1uYyZK1FtchxU5+zshn1es2vpuHLI2tm3ER83/HkCBPIsfsJdh78P9n/Tk7eB8WajF6pzLKd2sw2745pd5rhuw5+fFkjOLojg1zNUQ7Iaa0a3c6jXnzGzJX2t3m6TtbMb9nnNbvyKUWP0nJ39mOPjhj9PgEAexd/J1hMsJrBBuvvbyTvpo/cmdvMNY79qlz6u3QjutJv7MZn64lvQdR/b+WoW34Y3syWdTL0NZ2c3/tcWrNj1NAaRXbY+9zbi4zov+LcLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADczf8DbJtcDlleOv0AAAAASUVORK5CYII="}}]);