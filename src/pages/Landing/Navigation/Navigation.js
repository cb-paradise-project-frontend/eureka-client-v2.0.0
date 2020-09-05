import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

function Navigation() {
  return (
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
          <Link to="/login" className = {styles.logIn}>Log in</Link>
          <Link to="/signup" className = {styles.signUp}>Sign up</Link>
        </div>
        
      </div>
    </nav>
  );
}

export default Navigation;