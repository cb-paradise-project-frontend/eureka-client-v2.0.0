import React from 'react';
import styled from 'styled-components';
import cover from './cover.svg';

const Container = styled.div`
  width:100%;
  text-align: center;
  /* margin: 0 auto; */
`
const Img = styled.img`
  padding: 20px 0px;
  width: 25em;
  height: auto;
  margin: 0 auto;
  align-items: center;
  @media (max-width: 768px) {
    width: 80%;
  }
`

function WelcomeImg() {
  return (
    <Container>
      <Img
        src={cover}
        alt="Welcome"
      />
    </Container>
  )
}

export default WelcomeImg;