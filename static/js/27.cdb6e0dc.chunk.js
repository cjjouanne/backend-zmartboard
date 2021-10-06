(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1572:function(t,e,r){"use strict";r.r(e);var n=r(6),a=r(7),o=r(8),c=r(9),i=r(4),s=r(0),u=r.n(s),l=r(20),f=r(26),p=r(123),d=r(622),m=r(18),h=r(17),g=r(29),y=r(46),b=r.n(y),_=r(85),v=r(647),E=r(636),T=r.n(E),j=r(637),O=r.n(j),k=r(648),x=r.n(k),C=r(626),R=r(27);function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=Object(i.a)(t);if(e){var a=Object(i.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var P=function(t){Object(o.a)(r,t);var e=S(r);function r(t){var a;return Object(n.a)(this,r),(a=e.call(this,t)).state={loading:!0},a.setOptions.bind(Object(h.a)(a)),a}return Object(a.a)(r,[{key:"componentWillMount",value:function(){this.setState({loading:!1})}},{key:"componentDidUpdate",value:function(t){if(!O()(this.props.data,t.data)){var e=this.setOptions();T.a.chart("chart",e)}if(!O()(this.props.selectedLanguage,t.selectedLanguage)){var r=this.setOptions();T.a.chart("chart",r)}}},{key:"setOptions",value:function(){var t=this.formatData(),e=t.boardNames,r=t.averageHours,n=t.totalTasks,a=this.props.selectedLanguage;return{chart:{height:350,zoomType:"xy"},credits:!1,title:{text:R.a[a].averageTaskTimeChart.boardAverageHours},xAxis:{categories:e},yAxis:[{labels:{format:"{value} "+R.a[a].averageTaskTimeChart.hours},title:{text:R.a[a].averageTaskTimeChart.averageHours},min:0},{gridLineWidth:0,title:{text:R.a[a].averageTaskTimeChart.totalCompletedTasks,style:{}},labels:{style:{}},opposite:!0}],series:[{name:R.a[a].averageTaskTimeChart.averageHours,type:"column",yAxis:0,data:r,tooltip:{}},{name:R.a[a].averageTaskTimeChart.totalCompletedTasks,type:"spline",color:"black",yAxis:1,data:n}],tooltip:{shared:!0,disabled:!0,backgroundColor:"#616161",borderColor:"#616161",borderWidth:1,style:{color:"white",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',textAlign:"center"},formatter:function(){return"".concat(R.a[a].averageTaskTimeChart.averageHours,": ").concat(this.y," \n           <br>\n           ").concat(R.a[a].averageTaskTimeChart.totalTasks,": ").concat(this.points[1].y)}},plotOptions:{series:{dataLabels:{enabled:!1},events:{legendItemClick:function(t){t.preventDefault()}}}}}}},{key:"formatData",value:function(){var t=this.props.labels,e=Array.from(new Set(Object.keys(t))),r=this.props.data,n=[],a=[],o=[];return e.forEach(function(e){r.hours_info[e]&&(n.push({name:t[e],y:parseInt(r.hours_info[e].average_estimated_hours)}),a.push({name:t[e],y:r.hours_info[e].task_count}),o.push(t[e]))}),{boardNames:o,averageHours:n,totalTasks:a}}},{key:"render",value:function(){if(this.state.loading)return u.a.createElement(m.a,null);var t=this.setOptions();return u.a.createElement("div",null,u.a.createElement("div",{id:"chart"},u.a.createElement(x.a,{highcharts:T.a,options:t})))}}]),r}(s.Component),H=Object(f.b)(function(t){return{selectedLanguage:t.user.language}},function(t){return Object(l.b)({fetchVizHoursPerLabel:C.h},t)})(P);function I(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=Object(i.a)(t);if(e){var a=Object(i.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var L=function(t){Object(o.a)(r,t);var e=I(r);function r(t){var a;return Object(n.a)(this,r),(a=e.call(this,t)).state={loading:!0,milestone_list:[],filterOption:"",data:""},a.changeData=a.changeData.bind(Object(h.a)(a)),a}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.changeData(this.props.milestone)}},{key:"changeData",value:function(t){var e=this;this.props.fetchGetMilestonesHoursBoard(t).then(function(t){t.ok?e.setState({data:t.body,loading:!1}):console.log("Bad Request")})}},{key:"render",value:function(){var t=this.state,e=t.milestone_list,r=t.data;if(t.loading)return u.a.createElement(m.a,null);var n=this.props.classes;return u.a.createElement("div",{className:n.container},u.a.createElement("div",{className:n.headerContainer},u.a.createElement(b.a,{className:n.title},R.a[this.props.selectedLanguage].tasktracking.averagetaskcompletiontime),u.a.createElement("div",{className:n.line}),u.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"10px"}},e.length>0&&u.a.createElement(b.a,{className:n.text},R.a[this.props.selectedLanguage].averageTaskTimeChart.milestoneSelection))),u.a.createElement("div",{className:n.line}),u.a.createElement("div",{className:n.wrapper},""!==r&&r.total.task_count>0&&u.a.createElement(H,{data:r,labels:r.boards}),""===r&&u.a.createElement(b.a,{style:{textAlign:"center"}},R.a[this.props.selectedLanguage].hoursIndex.noReported,"."),""!==r&&0===r.total.task_count&&u.a.createElement(b.a,{style:{textAlign:"center"}},R.a[this.props.selectedLanguage].hoursIndex.noReported,".")))}}]),r}(s.Component),G=Object(f.b)(function(t){return{selectedLanguage:t.user.language}},function(t){return Object(l.b)({fetchGetMilestones:v.d,notifyError:_.b,fetchGetMilestonesHoursBoard:v.e},t)})(Object(g.withStyles)({wrapper:{height:"400px"},modalContent:{width:"500px",height:"400px"},title:{fontSize:"28px",fontFamiliy:'-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',color:"rgb(68, 68, 68)"},headerContainer:{margin:"30px",width:"auto"},text:{color:"#2a3d41",fontSize:16,fontWeight:"bold",marginTop:"10px",marginBottom:"10px"},selectText:{color:"#2a3d41",fontSize:14,fontWeight:"normal",marginTop:"10px",marginBottom:"10px",marginLeft:"10px"},grid:{display:"flex",width:"100%"},container:{height:"700px"},modalContainer:{height:"700px"},line:{width:"auto",height:"1px",backgroundColor:"#CCCCCC"},shareText:{fontSize:12,color:"white",margin:"0px 0px"},shareButton:{margin:5,padding:"0px 8px",borderColor:"white",border:"1px solid #fff",backgroundColor:"#ea5941","&:hover":{backgroundColor:"#ca3921"},color:"#fff",borderRadius:0}})(L));function D(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=Object(i.a)(t);if(e){var a=Object(i.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var w=function(t){Object(o.a)(r,t);var e=D(r);function r(t){var a;return Object(n.a)(this,r),(a=e.call(this,t)).state={loading:!0},a}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var t=this;this.props.selectProject(this.props.projectId),this.props.fetchProjectMembers(this.props.projectId).then(function(){t.setState({loading:!1})})}},{key:"render",value:function(){return this.state.loading?u.a.createElement(m.a,null):u.a.createElement(s.Fragment,null,u.a.createElement(G,{projectId:this.props.projectId,milestone:this.props.milestone}))}}]),r}(s.Component);e.default=Object(f.b)(function(t,e){return{projectId:String(e.match.params.id),milestone:String(e.match.params.milestone_id)}},function(t){return Object(l.b)({selectProject:p.d,fetchProjectMembers:d.b},t)})(w)},622:function(t,e,r){"use strict";r.d(e,"b",function(){return a}),r.d(e,"d",function(){return o}),r.d(e,"e",function(){return c}),r.d(e,"f",function(){return i}),r.d(e,"a",function(){return s}),r.d(e,"c",function(){return u});var n=r(61),a=function(t){return{type:n.c,fetch:!0,url:"/projects/".concat(t,"/members/"),params:{method:"GET"}}},o=function(t,e){return{type:n.e,fetch:!0,url:"/tasks/".concat(t,"/assign/"),params:{method:"POST",body:e}}},c=function(t,e){return{type:n.f,fetch:!0,url:"/tasks/".concat(t,"/users/").concat(e,"/unassign/"),params:{method:"DELETE"}}},i=function(t,e,r){return{type:n.g,fetch:!0,url:"/projects/".concat(t,"/members/").concat(e,"/"),params:{method:"PUT",body:r}}},s=function(t,e){return{type:n.b,fetch:!0,url:"/projects/".concat(t,"/members/").concat(e,"/"),params:{method:"DELETE"}}},u=function(t,e){return{type:n.d,fetch:!0,url:"/projects/".concat(t,"/members/").concat(e,"/"),params:{method:"DELETE"}}}},626:function(t,e,r){"use strict";var n=r(1);r.d(e,"g",function(){return a}),r.d(e,"h",function(){return o}),r.d(e,"j",function(){return c}),r.d(e,"i",function(){return i}),r.d(e,"f",function(){return s}),r.d(e,"b",function(){return u}),r.d(e,"e",function(){return l}),r.d(e,"c",function(){return f}),r.d(e,"d",function(){return p}),r.d(e,"a",function(){return d});var a=function(t,e){return{type:"FETCH_VIZ_HOURS_PER_BOARD",fetch:!0,url:"/viz/projects/".concat(t,"/hours_per_board"),params:{method:"GET"},queryParams:Object(n.a)({},e)}},o=function(t,e){return{type:"FETCH_VIZ_HOURS_PER_LABEL",fetch:!0,url:"/viz/boards/".concat(t,"/hours_per_label"),params:{method:"GET"},queryParams:Object(n.a)({},e)}},c=function(t,e){return{type:"FETCH_VIZ_HOURS_PER_USER",fetch:!0,url:"/viz/projects/".concat(t,"/hours_per_user"),params:{method:"GET"},queryParams:Object(n.a)({},e)}},i=function(t,e,r){return{type:"FETCH_VIZ_HOURS_PER_TASK",fetch:!0,url:"/viz/projects/".concat(t,"/users/").concat(e,"/tasks"),params:{method:"GET"},queryParams:Object(n.a)({},r)}},s=function(t,e,r){return{type:"FETCH_VIZ_GITHUB",fetch:!0,url:"/viz/projects/".concat(t,"/users/").concat(e,"/github"),params:{method:"GET"},queryParams:Object(n.a)({},r)}},u=function(t){return{type:"FETCH_VIZ_LINKED_REPOS",fetch:!0,url:"/projects/".concat(t,"/repos"),params:{method:"GET"}}},l=function(t,e){return{type:"FETCH_VIZ_HOURS_TIMELINE",fetch:!0,url:"/viz/projects/".concat(t,"/users_timeline"),params:{method:"GET"},queryParams:Object(n.a)({},e)}},f=function(t,e){return{type:"FETCH_VIZ_PR",fetch:!0,url:"/projects/".concat(t,"/gits/get_pull_requests"),params:{method:"GET"},queryParams:Object(n.a)({},e)}},p=function(t,e){return{type:"FETCH_VIZ_PR_LEAD_TIME",fetch:!0,url:"/projects/".concat(t,"/gits/get_pr_lead_time"),params:{method:"GET"},queryParams:Object(n.a)({},e)}},d=function(t,e){return{type:"FETCH_VIZ_COMMITS_PER_PR",fetch:!0,url:"/projects/".concat(t,"/gits/get_commits_of_all_pr"),params:{method:"GET"},queryParams:Object(n.a)({},e)}}},637:function(t,e,r){"use strict";var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty;t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){var c,i,s,u=n(e),l=n(r);if(u&&l){if((i=e.length)!=r.length)return!1;for(c=i;0!==c--;)if(!t(e[c],r[c]))return!1;return!0}if(u!=l)return!1;var f=e instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return e.getTime()==r.getTime();var d=e instanceof RegExp,m=r instanceof RegExp;if(d!=m)return!1;if(d&&m)return e.toString()==r.toString();var h=a(e);if((i=h.length)!==a(r).length)return!1;for(c=i;0!==c--;)if(!o.call(r,h[c]))return!1;for(c=i;0!==c--;)if(!t(e[s=h[c]],r[s]))return!1;return!0}return e!==e&&r!==r}},647:function(t,e,r){"use strict";r.d(e,"d",function(){return a}),r.d(e,"h",function(){return o}),r.d(e,"i",function(){return c}),r.d(e,"c",function(){return i}),r.d(e,"a",function(){return s}),r.d(e,"b",function(){return u}),r.d(e,"j",function(){return l}),r.d(e,"g",function(){return f}),r.d(e,"e",function(){return p}),r.d(e,"f",function(){return d});var n=r(72),a=function(t){return{type:n.f,fetch:!0,url:"/milestones/get_milestone?project_id=".concat(t),params:{method:"GET"}}},o=function(t){return{type:n.j,fetch:!0,url:"/milestones/add_task_to_milestone?task_id=".concat(t.task_id,"&milestone_id=").concat(t.milestone_id),params:{method:"POST",body:t}}},c=function(t){return{type:n.k,fetch:!0,url:"/milestones/remove_task_from_milestone?task_id=".concat(t.task_id,"&milestone_id=").concat(t.milestone_id),params:{method:"POST",body:t}}},i=function(t){return{type:n.e,fetch:!0,url:"/milestones/get_milestone_dates?project_id=".concat(t.project_id,"&milestone_id=").concat(t.milestone_id),params:{method:"GET"}}},s=function(t){return{type:n.a,fetch:!0,url:"/milestones/create_milestone",params:{method:"POST",body:t}}},u=function(t){return{type:n.b,fetch:!0,url:"/milestones/destroy_milestone",params:{method:"DELETE",body:t}}},l=function(t){return{type:n.l,fetch:!0,url:"/milestones/update",params:{method:"POST",body:t}}},f=function(t){return{type:n.i,fetch:!0,url:"/milestones/task_list?milestone_id=".concat(t.milestone_id),params:{method:"GET"}}},p=function(t){return{type:n.g,fetch:!0,url:"/milestones/".concat(t,"/average_hours_per_board"),params:{method:"GET"}}},d=function(t){return{type:n.h,fetch:!0,url:"/milestones/".concat(t,"/percentage_difference_hours"),params:{method:"GET"}}}}}]);
//# sourceMappingURL=27.cdb6e0dc.chunk.js.map