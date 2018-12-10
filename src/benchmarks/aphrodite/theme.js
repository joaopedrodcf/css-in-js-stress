import React from 'react';

const theme = {
  label: {
    color: "#9c27b0"
  },
  input: {
    color: "#ba68c8",
    backgroundColor: "#e1bee7"
  },
  button: {
    color: "white",
    backgroundColor: "#9c27b0",
    hover: "#ab47bc"
  }
};

export const ThemeContext = React.createContext(
  theme
)

export default theme;
