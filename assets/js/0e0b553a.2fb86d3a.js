"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var a=s(5893),d=s(1151);const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},l={},i=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Last update: Tue 05 Mar"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Chain"}),(0,a.jsx)(t.th,{children:"Database"}),(0,a.jsx)(t.th,{children:"Format"}),(0,a.jsx)(t.th,{children:"Blockheight"}),(0,a.jsx)(t.th,{children:"Snapshot"}),(0,a.jsx)(t.th,{children:"Full"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"ksmcc3"}),(0,a.jsx)(t.td,{children:"paritydb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"22154299"}),(0,a.jsx)(t.td,{children:"381G"}),(0,a.jsx)(t.td,{children:"395G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"polkadot"}),(0,a.jsx)(t.td,{children:"paritydb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"19761093"}),(0,a.jsx)(t.td,{children:"322G"}),(0,a.jsx)(t.td,{children:"335G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"polkadot"}),(0,a.jsx)(t.td,{children:"rocksdb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"19761518"}),(0,a.jsx)(t.td,{children:"321G"}),(0,a.jsx)(t.td,{children:"337G"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(t.td,{children:"ksmcc3"}),(0,a.jsx)(t.td,{children:"rocksdb"}),(0,a.jsx)(t.td,{children:"pruned"}),(0,a.jsx)(t.td,{children:"22155763"}),(0,a.jsx)(t.td,{children:"372G"}),(0,a.jsx)(t.td,{children:"396G"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"snapsize",src:s(9735).Z+"",width:"800",height:"300"})}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,a.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,a.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,a.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,a.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,a.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,a.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,a.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,a.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,a.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,a.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,a.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,a.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,a.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,a.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,a.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,a.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,a.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,a.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,a.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,a.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,a.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,a.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["This can be changed with ",(0,a.jsx)(t.code,{children:"--base-path"})," so for example ",(0,a.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,a.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,a.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,a.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,a.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,a.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,a.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,a.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,a.jsx)(t.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,a.jsxs)(t.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,a.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,a.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,a.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,a.jsx)(t.code,{children:"-C"})," when installing to another location."]}),"\n",(0,a.jsx)(t.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(t.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,a.jsx)(t.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(t.h3,{id:"rocksdb-polkadot",children:"Rocksdb polkadot"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9735:(e,t,s)=>{s.d(t,{Z:()=>a});const a="data:image/png;base64,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"},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>n});var a=s(7294);const d={},o=a.createContext(d);function n(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);