(this["webpackJsonpbrainjs-redux"]=this["webpackJsonpbrainjs-redux"]||[]).push([[0],{151:function(e,a,r){e.exports=r(349)},156:function(e,a,r){},157:function(e,a,r){},314:function(e,a){},316:function(e,a){},349:function(e,a,r){"use strict";r.r(a);var t=r(0),o=r.n(t),n=r(54),l=r.n(n),i=(r(156),r(150)),s=(r(157),r(27)),c=r(37),d=r(78),u=r.n(d),b=r(146),p=r(147),C=r.n(p),g=r(75),E=r.n(g),h=r(38),R=r.n(h),I=new R.a.NeuralNetwork,N=new R.a.NeuralNetwork,m=new R.a.NeuralNetwork,T=new R.a.NeuralNetwork;var B=function(){var e=Object(c.b)(),a=Object(c.c)((function(e){return e.bitcoin})),r=o.a.useState(15),t=Object(i.a)(r,2),n=t[0],l=t[1],d=function(a){e(function(e){var a=e.time,r=e.number;return function(){var e=Object(b.a)(u.a.mark((function e(t){var o,n,l,i,s,c,d,b,p,g,h,R,B,O,f,A,w,v,k,P,y,S,H,L,D,x;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"AWAITING_BITCOIN"}),e.next=4,C.a.get("https://financialmodelingprep.com/api/v3/historical-chart/".concat(a,"/BTCUSD?apikey=df8f3193c67e3f800048dc4863a1984e"));case 4:o=e.sent,n=[],l=[],i=[],s=[],c=[],d=[],b=0;case 12:if(!(b<r)){e.next=23;break}if(i.unshift(o.data[b].high),l.unshift(o.data[b].close),c.unshift(o.data[b].low),d.unshift(o.data[b].open),n.unshift(E()(o.data[b].date).format("LT")),b!==r-1){e.next=20;break}return e.abrupt("break",23);case 20:b++,e.next=12;break;case 23:p=0;case 24:if(!(p<r)){e.next=31;break}if(s.push(i[p]),p!==r-1){e.next=28;break}return e.abrupt("break",31);case 28:p++,e.next=24;break;case 31:for(g=[],h=0;h<r;h++)g.unshift({input:{hgh:o.data[h].high/77777,lw:o.data[h].low/77777,cl:o.data[h].close/77777},output:{op:o.data[h].open/77777}});for(console.log("BRAIN OPEN PRICE TRAINING ARRAY : ",g),m.train(g,{iterations:2e4,errorThresh:5e-4,log:!1,learningRate:.3,momentum:.08}),R=m.run({hgh:o.data[r].open/77777,lw:o.data[r].open/77777,cl:o.data[r].open/77777}),B=[],O=0;O<r;O++)B.unshift({input:{hgh:o.data[O].high/77777,lw:o.data[O].low/77777,op:o.data[O].open/77777},output:{cl:o.data[O].close/77777}});for(console.log("BRAIN CLOSE PRICE TRAINING ARRAY : ",B),T.train(B,{errorThresh:5e-4,log:!0,learningRate:.3,momentum:.08}),f=T.run({hgh:o.data[r].close/77777,lw:o.data[r].close/77777,cl:o.data[r].close/77777}),A=[],w=0;w<r;w++)A.unshift({input:{cl:o.data[w].close/77777,lw:o.data[w].low/77777,op:o.data[w].open/77777},output:{hgh:o.data[w].high/77777}});for(console.log("BRAIN HIGH PRICE TRAINING ARRAY :",A),I.train(A,{errorThresh:5e-4,log:!0,learningRate:.3,momentum:.08}),v=I.run({lw:o.data[r].close/77777,op:o.data[r].open/77777,cl:o.data[r].close/77777}),k=[],P=0;P<r;P++)k.unshift({input:{hgh:o.data[P].high/77777,cl:o.data[P].close/77777,op:o.data[P].open/77777},output:{lw:o.data[P].low/77777}});console.log("BRAIN LOW PRICE TRAINING ARRAY :",k),N.train(k,{errorThresh:5e-4,log:!0,learningRate:.3,momentum:.08}),y=N.run({hgh:o.data[r].high/77777,op:o.data[r].open/77777,cl:o.data[r].close/77777}),console.log("OPEN PREDICTION: ",77777*R.op),console.log("CLOSE PREDICTION: ",77777*f.cl),console.log("HIGH PREDICTION: ",7777*v.hgh),console.log("LOW PREDICTION: ",7777*y.lw),S=[],H=[],L=[],x=[],(D=[]).push(77777*y.lw),L.push(77777*v.hgh),H.push(77777*f.cl),S.push(77777*R.op),x.push(.5*(H+S)),t({type:"SUCCESS_BITCOIN",payload:{resultRvsL:x,OpenBrainResult:S,CloseBrainResult:H,HighBrainResult:L,LowBrainResult:D,open:d,low:c,high:s,data:l,labels:n}}),e.next=71;break;case 68:e.prev=68,e.t0=e.catch(0),t({type:"REJECTED_BITCOIN"});case 71:case"end":return e.stop()}}),e,null,[[0,68]])})));return function(a){return e.apply(this,arguments)}}()}({time:a,number:n}))};return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"ARTIFICIAL INTELIGENCE \ud83d\udd6fCANDLESTICK\ud83d\udd6f PREDICTION ")),o.a.createElement("div",{className:"title"},o.a.createElement("h2",null,"BTC/USD Timeseries")),o.a.createElement("div",{className:"btns-wrapper"},o.a.createElement("button",{onClick:function(){return d("1min")}},"1 Min"),o.a.createElement("button",{onClick:function(){return d("5min")}},"5 Min"),o.a.createElement("button",{onClick:function(){return d("15min")}},"15 Min"),o.a.createElement("button",{onClick:function(){return d("30min")}},"30 Min"),o.a.createElement("button",{onClick:function(){return d("1hour")}},"1 hour"),o.a.createElement("button",{onClick:function(){return d("4hour")}},"4 hour"),o.a.createElement("input",{onChange:function(e){return l(e.target.value)}}),a.loading&&o.a.createElement("p",null,"Loading...")),o.a.createElement("div",{className:"info"},o.a.createElement("h4",null,"Default Chart settings is set to 15 try more...entries by specifying any amount.")),o.a.createElement("div",{className:"chart-wrapper"},o.a.createElement(s.Line,{data:a.data})),o.a.createElement("div",{className:"explaination"},o.a.createElement("h3",{className:"infoB",style:{marginLeft:"150px"}},"IF THE OPEN IS GREATER THEN THE CLOSE THE SNAPSHOT USED TO FORCE TRAIN THE BRAIN IS PREDICTING  A RED  \u2b07BAR  \ud83d\udfe5"),o.a.createElement("h3",{className:"infoB",style:{marginLeft:"150px"}},"IF THE CLOSE IS GREATER THEN THE OPEN THE SNAPSHOT USED TO FORCE TRAIN THE BRAIN IS PREDICTING A GREEN \u2b06BAR \ud83d\udfe9"),o.a.createElement("div",{className:"infoC",style:{marginLeft:"150px"}},o.a.createElement("h4",null,"\u26a0WARNING: PREDICTION CAN BE GREEN \ud83d\udfe9BAR AND YET CANDLESTICK CAN OPEN LOWER THEN LAST OPEN PRICE"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{style:{height:"900px",width:"900px"}},o.a.createElement(s.Bar,{data:a.dataC,options:{responsive:!0}})),o.a.createElement("div",null),o.a.createElement("div",{style:{height:"900px",width:"900px"}},o.a.createElement(s.Radar,{data:a.dataB,options:{responsive:!0}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=r(28),f=r(22),A={loading:!1,data:{labels:[],datasets:[{label:"BTC close",data:[],backgroundColor:"rgba(226, 153, 18, 0.9)",borderColor:"rgba(178, 116, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)"}]},dataB:{labels:[],datasets:[{type:"radar",label:"BOT CHART PREDICTION",data:[],backgroundColor:"rgba(226, 153, 18, 0.9)",borderColor:"rgba(178, 116, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",options:{responsive:!0}}]},dataC:{labels:[],datasets:[{type:"bar",label:"BOT CHART PREDICTION",data:[],backgroundColor:"rgba(226, 153, 18, 0.9)",borderColor:"rgba(178, 116, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",options:{responsive:!0}}]}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0,r=a.type,t=a.payload;switch(r){case"AWAITING_BITCOIN":return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case"REJECTED_BITCOIN":return Object(f.a)(Object(f.a)({},e),{},{loading:!1});case"SUCCESS_BITCOIN":return Object(f.a)(Object(f.a)({},e),{},{loading:!1,data:{labels:t.labels,datasets:[{label:"BTC CLOSE",data:t.data,backgroundColor:"rgba(226, 153, 18, 0.9)",borderColor:"rgba(178, 116, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",order:3},{type:"line",label:"BTC OPEN",data:t.open,backgroundColor:"rgba(10, 204, 0, 0.1)",borderColor:"rgba(10, 204, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",order:2},{type:"line",label:"BTC HIGH",data:t.high,backgroundColor:"rgba(22, 91, 160, 0.9)",borderColor:"rgba(14, 38, 62,0.9)",pointBorderColor:"rgba(22, 91, 160, 1)",order:4},{type:"line",label:"BTC LOW",data:t.low,backgroundColor:"rgba(255,255,0, 0.6)",borderColor:"rgba(255,255,0, 0.9)",pointBorderColor:"rgba(255,255,0, 0.9)",order:1}]},dataB:{labels:["OpenVsClose","Close Prediction","Open Prediction"],datasets:[{type:"radar",label:"OPEN PRICE BRAIN PREDICTION",data:[t.OpenBrainResult,t.OpenBrainResult,t.OpenBrainResult],backgroundColor:"rgba(255, 0, 0, 0.4)",borderColor:"\trgba(255, 0, 0, 0.9)",pointBorderColor:"rgba(25, 16, 0, 1)",order:1},{type:"radar",label:"CLOSE PRICE BRAIN PREDICTION",data:[t.CloseBrainResult,t.CloseBrainResult,t.CloseBrainResult],backgroundColor:"rgba(10, 204, 0, 0.7)",borderColor:"rgba(10, 204, 0, 0.9)",pointBorderColor:"rgba(10, 204, 0, 0.7)",order:3},{type:"radar",label:"HIGH PRICE BRAIN PREDICTION",data:[t.HighBrainResult,t.HighBrainResult,t.HighBrainResult],backgroundColor:"rgba(0,0,255, 0.7)",borderColor:"rgba(0,0,255, 0.9)",pointBorderColor:"rgba(0,0,255, 0.8)",order:3},{type:"radar",label:"LOW PRICE BRAIN PREDICTION",data:[t.LowBrainResult,t.LowBrainResult,t.LowBrainResult],backgroundColor:"rgba(255,255,0, 0.8)",borderColor:"rgba(255,255,0, 0.9)",pointBorderColor:"rgba(255,255,0, 0.9)",order:3}]},dataC:{labels:["Close Prediction","Open Prediction"],datasets:[{type:"bar",label:"Close - Open",data:[t.CloseBrainResult-t.OpenBrainResult],backgroundColor:"rgba(226, 153, 18, 0.9)",borderColor:"rgba(178, 116, 0, 1)",pointBorderColor:"rgba(25, 16, 0, 1)",order:2},{type:"bar",label:"Open - Close",data:[t.OpenBrainResult-t.CloseBrainResult],backgroundColor:"rgba(10, 204, 0, 0.8)",borderColor:"rgba(10, 204, 0, 0.9)",pointBorderColor:"rgba(25, 16, 0, 0.8)",order:3}]},options:{responsive:!0}});default:return e}},v=Object(O.combineReducers)({bitcoin:w}),k=r(148),P=r(149),y=Object(O.createStore)(v,Object(k.composeWithDevTools)(Object(O.applyMiddleware)(P.a)));l.a.render(o.a.createElement(c.a,{store:y},o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.6d3cce1d.chunk.js.map