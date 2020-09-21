import React, { useState } from 'react';

import styles from './QuestionInput.module.scss';

import FormTextAreaInput from '../../../../../components/FormTextAreaInput';
import Avatar from '../../../../../components/Avatar';

export default function QuestionInput() {
  const [input, updateInput] = useState('');

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
    <>
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
    </>
  );
};