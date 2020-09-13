import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Mobile.module.scss';

import FormInput from '../../../../../../components/FormInput';
import handleInput from '../Utils/handleInput';
import Button from '../../../../../../components/Button';
import onlyNumber from '../../../../../../utils/validators/input';

export default function Mobile({ verifiedMobile, onSubmit }) {
  const verified = verifiedMobile ? true : false;
  const [mobile, setMobile] = useState('');
  const [isVerified, toggleEdit] = useState(verified);
  
  const handleEdit = () => {
    toggleEdit(!isVerified);
  };

  const handleSubmit = () => {
    onSubmit(mobile);
  }

  const introduction = `We'll keep you up to date about the latest happenings on your tasks by SMS.`;
  const information = `Verifying your mobile number helps us know you're a genuine human! We won't show it to anyone or sell it on to any 3rd party, it's just for us to send you some good stuff.`;
  const editBtnElements = {
    title: 'Verified mobile number',
    value: verifiedMobile,
    buttonLabel: 'Edit',
    handleClick: handleEdit,
  }
  const sendBtnElements = {
    title: 'Mobile number',
    value: mobile,
    notice: 'We will send you a verification code',
    buttonLabel: 'Send',
    handleClick: handleSubmit,
  }

  const buttonElement = isVerified ? editBtnElements : sendBtnElements;
  const { title, value, notice, buttonLabel, handleClick } = buttonElement;

  const cx = classNames.bind(styles);

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
        <div className={cx({
            input_wrapper: true,
            disabled: isVerified, 
          })} >
          <FormInput 
            value={value}
            handleChange={handleInput(setMobile, onlyNumber)}
          />
        </div>
        <div className={cx({
          button_wrapper: true,
          edit: isVerified === true,
          send: isVerified === false,
        })} >
          <Button handleSubmit={handleClick} >
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