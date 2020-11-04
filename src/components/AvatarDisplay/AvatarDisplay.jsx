import React from 'react';

import styles from './AvatarDisplay.module.scss';

import AvatarFinder from '../Avatar/avatarFinder';

export default function AvatarDisplay({ avatarID }) {
  return (
    <div className={styles.avatar}>
      {avatarID
        ? <img src={AvatarFinder(avatarID)} alt="user avatar" />
        : (
          <div className={styles.icon} >
            <i className="ri-user-line ri-xl" ></i>
          </div>
        )
      }
    </div>
  );
}
