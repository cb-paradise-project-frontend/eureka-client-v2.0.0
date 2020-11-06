import React, { Component, useState } from 'react';

import styles from './Private.module.scss';

// import NavigationMobile from '../components/NavigationMobile';
// import NavigationWebPrivate from '../components/NavigationWebPrivate';
// import NavigationMobilePrivate from '../components/NavigationMobilePrivate';

import { AuthContext } from '../../../auth/Auth';
import Button from '../../Button';
import LogOut from '../components/LogOut';
import PrivateNavDropDown from '../components/PrivateNavDropDown';

export default function Private({
  toggleLogin,
  toggleSignup,
  togglePostTask,
}) {
  const [showDropDown, dropDownToggler] = useState(false);

  const toggleDropDown = () => {
    dropDownToggler((prevState) => !prevState);
  };

  const LoginButton = () => (
    <div className={styles.login_button_wrapper} >
      <Button.Text
        color={'navy'}
        onClick={toggleLogin}
      >
        Log in
      </Button.Text>
    </div>
  );

  const SignupButton = () => (
    <div className={styles.signup_button_wrapper} >
      <Button.Text
        color={'navy'}
        onClick={toggleSignup}
      >
        Sign up
      </Button.Text>
    </div>
  );

  return (
    <AuthContext.Consumer>
      {({currentUser}) => (
        <div className={styles.user}>
          {!currentUser ?
            <>
              <SignupButton />
              <LoginButton /> 
            </>
            :
            <>
              <div
                className={styles.userPrivate}
                onClick={toggleDropDown}
              >
                <i className={"far fa-user-circle"}></i>
              </div>
              <LogOut />
              <div className={showDropDown ? styles.privateNavDropDownActive : styles.privateNavDropDown}>
                <PrivateNavDropDown
                  togglePostTask={togglePostTask}
                  pageToggler={toggleDropDown}
                  showDropDown={showDropDown}
                />
              </div>
            </>
          }
          </div>
      )}
    </AuthContext.Consumer>
  );
}