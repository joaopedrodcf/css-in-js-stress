import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NativeCss from "./benchmarks/native-css";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/native-css/" component={() => <NativeCss />} />
      </Router>
    );
  }
}

export default App;
