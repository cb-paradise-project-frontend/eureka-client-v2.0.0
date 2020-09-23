import React, { useEffect, useState } from 'react';

import styles from './QuestionInput.module.scss';

import FormTextAreaInput from '../../../../../components/FormTextAreaInput';
import QuestionAvatar from '../QuestionAvatar';

const testUser = {
  id: 3,
  name: 'Tony',
  avatar: '',
};

export default function QuestionInput({ onSubmit }) {
  const [input, updateInput] = useState('');

  useEffect(() => {
    updateInput('');
  }, [onSubmit]);

  const placeHolder = 'Ask a question';
  const WORD_LIMIT = 1500;

  const handleSubmit = () => {
    onSubmit(input, testUser);
  };

  const Footer = () => (
    <>
      <button
        className={styles.submit_button}
        disabled={input.length < 1}
        onClick={handleSubmit}
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
      <QuestionAvatar />
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
}
