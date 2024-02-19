"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>i});var a=s(5893),d=s(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},r=void 0,n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},l={},i=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Last update: Mon 19 Feb"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Chain"}),(0,a.jsx)(t.th,{children:"Database"}),(0,a.jsx)(t.th,{children:"Format"}),(0,a.jsx)(t.th,{children:"Blockheight"}),(0,a.jsx)(t.th,{children:"Snapshot"}),(0,a.jsx)(t.th,{children:"Full"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"ksmcc3"}),(0,a.jsx)(t.td,{children:"paritydb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"21939032"}),(0,a.jsx)(t.td,{children:"374G"}),(0,a.jsx)(t.td,{children:"388G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"polkadot"}),(0,a.jsx)(t.td,{children:"paritydb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"19546682"}),(0,a.jsx)(t.td,{children:"314G"}),(0,a.jsx)(t.td,{children:"326G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"polkadot"}),(0,a.jsx)(t.td,{children:"rocksdb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"19547093"}),(0,a.jsx)(t.td,{children:"313G"}),(0,a.jsx)(t.td,{children:"328G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"ksmcc3"}),(0,a.jsx)(t.td,{children:"rocksdb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"21940432"}),(0,a.jsx)(t.td,{children:"365G"}),(0,a.jsx)(t.td,{children:"387G"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"snapsize",src:s(9735).Z+"",width:"800",height:"300"})}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,a.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,a.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,a.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,a.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,a.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,a.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,a.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,a.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,a.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,a.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,a.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,a.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,a.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,a.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,a.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,a.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,a.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,a.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,a.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,a.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,a.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,a.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["This can be changed with ",(0,a.jsx)(t.code,{children:"--base-path"})," so for example ",(0,a.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,a.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,a.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,a.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,a.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,a.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,a.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,a.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,a.jsx)(t.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,a.jsxs)(t.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,a.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,a.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,a.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,a.jsx)(t.code,{children:"-C"})," when installing to another location."]}),"\n",(0,a.jsx)(t.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(t.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,a.jsx)(t.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(t.h3,{id:"rocksdb-polkadot",children:"Rocksdb polkadot"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9735:(e,t,s)=>{s.d(t,{Z:()=>a});const a="data:image/png;base64,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"},1151:(e,t,s)=>{s.d(t,{Z:()=>n,a:()=>r});var a=s(7294);const d={},o=a.createContext(d);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);