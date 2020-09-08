import React, { useState } from 'react';

import styles from './BillingAddress.module.scss';

import FormInput from '../../../../../../components/FormInput';
import handleInput from '../Utils/handleInput';
import Button from '../../../../../../components/Button';

export default function BillingAddress({ onSubmit }) {
  const [lineOne, setLineOne] = useState('');
  const [lineTwo, setLineTwo] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');

  const introduction = `Your billing address will be verified before you can receive payments.`;
  const information = 'Your address will never been shown publicly, it is only used for account verification purposes.';
  const formInputElements = [
    {
      label: 'Address Line 1', 
      value: lineOne, 
      handleChange: handleInput(setLineOne), 
    },
    {
      label: 'Address Line 2 (optional)', 
      value: lineTwo, 
      handleChange: handleInput(setLineTwo), 
    },
    {
      label: 'Suburb', 
      value: suburb, 
      handleChange: handleInput(setSuburb), 
    },
    {
      label: 'State', 
      value: state, 
      handleChange: handleInput(setState), 
    },
    {
      label: 'Postcode', 
      value: postcode, 
      handleChange: handleInput(setPostcode), 
    },
    {
      label: 'Country', 
      value: country, 
      handleChange: handleInput(setCountry), 
    },
  ];

  const formInputs = formInputElements.map(({ label, value, handleChange }) => (
    <FormInput 
      label={label}
      value={value}
      handleChange={handleChange}
      key={label}
    />
  ));

  const handleSubmit = () => {
    const billingAddress = {
      lineOne,
      lineTwo,
      suburb,
      state,
      postcode,
      country, 
    }
    onSubmit(billingAddress);
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
          Add Billing Address
        </Button>
      </div>
      <div className={styles.information} >
        {information}
      </div>
    </>
  );
}