import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PrivateNavDropDown.module.scss';

import Button from '../../../Button';
// import LogOut from '../LogOut';

function PrivateNavDropDown({
  togglePostTask,
  pageToggler,
  showDropDown,
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
    </div>
  );
}

export default PrivateNavDropDown;