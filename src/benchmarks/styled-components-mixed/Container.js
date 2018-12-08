import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

export default ({ children, themeVariant }) => (
  <ThemeProvider theme={theme}>
    <div>{children}</div>
  </ThemeProvider>
);
