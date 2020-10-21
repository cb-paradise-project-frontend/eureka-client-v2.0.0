import React from 'react';

import styles from './Comment.module.scss';

export default function Comment({
  commentInput, commentList, commentCount,
}) {
  const title = `COMMENT(${commentCount})`;
  const notice = "Please don't share personal info – insurance won't apply to tasks done privately!";

  return (
    <div className={styles.comment_wrapper} >
      <div className={styles.title} >
        {title}
      </div>
      <div className={styles.notice} >
        {notice}
      </div>
      <div className={styles.input_wrapper} >
        {commentInput}
      </div>
      <div className={styles.comment_list_wrapper}>
        {commentList}
      </div>
    </div>
  );
}
