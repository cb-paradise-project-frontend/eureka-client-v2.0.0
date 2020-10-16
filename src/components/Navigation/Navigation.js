import React from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';

import styles from './Navigation.module.scss';
import logo from '../../assets/logo.svg';

import { AuthContext } from './../../auth/Auth';
// import { NavContext } from './NavContext';
import LoginModal from '../../components/LoginModal';
import SignupModal from '../../components/SignupModal';
import Categories from '../Navigation/components/Categories';
import ToggleContent from '../../components/ToggleContent';
import Button from '../../components/Button';
import PostTask from './../../pages/PostTask';

const cx = className.bind(styles);

function Navigation() {

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
        <LoginModal pageToggler={toggler} />
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
        <SignupModal pageToggler={toggler} />
      )}
    />
  );

  return (
    <AuthContext.Consumer>
      {(currentUser) => (
        // <NavContext.Consumer>
        <div className={styles.web}>
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
                {/* <div className={styles.howItWorks}>
                    How it works
                </div> */}
              </div>

              <div className={styles.right} >
                <SignupButton />
                <LoginButton />
                <div className={styles.becomeTasker} >
                  <Button
                    color={'transparent'}
                    size={'small'}
                  >
                    Become a Tasker
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        // </NavContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
}

export default Navigation;
