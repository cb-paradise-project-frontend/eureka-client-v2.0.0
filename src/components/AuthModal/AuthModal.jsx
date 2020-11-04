import React, { useState } from 'react';

import LoginModal from '../LoginModal';
import SignupModal from '../SignupModal';
import ForgotPassword from '../ForgotPassword';

const AuthModal = ({ pageToggler, page }) => {
  const [currentPage, setPage] = useState(page);

  const pageList = {
    Login: LoginModal,
    SignUp: SignupModal,
    ForgotPassword,
  };

  const CurrentModal = pageList[currentPage];

  return (
    <CurrentModal
      setPage={setPage}
      pageToggler={pageToggler}
    />
  );
};

const Login = (props) => (
  <AuthModal page="Login" {...props} />
);

const SignUp = (props) => (
  <AuthModal page="SignUp" {...props} />
);

AuthModal.Login = Login;
AuthModal.SignUp = SignUp;

export default AuthModal;
