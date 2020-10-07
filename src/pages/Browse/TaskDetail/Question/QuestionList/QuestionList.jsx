import React from 'react';

import styles from './QuestionList.module.scss';

import QuestionAvatar from '../QuestionAvatar';

export default function QuestionList({ questions }) {
  const questionList = questions.map(({
    _id, askedBy: { avatar, name }, message,
  }) =>
    <div
      className={styles.question_wrapper}
      key={_id}
    >
      <QuestionAvatar avatarUrl={avatar} />
      <div className={styles.details} >
        <div className={styles.header} >{name}</div>
        <div className={styles.content} >{message}</div>
        <div className={styles.footer} >Reply</div>
      </div>
    </div>
  );

  return questionList;
};