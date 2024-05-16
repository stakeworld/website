"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(5893),d=t(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Last update: Thu 16 May"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Chain"}),(0,a.jsx)(s.th,{children:"Database"}),(0,a.jsx)(s.th,{children:"Format"}),(0,a.jsx)(s.th,{children:"Blockheight"}),(0,a.jsx)(s.th,{children:"Snapshot"}),(0,a.jsx)(s.th,{children:"Full"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"ksmcc3"}),(0,a.jsx)(s.td,{children:"paritydb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"23186438"}),(0,a.jsx)(s.td,{children:"417G"}),(0,a.jsx)(s.td,{children:"433G"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"polkadot"}),(0,a.jsx)(s.td,{children:"paritydb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"20791309"}),(0,a.jsx)(s.td,{children:"361G"}),(0,a.jsx)(s.td,{children:"375G"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"polkadot"}),(0,a.jsx)(s.td,{children:"rocksdb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"20791732"}),(0,a.jsx)(s.td,{children:"359G"}),(0,a.jsx)(s.td,{children:"377G"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"ksmcc3"}),(0,a.jsx)(s.td,{children:"rocksdb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"23187774"}),(0,a.jsx)(s.td,{children:"409G"}),(0,a.jsx)(s.td,{children:"436G"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"paseo"}),(0,a.jsx)(s.td,{children:"paritydb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"1231093"}),(0,a.jsx)(s.td,{children:"20G"}),(0,a.jsx)(s.td,{children:"35G"})]})]})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"snapsize",src:t(9735).Z+"",width:"800",height:"300"})}),"\n",(0,a.jsxs)(s.admonition,{type:"info",children:[(0,a.jsx)(s.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,a.jsxs)(s.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,a.jsx)(s.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,a.jsx)(s.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,a.jsxs)(s.p,{children:["For now the snapshots are available for kusama ",(0,a.jsx)(s.code,{children:"--chain ksmcc3"})," and polkadot ",(0,a.jsx)(s.code,{children:"--chain polkadot"})," in the paritydb ",(0,a.jsx)(s.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,a.jsx)(s.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,a.jsx)(s.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,a.jsx)(s.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,a.jsxs)(s.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,a.jsx)(s.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,a.jsx)(s.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,a.jsx)(s.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,a.jsx)(s.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,a.jsxs)(s.p,{children:["Setting up a validator node is covered ",(0,a.jsx)(s.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,a.jsx)(s.code,{children:"/home/polkadot"})," and a default service script ",(0,a.jsx)(s.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,a.jsxs)(s.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,a.jsx)(s.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,a.jsx)(s.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["This can be changed with ",(0,a.jsx)(s.code,{children:"--base-path"})," so for example ",(0,a.jsx)(s.code,{children:"--base-path /home/polkadot"})," or ",(0,a.jsx)(s.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,a.jsx)(s.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(s.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,a.jsx)(s.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,a.jsxs)(s.p,{children:["Edit the default service script and add for example ",(0,a.jsx)(s.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,a.jsx)(s.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,a.jsx)(s.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"caution",children:(0,a.jsxs)(s.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,a.jsx)(s.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,a.jsx)(s.h2,{id:"restore",children:"Restore:"}),"\n",(0,a.jsxs)(s.p,{children:["Best run the commands as user polkadot (",(0,a.jsx)(s.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,a.jsx)(s.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,a.jsx)(s.code,{children:"-C"})," to your location."]}),"\n",(0,a.jsx)(s.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,a.jsx)(s.p,{children:"For example paritydb kusama"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(s.p,{children:"For example rocksdb polkadot"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9735:(e,s,t)=>{t.d(s,{Z:()=>a});const a="data:image/png;base64,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"},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>n});var a=t(7294);const d={},o=a.createContext(d);function n(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);