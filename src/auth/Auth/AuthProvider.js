import React, { useState, useEffect } from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const extractUserFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return;
    const decoded = jwt_decode(token);
    setCurrentUser(decoded);
  };

  useEffect(() => {
    extractUserFromToken();
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
