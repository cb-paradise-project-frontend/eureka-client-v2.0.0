import React from 'react';

import styles from './Question.module.scss';

import QuestionInput from './QuestionInput';

function Question({ questions }) {
  const title = 'QUESTION';
  const notice = `Please don't share personal info – insurance won't apply to tasks done privately!`;

  return (
    <div className={styles.question} >
      <div className={styles.title_bar} >
        <div className={styles.title} >
          {title}
        </div>
      </div>
      <div className={styles.notice} >
        {notice}
      </div>
      <div className={styles.input_wrapper} >
        <QuestionInput />
      </div>
    </div>
  );
};

export default Question;