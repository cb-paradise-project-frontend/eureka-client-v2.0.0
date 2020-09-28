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

// add flag for optional info
const initialState = {
  photo: '',
  bankAccount: {
    holder: '',
    accountNumber: '',
    bsb: '',
  },
  billingAddress: {
    lineOne: '',
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
  autoSave: false,
};

export default function CreateProfile({ pageToggler }) {
  const [fields, dispatch] = useReducer(profileReducer, initialState);

  const {
    photo, bankAccount, billingAddress, birthday, mobile, subPage, autoSave,
  } = fields;

  const loadProfile = (userProfile) => {
    dispatch(action.loadProfile(userProfile));
  };
  const handleProfileBtnClick = (page) => (
    () => (dispatch(action.clickProfileItem(page)))
  );
  const handleBackBtnClick = () => {
    dispatch(action.clickBackBtn());
  };

  const handlePhotoUpload = (input) => {
    dispatch(action.photoUpload(input));
  };
  const handleAccountInput = (input) => {
    dispatch(action.accountInput(input));
  };
  const handleBillingAddressInput = (input) => {
    dispatch(action.billingAddressInput(input));
  };
  const handleBirthdayInput = (input) => {
    dispatch(action.birthdayInput(input));
  };
  const handleMobileInput = (input) => {
    dispatch(action.mobileInput(input));
  };

  const isFilled = (stateValue) => {
    if (typeof stateValue === 'object') {
      const valueArray = Object.values(stateValue);
      const result = valueArray.filter((value) => value);
      return (result.length === valueArray.length);
    }
    return !!stateValue;
  };

  const createBirthdayLabel = () => {
    if (!isFilled(birthday)) return null;
    const { day, month, year } = birthday;
    const birthdayObj = new Date(year, month - 1, day);
    const formattedBirthday = birthdayObj.toDateString().replace(/[^\s]+/, '');
    return formattedBirthday;
  };

  const profileItemElementList = [
    {
      name: 'Profile Picture',
      value: photo,
      page: (
        <Photo
          onSubmit={handlePhotoUpload}
          url={photo}
        />
      ),
    },
    {
      name: 'Bank Account Details',
      value: bankAccount,
      page: (
        <BankAccount
          onSubmit={handleAccountInput}
          storedValue={bankAccount}
        />
      ),
    },
    {
      name: 'Billing Address',
      value: billingAddress,
      page: (
        <BillingAddress
          onSubmit={handleBillingAddressInput}
          storedValue={billingAddress}
        />
      ),
    },
    {
      name: 'Date of Birth',
      value: birthday,
      statusLabel: createBirthdayLabel(),
      page: (
        <Birthday
          onSubmit={handleBirthdayInput}
          storedValue={birthday}
        />
      ),
    },
    {
      name: 'Mobile Number',
      value: mobile,
      statusLabel: mobile,
      page: <Mobile
        onSubmit={handleMobileInput}
        storedValue={mobile}
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

  const profileStorage = window.localStorage;

  const saveLocalProfile = () => {
    if (!autoSave) return;
    const userProfile = {
      photo, bankAccount, billingAddress, birthday, mobile,
    };
    profileStorage.setItem('userProfile', JSON.stringify(userProfile));
  };

  const getLocalProfile = () => {
    const savedProfile = profileStorage.getItem('userProfile');
    if (savedProfile) loadProfile(JSON.parse(savedProfile));
  };

  const removeLocalProfile = () => {
    profileStorage.removeItem('userProfile');
  };

  const handleContinueBtnClick = () => {
    removeLocalProfile();
    pageToggler();
  };

  useEffect(() => {
    getLocalProfile();
  },
  []);

  useEffect(() => {
    saveLocalProfile();
  },
  [photo, bankAccount, billingAddress, birthday, mobile]);

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
