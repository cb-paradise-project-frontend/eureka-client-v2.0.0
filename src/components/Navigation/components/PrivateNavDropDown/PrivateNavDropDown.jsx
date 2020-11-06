import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PrivateNavDropDown.module.scss';

import Button from '../../../Button';

function PrivateNavDropDown({
  togglePostTask,
  pageToggler,
  handleLogout,
}) {
  const DropDownButton = ({ onClick, children }) => (
    <div className={styles.privateNavDropDownItem} >
      <Button.Text
        color={'navMobile'}
        onClick={() => {
          onClick();
          pageToggler();
        }}
      >
        {children}
      </Button.Text>
    </div>
  );

  const PostTaskButton = () => (
    <DropDownButton onClick={togglePostTask} >
      Post a Task
    </DropDownButton>
  );

  const LogOutButton = () => (
    <DropDownButton onClick={handleLogout} >
      Log Out
    </DropDownButton>
  );

  return (
    <div className={styles.private}>
      <Link
        className={styles.privateNavDropDownItem}
        to="/profile"
      >
        Profile
      </Link>
      <PostTaskButton />
      <Link
        className={styles.privateNavDropDownItem}
        to="/tasks"
      >
        Browse Tasks
      </Link>
      <LogOutButton />
    </div>
  );
}

export default PrivateNavDropDown;