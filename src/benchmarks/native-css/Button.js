import React from "react";
import "./styles.css";

export default ({ text, themeVariant }) => {
  const className = `primary theme-variant-${themeVariant}`;
  return <button className={className}>{text}</button>;
};
