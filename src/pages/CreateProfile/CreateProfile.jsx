import React, { useEffect, useReducer } from 'react';

import styles from './CreateProfile.module.scss';

import Modal from '../../components/Modal';
import profileReducer from './Reducer';
import ProfileItem from './ProfileItem';
import Photo from './SubPages/Photo';
import BankAccount from './SubPages/BankAccount';
import BillingAddress from './SubPages/BillingAddress';
import Birthday from './SubPages/Birthday';
import Mobile from './SubPages/Mobile';
import * as action from './Reducer/Action/actionCreator';
import Button from '../../components/Button';

const initialState = {
  photo: '',
  bankAccount: {
    holder: '',
    accountNumber: '',
    bsb: '',
  },
  billingAddress: {
    lineOne: '',
    lineTwo: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
  },
  birthday: {
    day: '',
    month: '',
    year: '',
  },
  mobile: '',
  subPage: '',
};

export default function CreateProfile({ pageToggler }) {
  const [fields, dispatch] = useReducer(profileReducer, initialState);
  const {
    photo, bankAccount, billingAddress, birthday, mobile, subPage,
  } = fields;

  const loadProfile = (userProfile) => (
    () => (dispatch(action.loadProfile(userProfile)))
  );
  const handleProfileBtnClick = (page) => (
    () => (dispatch(action.clickProfileItem(page)))
  );
  const handleBackBtnClick = () => {
    dispatch(action.clickBackBtn());
  };

  const saveSessionProfile = () => {
    const profileStorage = window.sessionStorage;
    profileStorage.setItem('userProfile', fields);
  };

  const handlePhotoUpload = (input) => {
    dispatch(action.photoUpload(input));
    saveSessionProfile();
  };
  const handleAccountInput = (input) => {
    dispatch(action.accountInput(input));
    saveSessionProfile();
  };
  const handleBillingAddressInput = (input) => {
    dispatch(action.billingAddressInput(input));
    saveSessionProfile();
  };
  const handleBirthdayInput = (input) => {
    dispatch(action.birthdayInput(input));
    saveSessionProfile();
  };
  const handleMobileInput = (input) => {
    dispatch(action.mobileInput(input));
    saveSessionProfile();
  };

  const isFilled = (stateValue) => {
    if (typeof stateValue === 'object') {
      const valueArray = Object.values(stateValue);
      const result = valueArray.filter((value) => value);
      return (result.length === valueArray.length);
    }
    return (stateValue) && true;
  };

  const birthdayStatusLabel = isFilled(birthday) &&
    birthday.toDateString().replace(/[^\s]+/, '');

  const profileItemElementList = [
    {
      name: 'Profile Picture',
      value: photo,
      page: <Photo url={photo} onSubmit={handlePhotoUpload} />,
    },
    {
      name: 'Bank Account Details',
      value: bankAccount,
      page: <BankAccount onSubmit={handleAccountInput} />,
    },
    {
      name: 'Billing Address',
      value: billingAddress,
      page: <BillingAddress onSubmit={handleBillingAddressInput} />,
    },
    {
      name: 'Date of Birth',
      value: birthday,
      statusLabel: birthdayStatusLabel,
      page: <Birthday onSubmit={handleBirthdayInput} />,
    },
    {
      name: 'Mobile Number',
      value: mobile,
      statusLabel: mobile,
      page: <Mobile
        verifiedMobile={mobile}
        onSubmit={handleMobileInput}
      />,
    },
  ];

  const profileList = (
    <div className={styles.profile_list_wrapper} >
      {profileItemElementList.map(({
        name, value, statusLabel, page,
      }) => (
        <ProfileItem
          itemName={name}
          handleClick={handleProfileBtnClick(page)}
          statusLabel={statusLabel}
          checked={isFilled(value)}
          key={name}
        />
      ))}
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

  const getSessionProfile = () => {
    const profileStorage = window.sessionStorage;
    const savedProfile = profileStorage.getItem('userProfile');
    if (savedProfile) { loadProfile(savedProfile); }
  };

  useEffect(() => {
    getSessionProfile();
  },
  [getSessionProfile]);

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
    onClick={handleBackBtnClick}
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
