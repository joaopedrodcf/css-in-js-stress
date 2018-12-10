import React from "react";
import theme from "./theme";
import { ThemeProvider } from "react-jss";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
);
