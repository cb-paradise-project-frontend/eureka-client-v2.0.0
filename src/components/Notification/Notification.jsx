import React, { useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { FetchContext } from '../../apis/Fetch';

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
  display: flex;
`;

const theme = {
  success: '#7db343',
  error: '#d32f2f',
};

const StatusIcon = styled.div`
  color: ${props => theme[props.status]};
  margin-right: 8px;

  >i {
    font-size: 18px;
    vertical-align: middle;
  }
`;

const Notification = ({status}) => {
  const { notification, setNotification } = useContext(FetchContext);

  const hideNotification = () => {
    setTimeout(() => {
      setNotification({
        status: null,
        message: null,
      });
      console.log('hide notification');
    }, 3000);
  }

  useEffect(() => {
    hideNotification();
  }, []);

  return (
      <Wrapper>
        <StatusIcon status={status}>
          {status === 'success' ? <i className="ri-checkbox-circle-fill" /> : null}
          {status === 'error' ? <i className="ri-error-warning-fill" /> : null}
        </StatusIcon>
        {notification.message}
      </Wrapper>
  );
}

export default Notification;
