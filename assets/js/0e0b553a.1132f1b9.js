"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var a=s(5893),o=s(1151);const d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Last update: Thu 15 Aug"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Chain"}),(0,a.jsx)(t.th,{children:"Database"}),(0,a.jsx)(t.th,{children:"Format"}),(0,a.jsx)(t.th,{children:"Blockheight"}),(0,a.jsx)(t.th,{children:"Snapshot"}),(0,a.jsx)(t.th,{children:"Full"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"ksmcc3"}),(0,a.jsx)(t.td,{children:"paritydb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"24485908"}),(0,a.jsx)(t.td,{children:"473G"}),(0,a.jsx)(t.td,{children:"492G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"polkadot"}),(0,a.jsx)(t.td,{children:"paritydb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"22094996"}),(0,a.jsx)(t.td,{children:"411G"}),(0,a.jsx)(t.td,{children:"428G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"paseo"}),(0,a.jsx)(t.td,{children:"paritydb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"2512090"}),(0,a.jsx)(t.td,{children:"76G"}),(0,a.jsx)(t.td,{children:"123G"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"snapsize",src:s(9735).Z+"",width:"800",height:"300"})}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,a.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,a.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,a.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,a.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,a.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,a.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,a.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,a.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,a.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,a.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,a.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,a.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,a.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,a.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,a.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,a.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,a.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,a.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,a.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,a.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,a.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,a.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["This can be changed with ",(0,a.jsx)(t.code,{children:"--base-path"})," so for example ",(0,a.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,a.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,a.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,a.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,a.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,a.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,a.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,a.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,a.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,a.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,a.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,a.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,a.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,a.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,a.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9735:(e,t,s)=>{s.d(t,{Z:()=>a});const a="data:image/png;base64,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"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>n});var a=s(7294);const o={},d=a.createContext(o);function n(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);