import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './DropDown.module.scss';

// import logo from '../../../../assets/logo.svg';
// import postTaskLogo from '../../../../assets/postTaskLogo.svg';

import ToggleContent from '../../../../components/ToggleContent';
import Button from '../../../../components/Button';
import { AuthContext } from '../../../../auth/Auth';
import LogOut from '../LogOut';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function DropDown ({
  toggleLogin,
  toggleSignup,
  togglePostTask,
  pageToggler,
  showDropDown,
}) {
  const { pathname } = useLocation(); 

  const handlerCreator = (clickHandler) => (
    () => {
      clickHandler();
      pageToggler();
    }
  );

  const LoginButton = () => (
    <div className={styles.mobileNavDropDownItem}>
      <Button.Text
        color={'navMobile'}
        onClick={handlerCreator(toggleLogin)}
      >
        Log in
      </Button.Text>
    </div>
  );

  const SignupButton = () => (
    <div className={styles.mobileNavDropDownItem} >
      <Button.Text
        color={'navMobile'}
        onClick={handlerCreator(toggleSignup)}
      >
        Join Airtasker
      </Button.Text>
    </div>
  );

  const PostTaskButton = () => (
    <div className={styles.mobileNavDropDownItem} >
      <Button.Text
        color={'navMobile'}
        onClick={handlerCreator(togglePostTask)}
      >
        Post a Task
      </Button.Text>
    </div>
  );

  useEffect(() => {
    if(showDropDown) pageToggler();
  }, [pathname]);

  return (
    // <div className={this.state.clicked ? styles.mobileNavDropDownActive : styles.mobileNavDropDown}>
    <AuthContext.Consumer>
      {({currentUser}) =>(
        <div>
          {
            !currentUser ?
            <>
              <LoginButton />
              <SignupButton />
              <Link
                className={styles.mobileNavDropDownItem}
                to="/tasks"
              >
                Browse Tasks
              </Link>
            </>
            :
            <>
              <Link
                className={styles.mobileNavDropDownItem}
                to="/profile"
              >
                Profile
              </Link>
              <PostTaskButton />
              <Link
                className={styles.mobileNavDropDownItem}
                to="/tasks"
              >
                Browse Tasks
              </Link>
              <div className={styles.mobileNavDropDownItem}>
                <LogOut />
              </div> 
            </>
          }
        </div>
      )}
    </AuthContext.Consumer>
  );
}


export default DropDown;