import React from "react";
import "./test-runner.css";

class TestRunner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { reRenders: 0, reloads: 10 };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  runTest = () => {
    const url = new URL(`${window.location.href}${this.props.name}`);
    url.searchParams.set("reloads", this.state.reloads);
    url.searchParams.set("re-renders", this.state.reRenders);
    url.searchParams.set("noComponents", this.props.numberOfComponents);
    window.location.href = url.href;
  };

  render() {
    return (
      <React.Fragment>
        <div className="TestRunnerHeader">
          <strong>{this.props.name}</strong>
          {this.props.version && (
            <span className="version">[v{this.props.version}]</span>
          )}
          <button onClick={this.runTest}>Run test</button>
        </div>
        <div className="TestRunnerDesc">{this.props.description}</div>
        <div className="TestRunner">
          <span>Full renders:</span>
          <input
            name="reloads"
            onChange={this.handleInputChange}
            value={this.state.reloads}
          />
          <span> || Re-renders per load:</span>
          <input
            name="reRenders"
            onChange={this.handleInputChange}
            value={this.state.reRenders}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TestRunner;
