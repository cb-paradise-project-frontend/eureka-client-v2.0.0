import React, {useState, useEffect} from 'react';
import { auth } from './../../firebase';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authModalVisible, setAuthModalVisible] = useState({
    loginModal: false,
    signupModal: false,
  })

  const showLoginModal = () => {
    setAuthModalVisible({
      loginModal: true,
      signupModal: false,
    })
  }

  const showSignupModal = () => {
    setAuthModalVisible({
      loginModal: false,
      signupModal: true,
    })
  }

  const hideAuthModal = () => {
    setAuthModalVisible({
      loginModal: false,
      signupModal: false,
    })
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('user in auth', user);
      console.log('Auth provider', authModalVisible);
      setCurrentUser(user);
    });
  }, [authModalVisible]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;