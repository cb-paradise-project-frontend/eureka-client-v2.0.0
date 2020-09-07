import React, { useState, useEffect } from 'react';
import LoginContext from './LoginContext';

const LoginProvider = ({children}) => {
  const [loginVisible, setLoginVisible] = useState(false);

  const showLogin = () => setLoginVisible(true);
  const hideLogin = () => setLoginVisible(false);

  useEffect(() => {
    console.log(loginVisible);
  }, [loginVisible]);

  return (
    <>
      <LoginContext.Provider value={{loginVisible, showLogin, hideLogin}}>
        {children}
      </LoginContext.Provider>
    </>
  )
}

export default LoginProvider;