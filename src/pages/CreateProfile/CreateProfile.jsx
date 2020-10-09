import React, { useEffect, useState } from 'react';

import styles from './CreateProfile.module.scss';

import Modal from '../../components/Modal';
import ProfileItem from './ProfileItem';
import Photo from './SubPages/Photo';
import BankAccount from './SubPages/BankAccount';
import BillingAddress from './SubPages/BillingAddress';
import Birthday from './SubPages/Birthday';
import Mobile from './SubPages/Mobile';
import Button from '../../components/Button';
import isFormFilled from './utils/isFormFilled';
import useForm from './SubPages/useForm';

const FORM = {
  photo: {
    label: 'Profile Picture',
    page: Photo,
  },
  bankAccount: {
    label: 'Bank Account Details',
    page: BankAccount,
  },
  billingAddress: {
    label: 'Billing Address',
    page: BillingAddress,
  },
  birthday: {
    label: 'Date of Birth',
    page: Birthday,
  },
  mobile: {
    label: 'Mobile Number',
    page: Mobile,
  },
};

export default function CreateProfile({ pageToggler }) {
  const [subPage, loadSubPage] = useState();

  const form = useForm(FORM);

  const {
    getData,
    setData,
    handleDataChange,
    touched,
    toggleTouched,
  } = form;

  const formData = getData();

  const loadProfile = (userProfile) => {
    setData(userProfile);
  };

  const profileStorage = window.localStorage;

  const saveLocalProfile = () => {
    if (!touched) return;
    const userProfile = { ...formData };
    profileStorage.setItem('userProfile', JSON.stringify(userProfile));
  };

  const getLocalProfile = () => {
    const savedProfile = profileStorage.getItem('userProfile');
    if (savedProfile) loadProfile(JSON.parse(savedProfile));
  };

  const removeLocalProfile = () => {
    profileStorage.removeItem('userProfile');
  };

  useEffect(() => {
    getLocalProfile();
  },
  []);

  useEffect(() => {
    saveLocalProfile();
  },
  []);

  const handleBackBtnClick = () => {
    loadSubPage('');
  };

  const handleContinueBtnClick = () => {
    removeLocalProfile();
    pageToggler();
  };

  const createBirthdayLabel = (birthday) => {
    if (!isFormFilled(birthday)) return null;
    const { day, month, year } = birthday;
    const birthdayObj = new Date(year, month - 1, day);
    const formattedBirthday = birthdayObj.toDateString().replace(/[^\s]+/, '');
    return formattedBirthday;
  };

  const profileList = (
    <div className={styles.profile_list_wrapper} >
      {Object.keys(FORM).map((key) => {
        const { label, page } = FORM[key];
        const value = formData[key];
        const handleChange = (input) => {
          handleDataChange(key)(input);
          handleBackBtnClick();
        };
        const SubPage = page;
        let statusLabel;
        if (key === 'birthday') statusLabel = createBirthdayLabel(value);
        if (key === 'mobile') statusLabel = value;
        return (
          <ProfileItem
            itemName={label}
            handleClick={() => loadSubPage(<SubPage storedValue={value} onSubmit={handleChange} />)}
            statusLabel={statusLabel}
            checked={isFormFilled(value)} // TODO: bypass optional input "lineTwo" in BillingAddress
            key={key}
          />
        );
      })}
    </div>
  );

  const header = (
    <>
      {subPage &&
        <div className={styles.back_button_wrapper} >
          <Button.BackIcon onClick={handleBackBtnClick} />
        </div>
      }
      <div className={styles.title} >
        To Start Making Money
      </div>
    </>
  );

  const content = (
    <div className={styles.content_wrapper} >
      {subPage || profileList}
    </div>
  );

  const backButton = (
    <Button
    onClick={handleBackBtnClick}
    color={'light-blue'}
    long
  >
    Back
  </Button>
  );

  const continueButton = (
    <Button
    onClick={handleContinueBtnClick}
    color={'light-blue'}
    long
  >
    Continue
  </Button>
  );

  const footer = subPage ? backButton : continueButton;

  return (
    <Modal onRequestClose={pageToggler} >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>{content}</Modal.Content>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
}
