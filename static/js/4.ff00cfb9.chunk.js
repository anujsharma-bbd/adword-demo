(this["webpackJsonpadword-demo"]=this["webpackJsonpadword-demo"]||[]).push([[4],{505:function(e,t,a){"use strict";a.r(t);var n=a(63),r=a(81),s=a(82),c=a(85),l=a(83),i=a(122),o=a(86),u=a(1),d=a.n(u),m=a(84),h=a(422),b=a.n(h),f=a(424),p=a(88),E=a(118),D={USERS:"https://jsonplaceholder.typicode.com/users"},g=function(){return function(e){return new Promise((function(t,a){e(Object(p.b)(E.a.SHOW_LOADER)),fetch(D.USERS).then(function(){var a=Object(f.a)(b.a.mark((function a(n){var r;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.json();case 2:r=a.sent,e(Object(p.b)(p.a.ADD_USERS,r)),t(!0);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(t){e(Object(p.b)(p.a.USER_FETCH_ERROR)),a(!1)})).finally((function(t){e(Object(p.b)(E.a.HIDE_LOADER))}))}))}},v=function(e){return function(t){t(Object(p.b)(p.a.ADD_CAMPAIGN_INTO_LIST,e))}},O=function(e){return function(t){t(Object(p.b)(p.a.SET_FILTERS,e))}},y=a(52),C=function(e){return e.active?d.a.createElement("span",{className:"active"},"Active"):d.a.createElement("span",{className:"inactive"},"Inactive")},S=a(425),j=a.n(S),N=function(e){var t=e.list,a=e.users;return d.a.createElement("div",{className:"table-responsive"},d.a.createElement("table",{className:"table"},d.a.createElement("thead",null,d.a.createElement("tr",{className:"table-header"},d.a.createElement("th",null,"Name"),d.a.createElement("th",null,"User Name"),d.a.createElement("th",null,"Start Date"),d.a.createElement("th",null,"End Date"),d.a.createElement("th",null,"Active"),d.a.createElement("th",null,"Budget"))),d.a.createElement("tbody",null,t&&t.map((function(e,t){return d.a.createElement("tr",{key:t},d.a.createElement("td",null,e.campaignName),d.a.createElement("td",null,function(e){var t=a.find((function(t){return t.id===e}));return t&&t.name||"Unknown User"}(e.userId)),d.a.createElement("td",null,d.a.createElement(j.a,{format:"DD-MMM-YYYY"},e.startDate)),d.a.createElement("td",null,d.a.createElement(j.a,{format:"DD-MMM-YYYY"},e.endDate)),d.a.createElement("td",null,d.a.createElement(C,{active:e.active})),d.a.createElement("td",null,e.budget))})))))},M=a(502),k=a(503),A=a(506),w=a(504),U=a(436),F=a.n(U),L=a(427),R=a.n(L),x=a(430),_=a(497),I=(a(435),a(390)),T=a.n(I),Y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={startDate:null,endDate:null,byName:""},a.onStartChange=a.onStartChange.bind(Object(i.a)(a)),a.onEndChange=a.onEndChange.bind(Object(i.a)(a)),a.onSearchNameChange=a.onSearchNameChange.bind(Object(i.a)(a)),a.searchStart=a.searchStart.bind(Object(i.a)(a)),R.a.options={positionClass:"toast-top-full-width",hideDuration:300,timeOut:6e4},R.a.clear(),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"onStartChange",value:function(e){this.setState({startDate:e,endDate:null})}},{key:"onEndChange",value:function(e){R.a.clear(),T()(e)<T()(this.state.startDate)?R.a.error("End Date should be greater than Start Date."):this.setState({endDate:e})}},{key:"onSearchNameChange",value:function(e){this.setState({byName:e.target.value})}},{key:"searchStart",value:function(){R.a.clear(),this.state.startDate&&!this.state.endDate||this.state.endDate&&!this.state.startDate?R.a.error("Please select both dates."):this.props.setFilters({startDate:this.state.startDate,endDate:this.state.endDate,byName:this.state.byName})}},{key:"render",value:function(){var e=this.state,t=e.startDate,a=e.endDate,n=e.byName;return d.a.createElement("div",{className:"row mb-1"},d.a.createElement("div",{className:"col-sm-7 filter-inputs"},d.a.createElement(M.a,null,d.a.createElement(F.a,{dateFormat:"dd/MM/yyyy",placeholderText:"Start Date",className:"form-control mr-1",selected:t,onChange:this.onStartChange}),d.a.createElement(F.a,{dateFormat:"dd/MM/yyyy",placeholderText:"End Date",className:"form-control mr-1",selected:a,onChange:this.onEndChange}),d.a.createElement(k.a,{placeholder:"Search by name",value:n,onChange:this.onSearchNameChange}))),d.a.createElement("div",{className:"col-sm-2 pl-0"},d.a.createElement(A.a,{addonType:"append"},d.a.createElement(w.a,{color:"primary",size:"md",onClick:this.searchStart},d.a.createElement(x.a,{icon:_.a})))),d.a.createElement("div",{className:"col-sm-4"}))}}]),t}(d.a.Component),H=Object(m.b)((function(e){return{model:e.campaignModel}}))(Y),P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).collectUsers=a.collectUsers.bind(Object(i.a)(a)),a.exposeAddition=a.exposeAddition.bind(Object(i.a)(a)),a.AddCampaigns=a.AddCampaigns.bind(Object(i.a)(a)),a.onChangeFilters=a.onChangeFilters.bind(Object(i.a)(a)),a.state={userLoadingMessage:""},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.collectUsers(),this.exposeAddition()}},{key:"collectUsers",value:function(){this.props.getUsers().then((function(e){}))}},{key:"exposeAddition",value:function(){window.AddCampaigns=this.AddCampaigns}},{key:"AddCampaigns",value:function(e){this.props.addCampaigns(e)}},{key:"onChangeFilters",value:function(e){this.props.SetFilters(e)}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement(H,{setFilters:this.onChangeFilters}),d.a.createElement(N,{list:this.props.filteredList,users:this.props.model.users}))}}]),t}(d.a.Component),J=function(e,t,a){var r=Object(n.a)(e);if(!t)return r;if(t.startDate&&t.endDate&&(r=r.filter((function(e){return T()(e.startDate)>=T()(t.startDate)&&T()(e.startDate)<=T()(t.endDate)||T()(e.endDate)>=T()(t.startDate)&&T()(e.endDate)<=T()(t.endDate)}))),t.byName){var s=a.find((function(e){return-1!==e.name.toLowerCase().indexOf(t.byName.toLowerCase())}));if(!s)return[];r=r.filter((function(e){return e.userId===s.id}))}return r};t.default=Object(m.b)((function(e){return{model:e.campaignModel,filteredList:J(e.campaignModel.campaignsList,e.campaignModel.filters,e.campaignModel.users)}}),(function(e){return Object(y.b)({getUsers:g,addCampaigns:v,SetFilters:O},e)}))(P)}}]);
//# sourceMappingURL=4.ff00cfb9.chunk.js.map