import React from "react";
import theme, { ThemeContext } from "./theme";

export default ({ children }) => (
  <ThemeContext.Provider value={theme}>
    <div>{children}</div>
  </ThemeContext.Provider>
);
