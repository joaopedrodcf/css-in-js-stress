import React from "react";
import { StyleSheet, css } from "aphrodite";
import { ThemeContext } from "./theme";

class Component extends React.PureComponent {
  render() {
    const theme = this.context;
    return (
      <div className={css(styles(theme).root)}>
        <span className={css(styles(theme).span)}>{this.props.text}: </span>
        <input
          className={css(styles(theme).input)}
          placeholder="input search value"
        />
        <button className={css(styles(theme).button)}>Search</button>
      </div>
    );
  }
}

Component.contextType = ThemeContext;
export default Component;

const styles = theme =>
  StyleSheet.create({
    root: {
      display: "inline-block",
      padding: "5px"
    },

    span: {
      color: theme.label.color
    },
    input: {
      padding: "2px 5px",
      border: "none",
      color: theme.input.color,
      backgroundColor: theme.input.backgroundColor
    },
    button: {
      padding: "5px 10px",
      border: "none",
      borderRadius: "5px",
      marginLeft: "5px",
      color: theme.button.color,
      backgroundColor: theme.button.backgroundColor,

      "&:hover": {
        cursor: "pointer",
        backgroundColor: theme.button.hover
      }
    }
  });
