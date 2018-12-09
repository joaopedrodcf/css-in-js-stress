import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
);
