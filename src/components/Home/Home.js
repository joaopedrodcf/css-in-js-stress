import React from "react";
import Results from "../Results/Results";
import TestRunner from "../TestRunner/TestRunner";

import "./home.css";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { numberOfComponents: 1000 };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="Home">
        <h1 className="Title">
          css-in-js-stress{" "}
          <span role="img" aria-label="Grinning Face With Sweat">
            😅
          </span>
        </h1>
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
          Running on react@16.12.0 / react-dom@16.12.0
          <br />
          Wanna add a lib / update version? 👉🏻{" "}
          <a href="https://github.com/matmalkowski/css-in-js-stress">
            submit a PR
          </a>
        </p>
        <div className="Settings">
          <div className="SettingsHeader">Settings</div>
          <span>How many components should be rendered?</span>
          <input
            name="numberOfComponents"
            onChange={this.handleInputChange}
            value={this.state.numberOfComponents}
          />
        </div>
        <div className="LibBlock">
          <TestRunner
            name="native-css"
            description="Simple CSS styles for layout + additional classes for theme only colors"
            numberOfComponents={this.state.numberOfComponents}
          />
          <Results name="native-css" />
        </div>
        <div className="LibBlock">
          <TestRunner
            name="styled-components-mixed"
            version="5.0.0-rc.2"
            description="Simple CSS styles for layout + StyledComponents wrapper for theme colors."
            numberOfComponents={this.state.numberOfComponents}
          />
          <Results name="styled-components-mixed" />
        </div>
        <div className="LibBlock">
          <TestRunner
            name="styled-components"
            version="5.0.0-rc.2"
            description="Pure StyledComponents with theme support"
            numberOfComponents={this.state.numberOfComponents}
          />
          <Results name="styled-components" />
        </div>
        <div className="LibBlock">
          <TestRunner
            name="aphrodite"
            version="2.4.0"
            description="Pure aphrodite with theme support implemented with ContexAPI wrapper."
            numberOfComponents={this.state.numberOfComponents}
          />
          <Results name="aphrodite" />
        </div>
        <div className="LibBlock">
          <TestRunner
            name="react-jss"
            version="10.0.0"
            description="Pure react-jss with in-build theme support"
            numberOfComponents={this.state.numberOfComponents}
          />
          <Results name="react-jss" />
        </div>
        <div className="Footer">
          <div>
            Hosted by <a href="https://pages.github.com/">GitHub</a>
          </div>
          <div>
            {" "}
            Made with{" "}
            <span role="img" aria-label="Love Heart">
              ❤️
            </span>{" "}
            by Maciej Malkowski (
            <a href="https://github.com/matmalkowski">@matmalkowski</a>){" "}
          </div>
          <div className="version">[version 0.7.4]</div>
        </div>
      </div>
    );
  }
}

export default Home;
