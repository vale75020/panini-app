(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),i=(a(15),a(9)),c=a(1),m=a(2),s=a(4),d=a(3),h=a(5),g=function(e){var t=e.playerTab,a=e.deletePlayer,n=t.map(function(e){return l.a.createElement("div",{className:"player",key:e.id},l.a.createElement("div",null,l.a.createElement("img",{className:"photo",src:e.photo,alt:"player's pic"})),l.a.createElement("div",null,"Name: ",e.name),l.a.createElement("div",null,"Age: ",e.age),l.a.createElement("div",null,"Nation: ",e.nation),l.a.createElement("div",null,l.a.createElement("img",{className:"flag",src:e.flag,alt:"player's flag"})),l.a.createElement("button",{onClick:function(){a(e.id)}},"Delete Player")," ")});return l.a.createElement("div",{className:"player-list"},n)},p=(a(17),a(8)),u=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).stete={name:null,age:null,nation:null,flag:null,photo:null},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.addPlayer(a.state)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"age"},"Age"),l.a.createElement("input",{type:"text",id:"age",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"nation"},"Nation"),l.a.createElement("input",{type:"text",id:"nation",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"flag"},"Flag"),l.a.createElement("input",{type:"text",id:"flag",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"photo"},"Photo"),l.a.createElement("input",{type:"text",id:"photo",onChange:this.handleChange}),l.a.createElement("button",null,"Submit")))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={playerTab:[{name:"Maradona",age:"25",nation:"Argentina",flag:"http://www.worldometers.info/img/flags/ar-flag.gif",photo:"https://nst.sky.it/content/dam/static/contentimages/original/sezioni_old/sport/maradona_story/maradona_esordi_argentina.jpg",id:1},{name:"Cruyff",age:"23",nation:"Netherland",flag:"http://www.worldometers.info/img/flags/nl-flag.gif",photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVY8ODQhgSr3apZLlYHS28MAhSWIzCXv60J7AyO4MmY1D4VcM",id:2},{name:"Pel\xe9",age:"28",nation:"Brasil",flag:"http://www.worldometers.info/img/flags/br-flag.gif",photo:"https://img.bfmtv.com/c/1256/708/992/d05d8e3971bb1c4a5a22edefb8f92.jpg",id:3}]},a.addPlayer=function(e){console.log(e),e.id=Math.random();var t=Object(i.a)(a.state.playerTab).concat([e]);a.setState({playerTab:t})},a.deletePlayer=function(e){console.log(e);var t=a.state.playerTab.filter(function(t){return t.id!==e});a.setState({playerTab:t})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"My first Players App!"),l.a.createElement("h2",null,"Welcome!!!"),l.a.createElement(u,{addPlayer:this.addPlayer})," ",l.a.createElement("div",{className:"wrap"},l.a.createElement(g,{playerTab:this.state.playerTab,deletePlayer:this.deletePlayer})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.559e0563.chunk.js.map