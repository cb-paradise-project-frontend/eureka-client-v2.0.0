import React from 'react';

import styles from './QuestionAvatar.module.scss';

import Avatar from '../../../../../components/Avatar';

export default function QuestionAvatar({ avatarUrl }) {
  return (
    <div className={styles.avatar_wrapper} >
      <Avatar avatarUrl={avatarUrl} />
    </div>
  );
}