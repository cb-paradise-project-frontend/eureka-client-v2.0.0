import React from 'react';

import styles from  './PostTaskStyles.module.scss';

import PostTaskForm from './PostTaskForm';

function PostTask() {
  return (
    <div className={styles.container}>
      <PostTaskForm />
    </div>
  );
}
export default PostTask;
