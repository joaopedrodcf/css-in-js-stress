import React from "react";
import { StyleSheet, css } from "aphrodite/";

const sheet = StyleSheet.create({
  probe: {
    animationName: [
      {
        from: {
          color: "red"
        },

        to: {
          color: "blue"
        }
      }
    ],
    animationDuration: "1s"
  }
});

const Probe = ({ onAnimationStart }) => {
  return (
    <div onAnimationStart={onAnimationStart} className={css(sheet.probe)} />
  );
};

export default Probe;
