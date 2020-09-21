import React from 'react';

import styles from './QuestionList.module.scss';

import Avatar from '../../../../../components/Avatar';

export default function QuestionList({ questions }) {
  const questionList = questions.map(({ 
    poster:{ id, avatar, name }, content 
  }) =>
    <div 
      className={styles.question_wrapper} 
      key={id}
    >
      <div className={styles.avatar_wrapper} >
        <Avatar avatarUrl={avatar} />
      </div>
      <div className={styles.details} >
        <div className={styles.header} >{name}</div>
        <div className={styles.content} >{content}</div>
        <div className={styles.footer} >Reply</div>
      </div>
    </div>
  );

  return questionList;
};