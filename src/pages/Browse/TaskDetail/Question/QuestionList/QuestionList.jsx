import React from 'react';

import styles from './QuestionList.module.scss';

import QuestionAvatar from '../QuestionAvatar';

export default function QuestionList({ questions }) {
  const questionList = questions.map(({ 
    poster:{ id, avatar, name }, content 
  }) =>
    <div 
      className={styles.question_wrapper} 
      key={id}
    >
      <QuestionAvatar avatarUrl={avatar} />
      <div className={styles.details} >
        <div className={styles.header} >{name}</div>
        <div className={styles.content} >{content}</div>
        <div className={styles.footer} >Reply</div>
      </div>
    </div>
  );

  return questionList;
};