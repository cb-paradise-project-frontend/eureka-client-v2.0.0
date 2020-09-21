import React from 'react';

import styles from './Avatar.module.scss';

export default function Avatar({ avatarUrl }) {
  return (
    <div className={styles.avatar} >
      {avatarUrl &&
        <img src={avatarUrl} alt="avatar" />
      }
    </div>
  );
};
