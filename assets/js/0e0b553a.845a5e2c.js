"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>i});var t=a(5893),o=a(1151);const d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},n=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},l={},i=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Different databases:",id:"different-databases",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Last update: Tue 19 Mar"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Chain"}),(0,t.jsx)(s.th,{children:"Database"}),(0,t.jsx)(s.th,{children:"Format"}),(0,t.jsx)(s.th,{children:"Blockheight"}),(0,t.jsx)(s.th,{children:"Snapshot"}),(0,t.jsx)(s.th,{children:"Full"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"ksmcc3"}),(0,t.jsx)(s.td,{children:"paritydb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"22355191"}),(0,t.jsx)(s.td,{children:"387G"}),(0,t.jsx)(s.td,{children:"402G"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"polkadot"}),(0,t.jsx)(s.td,{children:"paritydb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"19961312"}),(0,t.jsx)(s.td,{children:"329G"}),(0,t.jsx)(s.td,{children:"342G"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"polkadot"}),(0,t.jsx)(s.td,{children:"rocksdb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"19961743"}),(0,t.jsx)(s.td,{children:"328G"}),(0,t.jsx)(s.td,{children:"345G"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,t.jsx)(s.td,{children:"ksmcc3"}),(0,t.jsx)(s.td,{children:"rocksdb"}),(0,t.jsx)(s.td,{children:"pruned"}),(0,t.jsx)(s.td,{children:"22356665"}),(0,t.jsx)(s.td,{children:"379G"}),(0,t.jsx)(s.td,{children:"403G"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"snapsize",src:a(9735).Z+"",width:"800",height:"300"})}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,t.jsxs)(s.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,t.jsx)(s.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,t.jsx)(s.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,t.jsxs)(s.p,{children:["For now the snapshots are available for kusama ",(0,t.jsx)(s.code,{children:"--chain ksmcc3"})," and polkadot ",(0,t.jsx)(s.code,{children:"--chain polkadot"})," in the paritydb ",(0,t.jsx)(s.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,t.jsx)(s.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,t.jsx)(s.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,t.jsx)(s.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,t.jsxs)(s.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,t.jsx)(s.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,t.jsx)(s.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,t.jsx)(s.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,t.jsx)(s.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,t.jsxs)(s.p,{children:["Setting up a validator node is covered ",(0,t.jsx)(s.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,t.jsx)(s.code,{children:"/home/polkadot"})," and a default service script ",(0,t.jsx)(s.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,t.jsxs)(s.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,t.jsx)(s.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,t.jsx)(s.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["This can be changed with ",(0,t.jsx)(s.code,{children:"--base-path"})," so for example ",(0,t.jsx)(s.code,{children:"--base-path /home/polkadot"})," or ",(0,t.jsx)(s.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,t.jsx)(s.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,t.jsx)(s.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,t.jsxs)(s.p,{children:["Edit the default service script and add for example ",(0,t.jsx)(s.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,t.jsx)(s.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsxs)(s.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,t.jsx)(s.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,t.jsx)(s.h2,{id:"different-databases",children:"Different databases:"}),"\n",(0,t.jsxs)(s.p,{children:["Below restore commands for different databases to the default directory. Best run them as user polkadot (",(0,t.jsx)(s.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,t.jsx)(s.code,{children:"chown polkadot:polkadot <dbdir>"}),") or when running as root do a ",(0,t.jsx)(s.code,{children:"chown polkadot:polkadot <dbdir>"}),". Of course change the part after ",(0,t.jsx)(s.code,{children:"-C"})," when installing to another location."]}),"\n",(0,t.jsx)(s.h3,{id:"paritydb-kusama",children:"Paritydb kusama"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(s.h3,{id:"paritydb-polkadot",children:"Paritydb polkadot"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})}),"\n",(0,t.jsx)(s.h3,{id:"rocksdb-kusama",children:"Rocksdb kusama"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,t.jsx)(s.h3,{id:"rocksdb-polkadot",children:"Rocksdb polkadot"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9735:(e,s,a)=>{a.d(s,{Z:()=>t});const t="data:image/png;base64,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"},1151:(e,s,a)=>{a.d(s,{Z:()=>r,a:()=>n});var t=a(7294);const o={},d=t.createContext(o);function n(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);