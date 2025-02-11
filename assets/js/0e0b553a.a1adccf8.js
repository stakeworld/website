"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{2711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","source":"@site/docs/snapshot.mdx","sourceDirName":".","slug":"/snapshot","permalink":"/docs/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","slug":"/snapshot","sidebar_position":3,"keywords":["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Pool","permalink":"/docs/pool"},"next":{"title":"Database sizes","permalink":"/docs/dbsize"}}');var o=a(4848),d=a(8453);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},r=void 0,i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Last update: Tue 11 Feb"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Chain"}),(0,o.jsx)(t.th,{children:"Database"}),(0,o.jsx)(t.th,{children:"Format"}),(0,o.jsx)(t.th,{children:"Blockheight"}),(0,o.jsx)(t.th,{children:"Snapshot"}),(0,o.jsx)(t.th,{children:"Full"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,o.jsx)(t.td,{children:"polkadot"}),(0,o.jsx)(t.td,{children:"paritydb"}),(0,o.jsx)(t.td,{children:"pruned"}),(0,o.jsx)(t.td,{children:"24679081"}),(0,o.jsx)(t.td,{children:"546G"}),(0,o.jsx)(t.td,{children:"569G"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,o.jsx)(t.td,{children:"paseo"}),(0,o.jsx)(t.td,{children:"paritydb"}),(0,o.jsx)(t.td,{children:"pruned"}),(0,o.jsx)(t.td,{children:"5094195"}),(0,o.jsx)(t.td,{children:"74G"}),(0,o.jsx)(t.td,{children:"79G"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"snapsize",src:a(3996).A+"",width:"800",height:"300"})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,o.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,o.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,o.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,o.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,o.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,o.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,o.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,o.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,o.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,o.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,o.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,o.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,o.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,o.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,o.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,o.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,o.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,o.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,o.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["This can be changed with ",(0,o.jsx)(t.code,{children:"--base-path"})," so for example ",(0,o.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,o.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,o.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,o.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,o.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,o.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,o.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,o.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,o.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,o.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,o.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,o.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,o.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,o.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},3996:(e,t,a)=>{a.d(t,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>r});var s=a(6540);const o={},d=s.createContext(o);function n(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);