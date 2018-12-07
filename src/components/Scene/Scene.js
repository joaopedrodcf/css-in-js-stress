import React, { PureComponent } from "react";
import now from "performance-now";
import download from "../../utils/download";
import resultsBuilder from "../../utils/resultsBuilder";

var parsedUrl = new URL(window.location.href);

const iterationDelay = 10;
const themeVariant = parsedUrl.searchParams.get("theme") || "red";
const maxIterations = parsedUrl.searchParams.get("re-renders") || 10;
const maxReloads = parsedUrl.searchParams.get("reloads") || 1;
const currentReload = parsedUrl.searchParams.get("current-reload") || 1;

class Scene extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { iteration: 0 };
    this.createdAt = now();
    this.results = [];
    if (currentReload === 1) {
      localStorage.removeItem(this.props.name);
    }
  }

  startNextIteration = () => {
    this.end = now();
    if (this.state.iteration < maxIterations) {
      this.results.push(this.end - this.startRender);
      setTimeout(() => {
        this.setState(currentState => ({
          iteration: currentState.iteration + 1
        }));
      }, iterationDelay);
    } else {
      this.finished = now();
      this.saveResults();
      this.reload();
    }
  };

  saveResults = () => {
    const save = {
      iterations: this.results,
      total: this.finished - this.createdAt - maxIterations * iterationDelay
    };
    const prevResultsJson = localStorage.getItem(this.props.name);
    let prevResults = [];
    if (prevResultsJson) prevResults = JSON.parse(prevResultsJson);
    prevResults.push(save);
    localStorage.setItem(this.props.name, JSON.stringify(prevResults));
  };

  reload = () => {
    if (currentReload < maxReloads) {
      parsedUrl.searchParams.set("current-reload", currentReload + 1);
      window.location.href = parsedUrl.href;
    } else {
      const csv = resultsBuilder(this.props.name);
      // download(`results-${this.props.name}.csv`, csv);
    }
  };

  componentDidMount = () => {
    this.startNextIteration();
  };

  componentDidUpdate = () => {
    this.startNextIteration();
  };

  render() {
    const Container = this.props.container;
    const Component = this.props.component;

    const components = [];
    for (let i = 0; i < 100; i++) {
      components.push(<Component text={i} key={i} />);
    }
    this.startRender = now();
    return <Container themeVariant={themeVariant}>{components}</Container>;
  }
}

export default Scene;
