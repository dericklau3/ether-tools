(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1660b015"],{"52d0":function(t,e,s){},c78c:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"multi"},[t._v(" network: "+t._s(t.network)+" "),s("el-form",{attrs:{"label-width":"100px"}},[s("el-form-item",{attrs:{label:"合约地址"}},[s("el-input",{staticStyle:{width:"280px"},model:{value:t.contract,callback:function(e){t.contract=e},expression:"contract"}})],1),s("el-form-item",{attrs:{label:"地址列表"}},[s("el-upload",{staticClass:"upload-demo",attrs:{drag:"","on-change":t.readFile,"auto-upload":!1,action:"alert",limit:1}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),s("em",[t._v("点击上传")])]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("请上传私钥列表(excel)")])])],1),s("el-form-item",[s("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:t.transfer}},[t._v("发送")])],1)],1)],1)},a=[];const n=s("c030"),o=(s("8aca"),s("ad73"));var i={name:"Call",data(){return{network:"",provider:null,signer:null,toolContract:null,weth:"",contract:"",number:100,amount:"1000000000000000000",addressList:[],fullscreenLoading:!1,simulationResult:"",totalETH:n.constants.Zero,totalETHStr:"0"}},mounted:function(){this.initMetaMask()},methods:{async initMetaMask(){window.ethereum.enable().then(this.provider=new n.providers.Web3Provider(window.ethereum)),this.network=await this.provider.getNetwork()},readFile(t){let e=new FileReader;e.onload=async t=>{try{this.addressList=t.target.result.split("\r\n")}catch(e){console.log("load JSON document from file error: "+e.message),this.showSnackbar("Load JSON document from file error: "+e.message,4e3)}},e.readAsText(t.raw)},transfer(){if(!this.checkParams())return;this.fullscreenLoading=!0;let t=new n.Contract(this.contract,o.abi,this.signer);const e=n.utils.parseUnits(String(this.amount),0),s=e.mul(n.utils.parseUnits(String(this.addressList.length),0));this.tokenApprove(this.contract,s).then(s=>{const r=this.addressList.length,a=[];for(var o=0;o<r;o+=this.number)a.push(this.addressList.slice(o,o+this.number));const i=this.weth.toLowerCase()==this.contract.toLowerCase();for(let l=0;l<a.length;l++)this.toolContract.batchTransfer(t.address,a[l],e,{value:i?n.utils.parseUnits(String(a[l].length),0).mul(e):0}).then(t=>{console.log("finished")}).catch(t=>{console.log("batchTransfer error",t)});this.fullscreenLoading=!1}).catch(t=>t)},tokenApprove(t,e){let s=new n.Contract(t,o.abi,this.signer),r=s.allowance(this.connectAddress,this.toolContract.address).then(t=>{console.log(t.toString(),e.toString());const r=this.weth.toLowerCase()==this.contract.toLowerCase();return t.lt(e)&&!r?s.approve(this.toolContract.address,n.constants.MaxUint256).then(t=>n.constants.MaxUint256).catch(t=>{console.log("approve",t)}):t}).catch(t=>{console.log("allowance err",t)});return r},checkParams(){return""==this.contract?(this.$message.error("合约地址不能为空"),!1):0==this.number?(this.$message.error("执行数不能为0"),!1):""==this.amount?(this.$message.error("数量不能为空"),!1):0!=this.addressList.length||(this.$message.error("地址列表不能为空"),!1)}}},l=i,c=(s("d33b"),s("2877")),d=Object(c["a"])(l,r,a,!1,null,null,null);e["default"]=d.exports},d33b:function(t,e,s){"use strict";s("52d0")}}]);
//# sourceMappingURL=chunk-1660b015.fdad8e08.js.map