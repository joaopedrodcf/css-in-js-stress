import React, { PureComponent } from "react";
import now from "performance-now";

var parsedUrl = new URL(window.location.href);

const iterationDelay = 10;
const numberOfComponents =
  parseInt(parsedUrl.searchParams.get("noComponents")) || 1;
const maxIterations = parseInt(parsedUrl.searchParams.get("re-renders")) || 0;
const maxReloads = parseInt(parsedUrl.searchParams.get("reloads")) || 1;
const currentReload =
  parseInt(parsedUrl.searchParams.get("current-reload")) || 1;

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

  onFinishRender = () => {
    const end = now();
    this.results.push(end - this.startRender);
    console.log(this.results, 'onFinishRender');
    if (this.results.length < maxIterations) {     
      setTimeout(() => {
        this.setState(currentState => ({
          iteration: currentState.iteration + 1
        }));
      }, iterationDelay);
    } else {
      this.saveResults();
      this.reload();
    }
  }

  saveResults = () => {   
    const prevResultsJson = localStorage.getItem(this.props.name);
    let prevResults = [];
    if (prevResultsJson) prevResults = JSON.parse(prevResultsJson);
    prevResults.push(this.results);
    localStorage.setItem(this.props.name, JSON.stringify(prevResults));
  };

  reload = () => {
    if (currentReload < maxReloads) {
      parsedUrl.searchParams.set("current-reload", currentReload + 1);
      window.location.href = parsedUrl.href;
    } else {
      window.location.href = "/css-in-js-stress/#";
    }
  };

  componentDidUpdate = () => {
    this.onFinishRender();
  }

  render() {
    const Container = this.props.container;
    const Component = this.props.component;
    const Probe = this.props.probe;

    const components = [];
    for (let i = 0; i < numberOfComponents; i++) {
      components.push(
        <Component text={`${this.state.iteration}_${i}`} key={i} />
      );
    }
    this.startRender = now();
    return (
      <React.Fragment>
        <Container>{components}</Container>
        <Probe onAnimationStart={this.onFinishRender}></Probe>        
      </React.Fragment>
    );
  }
}

export default Scene;
