"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[158],{5852:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","source":"@site/docs/snapshot.mdx","sourceDirName":".","slug":"/snapshot","permalink":"/docs/snapshot","draft":false,"unlisted":false,"editUrl":"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"snapshot","title":"Snapshot","description":"Polkadot and Kusama snapshots in paritydb and rocksdb format","slug":"/snapshot","sidebar_position":3,"keywords":["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},"sidebar":"tutorialSidebar","previous":{"title":"Pool","permalink":"/docs/pool"},"next":{"title":"Database sizes","permalink":"/docs/dbsize"}}');var o=t(4848),n=t(8453);const d={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},i=void 0,r={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"Last update: Wed 18 Dec"}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{}),(0,o.jsx)(a.th,{children:"Chain"}),(0,o.jsx)(a.th,{children:"Database"}),(0,o.jsx)(a.th,{children:"Format"}),(0,o.jsx)(a.th,{children:"Blockheight"}),(0,o.jsx)(a.th,{children:"Snapshot"}),(0,o.jsx)(a.th,{children:"Full"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,o.jsx)(a.td,{children:"ksmcc3"}),(0,o.jsx)(a.td,{children:"paritydb"}),(0,o.jsx)(a.td,{children:"pruned"}),(0,o.jsx)(a.td,{children:"26252631"}),(0,o.jsx)(a.td,{children:"566G"}),(0,o.jsx)(a.td,{children:"589G"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,o.jsx)(a.td,{children:"polkadot"}),(0,o.jsx)(a.td,{children:"paritydb"}),(0,o.jsx)(a.td,{children:"pruned"}),(0,o.jsx)(a.td,{children:"23889331"}),(0,o.jsx)(a.td,{children:"501G"}),(0,o.jsx)(a.td,{children:"523G"})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:(0,o.jsx)(a.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,o.jsx)(a.td,{children:"paseo"}),(0,o.jsx)(a.td,{children:"paritydb"}),(0,o.jsx)(a.td,{children:"pruned"}),(0,o.jsx)(a.td,{children:"4308616"}),(0,o.jsx)(a.td,{children:"56G"}),(0,o.jsx)(a.td,{children:"60G"})]})]})]}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"snapsize",src:t(3996).A+"",width:"800",height:"300"})}),"\n",(0,o.jsxs)(a.admonition,{type:"info",children:[(0,o.jsx)(a.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,o.jsxs)(a.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,o.jsx)(a.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,o.jsx)(a.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,o.jsxs)(a.p,{children:["For now the snapshots are available for kusama ",(0,o.jsx)(a.code,{children:"--chain ksmcc3"})," and polkadot ",(0,o.jsx)(a.code,{children:"--chain polkadot"})," in the paritydb ",(0,o.jsx)(a.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,o.jsx)(a.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,o.jsx)(a.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,o.jsx)(a.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,o.jsxs)(a.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,o.jsx)(a.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,o.jsx)(a.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,o.jsx)(a.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,o.jsx)(a.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,o.jsxs)(a.p,{children:["Setting up a validator node is covered ",(0,o.jsx)(a.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,o.jsx)(a.code,{children:"/home/polkadot"})," and a default service script ",(0,o.jsx)(a.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,o.jsx)(a.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,o.jsxs)(a.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,o.jsx)(a.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,o.jsx)(a.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["This can be changed with ",(0,o.jsx)(a.code,{children:"--base-path"})," so for example ",(0,o.jsx)(a.code,{children:"--base-path /home/polkadot"})," or ",(0,o.jsx)(a.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,o.jsx)(a.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(a.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,o.jsx)(a.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,o.jsxs)(a.p,{children:["Edit the default service script and add for example ",(0,o.jsx)(a.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,o.jsx)(a.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,o.jsx)(a.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,o.jsx)(a.admonition,{type:"caution",children:(0,o.jsxs)(a.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,o.jsx)(a.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,o.jsx)(a.h2,{id:"restore",children:"Restore:"}),"\n",(0,o.jsxs)(a.p,{children:["Best run the commands as user polkadot (",(0,o.jsx)(a.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,o.jsx)(a.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,o.jsx)(a.code,{children:"-C"})," to your location."]}),"\n",(0,o.jsx)(a.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,o.jsx)(a.p,{children:"For example paritydb kusama"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,o.jsx)(a.p,{children:"For example rocksdb polkadot"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},3996:(e,a,t)=>{t.d(a,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,a,t)=>{t.d(a,{R:()=>d,x:()=>i});var s=t(6540);const o={},n=s.createContext(o);function d(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);