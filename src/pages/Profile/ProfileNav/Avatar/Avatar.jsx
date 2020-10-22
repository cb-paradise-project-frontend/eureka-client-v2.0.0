import React from 'react';

import styles from './Avatar.module.scss';

const Avatar = ({
  handleNavChange,
  userName,
}) => (
  <div className={styles.avatar_wrapper}>
    <div className={styles.avatar}>
      <img className={styles.icon} alt="userAvatar"></img>
    </div>
    <div
      className={styles.print_name}
      onClick={() => handleNavChange('Account')}
    >
      {userName}
    </div>
  </div>
);

export default Avatar;
