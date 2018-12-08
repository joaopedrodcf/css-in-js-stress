import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import NativeCss from "./benchmarks/native-css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/native-css/" component={() => <NativeCss />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
