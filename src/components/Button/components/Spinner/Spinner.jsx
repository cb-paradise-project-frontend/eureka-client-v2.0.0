import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled.i`
  color: white;
  animation: ${rotate} infinite 1.4s linear;
  margin-right: 8px;
  line-height: 16px;
`;

const Spinner = () => {
  return (
    <SpinnerIcon className="ri-loader-2-line ri-1x" />
  );
}

export default Spinner;
