import React from "react";
import injectSheet from "react-jss";

const styles = theme => ({
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

class Component extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <span className={classes.span}>{this.props.text}: </span>
        <input className={classes.input} placeholder="input search value" />
        <button className={classes.button}>Search</button>
      </div>
    );
  }
}

export default injectSheet(styles)(Component);
