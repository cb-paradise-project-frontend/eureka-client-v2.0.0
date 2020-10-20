import React from 'react';

import styles from './Account.module.scss';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const Account = ({
  accountContent,
  onAccountChange,
  onBirthdayChange,
}) => {
  const accountData = Object.keys(accountContent).map((key) => {
    const handleChange = onAccountChange(key);

    if (key === 'birthday') {
      const birthdayObj = accountContent[key];
      const birthdayInput = Object.keys(birthdayObj).map((index) => {
        const handleBirthdayChange = onBirthdayChange(index);

        return (
        <Input
          value={birthdayObj[index]}
          key={index}
          handleChange={handleBirthdayChange}
        />
        );
      });
      return (
        <div className={styles.birthday_wrapper} key={key}>
          <div className={styles.label_wrapper}>
            <label>{key}</label>
          </div>
          <div className={styles.birthday_input_wrapper}>
            {birthdayInput}
          </div>
        </div>
      );
    }

    const value = accountContent[key];
    return (
      <Input
        key={key}
        label={key}
        value={value}
        handleChange={handleChange}
        disabled={(key === 'email' || key === 'userId')}
      />
    );
  });

  return (
    <React.Fragment >
      <div className={styles.account_wrapper}>
        <div className={styles.input_wrapper}>
          {accountData}
        </div>
        <div className={styles.update_btn}>
          <Button>Update account information</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
