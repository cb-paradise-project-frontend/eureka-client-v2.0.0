import React, { useReducer } from 'react';

import styles from './CreateProfile.module.scss';

import ModalPage from '../ModalPage';
import profileReducer from './Reducer';
import ProfileItem from './ProfileItem';
import Photo from './SubPages/Photo';
import BankAccount from './SubPages/BankAccount';
import BillingAddress from './SubPages/BillingAddress';
import Birthday from './SubPages/Birthday';
import Mobile from './SubPages/Mobile';
import * as action from './Reducer/Action/actionCreator';

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
  mobile:'', 
  subPage: '',
};

export default function CreateProfile({ toggler }) {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { 
    photo, 
    bankAccount, 
    billingAddress, 
    birthday,
    mobile, 
    subPage, 
  } = state;

  const handleProfileBtnClick = (subPage) => {
    return () => (dispatch(action.clickProfileItem(subPage)));
  };
  const handleBackBtnClick = () => {
    dispatch(action.clickBackBtn());
  };

  const handlePhotoUpload = (photo) => {
    dispatch(action.photoUpload(photo));
  };
  const handleAccountInput = (bankAccount) => {
    dispatch(action.accountInput(bankAccount));
  };
  const handleBillingAddressInput = (billingAddress) => {
    dispatch(action.billingAddressInput(billingAddress));
  };
  const handleBirthdayInput = (birthday) => {
    dispatch(action.birthdayInput(birthday));
  };
  const handleMobileInput = (mobile) => {
    dispatch(action.mobileInput(mobile));
  };

  const isChecked = (stateValue) => {
    if(typeof stateValue === 'object') {
      const valueArray = Object.values(stateValue);
      const result = valueArray.filter(value => value);
      return (result.length === valueArray.length) ? true : false;
    };
    return (stateValue) && true;
  };

  const birthdayStatusLabel = () => {
    if (!isChecked(birthday)) return '';
    return birthday.toDateString().replace(/[^\s]+/, '');
  };
 
  const profileItemElementList = [
    {
      name: 'Profile Picture',
      checked: isChecked(photo), 
      subPage: <Photo url={photo} onSubmit={handlePhotoUpload} />,
    },
    {
      name: 'Bank Account Details',
      checked: isChecked(bankAccount), 
      subPage: <BankAccount onSubmit={handleAccountInput} />,
    },
    {
      name: 'Billing Address',
      checked: isChecked(billingAddress),
      subPage: <BillingAddress onSubmit={handleBillingAddressInput} />,
    },
    {
      name: 'Date of Birth',
      checked: isChecked(birthday),
      statusLabel: birthdayStatusLabel(),
      subPage: <Birthday onSubmit={handleBirthdayInput} />,
    },
    {
      name: 'Mobile Number',
      checked: isChecked(mobile),
      statusLabel: mobile,
      subPage: <Mobile 
        verifiedMobile={mobile} 
        onSubmit={handleMobileInput} 
      />,
    }, 
  ];

  const profileList = profileItemElementList.map(({ name, checked, statusLabel, subPage }) => (
    <ProfileItem 
      itemName={name}
      handleClick={handleProfileBtnClick(subPage)}
      statusLabel={statusLabel}
      checked={checked}
      key={name}
    />
  ));

  const header = (
    <>
      {subPage && (
        <button 
          className={styles.back_button}
          onClick={handleBackBtnClick} 
        >
          {String.fromCharCode(10140)}
        </button> 
      )}
      <div className={styles.title} >
        To start Making Money
      </div>
    </>
  );

  const content = (
    subPage ? 
      subPage : 
      profileList
  );

  const footer = (
    <>
      <button
          className={styles.footer_button}
          onClick={handleBackBtnClick} 
        >
          {subPage ? 'Back' : 'Continue'}
      </button>
    </>
  );

  return (
    <ModalPage  
      header={header}
      content={content}
      footer={footer}
    />
  );
}; 