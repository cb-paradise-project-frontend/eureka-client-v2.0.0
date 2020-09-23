import React from 'react';

import styles from './Question.module.scss';

import QuestionInput from './QuestionInput';
import QuestionList from './QuestionList';

export default function Question({ questions, askQuestion }) {
  const title = `QUESTION(${questions.length})`;
  const notice = "Please don't share personal info – insurance won't apply to tasks done privately!";

  return (
    <div className={styles.question_wrapper} >
      <div className={styles.title} >
        {title}
      </div>
      <div className={styles.notice} >
        {notice}
      </div>
      <div className={styles.input_wrapper} >
        <QuestionInput onSubmit={askQuestion} />
      </div>
      <div className={styles.question_list_wrapper}>
        <QuestionList questions={questions} />
      </div>
    </div>
  );
}
