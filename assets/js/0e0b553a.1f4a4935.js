"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{2226:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var t=s(5893),o=s(1151);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},r=void 0,d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Last update: Mon 23 Sep"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{}),(0,t.jsx)(a.th,{children:"Chain"}),(0,t.jsx)(a.th,{children:"Database"}),(0,t.jsx)(a.th,{children:"Format"}),(0,t.jsx)(a.th,{children:"Blockheight"}),(0,t.jsx)(a.th,{children:"Snapshot"}),(0,t.jsx)(a.th,{children:"Full"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,t.jsx)(a.td,{children:"ksmcc3"}),(0,t.jsx)(a.td,{children:"paritydb"}),(0,t.jsx)(a.td,{children:"pruned"}),(0,t.jsx)(a.td,{children:"25036632"}),(0,t.jsx)(a.td,{children:"500G"}),(0,t.jsx)(a.td,{children:"520G"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,t.jsx)(a.td,{children:"polkadot"}),(0,t.jsx)(a.td,{children:"paritydb"}),(0,t.jsx)(a.td,{children:"pruned"}),(0,t.jsx)(a.td,{children:"22654449"}),(0,t.jsx)(a.td,{children:"434G"}),(0,t.jsx)(a.td,{children:"452G"})]})]})]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"snapsize",src:s(9735).Z+"",width:"800",height:"300"})}),"\n",(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,t.jsxs)(a.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,t.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,t.jsx)(a.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,t.jsxs)(a.p,{children:["For now the snapshots are available for kusama ",(0,t.jsx)(a.code,{children:"--chain ksmcc3"})," and polkadot ",(0,t.jsx)(a.code,{children:"--chain polkadot"})," in the paritydb ",(0,t.jsx)(a.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,t.jsx)(a.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,t.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,t.jsx)(a.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,t.jsxs)(a.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,t.jsx)(a.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,t.jsx)(a.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,t.jsx)(a.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,t.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,t.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,t.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,t.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,t.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,t.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,t.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,t.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["This can be changed with ",(0,t.jsx)(a.code,{children:"--base-path"})," so for example ",(0,t.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,t.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,t.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,t.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,t.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,t.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,t.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,t.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,t.jsx)(a.admonition,{type:"caution",children:(0,t.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,t.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,t.jsx)(a.h2,{id:"restore",children:"Restore:"}),"\n",(0,t.jsxs)(a.p,{children:["Best run the commands as user polkadot (",(0,t.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,t.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,t.jsx)(a.code,{children:"-C"})," to your location."]}),"\n",(0,t.jsx)(a.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,t.jsx)(a.p,{children:"For example paritydb kusama"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(a.p,{children:"For example rocksdb polkadot"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9735:(e,a,s)=>{s.d(a,{Z:()=>t});const t="data:image/png;base64,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"},1151:(e,a,s)=>{s.d(a,{Z:()=>d,a:()=>r});var t=s(7294);const o={},n=t.createContext(o);function r(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);