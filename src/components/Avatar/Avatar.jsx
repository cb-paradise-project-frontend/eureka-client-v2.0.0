import React from 'react';

import styles from './Avatar.module.scss';

import AvatarFinder from './avatarFinder';

export default function Avatar({ avatarID }) {
  return (
    <div className={styles.avatar} >
      {avatarID ? (
        <img src={AvatarFinder(avatarID)} alt="avatar" />
      ) : (
        <button className={styles.empty_avatar}>choose an avatar</button>
      )}
    </div>
  );
}
