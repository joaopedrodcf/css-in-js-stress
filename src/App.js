import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import NativeCss from "./benchmarks/native-css";
import StyledComponentsMixed from "./benchmarks/styled-components-mixed";
import StyledComponents from "./benchmarks/styled-components";
import Aphrodite from "./benchmarks/aphrodite";
import ReactJss from "./benchmarks/react-jss";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/native-css/" component={() => <NativeCss />} />
          <Route
            exact
            path="/styled-components-mixed/"
            component={() => <StyledComponentsMixed />}
          />
          <Route
            exact
            path="/styled-components/"
            component={() => <StyledComponents />}
          />
          <Route exact path="/aphrodite/" component={() => <Aphrodite />} />
          <Route exact path="/react-jss/" component={() => <ReactJss />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
