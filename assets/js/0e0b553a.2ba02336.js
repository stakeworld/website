"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{5852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","source":"@site/docs/snapshot.mdx","sourceDirName":".","slug":"/snapshot","permalink":"/docs/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","slug":"/snapshot","sidebar_position":3,"keywords":["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Pool","permalink":"/docs/pool"},"next":{"title":"Database sizes","permalink":"/docs/dbsize"}}');var n=a(4848),r=a(8453);const d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Last update: Sat 25 Jan"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Chain"}),(0,n.jsx)(t.th,{children:"Database"}),(0,n.jsx)(t.th,{children:"Format"}),(0,n.jsx)(t.th,{children:"Blockheight"}),(0,n.jsx)(t.th,{children:"Snapshot"}),(0,n.jsx)(t.th,{children:"Full"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,n.jsx)(t.td,{children:"ksmcc3"}),(0,n.jsx)(t.td,{children:"paritydb"}),(0,n.jsx)(t.td,{children:"pruned"}),(0,n.jsx)(t.td,{children:"26793523"}),(0,n.jsx)(t.td,{children:"595G"}),(0,n.jsx)(t.td,{children:"619G"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,n.jsx)(t.td,{children:"polkadot"}),(0,n.jsx)(t.td,{children:"paritydb"}),(0,n.jsx)(t.td,{children:"pruned"}),(0,n.jsx)(t.td,{children:"24435303"}),(0,n.jsx)(t.td,{children:"532G"}),(0,n.jsx)(t.td,{children:"555G"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,n.jsx)(t.td,{children:"paseo"}),(0,n.jsx)(t.td,{children:"paritydb"}),(0,n.jsx)(t.td,{children:"pruned"}),(0,n.jsx)(t.td,{children:"4850222"}),(0,n.jsx)(t.td,{children:"69G"}),(0,n.jsx)(t.td,{children:"73G"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"snapsize",src:a(3996).A+"",width:"800",height:"300"})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,n.jsxs)(t.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,n.jsx)(t.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,n.jsx)(t.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,n.jsxs)(t.p,{children:["For now the snapshots are available for kusama ",(0,n.jsx)(t.code,{children:"--chain ksmcc3"})," and polkadot ",(0,n.jsx)(t.code,{children:"--chain polkadot"})," in the paritydb ",(0,n.jsx)(t.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,n.jsx)(t.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,n.jsx)(t.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,n.jsx)(t.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,n.jsxs)(t.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.jsx)(t.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,n.jsx)(t.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,n.jsx)(t.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,n.jsx)(t.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,n.jsxs)(t.p,{children:["Setting up a validator node is covered ",(0,n.jsx)(t.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,n.jsx)(t.code,{children:"/home/polkadot"})," and a default service script ",(0,n.jsx)(t.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,n.jsxs)(t.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,n.jsx)(t.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,n.jsx)(t.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This can be changed with ",(0,n.jsx)(t.code,{children:"--base-path"})," so for example ",(0,n.jsx)(t.code,{children:"--base-path /home/polkadot"})," or ",(0,n.jsx)(t.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,n.jsx)(t.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,n.jsx)(t.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,n.jsxs)(t.p,{children:["Edit the default service script and add for example ",(0,n.jsx)(t.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,n.jsx)(t.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,n.jsx)(t.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,n.jsx)(t.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,n.jsx)(t.h2,{id:"restore",children:"Restore:"}),"\n",(0,n.jsxs)(t.p,{children:["Best run the commands as user polkadot (",(0,n.jsx)(t.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,n.jsx)(t.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,n.jsx)(t.code,{children:"-C"})," to your location."]}),"\n",(0,n.jsx)(t.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,n.jsx)(t.p,{children:"For example paritydb kusama"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,n.jsx)(t.p,{children:"For example rocksdb polkadot"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},3996:(e,t,a)=>{a.d(t,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,t,a)=>{a.d(t,{R:()=>d,x:()=>o});var s=a(6540);const n={},r=s.createContext(n);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);