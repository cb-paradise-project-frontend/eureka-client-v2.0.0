import React from 'react';

import styles from './ProfileNav.module.scss';

import Avatar from './Avatar';
import Navigation from './Navigation';

const ProfileNav = ({
  currentNav,
  handleNavChange,
}) =>{
  const navList = ['Account', 'Payment', 'Tasks', 'Password'];
  return (
    <div className={styles.profile_nav}>
      <Avatar
        handleNavChange={handleNavChange}
      />
      <div className={styles.navigation}>
        {
          navList.map((nav) => (
              <Navigation key={nav}
                handleNavChange={handleNavChange}
                currentNav={currentNav}
              >
                {nav}
              </Navigation>
          ))
        }
      </div>
    </div>
)};

export default ProfileNav;

