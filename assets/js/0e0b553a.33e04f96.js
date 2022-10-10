"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[669],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>k});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var s=r.createContext({}),d=function(t){var a=r.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},p=function(t){var a=d(t.components);return r.createElement(s.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(e),k=n,u=c["".concat(s,".").concat(k)]||c[k]||A[k]||o;return e?r.createElement(u,l(l({ref:a},p),{},{components:e})):r.createElement(u,l({ref:a},p))}));function k(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,l=new Array(o);l[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var d=2;d<o;d++)l[d]=e[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}c.displayName="MDXCreateElement"},3025:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>A,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=e(3117),n=(e(7294),e(3905));const o={id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},l=void 0,i={unversionedId:"snapshot",id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",source:"@site/docs/snapshot.mdx",sourceDirName:".",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/snapshot.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"snapshot",title:"Snapshot",description:"Polkadot and Kusama snapshots in paritydb format",slug:"/snapshot",sidebar_position:3,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Pool",permalink:"/docs/pool"},next:{title:"RPC node",permalink:"/docs/rpc"}},s={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3}],p={toc:d};function A(t){let{components:a,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"12411100"),(0,n.kt)("td",{parentName:"tr",align:null},"103G"),(0,n.kt)("td",{parentName:"tr",align:null},"125G"),(0,n.kt)("td",{parentName:"tr",align:null},"Mon 10 Oct @ 01:20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"14813121"),(0,n.kt)("td",{parentName:"tr",align:null},"158G"),(0,n.kt)("td",{parentName:"tr",align:null},"180G"),(0,n.kt)("td",{parentName:"tr",align:null},"Mon 10 Oct @ 01:42")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,n.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,n.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'The default binary/systemctl from the apt repository will run as user "polkadot". If you install as root you will get an error "failed to create a test file: Permission denied". You can solve this by running ',(0,n.kt)("inlineCode",{parentName:"p"},"chown -R polkadot:polkadot paritydb"))),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAEsCAMAAAAM8ycIAAABQVBMVEX///8AAACgoKD/AAAAwAAAgP/AAP8A7u7AQADIyABBaeH/wCAAgEDAgP8wYICLAABAgAD/gP9//9SlKir//wBA4NAAAAAaGhozMzNNTU1mZmZ/f3+ZmZmzs7PAwMDMzMzl5eX////wMjKQ7pCt2ObwVfDg///u3YL/tsGv7u7/1wAA/wAAZAAA/38iiyIui1cAAP8AAIsZGXAAAIAAAM2HzusA////AP8AztH/FJP/f1DwgID/RQD6gHLplnrw5oy9t2u4hgv19dyggCD/pQDugu6UANPdoN2QUEBVay+AFACAFBSAQBSAQICAYMCAYP+AgAD/gED/oED/oGD/oHD/wMD//4D//8DNt57w//Cgts3B/8HNwLB8/0Cg/yC+vr4fHx9fX1+/v7+fn58/Pz/f399TU1PDw8OPj48AnnMvLy89UAP8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAYjklEQVR4nO2dC5aroLKGpafhfPY4EPHcmzP/ARx5FahofCBB+b+1snfHaDUB/+ZhVdE0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4BLw1L6LjW6ceNQ3Ak5DMMNCRbYH0XfAGNzx4O5LPj2wLpINAQE2QQJi62Ts5FcggGW+VQIaOM96bDke4N436jHWD/7gR4wlS/dDaAxp3lLeC+qt2fgUABbItEMmHoeXjKVIOTc/E+EMXvOG8HQQPjygr/Xj/t+ObnvWBbXXUmpXjb6ET3GcAlMimQAZ9i3N3ipZCF7zh4+njre6PDEok3pq9kI4asy0f/An0GQAl4ibpUYEIfffSHESGAlE/6NOE+/Ovj4yjKLqwJ+mYo+58EZ7gPgOgRDZ7EDP0cXMQxqxA6A3d8HRkMFMLMV0bs0f1+YO9yJ0wTGYrAJTFpkCoBxnYOMlwPYh/43oQf6RR8mFCLAZO6qg+X01AnOXwMwBKhASib3a+MgfR9/NgexD/xs1B/BHNeBVb9gnjodFsa3uV6QmR0wEoARJIpxesVlaxhrF/EVL98R9f/g1Xoyk9N7dHBBd2FYurcZdVDB1Vy7xWCu4E+gyAEiGB6Ecebew5SDue0nMmx4HT2JdwJugNazumn4PQkXFCMf7UmMccnbvt3VGuzlf0/gS6AgAAAAAAAAAAAAAAAAAAAAAAAACgKhCiDWqkZTYQjhkFCMlCKfSSMd7BmwjUySBbGx4qGqF+0q6rXiGS90MjENEAKqUXJpaIoqxVUFEjnB5cfEPXYYgFKmUqkGlwDw/yREEgoEq0NlSEj+C9irIb5yBOFgMLRAGBgCoxIuhsWgKmlWIVMoT9CQQCqkQLROVGc+GlPqONe6cSDkIgoE6UCFwip8HMQSgZlM5b0JjkaKFAGHglue+9E0T/TqvZ821/wKcC0dltKCdaa9d3FwLZaXpvEQo+DYU7h0kH0J/N6KJT/vF4WuNJDn7N7QIZu4qhGVQqD5WYQ/jFq4614wc958MZgewuQsHWULhzaIGc1oe5fGij13cZBWJzcw46gbnO09Hz2ZN0boUMgZRnreDCqTvcpEGipH0u1b3Pn993bPwL3Ol3dJQub0weJn+2VMlcW52D32ToG61Sin5Kxl8CiZv5r2BrNRXuWLP++7f1qeTGNSMQiEt1H+TP78dRvBT6gTQddZfr/+T0bP13Wk0DTLKxUYCUop+S8ZfAE2Zz4DBHmvWfZv1zya0+SCDTVPcuf/5gni4If9Re3oRDLMq27wSiV5N6lRfWpeifJuP/MYUUA6QlrUCYXQP1eZHDVPeU/Vjd4SQQn15fD/1pkq7P1p85gSiD48un6J8m4/8xGGKVYS3bEOvfXugKycRgbmkSiEt1P82f7wRCR83l3Bmank0CUVIYjfkU/X73iQKAQMqwVrJAeGMnISSQxqS6n+XPtwKZ5NAPk8ZOzyaB6FTITSU9CCiDtEOsxi7zUmZ98zv6IH9+IJBZDn0SyOxsL5BWdl24TRjmICAty9s7uUAaFUnkMuu7VPdB/vxJD+KOBpc3TTM7WwtEmg905xGsYk2e4P0WDLHKsHbW3Hhnx27wxMu85r+BMuu7VPeULX8yB6Gj4eXN/Gz1r8rBT6dQin5Kxv8rbnxQ+MZ7MIu14+bUXR2bMmieNTDI5D3bmkBb90Td/eA+jsekP6smgWImjZhCntSsA+2+eu+vsTHpmk7Of1iLSX9STQI/onqPQFq9uHU/LiZdQUtkfq1sLSYdQ6wyrH01F+82fjTECnf3mnKsN8js8U4CkYsfVmPSIZAyrG2Z2+g2cggk4q++TyDkzL7l8b50eb9fILTXpN90cjUm/UF9caXs0Ma1Zd5vRPzV9wmkmzwKWfF4X7q83y8Qsu5/zWpMOgRSMt/HVSsrtMea9fPZ+tS741JSQicQ5QVPTuzkrm7P0s7scwtTl3f1KGQ867+ZPN6tQCIzkPWYdAyxyrA2N3daGoZDzfr5bCrE3946KaETx/gatA6cE7t70Ednzb1NzPbcocu7PSuXx7sVSMvte/qh2Y5J/xsbJ9HrL6Gtwl9/d9n+9+/v+4hqy8bRmPQ9AlEDJDMMaZkTyODvYJ0lxLiK+LPk2hCLXN6djDJ5vFuBULFDBV6MSQc5uNhtBBxp1s9nWyHkr27cCbXzrRYIeZPou9w5G/qz1jzevcu7E0gmj3cX1uIKMpkU5YlJByf5tlK1WxqG9Wb97IWuIF8RMxIS9k8sZ0x/4JzYnbu6P2vp0Dt3eXcCyeHx7mLS/Xx8mK4aZIlJf9IwvxBr6bqNgFsE4jPmaIFIYUIIrRP7tAfpJz2IszB3eaeZSrke7xDI76x9k4YTyAn2N2tEETMCd9zpHETPtsmJ/dscRDNzeSeBlOvxXkIZKmTns7+T8rhJIH5rDbeSpfzfyYl9sorF2qZZerzPXd65O6tcj3cI5Afs0MZpaRiSPyg0zJ+DqHUscmInd3V3lnVmn1iYurzrZyn6rNI83gkMsTJbu2XKseBxf/eKzRcNgWSz9nXKkUQahocJJJPH+xkeVpMP5esibkJtaJ7VrLk83s/wrJp8HnlGVAvQrKnAEOs2a8ee/aUtHASSCgjkBmtnug0IpBzganIrm92GFcjdoFkj2Jh0Ie2uB2452oKkDfdC9/0PphwL0KwLXNIG/azSPOUULm29Ik/ShiqHWH5EZd7tmXLcXDgIZIFL2qDzmAjR+A3TNUjacEvh0rmMQCD3w1x6O/+OBJIpaUM97PQ0zDOiWoBmjWESx41zDa2GVkc+kus7kjakYksa5vOcs404aNYYRiBaF3pjkmCThlxJG14+xPr+RNyd9oPChUAgMYxATHYGEx5PHsNI2nDR3I2xG9cLtwQCieHnIIINPrBLkylpwxtf35IoaP7+1OvnZT2VtKEatEB0gNbYg8wEgqQNJyh7Ir4FmjUGM4G8NhaLj0OswSeeyJO04S1DrL0jqnTawBDrZihpQ28foOscdkFQFpI27DN3dzTspcLtBQJJBWrS89wR1QI0aypQk5ofdRu3gWZNRfVDrNPdRkFr0EsgkFRULJCLE3EIpArqrMm3jagW1Nmsd1BbTb5oIr5Fbc16HxUNsRJ3GxhiVUEVArml24BAXktFrib5n4iXwcub9Rwm5NY8UTcBIVXHpL9+Ir7Fe5v1NC4mnXLO1xuTnmcijiHWs3Ax6dRpVBaTrm/3nCMqCORxbAnkxTHp+1SRptt4Ci9o1hswAVOdzYtVQ0z6rnlGym7jKTy7We/CzkGGGmLSD3QbJI0iJkh5zEEgMXwvobdQfGlM+vkRFQRSOV4gL41JPzCiKilGHDHphWBSj6qf2rfFpJ8ZUdXMQ5o1Mybtj56DtO+JST8yEc+Z/hZDrGfhYtKFCj1XM/Inx6S7FIUHHvhlT38LgVRBcTWJldsUFNesj6WgmsQ8Ix0FNevDKWOIlW6ecUPhsljDEKtQfi2QnN0GBAIO87uahAvVjUAgqfhJTWIifjcQSCoyD7FSr9wmLdwvrWGIVSj5BHIiwq/oe7DowkEgV8jtalJJqp2SgEAitM5ZceBcv7eP1C2/iEmvNWfCz6lUIMPQNELKPvqZJIF0jDcmJr33Iei5Y9JT5EwoehRTdOGqFMjAGesGJuX8Jte4mPTxJ95yFyLVOWfFPDHpRwLDsztPQSAvp+N9z+V4c7cyfoIRyMCEEohxd29dTd0dkw4/kaKoUiDjkElFQqmuJH6CEch4+/sexHUcN8ak44FfgVQpEDb9J3KCzmMiGy0QMwfhJJA7YtLvfuBX9Cim6MJBINETWtvFaIGMCmFdP+lB0sWk5xlRFX0PFl04CCR6QmtSmSisBoxUmoQx6ePdvmPbcEPFceGISc8P4yPmn5UT3I2vZdGrSTolIk0Rkw4XqsdQpUCkJ37CVCAdH2iO3pyPST+e0rPUvcMxxKoa2ie9CeYgMnhicjgmHbnZMlqDQFIhhBi+n7WbaE1i5fbp1CkQoSYUYy/BE9qc1yTmGa+gSoEInWmXDQOPOmOdw9dkkpXbikYxRReuSoF0ekWKqdlEOqO6JpGb7efWIJDrcD33YOuuJif4x+BC9UaqFIj50n2T7uuPtz3bpQpI42HUKRC3epWsB9kSyDlVVDSKKbpwVQqEAqVSzUH+rQgEudnyW4NArtObSUgjWKJVrKVAMJh6CVUKpJGsa/tW0r5qZ6En6aFAII03UadAVBoGxkJHkemnh5M2GIGU6z1V9Cim6MJVKhCVtmHNz2SRtEHvcutHY/GkDf9+nZs3o7WaCletQNaZJ21o7F7Q9uM8SRtAIaBZY0SSNgjaxPPmpA2gKNCsMSZJG0ywraA4qduSNkyoaBRTdOEgkBiTpA29rqOBBHJH0oYlFd2DRRcOAokxSdoQ60HSJW0AZVNpsw6d5Jr4x5OkDbN90pMlbcCr+FetSRvUUm3XauIfT2PStQw67g4lSNqwg4pGMUUXrlKBsO1g26lAWp28mqYeZ5M2HKOie7DowlUqEL7x2TJpw+JJ+sGkDeC5VNqsbcJYW0ulNfl2Km1Wldx9Yw5yBgyxyrCGIVYKuCOdSQikDGsQSKGgJl8JmjUVqMlXUmOzqq2lHOmsYohVhjUMsS7DMQcpylzRhatRIPeAmnwlaNYr4EHh60GzRjAht0PHbdj695j0BkOsUqxhiHU3Liady6ER6qddMekQSCHWIJC7cTHpevcQ5cSLmPSKqbhZNxx6fVhtJxGTXjW1NmvPVShMtyISEkjPBGLS7zZXdOEqFUirNj4Ptq6dYUUwTsZ7xKTfbq7owlUqELUotbE/CPUSYhxQISa9ZiptVha8Yh/TjT+qAzHp1b7qjUnnQotD8PjHSiBDqxShdIGY9HvNFV24SgXS6mQl/Vr6ai0QPk7hBZeISb/bXNGFq1Qgo0J0Sp/YRy4mXT9J1+tciEmvl3qbVQiR1F69NflqKm1W9/zjln3Sk1DRKKbowlUqECaNRBJ+fQikDGsQSAqY5HqAVa5AQBlU2qzMurRDICDk85kfqbRZ9TOQcZhVrkAqGsWUUTiljc9noZB6BdIMkvUQSAHmfl04LQqtDQjEYb52m9KRoNKafDReGvpfw/SUSpvVPgIRVzdKD6i0Jp+KH1FR3xFVCJr1CnA1Kc/aV3OzEdVnynyeXqNAviaOmydtaNqJUwqSNjy1cNNuY5XwkhoFwrcTx7mkDdIlbXAHLHmSNoCkbHcbEMgRXNKG3iVtcAcMSNrwLKIT8V3a0KBZYwRJG/jsQK6kDU8dxfzcmjZn7vSNifgOaRjqFIhQToot52u+iqSHwUrACwRJG5KbS2stoopz0jBUKRDBOhUr2Em2ohAngkHK6YF8SRvAYeYP/M6MqBZU2aw6mYlUi1kyfoLVw+Dizxc9CJI2FMWxecZOaRiqbFY9zVb/bGc10R1NeECTKWnD368TFuR7/V25/vP5M9L4U//+7dMGkjZso760ydewldUknG1MVrHM+i6SNvzY2qGV22PdRkCVAuFj59Gq3mGzBwmzyoUz8zxJG8A6N46oFlTZrGr6oVew+tgcxCZt+D9mkzdQFgd3ApI2/I5DK7cXtaGpslkFk/oZer+2inUGDLHutXZsRJWscFUKZOwDdDof1n09cz8QyA3WYg/8vkkjbeHqFIhlYwOE41RdkzcxG0xdeeB3FjRrKlCTqfC3+v5u4zbQrKnAEOu6tWB5qmn2LVHdXTgIJBUQyCVrs+Upc+hUrwGBlAlq8jB+Cn7/A7+zoFlTgZo8wrzD2COLzNIwoFmvAFeT48R8biP6WGomR+GWQCARXISt/T8ITtcgJv2C99TuDiN34VaAQBa4EHQKRafgdANi0o9T9jxjCzTrAopJd6HoFJyuQUz6IXI6Ft4BmjWG6y4CJ14SCGLSv5s7ERKeThsYYt3PUiAuOB0x6V/MHQ8JT91tQCD3sxAIBacjJn2VW0LCf071zRplLhAfnI6Y9AhPn2dsUXGzbjATiAj94hGTHr4+n78/L41dIeELG5di0m991RqT/pWpQCbTDsSkW3PpVm7LeEizAgQSYyqQMDi9QUz6wQd+zxpRLaioWffiQtDd/wNDTPozHAvv4OXNmpH3DrFOOBbmK9zd5iCQVLxRIDsdCy92GBBIFbyrJt+8cnuIdzXrL3lBTf7UQ6RQXtCshfDsIdYvPUQwxKqCpwrkhIdI4m4DAqmC59XkiXlGYmk8gOc1a6k8pCYxzzjGQ5q1UJ7lapJunlHEGnQecxBIBBtq23Kmc8A/Pyb97DwjS+EgkIfhYtFbLhqhoj+eHJOOecZFymzWn+Ji0blRyWNj0k/MMyCNBcU1axEogQjdRQjno0gCeUBM+u0uhRhiVY4SSK+lIVz0R/Ex6Se20jjdYUAglWMEon4ajECKjkmfzTOwcpsSCCTGvAcpNib9bk90AIHE8HMQLZMSY9J1bLe64ffvD274dZz38oWY9MfhV7HU3Ly0mPQT84yih/lFFw4CiUHPQfQ+uCXEpNca8fpzIJAFtC26fZL+65j0x2yl8UogkFTcMMQ6EfG6oo2iRzFFFw4CSUXamkzcYRR9DxZdOAgkFalqEvOMooBAUnGpJq0qGswzSgMCScXJmkw3z9ii6FFM0YWDQFJxuCZzeogUfQ8WXTgIJBVHahIRr48BAknF15qczTMgjUcAgaRioyaRWSejNQyxCuLrk/Tz84yK7sGiCweBbOB8TU4lbUDE6yuAQNbptLeiaPjBpA2YZ7wICGQVEzvYyUbsSdrw0TWZzkOkolFM0YWDQFYxEVOtraHOxRTGkzZ8Pizt84yK7sGiCweBrGJ6ENth9G5EtZK0wQsEI6pXAYGso+cgXAlknJW7VA3xpA0fJRCo4oVAIBt0nHUmd0Mj3MgqmrThsy2QM7+7olFM0YWDQL6gUisqehdRGEvaoCYdcYGcThjwLWnDi15I2vBQejXtkN3QKmmQQCJJGz6xHuQ3ZQaJgUDW6fig5ugD74ZxiEWZsZZJG+YC+VmJQXIgkA3GOYgU9kl6Rzkb8iRtqGiYX3ThIJBUQCBlWINACgU1+UrQrKlATb4SNGsqMMQqwxqGWIUCgZRhDQIpFNTkK0GzpgI1+UrQrKnAEKsMaxhiFQQeFJZnDQLJR0ux6APn/vC+mHTwCtCs66h4EBuL3jFOh7/GpIMXgWZdh7k92JqeO6/31Zh0DLEKsYYhVjaY36RQeIHEY9IhkFKsQSDZUJsUCpUYa9QBCWQlJj15TaY1h8KVYe1ldIypDaBVQpNAILGY9KauZkbhwIhUCeN4J9SkY9aDzGLSFTtrcm+FpzWHwt39WyvE5MXq2X/sLrdWDLGYdAUDryT7ffcYnED0olW4irWISQegRlRO3kGaDsMLJBKTDkCNhLHogUBWYtIBAAAAAAAAICe8/37Oz8yhcGVYqwa/K1trn48M5nGi2bPNLqEPmzZC7IUNOdaH5kK/+53mTKHosovW6MLIdw3LfqRwUtdQd9UaNQRdl6Jwvnm1NfriR63Vi7S7sg2S6k5a5y1yRaEtd74TXGgd6yfmAr/7PbhC+cuuWKMLV76r26juYOEk+XxesUYN4a9LUTi/6Z6yRl982r5gg97uytaLxt40srWrvm5BWBzoQPyFzrF+Ys773e8rnC2Uv+yKNbow/l1po7qDhfN92BVrriGC61IUzm+6p6zRF5+0L/iKucnsTcOEffTuhCH3/432F5Jj/cTc0Vu6mQvkirXwW0W+63Sjuv2F8wK5aK3R/YS/LkXhjFVprNHRafuCbwymjU2NCua8Ukw1+u0SduAvdI71U3Pkd78bMzxwl12yFn6ryHedbFR3oHCsk2aYf9Wabgh/XZLCKfTITLDg6KR9wTecE4odnkpVgfq4qcAj02C6kBzrZ+Y6O5/djQsUNpddshZ+q9h39RvVHSqc1HtKdNetmYag65IUjjbda2VwdNK+4AsDD+vOjFWDvzCHOmJ34f+TY/3UnPW7P1A6cw+6yy5ZW/Ygs+8abFR3oHBk+6o12xDuumSFo5qjo+hBDiDob7BZFzT9sXf/PTSVWzjWT81N3Ir3oQpFl12zFp4f/67Nwa/rBSLmhTtuTQSdoZ6WJyucqzk6eqIdqiUIvDV/XLj6kfvp76G/9+GFujmn5q4K5KK1oHCx72o3qttfNisz9dM4fb5ozTWEuy5J4WjTPWPNFXnSTGCToM7NopB+3+pVdz39PbZaHlyoBTIzF/rd74NW89VlF62F3yryXe1GdQcLNzA9B2mvWnMN4a5LUzi36V43GSZMmglsQY/Kpf2fu5ubHuceq8bgEa0SyMzcfA+4L7hCucuuWaML176r3ajuYOGENNdfs+Z9Fux1aQo3rTl3FE/SAQAAAAAAAAAAAAAAAAAAAAAAAAAAAADs4H+QKGiCg+o46wAAAABJRU5ErkJggg=="}}]);