import React  from 'react';
import { Link } from 'react-router-dom';
import styles from './PrivateNavDropDown.module.scss';

import ToggleContent from '../../../ToggleContent';
import Button from '../../../Button';
import PostTask from '../../../../pages/PostTask';
// import LogOut from '../LogOut';

function PrivateNavDropDown() {
  const PostTaskButton = () => (
    <ToggleContent
      toggle={(toggler) => (
        <div className={styles.privateNavDropDownItem} >
          <Button.Text
            color={'navMobile'}
            onClick={toggler}
          >
            Post a Task
          </Button.Text>
        </div>
      )}
      content={(toggler) => (
        <PostTask pageToggler={toggler} />
      )}
    />
  );

  // const LogOutButton = () => (
  //   <ToggleContent
  //     toggle={(toggler) => (
  //       <div className={styles.privateNavDropDownItem} >
  //         <Button.Text
  //           color={'navMobile'}
  //           onClick={toggler}
  //         >
  //           Logout
  //         </Button.Text>
  //       </div>
  //     )}
  //     content={(toggler) => (
  //       <LogOut pageToggler={toggler} />
  //     )}
  //   />
  // );

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
      {/* <LogOutButton /> */}
      {/* <LogOut /> */}
    </div>
  );
}

export default PrivateNavDropDown;