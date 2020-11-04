import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './NavigationWeb.module.scss';

import logo from '../../../../assets/logo.svg';

import Categories from '../../../Navigation/components/Categories';
import ToggleContent from '../../../../components/ToggleContent';
import Button from '../../../../components/Button';
import PostTask from '../.././../../pages/PostTask';
import AuthModal from '../../../AuthModal';

class NavigationWeb extends Component {
  constructor() {
    super();

    this.state = { clicked:false }
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked}));
  }

  render() {
    const PostTaskButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.post_task_button_wrapper} >
            <Button
              color={'navy'}
              onClick={toggler}
              size={'navbar'}
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
          <div className={styles.login_button_wrapper} >
            <Button.Text
              color={'navy'}
              onClick={toggler}
            >
              Log in
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <AuthModal.Login pageToggler={toggler} />
        )}
      />
    );

    const SignupButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.signup_button_wrapper} >
            <Button.Text
              color={'navy'}
              onClick={toggler}
            >
              Sign up
            </Button.Text>
          </div>
        )}
        content={(toggler) => (
          <AuthModal.SignUp pageToggler={toggler} />
        )}
      />
    );

    return (
      <nav className={styles.navBar}>
        <div className={styles.navWebMenu}>
          <Link
            className={styles.logo}
            to="/"
          >
            <img src={logo} />
            <p>Brand</p>
          </Link>

          <div className={styles.left} >
            <PostTaskButton/>
            <Categories />
            <Link
              className={styles.browseTasks}
              to="/tasks"
            >
              Browse tasks
            </Link>
          </div>

          <div className={styles.right} >
            <SignupButton />
            <LoginButton />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationWeb;