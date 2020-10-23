import React from 'react';

import styles from './EmptyTask.module.scss';

import PostTaskButton from '../../../components/PostTaskButton';

export default function EmptyTask() {
  return (
    <div className={styles.page_wrapper} >
      <div className={styles.background} />
      <div className={styles.notice} >
        Cannot find matched tasks.<br/>How about posting a new task?
      </div>
      <div className={styles.button_wrapper} >
        <PostTaskButton />
      </div>
    </div>
  );
}
