import React, { useState } from 'react';

import styles from './Birthday.module.scss';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import ErrorMessage from '../../../../components/ErrorMessage';
import onlyNumber from '../../../../utils/validators/input';
import { isDate, isAdult } from '../../../../utils/validators/submit';
import useForm from '../useForm';
import FORM from './form';

export default function Birthday({ storedValue, onSubmit }) {
  const form = useForm(FORM, storedValue);

  const {
    getData,
    handleDataChange,
  } = form;

  const formData = getData();

  const [testing, toggleTest] = useState(false);

  const formInputs = Object.keys(FORM).map((key) => {
    const { placeholder } = FORM[key];
    const value = formData[key];

    const handleChange = handleDataChange(key);

    return (
      <div
        className={styles.input_wrapper}
        key={placeholder}
      >
        <Input
          placeholder={placeholder}
          value={value}
          validator={onlyNumber}
          handleChange={handleChange}
          maxLength={placeholder.length}
        />
      </div>
    );
  });

  const getError = () => {
    const { day, month, year } = formData;

    return (!isDate(day, month, year) && 'Please enter a valid date.')
      || (!isAdult(day, month, year) && 'You must be 18 years or older to make an offer.')
      || false;
  };

  const handleSubmit = () => {
    if (getError()) {
      toggleTest(true);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <>
      <div className={styles.grouped_input} >
        <div className={styles.input_wrapper} >
          {formInputs}
        </div>
        <div className={styles.message_wrapper} >
          {testing && getError() &&
            <ErrorMessage>
              {getError()}
            </ErrorMessage>
          }
        </div>
      </div>
      <div className={styles.button_wrapper} >
        <Button onClick={handleSubmit} >
          Save Birthday
        </Button>
      </div>
    </>
  );
}
