(function(e){function t(t){for(var a,i,s=t[0],l=t[1],f=t[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(v.length)v.shift()();return n.push.apply(n,f||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},o={app:0},n=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/chs.loyaltyupdate-tst.client/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var c=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("8a23"),o=r.n(a);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-content",[r("ProviderLoyaltyUpdate")],1)],1)},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{on:{submit:function(t){return t.preventDefault(),e.validateBeforeSubmit(t)}}},[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("img",{staticStyle:{"max-width":"250px"},attrs:{src:r("f0e3")}})])],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("strong",[a("span",{staticStyle:{"font-size":"1.5em",color:"#336699"}},[e._v("Provider Loyalty Update")])])])],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md8:""}},[a("v-text-field",{attrs:{label:"Provider Name",name:"Provider Name"},model:{value:e.ref.providerName,callback:function(t){e.$set(e.ref,"providerName",t)},expression:"ref.providerName"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{label:"NPI",name:"NPI"},model:{value:e.ref.providerNPI,callback:function(t){e.$set(e.ref,"providerNPI",t)},expression:"ref.providerNPI"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Address",name:"Address"},model:{value:e.ref.providerCompleteAddress,callback:function(t){e.$set(e.ref,"providerCompleteAddress",t)},expression:"ref.providerCompleteAddress"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"Phone",name:"Phone"},model:{value:e.ref.providerPhone,callback:function(t){e.$set(e.ref,"providerPhone",t)},expression:"ref.providerPhone"}})],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"Fax",name:"Fax"},model:{value:e.ref.providerFax,callback:function(t){e.$set(e.ref,"providerFax",t)},expression:"ref.providerFax"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"Current Loyalty",name:"Current Loyalty"},model:{value:e.ref.providerCurrentLoyalty,callback:function(t){e.$set(e.ref,"providerCurrentLoyalty",t)},expression:"ref.providerCurrentLoyalty"}})],1),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"Effective Date",name:"Effective Date"},model:{value:e.ref.providerEffectiveDate,callback:function(t){e.$set(e.ref,"providerEffectiveDate",t)},expression:"ref.providerEffectiveDate"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-radio-group",{attrs:{row:""},model:{value:e.ref.providerNewLoyalty,callback:function(t){e.$set(e.ref,"providerNewLoyalty",t)},expression:"ref.providerNewLoyalty"}},[a("span",{staticStyle:{"margin-right":"8px",color:"rgba(0,0,0,0.54)"}},[e._v("New Loyalty: ")]),a("v-radio",{attrs:{label:"Loyal",value:"Loyal"}}),a("v-radio",{attrs:{label:"Splitter",value:"Splitter"}}),a("v-radio",{attrs:{label:"Opportunity",value:"Opportunity"}}),a("v-radio",{attrs:{label:"Out Of Network",value:"Out Of Network"}})],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-menu",{ref:"menuEffectiveDate",attrs:{"close-on-content-click":!0,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-text-field",e._g({attrs:{slot:"activator",id:"effectiveDate",label:"Effective Date",name:"Effective Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.ref.menuEffectiveDate,callback:function(t){e.$set(e.ref,"menuEffectiveDate",t)},expression:"ref.menuEffectiveDate"}},r))]}}]),model:{value:e.menuEffectiveDate,callback:function(t){e.menuEffectiveDate=t},expression:"menuEffectiveDate"}},[a("v-date-picker",{ref:"picker",attrs:{max:"2250-12-31",min:"1980-01-01"},model:{value:e.ref.menuEffectiveDate,callback:function(t){e.$set(e.ref,"menuEffectiveDate",t)},expression:"ref.menuEffectiveDate"}})],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("ValidationProvider",{scopedSlots:e._u([{key:"default",fn:function(t){return[a("v-text-field",{attrs:{label:"Reason for Change/Comment",name:"Reason for Change/Comment"},model:{value:e.ref.providerReasonForChange,callback:function(t){e.$set(e.ref,"providerReasonForChange",t)},expression:"ref.providerReasonForChange"}}),a("span",[e._v(e._s(t.errors[0]))])]}}])})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"normal"},on:{click:e.submitForm}},[e._v("Submit Update")])],1)],1),a("v-snackbar",{attrs:{"multi-line":!0,bottom:!0,color:e.snackbar.color},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v(" "+e._s(e.snackbar.message)+" "),a("v-btn",{attrs:{color:"#bbb",text:""},on:{click:function(t){e.snackbar.show=!1}}},[e._v("Close")])],1)],1)],1)},s=[],l=(r("caad"),r("ac1f"),r("2532"),r("841c"),r("1276"),r("7bb1")),f=r("bc3a"),c=r.n(f),d={name:"ProviderLoyaltyUpdate",data:function(){return{ref:{},menuEffectiveDate:!1,NPI:"",snackbar:{show:!1,color:"green",message:"",bottom:!0,timeout:3e3}}},components:{ValidationProvider:l["a"]},beforeMount:function(){for(var e=window.location.search.substring(1).split("&"),t=0;t<e.length;t++){var r=e[t].split("=");"npi"===decodeURIComponent(r[0])&&(this.npi=decodeURIComponent(r[1]))}this.ref=this.initRef(),this.getPhyInfo()},mounted:function(){},methods:{getPhyInfo:function(){var e=this,t="https://www030.chsli.org:3005/loyaltyupdate/"+this.npi;c.a.get(t).then((function(t){var r=t.data.recordsets[0].length-1;e.ref.providerName=JSON.parse(JSON.stringify(t.data.recordsets[0][r].ProviderName)),e.ref.providerNPI=JSON.parse(JSON.stringify(t.data.recordsets[0][r].NPI)),e.ref.providerCompleteAddress=JSON.parse(JSON.stringify(t.data.recordsets[0][r].Address)),e.ref.providerPhone=JSON.parse(JSON.stringify(t.data.recordsets[0][r].Phone)),e.ref.providerFax=JSON.parse(JSON.stringify(t.data.recordsets[0][r].Fax)),e.ref.providerCurrentLoyalty=JSON.parse(JSON.stringify(t.data.recordsets[0][r].Loyalty)),e.ref.providerEffectiveDate=JSON.parse(JSON.stringify(t.data.recordsets[0][r].StartDate)).substring(0,10),e.ref.providerNewLoyalty="",e.ref.menuEffectiveDate="",e.ref.providerReasonForChange=""})).catch((function(e){console.log(e)}))},submitForm:function(){var e=this,t="https://www030.chsli.org:3015/loyaltyupdate/"+this.npi;this.loading="Updating loyalty information, please wait....",c.a.post(t,this.ref).then((function(t){return JSON.stringify(t.data).includes("Error:")?(e.snackbar.color="red",e.snackbar.message=JSON.stringify(t.data),e.snackbar.show=!0,!1):(e.snackbar.color="green",e.snackbar.message="The loyalty information has been updated. Thank you.",e.snackbar.show=!0,e.initRef(),e.getPhyInfo(),t)})).catch((function(t){e.snackbar.color="red",e.snackbar.message="We're sorry, the loyalty information cannot be updated at the moment, please try again later. "+t,e.snackbar.show=!0}))},initializeRef:function(){},initRef:function(){return{providerName:"",providerNPI:"",providerAddress:"",providerCity:"",providerState:"",providerZip:"",providerCompleteAddress:"",providerPhone:"",providerFax:"",providerCurrentLoyalty:"",providerEffectiveDate:"",providerNewLoyalty:"",menuEffectiveDate:"",providerReasonForChange:""}}}},v=d,p=r("2877"),u=r("6544"),m=r.n(u),y=r("8336"),b=r("a523"),h=r("2e4b"),x=r("0e8f"),g=r("a722"),w=r("e449"),k=r("67b6"),N=r("43a6"),P=r("2db4"),O=r("8654"),S=Object(p["a"])(v,i,s,!1,null,null,null),C=S.exports;m()(S,{VBtn:y["a"],VContainer:b["a"],VDatePicker:h["a"],VFlex:x["a"],VLayout:g["a"],VMenu:w["a"],VRadio:k["a"],VRadioGroup:N["a"],VSnackbar:P["a"],VTextField:O["a"]});var D={name:"app",components:{ProviderLoyaltyUpdate:C}},E=D,L=(r("034f"),r("7496")),_=r("a75b"),J=Object(p["a"])(E,o,n,!1,null,null,null),F=J.exports;m()(J,{VApp:L["a"],VContent:_["a"]});var R=r("f309");a["a"].use(R["a"]);var $=new R["a"]({icons:{iconfont:"md"}});a["a"].config.productionTip=!1,new a["a"]({vuetify:$,render:function(e){return e(F)}}).$mount("#app")},"8a23":function(e,t,r){},f0e3:function(e,t,r){e.exports=r.p+"img/logo-chsli.9e8d3849.png"}});
//# sourceMappingURL=app.438916f1.js.map