import React from "react";
import resultsBuilder from "../../utils/resultsBuilder";
import download from "../../utils/download";

import "./results.css";
class Results extends React.PureComponent {
  constructor(props) {
    super(props);
    const resultsJson = localStorage.getItem(props.name);
    let results = [];
    if (resultsJson) results = JSON.parse(resultsJson);
    this.state = { results: results };
  }

  getCsv = () => {
    const csv = resultsBuilder(this.props.name);
    download(`results-${this.props.name}.csv`, csv);
  };

  clearResults = () => {
    localStorage.removeItem(this.props.name);

    this.setState({ results: [] });
  };

  getResults = () => {
    try {
      const firstSum = this.state.results.reduce(
        (a, v) =>
          a +
          v.reduce((acc, value, index) => (index === 0 ? acc + value : acc), 0),
        0
      );
      const totalAvg = (firstSum / this.state.results.length).toFixed(0);

      const reRenderSum = this.state.results.reduce(
        (acc, v) =>
          acc + v.reduce((a, i, index) => (index === 0 ? a : a + i), 0),
        0
      );
      const reRenderCount =
        this.state.results.length * (this.state.results[0].length - 1);
      const reRenderAvg = (reRenderSum / reRenderCount).toFixed(0);

      return {
        totalAvg: totalAvg,
        reRenderCount: reRenderCount,
        reRenderAvg: reRenderAvg
      };
    } catch {
      this.clearResults();
    }
  };

  render() {
    if (this.state.results.length === 0)
      return (
        <span className="NoResults">No results available. Run test first.</span>
      );

    const { totalAvg, reRenderCount, reRenderAvg } = this.getResults();

    return (
      <React.Fragment>
        <div className="Results">
          First render time (avg of {this.state.results.length} renders):{" "}
          <strong>{totalAvg} ms</strong>
        </div>
        <div className="Results">
          Re-render time (avg of {reRenderCount} re-renders):{" "}
          <strong>{reRenderAvg} ms</strong>
        </div>
        <button className="ResultsButton" onClick={this.getCsv}>
          Download CSV
        </button>
        <button className="ResultsButton" onClick={this.clearResults}>
          Clean results
        </button>
      </React.Fragment>
    );
  }
}
export default Results;
