import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PrivateNavDropDown.module.scss';

import Button from '../../../Button';

function PrivateNavDropDown({
  togglePostTask,
  pageToggler,
  handleLogout,
}) {
  const PostTaskButton = () => (
    <div className={styles.privateNavDropDownItem} >
      <Button.Text
        color={'navMobile'}
        onClick={() => {
          togglePostTask();
          pageToggler();
        }}
      >
        Post a Task
      </Button.Text>
    </div>
  );

  const LogOutButton = () => (
    <div className={styles.privateNavDropDownItem} >
      <Button.Text
        color={'navMobile'}
        onClick={() => {
          handleLogout();
          pageToggler();
        }}
      >
        Log Out
      </Button.Text>
    </div>
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