"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=a(5893),d=a(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Last update: Thu 30 May"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Chain"}),(0,s.jsx)(t.th,{children:"Database"}),(0,s.jsx)(t.th,{children:"Format"}),(0,s.jsx)(t.th,{children:"Blockheight"}),(0,s.jsx)(t.th,{children:"Snapshot"}),(0,s.jsx)(t.th,{children:"Full"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"ksmcc3"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"23387239"}),(0,s.jsx)(t.td,{children:"424G"}),(0,s.jsx)(t.td,{children:"441G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"polkadot"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"20991975"}),(0,s.jsx)(t.td,{children:"368G"}),(0,s.jsx)(t.td,{children:"383G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"polkadot"}),(0,s.jsx)(t.td,{children:"rocksdb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"20992422"}),(0,s.jsx)(t.td,{children:"366G"}),(0,s.jsx)(t.td,{children:"385G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"ksmcc3"}),(0,s.jsx)(t.td,{children:"rocksdb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"23388598"}),(0,s.jsx)(t.td,{children:"416G"}),(0,s.jsx)(t.td,{children:"444G"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,s.jsx)(t.td,{children:"paseo"}),(0,s.jsx)(t.td,{children:"paritydb"}),(0,s.jsx)(t.td,{children:"pruned"}),(0,s.jsx)(t.td,{children:"1432948"}),(0,s.jsx)(t.td,{children:"26G"}),(0,s.jsx)(t.td,{children:"44G"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"snapsize",src:a(9735).Z+"",width:"800",height:"300"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,s.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,s.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,s.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,s.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,s.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,s.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,s.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,s.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,s.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,s.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,s.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,s.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,s.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,s.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,s.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,s.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,s.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,s.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,s.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,s.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,s.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,s.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["This can be changed with ",(0,s.jsx)(t.code,{children:"--base-path"})," so for example ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,s.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,s.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,s.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,s.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,s.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,s.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,s.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,s.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,s.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,s.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,s.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,s.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,s.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,s.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9735:(e,t,a)=>{a.d(t,{Z:()=>s});const s="data:image/png;base64,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"},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>n});var s=a(7294);const d={},o=s.createContext(d);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);