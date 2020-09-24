import React, { useState } from 'react';

import styles from './BillingAddress.module.scss';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

export default function BillingAddress({ onSubmit }) {
  const [lineOne, setLineOne] = useState('');
  const [lineTwo, setLineTwo] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');
  const [testing, toggleTest] = useState(false);

  const introduction = `Your billing address will be verified before you can receive payments.`;
  const information = 'Your address will never been shown publicly, it is only used for account verification purposes.';

  const fieldElementList = [
    {
      label: 'Address Line 1',
      value: lineOne,
      handleChange: setLineOne,
    },
    {
      label: 'Address Line 2 (optional)',
      value: lineTwo,
      handleChange: setLineTwo,
    },
    {
      label: 'Suburb',
      value: suburb,
      handleChange: setSuburb,
    },
    {
      label: 'State',
      value: state,
      handleChange: setState,
    },
    {
      label: 'Postcode',
      value: postcode,
      handleChange: setPostcode,
    },
    {
      label: 'Country',
      value: country,
      handleChange: setCountry,
    },
  ];

  const errorMessage = 'Please enter your complete address.';

  const fieldList = fieldElementList.map(({ label, value, handleChange }) => (
    <div className={styles.field_input_wrapper} key={label} >
      <Input.WithErrorMessage
        label={label}
        value={value}
        handleChange={handleChange}
        isError={testing && !value}
        errorMessage={errorMessage}
      />
    </div>
  ));

  const checkEmpty = () => {
    const emptyField = fieldElementList.find(({ value }) => !value);
    return !emptyField;
  };

  const handleSubmit = () => {
    if (checkEmpty()) {
      const billingAddress = {
        lineOne, lineTwo, suburb, state, postcode, country,
      };
      onSubmit(billingAddress);
      toggleTest(false);
    } else {
      toggleTest(true);
    }
  };

  return (
    <>
      <div className={styles.introduction} >
        {introduction}
      </div>
      <div className={styles.form_input} >
        {fieldList}
      </div>
      <div className={styles.button_wrapper} >
        <Button onClick={handleSubmit} >
          Add Billing Address
        </Button>
      </div>
      <div className={styles.information} >
        {information}
      </div>
    </>
  );
}
