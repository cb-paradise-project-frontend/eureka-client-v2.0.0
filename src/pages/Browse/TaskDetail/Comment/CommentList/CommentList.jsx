import React from 'react';

import styles from './CommentList.module.scss';

import CommentAvatar from '../CommentAvatar';

export default function CommentList({ comments }) {
  const commentList = comments.map(({
    _id, askedBy: { avatar, name, _id: userId }, message,
  }) => (
    <div
      className={styles.comment_wrapper}
      key={_id}
    >
      <CommentAvatar avatarUrl={avatar} />
      <div className={styles.details} >
        <div className={styles.header} >{name || `user ${userId}`}</div>
        <div className={styles.content} >{message}</div>
      </div>
    </div>
  ));

  return commentList;
}
