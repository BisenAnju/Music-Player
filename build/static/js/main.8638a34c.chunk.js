(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{49:function(t,e,l){},55:function(t,e,l){"use strict";l.r(e);var a=l(2),i=l(0),n=l.n(i),s=l(13),c=l.n(s),o=(l(49),l(34)),r=l(35),h=l(38),d=l(37),j=l(21),y=l.n(j),u=l(83),b=l(76),p=l(78),x=l(79),g=l(81),O=l(80),f=l(82),w=l(12),m=l.n(w),v=l(22),C=l.n(v),k=l(23),S=l.n(k),I=Object(b.a)((function(t){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:t.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"},button:{margin:t.spacing(1)}}})),N={heading1:{color:"white",fontSize:"20px",fontWeight:"bold",marginLeft:"10px"},heading2:{color:"white",fontSize:"15px",marginLeft:"10px"}},D=function(t){Object(h.a)(l,t);var e=Object(d.a)(l);function l(t){var a;return Object(o.a)(this,l),(a=e.call(this,t)).nextButtonFun=function(){a.state.play1?(console.log("1st"),a.setState({play2:!0,play1:!1,play3:!1,play4:!1})):a.state.play2?(console.log("2nd"),a.setState({play3:!0,play2:!1,play1:!1,play4:!1})):a.state.play3?(console.log("3rd"),a.setState({play4:!0,play3:!1,play1:!1,play2:!1})):a.state.play4&&(console.log("4th"),a.setState({play1:!0,play4:!1,play2:!1,play3:!1}))},a.state={play1:!1,play2:!1,play3:!1,play4:!1,pause1:!1,pause2:!1,pause3:!1,pause4:!1},a}return Object(r.a)(l,[{key:"render",value:function(){var t=this,e=I;return Object(a.jsxs)("div",{style:{width:"100%"},children:[Object(a.jsxs)(p.a,{style:{width:"100%"},children:[Object(a.jsx)(x.a,{cols:2,style:{height:"auto",backgroundColor:"#cc1717",display:"flex",justifyContent:"center"},children:Object(a.jsx)(O.a,{style:{color:"white",fontWeight:"bold"},children:"Music List"})},"Subheader"),Object(a.jsxs)(x.a,{style:{margin:"2% 2.5%",width:"45%",height:"200px"},children:[Object(a.jsx)("img",{src:"11.jpg",alt:"Jingle Bell"}),Object(a.jsx)(g.a,{title:"Jingle Bell",subtitle:Object(a.jsxs)("span",{children:["by: ","Yo Yo Honey Singh"]}),actionIcon:Object(a.jsx)(f.a,{"aria-label":"info about Jingle Bell",className:e.icon,onClick:function(e){e.preventDefault(),t.setState({play1:!0,play2:!1,play3:!1})},children:this.state.play1?Object(a.jsx)(C.a,{style:{color:"white"}}):(this.state.pause1,Object(a.jsx)(m.a,{style:{color:"white"}}))})})]},"11.jpg"),Object(a.jsxs)(x.a,{style:{margin:"2% 2.5%",width:"45%",height:"200px"},children:[Object(a.jsx)("img",{src:"22.jpg",alt:"Toh Aagaye Hum"}),Object(a.jsx)(g.a,{title:"Toh Aagaye Hum",subtitle:Object(a.jsxs)("span",{children:["by: ","Jubin Nautiyal"]}),actionIcon:Object(a.jsx)(f.a,{"aria-label":"info about Toh Aagaye Hum",className:e.icon,onClick:function(e){e.preventDefault(),t.setState({play1:!1,play2:!0,play3:!1,play4:!1})},children:this.state.play2?Object(a.jsx)(C.a,{style:{color:"white"}}):(this.state.pause2,Object(a.jsx)(m.a,{style:{color:"white"}}))})})]},"22.jpg"),Object(a.jsxs)(x.a,{style:{margin:"2% 2.5%",width:"45%",height:"200px"},children:[Object(a.jsx)("img",{src:"33.jpeg",alt:"Oh Saaiyaan"}),Object(a.jsx)(g.a,{title:"Oh Saaiyaan",subtitle:Object(a.jsxs)("span",{children:["by: ","Arijit Singh"]}),actionIcon:Object(a.jsx)(f.a,{"aria-label":"info about Oh Saaiyaan",className:e.icon,onClick:function(e){e.preventDefault(),t.setState({play1:!1,play2:!1,play3:!0,play4:!1})},children:this.state.play3?Object(a.jsx)(C.a,{style:{color:"white"}}):(this.state.pause3,Object(a.jsx)(m.a,{style:{color:"white"}}))})})]},"33.jpeg"),Object(a.jsxs)(x.a,{style:{margin:"2% 2.5%",width:"45%",height:"200px"},children:[Object(a.jsx)("img",{src:"44.jpg",alt:"Mehendi Wale Haath"}),Object(a.jsx)(g.a,{title:"Mehendi Wale Haath",subtitle:Object(a.jsxs)("span",{children:["by: ","Guru Randhawa"]}),actionIcon:Object(a.jsx)(f.a,{"aria-label":"info about Mehendi Wale Haath",className:e.icon,onClick:function(e){e.preventDefault(),t.setState({play1:!1,play2:!1,play3:!1,play4:!0})},children:this.state.play4?Object(a.jsx)(C.a,{style:{color:"white"}}):(this.state.pause4,Object(a.jsx)(m.a,{style:{color:"white"}}))})})]},"44.jpg")]}),this.state.play1?Object(a.jsxs)("div",{style:{height:"10%",backgroundColor:"#f1f3f4",position:"absolute",bottom:0,display:"flex",alignItems:"center",width:"100%"},children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",width:"45%",height:"100%",backgroundColor:"#cc1717"},children:[Object(a.jsx)("div",{style:N.heading1,children:"Jingle Bell "}),Object(a.jsx)("div",{style:N.heading2,children:" Yo Yo Honey Singh"})]}),Object(a.jsx)("div",{style:{width:"45%"},children:Object(a.jsx)(y.a,{style:{width:"90%"},src:"1.mp3",autoPlay:!0,controls:!0,onPause:function(e){return t.setState({pause1:!0})}})}),Object(a.jsx)("div",{style:{width:"10%"},children:Object(a.jsx)(u.a,{style:{backgroundColor:"#cc1717",color:"white",width:"90%"},className:e.button,endIcon:Object(a.jsx)(S.a,{style:{color:"white"}}),onClick:function(e){e.preventDefault(),t.nextButtonFun()},children:"Next"})})]}):null,this.state.play2?Object(a.jsxs)("div",{style:{height:"10%",backgroundColor:"#f1f3f4",position:"absolute",bottom:0,display:"flex",alignItems:"center",width:"100%"},children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",width:"45%",height:"100%",backgroundColor:"#cc1717"},children:[Object(a.jsx)("div",{style:N.heading1,children:"Toh Aagaye Hum "}),Object(a.jsx)("div",{style:N.heading2,children:"Jubin Nautiyal"})]}),Object(a.jsx)("div",{style:{width:"45%"},children:Object(a.jsx)(y.a,{style:{width:"90%"},src:"2.mp3",autoPlay:!0,controls:!0,onPause:function(e){return t.setState({pause2:!0})}})}),Object(a.jsx)("div",{style:{width:"10%"},children:Object(a.jsx)(u.a,{style:{backgroundColor:"#cc1717",color:"white",width:"90%"},className:e.button,endIcon:Object(a.jsx)(S.a,{style:{color:"white"}}),onClick:function(e){e.preventDefault(),t.nextButtonFun()},children:"Next"})})]}):null,this.state.play3?Object(a.jsxs)("div",{style:{height:"10%",backgroundColor:"#f1f3f4",position:"absolute",bottom:0,display:"flex",alignItems:"center",width:"100%"},children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",width:"45%",height:"100%",backgroundColor:"#cc1717"},children:[Object(a.jsx)("div",{style:N.heading1,children:"Oh Saaiyaan "}),Object(a.jsx)("div",{style:N.heading2,children:" Arijit Singh"})]}),Object(a.jsx)("div",{style:{width:"45%"},children:Object(a.jsx)(y.a,{style:{width:"90%"},src:"3.mp3",autoPlay:!0,controls:!0,onPause:function(e){return t.setState({pause3:!0})}})}),Object(a.jsx)("div",{style:{width:"10%"},children:Object(a.jsx)(u.a,{style:{backgroundColor:"#cc1717",color:"white",width:"90%"},className:e.button,endIcon:Object(a.jsx)(S.a,{style:{color:"white"}}),onClick:function(e){e.preventDefault(),t.nextButtonFun()},children:"Next"})})]}):null,this.state.play4?Object(a.jsxs)("div",{style:{height:"10%",backgroundColor:"#f1f3f4",position:"absolute",bottom:0,display:"flex",alignItems:"center",width:"100%"},children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",width:"45%",height:"100%",backgroundColor:"#cc1717"},children:[Object(a.jsx)("div",{style:N.heading1,children:"Mehendi Wale Haath"}),Object(a.jsx)("div",{style:N.heading2,children:" Guru Randhawa"})]}),Object(a.jsx)("div",{style:{width:"45%"},children:Object(a.jsx)(y.a,{style:{width:"90%"},src:"4.mp3",autoPlay:!0,controls:!0,onPause:function(e){return t.setState({pause4:!0})}})}),Object(a.jsx)("div",{style:{width:"10%"},children:Object(a.jsx)(u.a,{style:{backgroundColor:"#cc1717",color:"white",width:"90%"},className:e.button,endIcon:Object(a.jsx)(S.a,{style:{color:"white"}}),onClick:function(e){e.preventDefault(),t.nextButtonFun()},children:"Next"})})]}):null]})}}]),l}(n.a.Component),B=function(t){t&&t instanceof Function&&l.e(3).then(l.bind(null,85)).then((function(e){var l=e.getCLS,a=e.getFID,i=e.getFCP,n=e.getLCP,s=e.getTTFB;l(t),a(t),i(t),n(t),s(t)}))};c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),B()}},[[55,1,2]]]);
//# sourceMappingURL=main.8638a34c.chunk.js.map