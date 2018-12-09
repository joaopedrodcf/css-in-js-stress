import React from "react";

export default ({ children }) => (
  <React.Fragment>
    {React.Children.map(children, c =>
      React.cloneElement(c, { themeVariant: "purple" })
    )}
  </React.Fragment>
);
