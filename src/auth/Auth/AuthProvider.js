import React, { useState, useEffect } from 'react';
// eslint-disable-next-line camelcase
import AuthContext from './AuthContext';
import { checkUser, extractInfoFromToken } from './../../apis';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userInitialized, setUserInitialized] = useState(false);

  const setUser = (decodedUser) => {
    if (!decodedUser) {
      setCurrentUser(null);
      return;
    }
    const { userId, firstName, lastName, email } = decodedUser;
    setCurrentUser({userId, firstName, lastName, email});
  }

  useEffect(() => {
    checkUser();
    const decoded = extractInfoFromToken();
    if (!decoded) {
      setUserInitialized(true);
      return;
    };
    setUser(decoded.user);
    setUserInitialized(true);
  }, []);

  // 暂时保留此console.log方便观察，请勿删除，发布时再一起删除
  useEffect(() => {
    console.log('currentUser in context', currentUser);
    console.log('initialized in context', userInitialized);
  }, [currentUser, userInitialized]);

  return (
    <AuthContext.Provider value={{ currentUser, setUser, userInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
