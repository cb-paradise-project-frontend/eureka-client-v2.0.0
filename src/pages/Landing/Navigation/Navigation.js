import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

import { AuthContext } from './../../../auth/Auth';
import Login from './../../../components/Login';
import Signup from './../../../components/Signup'

function Navigation() {
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
                <Link to="/create" className = {styles.postTask}>Post a task</Link>
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
                <Link onClick={showLoginModal} className = {styles.logIn}>Log in</Link>
                <Link onClick={showSignupModal} className = {styles.signUp}>Sign up</Link>
              </div>
              <>
                {
                  !!(authModalVisible.loginModal) ? <Login /> : null
                }
              </>
              <>
                {
                  !!(authModalVisible.signupModal) ? <Signup /> : null
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