"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var a=t(5893),o=t(1151);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},r=void 0,d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Last update: Wed 11 Sep"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Chain"}),(0,a.jsx)(s.th,{children:"Database"}),(0,a.jsx)(s.th,{children:"Format"}),(0,a.jsx)(s.th,{children:"Blockheight"}),(0,a.jsx)(s.th,{children:"Snapshot"}),(0,a.jsx)(s.th,{children:"Full"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"ksmcc3"}),(0,a.jsx)(s.td,{children:"paritydb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"24866675"}),(0,a.jsx)(s.td,{children:"492G"}),(0,a.jsx)(s.td,{children:"511G"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"polkadot"}),(0,a.jsx)(s.td,{children:"paritydb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"22482388"}),(0,a.jsx)(s.td,{children:"426G"}),(0,a.jsx)(s.td,{children:"444G"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"paseo"}),(0,a.jsx)(s.td,{children:"paritydb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"2900579"}),(0,a.jsx)(s.td,{children:"103G"}),(0,a.jsx)(s.td,{children:"160G"})]})]})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"snapsize",src:t(9735).Z+"",width:"800",height:"300"})}),"\n",(0,a.jsxs)(s.admonition,{type:"info",children:[(0,a.jsx)(s.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,a.jsxs)(s.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,a.jsx)(s.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,a.jsx)(s.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,a.jsxs)(s.p,{children:["For now the snapshots are available for kusama ",(0,a.jsx)(s.code,{children:"--chain ksmcc3"})," and polkadot ",(0,a.jsx)(s.code,{children:"--chain polkadot"})," in the paritydb ",(0,a.jsx)(s.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,a.jsx)(s.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,a.jsx)(s.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,a.jsx)(s.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,a.jsxs)(s.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,a.jsx)(s.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,a.jsx)(s.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,a.jsx)(s.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,a.jsx)(s.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,a.jsxs)(s.p,{children:["Setting up a validator node is covered ",(0,a.jsx)(s.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,a.jsx)(s.code,{children:"/home/polkadot"})," and a default service script ",(0,a.jsx)(s.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,a.jsxs)(s.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,a.jsx)(s.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,a.jsx)(s.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["This can be changed with ",(0,a.jsx)(s.code,{children:"--base-path"})," so for example ",(0,a.jsx)(s.code,{children:"--base-path /home/polkadot"})," or ",(0,a.jsx)(s.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,a.jsx)(s.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(s.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,a.jsx)(s.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,a.jsxs)(s.p,{children:["Edit the default service script and add for example ",(0,a.jsx)(s.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,a.jsx)(s.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,a.jsx)(s.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"caution",children:(0,a.jsxs)(s.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,a.jsx)(s.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,a.jsx)(s.h2,{id:"restore",children:"Restore:"}),"\n",(0,a.jsxs)(s.p,{children:["Best run the commands as user polkadot (",(0,a.jsx)(s.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,a.jsx)(s.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,a.jsx)(s.code,{children:"-C"})," to your location."]}),"\n",(0,a.jsx)(s.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,a.jsx)(s.p,{children:"For example paritydb kusama"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(s.p,{children:"For example rocksdb polkadot"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9735:(e,s,t)=>{t.d(s,{Z:()=>a});const a="data:image/png;base64,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"},1151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>r});var a=t(7294);const o={},n=a.createContext(o);function r(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);