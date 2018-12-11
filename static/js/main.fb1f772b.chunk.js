(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),c=n.n(o),l=(n(75),n(3)),s=n(4),i=n(6),u=n(5),m=n(7),p=n(146),d=n(148),b=n(147),h=n(22),f=function(e){try{var t=localStorage.getItem(e),n=[];if(t&&(n=JSON.parse(t)),0===n.length)return"";var a=[],r=Array.apply(null,{length:n[0].length}).map(Number.call,Number);return a.push("Full render number,"+r.join(",")),n.forEach(function(e,t){a.push(t+1+","+e.join(","))}),a.join("\r\n")}catch(o){return localStorage.clear(),""}},v=function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},E=(n(77),function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).getCsv=function(){var e=f(n.props.name);v("results-".concat(n.props.name,".csv"),e)},n.clearResults=function(){localStorage.removeItem(n.props.name),n.setState({results:[]})},n.getResults=function(){try{var e=(n.state.results.reduce(function(e,t){return e+t.reduce(function(e,t){return e+t},0)},0)/n.state.results.length).toFixed(0),t=n.state.results.reduce(function(e,t){return e+t.reduce(function(e,t,n){return 0===n?e:e+t},0)},0),a=n.state.results.length*(n.state.results[0].length-1);return{totalAvg:e,reRenderCount:a,reRenderAvg:(t/a).toFixed(0)}}catch(r){n.clearResults()}};var a=localStorage.getItem(e.name),r=[];return a&&(r=JSON.parse(a)),n.state={results:r},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){if(0===this.state.results.length)return r.a.createElement("span",{className:"NoResults"},"No results available. Run test first.");var e=this.getResults(),t=e.totalAvg,n=e.reRenderCount,a=e.reRenderAvg;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Results"},"First render time (avg of ",this.state.results.length," renders):"," ",r.a.createElement("strong",null,t," ms")),r.a.createElement("div",{className:"Results"},"Re-render time (avg of ",n," re-renders):"," ",r.a.createElement("strong",null,a," ms")),r.a.createElement("button",{className:"ResultsButton",onClick:this.getCsv},"Download CSV"),r.a.createElement("button",{className:"ResultsButton",onClick:this.clearResults},"Clean results"))}}]),t}(r.a.PureComponent)),g=(n(79),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(h.a)({},r,a))},n.runTest=function(){var e=new URL("".concat(window.location.href));e.hash="#/".concat(n.props.name),e.searchParams.set("reloads",n.state.reloads),e.searchParams.set("re-renders",n.state.reRenders),e.searchParams.set("noComponents",n.props.numberOfComponents),window.location.href=e.href},n.state={reRenders:0,reloads:10},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"TestRunnerHeader"},r.a.createElement("strong",null,this.props.name),this.props.version&&r.a.createElement("span",{className:"version"},"[v",this.props.version,"]"),r.a.createElement("button",{onClick:this.runTest},"Run test")),r.a.createElement("div",{className:"TestRunnerDesc"},this.props.description),r.a.createElement("div",{className:"TestRunner"},r.a.createElement("span",null,"Full renders:"),r.a.createElement("input",{name:"reloads",onChange:this.handleInputChange,value:this.state.reloads}),r.a.createElement("span",null," || Re-renders per load:"),r.a.createElement("input",{name:"reRenders",onChange:this.handleInputChange,value:this.state.reRenders})))}}]),t}(r.a.PureComponent)),C=(n(81),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(h.a)({},r,a))},n.state={numberOfComponents:1e3},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",{className:"Title"},"css-in-js-stress"," ",r.a.createElement("span",{role:"img","aria-label":"Grinning Face With Sweat"},"\ud83d\ude05")),r.a.createElement("h4",null,"Bunch of CSS-in-JS libraries compared for render times."),r.a.createElement("p",null,"Benchmarks will run on clean page according to params provided for the test. After desired number of full render cycles (clean landing / re-render mounted component) full detailed times can be downloaded as CSV file."),r.a.createElement("p",null,"Note that implementations are assuming some theming (static for CSS, dynamic for CSS-in-JS) so all implementations relay on ContextAPI / class overrides for CSS to implement themes"),r.a.createElement("p",null,"Running on react@16.6.3 / react-dom@16.6.3",r.a.createElement("br",null),"Wanna add a lib / update version? \ud83d\udc49\ud83c\udffb"," ",r.a.createElement("a",{href:"https://github.com/matmalkowski/css-in-js-stress"},"submit a PR")),r.a.createElement("div",{className:"Settings"},r.a.createElement("div",{className:"SettingsHeader"},"Settings"),r.a.createElement("span",null,"How many components should be rendered?"),r.a.createElement("input",{name:"numberOfComponents",onChange:this.handleInputChange,value:this.state.numberOfComponents})),r.a.createElement("div",{className:"LibBlock"},r.a.createElement(g,{name:"native-css",description:"Simple CSS styles for layout + additional classes for theme only colors",numberOfComponents:this.state.numberOfComponents}),r.a.createElement(E,{name:"native-css"})),r.a.createElement("div",{className:"LibBlock"},r.a.createElement(g,{name:"styled-components-mixed",version:"4.1.2",description:"Simple CSS styles for layout + StyledComponents wrapper for theme colors.",numberOfComponents:this.state.numberOfComponents}),r.a.createElement(E,{name:"styled-components-mixed"})),r.a.createElement("div",{className:"LibBlock"},r.a.createElement(g,{name:"styled-components",version:"4.1.2",description:"Pure StyledComponents with theme support",numberOfComponents:this.state.numberOfComponents}),r.a.createElement(E,{name:"styled-components"})),r.a.createElement("div",{className:"LibBlock"},r.a.createElement(g,{name:"aphrodite",version:"2.2.3",description:"Pure aphrodite with theme support implemented with ContexAPI wrapper.",numberOfComponents:this.state.numberOfComponents}),r.a.createElement(E,{name:"aphrodite"})),r.a.createElement("div",{className:"LibBlock"},r.a.createElement(g,{name:"react-jss",version:"8.6.1",description:"Pure react-jss with in-build theme support",numberOfComponents:this.state.numberOfComponents}),r.a.createElement(E,{name:"react-jss"})),r.a.createElement("div",{className:"Footer"},r.a.createElement("div",null,"Hosted by ",r.a.createElement("a",{href:"https://pages.github.com/"},"GitHub")),r.a.createElement("div",null," ","Made with"," ",r.a.createElement("span",{role:"img","aria-label":"Love Heart"},"\u2764\ufe0f")," ","by Maciej Malkowski (",r.a.createElement("a",{href:"https://github.com/matmalkowski"},"@matmalkowski"),")"," "),r.a.createElement("div",{className:"version"},"[version 0.7.3]")))}}]),t}(r.a.PureComponent)),O=n(24),j=n.n(O),k=new URL(window.location.href),S=10,x=parseInt(k.searchParams.get("noComponents"))||1,y=parseInt(k.searchParams.get("re-renders"))||0,N=parseInt(k.searchParams.get("reloads"))||1,w=parseInt(k.searchParams.get("current-reload"))||1,R=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).onFinishRender=function(){var e=j()();n.results.push(e-n.startRender),console.log(n.results,"onFinishRender"),n.results.length<y?setTimeout(function(){n.setState(function(e){return{iteration:e.iteration+1}})},S):(n.saveResults(),n.reload())},n.saveResults=function(){var e=localStorage.getItem(n.props.name),t=[];e&&(t=JSON.parse(e)),t.push(n.results),localStorage.setItem(n.props.name,JSON.stringify(t))},n.reload=function(){w<N?(k.searchParams.set("current-reload",w+1),window.location.href=k.href):window.location.href="/css-in-js-stress/#"},n.componentDidUpdate=function(){n.onFinishRender()},n.state={iteration:0},n.createdAt=j()(),n.results=[],1===w&&localStorage.removeItem(n.props.name),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this.props.container,t=this.props.component,n=this.props.probe,a=[],o=0;o<x;o++)a.push(r.a.createElement(t,{text:"".concat(this.state.iteration,"_").concat(o),key:o}));return this.startRender=j()(),r.a.createElement(r.a.Fragment,null,r.a.createElement(e,null,a),r.a.createElement(n,{onAnimationStart:this.onFinishRender}))}}]),t}(a.PureComponent),P=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.Children.map(t,function(e){return r.a.cloneElement(e,{themeVariant:"purple"})}))},A=(n(83),function(e){var t=e.text,n=e.themeVariant;return r.a.createElement("div",{className:"search-box theme-variant-".concat(n)},r.a.createElement("span",null,t,": "),r.a.createElement("input",{placeholder:"input search value"}),r.a.createElement("button",null,"Search"))}),I=(n(85),function(e){var t=e.onAnimationStart;return r.a.createElement("div",{onAnimationStart:t,className:"probe"},"probe")}),F=function(){return r.a.createElement(R,{container:P,component:A,probe:I,name:"native-css"})},B=n(8),L={label:{color:"#9c27b0"},input:{color:"#ba68c8",backgroundColor:"#e1bee7"},button:{color:"white",backgroundColor:"#9c27b0",hover:"#ab47bc"}},T=function(e){var t=e.children;return r.a.createElement(B.a,{theme:L},r.a.createElement("div",null,t))},J=n(11);n(90);function H(){var e=Object(J.a)(["\n  span {\n    color: ",";\n  }\n  input {\n    color: ",";\n    background-color: ",";\n  }\n  button {\n    color: ",";\n    background-color: ",";\n    &:hover {\n      background-color: ",";\n    }\n  }\n"]);return H=function(){return e},e}var D=Object(B.b)(function(e){var t=e.text,n=e.className;return r.a.createElement("div",{className:"search-box ".concat(n)},r.a.createElement("span",null,t,": "),r.a.createElement("input",{placeholder:"input search value"}),r.a.createElement("button",null,"Search"))})(H(),function(e){return e.theme.label.color},function(e){return e.theme.input.color},function(e){return e.theme.input.backgroundColor},function(e){return e.theme.button.color},function(e){return e.theme.button.backgroundColor},function(e){return e.theme.button.hover});function U(){var e=Object(J.a)(["\n  animation: "," 1s;\n"]);return U=function(){return e},e}function V(){var e=Object(J.a)(["\n  from {\n    color: red;\n  }\n\n  to {\n    color: blue;\n  }\n"]);return V=function(){return e},e}var W=Object(B.c)(V()),M=B.b.div(U(),W),G=function(e){var t=e.onAnimationStart;return r.a.createElement(M,{onAnimationStart:t},"probe")},$=function(){return r.a.createElement(R,{container:T,component:D,probe:G,name:"styled-components-mixed"})},_={label:{color:"#9c27b0"},input:{color:"#ba68c8",backgroundColor:"#e1bee7"},button:{color:"white",backgroundColor:"#9c27b0",hover:"#ab47bc"}},q=function(e){var t=e.children;return r.a.createElement(B.a,{theme:_},r.a.createElement("div",null,t))};function z(){var e=Object(J.a)(["\n  display: inline-block;\n  padding: 5px;\n\n  span {\n    color: ",";\n  }\n  input {\n    padding: 2px 5px;\n    border: none;\n    color: ",";\n    background-color: ",";\n  }\n  button {\n    padding: 5px 10px;\n    border: none;\n    border-radius: 5px;\n    margin-left: 5px;\n    color: ",";\n    background-color: ",";\n\n    &:hover {\n      cursor: pointer;\n      background-color: ",";\n    }\n  }\n"]);return z=function(){return e},e}var K=Object(B.b)(function(e){var t=e.text,n=e.className;return r.a.createElement("div",{className:n},r.a.createElement("span",null,t,": "),r.a.createElement("input",{placeholder:"input search value"}),r.a.createElement("button",null,"Search"))})(z(),function(e){return e.theme.label.color},function(e){return e.theme.input.color},function(e){return e.theme.input.backgroundColor},function(e){return e.theme.button.color},function(e){return e.theme.button.backgroundColor},function(e){return e.theme.button.hover});function Q(){var e=Object(J.a)(["\n  animation: "," 1s;\n"]);return Q=function(){return e},e}function X(){var e=Object(J.a)(["\n  from {\n    color: red;\n  }\n\n  to {\n    color: blue;\n  }\n"]);return X=function(){return e},e}var Y=Object(B.c)(X()),Z=B.b.div(Q(),Y),ee=function(e){var t=e.onAnimationStart;return r.a.createElement(Z,{onAnimationStart:t},"probe")},te=function(){return r.a.createElement(R,{container:q,component:K,probe:ee,name:"styled-components"})},ne={label:{color:"#9c27b0"},input:{color:"#ba68c8",backgroundColor:"#e1bee7"},button:{color:"white",backgroundColor:"#9c27b0",hover:"#ab47bc"}},ae=r.a.createContext(ne),re=ne,oe=function(e){var t=e.children;return r.a.createElement(ae.Provider,{value:re},r.a.createElement("div",null,t))},ce=n(12),le=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.context;return r.a.createElement("div",{className:Object(ce.b)(ie(e).root)},r.a.createElement("span",{className:Object(ce.b)(ie(e).span)},this.props.text,": "),r.a.createElement("input",{className:Object(ce.b)(ie(e).input),placeholder:"input search value"}),r.a.createElement("button",{className:Object(ce.b)(ie(e).button)},"Search"))}}]),t}(r.a.PureComponent);le.contextType=ae;var se=le,ie=function(e){return ce.a.create({root:{display:"inline-block",padding:"5px"},span:{color:e.label.color},input:{padding:"2px 5px",border:"none",color:e.input.color,backgroundColor:e.input.backgroundColor},button:{padding:"5px 10px",border:"none",borderRadius:"5px",marginLeft:"5px",color:e.button.color,backgroundColor:e.button.backgroundColor,"&:hover":{cursor:"pointer",backgroundColor:e.button.hover}}})},ue=ce.a.create({probe:{animationName:[{from:{color:"red"},to:{color:"blue"}}],animationDuration:"1s"}}),me=function(e){var t=e.onAnimationStart;return r.a.createElement("div",{onAnimationStart:t,className:Object(ce.b)(ue.probe)})},pe=function(){return r.a.createElement(R,{container:oe,component:se,probe:me,name:"aphrodite"})},de={label:{color:"#9c27b0"},input:{color:"#ba68c8",backgroundColor:"#e1bee7"},button:{color:"white",backgroundColor:"#9c27b0",hover:"#ab47bc"}},be=n(15),he=n.n(be),fe=function(e){var t=e.children;return r.a.createElement(be.ThemeProvider,{theme:de},r.a.createElement("div",null,t))},ve=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement("span",{className:e.span},this.props.text,": "),r.a.createElement("input",{className:e.input,placeholder:"input search value"}),r.a.createElement("button",{className:e.button},"Search"))}}]),t}(r.a.PureComponent),Ee=he()(function(e){return{root:{display:"inline-block",padding:"5px"},span:{color:e.label.color},input:{padding:"2px 5px",border:"none",color:e.input.color,backgroundColor:e.input.backgroundColor},button:{padding:"5px 10px",border:"none",borderRadius:"5px",marginLeft:"5px",color:e.button.color,backgroundColor:e.button.backgroundColor,"&:hover":{cursor:"pointer",backgroundColor:e.button.hover}}}})(ve),ge=he()({"@keyframes react-jss-probe-animation":{from:{color:"red"},to:{color:"blue"}},probe:{animation:"1s react-jss-probe-animation"}})(function(e){var t=e.classes,n=(e.children,e.onAnimationStart);return r.a.createElement("div",{className:t.probe,onAnimationStart:n},"Probe")}),Ce=function(){return r.a.createElement(R,{container:fe,component:Ee,probe:ge,name:"react-jss"})},Oe=(n(141),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:function(){return r.a.createElement(C,null)}}),r.a.createElement(b.a,{exact:!0,path:"/native-css/",component:function(){return r.a.createElement(F,null)}}),r.a.createElement(b.a,{exact:!0,path:"/styled-components-mixed/",component:function(){return r.a.createElement($,null)}}),r.a.createElement(b.a,{exact:!0,path:"/styled-components/",component:function(){return r.a.createElement(te,null)}}),r.a.createElement(b.a,{exact:!0,path:"/aphrodite/",component:function(){return r.a.createElement(pe,null)}}),r.a.createElement(b.a,{exact:!0,path:"/react-jss/",component:function(){return r.a.createElement(Ce,null)}})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,n){e.exports=n(144)},75:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},90:function(e,t,n){}},[[70,2,1]]]);
//# sourceMappingURL=main.fb1f772b.chunk.js.map