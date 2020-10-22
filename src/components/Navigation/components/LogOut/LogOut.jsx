import React, { useContext } from 'react';
import { AuthContext } from '../../../../auth/Auth';
import { useHistory } from 'react-router-dom';
import { removeLocalToken } from '../../../../apis/utils';


const LogOut = () => {
  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const onLogOut = () => {
    setUser(null);
    removeLocalToken();
    history.push('/');
  }

  return (
    <button onClick={onLogOut}>Log Out</button>
  )
}

export default LogOut;
