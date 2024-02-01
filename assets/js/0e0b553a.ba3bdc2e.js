"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>n,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=t(5893),o=t(1151);const d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,i={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},r={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Last update: Thu 01 Feb"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Chain"}),(0,s.jsx)(a.th,{children:"Database"}),(0,s.jsx)(a.th,{children:"Format"}),(0,s.jsx)(a.th,{children:"Blockheight"}),(0,s.jsx)(a.th,{children:"Snapshot"}),(0,s.jsx)(a.th,{children:"Full"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"ksmcc3"}),(0,s.jsx)(a.td,{children:"paritydb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"21680860"}),(0,s.jsx)(a.td,{children:"365G"}),(0,s.jsx)(a.td,{children:"379G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"polkadot"}),(0,s.jsx)(a.td,{children:"paritydb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"19289325"}),(0,s.jsx)(a.td,{children:"305G"}),(0,s.jsx)(a.td,{children:"316G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"polkadot"}),(0,s.jsx)(a.td,{children:"rocksdb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"19289750"}),(0,s.jsx)(a.td,{children:"304G"}),(0,s.jsx)(a.td,{children:"318G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"ksmcc3"}),(0,s.jsx)(a.td,{children:"rocksdb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"21682289"}),(0,s.jsx)(a.td,{children:"357G"}),(0,s.jsx)(a.td,{children:"378G"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"snapsize",src:t(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(a.admonition,{type:"info",children:[(0,s.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(a.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(a.p,{children:'With the "beefy" update warp sync got temporarily disabled and now so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(a.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(a.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(a.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(a.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(a.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(a.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(a.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(a.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(a.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(a.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["This can be changed with ",(0,s.jsx)(a.code,{children:"--base-path"})," so for example ",(0,s.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(a.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,s.jsxs)(a.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,s.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,s.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,s.jsx)(a.code,{children:"-C"})," when installing to another location."]}),"\n",(0,s.jsx)(a.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,s.jsx)(a.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.h3,{id:"rocksdb-polkadot",children:"Rocksdb polkadot"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9735:(e,a,t)=>{t.d(a,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>n});var s=t(7294);const o={},d=s.createContext(o);function n(e){const a=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);