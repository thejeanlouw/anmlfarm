(this.webpackJsonpanmlfarm=this.webpackJsonpanmlfarm||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),o=a(20),r=a.n(o),i=(a(28),a(29),a(10)),l=a(11),d=a(13),u=a(12),h=(a(30),a.p+"static/media/Subtract.29037d68.png"),m=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={user:null},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"entry-page",children:[Object(n.jsx)("div",{className:"spacer"}),Object(n.jsx)("img",{src:h,onClick:function(e){return console.log("Clicked!")}}),Object(n.jsx)("div",{className:"spacer"})]})}}]),a}(s.a.Component),g=a(2),p=a(16),b=a.n(p),f=a(21),j=a.p+"static/media/fingerprint.3d50a2af.svg",v=(a(32),Object(g.f)((function(e){var t=e.callback,a=e.history;return Object(n.jsx)("div",{className:"fingerbutton",children:Object(n.jsx)("img",{alt:"next",src:j,onClick:function(){null==t?a.push("/"):t()}})})}))),x=a.p+"static/media/left-arrow.b20e13c3.svg",O=(a(38),Object(g.f)((function(e){var t=e.callback,a=e.history;return Object(n.jsx)("div",{className:"foldback-button",children:Object(n.jsx)("img",{alt:"back",src:x,onClick:function(){null==t?a.goBack():t()}})})}))),k=(a(39),function(e){var t=e.backClickCallback,a=e.nextClickCallback,c=e.mainImageSource,s=e.cardHeading,o=e.cardBody;return console.log(t),console.log(a),console.log(c()),console.log(s()),console.log(o()),Object(n.jsxs)("div",{className:"simple-info-page",children:[Object(n.jsx)("div",{className:"spacer-horizontal",children:Object(n.jsx)("div",{className:"spacer-vertical"})}),Object(n.jsxs)("div",{className:"main-horizontal",children:[Object(n.jsx)("div",{className:"spacer-vertical"}),Object(n.jsxs)("div",{className:"info-card",children:[Object(n.jsx)(O,{callback:t}),Object(n.jsx)("img",{className:"main-image",src:c(),alt:c()}),Object(n.jsx)("h1",{className:"card-heading",children:s()}),Object(n.jsx)("p",{className:"card-body",children:o()}),Object(n.jsx)(v,{callback:a})]}),Object(n.jsx)("div",{className:"spacer-vertical"})]}),Object(n.jsx)("div",{className:"spacer-horizontal",children:Object(n.jsx)("div",{className:"spacer-vertical"})})]})}),y=(a(40),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).nextStep=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.state.stepIndex<n.state.content.length-1)){e.next=5;break}return e.next=3,n.setState({stepIndex:n.state.stepIndex+1});case 3:e.next=6;break;case 5:n.props.history.push("/");case 6:case"end":return e.stop()}}),e)}))),n.previousStep=function(){n.state.stepIndex>0?n.setState({stepIndex:n.state.stepIndex-1}):n.props.history.goBack()},n.currentHeading=function(){return n.state.content[n.state.stepIndex].heading},n.currentImage=function(){return n.state.content[n.state.stepIndex].image},n.currentBodyText=function(){return n.state.content[n.state.stepIndex].body},n.state={stepIndex:0,content:[{image:"".concat("/anmlfarm","/assets/vectors/simplify.svg"),heading:"Simplify",body:"Avoid paper stackpiles and digital logs and ledgers all over the place. Record your activity in the field, in one place, with or without connection!"},{image:"".concat("/anmlfarm","/assets/vectors/observe.svg"),heading:"Observe",body:"See live data of how your farm is performing, as well as predictions on events that might unfold, giving you the power of foresight and knowledge of what to do if and when something happens."},{image:"".concat("/anmlfarm","/assets/vectors/react.svg"),heading:"React",body:"Make decisions, payments, sales and purchases on what your crop or stock needs right now. Never be away from your farm, even when away from your farm"},{image:"".concat("/anmlfarm","/assets/vectors/grow.svg"),heading:"Grow",body:"Join a community of farmers and people just like you, trying to live off of the land and give as they receive. "},{image:"".concat("/anmlfarm","/assets/vectors/thanks.svg"),heading:"Thank You!",body:"Thank you for downloading ANML Farm! Please note that the site is still under construction. We appreciate your interest, and you can rest assured that we are hard at work fixing all of the remaining issues. If you do spot something we can improve, do let us know! Thanks!"}]},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"onboarding",children:["ONBOARDING - ",this.state.stepIndex,Object(n.jsx)(k,{cardBody:this.currentBodyText,cardHeading:this.currentHeading,mainImageSource:this.currentImage,nextClickCallback:this.nextStep,backClickCallback:this.previousStep})]})}}]),a}(s.a.Component)),w=Object(g.f)(y);var N=function(){return Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(g.c,{children:[Object(n.jsx)(g.a,{path:"/onboarding",component:w}),Object(n.jsx)(g.a,{exact:!0,path:"/",component:m})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))},C=a(8);r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C.a,{children:Object(n.jsx)(N,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),I()}},[[41,1,2]]]);
//# sourceMappingURL=main.10e3b523.chunk.js.map