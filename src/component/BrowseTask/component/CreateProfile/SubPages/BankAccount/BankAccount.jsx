import React, { useState } from 'react';

import styles from './BankAccount.module.scss';

import FormField from '../../../FormField';

export default function BankAccount({ onSubmit }) {
  const [holder, setHolder] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bsb, setBsb] = useState('');

  const introduction = `Please provide your bank details so you can get paid. We don't take any money from your account.`;
  
  const handleSubmit = () => {
    const bankAccount = {
      holder,
      accountNumber,
      bsb, 
    }
    onSubmit(bankAccount);
  }

  const holderField = (
    <FormField 
      label={'Account holder name'}
      placeHolder={'e.g. Alice'}
      input={holder}
      setInput={setHolder}
    />
  );
  const accountNumberField = (
    <FormField 
      label={'Account number'}
      placeHolder={'e.g. 12345678'}
      input={accountNumber}
      setInput={setAccountNumber}
    />
  );
  const bsbField = (
    <FormField 
      label={'BSB'}
      placeHolder={'e.g. 000-000'}
      input={bsb}
      setInput={setBsb}
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