(this.webpackJsonpnotesapp=this.webpackJsonpnotesapp||[]).push([[0],{203:function(e,n,t){},204:function(e,n,t){},272:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(42),c=t.n(a),i=(t(203),t(55)),p=t.n(i),s=t(91),u=t(186),d=t(98),l=t(187),m=t(30),f=(t.p,t(204),t(161)),b=(t(205),t(301)),j=t(299),O=t(300),T=t(185),h=t(36),y=Object(b.a)(),v={notes:[],loading:!0,error:!1,form:{name:"",description:""}},g=function(e,n){switch(n.type){case"SET_NOTES":return Object(m.a)(Object(m.a)({},e),{},{notes:n.notes,loading:!1});case"ERROR":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!0});case"ADD_NOTE":return Object(m.a)(Object(m.a)({},e),{},{notes:[n.note].concat(Object(l.a)(e.notes))});case"RESET_FORM":return Object(m.a)(Object(m.a)({},e),{},{form:v.form});case"SET_INPUT":return Object(m.a)(Object(m.a)({},e),{},{form:Object(m.a)(Object(m.a)({},e.form),{},Object(d.a)({},n.name,n.value))});default:return Object(m.a)({},e)}},x=function(){var e=Object(r.useReducer)(g,v),n=Object(u.a)(e,2),t=n[0],o=n[1],a=function(){var e=Object(s.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.graphql({query:"\n  query ListTodos(\n    $filter: ModelTodoFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        clientId\n        name\n        description\n        completed\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n  }\n"});case 3:n=e.sent,o({type:"SET_NOTES",notes:n.data.listTodos.items}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),o({type:"ERROR"});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){a();var e=f.a.graphql({query:"\n  subscription OnCreateTodo {\n    onCreateTodo {\n      id\n      clientId\n      name\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n"}).subscribe({next:function(e){var n=e.value.data.onCreateTodo;n.clientId!==y&&o({type:"ADD_NOTE",note:n})}});return function(){return e.unsubscribe()}}),[]);var c={container:{padding:20},input:{marginBottom:10},item:{textAlign:"left"},p:{color:"#1890ff"}},i=function(){var e=Object(s.a)(p.a.mark((function e(){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t.form).name&&n.description){e.next=3;break}return e.abrupt("return",alert("please enter a name and description"));case 3:return r=Object(m.a)(Object(m.a)({},n),{},{clientId:y,completed:!1,id:Object(b.a)()}),o({type:"ADD_NOTE",note:r}),o({type:"RESET_FORM"}),e.prev=6,e.next=9,f.a.graphql({query:"\n  mutation CreateTodo(\n    $input: CreateTodoInput!\n    $condition: ModelTodoConditionInput\n  ) {\n    createTodo(input: $input, condition: $condition) {\n      id\n      clientId\n      name\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n",variables:{input:r}});case 9:console.log("successfully created note!"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.error("error: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){o({type:"SET_INPUT",name:e.target.name,value:e.target.value})},l=function(){var e=Object(s.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:"SET_NOTES",notes:t.notes.filter((function(e){return e!=n}))}),e.prev=1,e.next=4,f.a.graphql({query:"\n  mutation DeleteTodo(\n    $input: DeleteTodoInput!\n    $condition: ModelTodoConditionInput\n  ) {\n    deleteTodo(input: $input, condition: $condition) {\n      id\n      clientId\n      name\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n",variables:{input:{id:n.id}}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error({err:e.t0});case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=Object(s.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:"SET_NOTES",notes:t.notes.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{completed:e==n?!e.completed:e.completed})}))}),e.prev=1,e.next=4,f.a.graphql({query:"\n  mutation UpdateTodo(\n    $input: UpdateTodoInput!\n    $condition: ModelTodoConditionInput\n  ) {\n    updateTodo(input: $input, condition: $condition) {\n      id\n      clientId\n      name\n      description\n      completed\n      createdAt\n      updatedAt\n    }\n  }\n",variables:{input:{id:n.id,completed:!n.completed}}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{style:c.container,children:[Object(h.jsx)(O.a,{onChange:d,value:t.form.name,placeholder:"Note Name",name:"name",style:c.input}),Object(h.jsx)(O.a,{onChange:d,value:t.form.description,placeholder:"Note description",name:"description",style:c.input}),Object(h.jsx)(T.a,{onClick:i,type:"primary",children:"Create Note"}),Object(h.jsx)(j.b,{loading:t.loading,dataSource:t.notes,renderItem:function(e){return Object(h.jsx)(j.b.Item,{style:c.item,actions:[Object(h.jsx)("p",{style:c.p,onClick:function(){return l(e)},children:"Delete"}),Object(h.jsx)("p",{style:c.p,onClick:function(){return x(e)},children:e.completed?"Mark Incomplete":"Mark Complete"})],children:Object(h.jsx)(j.b.Item.Meta,{title:e.name+(e.completed?" (completed)":""),description:e.description})})}})]})},I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,303)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),a(e),c(e)}))},E={aws_project_region:"us-east-2",aws_appsync_graphqlEndpoint:"https://47vx7p2yybdvnfjj547esgea4q.appsync-api.us-east-2.amazonaws.com/graphql",aws_appsync_region:"us-east-2",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-qcps3csz2rafhh26gpbfgmsmie"};t(124).default.configure(E),c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),I()}},[[272,1,2]]]);
//# sourceMappingURL=main.d931c799.chunk.js.map