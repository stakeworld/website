"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{2226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var s=a(5893),n=a(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},d=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},l={},i=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Last update: Thu 26 Sep"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Chain"}),(0,s.jsx)(t.th,{children:"Database"}),(0,s.jsx)(t.th,{children:"Format"}),(0,s.jsx)(t.th,{children:"Blockheight"}),(0,s.jsx)(t.th,{children:"Snapshot"}),(0,s.jsx)(t.th,{children:"Full"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"ksmcc3"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"25079050"}),(0,s.jsx)(t.td,{children:"502G"}),(0,s.jsx)(t.td,{children:"522G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"polkadot"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"22697627"}),(0,s.jsx)(t.td,{children:"436G"}),(0,s.jsx)(t.td,{children:"454G"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"snapsize",src:a(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This can be changed with ",(0,s.jsx)(t.code,{children:"--base-path"})," so for example ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,s.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,s.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,s.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,s.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9735:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>d});var s=a(7294);const n={},o=s.createContext(n);function d(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);