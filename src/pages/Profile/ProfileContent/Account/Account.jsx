import React from 'react';

import styles from './Account.module.scss';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const Account = ({
  accountContent,
  onAccountChange,
}) => {
  const accountData = Object.keys(accountContent).map((key) => {
    let value;

    if (key === 'birthday') {
      value = 'birthday';
    } else {
      value = accountContent[key];
    }

    const handleChange = onAccountChange(key);

    return (
      <div className={styles.input_wrapper} key={key}>
        <Input
          label={key}
          value={value}
          handleChange={handleChange}
          disabled={(key === 'email' || key === 'userId')}
        />
      </div>
    );
  });

  return (
    <React.Fragment >
      <div className={styles.account_wrapper}>
        {accountData}
        <div className={styles.update_btn}>
          <Button>Update account information</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
