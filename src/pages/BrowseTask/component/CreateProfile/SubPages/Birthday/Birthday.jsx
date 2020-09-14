import React, { useState } from 'react';

import styles from './Birthday.module.scss';

import FormInput from '../../../../../../components/FormInput';
import handleInput from '../Utils/handleInput';
import Button from '../../../../../../components/Button';
import ErrorMessage from '../../../../../../components/ErrorMessage';
import onlyNumber from '../../../../../../utils/validators/input';
import { isDate, isAdult } from '../../../../../../utils/validators/submit';

export default function BirthDate({ onSubmit }) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [testing, toggleTest] = useState(false);


  const formInputElements = [
    {
      placeholder: 'DD', 
      value: day, 
      handleChange: handleInput(setDay, onlyNumber), 
    },
    {
      placeholder: 'MM', 
      value: month, 
      handleChange: handleInput(setMonth, onlyNumber), 
    },
    {
      placeholder: 'YYYY', 
      value: year, 
      handleChange: handleInput(setYear, onlyNumber), 
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
        maxLength={placeholder.length}
      />
    </div>
  ));  

  const validations = [
    {
      condition: (isDate(day, month, year)),
      message: 'Please enter a valid date.',
    },
    {
      condition: (isAdult(day, month, year)),
      message: 'You must be 18 years or older to make an offer.',
    },
  ];

  const getError = () => {
    const error = validations.find(validation => validation.condition === false);
    return error ? error.message : false;
  }

  const handleSubmit = () => {
    if(getError()){
      toggleTest(true);
    }else{
      const birthday =  new Date(year, month-1, day);
      onSubmit(birthday);
      toggleTest(false);
    }
  }

  return (
    <>
      <div className={styles.grouped_input} >
        <div className={styles.input_wrapper} >
          {formInputs}
        </div>  
        <div className={styles.message_wrapper}>
          {(testing && getError()) && 
            <ErrorMessage>
              {getError()}
            </ErrorMessage>
          }
        </div>
      </div>
      <div className={styles.button_wrapper} >
        <Button handleSubmit={handleSubmit} >
          Save Birthday
        </Button>
      </div>
    </>
  );
}