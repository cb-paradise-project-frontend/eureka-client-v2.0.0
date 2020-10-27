import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useToggleContent } from '../ToggleContent';

const slideIn = keyframes`
  0% {
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
  }

  15% {
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }

  85% {
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }

  100% {
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  padding: 8px 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  -webkit-box-shadow: 0 4px 12px rgba(0,0,0,.15);
  background: #ffffff;
  border-radius: 4px;
  font-size: 14px;
  color: #292b32;
  font-weight: normal;
  position: fixed;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 900;
  min-width: 200px;
  pointer-events: none;
  animation: ${slideIn} ease-in-out 3s both;
`;

const Notification = ({ children }) => {
  const [ToggleContent, toggler] = useToggleContent(true);

  const hideNotification = () => {
    setTimeout(() => {
      toggler();
    }, 3000);
  }

  useEffect(() => {
    hideNotification();
  }, []);

  return (
    <ToggleContent toggler={hideNotification}>
      <Wrapper>
        {children}
      </Wrapper>
    </ToggleContent>
  );
}

export default Notification;
