import React, { useContext } from 'react';
import { AuthContext } from '../../../../auth/Auth';
import { useHistory } from 'react-router-dom';
import { removeLocalToken } from '../../../../apis/utils';
import styled from 'styled-components';

const LogOutButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: none;
  background: transparent;
  color: #313849;

  &:hover {
    color: #3ABEF9;
  }
`

const LogOut = () => {
  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const onLogOut = () => {
    setUser(null);
    removeLocalToken();
    history.push('/');
  }

  return (
    <LogOutButton onClick={onLogOut}>Log Out</LogOutButton>
  )
}

export default LogOut;
