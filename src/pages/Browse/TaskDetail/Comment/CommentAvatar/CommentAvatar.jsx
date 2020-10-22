import React from 'react';

import styles from './CommentAvatar.module.scss';

import Avatar from '../../../../../components/Avatar';

export default function CommentAvatar({ avatarUrl }) {
  return (
    <div className={styles.avatar_wrapper} >
      <Avatar avatarUrl={avatarUrl} />
    </div>
  );
}
