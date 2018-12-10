import React from "react";
import injectSheet from "react-jss";

const styles = {
  "@keyframes react-jss-probe-animation": {
    from: {
      color: "red"
    },

    to: {
      color: "blue"
    }
  },
  probe: {
    animation: "1s react-jss-probe-animation"
  }
};

const Probe = ({ classes, children, onAnimationStart }) => {
  return (
    <div className={classes.probe} onAnimationStart={onAnimationStart}>
      Probe
    </div>
  );
};

export default injectSheet(styles)(Probe);
