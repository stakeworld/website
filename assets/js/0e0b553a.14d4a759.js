"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var s=e(5893),n=e(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},d=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},l={},i=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}];function c(t){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Last update: Sat 20 Jan"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Chain"}),(0,s.jsx)(a.th,{children:"Database"}),(0,s.jsx)(a.th,{children:"Format"}),(0,s.jsx)(a.th,{children:"Blockheight"}),(0,s.jsx)(a.th,{children:"Snapshot"}),(0,s.jsx)(a.th,{children:"Full"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"ksmcc3"}),(0,s.jsx)(a.td,{children:"paritydb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"21508659"}),(0,s.jsx)(a.td,{children:"360G"}),(0,s.jsx)(a.td,{children:"374G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"polkadot"}),(0,s.jsx)(a.td,{children:"paritydb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"19117988"}),(0,s.jsx)(a.td,{children:"298G"}),(0,s.jsx)(a.td,{children:"310G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"polkadot"}),(0,s.jsx)(a.td,{children:"rocksdb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"19118393"}),(0,s.jsx)(a.td,{children:"298G"}),(0,s.jsx)(a.td,{children:"311G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"ksmcc3"}),(0,s.jsx)(a.td,{children:"rocksdb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"21510031"}),(0,s.jsx)(a.td,{children:"351G"}),(0,s.jsx)(a.td,{children:"372G"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"snapsize",src:e(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(a.admonition,{type:"info",children:[(0,s.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(a.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(a.p,{children:'With the "beefy" update warp sync got temporarily disabled and now so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(a.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(a.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(a.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(a.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(a.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(a.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(a.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(a.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(a.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(a.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["This can be changed with ",(0,s.jsx)(a.code,{children:"--base-path"})," so for example ",(0,s.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(a.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,s.jsxs)(a.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,s.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,s.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,s.jsx)(a.code,{children:"-C"})," when installing to another location."]}),"\n",(0,s.jsx)(a.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,s.jsx)(a.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.h3,{id:"rocksdb-polkadot",children:"Rocksdb polkadot"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(t={}){const{wrapper:a}={...(0,n.a)(),...t.components};return a?(0,s.jsx)(a,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},9735:(t,a,e)=>{e.d(a,{Z:()=>s});const s="data:image/png;base64,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"},1151:(t,a,e)=>{e.d(a,{Z:()=>r,a:()=>d});var s=e(7294);const n={},o=s.createContext(n);function d(t){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(a):{...a,...t}}),[a,t])}function r(t){let a;return a=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:d(t.components),s.createElement(o.Provider,{value:a},t.children)}}}]);