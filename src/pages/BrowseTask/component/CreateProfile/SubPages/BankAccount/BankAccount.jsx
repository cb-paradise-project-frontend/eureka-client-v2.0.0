import React, { useState } from 'react';

import styles from './BankAccount.module.scss';

import FormInput from '../../../../../../components/FormInput';

export default function BankAccount({ onSubmit }) {
  const [holder, setHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bsb, setBsb] = useState('');

  const introduction = `Please provide your bank details so you can get paid. We don't take any money from your account.`;
  
  const handleInput = (setter) => {
    const callSetter = (e) => {
      setter(e.target.value);
    };
    return callSetter;
  }

  const handleSubmit = () => {
    const bankAccount = {
      holder,
      accountNumber,
      bsb, 
    }
    onSubmit(bankAccount);
  }

  const holderField = (
    <FormInput 
      label={'Account holder name'}
      value={holder}
      placeHolder={'e.g. Alice'}
      handleChange={handleInput(setHolder)}
    />
  );
  const accountNumberField = (
    <FormInput 
      label={'Account number'}
      placeHolder={'e.g. 12345678'}
      value={accountNumber}
      handleChange={handleInput(setAccountNumber)}
    />
  );
  const bsbField = (
    <FormInput 
      label={'BSB'}
      placeHolder={'e.g. 000-000'}
      value={bsb}
      handleChange={handleInput(setBsb)}
    />
  );

  return (
    <>
      <div className={styles.introduction} >
        {introduction}
      </div>
      <div className={styles.form_input} >
        {holderField}
        {accountNumberField}
        {bsbField}
      </div>
      <button 
        className={styles.submit_button}
        onClick={handleSubmit}
      >
        Add Bank Account
      </button>
    </>
  );
}