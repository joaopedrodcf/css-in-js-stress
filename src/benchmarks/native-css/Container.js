import React from "react";

export default ({ children, themeVariant }) => (
  <React.Fragment>
    {React.Children.map(children, c =>
      React.cloneElement(c, { themeVariant: themeVariant })
    )}
  </React.Fragment>
);
