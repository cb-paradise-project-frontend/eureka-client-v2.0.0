import React from 'react';
import PostTaskButton from '../../../components/PostTaskButton';

import styles from './EmptyTask.module.scss';

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
