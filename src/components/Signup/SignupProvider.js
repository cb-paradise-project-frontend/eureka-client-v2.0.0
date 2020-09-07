import React, { useState } from 'react';

import SignupContext from './SignupContext';

const SignupProvider = ({children}) => {
  const [signupVisible, setSignupVisible] = useState(false);

  const showSignup = () => setSignupVisible(true);
  const hideSignup = () => setSignupVisible(false);

  return (
    <>
      <SignupContext.Provider value={{signupVisible, showSignup, hideSignup}}>
        {children}
      </SignupContext.Provider>
    </>
  );
}

export default SignupProvider;
