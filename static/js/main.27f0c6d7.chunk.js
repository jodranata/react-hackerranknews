(this.webpackJsonp4_hackerranknews=this.webpackJsonp4_hackerranknews||[]).push([[0],{28:function(e,t,n){e.exports=n(42)},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(12),o=n.n(c),i=n(8),u=n(6),l=n(20),s=n(25),h="FETCH_API",m="ADD_POST",p="ARCHIVE_POST",v="FETCH_API_ERROR",f={posts:[],error:null},b=function(e,t){return{posts:t.post,error:null}},d=function(e,t){return{posts:[],error:t.error}};var y=n(24),E=[],w=function(e,t){return[].concat(Object(y.a)(e),[t.id])};var j=Object(u.c)({availablePost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return b(e,t);case v:return d(e,t);default:return e}},archivePost:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return w(e,t);default:return e}}}),O=n(11),k=n.n(O),g=n(9),C=function(e){return{type:m,post:e}},P=function(e){return{type:v,error:e}},x=k.a.mark(I),A=function(e){return fetch("http://hn.algolia.com/api/v1/search?query="+e).then((function(e){return e.json()}))};function I(e){var t,n;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query,r.prev=1,r.next=4,Object(g.b)(A,t);case 4:return n=r.sent,r.next=7,Object(g.c)(C(n.hits));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(g.c)(P(r.t0));case 13:case"end":return r.stop()}}),x,null,[[1,9]])}var S=k.a.mark(q);function q(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.d)(h,I)]);case 2:case"end":return e.stop()}}),S)}var N=Object(l.createLogger)(),_=Object(s.a)(),D=Object(u.e)(j,void 0,Object(u.a)(N,_));_.run(q);var T=D,F=(n(38),function(e){var t,n=e.availablePost,r=e.archivePost;return n.posts.filter((t=r,function(e){return-1===t.indexOf(e.objectID)}))});function R(e){var t=e.type,n=void 0===t?"button":t,r=e.onClick,c=e.className,o=e.inline;return(a.a.createElement("button",{type:n,onClick:r,className:c},o))}function H(e){var t=e.type,n=void 0===t?"button":t,r=e.onClick,c=e.inline;return a.a.createElement(R,{type:n,onClick:r,className:"button-inline",inline:c})}R.defaultProps={onClick:void 0,className:"",inline:""},H.defaultProps={onClick:void 0,inline:""};n(39);var J=Object(i.b)(null,(function(e){return{onArchive:function(t){return e(function(e){return{type:p,id:e}}(t))}}}))((function(e){var t=e.post,n=e.columns,r=e.onArchive,c=t.title,o=t.url,i=t.author,u=t.num_comments,l=t.points,s=t.objectID;return a.a.createElement("div",{className:"story"},a.a.createElement("span",{style:{width:n.title.width}},a.a.createElement("a",{href:o},c)),a.a.createElement("span",{style:{width:n.author.width}},i),a.a.createElement("span",{style:{width:n.comments.width}},u),a.a.createElement("span",{style:{width:n.points.width}},l),a.a.createElement("span",{style:{width:n.archive.width}},a.a.createElement(H,{type:"button",inline:"Archive",onClick:function(){return r(s)}})))})),B=(n(40),{title:{label:"Title",width:"40%"},author:{label:"Author",width:"30%"},comments:{label:"Comments",width:"10%"},points:{label:"Points",width:"10%"},archive:{width:"10%"}}),L=function(e){var t=e.columns;return a.a.createElement("div",{className:"stories-header"},Object.keys(t).map((function(e){return a.a.createElement("span",{key:e,style:{width:t[e].width}},t[e].label)})))};function V(e){var t=e.posts,n=e.error;return a.a.createElement("div",{className:"stories"},t.length>0&&a.a.createElement(L,{columns:B}),n&&a.a.createElement("p",{className:"error"},"Something went wrong..."),(t||[]).map((function(e){return a.a.createElement(J,{key:e.objectID,post:e,columns:B})})))}var z=Object(i.b)((function(e){return{posts:F(e),error:(t=e,t.availablePost.error)};var t}))(V);V.defaultProps={error:null};var G=n(21),K=n(22),M=n(26),Q=n(23),U=n(27),W=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(M.a)(this,Object(Q.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.query,r=n.props.onFetchAPI;t&&(r(t),n.setState({query:""})),e.preventDefault()},n.onChange=function(e){var t=e.target.value;n.setState({query:t})},n.state={query:""},n}return Object(U.a)(t,e),Object(K.a)(t,[{key:"render",value:function(){var e=this.onSubmit,t=this.onChange,n=this.state.query;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:e},a.a.createElement("input",{type:"text",value:n,onChange:t}),a.a.createElement(R,{type:"submit",inline:"Search"})))}}]),t}(a.a.Component),X=Object(i.b)(null,(function(e){return{onFetchAPI:function(t){return e(function(e){return{type:h,query:e}}(t))}}}))(W);n(41);o.a.render(a.a.createElement(i.a,{store:T},a.a.createElement((function(){return a.a.createElement("div",null,a.a.createElement(X,null),a.a.createElement(z,null))}),null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.27f0c6d7.chunk.js.map