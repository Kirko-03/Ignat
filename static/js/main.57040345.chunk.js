(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3jHBp",errorInput:"SuperInputText_errorInput__1UD1f",error:"SuperInputText_error__2dFMx"}},18:function(e,t,n){e.exports={blue:"HW4_blue__3NI_a",column:"HW4_column__2oluD",testSpanError:"HW4_testSpanError__2OXrZ"}},23:function(e,t,n){e.exports={someClass:"Greeting_someClass__hiZKR",error:"Greeting_error__3CrvV"}},24:function(e,t,n){e.exports={default:"SuperButton_default__1dHwA",red:"SuperButton_red__1SBkC"}},25:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2MUvQ",spanClassName:"SuperCheckbox_spanClassName__19ktn"}},33:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(27),s=n.n(a),i=(n(33),n(7)),o=n.n(i),j=n(11),l=n(0);var u=function(){var e={textDecoration:"none"};return Object(l.jsx)("div",{className:o.a.skill,style:{listStyleType:"none"},children:Object(l.jsxs)("div",{className:o.a.header,children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{style:e,activeClassName:o.a.activeClass,to:"/pre-junior",children:"PreJunior"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{style:e,activeClassName:o.a.activeClass,to:"/junior",children:"Junior"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{style:e,activeClassName:o.a.activeClass,to:"/pre-middle",children:"PreMiddle"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{style:e,activeClassName:o.a.activeClass,to:"/senior",children:"Senior"})}),Object(l.jsx)("div",{style:{color:"black",fontSize:"20px"},children:"Pages"})]})})},d=n(2);var b=function(){return Object(l.jsx)("div",{className:o.a.error,children:Object(l.jsxs)("li",{style:{listStyleType:"none"},children:[Object(l.jsx)("div",{style:{border:"3px solid gray",borderRadius:"10px",background:"gray"},children:"404 Page not found!"}),Object(l.jsx)(j.b,{to:"/pre-junior",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 "})]})})};var h=function(e){return Object(l.jsxs)("div",{style:{backgroundColor:"greenyellow",width:"250px",height:"90px"},children:[Object(l.jsx)("img",{src:e.avatar,style:{width:"50px",height:"50px",borderRadius:"100px",display:"inline-block",margin:"10px",position:"relative",top:"28px"}}),Object(l.jsxs)("div",{style:{width:"150px",borderRadius:"5px",backgroundColor:"black",display:"inline-block",height:"69px",position:"relative",bottom:"-6px"},children:[Object(l.jsx)("div",{style:{color:"hotpink",position:"relative",right:"-15px"},children:e.name}),Object(l.jsx)("div",{style:{color:"lightblue",position:"relative",right:"-15px"},children:e.message}),Object(l.jsx)("div",{style:{textAlign:"right",color:"gray",position:"relative",right:"10px"},children:e.time}),Object(l.jsx)("div",{style:{position:"relative",top:"-51.5px",width:"12px",height:"16px",border:" 20px solid transparent",borderBottom:"20px solid black",right:"16px"}})]})]})},O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Kirill",p="Guten Morgen",v="22:00";var m=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1",Object(l.jsx)(h,{avatar:O,name:x,message:p,time:v}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},f=n(12),g=n(3);var C=function(e){return Object(l.jsxs)("div",{children:[e.affair.name,Object(l.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var _=function(e){var t=e.data.map((function(t){return Object(l.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{children:[t,Object(l.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})};var k=function(){return Object(l.jsx)("div",{})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(r.useState)(y),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(g.a)(a,2),i=s[0],o=s[1],j=Object(r.useState)(""),u=Object(g.a)(j,2),d=u[0],b=u[1],h=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 2",Object(l.jsx)("button",{onClick:function(){!function(e){var t={_id:7,name:e,priority:"middle"};c([].concat(Object(f.a)(n),[t])),b("")}(d)},children:"+"}),Object(l.jsx)("input",{value:d,autoFocus:!0,onChange:function(e){b(e.currentTarget.value)}}),Object(l.jsx)(_,{data:h,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)(k,{}),Object(l.jsx)("hr",{})]})},S=n(42),w=n(23),A=n.n(w),T=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=c?A.a.error:A.a.someClass;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:t,onChange:n,className:s}),Object(l.jsx)("span",{children:c}),Object(l.jsx)("button",{onClick:r,children:"add"}),Object(l.jsx)("span",{children:a})]})},I=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(g.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(g.a)(o,2),u=j[0],d=j[1],b=t.length;return Object(l.jsx)(T,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){0!==s.length?(d(""),s&&alert("Hello ".concat(s,"!")),n(s)):d("\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442")},error:u,totalUsers:b})};var F=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(I,{users:n,addUserCallback:function(e){c([].concat(Object(f.a)(n),[{_id:Object(S.a)(),name:e}]))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},E=n(6),B=n(5),P=n(17),H=n.n(P),R=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(H.a.error," ").concat(i||""),u="".concat(H.a.errorInput," ").concat(s?H.a.superInput:s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(E.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:u},o)),a&&Object(l.jsx)("span",{className:j,children:a})]})},U=n(18),W=n.n(U),D=n(24),J=n.n(D),M=function(e){var t=e.red,n=e.className,r=Object(B.a)(e,["red","className"]),c="".concat(t?J.a.red:J.a.default," ").concat(n);return Object(l.jsx)("button",Object(E.a)({className:c},r))},K=n(25),G=n.n(K),X=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,n=(e.spanClassName,e.children),r=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(G.a.checkbox," ").concat(t||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(E.a)({type:"checkbox",onChange:function(e){},className:c},r)),n&&Object(l.jsx)("span",{className:G.a.spanClassName,children:n})]})};var Z=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(g.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:W.a.column,children:[Object(l.jsx)(R,{value:n,onChangeText:c,onEnter:s,error:a,spanClassName:W.a.testSpanError}),Object(l.jsx)(R,{className:W.a.blue}),Object(l.jsx)(M,{children:"default"}),Object(l.jsx)(M,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(M,{disabled:!0,children:"disabled"}),Object(l.jsx)(X,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(X,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},V=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(B.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(g.a)(s,2),o=i[0],j=i[1],u=c||{},d=u.children,b=u.onDoubleClick,h=u.className,O=Object(B.a)(u,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",h);return Object(l.jsx)(l.Fragment,{children:o?Object(l.jsx)(R,Object(E.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(l.jsx)("span",Object(E.a)(Object(E.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},O),{},{children:d||a.value}))})};function q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function z(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}q("test",{x:"A",y:1});z("test",{x:"",y:0});var L=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 6",Object(l.jsx)("div",{children:" Double \u2193 click "}),Object(l.jsx)("div",{children:Object(l.jsx)(V,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(l.jsx)(M,{onClick:function(){q("editable-span-value",n)},children:"save"}),Object(l.jsx)(M,{onClick:function(){c(z("editable-span-value",n))},children:"restore"}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var Q=function(){return Object(l.jsxs)("div",{className:o.a.tasks,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(m,{}),Object(l.jsx)(N,{}),Object(l.jsx)(F,{}),Object(l.jsx)(Z,{}),Object(l.jsx)(L,{})]})},Y=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,c=Object(B.a)(e,["options","onChange","onChangeOption"]),a=null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)("option",{children:e},e+"-"+t)}));return Object(l.jsx)("select",Object(E.a)(Object(E.a)({style:{margin:"5px",width:"100px",padding:"5px",borderTop:"none",borderLeft:"none",borderRadius:"10px",backgroundImage:"url(https://lifehacker.ru/wp-content/uploads/2017/03/bluesky_1488891825.jpg)"},onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},c),{},{children:a}))},$=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,s=(Object(B.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),a&&a(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",checked:e===r,value:e,name:t,onChange:s}),e]},t+"-"+n)})):[];return Object(l.jsx)(l.Fragment,{children:i})},ee=["x","y","z"];var te=function(){var e=Object(r.useState)(ee[1]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 7",Object(l.jsx)("div",{children:Object(l.jsx)(Y,{options:ee,value:n,onChangeOption:c})}),Object(l.jsx)("div",{children:Object(l.jsx)($,{name:"radio",options:ee,value:n,onChangeOption:c})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},ne=function(e,t){switch(t.type){case"sort":var n=Object(f.a)(e);switch(t.payload){case"up":return n.sort((function(e,t){return e.name>t.name?1:-1}));case"down":return e.sort((function(e,t){return e.name>t.name?1:-1})).reverse();default:return e}case"check":return Object(f.a)(e).filter((function(e){return e.age>=t.payload}));default:return e}},re=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ce=function(){var e=Object(r.useState)(re),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),s=Object(g.a)(a,2),i=s[0],o=s[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 8",n.map((function(e){return Object(l.jsxs)("div",{children:[e._id,") ",e.name," ",e.age]},e._id)})),Object(l.jsx)("div",{children:Object(l.jsx)(M,{onClick:function(){return c(ne(re,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(l.jsx)("div",{children:Object(l.jsx)(M,{onClick:function(){return c(ne(re,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(l.jsxs)("div",{children:["\u0412\u043e\u0437\u0440\u0430\u0441\u0442 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438",Object(l.jsx)("input",{value:i,onChange:function(e){return o(+e.currentTarget.value)}})]}),Object(l.jsx)("div",{children:Object(l.jsx)(M,{onClick:function(){return c(ne(re,{type:"check",payload:i}))},children:"check"})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},ae=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(te,{}),Object(l.jsx)(ce,{})]})},se=function(){return Object(l.jsx)("div",{})},ie="/pre-junior",oe="/junior",je="/pre-middle";var le=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(d.d,{children:[Object(l.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(d.a,{to:ie})}}),Object(l.jsx)(d.b,{path:ie,render:function(){return Object(l.jsx)(Q,{})}}),Object(l.jsx)(d.b,{path:oe,render:function(){return Object(l.jsx)(ae,{})}}),Object(l.jsx)(d.b,{path:je,render:function(){return Object(l.jsx)(se,{})}}),Object(l.jsx)(d.b,{render:function(){return Object(l.jsx)(b,{})}})]})})};var ue=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(le,{})]})})};var de=function(){return Object(l.jsx)("div",{className:o.a.App,children:Object(l.jsx)(ue,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(de,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports={App:"App_App__2AR9I",skill:"App_skill__2-RAV",activeClass:"App_activeClass__K_M_q",tasks:"App_tasks__2yWjl",link:"App_link__XVioT",header:"App_header__2l_67",error:"App_error__2ZEhd"}}},[[40,1,2]]]);
//# sourceMappingURL=main.57040345.chunk.js.map