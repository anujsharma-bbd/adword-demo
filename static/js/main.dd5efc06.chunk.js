(this["webpackJsonpadword-demo"]=this["webpackJsonpadword-demo"]||[]).push([[0],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={SHOW_LOADER:"SHOW_LOADER",HIDE_LOADER:"HIDE_LOADER"}},158:function(e,t){e.exports={appName:"AdForm Application DEV",baseURL:"",env:"DEV"}},160:function(e,t,a){e.exports=a(376)},169:function(e,t,a){},170:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n,r=a(1),c=a.n(r),o=a(67),i=a.n(o),s=a(66),l=(a(169),a(170),a(171),a(373),a(374),a(157)),d=a(39),u=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"}},c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("h1",null,"404"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12"},c.a.createElement("h3",null,"Page not found !"))))))},m=a(155),E=(n=function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,507))},function(e){var t=Object(r.useState)({component:null,isLoading:!0}),a=Object(m.a)(t,2),o=a[0],i=a[1];Object(r.useEffect)((function(){i({isLoading:!0}),n().then((function(e){var t=e.default;i({component:t,isLoading:!1})})).catch((function(e){i({component:null,isLoading:!1})}))}),[]);var s=o.component,l=o.isLoading;return s?c.a.createElement(s,e):l?c.a.createElement("div",null," loading ..."):null}),D=function(){return c.a.createElement("div",{className:"router-container"},c.a.createElement(l.a,null,c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/",exact:!0},c.a.createElement(d.a,{to:"/campaigns-list"})),c.a.createElement(d.b,{path:"/campaigns-list",exact:!0,component:E}),c.a.createElement(d.b,{path:"*",component:u}))))},p=a(378),g=Object(s.b)((function(e){return{model:e.sharedModel}}))((function(e){return e.model.isLoaderShown?c.a.createElement("div",{className:"screen-loader"}," ",c.a.createElement(p.a,{color:"dark"})," "):null})),b=a(158),f=a.n(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(52),v=a(159),S=a(63),O=a(40),_={users:[],filters:null,campaignsList:[{id:1,name:"Divavu",startDate:"9/19/2017",endDate:"3/9/2018",budget:88377,userId:3},{id:2,name:"Jaxspan",startDate:"11/21/2017",endDate:"2/21/2018",budget:608715,userId:6},{id:3,name:"Miboo",startDate:"11/1/2017",endDate:"6/20/2017",budget:239507,userId:7},{id:4,name:"Trilith",startDate:"8/25/2017",endDate:"11/30/2017",budget:179838,userId:1},{id:5,name:"Layo",startDate:"11/28/2017",endDate:"3/10/2018",budget:837850,userId:9},{id:6,name:"Photojam",startDate:"7/25/2017",endDate:"6/23/2017",budget:858131,userId:3},{id:7,name:"Blogtag",startDate:"6/27/2017",endDate:"1/15/2018",budget:109078,userId:2},{id:8,name:"Rhyzio",startDate:"10/13/2017",endDate:"4/25/2020",budget:272552,userId:4},{id:9,name:"Zoomcast",startDate:"9/6/2017",endDate:"11/10/2017",budget:301919,userId:8},{id:10,name:"Realbridge",startDate:"3/5/2018",endDate:"10/2/2017",budget:505602,userId:5}]},I=a(83),L=a(113),R={isLoaderShown:!1},A=Object(h.c)({campaignModel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.a.ADD_CAMPAIGN_INTO_LIST:return Object(O.a)({},e,{campaignsList:[].concat(Object(S.a)(e.campaignsList),Object(S.a)(t.payload)),filters:{}});case I.a.ADD_USERS:return Object(O.a)({},e,{users:[].concat(Object(S.a)(e.users),Object(S.a)(t.payload))});case I.a.SET_FILTERS:return Object(O.a)({},e,{filters:Object(O.a)({},e.filters,{},t.payload)});default:return e}},sharedModel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.a.SHOW_LOADER:return Object(O.a)({},e,{isLoaderShown:!0});case L.a.HIDE_LOADER:return Object(O.a)({},e,{isLoaderShown:!1});default:return e}}}),T=Object(h.d)(A,Object(h.a)(v.a));i.a.render(c.a.createElement(s.a,{store:T},c.a.createElement((function(){return c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"position-fixed cursor-pointer p-1 env-name",title:"npm start --env=qa|dev|prod etc to change the environment"},f.a.env),c.a.createElement(D,null),c.a.createElement(g,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n={GET_CAMPAIGNS_LIST:"GET_CAMPAIGNS_LIST",ADD_CAMPAIGN_INTO_LIST:"ADD_CAMPAIGN_INTO_LIST",FETCH_USERS:"FETCH_USERS",ADD_USERS:"ADD_USERS",USER_FETCH_ERROR:"USER_FETCH_ERROR",SET_FILTERS:"SET_FILTERS"},r=function(e,t){return{type:e,payload:t}}}},[[160,1,2]]]);
//# sourceMappingURL=main.dd5efc06.chunk.js.map