(this.webpackJsonpanmlfarm=this.webpackJsonpanmlfarm||[]).push([[0],{66:function(e,t,i){},67:function(e,t,i){},68:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){},79:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){},82:function(e,t,i){},83:function(e,t,i){},84:function(e,t,i){},85:function(e,t,i){},86:function(e,t,i){},87:function(e,t,i){},88:function(e,t,i){},89:function(e,t,i){},90:function(e,t,i){},91:function(e,t,i){"use strict";i.r(t);var a=i(3),n=i(1),c=i.n(n),s=i(11),r=i.n(s),o=(i(66),i(67),i(15)),l=i(16),A=i(18),d=i(17),h=(i(68),i.p+"static/media/Subtract.29037d68.png"),p=i(10),u=i(36);i(92),i(70);u.a.initializeApp({apiKey:"AIzaSyA8CE6cmO3e84VpfChKyM44KDe28bn5OMk",authDomain:"parangelmata.firebaseapp.com",databaseURL:"https://parangelmata.firebaseio.com",projectId:"parangelmata",storageBucket:"parangelmata.appspot.com",messagingSenderId:"824823048409",appId:"1:824823048409:web:b667f9d23208d7003576c8",measurementId:"G-9JB6YF1SYF"});var m=u.a.auth(),b=(u.a.firestore(),new u.a.auth.GoogleAuthProvider);b.setCustomParameters({prompt:"select_account"});u.a;var g=function(e){Object(A.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).handleClick=function(){if(a.state.hasDoneSignIn)a.state.hasDoneOnboarding?a.state.hasDoneProfile?a.state.hasDoneTerms||(a.setState({hasDoneTerms:!0}),a.props.history.push("".concat(a.props.match.url,"terms"))):(a.setState({hasDoneProfile:!0}),a.props.history.push("".concat(a.props.match.url,"profile"))):(a.setState({hasDoneOnboarding:!0}),a.props.history.push("".concat(a.props.match.url,"onboarding")));else{var e=m.signInWithPopup(b);console.log(e),alert(e),a.setState({hasDoneSignIn:!0}),a.props.history.push("".concat(a.props.match.url,"signin"))}},a.state={user:null,hasDoneSignIn:!1,hasDoneOnboarding:!1,hasDoneProfile:!1,hasDoneTerms:!1},a}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"entry-page",children:[Object(a.jsx)("div",{className:"spacer"}),Object(a.jsx)("img",{src:h,onClick:this.handleClick,alt:"main logo"}),Object(a.jsx)("div",{className:"spacer"})]})}}]),i}(c.a.Component),j=Object(p.f)(g),I=i(49),f=i.n(I),O=i(54),v=i.p+"static/media/fingerprint.3d50a2af.svg",w=(i(77),Object(p.f)((function(e){var t=e.callback,i=e.history;return Object(a.jsx)("div",{className:"fingerbutton",children:Object(a.jsx)("img",{alt:"next",src:v,onClick:function(){null==t?i.push("/"):t()}})})}))),x=i.p+"static/media/left-arrow.b20e13c3.svg",B=(i(78),Object(p.f)((function(e){var t=e.callback,i=e.history;return Object(a.jsx)("div",{className:"foldback-button",children:Object(a.jsx)("img",{alt:"back",src:x,onClick:function(){null==t?i.goBack():t()}})})}))),C=(i(79),function(e){var t=e.backClickCallback,i=e.nextClickCallback,n=e.mainImageSource,c=e.cardHeading,s=e.cardBody;return console.log(t),console.log(i),console.log(n),console.log(c),console.log(s),Object(a.jsx)("div",{className:"simple-info-page",children:Object(a.jsxs)("div",{className:"info-card",children:[Object(a.jsx)(B,{callback:t}),Object(a.jsx)("img",{className:"main-image",src:n,alt:n}),Object(a.jsx)("h1",{className:"card-heading",children:c}),Object(a.jsx)("p",{className:"card-body",children:s}),Object(a.jsx)(w,{callback:i})]})})}),y=(i(80),i.p+"static/media/simplify.fdd7edb3.svg"),k=i.p+"static/media/observe.756a41b7.svg",U=i.p+"static/media/react.8ce9433b.svg",P=i.p+"static/media/grow.1e0d1743.svg",E=i.p+"static/media/thanks.1968d420.svg",R=function(e){Object(A.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).nextStep=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.state.stepIndex<a.state.content.length-1)){e.next=5;break}return e.next=3,a.setState({stepIndex:a.state.stepIndex+1});case 3:e.next=6;break;case 5:a.props.history.push("/home");case 6:case"end":return e.stop()}}),e)}))),a.previousStep=function(){a.state.stepIndex>0?a.setState({stepIndex:a.state.stepIndex-1}):a.props.history.goBack()},a.state={stepIndex:0,content:[{image:y,heading:"Simplify",body:"Avoid paper stackpiles and digital logs and ledgers all over the place. Record your activity in the field, in one place, with or without connection!"},{image:k,heading:"Observe",body:"See live data of how your farm is performing, as well as predictions on events that might unfold, giving you the power of foresight and knowledge of what to do if and when something happens."},{image:U,heading:"React",body:"Make decisions, payments, sales and purchases on what your crop or stock needs right now. Never be away from your farm, even when away from your farm"},{image:P,heading:"Grow",body:"Join a community of farmers and people just like you, trying to live off of the land and give as they receive. "},{image:E,heading:"Thank You!",body:"Thank you for downloading ANML Farm! Please note that the site is still under construction. We appreciate your interest, and you can rest assured that we are hard at work fixing all of the remaining issues. If you do spot something we can improve, do let us know! Thanks!"}]},a}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"onboarding",children:Object(a.jsx)(C,{cardBody:this.state.content[this.state.stepIndex].body,cardHeading:this.state.content[this.state.stepIndex].heading,mainImageSource:this.state.content[this.state.stepIndex].image,nextClickCallback:this.nextStep,backClickCallback:this.previousStep})})}}]),i}(c.a.Component),H=Object(p.f)(R),N=(i(81),i(82),i(26)),S=(i(83),i(124)),D=i(121),Q=i(125),q=i(122),K=i(127),X=i.p+"static/media/home.4ffec545.png",Y=i.p+"static/media/library.ee61f2bd.png",F=(i.p,i(84),function(e){var t=e.callback;return Object(a.jsxs)("div",{className:"swipe-up-button",children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAYAAAD17ghaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPCSURBVHgB7ZZNbBNHFMffm43aQ1WpNwi9cOuxJwq99QCxQ6uW9F7BBWiwIQEh0dib3dl1vA6qKpIQi49eilQpBw42QuDYILjyceDAjQNHPiQkDoAQsDuPNxuvvY7XxA7igJR32pk3837/efPmaQE2bMM27HO2yYr85nj976/gIwxhHeYuz34foDpFAD+hjoHYUO/eHS/8bN2HAW1gAdPXS9uMgCoM/3aV65GhcI81OnUXBjAxyGKX4cKnagRHgjJ//9t0bwkEVeXlmR8GCNm/AA0PAqhyzraEG1FMynQu66ZyB1SgjkYi6EtRkcv9i+hLgIb7Pl0CoBBORJP2yF/zkb+w25zTc+GAWIToX8SaNaADKRBVRBiO4G46P5+01louTiDiXDPyI1RqTKbNO7BeAV1woCNuKn/6Q3usevEwP4uFSIRB/u9Wyro9sIDpK952HIIKL0iET9fcbUIM/cqOL9B/e07+Ih+2RRRYhLHQBDwW4I/1EoH9wJHUYU7lYuR3Gt5BRVhmWcaKOK0PDrrpXPQiQF6byZISp9sigEXkukR0FWH+6swOIwYXSNk4XNZLhxTB2RU4/c/wC7oZ8TWdt2qFTGvdLnNRC28KHA4Iqm7d2/5BAfa1mR1DhtBNZpirDYjh9ki+HIMf4NnySlBynFT+D36G+1CRE55UGItOo9gWwcKFomwz15sDwqrNB4wzMQ4HJSr8uTmEC8i63fBzEZzrQcYDyVpRkkA7DErIVzbVyppVK2ZQYHOMTyAIxpzd5q2WgDicn5nOy0DwJBGrizYugglPUag9zi7zFmo4KqHb66awmAAynNYzbbh3hCfn14IniVAAE4VUbiHyOXVvnBDLfEjUIoaUPyb45EsRXCAe+hh4uGc0L6Oa4AKbt/jFRD6bY6NPGa5Y4tRv8g3jIlp17wYPfkRQEzJlnk+Ec0B3tBPO+/Zy5c+hrlXEjD0ytdQzE6TGC2nzbMu3XPqTY/N10M2wBk5eOvn1id9OvOhYgHSmF5xTuZfT+x8/vn8wUC81iE+7j094oZcITuFRJ52bi3ya+fre61ddjagDnpD2CB73RaC1RPCeY7znVNyP64InZqVoK0CZJCLy6W9lcGHubBdmZydEmF0PXJudyjsCSOo1em2SLwQqcOK+Va1YHeOCGu8XLvmnVNbk1n5FINF+CsjsPPMa1r5zlG5qqqVe1kpbAYP9yjDeCnyzJHfKB+09va9jYLMb3nOrXrLjcxpu171Sa9zwimat8F2n8KLNPeAZfAqTMXh7brYEG/Y52ntBLkyASXfBZwAAAABJRU5ErkJggg==",onClick:t}),Object(a.jsx)("div",{className:"button-spacer"})]})}),G=function(e){Object(A.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).toggleDrawer=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a.setState({drawerOpen:e})}},a.state={drawerOpen:!1,listItems:[{id:1,text:"Home",imageUrl:"",linkTo:"/home",iconImageUrl:X},{id:2,text:"Library",imageUrl:"",linkTo:"/library",iconImageUrl:Y}]},a}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"menu-drawer",children:[Object(a.jsx)("div",{className:"drawer-button",children:Object(a.jsx)(F,{callback:this.toggleDrawer(!0)})}),Object(a.jsx)(S.a,{anchor:"bottom",open:this.state.drawerOpen,onClose:this.toggleDrawer(!1),children:Object(a.jsx)("div",{className:"drawer-list",role:"presentation",onClick:this.toggleDrawer(!1),onKeyDown:this.toggleDrawer(!1),style:{width:"auto"},children:Object(a.jsx)(D.a,{children:this.state.listItems?this.state.listItems.map((function(e){var t=e.id,i=e.text,n=e.linkTo,c=e.iconImageUrl;return Object(a.jsx)(N.b,{to:n,className:"list-item",children:Object(a.jsxs)(Q.a,{button:!0,children:[Object(a.jsx)(q.a,{className:"list-item-icon",children:Object(a.jsx)("img",{src:c})}),Object(a.jsx)(K.a,{primary:i,className:"list-item-text"})]},t)})})):null})})})]})}}]),i}(c.a.Component),M=function(e){Object(A.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(o.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"main-page",children:Object(a.jsxs)("div",{className:"border",children:[Object(a.jsx)("div",{className:"main-area",children:this.props.children}),Object(a.jsx)("div",{className:"menubar-button",children:Object(a.jsx)(G,{})})]})})}}]),i}(c.a.Component),T=i(126),V=i(58),z=i(123),J=(i(85),function(e){var t=e.id,i=e.title,n=e.subtitle,c=e.description,s=e.imageUrl,r=e.date,o=e.linkUrl;return Object(a.jsx)("div",{className:"event",onClick:function(){o&&(console.log(o),window.open(o))},children:Object(a.jsxs)(z.a,{className:"generic-card-item",children:[s?Object(a.jsx)("img",{src:s}):null,i?Object(a.jsx)("h1",{className:"title",children:i.toUpperCase()}):null,n?Object(a.jsx)("h2",{className:"subtitle",children:n}):null,c?Object(a.jsx)("span",{className:"description",children:c}):null,r?Object(a.jsx)("span",{className:"date",children:r}):null]})},t)}),W=(i(86),function(e){Object(A.a)(i,e);var t=Object(d.a)(i);function i(e){return Object(o.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"event",children:Object(a.jsx)(J,Object(V.a)({},this.props.info))})}}]),i}(c.a.Component)),L=(i(87),function(e){Object(A.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={events:[{title:"Didymus Meatmaster Autction",description:"MeastMasters like you've never seen them before! Email for more info!",imageUrl:"https://static.wixstatic.com/media/ed35aa_56d1705cecb04ea6812529ce668f8904~mv2.jpg/v1/fill/w_1225,h_613,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ed35aa_56d1705cecb04ea6812529ce668f8904~mv2.webp",linkUrl:"https://www.parangelmata.com/event-details/didymus-meatmaster-auction",date:"23 Jan 2021"},{title:"Standerton Sale",description:"262 BRAFORD X CATTLE, 2550 MERINO SHEEP, ONE SPECTACULAR SALE!",imageUrl:"https://static.wixstatic.com/media/ed35aa_bf399b608dcc47bcbdc0e40b01249afe~mv2.jpg/v1/fill/w_872,h_436,fp_0.50_0.50,lg_2,q_90/ed35aa_bf399b608dcc47bcbdc0e40b01249afe~mv2.webp",linkUrl:"https://www.parangelmata.com/event-details/standerton-sale",date:"3 Feb 2021"},{title:"Farmer's Market",description:"Lot's to buy and see this weekend at the local Farmer's Market!",imageUrl:"https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",date:"12 Mar 2021"},{title:"Africa Agri-Tech",description:"Africa Agri Tech is positioned as the annual meeting point where the Southern African agricultural community can gather to explore the technological and scientific advances that will assist agribusinesses to maximise their outputs and increase their profitability in the future.",imageUrl:"https://static.wixstatic.com/media/ed35aa_97d18e8787c3430a8a7d1dd4a74c7509~mv2.png/v1/fill/w_1225,h_613,fp_0.50_0.50,lg_2,q_95,usm_0.66_1.00_0.01/ed35aa_97d18e8787c3430a8a7d1dd4a74c7509~mv2.webp",linkUrl:"https://www.parangelmata.com/event-details/africa-agri-tech",date:"22 Jun 2021"},,{title:"Auction",description:"Sheep!! Sheep!! Sheep!! MeatMasters auction ONE DAY ONLY!!!",imageUrl:"https://images.unsplash.com/photo-1596557770430-92f21e94ee47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",date:"5 Feb 2021"},{title:"FAIR",description:"Enjoy a socially distanced fair. Bring the family and enjoy local music!",imageUrl:"https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",date:"29 Feb 2021"}]},a}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"feed",children:[Object(a.jsx)("div",{className:"profile-pic",children:Object(a.jsx)(T.a,{className:"avatar",children:"J"})}),this.state.events?Object(a.jsx)("div",{className:"event-collection",children:this.state.events.map((function(e){return Object(a.jsx)(W,{info:e})}))}):null]})}}]),i}(c.a.Component)),Z=function(e){Object(A.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={},a}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsx)(M,{children:Object(a.jsx)(L,{})})}}]),i}(c.a.Component),_=(i(88),i(89),function(e){e.callback;var t=e.collection;return Object(a.jsx)("div",{className:"library-menu-bar",children:t?t.map((function(e){var t=e.id,i=e.topic,n=e.menuImageUrl;return Object(a.jsxs)("div",{className:"topic-item",children:[Object(a.jsx)("img",{src:n}),Object(a.jsx)("span",{children:i})]},t)})):null})}),$=(i(90),i.p+"static/media/pig.e2c300e3.png"),ee=i.p+"static/media/sheep.e8235dd4.png",te=function(e){Object(A.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={currentTab:"none",libraryData:[{id:1,topic:"Sheep",menuImageUrl:ee,items:[{id:"sh1",title:"HOW TO: Handle Your Sheep",linkUrl:"",imageUrl:""},{id:"sh2",title:"HOW TO: Recognise the Signs of Sick Sheep",linkUrl:"",imageUrl:""},{id:"sh3",title:"HOW TO: Housing",linkUrl:"",imageUrl:""}]},{id:1,topic:"Pigs",menuImageUrl:$,items:[{id:"pi1",title:"HOW TO: Handle Your Sheep",linkUrl:"",imageUrl:""},{id:"pi2",title:"HOW TO: Recognise the Signs of Sick Sheep",linkUrl:"",imageUrl:""},{id:"pi3",title:"HOW TO: Housing",linkUrl:"",imageUrl:""}]},{id:1,topic:"Cattle",menuImageUrl:"data:image/png;base64,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",items:[{id:"co1",title:"COMING SOON",linkUrl:"",imageUrl:""}]}]},a}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"library-feed",children:Object(a.jsx)(_,{collection:this.state.libraryData})})}}]),i}(c.a.Component),ie=function(e){Object(A.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={},a}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsx)(M,{children:Object(a.jsx)(te,{})})}}]),i}(c.a.Component);var ae=function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(p.c,{children:[Object(a.jsx)(p.a,{path:"/signin",component:H}),Object(a.jsx)(p.a,{path:"/library",component:ie}),Object(a.jsx)(p.a,{path:"/onboarding",component:H}),Object(a.jsx)(p.a,{path:"/home",component:Z}),Object(a.jsx)(p.a,{path:"/",component:j})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,129)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),a(e),n(e),c(e),s(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N.a,{children:Object(a.jsx)(ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ne()}},[[91,1,2]]]);
//# sourceMappingURL=main.958cc8f4.chunk.js.map