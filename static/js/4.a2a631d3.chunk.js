(this["webpackJsonpadword-demo"]=this["webpackJsonpadword-demo"]||[]).push([[4],{505:function(e,a,t){"use strict";t.r(a);var n=t(63),r=t(66),l=t(67),s=t(70),c=t(68),i=t(122),o=t(71),m=t(1),d=t.n(m),u=t(69),h=t(426),b=t.n(h),p=t(428),E=t(88),g=t(118),v={USERS:"https://jsonplaceholder.typicode.com/users"},f=function(){return function(e){return new Promise((function(a,t){e(Object(E.b)(g.a.SHOW_LOADER)),fetch(v.USERS).then(function(){var t=Object(p.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:r=t.sent,e(Object(E.b)(E.a.ADD_USERS,r)),a(!0);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(a){e(Object(E.b)(E.a.USER_FETCH_ERROR)),t(!1)})).finally((function(a){e(Object(E.b)(g.a.HIDE_LOADER))}))}))}},C=function(e){return function(a){a(Object(E.b)(E.a.ADD_CAMPAIGN_INTO_LIST,e))}},D=function(e){return function(a){a(Object(E.b)(E.a.SET_FILTERS,e))}},y=t(52),N=function(e){return e.active?d.a.createElement("span",{className:"active"},"Active"):d.a.createElement("span",{className:"inactive"},"Inactive")},O=t(429),j=t.n(O),S=t(387),k=t.n(S),M=function(e){var a=e.list,t=e.users;return d.a.createElement("div",{className:"table-responsive"},d.a.createElement("table",{className:"table"},d.a.createElement("thead",null,d.a.createElement("tr",{className:"table-header"},d.a.createElement("th",null,"Name"),d.a.createElement("th",null,"User Name"),d.a.createElement("th",null,"Start Date"),d.a.createElement("th",null,"End Date"),d.a.createElement("th",null,"Active"),d.a.createElement("th",null,"Budget"))),d.a.createElement("tbody",null,a&&a.length?a.map((function(e,a){return d.a.createElement("tr",{key:a},d.a.createElement("td",null,e.name),d.a.createElement("td",null,function(e){var a=t.find((function(a){return a.id.toString()===e.toString()}));return a&&a.name||"Unknown User"}(e.userId)," #",e.userId),d.a.createElement("td",null,d.a.createElement(j.a,{format:"MM/DD/YYYY"},e.startDate)),d.a.createElement("td",null,d.a.createElement(j.a,{format:"MM/DD/YYYY"},e.endDate)),d.a.createElement("td",null,d.a.createElement(N,{active:(n=e,k()()>=k()(n.startDate)&&k()()<=k()(n.endDate))})),d.a.createElement("td",null,e.budget||e.Budget," USD"));var n})):d.a.createElement("tr",null,d.a.createElement("td",{colSpan:"6",align:"center"},"No Campaigns available!!")))))},w=t(502),A=t(503),I=t(506),F=t(504),U=t(402),x=t.n(U),T=t(400),L=t.n(T),R=t(401),_=t(422),Y=(t(437),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state={startDate:null,endDate:null,byName:""},t.onStartChange=t.onStartChange.bind(Object(i.a)(t)),t.onEndChange=t.onEndChange.bind(Object(i.a)(t)),t.onSearchNameChange=t.onSearchNameChange.bind(Object(i.a)(t)),t.searchStart=t.searchStart.bind(Object(i.a)(t)),L.a.options={positionClass:"toast-top-full-width",hideDuration:300,timeOut:5e3},L.a.clear(),t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"onStartChange",value:function(e){this.setState({startDate:e,endDate:null})}},{key:"onEndChange",value:function(e){L.a.clear(),k()(e)<k()(this.state.startDate)?L.a.error("End Date should be greater than Start Date."):this.setState({endDate:e})}},{key:"onSearchNameChange",value:function(e){this.setState({byName:e.target.value})}},{key:"searchStart",value:function(){L.a.clear(),this.state.startDate&&!this.state.endDate||this.state.endDate&&!this.state.startDate?L.a.error("Please select both dates."):this.props.setFilters({startDate:this.state.startDate,endDate:this.state.endDate,byName:this.state.byName})}},{key:"render",value:function(){var e=this.state,a=e.startDate,t=e.endDate,n=e.byName;return d.a.createElement("div",{className:"row mb-1"},d.a.createElement("div",{className:"col-sm-7 filter-inputs"},d.a.createElement(w.a,null,d.a.createElement(x.a,{id:"startDate",isClearable:!0,dateFormat:"MM/dd/yyyy",placeholderText:"Start Date",className:"form-control mr-1",selected:a,onChange:this.onStartChange}),d.a.createElement(x.a,{id:"endDate",isClearable:!0,dateFormat:"MM/dd/yyyy",placeholderText:"End Date",className:"form-control mr-1",selected:t,onChange:this.onEndChange}),d.a.createElement(A.a,{placeholder:"Search by name",value:n,onChange:this.onSearchNameChange}))),d.a.createElement("div",{className:"col-sm-2 pl-0"},d.a.createElement(I.a,{addonType:"append"},d.a.createElement(F.a,{id:"searchBtn",color:"primary",size:"md",onClick:this.searchStart},d.a.createElement(R.a,{icon:_.c})))),d.a.createElement("div",{className:"col-sm-4"}))}}]),a}(d.a.Component)),z=Object(u.b)((function(e){return{model:e.campaignModel}}))(Y),B=t(40),P=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state={name:"",id:"",userId:"",startDate:null,endDate:null,budget:"",isClosed:!0},t.onChange=t.onChange.bind(Object(i.a)(t)),t.addCampaigns=t.addCampaigns.bind(Object(i.a)(t)),t.onClose=t.onClose.bind(Object(i.a)(t)),t.onOpen=t.onOpen.bind(Object(i.a)(t)),L.a.options={positionClass:"toast-top-full-width",hideDuration:300,timeOut:5e3},L.a.clear(),t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"onChange",value:function(e){var a=Object(B.a)({},this.state),t=e.target.name,n=e.target.value;a[t]=n,this.setState(a)}},{key:"addCampaigns",value:function(){L.a.clear();var e=this.state,a=e.name,t=e.id,n=e.userId,r=e.startDate,l=e.endDate,s=e.budget;a&&t&&n&&r&&l&&s?(this.props.addCampaigns([{name:a,id:t,userId:n,startDate:r,endDate:l,budget:s}]),this.setState({name:"",id:"",userId:"",startDate:null,endDate:null,budget:""})):L.a.error("Please fill all the fields.")}},{key:"onClose",value:function(){L.a.clear(),this.setState({name:"",id:"",userId:"",startDate:null,endDate:null,budget:"",isClosed:!0})}},{key:"onOpen",value:function(){this.setState({isClosed:!1})}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.id,r=a.userId,l=a.startDate,s=a.endDate,c=a.budget,i=a.isClosed;return d.a.createElement("div",{className:"add-campaign container-fluid position-fixed "+(i?" closed ":"")},i?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"row mt-2 cursor-pointer"},d.a.createElement("div",{className:"col-sm-5"}),d.a.createElement("div",{className:"col-sm-3 text-center cursor-pointer",onClick:this.onOpen},d.a.createElement(I.a,{addonType:"append"},d.a.createElement(F.a,{color:"primary",size:"md"},d.a.createElement(R.a,{icon:_.a})),d.a.createElement("span",{className:"ml-2 mt-1"},"Add Campaign here..."))),d.a.createElement("div",{className:"col-sm-3"}))):d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{className:"close-icon",onClick:this.onClose},d.a.createElement(F.a,{color:"danger",size:"sm"},"\xd7")),d.a.createElement("div",{className:"row mt-4 mb-2"},d.a.createElement("div",{className:"col-sm-3"}),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(A.a,{type:"number",name:"id",placeholder:"Id",value:n,onChange:this.onChange})),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(A.a,{name:"name",placeholder:"Name",value:t,onChange:this.onChange})),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(x.a,{isClearable:!0,name:"startDate",dateFormat:"MM/dd/yyyy",placeholderText:"Start Date",className:"form-control",selected:l,onChange:function(a){return e.onChange({target:{name:"startDate",value:a}})}})),d.a.createElement("div",{className:"col-sm-3"})),d.a.createElement("div",{className:"row mb-2"},d.a.createElement("div",{className:"col-sm-3"}),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(A.a,{type:"number",name:"userId",placeholder:"User ID",value:r,onChange:this.onChange})),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(A.a,{type:"number",name:"budget",placeholder:"Budget",value:c,onChange:this.onChange})),d.a.createElement("div",{className:"col-sm-2"},d.a.createElement(x.a,{isClearable:!0,name:"endDate",dateFormat:"MM/dd/yyyy",placeholderText:"End Date",className:"form-control",selected:s,onChange:function(a){return e.onChange({target:{name:"endDate",value:a}})}})),d.a.createElement("div",{className:"col-sm-3"})),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-sm-3"}),d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("div",{className:"pull-right"},d.a.createElement(I.a,{addonType:"append"},d.a.createElement(F.a,{color:"primary",size:"md",onClick:this.addCampaigns},d.a.createElement(R.a,{icon:_.b}),"\xa0Save")))))))}}]),a}(d.a.Component),H=Object(u.b)(null,(function(e){return Object(y.b)({addCampaigns:C},e)}))(P),J=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).collectUsers=t.collectUsers.bind(Object(i.a)(t)),t.exposeAddition=t.exposeAddition.bind(Object(i.a)(t)),t.AddCampaigns=t.AddCampaigns.bind(Object(i.a)(t)),t.onChangeFilters=t.onChangeFilters.bind(Object(i.a)(t)),t.state={userLoadingMessage:""},t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.collectUsers(),this.exposeAddition()}},{key:"collectUsers",value:function(){this.props.getUsers().then((function(e){}))}},{key:"exposeAddition",value:function(){window.AddCampaigns=this.AddCampaigns}},{key:"AddCampaigns",value:function(e){this.props.addCampaigns(e)}},{key:"onChangeFilters",value:function(e){this.props.SetFilters(e)}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement(z,{setFilters:this.onChangeFilters}),d.a.createElement(M,{list:this.props.filteredList,users:this.props.model.users}),d.a.createElement(H,null))}}]),a}(d.a.Component),G=function(e,a,t){var r=Object(n.a)(e);return a?(a.startDate&&a.endDate&&(r=r.filter((function(e){return k()(e.startDate)>=k()(a.startDate)&&k()(e.startDate)<=k()(a.endDate)||k()(e.endDate)>=k()(a.startDate)&&k()(e.endDate)<=k()(a.endDate)}))),a.byName&&(r=r.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a.byName.toLowerCase())}))),r):r};a.default=Object(u.b)((function(e){return{model:e.campaignModel,filteredList:G(e.campaignModel.campaignsList,e.campaignModel.filters,e.campaignModel.users)}}),(function(e){return Object(y.b)({getUsers:f,addCampaigns:C,SetFilters:D},e)}))(J)}}]);
//# sourceMappingURL=4.a2a631d3.chunk.js.map