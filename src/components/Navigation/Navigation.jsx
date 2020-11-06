import React, { useContext, useMemo, useState } from 'react';

import styles from './Navigation.module.scss';

import Public from './Public';
import Private from './Private';
import AuthModal from '../AuthModal';
import PostTask from '../../pages/PostTask';
import useToggleContent from '../../hooks/useToggleContent';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/Auth';
import { removeLocalToken } from '../../apis';

function Navigation() {
  const [LoginContent, toggleLogin] = useToggleContent();
  const [SignupContent, toggleSignup] = useToggleContent();
  const [PostTaskContent, togglePostTask] = useToggleContent();

  const history = useHistory();
  
  const { setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    removeLocalToken();
    history.push('/');
  }

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navWebMenu}>
          <div className={styles.left}>
            <Public
              toggleLogin={toggleLogin}
              toggleSignup={toggleSignup}
              togglePostTask={togglePostTask}
              handleLogout={handleLogout}
            />
          </div>

          <div className={styles.right}>
            <Private
              toggleLogin={toggleLogin}
              toggleSignup={toggleSignup}
              togglePostTask={togglePostTask}
              handleLogout={handleLogout}
            />
          </div>
        </div>
      </nav>
      <LoginContent>
        <AuthModal.Login pageToggler={toggleLogin} />
      </LoginContent>
      <SignupContent>
        <AuthModal.SignUp pageToggler={toggleSignup} />
      </SignupContent>
      <PostTaskContent>
        <PostTask pageToggler={togglePostTask} />
      </PostTaskContent>
    </>
  )
}

export default Navigation;