import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

import { Login, LoginContext} from './../../../components/Login';

function Navigation() {
  return (
    <LoginContext.Consumer>
      {
        ({loginVisible, showLogin}) => (
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
                <Link onClick={showLogin} className = {styles.logIn}>Log in</Link>
                <Link className = {styles.signUp}>Sign up</Link>
              </div>
              <>
                {
                  !!loginVisible ? <Login /> : null
                }
              </>
            </div>
          </nav>
        )
      }
    </LoginContext.Consumer>
  );
}

export default Navigation;