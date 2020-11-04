import React from 'react';

import styles from './CommentAvatar.module.scss';

import AvatarDisplay from '../../../../../components/AvatarDisplay';

export default function CommentAvatar({ avatarId }) {
  return (
    <div className={styles.avatar_wrapper} >
      <AvatarDisplay avatarID={avatarId} />
    </div>
  );
}
