import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationMobile.module.scss';

import logo from '../../../../assets/logo.svg';
import postTaskLogo from '../../../../assets/postTaskLogo.svg';

import { AuthContext } from './../../../../auth/Auth';
// import { NavContext } from './NavContext';
import LoginModal from '../../../../components/LoginModal';
import SignupModal from '../../../../components/SignupModal';
import Categories from '../../../Navigation/components/Categories';
import ToggleContent from '../../../../components/ToggleContent';
import Button from '../../../../components/Button';
import PostTask from './../../../../pages/PostTask';

class NavigationMobile extends Component {
  constructor() {
    super();

    this.state = { clicked:false }
  }
  
  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked}))
  }

  render () {
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
  
    const LoginButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.mobileNavDropDownItem}>
            <Button.Text
              color={'navMobile'}
              onClick={toggler}
            >
              Log in
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <LoginModal pageToggler={toggler} />
        )}
      />
    );

    const LoginButtonII = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.mobileNavDropDownItem}>
            <Button.Text
              color={'navMobile'}
              onClick={toggler}
            >
              <div className={styles.mobileNavDropDownItem}>
                Log in
              </div>
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <LoginModal pageToggler={toggler} />
        )}
      />
    );
  
    const SignupButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.mobileNavDropDownItem} >
            <Button.Text
              color={'navMobile'}
              onClick={toggler}
            >
              Join Airtasker
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <SignupModal pageToggler={toggler} />
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
            <i className={this.state.clicked ? 'ri-close-circle-line' : 'ri-menu-line'}></i>
          </div>

          <Link
            className={this.state.clicked ? styles.none : styles.mobileLogo}
            to="/"
          >
            <img src={logo} />
            <p>Brand</p>
          </Link>

          <div className={styles.responsivePostTask}>
            {/* <img src={postTaskLogo} /> */}
            <PostTaskIconButton />
            <div className={this.state.clicked ? styles.postTaskButtonActive : styles.postTaskButton}>
              <PostTaskButton/>
            </div>
          </div>
        </div>

        <div className={this.state.clicked ? styles.mobileNavDropDownActive : styles.mobileNavDropDown}>
          <div
            className={styles.mobileNavDropDownItem}>
            Categories for Posters
          </div>
          <div>
            {/* <div className={styles.mobileNavDropDownItem}>
              <LoginButton />
            </div> */}
            <LoginButton />
            <SignupButton />
            <Link
              className={styles.mobileNavDropDownItem}
              to="/tasks"
            >
              Browse Tasks
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationMobile;