(this.webpackJsonpanmlfarm=this.webpackJsonpanmlfarm||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),o=n(20),r=n.n(o),i=(n(28),n(29),n(10)),l=n(11),d=n(13),u=n(12),h=(n(30),n.p+"static/media/Subtract.29037d68.png"),m=n(2),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={user:null},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"entry-page",children:[Object(a.jsx)("div",{className:"spacer"}),Object(a.jsx)("img",{src:h,onClick:function(t){return e.props.history.push("".concat(e.props.match.url,"onboarding"))}}),Object(a.jsx)("div",{className:"spacer"})]})}}]),n}(s.a.Component),f=Object(m.f)(g),p=n(18),b=n.n(p),j=n(22),v=n.p+"static/media/fingerprint.3d50a2af.svg",x=(n(37),Object(m.f)((function(e){var t=e.callback,n=e.history;return Object(a.jsx)("div",{className:"fingerbutton",children:Object(a.jsx)("img",{alt:"next",src:v,onClick:function(){null==t?n.push("/"):t()}})})}))),k=n.p+"static/media/left-arrow.b20e13c3.svg",y=(n(38),Object(m.f)((function(e){var t=e.callback,n=e.history;return Object(a.jsx)("div",{className:"foldback-button",children:Object(a.jsx)("img",{alt:"back",src:k,onClick:function(){null==t?n.goBack():t()}})})}))),O=(n(39),function(e){var t=e.backClickCallback,n=e.nextClickCallback,c=e.mainImageSource,s=e.cardHeading,o=e.cardBody;return console.log(t),console.log(n),console.log(c()),console.log(s()),console.log(o()),Object(a.jsx)("div",{className:"simple-info-page",children:Object(a.jsxs)("div",{className:"info-card",children:[Object(a.jsx)(y,{callback:t}),Object(a.jsx)("img",{className:"main-image",src:c(),alt:c()}),Object(a.jsx)("h1",{className:"card-heading",children:s()}),Object(a.jsx)("p",{className:"card-body",children:o()}),Object(a.jsx)(x,{callback:n})]})})}),w=(n(40),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).nextStep=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.state.stepIndex<a.state.content.length-1)){e.next=5;break}return e.next=3,a.setState({stepIndex:a.state.stepIndex+1});case 3:e.next=6;break;case 5:a.props.history.push("/");case 6:case"end":return e.stop()}}),e)}))),a.previousStep=function(){a.state.stepIndex>0?a.setState({stepIndex:a.state.stepIndex-1}):a.props.history.goBack()},a.currentHeading=function(){return a.state.content[a.state.stepIndex].heading},a.currentImage=function(){return a.state.content[a.state.stepIndex].image},a.currentBodyText=function(){return a.state.content[a.state.stepIndex].body},a.state={stepIndex:0,content:[{image:"".concat("/anmlfarm","/assets/vectors/simplify.svg"),heading:"Simplify",body:"Avoid paper stackpiles and digital logs and ledgers all over the place. Record your activity in the field, in one place, with or without connection!"},{image:"".concat("/anmlfarm","/assets/vectors/observe.svg"),heading:"Observe",body:"See live data of how your farm is performing, as well as predictions on events that might unfold, giving you the power of foresight and knowledge of what to do if and when something happens."},{image:"".concat("/anmlfarm","/assets/vectors/react.svg"),heading:"React",body:"Make decisions, payments, sales and purchases on what your crop or stock needs right now. Never be away from your farm, even when away from your farm"},{image:"".concat("/anmlfarm","/assets/vectors/grow.svg"),heading:"Grow",body:"Join a community of farmers and people just like you, trying to live off of the land and give as they receive. "},{image:"".concat("/anmlfarm","/assets/vectors/thanks.svg"),heading:"Thank You!",body:"Thank you for downloading ANML Farm! Please note that the site is still under construction. We appreciate your interest, and you can rest assured that we are hard at work fixing all of the remaining issues. If you do spot something we can improve, do let us know! Thanks!"}]},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"onboarding",children:["ONBOARDING - ",this.state.stepIndex,Object(a.jsx)(O,{cardBody:this.currentBodyText,cardHeading:this.currentHeading,mainImageSource:this.currentImage,nextClickCallback:this.nextStep,backClickCallback:this.previousStep})]})}}]),n}(s.a.Component)),I=Object(m.f)(w);var C=function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"/onboarding",component:I}),Object(a.jsx)(m.a,{path:"/",component:f})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))},S=n(7);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S.a,{children:Object(a.jsx)(C,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),N()}},[[41,1,2]]]);
//# sourceMappingURL=main.aad93b43.chunk.js.map