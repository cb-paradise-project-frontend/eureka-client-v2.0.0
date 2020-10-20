import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line camelcase
import AuthContext from './AuthContext';
import { checkUser, extractInfoFromToken } from './../../apis';
import checkTokenExpiry from '../../apis/utils/checkTokenExpiry';
import removeLocalToken from '../../apis/utils/removeLocalToken';

const AuthProvider = ({ children }) => {
  // const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);

  const setUser = (decodedUser) => {
    const { userId, firstName, lastName, email } = decodedUser;
    setCurrentUser({userId, firstName, lastName, email});
  }

  useEffect(() => {
    checkUser();
    const decoded = extractInfoFromToken();
    if (!decoded) return;
    setUser(decoded.user);
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
