import React from 'react';

import styles from './EmptyTask.module.scss';

import PostTaskButton from '../../../components/PostTaskButton';

export default function EmptyTask() {
  return (
    <div className={styles.page_wrapper} >
      <div className={styles.notice} >
        You can post the first task on this website!<br/>Congratulation!
      </div>
      <div className={styles.background} />
      <div className={styles.button_wrapper} >
        <PostTaskButton />
      </div>
    </div>
  );
}
