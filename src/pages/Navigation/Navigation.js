import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

import { AuthContext } from './../../auth/Auth';
import LoginModal from '../../components/LoginModal';
import SignupModal from '../../components/SignupModal';
import Categories from '../Navigation/components/Categories';
import ToggleContent from '../../components/ToggleContent';
import Button from '../../components/Button';
import PostTask from '../PostTask';

function Navigation() {
  const PostTaskButton = () => (
    <ToggleContent
      toggle={(toggler) => (
        <div className={styles.post_task_button_wrapper} >
          <Button
            color={'pink'}
            onClick={toggler}
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
            color={'white'}
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
            color={'white'}
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
        <nav>
          <div className={styles.navMenu}>
            <Link
              className={styles.logo}
              to="/"
            >
              logo
            </Link>

            <div className={styles.left}>
              <PostTaskButton />
              <Categories />
              <Link
                className={styles.browseTasks}
                to="/tasks"
              >
                Browse tasks
              </Link>
              <div className={styles.howItWorks} >
                How it works
              </div>
            </div>

            <div className={styles.right} >
              <SignupButton />
              <LoginButton />
              <div className={styles.becomeTasker} >
                <Button color={'transparent'} >
                  Become a Tasker
                </Button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </AuthContext.Consumer>
  );
}

export default Navigation;
