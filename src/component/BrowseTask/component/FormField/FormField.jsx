import React from 'react';

import styles from './FormField.module.scss';

export default function FormField({ label, placeHolder, input, setInput }) {

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div className={styles.form_field} >
      <div className={styles.label} >
        {label}
      </div>
      <div className={styles.input_wrapper} >
        <input 
          placeholder={placeHolder} 
          onChange={handleInput}
          value={input}
        />
      </div>
    </div>
  );
}