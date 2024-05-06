(self.webpackChunkstakeworld_io=self.webpackChunkstakeworld_io||[]).push([[169],{511:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>k,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>w});var o=a(5893),n=a(1151),i=a(7294),s=a(7152),r=a(4281),l=a(8575);function c(e,t,a,o){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,o);break;case"precise":(0,l.Precise)(e,a,o);break;case"blocksToDays":(0,l.BlocksToDays)(e,o);break;case"arrayLength":(0,l.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){let{network:t,path:a,defaultValue:o,filter:n}=e;const[l,d]=(0,i.useState)("");return t=t.toLowerCase(),(0,i.useEffect)((()=>{let e;switch(void 0!==n?c(o.toString(),n,t,d):d(o.toString()),t){case"polkadot":e="wss://dot-rpc.stakeworld.io";break;case"kusama":e="wss://ksm-rpc.stakeworld.io/";break;default:console.log(`Unknown network provided, ${t}`)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{const e=async()=>{const e=await async function(e,t,a){let o,n;switch(e){case"polkadot":o="wss://dot-rpc.stakeworld.io/";break;case"kusama":o="wss://ksm-rpc.stakeworld.io/";break;default:console.log("Unknown socket url provided, no connection made.")}if(void 0===o)return;{const e=new s.U(o);let a=await r.G.create({provider:e});const i=t.split(".");switch(i.forEach((e=>{e in a&&(a=a[e])})),i[0]){case"consts":n=a.toString();break;case"query":n=await a(),n=n.toString();break;default:console.log(`Unknown path prefix (${i[0]}) in ${t}`)}return n}}(t,a);void 0!==e&&(void 0!==n?c(e,n,t,d):d(e))};try{e()}catch(i){console.log(i)}}}),[]),l},u={id:"chain",title:"Chain info",sidebar_label:"Chain info",description:"Stakeworld chain info",keywords:["stakeworld","chain"],slug:"/chain"},k=void 0,p={id:"chain",title:"Chain info",description:"Stakeworld chain info",source:"@site/docs/chain.md",sourceDirName:".",slug:"/chain",permalink:"/docs/chain",draft:!1,unlisted:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/chain.md",tags:[],version:"current",frontMatter:{id:"chain",title:"Chain info",sidebar_label:"Chain info",description:"Stakeworld chain info",keywords:["stakeworld","chain"],slug:"/chain"},sidebar:"tutorialSidebar",previous:{title:"1000 validator resources",permalink:"/docs/1kv"}},m={},w=[];function h(e){const t={p:"p",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Polkadot current era = ",(0,o.jsx)(d,{network:"polkadot",path:"query.staking.currentEra",defaultValue:"0"})," with ",(0,o.jsx)(d,{network:"polkadot",path:"query.staking.validatorCount",defaultValue:0})," validators and maximum ",(0,o.jsx)(d,{network:"polkadot",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:0})," nominators per validator"]}),"\n",(0,o.jsxs)(t.p,{children:["Kusama current era = ",(0,o.jsx)(d,{network:"kusama",path:"query.staking.currentEra",defaultValue:"0"})," with ",(0,o.jsx)(d,{network:"kusama",path:"query.staking.validatorCount",defaultValue:0})," validators and maximum ",(0,o.jsx)(d,{network:"kusama",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:0})," nominators per validator"]})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8575:e=>{const t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,o){let n;if("polkadot"===a||"statemint"===a)n=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");n=6}e=parseFloat(e),o((e=Number.isInteger(e/t[a].precision)?`${e/t[a].precision} ${t[a].symbol}`:`${(e/t[a].precision).toFixed(n)} ${t[a].symbol}`).toString())},Precise:function(e,a,o){o(e=`${(e=parseFloat(e))/t[a].precision} ${t[a].symbol}`)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},6601:()=>{}}]);