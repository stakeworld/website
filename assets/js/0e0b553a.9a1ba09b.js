"use strict";(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[669],{8981:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var a=t(5893),d=t(1151);const n={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,r={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["snapshots","snapshot","kusama snapshot","polkadot snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"Bootnodes",permalink:"/docs/bootnode"}},i={},l=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manual install",id:"manual-install",level:2},{value:"Setup a validator node",id:"setup-a-validator-node",level:3},{value:"Install the database",id:"install-the-database",level:3},{value:"Edit the systemctl startup script",id:"edit-the-systemctl-startup-script",level:3},{value:"Restore:",id:"restore",level:2},{value:"Generic command",id:"generic-command",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Last update: Thu 27 Jun"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Chain"}),(0,a.jsx)(s.th,{children:"Database"}),(0,a.jsx)(s.th,{children:"Format"}),(0,a.jsx)(s.th,{children:"Blockheight"}),(0,a.jsx)(s.th,{children:"Snapshot"}),(0,a.jsx)(s.th,{children:"Full"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"ksmcc3"}),(0,a.jsx)(s.td,{children:"paritydb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"23788470"}),(0,a.jsx)(s.td,{children:"440G"}),(0,a.jsx)(s.td,{children:"457G"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"polkadot"}),(0,a.jsx)(s.td,{children:"paritydb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"21393107"}),(0,a.jsx)(s.td,{children:"384G"}),(0,a.jsx)(s.td,{children:"400G"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/rocksdb-polkadot.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"polkadot"}),(0,a.jsx)(s.td,{children:"rocksdb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"21393538"}),(0,a.jsx)(s.td,{children:"382G"}),(0,a.jsx)(s.td,{children:"402G"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"ksmcc3"}),(0,a.jsx)(s.td,{children:"rocksdb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"23789820"}),(0,a.jsx)(s.td,{children:"432G"}),(0,a.jsx)(s.td,{children:"462G"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.a,{href:"http://snapshot.stakeworld.io/paritydb-paseo.lz4",children:"direct link"})}),(0,a.jsx)(s.td,{children:"paseo"}),(0,a.jsx)(s.td,{children:"paritydb"}),(0,a.jsx)(s.td,{children:"pruned"}),(0,a.jsx)(s.td,{children:"1821350"}),(0,a.jsx)(s.td,{children:"39G"}),(0,a.jsx)(s.td,{children:"66G"})]})]})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"snapsize",src:t(9735).Z+"",width:"800",height:"300"})}),"\n",(0,a.jsxs)(s.admonition,{type:"info",children:[(0,a.jsx)(s.p,{children:"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed."}),(0,a.jsxs)(s.p,{children:["Recently the warp sync option is becoming more developed and popular. If you start the node with an empty database and the option ",(0,a.jsx)(s.code,{children:"--sync warp"})," the node will first download the finality proofs after which it will be ready to validate and in the background download the remaining blocks."]}),(0,a.jsx)(s.p,{children:'With the "beefy" update warp sync got temporarily disabled so for the time being the snapshot service is re-enabled.'}),(0,a.jsxs)(s.p,{children:["For now the snapshots are available for kusama ",(0,a.jsx)(s.code,{children:"--chain ksmcc3"})," and polkadot ",(0,a.jsx)(s.code,{children:"--chain polkadot"})," in the paritydb ",(0,a.jsx)(s.code,{children:"--database paritydb"})," database format and the rocksdb ",(0,a.jsx)(s.code,{children:"--database rocksdb"})," format. They are pruned with ",(0,a.jsx)(s.code,{children:"--state-pruning 256"})," (default), which is sufficient for a validator node."]})]}),"\n",(0,a.jsx)(s.h2,{id:"automatic-install",children:"Automatic install"}),"\n",(0,a.jsxs)(s.p,{children:["The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,a.jsx)(s.a,{href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh",children:"github"}),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.']}),"\n",(0,a.jsx)(s.p,{children:"The script is for ubuntu/debian flavoured servers."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n"})}),"\n",(0,a.jsx)(s.h2,{id:"manual-install",children:"Manual install"}),"\n",(0,a.jsx)(s.h3,{id:"setup-a-validator-node",children:"Setup a validator node"}),"\n",(0,a.jsxs)(s.p,{children:["Setting up a validator node is covered ",(0,a.jsx)(s.a,{href:"./validate",children:"here"}),". The default apt install creates an user polkadot with a home directory ",(0,a.jsx)(s.code,{children:"/home/polkadot"})," and a default service script ",(0,a.jsx)(s.code,{children:"/usr/lib/systemd/system/polkadot.service"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"install-the-database",children:"Install the database"}),"\n",(0,a.jsxs)(s.p,{children:["Database location: By default the polkadot binary runs as user polkadot and creates ",(0,a.jsx)(s.code,{children:".local/share/polkadot"})," in the users homedirectory. So for user polkadot (the default when installing from apt) that is ",(0,a.jsx)(s.code,{children:"/home/polkadot/.local/share/polkadot"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["This can be changed with ",(0,a.jsx)(s.code,{children:"--base-path"})," so for example ",(0,a.jsx)(s.code,{children:"--base-path /home/polkadot"})," or ",(0,a.jsx)(s.code,{children:"--base-path /home/polkadot/myvalidator"})," or whatever you prefer."]}),"\n",(0,a.jsx)(s.p,{children:"To delete the old database, restore a new kusama paritydb database snapshot for your node with a default install:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\nrm -fr /home/polkadot/.local/share/polkadot/chains/ksmcc3\nmkdir -p /home/polkadot/.local/share/polkadot/chains/ksmcc3\ncurl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(s.p,{children:"You can check the startup by running the binary as user polkadot and see if it accepts the database or throws any errors:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"su - polkadot -s /bin/bash\npolkadot --chain kusama --database paritydb \n"})}),"\n",(0,a.jsx)(s.h3,{id:"edit-the-systemctl-startup-script",children:"Edit the systemctl startup script"}),"\n",(0,a.jsxs)(s.p,{children:["Edit the default service script and add for example ",(0,a.jsx)(s.code,{children:"--database paritydb --chain kusama"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'su -\nvi /usr/lib/systemd/system/polkadot.service"\nsystemctl daemon-reload\nsystemctl retart polkadot\nsystemctl enable polkadot\n'})}),"\n",(0,a.jsx)(s.p,{children:"Or create a new script by copying the default service script:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"su -\ncp /usr/lib/systemd/system/polkadot.service /etc/systemd/system/validator.service\nvi /etc/systemd/system/validator.service\n"})}),"\n",(0,a.jsx)(s.p,{children:"You can edit settings at wish, changing ports and settings at will."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-config",children:"[Service]\nExecStart=/usr/bin/polkadot --chain kusama --name validator --validator --prometheus-external --base-path /home/polkadot --database paritydb --telemetry-url 'wss://telemetry.polkadot.io/submit/ 1' \n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl start validator\nsystemctl enable validator\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"caution",children:(0,a.jsxs)(s.p,{children:['If you installed as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,a.jsx)(s.code,{children:"chown -R polkadot:polkadot DBDIR"})]})}),"\n",(0,a.jsx)(s.h2,{id:"restore",children:"Restore:"}),"\n",(0,a.jsxs)(s.p,{children:["Best run the commands as user polkadot (",(0,a.jsx)(s.code,{children:"su - polkadot -s /bin/bash"}),") or when running as root do a ",(0,a.jsx)(s.code,{children:"chown polkadot:polkadot <dbdir>"}),"). Of course change the part after ",(0,a.jsx)(s.code,{children:"-C"})," to your location."]}),"\n",(0,a.jsx)(s.h3,{id:"generic-command",children:"Generic command"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/<link> | lz4 -c -d - | tar -x -C <location>\n"})}),"\n",(0,a.jsx)(s.p,{children:"For example paritydb kusama"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n"})}),"\n",(0,a.jsx)(s.p,{children:"For example rocksdb polkadot"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n"})})]})}function h(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9735:(e,s,t)=>{t.d(s,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABOFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr7f398/Pz+fn5+/v78fHx9fX18AnnMvLy93wofgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAbE0lEQVR4nO2dCbajIBBF8W/D/WQdoJje/w5aRmcgYRDJu33S3xi1lPBCFUJJCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIuJX79bw/vPjvvp9gCUgXUznA2BmzsEMkyrN6jwoA2YqOO07wIV4hDIBIGA9mCqjjNG+MA6QjpRsyfxrucdo/Ob+S8X8qGs472VhH1HJ/W5aIpG84aIz7qJLh+Tcd5ANlTmeBKzlvdjJ6HLBnYPAG5jJRBZK61A5jaA8rlR6LuRDKKBYZzSnnO7n37HZhUN8zaETas38+505Os14sDDXP/t8SRmrW5x5tNYNjCfAXAfi4vFmXhvBcLUX72CEyortRHI9h2RUphWb+TufbesoUIkiwF7GL1WCaTndG1wzHLFAHyADNKVlyMruBWI+NtzMspqOnR6wdTs7TvVekyrN3L30fz8yzWzF2V3HKx01Fqz/bjewHwGwH0wG2erH/GjQHRsoJwdI4nlnQgyuk4LxL6xFd6uoSq0sMdTx9Fr5fZU72Q2oJtoBYA78AtE/4pftCBURvK6BVnemBZkWUOEfLpxPDhOYq3cnrHlyOvPALiPvUDk/3wRCDHx9EUMIusz1S3I8sbEIMsaybzXSYeyCID6eWtq3m0/A+A+9gKZZO/USiA9F37SdNWLRecmZ2Tix39+LW9El9goY3O9ZpwPo3qxzPEEdq3o5tVSMBvYzwC4j71A5P2NfiUQeVtC3tGQn2zug4h3A+/Y7DjNbQnvRvum66dO3gexa+bDzEur40nMWi62FwzLBnYPAAAAAAAAAAAAAAAAAAAAAAAAAICbwGRp8JNQOYxuFCOEyHpBMbCu4xPG9YCfZerE5B0xdlTOvTELCsYHSkbMLQA/y8DFyFIxh5qM42pBYmYaTBNcLPCT0G5cT+7ZTbPhq4xNEAj4QcSENJl4Yw49JrIsSGjXb7YE4McQHpUUCB/1PDa9IKHr9gQCAT/HqPLx6aZi6JYFiXknUv9BIOD30LM1O5VhVsjFLkhUSjSVpmwtkA6AR5BCJSJIl+llRMNhF9RHun/3IJDdIQ7n4dvg5MTjj1HCiPcARa4j+VlnP0CGcgo5YjKBiMwYMvSwC4qp6ymhA+fUKZAU5DjmHUZKXEd2G22UU0KBiBwaSgF2QTEwrh+CAYFUYwICcfOa/ykTRSrVCTns/mU45h1GSlxHdhsPLqeXRpqAQOozAoHcZuJl1dGiQACI4bVHrIRAAJi1cZSHiULuAS7WrSbgYi2caaNNFwsCqcjGM8rpQhov04vVlkAACOfUq1o7VwoIBPwcDm2QjTpIWwKBi1WRjUrLydFsvPbaIK25WBBIRTbqKyePNo7qIK0JBIBTXOHGecuxAIGApvFqw6UO0pZA4GJVZKOCcorVBmnNxYJAKrJxczm5pRGiDW2iJYEAQHwRx6Ef1wMEAhoiqTYkLQkELlZFNoqXU3ptkNZcLAikIhtFy8kTcMSYKCmQ3FNuwW+SIBi/JkVFVdndSa+zKPa846t0cQM7y+4OgYAEuAYcRmtDkqKiquzuTAtk4iMZlmTuF9nd4WLdaqIBFyu/NkgiF0tldx9GIgWiko1OOl/cZXZ3CORWE88WiDseT0kKgejs7jNSIKNsK3pz3Kvs7nCxwBf47nGktxhfUVV2d3mspQUxDcdldncIBHzGN4NxExBdUXV2d3msJQbhViAX2d3hYt1q4mkulksbib2qDfEulsnuLtCtxcS7adi0ICfZ3SGQW008SCBpR458SLxAbHZ3YgUi0JJxZ3f/mwsRL7wuX77huK/c55Ayu7sVyCCCdGZi89Ds7gCsSTBUPQ3pBTJxamN0UjS7+1+GY95hpMR1ZLfxvQFvNG60UeSrSPd8EOVqURmDsNVtwXLZ3SGQimx8ZeCzcOM5AvkCuFhgQ8S08axAIOBuqok3zmhJIHCxKrIRaMAnDZc24GJ9CARSkQ2fgVf8DQ4IBDSJ36W606faAYGAgnhv/dWkDUlLAoGLVZGNgwG/Nj4NxjNew3v+p0xAIPUZaU4g6bVxMJGSt4a0JhBQIX6Xqian6m3VoQTSlosF6sLfTVWtNhaFtCQQuFjV2Hi9/jztRgKSXcOJNpp0sSCQGmyUuy+e5hpOtdGmQMCtvOoeM3LCRcshxfHW20AgIAFuYTxLGyY8V7QkELhYd9jwP74plza+vgaXNDbqaMzFgkAK27hPG5JvrsHpVb0Pm7clEFCSh/lUH2tDA4GAb3BK40naeF9rQ9JSdne4WHltvPQY9WvXaqWNesopPOI4MxFdUenEu7nm087MSdcrLOWyu0Mg+Wx4HKqjS1VFOX3nVW1MRFdUzigZTUYskWZxs6JodneQAd/EpirDDRLlVW2IrqgjJSKRiVoWSU3WK8pmdwdpCZm88ThthLUcC2kqqn7aAet3K8pmd4eLlcxGgDY8ofhd5ZRQGyRZN69+Xs5g08XZB+gUze4OgaSwEaQNrz7uKKdUXtXGRIKKOgfhg1wwArArCmd3B7EEuFS2K6sqPF5VxJGTVNRROlLjkm90NJ5V0ezuIIJnhuIkccRxJE1Flc6VzehOVt4WsrvX//JObPp73X6Opy+3T/V+R9vo/qKzu9OeGj2oVmO1QlAyu/tfhmPeYaTEdWgbAQ8YiDOQD6c0oryqFfExCOUTnT0q0U50w26FpGB2d/AJT3WpSM6I40iaO+mzJmw8bldoymV3B0E8b2LTwjtzxHGkpcGKcLG8eByqhNrIcBHugCO9NkgKF+tbIJDSJgp3UyW+iJJe1Yq2BAIueGwXruQmbWggkJYJCTdq1obHqypxBkEVlVJCRsaG0nY/BC7WBn+4kVMb0Rfhi8cLfRUBFZXyrptox9h+yHoMEEg2E0ED1LO3G1EX4c7HY1qOWgQy8WHgYqBuz/wbhwIXKwdPHaC+4WafakdAReWjHmdFuXfblHbBB3gbjWdoozJ1kKCK2m3/K2b3Y37UxfpKG9kv41MDX/RV1eJiQSCFjYSaCAg2LsONmgTybT8uBAKuCJvxV71L5e7HzX6PI4QQgfAZ9V9Ru+CUsEbjAdqoMeI4ElBR2UJRux/TvIv1tUP1gY1UuA0kuTtei4uVBQjkIxNBcfgnrcaNAnF5VR81HXUJZBxHmtAyXKxQmui/1fjvjldHSEUdxVTBrusS3gaBQMJoI9iQPE8bkoCKOnZSIJTyhIOx4GL5TfjajRQ2srE2kEkbtbhYk5xr3om5geksQyBOE748Cils5MUYSBVwOExkJEggnIr/u/ihJphyG0J2bRTjgRHHkdAbhWS42Ngkc1+Suo/spuzuDdBGuNGINiQhAqF64bQFMcncmf4rc8WN/I7s7s92sUIeupGOfGXlSQCaUBu1uFh2otRpDDJSIpO5D/qvyls9Gj2UzO7+XIE4vKoc5ki2ssoYcRypRSCDCkLm9uGyF8skcxcC2W5VMrv7I3FHHA+iHa9qQ0hFZd3UDz3rpqsNTDJ3Kh81NQcdVhZFs7s/Doc0nhVx1D/m8GuCKmrPxW3C/uJTm8ydisFatOPjOnn1qj2Bi7XC0XL8FdBGqsu4Uxu1uFgCKvI2XKL0QGW+UZPPXe9XMrv7UwTi86oK5uaNw6WNv/ztRk0C8SByVY/aBZNthn0UArK7714ObYiW4/bzC345mo333eeW6iVqaaQ0bDJ3G22wiSwtSNHs7vXTSDxOHI3H3SeWmmTZ3ZmJy0Vn17h0XhXM7v6X4ZgpjYTG4yWu4zsbsnV4X3VYbSKOAhdRxESq7O7Lc9LJsH9Oeqns7g8UyGlfVZUC+TStOgQSxw+6WA/2qj7TRlOEpR6dGJcUttsQIS1HlWR4dOyjCKqojE+9pLDdD6nVxTKtRWjLUYuL5XsEYLSBSOpxsURkkZhmBfJSOdXt240gwlqOCgTi04a/9fgpgaSca6tp0cXajMcle3E8BP9DzvR/P0LYUJPhHruP4vG3NsgtDzmrnaCKKpK7Iwa5MHKVADShiQwcbSQejPtbLpYhneUmBOIaVJXIRC42NnI8OvanBJKBBlysa3E8yr+CV+UEAvmYJz9nfEubU5zS4q+o4tFShpJ2Pyd/k/vytBuqkzeWEi5W2EPOIvgdF4sjBtG4m410rUbm6yiTVP13BJKHR7lYL6dXRap/mPIKBBwfAoF4cbpUTxEGQcTxHS0JJHGT+/JmVk9rz5LFdSjdcsDFiqNugYQ8Zzxf25H+i79uPLK1HBBIHDW7WG5xPMipUsCriiG4otJ4W7XPSfc/NTZFJ25BLgceQhvBhFXUgYvsDhM9+UgnrV5Nue3nFavRjeWSV8fMhvXf+tNNx0Nch7ej5Uhlw8lDyslrImw0bzeJNCXsLLUiYzpptUCkIJ34aFMtkmckr/7Ep3rCF38djduWAwIJNBE2WHG4fj6ITVpNVDYs2onWwyTrLZq8+it8j+N4lE/lnM5x96k9k7AZhavXKVogrBciEW1FbzatNnm1uxOXPC7e8E51Al8R1oKMcsPxaqgJVVV/EK2FakFMw1E0eXVok+sLxZ2tRoWuw/uL2eNwsQJNBMYg/dwwDFfpq2XSamIEIGMQbgWyCtcrEIhfGr4bHHV98V5lXHVYQSCBJsIqai97qK70ofPvmny8ExcxvVoumrzaTStj1A0ebRB05SYhtKKO476j1n5inhvSrzwwu1xF8mpvu/GqIFHyRy93uzHLo4JzbOAVmrya6r/D2We2YdHx+CCUZHuESyav/jtZ59fGh03HmZHEuE0EeFXRNhJwezklMhHWi8Wo+nvy2XJzpFP6mTi1MTq5N3m1Wxfkq07cO7/4NNpw20jFjwmEy3bgZOPlDjrVAhExCFv5Y+WSVy/4ZsU+Ld4g3qnj6MfNROB9kF46UglrdT6B+PypJ2oDMzluI/RG4Sieh165QP5K3BUv6zpk0wZcrEATwXfSKeuGigVSbMRIsS8+KnV0oI2M/JxA5M2QdJaTCsTtVT3Qp0oXjINIgiqqDrnHywelZ7LrxTeD43nBOLRRGQ+eUehpNjK1HFnb9XLagIsVaOKZieNu7MTN+a0UbDcgkEATj0sc19wNjhXwqerjSS5Wy9oQHKQBbdzPMwTincEhtyrQ5OYzUlgbcLECTYRU1FGME+n5OhNDNMEC8d/gsC3HkwSyVoDSBLEiKXEdEEigiYCKKsezD93EuoQKCRFIWLvxOOzdcfVm01jAqaqNgIoqx+uK6eY9826bym5IasMHcrzLcfcZAQ8BApFD18V/p1lNktv9Xhu1u1jHHqrkJoKBixVoIkQgxORryDzUxO9SuduNpwkkg4lgIJBAEwF1ntPZuxJuVsYWJFYbTyC0AQE1ERKD9Cp1HBmyxCAB2khntgiHm3u27xbyeBxBvVhM3kMfEvdi+R+GWd908fAJ4/r9Wgur2xwRJtIAFyvQREhYMTCZtrqLHcy7mXLrlUaV08XdRg5O1F4IYXcAIZCKTHwQd9PztSq7u/27LGjOsru/Xg6BPDLcQAduo0R3TDGmsrtz/XdZ0J+fZXe/EsgjtXE+CPfukwJpiBaIye4+6r/LguQ0u/vrRCAPeb74zsj1nPFkJvIAFyvQRJpbG0YP9qkHduE8u/tWIKm6qcoKxPWggbj2AwKpyEQSgejs7stzc+zCRXZ3I5BnulSuebEYo94YKQSis7vPwbjqB7YLzuzuj5SGP2U0aIsEAjHZ3cWAlGm3UDS7e94m152iKt6xWoCLVZGJ+Io6ru6PDCYnr12oIrt7zGuu938B2rj9PPHK8Or+4lNd6SiD9lTpwi6oj0tmd0+PWxZp2w1QJfH3QVT7QflERX7SZUFTMLt7YqANEF9RbXZ3eQNdDEmxC5py2d3/kh3J71Ll1Ea667jRRoGLKGLiGUkbwkhSYD5t/OXvqoJAKjLRkkAiCQjF4VP9HBCIwPeUAYQbP0tLAvmqyf30CRxtuA5wsUJN/K5A3t5w47TVaOOLh0BCTbQkkDDe/mAD4QYw/JJA3oF3/qANYGlJIK4m199oBGqjDdcBLlaoifYFEuBQvT/opmrji4dAQk20JJAdAVH4Z9oAP0iTAglrNBBuAD8tCeTvk0bjW2m04TrAxQo10YpAwhuNSENtfPEQSKiJBgQSKI03nr4BPufJAingUIFf55kCCW400kfhbbgOcLFCTTxOIHc3Gm188RBIqInnCCTQoULXLUhJSYF8O+X27kYD/DAJBNKrvCa9Seo+Mm9290C7HzYaJVyTRlwHuFihJuLT/jAlkImPKqm7yAM0cnd2d69AvorCIZCKbLRRTgkEMoxECkSrROetHo0eTrO7k2uBfNBowKEC+UkRg2wF0g3rz86zu5/b/aLRACAvyQTSCxeLDyJd9RyDGFlcZHff2Q2a5OfXBlysimy0UU5punmVCKauE1l6aSeVYpNXr9qTE4GEC6OSZ/s18sVDIKEmkgmEMSp1YfK5q48c2d2TNBoA5CWVQEbZTSVyVss2YzTJq8+zu7/fnUcYMqP67dm98frtl/hhTy4Qmc3atCAX2d2dAvm60fiLu4xqjJS4juw22iinhC6WeLitfNTU2A1LDHKe3f19JZC4rlsIpCIbbZRTAoGwfXZ3Muyfk37M7r4XCG5rgEq5Z7DiSiCIwkHN3DeaN32jARerIhttlNOThrv7gUAqstFGObUlEACSA4EA4KAlgcDFqshGG+XUlosFgVRko41yaksgACQHAgHAQUsCgYtVkY02yqktFwsCqchGG+XUlkAASA4EAoCDlgQCF6siG22UU1suFgRSkY02yqktgQCQHAgEAActCQQuVkU22iinsi7Wt9ndQ4FAKrLRRjklEUhvsidSzuV73vFh+TgiuzsAd5MsuzsRCUyEQGQO0s4q5Lvs7gDUQbLs7iKbSS8EwlWmXv3xp9ndY4CLVZGNNsopZW5e2o1CFiqD3JJZ8YPs7rFAIBXZaKOcUgpkrv5CIIOUxmgTKoZkd09EEbetgJES15HdRhvl1KUTiHhujhKIWEWtQFbhOgRSjQkIJNREuty8lFy2IKfZ3fdn4lnh3SHFMUoY8R6gyHUkP+vsB8hQTiFHTCWQSWUg7foli7XkPLv7vA8AjyCRQCRLL9a09GKdZXcH4IfYCkTcBxmW0OMsuzsAPwNTDREVy/35nfRjdncAAAAAAAAAeD7ryOfJRkpcR3YbbZRTkSqVCdsXYEYTU3WvUq6l3arvIJeRQ39EQhPLJIK+i+/b8FxGvA23Afl4vtircJtQfUWTY/9YE6mqVCnMqPpluH3P9mPtJ5bXyCR7tPdTXVKYsO9WswlS27CXEW/DY0A84HXMa4JFaiPAhCS6ShXDjKpfhtuzfjfWfoxWu9uIGmgWWWTnJuy7ZXVyG7as4m14DIyUrO4dZzGR4hZCkSpVivWoen013bgba89iC81jRC30UYMRzk0Qsrr9Gi2QgLKKsxHyZUT+kPhMJBBIkSpVjPWYSHU1Y7cbKTlEq91jRLUgfZSZcxOEpBRIQFnF2QgwEOuK+kx0E4sNc4pUqWKsR9WrqxH+4masffyPis+IjEF4pEDOTBCSViBnNjZlFSsQn4E5ho7rzPCZYNMc5vCoQKRIlSrGUe7SdV+tTeAueo1MvJviflXOTRCStwXZl1XyFuRgIL72+k1E/sAXqVLFWI+ql1cjNb5e28cFhWFGou2cmyAkpUACLiNFDOIpp7jaG2QirgIXqVLlWI2qV5Oy+G5t3C9WkJFBeg9xds5NkJQC8ZdVkl6sSwO0pyTaf/dcgzx2XH9JmSpVjNWoejXld9qvTXAT1GNk4jQyRr8yQZIKxFtWsTbcBiiXAUJcd7jHRCdN5LwKkqZKlUPf4DTD7c09YXMzlCa5Go+ROQZhcfcJL0zYSQQsye1b92UksOE2IO+kT1mvYWTpBjXkrVIAAAAAAAAAAAAAAAAAAADg6Zzet51iJ+9Eziv6At5fnfJn55KnPG4okF+DyRIevr0NKu+rqsx3B4bD4JxDhXDtfkbm+nByOmECsZfqvKBDgRwFUlmBACWQr/Whdqf96f5TgEAcu5+RWyDH0wkTiL1U5wUdCuREIHUVCJDfiJp1bx9kMs4/Y+I3TA4SEp/wYeq6nk4qf8W0HtejGiDC2Hpr1onvXfwYjkwOwpuPSsWcNlUhxDwRut9d7WbPgQ8975jYyg5ZMgfIXBj6dHqdasQIROYrmPbnoreSl7o/wrZA5s3EVv/c5bHaXxXjzQUCxDeiU2rY76LTM2HY/H3IuaB8/kJ6MfCwX681u8s/bLu1rFRiqLueQDDMG1Laiwf9ct5TOz9oLRCx21If5v2p2EokwJcNnD1A3sLQpyOmQ45GHPJchA7MJZpzsVux6XCEXYHorTzlsRYI3/xq3VMgYC5mk3LGfBd2UpJEfCdiLDYVaZXsR/zCpTBbW4HIQdBzrVBjPWWFEB+buQmr3eX6pT4wsqhVTpuwB7jmFVcUq9MxE+qNQOgy2WFeMueybMWuXCxbIEZG7vJY7a+KMa5A3rEFAojMLi+X1j9Wi0SYeQCvzBFlBMI2QWlng0q5tfzMCEQccH6pqWfW57Z5MJbd5W7LOYiFntspa6sDXPESRBaGOZ1tQpDZXVyma8xXZc5l2eqqPJYCMQJxl8dqf1WMMQXyFsQVCJi/kZHuvgtqsuXNzrHMx7cRiF2rdrdf0HZrKxBZyQbtWqwqxLjbXRs51gc9/WA5wBUpBGIOv8y1lgLp5DPu7SWac1m22rtY662JjWXEVu7yWO3Pt37vFwUCgaRABembyknElzvrRsaE+xZkWWt3V3tst7YCmRdEfpirFsQvEF1zDj+Yr0A+LYyVtcG0IGxUDqa+xG0LMmxakOUHY1sgNlJxlkeIQK4K5B3IJwUCVt286ns0vkQ3yG+A7luQZe2yu2C39SKQnk0TIa4YRGGrkdzCZuwz3rzf5U7ZguxjEBlt20v0xSBnBWIF4iyPg0BiCgRySIH6RiaZx0r0iszuMR91HNmTkTFGdi2IWbvanagn9q62lgJh6gOV+2nptRnIvhdL70DsOSz1QUx6pqJKeTttUgpE9U91Sy+WPDN7iZterK4n5Fge+wLhZitneRwEElMgEEgKTL/iXNqiX10lJO7kZPJBzCkfZ/d7E4PYtevdyX5r8f/IdVUQ79XRxS9gP3X7+yB6B7PVuj7Ibn+xuT3ANWl6sRT7+yAiULOXaM/FbKUvdXOEbYHIeylc9RFfl8dBIHEFAnk8gQcl3CsCygOsoLjXuwHlAdb0angE0KA8AAAAAAAAACAL/wEZotGiE3cQ9gAAAABJRU5ErkJggg=="},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var a=t(7294);const d={},n=a.createContext(d);function o(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);