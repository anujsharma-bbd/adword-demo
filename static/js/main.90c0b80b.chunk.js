(this["webpackJsonpadword-demo"]=this["webpackJsonpadword-demo"]||[]).push([[0],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={SHOW_LOADER:"SHOW_LOADER",HIDE_LOADER:"HIDE_LOADER"}},164:function(e,t,a){e.exports=a(379)},173:function(e,t,a){},174:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);var n,c=a(1),r=a.n(c),o=a(66),i=a.n(o),l=a(84),s=(a(173),a(174),a(175),a(377),a(162)),u=a(39),m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"}},r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h1",null,"404"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h3",null,"Page not found !"))))))},d=a(81),E=a(82),p=a(85),h=a(83),S=a(86),O=(n=function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,501))},function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={component:null,isLoading:!0},a}return Object(S.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),n().then((function(t){var a=t.default;e.setState({component:a,isLoading:!1})})).catch((function(t){e.setState({component:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.component,a=e.isLoading;return t?r.a.createElement(t,this.props):a?r.a.createElement("div",null," loading ..."):null}}]),t}(r.a.Component)),f=function(){return r.a.createElement("div",{className:"router-container"},r.a.createElement(s.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(u.a,{to:"/campaigns-list"})),r.a.createElement(u.b,{path:"/campaigns-list",exact:!0,component:O}),r.a.createElement(u.b,{path:"*",component:m}))))},g=a(381),v=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return this.props.model.isLoaderShown?r.a.createElement("div",{className:"screen-loader"}," ",r.a.createElement(g.a,{color:"dark"})," "):null}}]),t}(r.a.Component),b=Object(l.b)((function(e){return{model:e.sharedModel}}))(v);var D=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(52),L=a(163),j=a(63),I=a(40),A={users:[],filters:null,campaignsList:[{campaignName:"Campaign 1",userId:1,startDate:"12/02/2012",endDate:"12/03/2012",active:!0,budget:"3k USD"},{campaignName:"Campaign 2",userId:null,startDate:"12/02/2013",endDate:"12/05/2013",active:!0,budget:"3k USD"},{campaignName:"Campaign 3",userId:2,startDate:"12/02/2014",endDate:"12/06/2014",active:!1,budget:"3k USD"},{campaignName:"Campaign 4",userId:3,startDate:"12/02/2015",endDate:"12/03/2015",active:!0,budget:"3k USD"}]},R=a(88),N=a(118),T={isLoaderShown:!1},w=Object(_.c)({campaignModel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.a.ADD_CAMPAIGN_INTO_LIST:return Object(I.a)({},e,{campaignsList:[].concat(Object(j.a)(e.campaignsList),Object(j.a)(t.payload))});case R.a.ADD_USERS:return Object(I.a)({},e,{users:[].concat(Object(j.a)(e.users),Object(j.a)(t.payload))});case R.a.SET_FILTERS:return Object(I.a)({},e,{filters:Object(I.a)({},e.filters,{},t.payload)});default:return e}},sharedModel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.a.SHOW_LOADER:return Object(I.a)({},e,{isLoaderShown:!0});case N.a.HIDE_LOADER:return Object(I.a)({},e,{isLoaderShown:!1});default:return e}}}),y=Object(_.d)(w,Object(_.a)(L.a));i.a.render(r.a.createElement(l.a,{store:y},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var n={GET_CAMPAIGNS_LIST:"GET_CAMPAIGNS_LIST",ADD_CAMPAIGN_INTO_LIST:"ADD_CAMPAIGN_INTO_LIST",FETCH_USERS:"FETCH_USERS",ADD_USERS:"ADD_USERS",USER_FETCH_ERROR:"USER_FETCH_ERROR",SET_FILTERS:"SET_FILTERS"},c=function(e,t){return{type:e,payload:t}}}},[[164,1,2]]]);
//# sourceMappingURL=main.90c0b80b.chunk.js.map