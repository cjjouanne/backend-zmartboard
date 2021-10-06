(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1574:function(t,e,r){"use strict";r.r(e);var a=r(6),n=r(7),o=r(8),s=r(9),c=r(4),i=r(0),u=r.n(i),d=r(20),l=r(26),p=r(123),f=r(622),h=r(18),m=r(17),b=r(29),g=r(46),y=r.n(g),v=r(59),O=r.n(v),j=r(85),x=r(638),k=r(27),E=r(637),D=r.n(E),S=r(636),P=r.n(S),R=r(648),I=r.n(R),T=r(734);function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,a=Object(c.a)(t);if(e){var n=Object(c.a)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Object(s.a)(this,r)}}r.n(T)()(P.a);var C=function(t){Object(o.a)(r,t);var e=w(r);function r(t){var n;return Object(a.a)(this,r),(n=e.call(this,t)).state={loading:!0},n.setOptions.bind(Object(m.a)(n)),n}return Object(n.a)(r,[{key:"componentWillMount",value:function(){this.setState({loading:!1})}},{key:"componentDidUpdate",value:function(t){if(!D()(this.props.boardId,t.boardId)){var e=this.setOptions();P.a.chart("chart",e)}if(!D()(this.props.selectedLanguage,t.selectedLanguage)){var r=this.setOptions();P.a.chart("chart",r)}if(!D()(this.props.startDate,t.startDate)){var a=this.setOptions();P.a.chart("chart",a)}if(!D()(this.props.endDate,t.endDate)){var n=this.setOptions();P.a.chart("chart",n)}}},{key:"setOptions",value:function(){var t=this.formatData(),e=t.tasks,r=t.series,a=this.props.selectedLanguage;return{chart:{type:"bar"},title:{text:k.a[a].taskProgressChart.title},xAxis:{categories:e},yAxis:[{min:0,title:{text:k.a[a].taskProgressChart.yAxis}}],legend:{shadow:!1},tooltip:{shared:!0},plotOptions:{bar:{grouping:!1,shadow:!1,borderWidth:0}},series:r}}},{key:"formatData",value:function(){var t=this.props,e=t.selectedLanguage,r=t.tasks,a=t.users,n=t.members,o=[],s=JSON.parse(JSON.stringify(n)),c=r.map(function(t){return t.name}),i=r.map(function(t){return parseFloat(t.estimated_hours)});return s.forEach(function(t){a[t.id]&&r.forEach(function(e){if(t.tasks_reports[e.id]||(t.tasks_reports[e.id]=t.count,t.hours[t.count]=0,t.count+=1),a[t.id][e.id]){var r=parseFloat(a[t.id][e.id]),n=t.tasks_reports[e.id];t.hours[n]=r}})}),o.push({name:k.a[e].taskProgressChart.estimated_hours,data:i,color:"#d8d8d8",pointPadding:.2,pointPlacement:-.2}),s.forEach(function(t){t.hours.length>0&&o.push({name:t.name,data:t.hours,pointPadding:.4,pointPlacement:-.2,stacking:"normal"})}),{tasks:c,series:o}}},{key:"render",value:function(){if(this.state.loading)return u.a.createElement(h.a,null);if(this.props.tasks.length>0){var t=this.setOptions();return u.a.createElement("div",null,u.a.createElement("div",{id:"chart"},u.a.createElement(I.a,{highcharts:P.a,options:t})))}}}]),r}(i.Component),L=Object(l.b)(function(t){return{selectedLanguage:t.user.language}})(C);function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,a=Object(c.a)(t);if(e){var n=Object(c.a)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Object(s.a)(this,r)}}var B=function(t){Object(o.a)(r,t);var e=_(r);function r(t){var n;return Object(a.a)(this,r),(n=e.call(this,t)).state={loading:!0,tasks:[],users:[],filterOption:"",boards:[],members:[],startDate:n.props.startDate,endDate:O()().toDate(),boardId:null},n.changeData=n.changeData.bind(Object(m.a)(n)),n}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var t=this;this.props.fetchProjectMembers(this.props.projectId).then(function(e){e.ok?t.setState({members:e.body.members.map(function(t){return{id:t.id,name:t.name,tasks_reports:{},count:0,hours:[]}})}):console.log("Bad Request")}),this.changeData(this.props.boardId,this.props.startDate,this.props.endDate),this.setState({loading:!1})}},{key:"changeData",value:function(t,e,r){var a=this,n={start_date:e,end_date:r};this.props.fetchGetReportedTasksBoard(t,n).then(function(e){e.ok&&a.setState({tasks:e.body.tasks,users:e.body.users,loading:!1,filterOption:t})})}},{key:"render",value:function(){if(this.state.loading)return u.a.createElement(h.a,null);var t=this.state,e=t.tasks,r=t.users,a=t.members,n=t.endDate,o=t.startDate,s=t.boardId,c=this.props,i=c.classes,d=c.selectedLanguage,l=k.a[d].taskProgressChart;return u.a.createElement("div",{className:i.headerContainer},u.a.createElement(y.a,{className:i.title},k.a[d].tasktracking.taskprogress),u.a.createElement("div",{className:i.line}),u.a.createElement("div",{className:i.grid},u.a.createElement("div",{style:{display:"flex",alignSelf:"center",marginLeft:"10px"}},u.a.createElement(y.a,{className:i.text},l.boardSelection,":"," ",this.props.boardId),u.a.createElement("div",{style:{display:"flex",alignSelf:"center",marginLeft:"10px"}},u.a.createElement(y.a,{className:i.text},l.from,":"," ",this.props.startDate)),u.a.createElement("div",{style:{display:"flex",alignSelf:"center",marginLeft:"10px"}},u.a.createElement(y.a,{className:i.text},l.to,":"," ",this.props.endDate)))),u.a.createElement("div",{className:i.line}),u.a.createElement("div",{className:i.wrapper},""!==this.state.filterOption&&e.length>0&&u.a.createElement(L,{tasks:e,users:r,members:a,startDate:o,endDate:n,boardId:s}),""===this.state.filterOption&&u.a.createElement(y.a,{style:{textAlign:"center"}},k.a[d].report.noReportedHoursInPeriod),""!==this.state.filterOption&&0===e.length&&u.a.createElement(y.a,{style:{textAlign:"center"}},k.a[d].report.noReportedHoursInPeriod,".")))}}]),r}(i.Component),N=Object(l.b)(function(t){return{selectedLanguage:t.user.language}},function(t){return Object(d.b)({fetchGetProjectBoards:x.d,fetchProjectMembers:f.b,notifyError:j.b,fetchGetReportedTasksBoard:x.e},t)})(Object(b.withStyles)({wrapper:{height:"400px",width:"auto"},modalContent:{width:"600px",height:"400px"},title:{fontSize:"28px",fontFamiliy:'-apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',color:"rgb(68, 68, 68)"},headerContainer:{margin:"30px",width:"auto"},text:{color:"#2a3d41",fontSize:16,fontWeight:"bold",marginTop:"10px",marginBottom:"10px"},selectText:{color:"#2a3d41",fontSize:14,fontWeight:"normal",marginTop:"10px",marginBottom:"10px",marginLeft:"10px"},grid:{display:"flex",width:"100%",margin:"10px"},line:{width:"auto",height:"1px",backgroundColor:"#CCCCCC"},info:{color:"#2a3d41",fontSize:16,fontWeight:"bold",marginTop:"5px"},box:{display:"flex",marginRight:"10px",padding:"5px"},customIcon:{height:"24px",width:"24px",display:"block","border-radius":"50%",marginRight:"5px"}})(B));function G(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,a=Object(c.a)(t);if(e){var n=Object(c.a)(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return Object(s.a)(this,r)}}var F=function(t){Object(o.a)(r,t);var e=G(r);function r(t){var n;return Object(a.a)(this,r),(n=e.call(this,t)).state={loading:!0},n}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var t=this;this.props.selectProject(this.props.projectId),this.props.fetchProjectMembers(this.props.projectId).then(function(){t.setState({loading:!1})})}},{key:"render",value:function(){return this.state.loading?u.a.createElement(h.a,null):u.a.createElement(i.Fragment,null,u.a.createElement(N,{projectId:this.props.projectId,startDate:this.props.startDate,endDate:this.props.endDate,boardId:this.props.boardId}))}}]),r}(i.Component);e.default=Object(l.b)(function(t,e){return{projectId:String(e.match.params.id),startDate:String(e.match.params.start_date),endDate:String(e.match.params.end_date),boardId:String(e.match.params.board_id)}},function(t){return Object(d.b)({selectProject:p.d,fetchProjectMembers:f.b},t)})(F)},622:function(t,e,r){"use strict";r.d(e,"b",function(){return n}),r.d(e,"d",function(){return o}),r.d(e,"e",function(){return s}),r.d(e,"f",function(){return c}),r.d(e,"a",function(){return i}),r.d(e,"c",function(){return u});var a=r(61),n=function(t){return{type:a.c,fetch:!0,url:"/projects/".concat(t,"/members/"),params:{method:"GET"}}},o=function(t,e){return{type:a.e,fetch:!0,url:"/tasks/".concat(t,"/assign/"),params:{method:"POST",body:e}}},s=function(t,e){return{type:a.f,fetch:!0,url:"/tasks/".concat(t,"/users/").concat(e,"/unassign/"),params:{method:"DELETE"}}},c=function(t,e,r){return{type:a.g,fetch:!0,url:"/projects/".concat(t,"/members/").concat(e,"/"),params:{method:"PUT",body:r}}},i=function(t,e){return{type:a.b,fetch:!0,url:"/projects/".concat(t,"/members/").concat(e,"/"),params:{method:"DELETE"}}},u=function(t,e){return{type:a.d,fetch:!0,url:"/projects/".concat(t,"/members/").concat(e,"/"),params:{method:"DELETE"}}}},638:function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"d",function(){return s}),r.d(e,"c",function(){return c}),r.d(e,"g",function(){return i}),r.d(e,"b",function(){return u}),r.d(e,"e",function(){return d}),r.d(e,"f",function(){return l});var a=r(1),n=r(92),o=function(t){return{type:n.a,fetch:!0,url:"/boards/",params:{method:"POST",body:t}}},s=function(t){return{type:n.d,fetch:!0,url:"/projects/".concat(t,"/boards"),params:{method:"GET"}}},c=function(){return{type:n.c,fetch:!0,url:"/boards",params:{method:"GET"}}},i=function(t,e){return{type:n.g,fetch:!0,url:"/boards/".concat(t,"/"),params:{method:"PUT",body:e}}},u=function(t){return{type:n.b,fetch:!0,url:"/boards/".concat(t,"/"),params:{method:"DELETE"}}},d=function(t,e){return{type:n.e,fetch:!0,url:"/boards/".concat(t,"/reported_tasks_between_dates"),params:{method:"GET"},queryParams:Object(a.a)({},e)}},l=function(t,e){return{type:n.f,fetch:!0,url:"/boards/".concat(t,"/tasks_between_dates"),params:{method:"GET"},queryParams:Object(a.a)({},e)}}}}]);
//# sourceMappingURL=33.fe236167.chunk.js.map