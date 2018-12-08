import React from "react";
import styled from "styled-components";
import "./styles.css";

const Component = ({ text, className }) => {
  return (
    <div className={`search-box ${className}`}>
      <span>{text}: </span>
      <input placeholder="input search value" />
      <button>Search</button>
    </div>
  );
};

export default styled(Component)`
  span {
    color: ${props => props.theme.label.color};
  }
  input {
    color: ${props => props.theme.input.color};
    background-color: ${props => props.theme.input.backgroundColor};
  }
  button {
    color: ${props => props.theme.button.color};
    background-color: ${props => props.theme.button.backgroundColor};
    &:hover {
      background-color: ${props => props.theme.button.hover};
    }
  }
`;
