import React, { Component, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Public.module.scss';

import logo from '../../../assets/logo.svg';
import postTaskLogo from '../../../assets/postTaskLogo.svg';

import Button from '../../Button';
import DropDown from '../components/DropDown';

// import NavigationMobile from '../components/NavigationMobile';
// import NavigationWeb from '../components/NavigationWeb';

export default function Public({ 
  toggleLogin,
  toggleSignup,
  togglePostTask,
 }) {
  const [showDropDown, dropDownToggler] = useState(false);

  const { pathname } = useLocation();

  const toggleDropDown = () => {
    dropDownToggler((prevState) => !prevState);
  };

  useEffect(() => {
    if(showDropDown) toggleDropDown();
  }, [pathname]);

  const PostTaskButton = () => (
    <Button
      color={'navy'}
      onClick={togglePostTask}
      size={'navbar'}
    >
      Post a Task
    </Button>
  );

  const PostTaskIconButton = () => (
    <div className={styles.post_task_icon_button_wrapper}>
      <Button.IconButton
        onClick={togglePostTask}
      >
        <img src={postTaskLogo} alt={postTaskLogo} />
      </Button.IconButton>
    </div>
  );

  const PostTaskButtonMobile = () => (
    <div className={styles.post_task_button_wrapper} >
      <Button
        color={'mint'}
        onClick={togglePostTask}
        size={'small'}
      >
        Post a Task
      </Button>
    </div>
  );

  return (
    <div className={styles.Public}>
      <div
        className={styles.responsiveButton}
        onClick={toggleDropDown}
      >
        <i className={showDropDown ? 'far fa-times-circle' : 'fas fa-bars'}></i>
      </div>

      <Link
        className={styles.logo}
        to="/"
      >
        <img src={logo} alt={logo} />
        <p>Eureka</p>
      </Link>

      <div className={styles.left} >
        <PostTaskButton />
        <Link
          className={styles.browseTasks}
          to="/tasks"
        >
          Browse tasks
        </Link>
      </div>

      <div className={styles.responsivePostTask}>
        <PostTaskIconButton />
        <div className={showDropDown ? styles.postTaskButtonActive : styles.postTaskButton}>
          <PostTaskButtonMobile />
        </div>
      </div>

      <div className={showDropDown ? styles.mobileNavDropDownActive : styles.mobileNavDropDown}>
        <DropDown
          toggleLogin={toggleLogin}
          toggleSignup={toggleSignup}
          togglePostTask={togglePostTask}
          pageToggler={toggleDropDown}
        />
      </div>
    </div>
  );
}
