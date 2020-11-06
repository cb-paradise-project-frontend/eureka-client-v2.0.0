import React from 'react';
import { Link } from 'react-router-dom';

import styles from './DropDown.module.scss';

import Button from '../../../../components/Button';
import { AuthContext } from '../../../../auth/Auth';

const DropDownButton = ({ onClick, children }) => (
  <div className={styles.mobileNavDropDownItem}>
    <Button.Text
      color={'navMobile'}
      onClick={onClick}
    >
      {children}
    </Button.Text>
  </div>
);

export default function DropDown ({
  toggleLogin,
  toggleSignup,
  togglePostTask,
  pageToggler,
  handleLogout,
}) {
  const handlerCreator = (clickHandler) => (
    () => {
      clickHandler();
      pageToggler();
    }
  );

  const LoginButton = () => (
    <DropDownButton onClick={handlerCreator(toggleLogin)} >
      Log in
    </DropDownButton>
  );

  const SignupButton = () => (
    <DropDownButton onClick={handlerCreator(toggleSignup)} >
      Sign up
    </DropDownButton>
  );

  const PostTaskButton = () => (
    <DropDownButton onClick={handlerCreator(togglePostTask)} >
      Post task
    </DropDownButton>
  );

  const LogoutButton = () => (
    <DropDownButton onClick={handleLogout} >
      Log out
    </DropDownButton>
  );

  return (
    <AuthContext.Consumer>
      {({currentUser}) => (
        <div>
          {!currentUser ?
            <>
              <LoginButton />
              <SignupButton />
              <Link
                className={styles.mobileNavDropDownItem}
                to="/tasks"
              >
                Browse Tasks
              </Link>
            </>
            :
            <>
              <Link
                className={styles.mobileNavDropDownItem}
                to="/profile"
              >
                Profile
              </Link>
              <PostTaskButton />
              <Link
                className={styles.mobileNavDropDownItem}
                to="/tasks"
              >
                Browse Tasks
              </Link>
              <LogoutButton />
            </>
          }
        </div>
      )}
    </AuthContext.Consumer>
  );
}
