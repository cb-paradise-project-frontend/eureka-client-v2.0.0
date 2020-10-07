import React from 'react';

import styles from './Question.module.scss';

import QuestionInput from './QuestionInput';
import QuestionList from './QuestionList';

function Question({ questions, askQuestion }) {
  const questionCount = questions && questions.length;
  const title = `QUESTION(${questionCount || 0})`;
  const notice = `Please don't share personal info – insurance won't apply to tasks done privately!`;

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
      {questions &&
        <div className={styles.question_list_wrapper}>
          <QuestionList questions={questions} />
        </div>
      }
    </div>
  );
};

export default Question;