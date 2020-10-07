import React from 'react';

import styles from './Question.module.scss';

import QuestionInput from './QuestionInput';
import QuestionList from './QuestionList';

function Question({ questionList, addQuestion }) {
  const title = `QUESTION(${questionList.length})`;
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
        <QuestionInput addQuestion={addQuestion} />
      </div>
      {questionList.length > 0 &&
        <div className={styles.question_list_wrapper}>
          <QuestionList questions={questionList} />
        </div>
      }
    </div>
  );
};

export default Question;