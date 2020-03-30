(this["webpackJsonpadword-demo"]=this["webpackJsonpadword-demo"]||[]).push([[4],{508:function(e,a,t){"use strict";t.r(a);var n=t(114),l=t(398),r=t(399),s=t(425),c=t(400),o=t(388),i=t(426),m=t(1),d=t.n(m),u=t(66),h=t(429),p=t.n(h),E=t(431),b=t(83),f=t(113),g={USERS:"https://jsonplaceholder.typicode.com/users"},v=function(){return function(e){e(Object(b.b)(f.a.SHOW_LOADER)),fetch(g.USERS).then(function(){var a=Object(E.a)(p.a.mark((function a(t){var n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.json();case 2:n=a.sent,e(Object(b.b)(b.a.ADD_USERS,n));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(a){e(Object(b.b)(b.a.USER_FETCH_ERROR))})).finally((function(a){e(Object(b.b)(f.a.HIDE_LOADER))}))}},D=function(e){return function(a){a(Object(b.b)(b.a.ADD_CAMPAIGN_INTO_LIST,e))}},C=function(e){return function(a){a(Object(b.b)(b.a.SET_FILTERS,e))}},N=t(52),y=function(e){return e.active?d.a.createElement("span",{className:"active"},"Active"):d.a.createElement("span",{className:"inactive"},"Inactive")},O=t(432),S=t.n(O),j=t(384),M=t.n(j),k=function(e){var a=e.list,t=e.users;return d.a.createElement("div",{className:"table-responsive mb-5"},d.a.createElement("table",{className:"table"},d.a.createElement("thead",null,d.a.createElement("tr",{className:"table-header"},d.a.createElement("th",null,"Name"),d.a.createElement("th",null,"User Name"),d.a.createElement("th",null,"Start Date"),d.a.createElement("th",null,"End Date"),d.a.createElement("th",null,"Active"),d.a.createElement("th",null,"Budget"))),d.a.createElement("tbody",null,a&&a.length?a.map((function(e,a){return d.a.createElement("tr",{key:a},d.a.createElement("td",null,e.name),d.a.createElement("td",null,function(e){var a=t.find((function(a){return a.id.toString()===e.toString()}));return a&&a.name||"Unknown User"}(e.userId)),d.a.createElement("td",null,d.a.createElement(S.a,{format:"MM/DD/YYYY"},e.startDate)),d.a.createElement("td",null,d.a.createElement(S.a,{format:"MM/DD/YYYY"},e.endDate)),d.a.createElement("td",null,d.a.createElement(y,{active:(l=e,M()()>=M()(l.startDate)&&M()()<=M()(l.endDate))})),d.a.createElement("td",null,(n=e.budget||e.Budget,Math.abs(n)>999?Math.sign(n)*(Math.abs(n)/1e3).toFixed(1)+"k":Math.sign(n)*Math.abs(n))," USD"));var n,l})):d.a.createElement("tr",null,d.a.createElement("td",{colSpan:"6",align:"center"},"No Campaigns available!!")))))},w=t(505),A=t(506),F=t(509),I=t(507),U=t(403),x=t.n(U),T=t(401),L=t.n(T),R=t(402),_=t(423),Y=(t(440),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state={startDate:null,endDate:null,byName:""},t.onStartChange=t.onStartChange.bind(Object(o.a)(t)),t.onEndChange=t.onEndChange.bind(Object(o.a)(t)),t.onSearchNameChange=t.onSearchNameChange.bind(Object(o.a)(t)),t.searchStart=t.searchStart.bind(Object(o.a)(t)),L.a.options={positionClass:"toast-top-full-width",hideDuration:300,timeOut:5e3},L.a.clear(),t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"onStartChange",value:function(e){this.setState({startDate:e,endDate:null})}},{key:"onEndChange",value:function(e){if(L.a.clear(),M()(e)<M()(this.state.startDate))return L.a.error("End Date should be greater than Start Date."),void this.setState({endDate:null});this.setState({endDate:e})}},{key:"onSearchNameChange",value:function(e){this.setState({byName:e.target.value})}},{key:"searchStart",value:function(){L.a.clear(),this.state.startDate&&!this.state.endDate||this.state.endDate&&!this.state.startDate?L.a.error("Please select both dates."):this.props.setFilters({startDate:this.state.startDate,endDate:this.state.endDate,byName:this.state.byName})}},{key:"render",value:function(){var e=this.state,a=e.startDate,t=e.endDate,n=e.byName;return d.a.createElement("div",{className:"row mb-1"},d.a.createElement("div",{className:"col-sm-7 filter-inputs"},d.a.createElement(w.a,null,d.a.createElement(x.a,{autoComplete:"off",id:"startDate",isClearable:!0,dateFormat:"MM/dd/yyyy",placeholderText:"Start Date",className:"form-control mr-1",selected:a,onChange:this.onStartChange}),d.a.createElement(x.a,{autoComplete:"off",id:"endDate",isClearable:!0,dateFormat:"MM/dd/yyyy",placeholderText:"End Date",className:"form-control mr-1",selected:t,onChange:this.onEndChange}),d.a.createElement(A.a,{autoComplete:"off",placeholder:"Search by name",value:n,onChange:this.onSearchNameChange}))),d.a.createElement("div",{className:"col-sm-2 pl-0"},d.a.createElement(F.a,{addonType:"append"},d.a.createElement(I.a,{id:"searchBtn",color:"primary",size:"md",onClick:this.searchStart},d.a.createElement(R.a,{icon:_.c})))),d.a.createElement("div",{className:"col-sm-4"}))}}]),a}(d.a.Component)),z=Object(u.b)((function(e){return{model:e.campaignModel}}))(Y),B=t(157),H=t(156),P=Object(u.b)(null,(function(e){return Object(N.b)({addCampaigns:D},e)}))((function(e){var a=Object(m.useState)({name:"",id:"",userId:"",startDate:null,endDate:null,budget:"",isClosed:!0}),t=Object(H.a)(a,2),n=t[0],l=t[1];Object(m.useEffect)((function(){L.a.options={positionClass:"toast-top-full-width",hideDuration:300,timeOut:5e3},L.a.clear()}),[]);var r=function(e){var a=Object(B.a)({},n),t=e.target.name,r=e.target.value;a[t]=r,l(a)},s=n.name,c=n.id,o=n.userId,i=n.startDate,u=n.endDate,h=n.budget,p=n.isClosed;return d.a.createElement("div",{className:"add-campaign container-fluid position-fixed "+(p?" closed ":"")},p?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"row mt-2 cursor-pointer"},d.a.createElement("div",{className:"col-sm-5"}),d.a.createElement("div",{className:"col-sm-3 text-center cursor-pointer",onClick:function(){l({isClosed:!1})}},d.a.createElement(F.a,{addonType:"append"},d.a.createElement(I.a,{color:"primary",size:"md"},d.a.createElement(R.a,{icon:_.a})),d.a.createElement("span",{className:"ml-2 mt-1"},"Add Campaign here..."))),d.a.createElement("div",{className:"col-sm-3"}))):d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{className:"close-icon",onClick:function(){L.a.clear(),l({name:"",id:"",userId:"",startDate:null,endDate:null,budget:"",isClosed:!0})}},d.a.createElement(I.a,{color:"danger",size:"sm"},"\xd7")),d.a.createElement("div",{className:"row mt-4 mb-2"},d.a.createElement("div",{className:"col-sm-3"}),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(A.a,{autoComplete:"off",type:"number",name:"id",placeholder:"Id",value:c,onChange:r})),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(A.a,{autoComplete:"off",name:"name",placeholder:"Name",value:s,onChange:r})),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(x.a,{autoComplete:"off",isClearable:!0,name:"startDate",dateFormat:"MM/dd/yyyy",placeholderText:"Start Date",className:"form-control",selected:i,onChange:function(e){return r({target:{name:"startDate",value:e}})}})),d.a.createElement("div",{className:"col-sm-3"})),d.a.createElement("div",{className:"row mb-2"},d.a.createElement("div",{className:"col-sm-3"}),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(A.a,{autoComplete:"off",type:"number",name:"userId",placeholder:"User ID",value:o,onChange:r})),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(A.a,{autoComplete:"off",type:"number",name:"budget",placeholder:"Budget",value:h,onChange:r})),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(x.a,{autoComplete:"off",isClearable:!0,name:"endDate",dateFormat:"MM/dd/yyyy",placeholderText:"End Date",className:"form-control",selected:u,onChange:function(e){return r({target:{name:"endDate",value:e}})}})),d.a.createElement("div",{className:"col-sm-3"})),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-sm-3"}),d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("div",{className:"pull-right"},d.a.createElement(F.a,{addonType:"append"},d.a.createElement(I.a,{color:"primary",size:"md",onClick:function(){L.a.clear();var a=n.name,t=n.id,r=n.userId,s=n.startDate,c=n.endDate,o=n.budget;a&&t&&r&&s&&c&&o?(e.addCampaigns([{name:a,id:t,userId:r,startDate:s,endDate:c,budget:o}]),l({name:"",id:"",userId:"",startDate:null,endDate:null,budget:""})):L.a.error("Please fill all the fields.")}},d.a.createElement(R.a,{icon:_.b}),"\xa0Save")))))))})),J=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).collectUsers=t.collectUsers.bind(Object(o.a)(t)),t.exposeAddition=t.exposeAddition.bind(Object(o.a)(t)),t.AddCampaigns=t.AddCampaigns.bind(Object(o.a)(t)),t.onChangeFilters=t.onChangeFilters.bind(Object(o.a)(t)),t.state={userLoadingMessage:""},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.collectUsers(),this.exposeAddition()}},{key:"collectUsers",value:function(){this.props.getUsers()}},{key:"exposeAddition",value:function(){window.AddCampaigns=this.AddCampaigns}},{key:"AddCampaigns",value:function(e){this.props.addCampaigns(e)}},{key:"onChangeFilters",value:function(e){this.props.SetFilters(e)}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement(z,{setFilters:this.onChangeFilters}),d.a.createElement(k,{list:this.props.filteredList,users:this.props.model.users}),d.a.createElement(P,null))}}]),a}(d.a.Component),G=function(e,a,t){var l=Object(n.a)(e);return a?(a.startDate&&a.endDate&&(l=l.filter((function(e){return M()(e.startDate)>=M()(a.startDate)&&M()(e.startDate)<=M()(a.endDate)||M()(e.endDate)>=M()(a.startDate)&&M()(e.endDate)<=M()(a.endDate)}))),a.byName&&(l=l.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a.byName.toLowerCase())}))),l):l};a.default=Object(u.b)((function(e){return{model:e.campaignModel,filteredList:G(e.campaignModel.campaignsList,e.campaignModel.filters,e.campaignModel.users)}}),(function(e){return Object(N.b)({getUsers:v,addCampaigns:D,SetFilters:C},e)}))(J)}}]);
//# sourceMappingURL=4.cffed2e8.chunk.js.map