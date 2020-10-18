import React, { useState } from 'react';

import styles from './Mobile.module.scss';

import Button from '../../../../components/Button';
import onlyNumber from '../../../../utils/validators/input';
import Input from '../../../../components/Input';

export default function Mobile({ storedValue, onSubmit }) {
  const [mobile, setMobile] = useState(storedValue);
  const [isVerified, toggleEdit] = useState(!!mobile);

  const handleEdit = () => {
    toggleEdit(!isVerified);
  };

  const handleSubmit = () => {
    onSubmit(mobile);
  };

  const introduction = "We'll keep you up to date about the latest happenings on your tasks by SMS.";
  const information = "Verifying your mobile number helps us know you're a genuine human! We won't show it to anyone or sell it on to any 3rd party, it's just for us to send you some good stuff.";
  const editBtnElements = {
    title: 'Verified mobile number',
    value: storedValue,
    color: 'light-blue',
    buttonLabel: 'Edit',
    handleClick: handleEdit,
  };
  const sendBtnElements = {
    title: 'Mobile number',
    value: mobile,
    color: 'green',
    notice: 'We will send you a verification code',
    buttonLabel: 'Send',
    handleClick: handleSubmit,
  };

  const {
    title, value, color, notice, buttonLabel, handleClick,
  } = isVerified ? editBtnElements : sendBtnElements;

  return (
    <>
      <div className={styles.introduction} >
        {introduction}
      </div>
      <div className={styles.input_title} >
        {title}
      </div>
      {notice &&
        <div className={styles.input_notice} >
          {notice}
        </div>
      }
      <div className={styles.input_bar} >
        <div className={styles.input_wrapper} >
          <Input
            value={value}
            validator={onlyNumber}
            handleChange={setMobile}
            disabled={isVerified}
            maxLength={15} // 15 is the max length of international phone number
          />
        </div>
        <div className={styles.button_wrapper} >
          <Button
            onClick={handleClick}
            color={color}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
      <div className={styles.information} >
        {information}
      </div>
    </>
  );
}
