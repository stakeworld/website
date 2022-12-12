"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),d=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(s.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},A=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),A=d(e),c=r,k=A["".concat(s,".").concat(c)]||A[c]||u[c]||l;return e?n.createElement(k,o(o({ref:a},p),{},{components:e})):n.createElement(k,o({ref:a},p))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=A;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=e[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}A.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},s={},d=[{value:"Snapshots",id:"snapshots",level:2},{value:"Database size",id:"database-size",level:2},{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3}],p={toc:d};function u(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building the database from scratch, which will take a few days, depending on network speed. If you download an up to date database snapshot your node will be up and running quicker; under an hour or a few hours, depending on network speed.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In principle building from scratch is the safest and cleanest; if there is an error in the snapshot database, this will propagate to the nodes who download the database. Also the database size increases with extended usage. STAKEWORLD checks for errors and periodically rebuilds its databases to ensure error free databases with minimum disk usage.")),(0,r.kt)("h2",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and the rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--state-pruning 1000"),", which is sufficient for a validator node."),(0,r.kt)("p",null,"An example systemctl service file can be found here: ",(0,r.kt)("a",{target:"_blank",href:e(9418).Z},(0,r.kt)("code",null,"yourvalidator.service")),". Copy to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system")," and of course change ",(0,r.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--database")," to your preference."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15712476"),(0,r.kt)("td",{parentName:"tr",align:null},"176G"),(0,r.kt)("td",{parentName:"tr",align:null},"183G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 12 Dec @ 03:22")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"15712556"),(0,r.kt)("td",{parentName:"tr",align:null},"155G"),(0,r.kt)("td",{parentName:"tr",align:null},"161G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 12 Dec @ 03:31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13318129"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"115G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 12 Dec @ 03:38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13318197"),(0,r.kt)("td",{parentName:"tr",align:null},"110G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 12 Dec @ 03:45")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"15712723"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"1.2T"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 12 Dec @ 03:51")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"archive"),(0,r.kt)("td",{parentName:"tr",align:null},"13318254"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"716G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 12 Dec @ 03:51")))),(0,r.kt)("h2",{id:"database-size"},"Database size"),(0,r.kt)("p",null,"Below a overview of database sizes, you can also view only ",(0,r.kt)("a",{target:"_blank",href:e(3993).Z},"pruned")," or ",(0,r.kt)("a",{target:"_blank",href:e(9319).Z},"archive")," database size.\n",(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore or "nodeinstall" to install a complete node. The script will ask some questions and create an install or restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,r.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot <dbdir>"))),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.io/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}u.isMDXComponent=!0},9418:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/yourvalidator-bb75e2b610b99850dea2ae3746ea5d53.service"},9319:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/archivesize-57dd3b189ff268eb18f5c2c6fa203272.png"},3993:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/prunedsize-c60056e34980091658fac70acad89ec5.png"},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABR1BMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr4fHx+fn5+/v7/f399fX18/Pz+np6cAnnNWtOnmnwAvLy/w5EIAcrLcqvUlAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAZiElEQVR4nO2da5akLLOFtafhfGocKHKq+nt7/r+PwR0V75cgaz9rVZmphJoGOwWMDKoKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8Ec295QHgjKoHRC/jdW0fvUGFB78ZJapKdn3dRut6CAQAAwlkoKllJXtRi9bcVDr3ZhDI8IruMH5NNxRQ9KKxKzRurWi6WiNDAW8BQGFYgVR1Uyklq7buhnXDHcS/EaKRnYjXDEWHF3IQVTcsXb13a+0dR6kqFHDbACgNJxCq0ISWgmti0RtBG5o6rJEkEoKqfdVbe7/WCKQRMhTw2wAojbFAVCwQeqErfOe+/vWaoRWl19H/1kvHrHXlu7iA2wZAaUQCoU5GXVuB+De+wvs10nQtbFfDSceu1eWlNXIFZNJbAaAcrEBk3ch66GS4O0h44+4gYQ0V7+uumzScaK0ub25HSQG9DYDSsALpa6nrs7R3kPDG9UHCGs3Q966n94Rh1SCQxt5V0gIzxQHgjhZIR1/vw02k6hR9+VNzy78R1JrSfXO7phOdHcUS1O6yivFraZjXSsEV8NsAKI3oSXorajU0nMRQoevOv6mbvtbPQfyaoUMxvKrMYw7/DN6tFVSeaEMBbwEAAAAAAAAAAAAAAAAAAAAAAAAAAJbBr7oBsDS1U4ONSKoRxAqARaogEEL02aIA/D7arpoRCJpYADggEAAWgEAAWAACAWABCASABZYFUgNWPF077mf225iy+537mnb5Ac+zIpCV5WoBGN5h+DQmlUx79BGZziMwTslv2SgQk4pge77kpwWyf7cw5GR4Ei2Qw/qw+upczr+ErQIhW9lsPoWLBGKkHfLbQCAfZPg1cPRAI6h6muRIJn2xCgnwQ1b9tq/rRvb6nV/rzSu7B0ocY7Mh+8SWtMHvT9WUnz/K0h/vQqnhOKqOzkO0w44oRaBPze/38ASHXfkHhjcY7nDHl+XooRKG6tmZpoavmC4BfpRVv60aSpbUxGudOUGp/HrRVR2Jgl60JrGlTvzq9yekbISIsvTHuyCBiESoQu+gj1Lz+z08wQf2CkvmPYFYffiKmSbAd1n1dSLLkDc/rd3UxJL6NkS5911jaZCBiIxMAS2QJEt/aGLp9ZFAVBUUa1Lzuz08AQTCiqw7vrZz5LhqaL2YbPrxN3eQiM+JTJXTCyQk3Tct+aG9ZNIfdzZvLCEakxg5ScHv+yAhS7/eg57wqE/Pg140IqTmD3t4AjSxWBm+JpC6k6OK6RLgp1n1nUD8WmMuKjMnmM3n2lEmcVvzh3K01e3PFIgE0kW7MAZpUy8IxPanwx6eAAJhZfjeHaSynRBfMSuTAH+UVd8KJMms72o33YPc93x0B1GdE1JIwT9zBxHuXLICsTss5A4C7uBNgZgesK6PtrlFeoiy6kcCGWXWd49RurgPYodKB7PQm6/bxT6IM6ii83AC8Z0a9EF+MS+OYlX0kzoahaIhopAyP8qqn9xB3NrIXC/0KFbduBd69gnaqU+oH41imSz9yS4qJxB3HkEgPnd/GaNYBbVbCjJ8VyC66tFDhkaFBPg+h37SB/FrY3MtjLnnINS/cfszBxBVyNIf76JyAvHn4QXiU/P7PTwBBMLK8K0HhSAHmlisgDu4AY+wAu7gBppYrAw/USD3xLuzH+YtqNYVZPimQK4Iec/Eq7eTZDoTgbwX7r7MJ35lFczrAjkZ8p6JV+83CGTBfA4I5FfytkDOh7zThMShNAWui4buDp15aEJhkLPx7sHcmCHcHYYz7HPH9/fR48xxTcj7UMOT0vpGQTEpJoRqEOB8vHssEDIrPty9oFrHxfDfQPpiwh53fGt2ntkCV4S8hzaSK+0Fop8x6kfzs7Emkblej3D3z8fpwCz/WcKLGd4VyAUh776XrUu736/qQrTD4S8TrRiZa7Piw93BhHlBjDkokO+tHD79K0LeNWlpLxCSQj7ePfo9u0iiihHuXrzhsiDyzOzqVYGIC0LeySIt7QUyvOjq7C+mNgjkuXD3K5I2sK2utxmmN4hk9TFmjvhuE6s6H/Je2Qosp3eQqlF9n/3N7Vggj4W7r8wPgibWRrK1+7MEcjrknTYlpbVAlNmgv/vn493HAnko3H11fhAIZCMztfu4NC4RyA3DvGZxKuS9Gpem/52w0qD38/HuY4E8FO6+Oj8ImljbDM+KIZLFgj4+/PuKZ05oCAQCYYF8auBpJzcJ5JdxgTCuflBYGI2JF+EHBHIF2Vqff96RG/Zagos7qIbMN4j23wa4h7ujiXWJ4Yw00g2HBDHmFYHMRJpvE0ibPkWfz+6+USBss7sP/BkqwnN/f47a/nn2PEd/Y4FE2/TbCz7jW/ODzESabxNInz4Dmc/uvlUg05NYhP0d5PdxwQ1ilV3u+Bm44qBRIK1LSeIEQuHvPnrdh5nbUjqKPd6DCZY/lt79vXB3CKQgdrjjx3L+oKFu+tTs9k+nZffR6+4BnS81DjPRz9APpnd/Kdz9vvlBCu1KMDd8TyDUuglpEY1AZHiuPLxyIR6hlJppYh1N7/5x4e4F1bqCDLPu+NnO7oP6SHOfmt0KxIeRaC24IMFQaia7++H07gh3Bxt4RyDCvvCp2Y1AXFp2G73uwsxDqfQOorO7H07v/nHh7uAO3hWIT81uBGLSsvvo9fQO0iZ3EL0H3Rg6mt6dVbh7BJpYrAzfFci4D6L72D56fbUP0pqSvg9ie7rb0ru/Fu6+AgTCyvDNUawqSs3uRrIo6NxHryejWHVTVXPZ3Y+md38p3H0VNLFY8bJAJs9BaPzJR6/7MHNXykaxp9ndD6Z3fyncfRUIhBWvPCgEC6CJxcoQ31fcgEBYGUIg3IBHWMHIHVdFvN8T7c5/mBfcwVvuuCjiPReuPsnuPhXIx2V3L6jdUpDhawIR1RUR77lw9Ul29xmBLNmvnMSdQCCsDF8VyBUR77SHNLs7Zf0ZSv1vObl7ZG9ywhef3R3cwT53/P171XEvi3jXDxST7O621Epy91ggWgXFZ3cHd7DHHX811xz3ooj3qInks7s7GS0nd4/sTUpHhLvDcIbXBHJRxHvoZPvs7k4gy8ndI/tRAu1Sw90LqnUFGebd8Xcrh457UcS7Ic3u7gSynNw9sjedd4S7gxleF8jJiHdilN3d91QWk7tvEUhZ4e7gDl7tgxAnI96JUXZ3L5DF5O4TgSDcHYYzvC6QsxHv1SS7u3ClFpO7TwTyZrh7/IQGAmFl+PIwL3Eu4p1Is7vrZynCjBHT1vlo94lArg93j2bLsgpIZz5oFeW+60ZWaGKx4qPdcS746iw+C9HQQ9I3v9HUIEq0w4a+Hinkoz1SHh/sjpeTu5ueC40zuzGwNpkapLGjBX2PJhZjw88VyNvJ3c3YlxsT6KPpfA3x1FIQCFtDRgLhEe7uC51tn7mBN61Sl0QiCETGra1LBALu4PeGu9PsiDPG1/VbdB9EkECUn6YzFsgokNkBgbDi94a7D1V0buT2wo49xQ6bp/B+dHl8B2lrHZ2MJhZbw13u+G/g6IFGvB/uPrR+TMPHRLuHlCg22N2FhblT3PzLqgQ3OGyFEvdB7AMdORYI5gdh8xn3zQ/yn+VQRRnzfrg79ZJNcKOu+35QVjTm+140rb44wx583PsuWlKf6mUTEqSmo1hG6BOB7DwMuJVXBfJquDuNMukutI12t/vxwe7Dqdg9+Lj3ffRC0gEkPWvsxGQUa+gCDdKR7fDhIBC+ZN3x33aOHJdBuLuwPWVtFKWGr0zDiFpqfbSHdnfN7YXJW9fbB/LjqUFaJewoA/ogbA1fE4iwL94KdzedZCXGuokFQpqgmarqUc2+FQiEleHrAnkr3L2xtb4b/UwkFsjQPWjraNsjoInFitcF8la4u+3qUE89/BykSgUy7EaPF+/un58BAmHFy6NY1Vvh7u7R9tCLdtHuITW8F0hrRrh83PsToInFyvB9gbwT7q78U4jGhaKH1PBeINIOg7u49yeAQFgZvvWg8BHeDXc/CJpYrPhgd7wc7n6UD/ZIiXyuOx4Jd5c0za7anuB3A2hisTL8QIGcCnffFe0uBfVpaqWuHAeGQFgZvigQNxHnwa/fpXD3SbT7nEDOR7v3om2FamhAeYfVCh/4lVUybwvksD4Ww92nQ7JTgVwQ7U6zhOoHj3JmT0eBQFixyx3/Bq47NNXwTtdvn7OtUya6Kopf7+u6kX1ID9LG5pUer02j3Smei56Qq5Vwdxftbq2m0e7Varh7nf67BjSxWBnucMc/y9FDjVHCzlIbBEIvdDxJHL/eUMhfE6915nqhRtHuLspwLdzdRbsbq5lo92o13B0C+XzDVwVi9eEFIpPOrotflyY6qwtrrXkVN7F8tLsTyEq4u492N6tnot2r1XB3XgIBd5B1x7/tHDy0DvY2J+HuIMP3d5CIjz6keuoFkgt399HuXiDL4e4+2l1bzcYqroa7D70YIcy/g9dgBgiEFW8KpO7kaOYBGSUjDPHrTiB+rTEXbkdpaS+QxXD3EO1uf+Y7E+2+Gu6uAgevwQxoYrEyfPUOUtlOiBdIRbV90E0av24FEtZ6c2ORlvYCWQx3D9HuViBzd5Cywt0LqnUFGb4sENP3NTGG7lu4bkfx61YgYW0wJ0alg0CWwt1DtLs9xly0+7Zw967rrnxkjyYWK94dxarocV3nE6t39GBB96uT+HV/B3FrI/NqEu0eBmgXwt2jaHdjNRvtvhru3mn52F9BXgQEworXBaLrr0usPnRB9M+40/h11wfxa2Pzaly60gO1Vhr0fi7cPYp2t1Zz0e5r4e76148V5WW4MBgLTSxWhi8+KLyfu8PdzU2lpvQL53aEpA1sDT/4hn5/uLswua7mQ01kNPYldVSLGZgOLTXMD1IAn+uOB8LdzcVrq4XLaMbmet0uVGkvBvODlADccQL/ZESKTAkzqNwKnYE0bfFhfpAiDCGQE/jH+Nk+iDJd/W5GIJgfpAhDCOQEremE2JjkuQIm2KsxOazrXtVeCpgfpAzgjjOoum/aRtUzj0g0woUIaIEonaTXlsX8IGUAd5yCHtzU2dFk3QPR/8IUuTbNO+YHKcQQAjmJlPmxMi2L3g73Wg2EsEjMD/L6Z6Q8Vvq1fjHdvm9+ELCX0A/XUrFRkm6VHd/F/CD34xK6pUufCXEpJSLccSOhm0ECkbXug3gtYH6Q25gXQja3NATyDjIVSNWp9KftmB/koOH8DcGzI+/6WCpTIBBuQCArhqu1GwL5aOCRFRZq93FpQCD3IHslNNftEh5Z5qwIIJAnUaJvNNftEk2sZcMbZLGgDwjkHDfMWwiBLBtCICUhrt8lPLLMWm3fLqFo+CsnD7jjJM2Fv7W1wCMrLEhjvsDquPAScMcpKLk7+iDPGq4KZE4IiMV6B+G4bpcQyKrhgRsCBPIxwCOsgDu4AY+wAu44Dk0t5bhur2hisTKEQI4j0Af5fEMIhBvwCCvgDm7AI6yAO7iBJhYrQwiEGxAIK0MIhBvwCCvgjtNcHNALj7AC7jhHKygxzMzcIYdBE4uVIQRyiqbuaRZDlUutuBEkbWBrCIGcgpKUZOYH8dOBhGlBmnFWE8wPwh644xR19DfG3Vb87YXmQXSTI1aYH6QM4I5T0KyjNFG0mNvWpEuTJqt3MyVgfpAiDCGQUzR109VdO5u+eiwQM926Tz2K+UGKMIRAztHEialT3HQgbmnuIE2S3d2C1KNsgTvO0nXjbrbFTQfipwXRfRDhBYL5QUoA7jiFe/6Rzd3gpgPRy17QqDDmBynJEAI5hZtJN3sZ3XQgfloQP5UO5gfh/xkxP8hZaiV0A2vuMrrpQPy0IC0V9YO+mB+kCOCOU9Q0jlXNXkY3HUiYFqQX0vfRK8wPUgZwxyn0M5ChmTV3Gd10IGFakKEPoqIePeYHKcAQAjkFXT6p6vbCywiBsDKEQE5hLl9zZVcOHmEF3HEK22DqTkbzxsAjrIA7uIEmFitDCOQ4SBz3CwwhkOMIXonjwB3AHdyAR1gBd3ADTSxWhhDIGTodwC7i39GeBgJhZQiBnKCjX5q39HuPCxUCj7AC7jiBDjxUNJilVstuBh5hBdxxAh14SP+kuHCnRw0LarcUZAiBnIAunsnXwCHUpKBaV5AhBHICMdw8GmpmSXHdTuERVsAdJ6Duhx7BatEH+VTgjhN0tdLP0FsWo1gFtVsKMoRAztAqnba6vjCYFwLhZQiBXMClEyDAI6yAO7gBj7AC7uAGmlisDCEQDiBpA1tDCOQ2ZC8oJ6+sDdKt8GB+kAKAO26D0gF1LkU1zXqQrMD8IGUAd9xGR4NbvTCvKWIrXoH5QQoxhEDuxc6Xo5rRCswPUoghBHIrdsa11icc9VOwYX6QMoA7bmTohJsYFCcAvwLzg5QC3HEreuKcMPeBW1FhfpBSDCGQe9GNKz8nSBW1tjA/CP/PiPlBbkQ2pAStB3PXiFYQmB+kCOCOu5BCzwtC9wnT3YhWaDA/SAnAHbehH5xTOLzrj/sVFswPUoAhBMINCISVIQTCDXiEFXAHN+ARVsAd3EATi5UhBMINCISVIQTCDXiEFXAHN+ARVsAd3EATi5UhBMINCISVIQTCDXiEFXAHN+ARVsAd3EATi5UhBMINCISVIQTCDXiEFXAHN+ARVsAd3EATi5UhBMINCISVIQTCDXiEFXAHN+ARVsAd3EAT6znDr4EVQwiEA0ja8Ibhl2XREAK5kcbk323ctCCdwvwgjIBA3kUqI5BedGZaEMo22gnMD8KEr68tCoE7bqPtKi0QqxI780Hn9ID5Qd4y/BqzZAiB3EkqkDifO+YHecFwogyvkLxMIJA70dpoqIklWkqwOPRBnCwwP8iDZJWxfieBO+7EiKCv67onSWil+OkPMD/I7WwUBgTyFlogiubuHHThZgQxm+6aH8Q5erzMblhblmTo2SSFTQqBQO6ERNDpYSqa9UDfM7qL5gfR/pwscxUiu2G1Jj1uePhU9XVZK2Sv3/e3Xn59f9vjDS9oF5gf5FlSgai+CneQc/ODeJduXO42KNAwZlrAXDez/Nb4JW0mcAd5HN2MounRpVIklTb0Qc7ND+JdunW526BEwyCPeMNEEBAID1StkWFakFaMnqQfnR+kiOr6vGEqkJwg8sxdagiEG5sEsuZqcISj7gBPAoHczeTOEl4ccwd4kluaWPs7LQUaesyK7UsIpCQu6qT/DIRlNV6xdVmSocesyC8rWlbRMrw45g7wIBuHecml1CFNl87VPyMmK7ayZPj378KyWitwvaHj8BEPuwM8yCaPPFfrsgX+arLLaq3A9Yb+4hw94mF3gAfZJpC9lehorSvK0HH4iEfdAR5ki0fer64fCQRSApsE8nZV+kwgkBIoRCBoYoF3uKWJ9UKXGZ10cAu3dNJvqK706tlxszVDf3GOHvGwO8CDXDLMqyVknoW5b8bxiq3LfIGfn8XlaoHrDaPLc+yIUyAQbmz0yObKAk4BgXADHmEF3MENpP1hZQiBcAMCYWUIgXADHmEF3MENeIQVcAc30MRiZQiBcAMCYWUIgbwATRjS5jbCI6yAO55HZ7OucwqBR1gBdzyPMDnfM1vRxGJlCIE8jslF6nP0joFAWBlCII/Taml046nXHIc9AkNWhuAoJn21hEA+2xAcZeMdJLdcLQDDOwzBY4T5EGapASserRuAEG5WTwDAFHoO0mafgwDw21l8kg4AAAAAAAAAT3K4dwJDVobgCvQEn00l7Zi7pCfs9Hykqc20nvnuvN1id1CNDcOLqaXZ4ne9zzB7qlnDcIqVFGLPEf0puhKJYbTfnGEze3EWDG0RM/9qv8cQ3IJSsupc/ejV8K8Z/knlK3EuMN5tEX4HiaF/McFtCbveaZg51bxh9Bn7WlTbDd0phhKJYXLtZg17vZxcnLyhK6L8XN0bDcFNtPT9ZJ8ZmvheNVz/tjMzrC8Exrstnd9BYuhfTI9ot4Rd7zTMnOqCoT/FVpjPstHQnWIokRpG127esPZPZDcaJhdnzxHBndhLrrQTbIiW9kg+MD7dor/PY8PkxQTaEu1gn2HmVJcNzWeUdWcEss0w/oy2xNhwvrp6wyCQbYa+SBDIdkNwF9K4w8UwmpXaI/mwxmRLS4vEMHkxgbaEHew0zJzqsqH5jMOfFshGw/gzmhITQ3ftMoa6qUWdkY2GvkjdK9PZ2GEIbkIqpZfmwjfmjROILjArEL9l6FC2Y8PkxQQjELeDnYaZU1021J+R7nNaIBsN409fzx/RXbucYW+72hsNfRHVD50N0e8yBPcghbnitrmkrCf23EG0KxPD5MWE9A6y0zBzqouG+jNqK9/p2WA4vYOMDd21yxnqTvXcxckYpudCu9lhCG6hq+2AiWmd+7tF1AeZC4xPtwzL1DB5MSH0QQ4YZk51ydB8xt6ODzdbDePPqEuMDf21yxj+X+4z5gzTc+n2GYI7kN4fQl/6Vti30ShWfqCmF7Kh6jPUgZFhtVrP3a53G2ZONW8oo/Wkrc2G0ac3N9TUUGZP1Bp6hW02dEX0905Tbz8iuIkw4G6edvTuvW10ZwPj7RYpdGtZjQ2r1Xrudr3bMHOqeUMVfeuSQDYbRp/ejEelhir7be4M6SERdRo2G9oistZXtdllCG4gPJaWpiKYB8fKP6ze9iR9cOfIMOxhjN9id7DfcP5Us4bRo3cjkM1HdKfoSqSGyX73XJwFQ1ekU3MXZ+mIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAxfw/ZUg7IkR4VnsAAAAASUVORK5CYII="}}]);