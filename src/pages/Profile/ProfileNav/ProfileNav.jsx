import React from 'react';

import styles from './ProfileNav.module.scss';

import Avatar from './Avatar';
import Navigation from './Navigation';

const ProfileNav = ({
  currentNav,
  handleNavChange,
}) => (
    <div className={styles.profile_nav}>
      <Avatar />
      <div className={styles.navigation}>
        <Navigation 
          handleNavChange={handleNavChange}
          currentNav={currentNav}
        >
          Account
        </Navigation>
        <Navigation 
          handleNavChange={handleNavChange}
          currentNav={currentNav}
        >
          Payment
        </Navigation>
        <Navigation 
          handleNavChange={handleNavChange}
          currentNav={currentNav}
        >
          Tasks
        </Navigation>
        <Navigation 
          handleNavChange={handleNavChange}
          currentNav={currentNav}
        >
          Password
        </Navigation>
      </div>
    </div>
);

export default ProfileNav;
