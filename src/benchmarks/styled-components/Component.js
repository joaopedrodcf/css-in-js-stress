import React from "react";
import styled from "styled-components";

const Component = ({ text, className }) => {
  return (
    <div className={className}>
      <span>{text}: </span>
      <input placeholder="input search value" />
      <button>Search</button>
    </div>
  );
};

export default styled(Component)`
  display: inline-block;
  padding: 5px;

  span {
    color: ${props => props.theme.label.color};
  }
  input {
    padding: 2px 5px;
    border: none;
    color: ${props => props.theme.input.color};
    background-color: ${props => props.theme.input.backgroundColor};
  }
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
    color: ${props => props.theme.button.color};
    background-color: ${props => props.theme.button.backgroundColor};

    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme.button.hover};
    }
  }
`;
