"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{2226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var s=a(5893),o=a(1151);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},r=void 0,d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Last update: Mon 21 Oct"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Chain"}),(0,s.jsx)(t.th,{children:"Database"}),(0,s.jsx)(t.th,{children:"Format"}),(0,s.jsx)(t.th,{children:"Blockheight"}),(0,s.jsx)(t.th,{children:"Snapshot"}),(0,s.jsx)(t.th,{children:"Full"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"ksmcc3"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"25429925"}),(0,s.jsx)(t.td,{children:"519G"}),(0,s.jsx)(t.td,{children:"540G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"polkadot"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"23056829"}),(0,s.jsx)(t.td,{children:"453G"}),(0,s.jsx)(t.td,{children:"472G"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"snapsize",src:a(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This can be changed with ",(0,s.jsx)(t.code,{children:"--base-path"})," so for example ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,s.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,s.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,s.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,s.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9735:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>r});var s=a(7294);const o={},n=s.createContext(o);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);