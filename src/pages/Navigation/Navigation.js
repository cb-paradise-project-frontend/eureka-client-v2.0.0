import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

import { AuthContext } from './../../auth/Auth';
import LoginModal from '../../components/LoginModal';
import SignupModal from '../../components/SignupModal';
import Categories from '../Navigation/components/Categories';
import ToggleContent from '../../components/ToggleContent';
import Button from '../../components/Button';
import PostTask from '../PostTask/PostTask';

function Navigation() {
  const PostTaskModal = () => (
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

  return (
    <AuthContext.Consumer>
      {
        ({authModalVisible, showLoginModal, showSignupModal}) => (
          <nav>
            <div className = {styles.navMenu}>
              <Link to="/" className = {styles.logo}>
                logo
              </Link>

              <div className = {styles.left}>
                <PostTaskModal />
                <Categories />
                <Link to="/tasks" className = {styles.browseTasks}>Browse tasks</Link>
                <div className = {styles.howItWorks}>How it works</div>
              </div>

              <div className = {styles.right}>
                <button className = {styles.becomeTasker}>Become a Tasker</button>
                <button onClick={showLoginModal} className = {styles.logIn}>Log in</button>
                <button onClick={showSignupModal} className = {styles.signUp}>Sign up</button>
              </div>
              <>
                {
                  !!(authModalVisible.loginModal) && <LoginModal />
                }
              </>
              <>
                {
                  !!(authModalVisible.signupModal) && <SignupModal />
                }
              </>
            </div>
          </nav>
        )
      }
    </AuthContext.Consumer>
  );
}

export default Navigation;