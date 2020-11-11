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

const SpinnerIcon = styled.div`
  display: inline-block;
  color: white;
  animation: ${rotate} 2s linear infinite;
`;

const Spinner = () => {
  return (
    <SpinnerIcon>
      <i className="ri-loader-4-fill ri-3x" ></i>
    </SpinnerIcon>
  );
}

export default Spinner;
