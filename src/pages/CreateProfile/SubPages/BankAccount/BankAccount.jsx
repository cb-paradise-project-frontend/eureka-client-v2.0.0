import React, { useState } from 'react';

import styles from './BankAccount.module.scss';

import FormInput from '../../../../components/FormInput';
import Button from '../../../../components/Button';
import handleInput from '../Utils/handleInput';
import { onlyNumber, addDashInNumber } from '../../../../utils/validators/input';

export default function BankAccount({ onSubmit }) {
  const [holder, setHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bsb, setBsb] = useState('');
  const [testing, toggleTest] = useState(false);
  const [hightLight, setHighLight] = useState();

  const introduction = `Please provide your bank details so you can get paid. We don't take any money from your account.`;
  const fieldElementList = [
    {
      label: 'Account holder name', 
      placeholder: 'Alice', 
      value: holder, 
      handleChange: handleInput(setHolder), 
    },
    {
      label: 'Account number', 
      placeholder: '12345678', 
      value: accountNumber, 
      maxLength: 9, 
      handleChange: handleInput(setAccountNumber, onlyNumber), 
    },
    {
      label: 'BSB', 
      placeholder: '000-000', 
      value: bsb, 
      maxLength: 7, 
      handleChange: handleInput(setBsb, addDashInNumber), 
    },
  ];

  const validations = [
    {
      label: 'Account number',
      condition: (accountNumber.length > 4 && accountNumber.length < 10),
      message: 'Invalid account number: must be 5 - 9 digits.',
    },
    {
      label: 'BSB',
      condition: (bsb.length > 6),
      message: 'Invalid routing number for AU. The number must contain both the bank code and the branch code, and should be in the format xxxxxx.',
    },
  ];

  const resetHighLight = () => {
    setHighLight('');
  };

  const fieldList = fieldElementList.map(({ 
    label, placeholder, value, maxLength, handleChange 
  }) => {
    const isError = (label === hightLight);
    return (
      <FormInput 
        label={label}
        placeholder={placeholder}
        value={value}
        handleChange={handleChange}
        isError={isError}
        maxLength={maxLength}
        onFocus={resetHighLight}
        key={label}
      />
    );
  });  

  const checkEmpty = () => {
    const emptyField = fieldElementList.find(({ value }) => !value);
    if(emptyField){
      const { label } = emptyField;
      const message = `${label} is required.`;
      return {label, message};
    }else{
      return false;
    };
  };
 
  const getError = () => {
    const error = validations.find(validation => !validation.condition);
    return checkEmpty() || error || false;
  };

  const handleSubmit = () => {
    if(getError()){
      toggleTest(true);
      setHighLight(getError().label);
    }else{
      const bankAccount = {
        holder, accountNumber, bsb, 
      };
      onSubmit(bankAccount);
      setHighLight('');
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
        <Button handleSubmit={handleSubmit} >
          Add Bank Account
        </Button>
      </div>
    </>
  );
}