(this["webpackJsonpadword-demo"]=this["webpackJsonpadword-demo"]||[]).push([[0],{113:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={SHOW_LOADER:"SHOW_LOADER",HIDE_LOADER:"HIDE_LOADER"}},161:function(e,a,t){e.exports=t(377)},170:function(e,a,t){},171:function(e,a,t){},23:function(e,a){e.exports={appName:"AdForm Application DEV",baseURL:"",env:"DEV",storageCampaignKey:"campaigns",storageSharedKey:"common"}},377:function(e,a,t){"use strict";t.r(a);var n,r=t(1),o=t.n(r),c=t(68),i=t.n(c),s=t(67),l=(t(170),t(171),t(172),t(374),t(375),t(159)),d=t(40),u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"}},o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("h1",null,"404"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("h3",null,"Page not found !"))))))},m=t(157),E=(n=function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,508))},function(e){var a=Object(r.useState)({component:null,isLoading:!0}),t=Object(m.a)(a,2),c=t[0],i=t[1];Object(r.useEffect)((function(){i({isLoading:!0}),n().then((function(e){var a=e.default;i({component:a,isLoading:!1})})).catch((function(e){i({component:null,isLoading:!1})}))}),[]);var s=c.component,l=c.isLoading;return s?o.a.createElement(s,e):l?o.a.createElement("div",null," loading ..."):null}),g=function(){return o.a.createElement("div",{className:"router-container"},o.a.createElement(l.a,null,o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/",exact:!0},o.a.createElement(d.a,{to:"/campaigns-list"})),o.a.createElement(d.b,{path:"/campaigns-list",exact:!0,component:E}),o.a.createElement(d.b,{path:"*",component:u}))))},p=t(379),D=Object(s.b)((function(e){return{model:e.sharedModel}}))((function(e){return e.model.isLoaderShown?o.a.createElement("div",{className:"screen-loader"}," ",o.a.createElement(p.a,{color:"dark"})," "):null})),S=t(23),h=t.n(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=t(52),f=t(160),_=t(115),A=t(114),v=t(57),I={users:[],filters:null,addCampaign:{},campaignsList:[{id:1,name:"Divavu",startDate:"9/19/2017",endDate:"3/9/2018",budget:88377,userId:3},{id:2,name:"Jaxspan",startDate:"11/21/2017",endDate:"2/21/2018",budget:608715,userId:6},{id:3,name:"Miboo",startDate:"11/1/2017",endDate:"6/20/2017",budget:239507,userId:7},{id:4,name:"Trilith",startDate:"8/25/2017",endDate:"11/30/2017",budget:179838,userId:1},{id:5,name:"Layo",startDate:"11/28/2017",endDate:"3/10/2018",budget:837850,userId:9},{id:6,name:"Photojam",startDate:"7/25/2017",endDate:"6/23/2017",budget:858131,userId:3},{id:7,name:"Blogtag",startDate:"6/27/2017",endDate:"1/15/2018",budget:109078,userId:2},{id:8,name:"Rhyzio",startDate:"10/13/2017",endDate:"4/25/2020",budget:272552,userId:4},{id:9,name:"Zoomcast",startDate:"9/6/2017",endDate:"11/10/2017",budget:301919,userId:8},{id:10,name:"Realbridge",startDate:"3/5/2018",endDate:"10/2/2017",budget:505602,userId:5}]},O=t(64),L=function(e,a){localStorage.setItem(e,JSON.stringify(a))},N=function(e){var a=localStorage.getItem(e);return a&&"undefined"!==a?JSON.parse(a):null},R=N(h.a.storageCampaignKey),y=Object(v.a)((function(){var e,a,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R||I,n=arguments.length>1?arguments[1]:void 0,r=!1;switch(n.type){case O.a.ADD_CAMPAIGN_INTO_LIST:(e=t.campaignsList).push.apply(e,Object(A.a)(n.payload)),t.filters={};break;case O.a.ADD_USERS:(a=t.users).push.apply(a,Object(A.a)(n.payload));break;case O.a.SET_FILTERS:t.filters=Object(_.a)({},t.filters,{},n.payload);break;case O.a.ADD_CAMPAIGN_SAVE_CHANGES:t.addCampaign=Object(_.a)({},t.addCampaign,{},n.payload);break;default:return r=!0,L(h.a.storageCampaignKey,t),t}r||L(h.a.storageCampaignKey,t)})),C=t(113),T={isLoaderShown:!1},w=N(h.a.storageSharedKey),j=Object(v.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w||T,a=arguments.length>1?arguments[1]:void 0,t=!1;switch(a.type){case C.a.SHOW_LOADER:e.isLoaderShown=!0;break;case C.a.HIDE_LOADER:e.isLoaderShown=!1;break;default:return t=!0,L(h.a.storageSharedKey,e),e}t||L(h.a.storageSharedKey,e)})),G=Object(b.c)({campaignModel:y,sharedModel:j}),H=Object(b.d)(G,Object(b.a)(f.a));"PROD"===h.a.env&&Object(v.b)(!1),i.a.render(o.a.createElement(s.a,{store:H},o.a.createElement((function(){return o.a.createElement("div",{className:"container"},o.a.createElement("span",{className:"position-fixed cursor-pointer p-1 env-name",title:"npm start --env=qa|dev|prod etc to change the environment"},h.a.env),o.a.createElement(g,null),o.a.createElement(D,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r}));var n={GET_CAMPAIGNS_LIST:"GET_CAMPAIGNS_LIST",ADD_CAMPAIGN_INTO_LIST:"ADD_CAMPAIGN_INTO_LIST",FETCH_USERS:"FETCH_USERS",ADD_USERS:"ADD_USERS",USER_FETCH_ERROR:"USER_FETCH_ERROR",SET_FILTERS:"SET_FILTERS",ADD_CAMPAIGN_SAVE_CHANGES:"ADD_CAMPAIGN_SAVE_CHANGES"},r=function(e,a){return{type:e,payload:a}}}},[[161,1,2]]]);
//# sourceMappingURL=main.b64e2633.chunk.js.map