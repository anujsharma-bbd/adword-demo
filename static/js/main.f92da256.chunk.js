(this["webpackJsonpadword-demo"]=this["webpackJsonpadword-demo"]||[]).push([[0],{118:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={SHOW_LOADER:"SHOW_LOADER",HIDE_LOADER:"HIDE_LOADER"}},164:function(e,t,a){e.exports=a(380)},173:function(e,t,a){},174:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n,c=a(1),r=a.n(c),o=a(72),i=a.n(o),l=a(69),s=(a(173),a(174),a(175),a(377),a(378),a(162)),u=a(39),m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"}},r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h1",null,"404"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h3",null,"Page not found !"))))))},d=a(66),E=a(67),h=a(70),O=a(68),f=a(71),p=(n=function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,505))},function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(O.a)(t).call(this,e))).state={component:null,isLoading:!0},a}return Object(f.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),n().then((function(t){var a=t.default;e.setState({component:a,isLoading:!1})})).catch((function(t){e.setState({component:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.component,a=e.isLoading;return t?r.a.createElement(t,this.props):a?r.a.createElement("div",null," loading ..."):null}}]),t}(r.a.Component)),S=function(){return r.a.createElement("div",{className:"router-container"},r.a.createElement(s.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(u.a,{to:"/campaigns-list"})),r.a.createElement(u.b,{path:"/campaigns-list",exact:!0,component:p}),r.a.createElement(u.b,{path:"*",component:m}))))},v=a(382),b=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return this.props.model.isLoaderShown?r.a.createElement("div",{className:"screen-loader"}," ",r.a.createElement(v.a,{color:"dark"})," "):null}}]),t}(r.a.Component),_=Object(l.b)((function(e){return{model:e.sharedModel}}))(b);var L=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(S,null),r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(52),j=a(163),A=a(63),D=a(40),R={users:[],filters:null,campaignsList:[]},I=a(88),T=a(118),w={isLoaderShown:!1},N=Object(g.c)({campaignModel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.a.ADD_CAMPAIGN_INTO_LIST:return Object(D.a)({},e,{campaignsList:[].concat(Object(A.a)(e.campaignsList),Object(A.a)(t.payload))});case I.a.ADD_USERS:return Object(D.a)({},e,{users:[].concat(Object(A.a)(e.users),Object(A.a)(t.payload))});case I.a.SET_FILTERS:return Object(D.a)({},e,{filters:Object(D.a)({},e.filters,{},t.payload)});default:return e}},sharedModel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.a.SHOW_LOADER:return Object(D.a)({},e,{isLoaderShown:!0});case T.a.HIDE_LOADER:return Object(D.a)({},e,{isLoaderShown:!1});default:return e}}}),y=Object(g.d)(N,Object(g.a)(j.a));i.a.render(r.a.createElement(l.a,{store:y},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var n={GET_CAMPAIGNS_LIST:"GET_CAMPAIGNS_LIST",ADD_CAMPAIGN_INTO_LIST:"ADD_CAMPAIGN_INTO_LIST",FETCH_USERS:"FETCH_USERS",ADD_USERS:"ADD_USERS",USER_FETCH_ERROR:"USER_FETCH_ERROR",SET_FILTERS:"SET_FILTERS"},c=function(e,t){return{type:e,payload:t}}}},[[164,1,2]]]);
//# sourceMappingURL=main.f92da256.chunk.js.map