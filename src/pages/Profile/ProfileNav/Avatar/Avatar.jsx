import React from 'react';

import styles from './Avatar.module.scss';

const Avatar = ({
  handleNavChange,
  userName,
}) => {
  const { firstName, lastName } = userName;

  return (
  <div className={styles.avatar_wrapper}>
    <div className={styles.avatar}>
      <img className={styles.icon} alt="userAvatar"></img>
    </div>
    <div
      className={styles.print_name}
      onClick={() => handleNavChange('Account')}
    >
      {`${firstName} ${lastName}`}
    </div>
  </div>
  );
};

export default Avatar;
