import React, { useState } from 'react';

import styles from './Question.module.scss';

import FormTextAreaInput from '../../../../components/FormTextAreaInput';
import Avatar from '../../../../components/Avatar';

function Question() {
  const [input, updateInput] = useState('');

  const title = 'QUESTION';
  const notice = `Please don't share personal info – insurance won't apply to tasks done privately!`;
  const placeHolder = 'Ask a question';
  const WORD_LIMIT = 1500; 

  const Footer = () => (
    <>
      <button 
        className={styles.submit_button}
        disabled={input.length < 1}
      >
        Send
      </button>
      <div className={styles.word_count} >
        {WORD_LIMIT - input.length}
      </div>
    </>
  );

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
        <div className={styles.avatar_wrapper} >
          <Avatar />
        </div>
        <div className={styles.input} >
          <FormTextAreaInput
            size={'large'}
            placeholder={placeHolder}
            displayValue={input}
            onInputChange={updateInput}
            maxLength={WORD_LIMIT}
          />
          <div className={styles.input_footer} >
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;