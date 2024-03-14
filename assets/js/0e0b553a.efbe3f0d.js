"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(5893),d=t(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Last update: Thu 14 Mar"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Chain"}),(0,s.jsx)(a.th,{children:"Database"}),(0,s.jsx)(a.th,{children:"Format"}),(0,s.jsx)(a.th,{children:"Blockheight"}),(0,s.jsx)(a.th,{children:"Snapshot"}),(0,s.jsx)(a.th,{children:"Full"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"ksmcc3"}),(0,s.jsx)(a.td,{children:"paritydb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"22283435"}),(0,s.jsx)(a.td,{children:"385G"}),(0,s.jsx)(a.td,{children:"400G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"polkadot"}),(0,s.jsx)(a.td,{children:"paritydb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"19889678"}),(0,s.jsx)(a.td,{children:"327G"}),(0,s.jsx)(a.td,{children:"340G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"polkadot"}),(0,s.jsx)(a.td,{children:"rocksdb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"19890090"}),(0,s.jsx)(a.td,{children:"326G"}),(0,s.jsx)(a.td,{children:"342G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"ksmcc3"}),(0,s.jsx)(a.td,{children:"rocksdb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"22284852"}),(0,s.jsx)(a.td,{children:"377G"}),(0,s.jsx)(a.td,{children:"400G"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"snapsize",src:t(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(a.admonition,{type:"info",children:[(0,s.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(a.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(a.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(a.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(a.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(a.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(a.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(a.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(a.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(a.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(a.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(a.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(a.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["This can be changed with ",(0,s.jsx)(a.code,{children:"--base-path"})," so for example ",(0,s.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(a.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,s.jsxs)(a.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,s.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,s.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,s.jsx)(a.code,{children:"-C"})," when installing to another location."]}),"\n",(0,s.jsx)(a.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,s.jsx)(a.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.h3,{id:"rocksdb-polkadot",children:"Rocksdb polkadot"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9735:(e,a,t)=>{t.d(a,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>n});var s=t(7294);const d={},o=s.createContext(d);function n(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);