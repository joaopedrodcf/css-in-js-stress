import React from 'react'
import styled, { keyframes } from 'styled-components';

const probe = keyframes`
  from {
    color: red;
  }

  to {
    color: blue;
  }
`;

const StyledComp = styled.div`
  animation: ${probe} 1s;
`;

export default ({onAnimationStart}) => <StyledComp onAnimationStart={onAnimationStart}>probe</StyledComp>;
