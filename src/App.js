import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import NativeCss from "./benchmarks/native-css";
import StyledComponentsMixed from "./benchmarks/styled-components-mixed";
import StyledComponents from "./benchmarks/styled-components";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/native-css/" component={() => <NativeCss />} />
          <Route
            path="/styled-components-mixed/"
            component={() => <StyledComponentsMixed />}
          />
          <Route
            path="/styled-components/"
            component={() => <StyledComponents />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
