(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports=[{id:1,name:"Alex Morgan",image:"/images/alex-morgan.jpg",clicked:!1},{id:2,name:"Ashlyn Harris",image:"/images/ashlyn-harris.jpg",clicked:!1},{id:3,name:"Becky Sauerbrunn",image:"/images/becky-sauerbrunn.jpg",clicked:!1},{id:4,name:"Carli Lloyd",image:"/images/carli-lloyd.jpg",clicked:!1},{id:5,name:"Christen Press",image:"/images/christen-press.jpg",clicked:!1},{id:6,name:"Julie Ertz",image:"/images/julie-ertz.jpg",clicked:!1},{id:7,name:"Kelley O'Hara",image:"/images/kelley-ohara.jpg",clicked:!1},{id:8,name:"Mallory Pugh",image:"/images/mallory-pugh.jpg",clicked:!1},{id:9,name:"Megan Rapinoe",image:"/images/megan-rapinoe.jpg",clicked:!1},{id:10,name:"Morgan Brian",image:"/images/morgan-brian.jpg",clicked:!1},{id:11,name:"Rose Lavelle",image:"/images/rose-lavelle.jpg",clicked:!1},{id:12,name:"Tobin Heath",image:"/images/tobin-heath.jpg",clicked:!1}]},24:function(e,a,t){e.exports=t(50)},50:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(8),c=t.n(r),o=t(18),s=t(19),l=t(22),m=t(20),g=t(23),d=t(6),u=t.n(d),p=function(e){return i.a.createElement(u.a,{sticky:"top",className:"justify-content-between",bg:"dark",variant:"dark"},i.a.createElement(u.a.Brand,{href:"/"},"Clicky Game"),i.a.createElement(u.a.Text,{id:"guess"},e.message?e.message:"Click an image to begin!"),i.a.createElement(u.a.Text,null,"Score: ",e.score," | Top Score: ",e.topScore))},k=t(21),h=t.n(k),f={textAlign:"center"},y=function(){return i.a.createElement(h.a,{style:f},i.a.createElement("h1",null,"Clicky Game!"),i.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))},j={height:"200px",width:"200px",margin:"10px"},b=function(e){return i.a.createElement("img",{alt:e.name,src:e.image,"data-id":e.id,onClick:function(){return e.handleClick(e.id)},style:j})},E=t(12),S=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={data:E,score:0,topScore:0,randomizeImg:function(){t.setState(function(e){return{data:e.data.sort(function(){return.5-Math.random()})}})},updateScore:function(){t.setState({score:t.state.score+1},function(){t.state.updateTopScore(),12===t.state.score&&(alert("You win!"),t.state.resetGame())})},updateTopScore:function(){t.state.score>t.state.topScore&&t.setState({topScore:t.state.score})},resetGame:function(){t.message="",t.state.data.forEach(function(e){e.clicked=!1}),t.setState({score:0})}},t.message="",t.imgContainer={width:"900px",margin:"0 auto"},t.checkClicked=function(e){var a=t.state.data.filter(function(a){return a.id===e});!1===a[0].clicked?(a[0].clicked=!0,t.message="You guessed correctly!",t.state.updateScore(),t.state.randomizeImg()):(alert("You guessed incorrectly!"),t.state.resetGame())},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.state.randomizeImg()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(p,{score:this.state.score,topScore:this.state.topScore,message:this.message}),i.a.createElement(y,null),i.a.createElement("div",{style:this.imgContainer},E.map(function(a){return i.a.createElement(b,{key:a.id,id:a.id,name:a.name,image:a.image,handleClick:e.checkClicked})})))}}]),a}(i.a.Component);c.a.render(i.a.createElement(S,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c2634bc7.chunk.js.map