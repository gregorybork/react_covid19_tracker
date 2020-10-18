(this.webpackJsonpreact_covid19_tracker=this.webpackJsonpreact_covid19_tracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},207:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(71),o=a.n(c),s=a(5),u=a.n(s),i=a(10),l=a(72),d=a(73),m=a(81),f=a(80),p=a(225),v=a(229),b=a(226),h=a(227),g=a(30),E=a.n(g),y=a(31),C=a.n(y),x=a(13),_=a.n(x),k=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:_.a.container},n.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:C()(_.a.card,_.a.infected)},n.a.createElement(b.a,null,n.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(h.a,{variant:"h5"},n.a.createElement(E.a,{start:0,end:a.value,duration:2.8,separator:","})),n.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(h.a,{variant:"body2"},"Number of active cases of Covid-19"))),n.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:C()(_.a.card,_.a.recovered)},n.a.createElement(b.a,null,n.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(h.a,{variant:"h5"},n.a.createElement(E.a,{start:0,end:r.value,duration:2,separator:","})),n.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(h.a,{variant:"body2"},"Number of Reovered from Covid-19"))),n.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:C()(_.a.card,_.a.deaths)},n.a.createElement(b.a,null,n.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(h.a,{variant:"h5"},n.a.createElement(E.a,{start:0,end:c.value,duration:2.8,separator:","})),n.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(h.a,{variant:"body2"},"Number of Deaths Caused of Covid-19"))))):"Loading... "},j=a(29),w=a(32),O=a.n(w),S="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,r,n,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,O.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,s=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,r=a.reverse().map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(44),B=a(78),L=a.n(B),R=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,s=e.country,l=Object(r.useState)({}),d=Object(j.a)(l,2),m=d[0],f=d[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=m.length?n.a.createElement(A.Line,{data:{labels:m.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#77b603",borderRadius:".5px",backgroundColor:"rgba(119, 182, 3, .2)",fill:!0},{data:m.map((function(e){return e.recovered})),label:"Recovered",borderColor:"#00a6d1",backgroundColor:"rgba(0, 166, 209, .2)",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#b7001b",backgroundColor:"rgba(183, 0, 27, .5)",fill:!0}]},options:{legend:{labels:{fontColor:"rgb(151, 151, 151)",fontSize:12}},scales:{yAxes:[{gridLines:{color:"rgb(151, 151, 151)"},ticks:{fontColor:"rgb(151, 151, 151)"}}],xAxes:[{gridLines:{color:"rgb(151, 151, 151)"},ticks:{fontColor:"rgb(151, 151, 151)"}}]}}}):null,v=a?n.a.createElement(A.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["#77b603","#00a6d1","#b7001b"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state of ".concat(s)}}}):null;return n.a.createElement("div",{className:L.a.container},s?v:p)},M=a(230),P=a(228),U=a(33),z=a.n(U),V=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(j.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),n.a.createElement(M.a,{className:z.a.formControl},n.a.createElement(P.a,{className:z.a.nativeSelect,defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{className:z.a.text,value:""}," Global"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)}))))},G=a(45),J=a.n(G),Q=a(79),q=a.n(Q),Y=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return n.a.createElement("div",{className:J.a.container},n.a.createElement("img",{className:J.a.image,alt:"COVID-19",src:q.a}),n.a.createElement(k,{data:t}),n.a.createElement(V,{handleCountryChange:this.handleCountryChange}),n.a.createElement(R,{data:t,country:a}))}}]),a}(n.a.Component);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)),document.getElementById("root"))},33:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9",nativeSelect:"CountryPicker_nativeSelect__2MsIV"}},45:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},78:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},79:function(e,t,a){e.exports=a.p+"static/media/image.526b1df0.png"},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.c5243308.chunk.js.map