import React from "react";
import Scene from "../../components/Scene/Scene";

import Container from "./Container";
import Component from "./Component";
import Probe from "./Probe";

const Test = () => (
  <Scene container={Container} component={Component} probe={Probe} name="aphrodite" />
);

export default Test;
