import React from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';

import styles from './Navigation.module.scss';

import { AuthContext } from './../../auth/Auth';
import { NavContext } from './NavContext';
import LoginModal from '../../components/LoginModal';
import SignupModal from '../../components/SignupModal';
import Categories from '../Navigation/components/Categories';
import ToggleContent from '../../components/ToggleContent';
import Button from '../../components/Button';
import PostTask from '../PostTask';

const cx = className.bind(styles);

function Navigation() {

  const PostTaskButton = () => (
    <ToggleContent
      toggle={(toggler) => (
        <div className={styles.post_task_button_wrapper} >
          <Button
            color={'pink'}
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

  // const navBarBackground = cx({
  //   navBarBg: true, 
  //   active: navBar,
  // });

  return (
    <AuthContext.Consumer>
      {(currentUser) => (
        <NavContext.Consumer>
          {(navBar, browseTasks) => (
            <nav className={cx({
              navBar: true, 
              active: navBar,
            })}>
              <div className={styles.navMenu}>
                <Link
                  className={styles.logo}
                  to="/"
                >
                  logo
                </Link>

                <div className={styles.left} >
                  <PostTaskButton />
                  <Categories />
                  <Link
                    className={cx({
                      browseTasks: true, 
                      browseTasksActive: navBar,
                    })}
                    to="/tasks"
                    >
                    {console.log(navBar)}
                    Browse tasks
                  </Link>
                  <div className={cx({
                      howItWorks: true, 
                      howItWorksActive: navBar,
                    })} 
                  >
                    How it works
                  </div>
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
          )}
        </NavContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
}

export default Navigation;
