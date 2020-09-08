import React, { useState } from 'react';

import styles from './BankAccount.module.scss';

import FormInput from '../../../../../../components/FormInput';
import Button from '../../../../../../components/Button';
import handleInput from '../Utils/handleInput';

export default function BankAccount({ onSubmit }) {
  const [holder, setHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bsb, setBsb] = useState('');

  const introduction = `Please provide your bank details so you can get paid. We don't take any money from your account.`;
  const formInputElements = [
    {
      label: 'Account holder name', 
      placeholder: 'e.g. Alice', 
      value: holder, 
      handleChange: handleInput(setHolder), 
    },
    {
      label: 'Account number', 
      placeholder: 'e.g. 12345678', 
      value: accountNumber, 
      handleChange: handleInput(setAccountNumber), 
    },
    {
      label: 'BSB', 
      placeholder: 'e.g. 000-000', 
      value: bsb, 
      handleChange: handleInput(setBsb), 
    },
  ];

  const formInputs = formInputElements.map(({ label, placeholder, value, handleChange }) => (
    <FormInput 
      label={label}
      placeholder={placeholder}
      value={value}
      handleChange={handleChange}
      key={label}
    />
  ));  

  const handleSubmit = () => {
    const bankAccount = {
      holder,
      accountNumber,
      bsb, 
    }
    onSubmit(bankAccount);
  }

  return (
    <>
      <div className={styles.introduction} >
        {introduction}
      </div>
      <div className={styles.form_input} >
        {formInputs}
      </div>
      <div className={styles.button_wrapper} >
        <Button handleSubmit={handleSubmit} >
          Add Bank Account
        </Button>
      </div>
    </>
  );
}