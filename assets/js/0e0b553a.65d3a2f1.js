"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{2226:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=t(5893),o=t(1151);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},d=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Last update: Mon 30 Sep"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{}),(0,s.jsx)(a.th,{children:"Chain"}),(0,s.jsx)(a.th,{children:"Database"}),(0,s.jsx)(a.th,{children:"Format"}),(0,s.jsx)(a.th,{children:"Blockheight"}),(0,s.jsx)(a.th,{children:"Snapshot"}),(0,s.jsx)(a.th,{children:"Full"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"ksmcc3"}),(0,s.jsx)(a.td,{children:"paritydb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"25135135"}),(0,s.jsx)(a.td,{children:"505G"}),(0,s.jsx)(a.td,{children:"525G"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:(0,s.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(a.td,{children:"polkadot"}),(0,s.jsx)(a.td,{children:"paritydb"}),(0,s.jsx)(a.td,{children:"pruned"}),(0,s.jsx)(a.td,{children:"22755187"}),(0,s.jsx)(a.td,{children:"438G"}),(0,s.jsx)(a.td,{children:"457G"})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"snapsize",src:t(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(a.admonition,{type:"info",children:[(0,s.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(a.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(a.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(a.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(a.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(a.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(a.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(a.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(a.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(a.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(a.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(a.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(a.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(a.p,{children:["This can be changed with ",(0,s.jsx)(a.code,{children:"--base-path"})," so for example ",(0,s.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(a.h2,{id:"restore",children:"Restore:"}),"\n",(0,s.jsxs)(a.p,{children:["Best run the commands as user polkadot (",(0,s.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,s.jsx)(a.code,{children:"-C"})," to your location."]}),"\n",(0,s.jsx)(a.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,s.jsx)(a.p,{children:"For example paritydb kusama"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(a.p,{children:"For example rocksdb polkadot"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9735:(e,a,t)=>{t.d(a,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>d});var s=t(7294);const o={},n=s.createContext(o);function d(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);