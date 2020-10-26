import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 8px 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  -webkit-box-shadow: 0 4px 12px rgba(0,0,0,.15);
  background: #ffffff;
  border-radius: 4px;
  font-size: 14px;
  color: #777777;
  font-weight: normal;
  position: fixed;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2010;
  min-width: 200px;
  pointer-events: none;
`;

const Notification = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Notification;
