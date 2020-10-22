import React, { useContext } from 'react';
import { AuthContext } from '../../../../auth/Auth';
import { useHistory } from 'react-router-dom';
import { removeLocalToken } from '../../../../apis/utils';
import styled from 'styled-components';

const LogOutButton = styled.button`
  color:#426ad2;
  text-align: center;
  cursor: pointer;
  display: block;
  font-size: 13px;
  letter-spacing: .4px;
  text-decoration: none;
  border: none;
  outline: none;
  font-weight: 600;
  background-color: transparent;
  margin: 0 15px;

  &:hover {
    color: #008fb4;
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
