(this.webpackJsonpanmlfarm=this.webpackJsonpanmlfarm||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(0),c=n.n(s),i=n(8),o=n.n(i),r=(n(52),n(53),n(22)),l=n(23),d=n(25),h=n(24),u=(n(54),n.p+"static/media/Subtract.29037d68.png"),b=n(7),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).handleClick=function(){a.state.hasDoneSignIn?a.state.hasDoneOnboarding?a.state.hasDoneProfile?a.state.hasDoneTerms||(a.setState({hasDoneTerms:!0}),a.props.history.push("".concat(a.props.match.url,"terms"))):(a.setState({hasDoneProfile:!0}),a.props.history.push("".concat(a.props.match.url,"profile"))):(a.setState({hasDoneOnboarding:!0}),a.props.history.push("".concat(a.props.match.url,"onboarding"))):(a.setState({hasDoneSignIn:!0}),a.props.history.push("".concat(a.props.match.url,"signin")))},a.state={user:null,hasDoneSignIn:!1,hasDoneOnboarding:!1,hasDoneProfile:!1,hasDoneTerms:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"entry-page",children:[Object(a.jsx)("div",{className:"spacer"}),Object(a.jsx)("img",{src:u,onClick:this.handleClick,alt:"main logo"}),Object(a.jsx)("div",{className:"spacer"})]})}}]),n}(c.a.Component),m=Object(b.f)(p),j=n(40),g=n.n(j),f=n(44),O=n.p+"static/media/fingerprint.3d50a2af.svg",y=(n(61),Object(b.f)((function(e){var t=e.callback,n=e.history;return Object(a.jsx)("div",{className:"fingerbutton",children:Object(a.jsx)("img",{alt:"next",src:O,onClick:function(){null==t?n.push("/"):t()}})})}))),A=n.p+"static/media/left-arrow.b20e13c3.svg",x=(n(62),Object(b.f)((function(e){var t=e.callback,n=e.history;return Object(a.jsx)("div",{className:"foldback-button",children:Object(a.jsx)("img",{alt:"back",src:A,onClick:function(){null==t?n.goBack():t()}})})}))),v=(n(63),function(e){var t=e.backClickCallback,n=e.nextClickCallback,s=e.mainImageSource,c=e.cardHeading,i=e.cardBody;return console.log(t),console.log(n),console.log(s),console.log(c),console.log(i),Object(a.jsx)("div",{className:"simple-info-page",children:Object(a.jsxs)("div",{className:"info-card",children:[Object(a.jsx)(x,{callback:t}),Object(a.jsx)("img",{className:"main-image",src:s,alt:s}),Object(a.jsx)("h1",{className:"card-heading",children:c}),Object(a.jsx)("p",{className:"card-body",children:i}),Object(a.jsx)(y,{callback:n})]})})}),k=(n(64),n.p+"static/media/simplify.fdd7edb3.svg"),w=n.p+"static/media/observe.756a41b7.svg",I=n.p+"static/media/react.8ce9433b.svg",C=n.p+"static/media/grow.1e0d1743.svg",N=n.p+"static/media/thanks.1968d420.svg",B=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).nextStep=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.state.stepIndex<a.state.content.length-1)){e.next=5;break}return e.next=3,a.setState({stepIndex:a.state.stepIndex+1});case 3:e.next=6;break;case 5:a.props.history.push("/home");case 6:case"end":return e.stop()}}),e)}))),a.previousStep=function(){a.state.stepIndex>0?a.setState({stepIndex:a.state.stepIndex-1}):a.props.history.goBack()},a.state={stepIndex:0,content:[{image:k,heading:"Simplify",body:"Avoid paper stackpiles and digital logs and ledgers all over the place. Record your activity in the field, in one place, with or without connection!"},{image:w,heading:"Observe",body:"See live data of how your farm is performing, as well as predictions on events that might unfold, giving you the power of foresight and knowledge of what to do if and when something happens."},{image:I,heading:"React",body:"Make decisions, payments, sales and purchases on what your crop or stock needs right now. Never be away from your farm, even when away from your farm"},{image:C,heading:"Grow",body:"Join a community of farmers and people just like you, trying to live off of the land and give as they receive. "},{image:N,heading:"Thank You!",body:"Thank you for downloading ANML Farm! Please note that the site is still under construction. We appreciate your interest, and you can rest assured that we are hard at work fixing all of the remaining issues. If you do spot something we can improve, do let us know! Thanks!"}]},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"onboarding",children:Object(a.jsx)(v,{cardBody:this.state.content[this.state.stepIndex].body,cardHeading:this.state.content[this.state.stepIndex].heading,mainImageSource:this.state.content[this.state.stepIndex].image,nextClickCallback:this.nextStep,backClickCallback:this.previousStep})})}}]),n}(c.a.Component),D=Object(b.f)(B),S=(n(65),n(101)),R=n(45),P=(n(66),n(20)),Y=n(99),E=n(95),H=n(100),T=n(98),Q=n(102),F=function(e){var t=e.listItems,n=c.a.useState(!1),s=Object(R.a)(n,2),i=s[0],o=s[1],r=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&o(e)}};return Object(a.jsxs)("div",{className:"swipe-up-button",children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAYAAAD17ghaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPCSURBVHgB7ZZNbBNHFMffm43aQ1WpNwi9cOuxJwq99QCxQ6uW9F7BBWiwIQEh0dib3dl1vA6qKpIQi49eilQpBw42QuDYILjyceDAjQNHPiQkDoAQsDuPNxuvvY7XxA7igJR32pk3837/efPmaQE2bMM27HO2yYr85nj976/gIwxhHeYuz34foDpFAD+hjoHYUO/eHS/8bN2HAW1gAdPXS9uMgCoM/3aV65GhcI81OnUXBjAxyGKX4cKnagRHgjJ//9t0bwkEVeXlmR8GCNm/AA0PAqhyzraEG1FMynQu66ZyB1SgjkYi6EtRkcv9i+hLgIb7Pl0CoBBORJP2yF/zkb+w25zTc+GAWIToX8SaNaADKRBVRBiO4G46P5+01louTiDiXDPyI1RqTKbNO7BeAV1woCNuKn/6Q3usevEwP4uFSIRB/u9Wyro9sIDpK952HIIKL0iET9fcbUIM/cqOL9B/e07+Ih+2RRRYhLHQBDwW4I/1EoH9wJHUYU7lYuR3Gt5BRVhmWcaKOK0PDrrpXPQiQF6byZISp9sigEXkukR0FWH+6swOIwYXSNk4XNZLhxTB2RU4/c/wC7oZ8TWdt2qFTGvdLnNRC28KHA4Iqm7d2/5BAfa1mR1DhtBNZpirDYjh9ki+HIMf4NnySlBynFT+D36G+1CRE55UGItOo9gWwcKFomwz15sDwqrNB4wzMQ4HJSr8uTmEC8i63fBzEZzrQcYDyVpRkkA7DErIVzbVyppVK2ZQYHOMTyAIxpzd5q2WgDicn5nOy0DwJBGrizYugglPUag9zi7zFmo4KqHb66awmAAynNYzbbh3hCfn14IniVAAE4VUbiHyOXVvnBDLfEjUIoaUPyb45EsRXCAe+hh4uGc0L6Oa4AKbt/jFRD6bY6NPGa5Y4tRv8g3jIlp17wYPfkRQEzJlnk+Ec0B3tBPO+/Zy5c+hrlXEjD0ytdQzE6TGC2nzbMu3XPqTY/N10M2wBk5eOvn1id9OvOhYgHSmF5xTuZfT+x8/vn8wUC81iE+7j094oZcITuFRJ52bi3ya+fre61ddjagDnpD2CB73RaC1RPCeY7znVNyP64InZqVoK0CZJCLy6W9lcGHubBdmZydEmF0PXJudyjsCSOo1em2SLwQqcOK+Va1YHeOCGu8XLvmnVNbk1n5FINF+CsjsPPMa1r5zlG5qqqVe1kpbAYP9yjDeCnyzJHfKB+09va9jYLMb3nOrXrLjcxpu171Sa9zwimat8F2n8KLNPeAZfAqTMXh7brYEG/Y52ntBLkyASXfBZwAAAABJRU5ErkJggg==",onClick:r(!0)}),Object(a.jsx)(Y.a,{anchor:"bottom",open:i,onClose:r(!1),children:Object(a.jsx)("div",{className:"drawer-list",role:"presentation",onClick:r(!1),onKeyDown:r(!1),style:{width:"auto"},children:Object(a.jsx)(E.a,{children:t?t.map((function(e,t,n,s){return Object(a.jsx)(P.b,{to:n,children:Object(a.jsxs)(H.a,{button:!0,children:[Object(a.jsx)(T.a,{children:Object(a.jsx)("img",{src:s})}),Object(a.jsx)(Q.a,{primary:t})]},e)})})):null})})})]})},X=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={menuItems:{id:1,text:"Home",imageUrl:"",linkTo:"/home",iconImageUrl:"./images/"}},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"home-page",children:Object(a.jsxs)("div",{className:"border",children:[Object(a.jsx)("div",{className:"main-area",children:Object(a.jsx)(S.a,{style:{border:"0,0,1px solid black,0"},children:"H"})}),Object(a.jsx)("div",{className:"menubar-button",children:Object(a.jsx)(F,{})})]})})}}]),n}(c.a.Component);var z=function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{path:"/onboarding",component:D}),Object(a.jsx)(b.a,{path:"/home",component:X}),Object(a.jsx)(b.a,{path:"/",component:m})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P.a,{children:Object(a.jsx)(z,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),K()}},[[67,1,2]]]);
//# sourceMappingURL=main.57f2c968.chunk.js.map