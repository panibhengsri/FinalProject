(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,n){e.exports={button:"button_button__3Pz0r"}},44:function(e,t,n){},45:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(2),c=n.n(r),s=n(31),o=n.n(s),a=(n(44),n(38)),l=(n(45),n(14)),d=n(20),u=n(16),j=n(15),h=n(21),p=n(32),b=n.n(p),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),i=t.call(this,e),console.log(i.props),i}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return this.props.auth.currentUser&&Object(i.jsx)(h.b,{to:"/",className:b.a.button,onClick:function(){return e.props.auth.signOut()},children:"Sign Out"})}}]),n}(c.a.Component),x=n(17),f=n(18),g=(n(28),n(25),n(27),n(22)),m=(n(26),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).signInWithGoogle=function(){var e=new f.a.auth.GoogleAuthProvider;r.props.auth.signInWithPopup(e)},r.render=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{children:Object(i.jsx)(h.b,{to:"/locations",onClick:r.signInWithGoogle,children:"Sign in with Google"})}),Object(i.jsx)("p",{style:{marginTop:"5px",color:"white"},children:"Do not violate the community guidelines or you will be banned for life!"})]})},r.signInWithGoogle=r.signInWithGoogle.bind(Object(x.a)(r)),r}return n}(c.a.Component)),v=function(e){var t=e.completed,n={height:"100%",width:"".concat(t,"%"),backgroundColor:"#608FDA",borderRadius:"inherit",justifyContent:"center"};return Object(i.jsx)("div",{style:{height:20,width:"100%",backgroundColor:"#ffff",borderRadius:50,margins:10,justifyContent:"center"},children:Object(i.jsx)("div",{style:n})})},y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={error:null,learningMore:!1,isLoaded:!1,items:{uv:null,temp:null,covid:null,goout:!1}},i.handleLearnMore=i.handleLearnMore.bind(Object(x.a)(i)),i}return Object(d.a)(n,[{key:"handleLearnMore",value:function(){this.setState({learningMore:!0})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://final-project-comp20.herokuapp.com/api/rate/country/?location=S.%20Korea").then((function(e){return e.json()})).then((function(t){console.log("This is the data",t),e.setState({isLoaded:!0,items:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e,t=this.state.learningMore,n=this.state;n.error,n.isLoaded,n.items;return e=t?Object(i.jsxs)("div",{class:"detailedResult",children:[Object(i.jsxs)("div",{class:"individualResult",children:[Object(i.jsx)("p",{style:{marginRight:"20px"},children:"UV INDEX"}),Object(i.jsx)(v,{completed:90}),Object(i.jsx)("p",{style:{marginLeft:"20px",width:"30px"},children:"9.0"})]}),Object(i.jsxs)("div",{class:"individualResult",children:[Object(i.jsx)("p",{style:{marginRight:"20px"},children:"TIME"}),Object(i.jsx)(v,{completed:50}),Object(i.jsx)("p",{style:{marginLeft:"20px",width:"30px"},children:"5.0"})]}),Object(i.jsxs)("div",{class:"individualResult",children:[Object(i.jsx)("p",{style:{marginRight:"20px"},children:"TEMP"}),Object(i.jsx)(v,{completed:80}),Object(i.jsx)("p",{style:{marginLeft:"20px",width:"30px"},children:"8.0"})]}),Object(i.jsxs)("div",{class:"individualResult",children:[Object(i.jsx)("p",{style:{marginRight:"20px"},children:"COVID-19"}),Object(i.jsx)(v,{completed:100}),Object(i.jsx)("p",{style:{marginLeft:"20px",width:"30px"},children:"10.0"})]})]}):Object(i.jsx)("p",{}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{class:"simpleResult",children:[Object(i.jsx)("h2",{children:"3/5"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{style:{marginTop:"28px"},children:"You should go out today!"}),Object(i.jsx)("button",{onClick:this.handleLearnMore,children:"see why"}),Object(i.jsx)("p",{})]})]}),e,console]})}}]),n}(c.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).setLoccArr=function(){r.props.firestore.collection(r.props.auth.currentUser.uid).doc("locations").onSnapshot((function(e){r.setState({locArr:e.data().locations})}))},r.sendMessage=function(){r.props.firestore.collection(r.props.auth.currentUser.uid).doc("locations").update({locations:f.a.firestore.FieldValue.arrayUnion("ehh")})},r.addCollec=function(){r.props.firestore.collection(r.props.auth.currentUser.uid).doc("locations").get().then((function(e){e.exists||r.props.firestore.collection(r.props.auth.currentUser.uid).doc("locations").set({locations:[""]})}))},r.render=function(){return r.addCollec(),r.sendMessage(),1==r.state.locArr[0]?Object(i.jsx)("main",{children:Object(i.jsx)("div",{children:"Add location with the dropdown list above!"})}):(console.log("array is initialized"),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("main",{children:Object(i.jsx)("div",{children:r.state.locArr.map((function(e){return Object(i.jsxs)("div",{children:[" ",e," "]})}))})})}))},r.state={me:r.props.firestore.collection(r.props.auth.currentUser.uid),locc:null,locArr:[1,2,3,4]},console.log("addlist is made"),r.sendMessage=r.sendMessage.bind(Object(x.a)(r)),r.addCollec=r.addCollec.bind(Object(x.a)(r)),r.setLoccArr=r.setLoccArr.bind(Object(x.a)(r)),r.setLoccArr(),r}return n}(c.a.Component),L=n.p+"static/media/logo.057a6dee.png",w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("section",{children:this.props.user?Object(i.jsx)(C,{firestore:this.props.firestore,auth:this.props.auth}):Object(i.jsx)(m,{firestore:this.props.firestore,auth:this.props.auth})}),Object(i.jsx)("div",{children:Object(i.jsx)(O,{auth:this.props.auth})})]})}}]),n}(c.a.Component),I=n(5);f.a.initializeApp({apiKey:"AIzaSyBozbLN9F8w_LCmJEvPsCIx82h7Hd0NtrY",authDomain:"comp20finalproj.firebaseapp.com",projectId:"comp20finalproj",storageBucket:"comp20finalproj.appspot.com",messagingSenderId:"721509114501",appId:"1:721509114501:web:3e7a6c1a4147938ca77fec",measurementId:"G-SJD7Z64VEP"});var M=f.a.auth(),k=f.a.firestore();f.a.analytics();var A=function(){var e=Object(g.a)(M),t=Object(a.a)(e,1)[0];return Object(r.useRef)(),console.log("props.auth.currentuser is null"),Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(h.a,{children:Object(i.jsxs)(I.c,{children:[Object(i.jsx)(I.a,{path:"/result",children:Object(i.jsx)(y,{})}),Object(i.jsx)(I.a,{path:"/locations",children:Object(i.jsx)(w,{auth:M,firestore:k,user:t})}),Object(i.jsxs)(I.a,{path:"/",children:[Object(i.jsx)("img",{style:{width:"300px"},src:L,alt:"Logo"}),Object(i.jsx)(m,{auth:M})]})]})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root")),R()}},[[52,1,2]]]);
//# sourceMappingURL=main.18c073d3.chunk.js.map