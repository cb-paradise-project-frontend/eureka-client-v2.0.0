import React from 'react';

import styles from './Avatar.module.scss';

const Avatar = ({
  handleNavChange
}) => (
  <div className={styles.avatar_wrapper}>
    <div className={styles.avatar}>
      <img className={styles.icon}></img>
    </div>
    <div 
      className={styles.print_name}
      onClick={() => handleNavChange('Account')}
    >
      FirstName LastName
    </div>
  </div>
);

export default Avatar;
