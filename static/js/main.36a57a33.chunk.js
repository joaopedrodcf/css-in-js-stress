(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(50)},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),s=(n(31),n(4)),l=n(5),i=n(8),u=n(6),m=n(9),p=n(52),d=n(54),h=n(53),f=n(13),b=function(e){var t=localStorage.getItem(e),n=[];t&&(n=JSON.parse(t));var a=[],r=Array.apply(null,{length:n.length}).map(Number.call,Number);a.push("Page load,"+r.join(",")),a.push("Total,"+n.map(function(e){return e.total}).join(",")),a.push("Iterations\r\n");for(var o=n[0].iterations.length,c=function(e){a.push(e+1+","+n.map(function(t){return t.iterations[e]}).join(","))},s=0;s<o;s++)c(s);return a.join("\r\n")},v=function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},g=(n(33),function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).getCsv=function(){var e=b(n.props.name);v("results-".concat(n.props.name,".csv"),e)},n.clearResults=function(){localStorage.removeItem(n.props.name),n.setState({results:[]})};var a=localStorage.getItem(e.name),r=[];return a&&(r=JSON.parse(a)),n.state={results:r},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(0===this.state.results.length)return r.a.createElement("span",{className:"NoResults"},"No results available. Run test first.");var e=(this.state.results.reduce(function(e,t){return e+t.total},0)/this.state.results.length).toFixed(0),t=this.state.results.reduce(function(e,t){return e+t.iterations.reduce(function(e,t){return e+t},0)},0),n=this.state.results.length*this.state.results[0].iterations.length,a=(t/n).toFixed(0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Results"},"First render time (avg of ",this.state.results.length," renders):"," ",r.a.createElement("strong",null,e," ms")),r.a.createElement("div",{className:"Results"},"Re-render time (avg of ",n," re-renders):"," ",r.a.createElement("strong",null,a," ms")),r.a.createElement("button",{className:"ResultsButton",onClick:this.getCsv},"Download CSV"),r.a.createElement("button",{className:"ResultsButton",onClick:this.clearResults},"Clean results"))}}]),t}(r.a.PureComponent)),E=(n(35),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(f.a)({},r,a))},n.runTest=function(){var e=new URL("".concat(window.location.href).concat(n.props.name));e.searchParams.set("reloads",n.state.reloads),e.searchParams.set("re-renders",n.state.reRenders),e.searchParams.set("noComponents",n.props.numberOfComponents),window.location.href=e.href},n.state={reRenders:0,reloads:10},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"TestRunnerHeader"},r.a.createElement("strong",null,this.props.name),this.props.version&&r.a.createElement("span",{className:"version"},"[v",this.props.version,"]"),r.a.createElement("button",{onClick:this.runTest},"Run test")),r.a.createElement("div",{className:"TestRunnerDesc"},this.props.description),r.a.createElement("div",{className:"TestRunner"},r.a.createElement("span",null,"Full renders:"),r.a.createElement("input",{name:"reloads",onChange:this.handleInputChange,value:this.state.reloads}),r.a.createElement("span",null," || Re-renders per load:"),r.a.createElement("input",{name:"reRenders",onChange:this.handleInputChange,value:this.state.reRenders})))}}]),t}(r.a.PureComponent)),C=(n(37),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(f.a)({},r,a))},n.state={numberOfComponents:5e3},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",{className:"Title"},"css-in-js-stress"," ",r.a.createElement("span",{role:"img","aria-label":"Grinning Face With Sweat"},"\ud83d\ude05")),r.a.createElement("h4",null,"Bunch of CSS-in-JS libraries compared for render times."),r.a.createElement("p",null,"Benchmarks will run on clean page according to params provided for the test. After desired number of full render cycles (clean landing / re-render mounted component) full detailed times can be downloaded as CSV file."),r.a.createElement("p",null,"Note that implementations are assuming some theming (static for CSS, dynamic for CSS-in-JS) so all implementations relay on ContextAPI / class overrides for CSS to implement themes"),r.a.createElement("p",null,"Running on react@16.6.3 / react-dom@16.6.3",r.a.createElement("br",null),"Wanna add a lib / update version? \ud83d\udc49\ud83c\udffb"," ",r.a.createElement("a",{href:"https://github.com/monkey3310/css-in-js-stress"},"submit a PR")),r.a.createElement("div",{className:"Settings"},r.a.createElement("div",{className:"SettingsHeader"},"Settings"),r.a.createElement("span",null,"How many components should be rendered?"),r.a.createElement("input",{name:"numberOfComponents",onChange:this.handleInputChange,value:this.state.numberOfComponents})),r.a.createElement("div",{className:"LibBlock"},r.a.createElement(E,{name:"native-css",description:"Simple CSS styles for layout + additional classes for theme only colors",numberOfComponents:this.state.numberOfComponents}),r.a.createElement(g,{name:"native-css"})),r.a.createElement("div",{className:"LibBlock"},r.a.createElement(E,{name:"styled-components-mixed",version:"4.1.2",description:"Simple CSS styles for layout + StyledComponents wrapper for theme colors.",numberOfComponents:this.state.numberOfComponents}),r.a.createElement(g,{name:"styled-components-mixed"})),r.a.createElement("div",{className:"LibBlock"},r.a.createElement(E,{name:"styled-components",version:"4.1.2",description:"Pure StyledComponents with theme support",numberOfComponents:this.state.numberOfComponents}),r.a.createElement(g,{name:"styled-components"})))}}]),t}(r.a.PureComponent)),O=n(11),S=n.n(O),j=new URL(window.location.href),y=10,k=parseInt(j.searchParams.get("noComponents"))||5e3,w=j.searchParams.get("theme")||"purple",N=parseInt(j.searchParams.get("re-renders"))||0,R=parseInt(j.searchParams.get("reloads"))||1,x=parseInt(j.searchParams.get("current-reload"))||1,I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).startNextIteration=function(){n.end=S()(),n.state.iteration<N?(n.results.push(n.end-n.startRender),setTimeout(function(){n.setState(function(e){return{iteration:e.iteration+1}})},y)):(n.finished=S()(),n.saveResults(),n.reload())},n.saveResults=function(){var e={iterations:n.results,total:n.finished-n.createdAt-N*y},t=localStorage.getItem(n.props.name),a=[];t&&(a=JSON.parse(t)),a.push(e),localStorage.setItem(n.props.name,JSON.stringify(a))},n.reload=function(){x<R?(j.searchParams.set("current-reload",x+1),window.location.href=j.href):window.location.href="/"},n.componentDidMount=function(){n.startNextIteration()},n.componentDidUpdate=function(){n.startNextIteration()},n.state={iteration:0},n.createdAt=S()(),n.results=[],1===x&&localStorage.removeItem(n.props.name),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this.props.container,t=this.props.component,n=[],a=0;a<k;a++)n.push(r.a.createElement(t,{text:"".concat(this.state.iteration,"_").concat(a),key:a}));return this.startRender=S()(),r.a.createElement(e,{themeVariant:w},n)}}]),t}(a.PureComponent),P=function(e){var t=e.children,n=e.themeVariant;return r.a.createElement(r.a.Fragment,null,r.a.Children.map(t,function(e){return r.a.cloneElement(e,{themeVariant:n})}))},B=(n(39),function(e){var t=e.text,n=e.themeVariant;return r.a.createElement("div",{className:"search-box theme-variant-".concat(n)},r.a.createElement("span",null,t,": "),r.a.createElement("input",{placeholder:"input search value"}),r.a.createElement("button",null,"Search"))}),F=function(){return r.a.createElement(I,{container:P,component:B,name:"native-css"})},J=n(10),T={label:{color:"#9c27b0"},input:{color:"#ba68c8",backgroundColor:"#e1bee7"},button:{color:"white",backgroundColor:"#9c27b0",hover:"#ab47bc"}},V=function(e){var t=e.children;e.themeVariant;return r.a.createElement(J.a,{theme:T},r.a.createElement("div",null,t))},A=n(14);n(45);function L(){var e=Object(A.a)(["\n  span {\n    color: ",";\n  }\n  input {\n    color: ",";\n    background-color: ",";\n  }\n  button {\n    color: ",";\n    background-color: ",";\n    &:hover {\n      background-color: ",";\n    }\n  }\n"]);return L=function(){return e},e}var D=Object(J.b)(function(e){var t=e.text,n=e.className;return r.a.createElement("div",{className:"search-box ".concat(n)},r.a.createElement("span",null,t,": "),r.a.createElement("input",{placeholder:"input search value"}),r.a.createElement("button",null,"Search"))})(L(),function(e){return e.theme.label.color},function(e){return e.theme.input.color},function(e){return e.theme.input.backgroundColor},function(e){return e.theme.button.color},function(e){return e.theme.button.backgroundColor},function(e){return e.theme.button.hover}),H=function(){return r.a.createElement(I,{container:V,component:D,name:"styled-components-mixed"})},U={label:{color:"#9c27b0"},input:{color:"#ba68c8",backgroundColor:"#e1bee7"},button:{color:"white",backgroundColor:"#9c27b0",hover:"#ab47bc"}},W=function(e){var t=e.children;e.themeVariant;return r.a.createElement(J.a,{theme:U},r.a.createElement("div",null,t))};function G(){var e=Object(A.a)(["\n  display: inline-block;\n  padding: 5px;\n\n  span {\n    color: ",";\n  }\n  input {\n    padding: 2px 5px;\n    border: none;\n    color: ",";\n    background-color: ",";\n  }\n  button {\n    padding: 5px 10px;\n    border: none;\n    border-radius: 5px;\n    margin-left: 5px;\n    color: ",";\n    background-color: ",";\n\n    &:hover {\n      cursor: pointer;\n      background-color: ",";\n    }\n  }\n"]);return G=function(){return e},e}var M=Object(J.b)(function(e){var t=e.text,n=e.className;return r.a.createElement("div",{className:n},r.a.createElement("span",null,t,": "),r.a.createElement("input",{placeholder:"input search value"}),r.a.createElement("button",null,"Search"))})(G(),function(e){return e.theme.label.color},function(e){return e.theme.input.color},function(e){return e.theme.input.backgroundColor},function(e){return e.theme.button.color},function(e){return e.theme.button.backgroundColor},function(e){return e.theme.button.hover}),$=function(){return r.a.createElement(I,{container:W,component:M,name:"styled-components"})},_=(n(47),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:function(){return r.a.createElement(C,null)}}),r.a.createElement(h.a,{path:"/native-css/",component:function(){return r.a.createElement(F,null)}}),r.a.createElement(h.a,{path:"/styled-components-mixed/",component:function(){return r.a.createElement(H,null)}}),r.a.createElement(h.a,{path:"/styled-components/",component:function(){return r.a.createElement($,null)}})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.36a57a33.chunk.js.map