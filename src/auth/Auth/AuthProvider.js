import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line camelcase
import AuthContext from './AuthContext';
import { checkUser, extractInfoFromToken, checkTokenExpiry, removeLocalToken } from './../../apis';

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);

  const checkTokenValidity = () => {
    const decoded = extractInfoFromToken();
    if (!decoded) return;
    const result = checkTokenExpiry(decoded);
    if (!result) {
      removeLocalToken();
      history.push('/');
    } return decoded;
  }

  const setUser = (decodedUser) => {
    if (!decodedUser) return;
    const { userId, firstName, lastName, email } = decodedUser;
    setCurrentUser({userId, firstName, lastName, email});
  }

  useEffect(() => {
    checkTokenValidity();
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
