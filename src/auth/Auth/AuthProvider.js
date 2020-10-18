import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line camelcase
import AuthContext from './AuthContext';
import { checkUser, extractUserFromToken } from './../../apis';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const setUser = () => {
    const decoded = extractUserFromToken();
    if (!decoded) return;
    const { userId, firstName, lastName, email } = decoded.user;
    setCurrentUser({userId, firstName, lastName, email});
  }

  useEffect(() => {
    checkUser();
    setUser();
  }, []);

  useEffect(() => {
    console.log('currentUser in context', currentUser);
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
