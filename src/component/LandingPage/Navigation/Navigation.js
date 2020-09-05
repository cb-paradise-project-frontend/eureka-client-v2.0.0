import React from 'react';

import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav>
      <div className = {styles.navMenu}>
        <div className = {styles.logo}>
          logo
        </div>

        <div className = {styles.left}>
          <a className = {styles.postTask}>Post a task</a>
          <div  className = {styles.categories}>
            <a>Categories</a>
            <div className = {styles.category_details}>
              
            </div>
          </div>
          <a className = {styles.browseTasks}>Browse tasks</a>
          <a className = {styles.howItWorks}>How it works</a>
        </div>

        <div className = {styles.right}>
          <a className = {styles.becomeTasker}>Become a Tasker</a>
          <a className = {styles.logIn}>Log in</a>
          <a className = {styles.signUp}>Sign up</a>
        </div>
        
      </div>
    </nav>
  );
}

export default Navigation;