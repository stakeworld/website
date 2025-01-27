"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{5852:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","source":"@site/docs/snapshot.mdx","sourceDirName":".","slug":"/snapshot","permalink":"/docs/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","slug":"/snapshot","sidebar_position":3,"keywords":["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Pool","permalink":"/docs/pool"},"next":{"title":"Database sizes","permalink":"/docs/dbsize"}}');var n=t(4848),o=t(8453);const d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},r=void 0,i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Last update: Mon 27 Jan"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Chain"}),(0,n.jsx)(s.th,{children:"Database"}),(0,n.jsx)(s.th,{children:"Format"}),(0,n.jsx)(s.th,{children:"Blockheight"}),(0,n.jsx)(s.th,{children:"Snapshot"}),(0,n.jsx)(s.th,{children:"Full"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,n.jsx)(s.td,{children:"polkadot"}),(0,n.jsx)(s.td,{children:"paritydb"}),(0,n.jsx)(s.td,{children:"pruned"}),(0,n.jsx)(s.td,{children:"24463798"}),(0,n.jsx)(s.td,{children:"534G"}),(0,n.jsx)(s.td,{children:"557G"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,n.jsx)(s.td,{children:"paseo"}),(0,n.jsx)(s.td,{children:"paritydb"}),(0,n.jsx)(s.td,{children:"pruned"}),(0,n.jsx)(s.td,{children:"4878763"}),(0,n.jsx)(s.td,{children:"70G"}),(0,n.jsx)(s.td,{children:"74G"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"snapsize",src:t(3996).A+"",width:"800",height:"300"})}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,n.jsxs)(s.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,n.jsx)(s.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,n.jsx)(s.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,n.jsxs)(s.p,{children:["For now the snapshots are available for kusama ",(0,n.jsx)(s.code,{children:"--chain ksmcc3"})," and polkadot ",(0,n.jsx)(s.code,{children:"--chain polkadot"})," in the paritydb ",(0,n.jsx)(s.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,n.jsx)(s.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,n.jsx)(s.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,n.jsx)(s.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,n.jsxs)(s.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.jsx)(s.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,n.jsx)(s.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,n.jsx)(s.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,n.jsx)(s.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,n.jsxs)(s.p,{children:["Setting up a validator node is covered ",(0,n.jsx)(s.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,n.jsx)(s.code,{children:"/home/polkadot"})," and a default service script ",(0,n.jsx)(s.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,n.jsxs)(s.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,n.jsx)(s.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,n.jsx)(s.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["This can be changed with ",(0,n.jsx)(s.code,{children:"--base-path"})," so for example ",(0,n.jsx)(s.code,{children:"--base-path /home/polkadot"})," or ",(0,n.jsx)(s.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,n.jsx)(s.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,n.jsx)(s.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,n.jsx)(s.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,n.jsxs)(s.p,{children:["Edit the default service script and add for example ",(0,n.jsx)(s.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,n.jsx)(s.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,n.jsx)(s.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,n.jsx)(s.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,n.jsx)(s.h2,{id:"restore",children:"Restore:"}),"\n",(0,n.jsxs)(s.p,{children:["Best run the commands as user polkadot (",(0,n.jsx)(s.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,n.jsx)(s.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,n.jsx)(s.code,{children:"-C"})," to your location."]}),"\n",(0,n.jsx)(s.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,n.jsx)(s.p,{children:"For example paritydb kusama"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,n.jsx)(s.p,{children:"For example rocksdb polkadot"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},3996:(e,s,t)=>{t.d(s,{A:()=>a});const a="data:image/png;base64,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"},8453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>r});var a=t(6540);const n={},o=a.createContext(n);function d(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);