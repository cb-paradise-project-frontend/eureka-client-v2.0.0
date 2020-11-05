import React, { useEffect }  from 'react';
import { Link } from 'react-router-dom';
import styles from './PrivateNavDropDown.module.scss';

import Button from '../../../Button';
import PostTask from '../../../../pages/PostTask';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
// import LogOut from '../LogOut';

function PrivateNavDropDown({
  togglePostTask,
  pageToggler,
  showDropDown,
}) {
  const { pathname } = useLocation();

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

  useEffect(() => {
    if (showDropDown) pageToggler();
  }, [pathname]);

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