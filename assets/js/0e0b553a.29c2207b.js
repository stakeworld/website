"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var s=t(5893),d=t(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},l={},i=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}];function c(a){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Last update: Mon 08 Jan"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{}),(0,s.jsx)(e.th,{children:"Chain"}),(0,s.jsx)(e.th,{children:"Database"}),(0,s.jsx)(e.th,{children:"Format"}),(0,s.jsx)(e.th,{children:"Blockheight"}),(0,s.jsx)(e.th,{children:"Snapshot"}),(0,s.jsx)(e.th,{children:"Full"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(e.td,{children:"ksmcc3"}),(0,s.jsx)(e.td,{children:"paritydb"}),(0,s.jsx)(e.td,{children:"pruned"}),(0,s.jsx)(e.td,{children:"21336278"}),(0,s.jsx)(e.td,{children:"354G"}),(0,s.jsx)(e.td,{children:"367G"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(e.td,{children:"polkadot"}),(0,s.jsx)(e.td,{children:"paritydb"}),(0,s.jsx)(e.td,{children:"pruned"}),(0,s.jsx)(e.td,{children:"18946506"}),(0,s.jsx)(e.td,{children:"292G"}),(0,s.jsx)(e.td,{children:"303G"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(e.td,{children:"polkadot"}),(0,s.jsx)(e.td,{children:"rocksdb"}),(0,s.jsx)(e.td,{children:"pruned"}),(0,s.jsx)(e.td,{children:"18946907"}),(0,s.jsx)(e.td,{children:"291G"}),(0,s.jsx)(e.td,{children:"305G"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(e.td,{children:"ksmcc3"}),(0,s.jsx)(e.td,{children:"rocksdb"}),(0,s.jsx)(e.td,{children:"pruned"}),(0,s.jsx)(e.td,{children:"21337643"}),(0,s.jsx)(e.td,{children:"346G"}),(0,s.jsx)(e.td,{children:"365G"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"snapsize",src:t(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(e.admonition,{type:"info",children:[(0,s.jsx)(e.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(e.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(e.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(e.p,{children:'With the "beefy" update warp sync got temporarily disabled and now so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(e.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(e.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(e.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(e.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(e.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(e.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(e.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(e.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(e.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(e.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(e.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(e.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(e.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(e.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(e.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(e.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(e.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(e.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(e.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["This can be changed with ",(0,s.jsx)(e.code,{children:"--base-path"})," so for example ",(0,s.jsx)(e.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(e.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(e.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(e.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(e.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(e.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(e.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(e.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(e.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsxs)(e.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(e.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(e.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,s.jsxs)(e.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,s.jsx)(e.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(e.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,s.jsx)(e.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,s.jsx)(e.code,{children:"-C"})," when installing to another location."]}),"\n",(0,s.jsx)(e.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(e.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,s.jsx)(e.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(e.h3,{id:"rocksdb-polkadot",children:"Rocksdb polkadot"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(a={}){const{wrapper:e}={...(0,d.a)(),...a.components};return e?(0,s.jsx)(e,{...a,children:(0,s.jsx)(c,{...a})}):c(a)}},9735:(a,e,t)=>{t.d(e,{Z:()=>s});const s="data:image/png;base64,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"},1151:(a,e,t)=>{t.d(e,{Z:()=>r,a:()=>n});var s=t(7294);const d={},o=s.createContext(d);function n(a){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function r(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(d):a.components||d:n(a.components),s.createElement(o.Provider,{value:e},a.children)}}}]);