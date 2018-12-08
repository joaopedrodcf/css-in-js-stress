import React from "react";
import "./styles.css";

export default ({ text, themeVariant }) => {
  return (
    <div className={`search-box theme-variant-${themeVariant}`}>
      <span>{text}: </span>
      <input placeholder="input search value" />
      <button>Search</button>
    </div>
  );
};
