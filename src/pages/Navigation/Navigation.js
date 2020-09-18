import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Navigation.module.scss';

import { AuthContext } from './../../auth/Auth';
import LoginModal from '../../components/LoginModal';
import SignupModal from '../../components/SignupModal'

function Navigation() {
  const pathName = useLocation().pathname;
  const postRoute = pathName === '/' ? '/create' : `${pathName}/create`;

  return (
    <AuthContext.Consumer>
      {
        ({authModalVisible, showLoginModal, showSignupModal}) => (
          <nav>
            <div className = {styles.navMenu}>
              <Link to="/" className = {styles.logo}>
                logo
              </Link>

              <div className = {styles.left}>
                <Link to={postRoute} className = {styles.postTask}>Post a task</Link>
                <div  className = {styles.categories}>
                  <a>Categories</a>
                  <div className = {styles.category_details}>
                  </div>
                </div>
                <Link to="/tasks" className = {styles.browseTasks}>Browse tasks</Link>
                <a className = {styles.howItWorks}>How it works</a>
              </div>

              <div className = {styles.right}>
                <a className = {styles.becomeTasker}>Become a Tasker</a>
                <button onClick={showLoginModal} className = {styles.logIn}>Log in</button>
                <button onClick={showSignupModal} className = {styles.signUp}>Sign up</button>
              </div>
              <>
                {
                  !!(authModalVisible.loginModal) && <LoginModal />
                }
              </>
              <>
                {
                  !!(authModalVisible.signupModal) && <SignupModal />
                }
              </>
            </div>
          </nav>
        )
      }
    </AuthContext.Consumer>
  );
}

export default Navigation;