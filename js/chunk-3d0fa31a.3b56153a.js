(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d0fa31a"],{c53b:function(t,s,e){"use strict";e("e58f")},e58f:function(t,s,e){},e760:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"call"},[t._v(" 钱包: "+t._s(t.connectAddress)+" "),e("el-form",{attrs:{"label-width":"80px"}},[e("el-form-item",{attrs:{label:"合约地址"}},[e("el-input",{staticStyle:{width:"280px"},model:{value:t.contract,callback:function(s){t.contract=s},expression:"contract"}})],1),e("el-form-item",[e("el-upload",{staticClass:"upload-demo",attrs:{drag:"","on-change":t.readJson,"auto-upload":!1,action:"alert",limit:1}},[e("i",{staticClass:"el-icon-upload"}),e("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),e("em",[t._v("点击上传")])]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("请上传合约的json文件")])])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",plain:!0},on:{click:t.generate}},[t._v("生成")])],1)],1),t._l(t.functions,(function(s,n){return e("el-form",{key:n,attrs:{"label-position":"right","label-width":"300px"}},[e("el-form-item",{attrs:{label:s.name}},[e("el-input",{staticStyle:{width:"110px"},attrs:{readonly:!0},model:{value:s.selector,callback:function(e){t.$set(s,"selector",e)},expression:"func.selector"}}),s.inputs.length>0?e("el-input",{staticStyle:{width:"800px"},attrs:{placeholder:s.inputs},on:{input:function(s){return t.onInput()}},model:{value:s.params,callback:function(e){t.$set(s,"params",e)},expression:"func.params"}}):t._e(),e("el-button",{on:{click:function(e){return t.callContract(s.name,s.inputTypes,n,s.stateMutability)}}},[t._v(" 发送")]),s.outputs.length>0?e("div",{staticClass:"outputs"},[t._v(" outputs: "+t._s(s.outputs)+" ")]):t._e(),e("div",{staticClass:"outputs"},[t._v(" "+t._s(s.result)+" ")])],1)],1)}))],2)},i=[];const o=e("c030");var a={name:"Call",data(){return{connectAddress:"",provider:null,signer:null,contract:"",contractJson:null,functions:[{name:"",inputTypes:"",inputs:"",outputs:"",stateMutability:"",parameterNames:"",params:"",result:""}],funcName:{inputs:[]},result:[]}},mounted:function(){this.initMetaMask()},methods:{async initMetaMask(){window.ethereum.enable().then(this.provider=new o.providers.Web3Provider(window.ethereum)),this.signer=this.provider.getSigner(),this.connectAddress=await this.signer.getAddress(),this.functions=[]},readJson(t){let s=new FileReader;s.onload=async t=>{try{let s=JSON.parse(t.target.result);this.contractJson=s}catch(s){console.log("load JSON document from file error: "+s.message),this.showSnackbar("Load JSON document from file error: "+s.message,4e3)}},s.readAsText(t.raw)},generate(){if(""==this.contract)return void this.$message.error("合约地址不能为空");if(null==this.contractJson)return void this.$message.error("未上传abi文件");this.functions=[];let t=0;for(let s=0;s<this.contractJson.abi.length;s++)if("function"==this.contractJson.abi[s].type){let e=this.contractJson.abi[s].inputs.length,n="",i="",a="",r="";if(e>0){console.log(this.contractJson.abi[s]);for(let t=0;t<e;t++){if(i+=this.contractJson.abi[s].inputs[t].type,r+=this.contractJson.abi[s].inputs[t].type,"tuple"==this.contractJson.abi[s].inputs[t].type||"tuple[]"==this.contractJson.abi[s].inputs[t].type){let e=this.contractJson.abi[s].inputs[t].components;r+="(";for(let t=0;t<e.length;t++)r+=e[t].type,t!=e.length-1&&(r+=",");r+=")"}n+=this.contractJson.abi[s].inputs[t].type+" "+this.contractJson.abi[s].inputs[t].name,a+=this.contractJson.abi[s].inputs[t].name,t!=e-1&&(n+=",",i+=",",r+=",",a+=",")}}let l=this.contractJson.abi[s].outputs.length,c="";if(l>0)for(let t=0;t<l;t++)c+=this.contractJson.abi[s].outputs[t].type+" "+this.contractJson.abi[s].outputs[t].name,t!=l-1&&(c+=",");const u=new o.utils.Interface(this.contractJson.abi);console.log("inputTypesBackup",r);const p={name:this.contractJson.abi[s].name,selector:u.getSighash(this.contractJson.abi[s].name+"("+r+")"),inputTypes:i,inputs:n,outputs:c,stateMutability:this.contractJson.abi[s].stateMutability,parameterNames:a,params:"",result:""};this.functions[t]=p,t++}this.result=new Array(this.functions.length)},async callContract(t,s,e,n){let i=new o.Contract(this.contract,this.contractJson.abi,this.signer),a=[];const r=""!=s?s.split(","):[];console.log(e),console.log(r.length),console.log(s);let l=this.functions[e].params;console.log(l);for(let o=0;o<r.length;o++){let t,s;if(o==r.length-1)s=l;else{let t=l.indexOf(",");s=l.substring(0,t),l=l.substring(t+1)}t=this.processParam(r[o],s),a[o]=t}console.log(a);const c=t+"("+s+")";let u;u=r.length>0?await i[c](...a):await i[c](),this.functions[e].result="view"==n?u.toString():u.hash.toString(),this.functions=Object.assign([],this.functions)},processParam(t,s){if(t.indexOf("[]")>=0){s=s.substring(1,s.length-1);const e=s.split(";");console.log(e);const n=[];for(let s=0;s<e.length;s++)t.indexOf("uint")>=0?n.push(o.utils.parseUnits(e[s],0)):"bool"==t?n.push("true"==e[s]):n.push(e[s]);return n}return t.indexOf("uint")>=0?o.utils.parseUnits(s,0):"bool"==t?"true"==s:s},onInput(){this.$forceUpdate()}}},r=a,l=(e("c53b"),e("2877")),c=Object(l["a"])(r,n,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3d0fa31a.3b56153a.js.map