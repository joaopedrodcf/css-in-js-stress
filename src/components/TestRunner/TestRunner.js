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
    window.location.href = url.href;
  };

  render() {
    return (
      <div className="TestRunner">
        <strong>{this.props.name}</strong>
        {this.props.version && (
          <span className="version">[v{this.props.version}]</span>
        )}
        <span>|| Full renders:</span>
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
        <button onClick={this.runTest}>Run test</button>
      </div>
    );
  }
}

export default TestRunner;
