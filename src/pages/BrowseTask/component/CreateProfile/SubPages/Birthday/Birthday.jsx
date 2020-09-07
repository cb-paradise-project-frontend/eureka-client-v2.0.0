import React, { useState } from 'react';

import styles from './Birthday.module.scss';

import FormInput from '../../../../../../components/FormInput';
import handleInput from '../Utils/handleInput';
import Button from '../../../../../../components/Button';

export default function BirthDate({ onSubmit }) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const formInputElements = [
    {
      placeholder: 'DD', 
      value: day, 
      handleChange: handleInput(setDay), 
    },
    {
      placeholder: 'MM', 
      value: month, 
      handleChange: handleInput(setMonth), 
    },
    {
      placeholder: 'YYYY', 
      value: year, 
      handleChange: handleInput(setYear), 
    },
  ];

  const formInputs = formInputElements.map(({ placeholder, value, handleChange }) => (
    <div 
      className={styles.input_wrapper}
      key={placeholder}
    >
      <FormInput 
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
      />
    </div>
  ));  

  const handleSubmit = () => {
    const birthday = {
      day,
      month,
      year, 
    }
    onSubmit(birthday);
  }

  return (
    <>
      <div className={styles.grouped_input} >  
        {formInputs}
      </div>
      <div className={styles.button_wrapper} >
        <Button handleSubmit={handleSubmit} >
          Save Birthday
        </Button>
      </div>
    </>
  );
}