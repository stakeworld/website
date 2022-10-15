"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),A=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=A(t.components);return n.createElement(s.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=A(e),k=r,g=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return e?n.createElement(g,o(o({ref:a},p),{},{components:e})):n.createElement(g,o({ref:a},p))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var A=2;A<l;A++)o[A]=e[A];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>A});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},s={},A=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:A};function d(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12486944"),(0,r.kt)("td",{parentName:"tr",align:null},"105G"),(0,r.kt)("td",{parentName:"tr",align:null},"127G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 15 Oct @ 07:46")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14888879"),(0,r.kt)("td",{parentName:"tr",align:null},"160G"),(0,r.kt)("td",{parentName:"tr",align:null},"183G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 15 Oct @ 08:03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12487371"),(0,r.kt)("td",{parentName:"tr",align:null},"106G"),(0,r.kt)("td",{parentName:"tr",align:null},"111G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 15 Oct @ 08:29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14889306"),(0,r.kt)("td",{parentName:"tr",align:null},"151G"),(0,r.kt)("td",{parentName:"tr",align:null},"158G"),(0,r.kt)("td",{parentName:"tr",align:null},"Sat 15 Oct @ 08:46")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot paritydb"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}d.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABRFBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr7f399fX18/Pz+/v7+fn58fHx+Pj49TU1MAnnNWtOnmnwAvLy/8UilOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAZLUlEQVR4nO2daXarMBKF0dsG+3nrEIO6X9L7/9+oNGIzSQgo4H7nJLGxXJEF1yoNVFUVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABugarNj6dRS0VTTQNwJ1phkP7IskD6JnqCCx48nfare1gWSAOBgDfhBSL0xd60Y4HIVqhaC0Q2SqjedDide1Lp10Qjw8tVNxRo9YPaHiDcUVV3vr+qP98BAEOWBdIqKWs1FGlbWfWiGx400ROlatmp+Ii20g/Xfz086UUf2dZHrdl2+C++gHsNAI4sCkTSJa5cEZJCEz1RQ/HhUg9HpBZJsGbf6I8as7WSoYB/DQCOuEH6pEA6unr9GKSNBaIfULHOff3TkcGL8m/svXTMUVe+iwu41wDgyGIPYlwfNwYRwgrEP/EXvD8izdCiG8+N2aNUXto3uQJyNFoBgBeLAvE9iBTDIMP1IOGJ60HCkUrLR3Tdl+Okj1J5PQBxluPXAOCIFwhd7GpmDELXs7Q9SHjixiDhCDG8S3z3CcOhwWxte5VxgYniAHDAC6ShCauZWSw59C9dq7/8h5/wRGlvisbm9kinOjuLpbTfZRXjj+ppXisFV8C/BgBHvEBoyaOeWgephyK9Eu3gOA19iRKdfyLqRtA6iD8yDCiGR5VZ5tCvEO6o0uU1fSjg3wEAAAAAAAAAAAAAAAAAAAAAAAAA8CpwizZ4H3S7tb7y3X0L5hajELugHw6oBruJwDvRt1t3oqbtp7QXtW3Gr6t+KIA7GsBLGS5/umfI9iKfjpS7v6Fp4GKB19IocwtcF0JzWFTUn0Ag4J1IVZt7erRMRNMKLwUpIlFAIOCVyLa1ETp0kJq2kXQbnXkpvlkUAgFvROobUUMPQribRE0P0ut5rQ4CAW+koyldF8hJuoP2AcUtqEzfEgtEgEdy3nW3h8mv6uZrhqkIbpShXKxAqZ/5cIK17VO+BLJqeLVEARPP+Sd3qWcCJhxAnxvRxazHhRv/Y84UiFv20Osg+sNIQWMQ/48aUctK9krJRIGsUuJk8KgGDxNcquEggWTrw+qr+w7PX50qEGm7VhmFIx+HAuz187b/qBaTk8GjGjxMcKmGQ1/aJgySD9rnQt2H+Pl9I4Zv4Iae+aP+7ZW1UNvdHlUUwlK/4O25KP0+Hv/lFGjJP/tNlLDxGBMlbCSc1r+W2QKtoi0aVSQQF+o+ip/fD15829GCtD/q3q7Rg+NG7/LQomjIzSFnn0K8ensuSr+Px385NxnNgTTKCsTqwwtkHOrexc+nkJUhQr6PHu5dLLPWoIfFzl8bZKCiN4Uo/eN4/FfCoQ6gOGUFIuwcaIiLHIe699GP9eXtBRLC6xvfX4+I3S4PvwqhahMCeRRs349B/BTslcDFYmfiWBfr71b8O1rRSdMfeIG4UPfj+PlOIP6oebvuQWgroF+jC4sPQlD/Yu2FKP0hAcXVQCDsTLATCA3SSQFOIJUJdf8RP98KZBRD37lYug/ya3ShB2k7J6QQbP9xPQjgR+FBup3m9ZH1zf/oo/j5kUA+Yui7ZZQuHoPYedThbWE0L3qMQcBmVq/bRYoLpGpoFspE1neh7qP4+aMexB2N3k5/aBZL1O4B5ZnQRn3o/GgWq68eM4vFxKt4jAljg5tA6OJ1kfVdqHsfLX80BvFH47eTMKbWQfT4xtnzUfp9PP7LgUDYmThZIGARtCRTIBAeoCWZAoHwAC4WOxNvcbHO3MqbDwTCzgQ3gZTY7m52yX7Rf81TPVEg4AiYCWTndndZT76/gUBAPrnqqDhud9dph0PpVtBGrKFv6cyCid4CyW+vewUXi6EJb+M0gfz7t/Rqme3ugw5Gpamj0PtRzAasQYAM97pXEAhDE2cL5B8x/3qJ7e7BxXKlvUBofZGW5fntM6ngYnGGjUAKbHf3g3QqTa85gWiDww/HnYoVBMKZQwTybyv+HSW2uxPj0l4gFAaU5173Ci4WQxPHulgZAimx3V2/Y1zaC2R40AlWd0sVDtoAgZQ1wW8MUu3f7l5ZBcjvHqSq26Y5437bWviNkvSgi2LzVnP5QeBi8YWTQHZvdzeR26LSJJDWvECdx8F73WVrBOL33FN9gkJm8oNAIHzhM81r/uza7l59lta/O2WloZ8fvNe976rIT1TWV+ycHubyg8DFYmfi/HWQqzlr6XwskPHa/lx+EAiEnYm3CUQ2U0EXj0CY5FI6OJcOPToMOrwsZvOD3Kkl38Y7BFLT5NYpGBE0Zq5ZClKKixkxlx/kRi35OvgKRF9B035Rem9w4q53Eggl8xx04TKCmJdm84PAxWJngpuLNbFffZtA/Gb2pQDvZwsk5AehPmNTfpA/wxnZ8fNn5/sL2fiztw7sfrRAct5XOD/IxH71bQJpxksh0wHerxMILcK4HmRHfhBwFVx6EL8d16+xOYHoXfB+E7vfrm5L0Wb22ILZM39hhHdhFjolJSs0/zRMXh2XHwQcxPLyxCJpp/XnZ+nVIBAfnd3+UGR2v4ndLfT5Up+7TejL+7II7zZGsCRBk+569bGSflB+EIxBypogG187otJIOa0/xPzr3sUKkRGNQGS4emnQa7aKhFLthIt1uwjvEAg7E4MqJrYMplFUIG6/uo/ObgXid5OQFtxmw1BqIsD7/SK8Xy1QEDPSxh6FzJ/Wn634d/ixdcigTAJxkdntJna3XT2UGvcgZi/H7SK8QyBMmNAGN4GECSASiInM7jexj3uQftSD+ADv94vwDhfrehNz2uDiYoXtuOMxCI2x/Sb21TFIb0reLMI7BHKpiSVtsBNI2CnuZrL0/ne/iX00iyXqqpoK8H67CO9XC/Sd0IW/rIw98jhkmlfzuQ6i55/8Jna/Xd2VspvZxwHe7xbhHQI5mdU+wyhDi4PJQuG7gYt1nokEbRAQCAMgkFNMJGnD2YBAGICWPJwNyoj7jQBfgZTa7n6DAO8QyJFs6jhm91wxEUih7e4zAd6/I7w/TiBwsaZMbHOqJrXBzMUqtN19JsD7d4R3COQYG3xMrC9u2GnelWqcJpDf36VXi2131xbGEd515J+h1P9owaRhGeAdLlYx9AW/URvbOEsgv7+LCim23Z1WE9s4wrstxTnAOwRSgn1jjTk4CWT/dvfIxfIR3p2MGAd4h4u108SOscZaNU4SyO/vskJKbXcPg3Qf4d0JhHGAdwgk30Tqwl9qNQ4RyO9W/DsKbXc3jCO8O4EwDvDOoRe7IUdpYwQ3gezc7q75iPDuRyrsArx7IJBktnlU+7RBnOJiTSjig1Lb3TUfEd69QM4K8J4OXKwUE8cMxueqwU0ge7e7V18R3pUrdU6A960gaEOaCbdqsUEXBfoNnguFhn3b3TXjCO+0lqLMHLF+9dit7jY/iE8LUn9GNUF+kBxO8qcmYCKQUzh+6dzlB/FpQXxPZ0B+kFTsVX+JNoj3COSMAO8uP4hPC+LzIBDID7LRxNifWtLHpDZKNsZrBHJWgHeTH6SPn3mBID/IOlvX/Kx0DqrFCwVyFibxmksL4hKFEMgPskyCNo50qsZAIIUxAvFpQZooWTXyg8yz0lFcog0CAimMS91pgrq7RCEE8oN8snHuNi56QC0WbUAghQljEB/7tPcBHu2iDfKDpPlTyA/yIEyGKd1nDD3Ih0CQH4RgOdaYAz1IYYTZ4WUX6X2iEMOr84NsDdS2erPfqUAgJXH5QXxakJAoxPDS/CDb+4wisijZGMsBDxeBQErxZIEkr2uwWI1xNtZC5i4CgZTieS25bXqqcMdxABAIC57VkgkdBqOxxiRfaTqSeNZpvZLHuFglxhqcXCwIhAdPEEiJPVT7a1HMBMYgnLhvSyaMNdj7U1NAICy4Z0smdBg3k0UMpnlTkVLfMDgTBDiPO7lYifNT+fF2doB1kOuQSt+mK9q2ZLigmwgkdZiR129AILemUX2v2lrHSClnlH9LPmBJI4e/f//+/PzN3W3C/7QegE4DSrG0ZMEbeNm25PbtU4/TBgGBJCPGvwoa3UdxFyvJn/pKXFaqFpeZMDYgkGQeLpDULSKfYw0eVzcEch1cBVKAlA7jif7UBBBIMkINmF8FjZYzlUeeP/V8IJBk2kA5oxe5WFlLGnfYJwIX62GcL5DELuPf1i6Dx9UNgVxN13WyoLnTWjJr2vYt/tQ0WChMpNPxGIRN7FOIM1oSw4w8IJA0KKFPJaRUBTdjHexinbNFZLUatzKBrSaZmIzrQodf2Gfo+KANmzIiF+4zeFzdEMh1KKl/i9mtJrWLvysVFahtynbLSflB4E8VAwJJw3zovpr++C4/SKVDYGmB6Pwgfdj4e0J+kLLTtgACScMFSZzuQVx+EJ3lSiexMuGqG+eNHZcfJGuLyCc8nBseJuBiZeJvlJobgxiBSNFpgZjQoz5R6CH5QZKHGczDJfAwAYFk0ptBCAUXncQIZLj8Qw/iOo6i+UHevhP9LCCQRFrR1H3dimbmdZ+CrfZjEOUFUiY/CIbgJwKBpFIrvUw4mw9UC4TuqCKBDAoRTT/qQXLzg2QFK0zSBg/nhocJuFg7kDpuwxxaBI2JYe08qtrnKLTjluT8ICkdxsCfvJwap+YHucuPFgjygxTEjzNIFr0epLfOHUvMD5I+NQV/qjjoQQozFkgzjOndGL1KyA+SJQto4wAgkJL4/CBVNAZpo2XBlfwgibtDnDyqsm43TEQ2IBAG6Jbc2WdAIGVNQCCM+CcwzGALBJKKbFpFFLI3XPJisysFbZwNBJJKq5qaKGRvg0A26AIuVlkTcLGyCXNSRfg3K5CkqSkIpKwJCCSbkvfaVjMCgSvFBggklbpk4oNq5GKl7w4BRwOBpKKDu5cfg+zVBVyssibgYmWjHMUs/uMTmxcmPm1AIAxAS/IFAmEAWpIvEEgSOrWUo5xVuFjsTMDFykMdMQaBQPiZgEA4gZbkCwTCALQkXyAQBsDFYmcCLhYnIBB2JiAQTqAl+QKB5CDLmntxS7IHAkmmVzqgSyPLWYSLxc4EXKxsah0JLorlk8nx+UGusPEYExBINjrdx1p+ENkoG3zxmvwgoBgQSCoi+vnE5QdRraw6/ahWXRzn+oT8IKAsEEgqwyWvP3q3lB+kk5UOiWUdKR969Lj8IHCxCpuAi5XN0Ed0ouvnwleHFAdNa/ODdO429kPygxggkLImIJB86jgw9Rf+BZ15zcR173xI3oL5QcA5QCAZdN3nMDtgRTAMxnstEv1YeoGUyQ8CTgQCSUXav4sZpio9SGkme5Dc/CDLwMUqawIuVjailebvzMv+wh/UYaTR+zFIa/4m5wdZ/ymQ2wP5QZAfpASiVdQhLAhE1rIyuiAZNGEWKyk/CGDA72/2W196WoVdDFwSiGrk4GK1Zh2kD0OPzflBAAcGcfz+5ivkpaeV1kAGN2vq47v8ILSSPohkYiV9MT9IPhiDFDNBitC/fi25ht4rkEq2oi/48SEQJiacLMKvPQp5sUBoMaS0SXAlM9rYo5CXnla7BNLt3M0b89KW5MJIG99kj9NxWksBF+sKE26ssaCNfV3IGwWCwHGPMLHSZ0Ag2bANHAc2sjjWKCcODU5rKdCSh2N0kdhvaG1gqwkD4GIdaWK0pLG5y3A2IJBEOr3KVytVMs8UBFLexGi5L2OsAYHk0YlG77JqWlFQIa9syeNIH2aMtTECAkmDgpm0ejKrLWf0lS15DLEsksYac0AgaQhpf81ENckzut/Eu12sr+1Te2UBFysX/aFNvAZeW01eK5Ci/tRENSCQNJQcvCvtZjHrQd7G17TtUWt+EEgaevhBM1g9xiAXkTxtm6MLDwSSRidaWkPvmc1ivcPFSl/qy9YGXKxM+pZuhBIFN/NCIBtMnLN96rsaEEgesqSxV7fkLH5qyjw5w5+aAAJhAFryg/Hw2xw5XxsEBMIAuFjE9+4QL5A0WZRsDAjkIhC0YcTSCviyPErWYsIGBFKW2gaOs39DohAD8oOM+A4gcpkrNQcEUhKXH8T9rVqXKMSA/CCevFW+U7VBQCAlcflB3N9q0MMosqKkvy/PD3K4NuBiMcZ1F1GqAy+Qd+cHSQmSsK/PgEAY8y0Q6bTw3vwgJ66AlwYCKcyXQGTrdm29LT/IzLTtbbRBQCCF+RSIdDkPXpUfJHOYUbgWJWxAIIX5EEgXb9p6fH6Q4RL/M/z6oy/2P2nauDoPyPTPD4H8IAUZC2Q07Hh0fpAbDzMWMALJfPMTTmt5xgJpx5t+H5cf5BHDjHl+fvYo5L6n9TBcfhCfJ0TYB67Ak/KD5MVHWBUHpzEIBMKDOwnk8N0hnAQCF4sHN2nJu+wOKQgEwgLeLXlafASWYJqXAWxdrDxXap84WLlYu4BASsFMIHlhbQkeVzcE8jB4tGS+K7Wvy3gsPE7rE7i8Jb9cKX43Lt2Qy0/rY7jIxdrhSs1pg4d/BBfrYZwvkKNcKR5XNwTyME5rya97ljDMOBAIpBRntGRZVwpsAAIpxXEu1o7NhFna4OEfwcV6GMcI5ApXisfVDYE8jJIteYNQU28BAilFoZbEKh8vIJBS7GrJcvcs8XBueJiAi8WJnJbcOWP76FU+CORhJLbk14wthhksgUBKsaklz56xBXuBQEqx2pIH3f79AQ/nhocJuFhXsyFow44Z26w+g8elycMEBHIwtRI6W3RufhC4Ug8AApmnUV3V6/BwaflBcM/Sk4BAZjFhqpu26mS1MT/ITleKiVfxGBNwsQ6loz6iti00CMUwkx/kV+yP2snkmniMCQjkUEwPYjuM3nlUM/lBfn8FXKknAoHMQ2MQpQUyjMpdVpCZ/CBaINDFA4FAFmiUaHrTg3TOs5rOD/K7RSCr/4+JV/EYE3CxTqC2g/PeBa+eyg/yuyCQ2+UHISO76/GIH+QHWaTXw462kbWsIoFM5QfRY/MJgVxQZ1AYCGSeRkk9RpeqkYOL1frDX/lBfsc9yGUVBuWBQBYYxiBtZ1fSB5E4vvKDBIHs+39M3O7HmMAYhBPMYvPCRBkbEEgp0JKPBKe1FGjJR4LTWgq4WOxMwMXiBATCzgQEwgm05CPBaS0FWvKR4LSWAi4WOxNwsTgBgbAzAYFwAi35SHBaS4GWfCQ4raWAi8XOBFwsTkAg7ExAIJxASz4SnNZSoCUfCU5rKeBisTMBF4sTEAg7ExAIJ9CSjwSntRRoyUeC01oKuFjsTMDFupoN+UFSYHJNPMYEBHIoUhhkS39CzOqt+UHAA8BpXaFpq7YZHVnLDwKeBE7rMp2QI0dqOT/ITph4FY8xARfreNq6+hDITH4QCISfCQjkcCgir2jakKNwJj9IkZYscTJ4VIOHCS7VeDCkgJZi8/r0B5P5QdicDB7V4GGCSzWeS+dCuofo7tP5QaotLblaooCJ5/yTu9Tz1bjkIFWklan8IBoBHsl5V9sNMX6V1L9cMs/J/CAAvBIab0hBYxCvhe/8IAC8Ejsg73Q+kGho/pUfBAAAAAAAAABOJx6lXGeCSTV4mOBSjRdCeT1phF7brSdSr5PUZjTvN8ov2qj90F8q9WnCPFifA7D/3hdOtxEKT3ySuJartQi3BSSb8O3py2bUwlYjnBuy4T/X9mpE5y/ZBCDaVlbd0Gqy9W3X6vbrhqOuBZt2/v3VqHAj1JeJhh6sXN3u34fCyTZc4ZlPok30nzv7Z2oRbgtINuHaM5RNNuGroawtY8N/rvHJWa4GQecv2QQgelnp01b1XWXb02/7davv3UoHEgr3yrxnZMJe+CvVsP8+FE624QpPfxIz0b0idffW0Fmlm5BU06hssglfjc7Ysjb85xqdnOVq0GNz/pJNgIBpSXtZCf3lor/jnDDa5W/uUFiKzjT6yMQmgbh/Hwqn2ojrPPFJzIN6fU/TWCA5JqifCGWzTITektRk+xwjm9HJWa4G/THnL88E0EhzQZiT0gm3n9E0o9/cOEcoPJghgYxNUHe+weE1voQrnGwjrvPEJzHf3fXqNWFk6m4LyDKh2zOUzTPhBUL+WCeio6OTs1KNKiqfYwJoZGu6fOuetroB6bhpwLXBsS/ctLbb/jDRiPg++FnMv3eFk23EdZ76JOT9q20C8bcFZJmg9vRls0x4J1EYRbXR0dHJWatG5c5flgmgkSpuO+OrRt8wqx2xK/wfM1vzZYLGi2pdIebSdIWTbXz3IB+fpFGiWesNY99Gl80xYdvTlc2qRaiGbwx/dOPXvzut9vzlmACazn8zm6lF06XrpjPNuDqUc4X/a6cU67GJ2NYi+t/7wuk24jLTn2TLh4kE0n3WYpuJLurpaFieU4uxTv1XfTSAWGtQX43aTrynmwCa6MZb8+VC7anCoHj9uz8qTKdjbCJPIBk2ompMfZJem2hXP4zRFn0UkWPCtacrm1cLqoasdT18Y7jKjdp7rRru/GWYAER0ssxUET2vabqeBsXrs+VRYRLIhwk9m+/84SX81L8unGEjrvPEJ2mU3Do69rcFZJhw7enK5tXCVENRNVxjVH5sFbX3WjXc+cswATQfMeWEVO5C9+vAG9Z9w7KsFsiHCVrUHU71Iu7fu8I5NmzhuU8ymGhXnG73VndbQLqJsHRty2bUYqYx3NEty+ChGvb8pZsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPB6/g+aDXWfeLtPhQAAAABJRU5ErkJggg=="}}]);