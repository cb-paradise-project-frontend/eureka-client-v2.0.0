import React, { useState } from 'react';

import styles from './Question.module.scss';

function Question() {
  const [input, updateInput] = useState('');

  function handleChange(e) {
    updateInput(e.target.value);
  }

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
          <textarea 
            className = {styles.text_area}
            placeholder = {placeHolder}
            value = {input}
            onChange = {handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;