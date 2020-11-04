import React from 'react';

import styles from './ProfileNav.module.scss';

import ProfileAvatar from './ProfileAvatar';
import Navigation from './Navigation';

const ProfileNav = ({
  currentNav,
  handleNavChange,
  userName,
  avatarID,
  isAvatarShow,
  onAvatarShowChange,
}) => {
  const navList = ['Account', 'Payment', 'Tasks', 'Password'];
  return (
    <div className={styles.profile_nav}>
      <ProfileAvatar
        handleNavChange={handleNavChange}
        userName={userName}
        avatarID={avatarID}
        isAvatarShow={isAvatarShow}
        onAvatarShowChange={onAvatarShowChange}
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

