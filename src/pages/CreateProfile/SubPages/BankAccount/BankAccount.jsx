import React, { useState } from 'react';

import styles from './BankAccount.module.scss';

import Button from '../../../../components/Button';
import { onlyNumber, addDashInNumber } from '../../../../utils/validators/input';
import Input from '../../../../components/Input';

export default function BankAccount({ storedValue, onSubmit }) {
  const [holder, setHolder] = useState(storedValue.holder);
  const [accountNumber, setAccountNumber] = useState(storedValue.accountNumber);
  const [bsb, setBsb] = useState(storedValue.bsb);
  const [testing, toggleTest] = useState(false);
  const [highlightField, setHighlightField] = useState();

  const introduction = `Please provide your bank details so you can get paid. We don't take any money from your account.`;
  const fieldElementList = [
    {
      name: 'Account holder name',
      placeholder: 'Alice',
      value: holder,
      handleChange: setHolder,
    },
    {
      name: 'Account number',
      placeholder: '12345678',
      value: accountNumber,
      maxLength: 9,
      validator: onlyNumber,
      handleChange: setAccountNumber,
    },
    {
      name: 'BSB',
      placeholder: '000-000',
      value: bsb,
      maxLength: 7,
      validator: addDashInNumber,
      handleChange: setBsb,
    },
  ];

  const validations = [
    {
      name: 'Account number',
      condition: (accountNumber.length > 4 && accountNumber.length < 10),
      message: 'Invalid account number: must be 5 - 9 digits.',
    },
    {
      name: 'BSB',
      condition: (bsb.length > 6),
      message: 'Invalid routing number for AU. The number must contain both the bank code and the branch code, and should be in the format xxxxxx.',
    },
  ];

  const resetHighLight = () => {
    setHighlightField('');
  };

  const fieldList = fieldElementList.map(({
    name, placeholder, value, maxLength, validator, handleChange,
  }) => (
    <div className={styles.input_wrapper} key={name} >
      <Input
        label={name}
        placeholder={placeholder}
        value={value}
        validator={validator}
        handleChange={handleChange}
        isError={name === highlightField}
        maxLength={maxLength}
        onFocus={resetHighLight}
      />
    </div>
  ));

  const findEmptyField = () => {
    const emptyField = fieldElementList.find(({ value }) => !value);
    if (!emptyField) return false;
    const { name } = emptyField;
    return { name, message: `${name} is required.` };
  };

  const getError = () => {
    const error = validations.find(validation => !validation.condition);
    return findEmptyField() || error || false;
  };

  const handleSubmit = () => {
    if (getError()) {
      toggleTest(true);
      setHighlightField(getError().name);
    } else {
      const bankAccount = {
        holder, accountNumber, bsb,
      };
      onSubmit(bankAccount);
      setHighlightField('');
      toggleTest(false);
    }
  };

  return (
    <>
      {testing && getError() &&
        <div className={styles.message_box} >
          {getError().message}
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
