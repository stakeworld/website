"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{5852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","source":"@site/docs/snapshot.mdx","sourceDirName":".","slug":"/snapshot","permalink":"/docs/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","slug":"/snapshot","sidebar_position":3,"keywords":["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Pool","permalink":"/docs/pool"},"next":{"title":"Database sizes","permalink":"/docs/dbsize"}}');var o=a(4848),n=a(8453);const d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},i=void 0,r={},c=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Last update: Sat 07 Dec"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Chain"}),(0,o.jsx)(t.th,{children:"Database"}),(0,o.jsx)(t.th,{children:"Format"}),(0,o.jsx)(t.th,{children:"Blockheight"}),(0,o.jsx)(t.th,{children:"Snapshot"}),(0,o.jsx)(t.th,{children:"Full"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,o.jsx)(t.td,{children:"ksmcc3"}),(0,o.jsx)(t.td,{children:"paritydb"}),(0,o.jsx)(t.td,{children:"pruned"}),(0,o.jsx)(t.td,{children:"26095980"}),(0,o.jsx)(t.td,{children:"557G"}),(0,o.jsx)(t.td,{children:"580G"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,o.jsx)(t.td,{children:"polkadot"}),(0,o.jsx)(t.td,{children:"paritydb"}),(0,o.jsx)(t.td,{children:"pruned"}),(0,o.jsx)(t.td,{children:"23731369"}),(0,o.jsx)(t.td,{children:"492G"}),(0,o.jsx)(t.td,{children:"514G"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,o.jsx)(t.td,{children:"paseo"}),(0,o.jsx)(t.td,{children:"paritydb"}),(0,o.jsx)(t.td,{children:"pruned"}),(0,o.jsx)(t.td,{children:"4150238"}),(0,o.jsx)(t.td,{children:"53G"}),(0,o.jsx)(t.td,{children:"56G"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"snapsize",src:a(3996).A+"",width:"800",height:"300"})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,o.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,o.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,o.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,o.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,o.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,o.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,o.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,o.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,o.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,o.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,o.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,o.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,o.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,o.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,o.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,o.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,o.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,o.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,o.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["This can be changed with ",(0,o.jsx)(t.code,{children:"--base-path"})," so for example ",(0,o.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,o.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,o.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,o.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,o.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,o.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,o.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,o.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,o.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,o.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,o.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,o.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,o.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,o.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3996:(e,t,a)=>{a.d(t,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,t,a)=>{a.d(t,{R:()=>d,x:()=>i});var s=a(6540);const o={},n=s.createContext(o);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);