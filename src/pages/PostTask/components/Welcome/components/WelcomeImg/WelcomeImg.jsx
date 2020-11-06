import React from 'react';
import styled from 'styled-components';
import cover from './cover.svg';

const Img = styled.img`
  padding: 20px 0px;
  width: 25em;
  height: auto;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`

function WelcomeImg() {
  return (
    <Img
      src={cover}
      alt="Welcome"
    />
  )
}

export default WelcomeImg;