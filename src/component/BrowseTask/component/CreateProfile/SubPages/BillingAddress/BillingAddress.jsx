import React from 'react';

import styles from './BillingAddress.module.scss';

import FormField from '../../../FormField';

export default function BillingAddress() {
  const introduction = `Your billing address will be verified before you can receive payments.`;
  const formInputTexts = [
      'Address Line 1',
      'Address Line 2 (optional)',
      'Suburb',
      'State',
      'Postcode',
      'Country',
  ];
  const formInputs = formInputTexts.map((label) => (
    <FormField 
      label={label}
      key={label}
    />
  ));

  return (
    <>
      <div className={styles.introduction} >
        {introduction}
      </div>
      <div className={styles.form_input} >
        {formInputs}
      </div>
    </>
  );
}