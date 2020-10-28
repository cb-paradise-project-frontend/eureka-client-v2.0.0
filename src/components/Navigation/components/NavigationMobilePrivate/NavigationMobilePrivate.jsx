import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationMobilePrivate.module.scss';

import logo from '../../../../assets/logo.svg';
import postTaskLogo from '../../../../assets/postTaskLogo.svg';

import ToggleContent from '../../../ToggleContent';
import Button from '../../../Button';
import PostTask from '../../../../pages/PostTask';
import LogOut from '../LogOut';

class NavigationMobilePrivate extends Component {
  constructor() {
    super();

    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  }

  render() {
    const PostTaskButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.post_task_button_wrapper} >
            <Button
              color={'mint'}
              onClick={toggler}
              size={'small'}
            >
              Post a Task
            </Button>
          </div>
        )}
        content={(toggler) => (
          <PostTask pageToggler={toggler} />
        )}
      />
    );

    const PostTaskDropDown = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.mobileNavDropDownItem} >
            <Button.Text
              color={'navMobile'}
              onClick={toggler}
            >
              Post a Task
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <PostTask pageToggler={toggler} />
        )}
      />
    );

    const PostTaskIconButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.post_task_icon_button_wrapper}>
            <Button.IconButton
              onClick={toggler}
            >
              <img src={postTaskLogo} />
            </Button.IconButton>
          </div>
        )}
        content={(toggler) => (
          <PostTask pageToggler={toggler} />
        )}
      />
    );

    return (
      <nav className={styles.mobileNavBar}>
        <div className={styles.mobileNavMenu}>
          <div
            className={styles.responsiveButton}
            onClick={this.handleClick}
          >
            <i className={this.state.clicked ? 'far fa-times-circle' : 'fas fa-bars'}></i>
          </div>

          <Link
            className={this.state.clicked ? styles.none : styles.mobileLogo}
            to="/"
          >
            <img src={logo} />
            <p>Brand</p>
          </Link>

          <div className={styles.responsivePostTask}>
            <PostTaskIconButton />
            <div
              className={this.state.clicked ? styles.postTaskButtonActive : styles.postTaskButton}
            >
              <PostTaskButton/>
            </div>
          </div>
        </div>

        <div
          className={this.state.clicked ? styles.mobileNavDropDownActive : styles.mobileNavDropDown}
        >
          <Link
            className={styles.mobileNavDropDownItem}
            to="/profile"
          >
            Profile
          </Link>
          <PostTaskDropDown />
          <Link
            className={styles.mobileNavDropDownItem}
            to="/tasks"
          >
            Browse Tasks
          </Link>
          <LogOut />
        </div>
      </nav>
    );
  }
}

export default NavigationMobilePrivate;