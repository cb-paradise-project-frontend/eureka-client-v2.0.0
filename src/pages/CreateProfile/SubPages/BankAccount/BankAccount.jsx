import React, { useState } from 'react';

import styles from './BankAccount.module.scss';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import useForm from '../useForm';
import FORM from './form';

export default function BankAccount({ storedValue, onSubmit }) {
  const form = useForm(FORM, storedValue);

  const [testing, toggleTesting] = useState(false);
  const [highlightField, setHighlightField] = useState();

  const {
    getData,
    handleDataChange,
    findEmptyField,
    getErrorMessage,
  } = form;

  const formData = getData();

  const introduction = "Please provide your bank details so you can get paid. We don't take any money from your account.";

  const resetHighLight = () => {
    setHighlightField('');
  };

  const fieldList = Object.keys(FORM).map((key) => {
    const {
      label, placeholder, maxLength, validator,
    } = FORM[key];
    const value = formData[key];
    const handleChange = handleDataChange(key);

    return (
      <div className={styles.input_wrapper} key={key} >
        <Input
          label={label}
          placeholder={placeholder}
          value={value}
          validator={validator}
          handleChange={handleChange}
          isError={key === highlightField}
          maxLength={maxLength}
          onFocus={resetHighLight}
        />
      </div>
    );
  });

  const error = findEmptyField() || getErrorMessage();

  const handleSubmit = () => {
    if (error) {
      toggleTesting(true);
      setHighlightField(error.field);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <>
      {testing && error &&
        <div className={styles.message_box} >
          {error.message}
        </div>
      }
      <div className={styles.introduction} >
        {introduction}
      </div>
      <div className={styles.form_input} >
        {fieldList}
      </div>
      <div className={styles.button_wrapper} >
        <Button onClick={handleSubmit} >
          Add Bank Account
        </Button>
      </div>
    </>
  );
}
