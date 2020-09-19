import React, { useState } from 'react';

import styles from './Question.module.scss';

import FormTextAreaInput from '../../../../../../components/FormTextAreaInput';

function Question() {
  const [input, updateInput] = useState('');

  const title = 'QUESTION';
  const notice = `Please don't share personal info – insurance won't apply to tasks done privately!`;
  const placeHolder = 'Ask a question';

  return (
    <div className ={styles.question}>
      <div className = {styles.title_bar}>
        <div className = {styles.title}>
          {title}
        </div>
      </div>
      <div className = {styles.notice}>
        {notice}
      </div>
      <div className = {styles.input_wrapper}>
        <div className = {styles.avatar}/>
        <div className = {styles.input}>
          <FormTextAreaInput
            size={'large'}
            placeholder={placeHolder}
            displayValue={input}
            onInputChange={updateInput}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;