import React from "react";
import Results from "../Results/Results";
import TestRunner from "../TestRunner/TestRunner";

import "./home.css";

export default () => {
  return (
    <div className="Home">
      <h1 className="Title">css-in-js-stress 😅</h1>
      <h4>Bunch of CSS-in-JS libraries compared for render times.</h4>
      <p>
        Benchmarks will run on clean page according to params provided for the
        test. After desired number of full render cycles (clean landing /
        re-render mounted component) full detailed times can be downloaded as
        CSV file.
      </p>
      <p>
        Note that implementations are assuming some theming (static for CSS,
        dynamic for CSS-in-JS) so all implementations relay on ContextAPI /
        class overrides for CSS to implement themes
      </p>
      <p>
        Running on react@16.6.3 / react-dom@16.6.3
        <br />
        Wanna add a lib / update version? 👉🏻{" "}
        <a href="https://github.com/monkey3310/css-in-js-stress">submit a PR</a>
      </p>
      <div className="LibBlock">
        <TestRunner name="native-css" />
        <Results name="native-css" />
      </div>
      <div className="LibBlock">
        <TestRunner name="styled-components" />
        <Results name="styled-components" />
      </div>
    </div>
  );
};
