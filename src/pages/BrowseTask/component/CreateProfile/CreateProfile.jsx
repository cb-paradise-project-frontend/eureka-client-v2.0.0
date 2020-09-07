import React, { useReducer } from 'react';

import styles from './CreateProfile.module.scss';

import ModalPage from '../ModalPage';
import profileReducer from './Reducer';
import ProfileItem from './ProfileItem';
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

export default function CreateProfile() {
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
  }

  const handleAccountInput = (bankAccount) => {
    dispatch(action.accountInput(bankAccount));
    handleBackBtnClick();
  };

  const handleBillingAddressInput = (billingAddress) => {
    dispatch(action.billingAddressInput(billingAddress));
    handleBackBtnClick();
  };

  const handleBirthdayInput = (birthday) => {
    dispatch(action.birthdayInput(birthday));
    handleBackBtnClick();
  };

  const handleMobileInput = (mobile) => {
    dispatch(action.mobileInput(mobile));
    handleBackBtnClick();
  };

  const isChecked = (stateValue) => {
    if(typeof stateValue === 'object') {
      const valueArray = Object.values(stateValue);
      const result = valueArray.filter(value => value);
      return (result.length === valueArray.length) ? true : false;
    };
    return (stateValue) && true;
  }

  const profileInfoList = [
    {
      name: 'Profile Picture',
      checked: isChecked(photo), 
      subPage: <BankAccount onSubmit={handleAccountInput} />,
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
      subPage: <Birthday onSubmit={handleBirthdayInput} />,
    },
    {
      name: 'Mobile Number',
      checked: isChecked(mobile),
      subPage: <Mobile 
        verifiedMobile={mobile} 
        onSubmit={handleMobileInput} 
      />,
    }, 
  ];

  const profileList = profileInfoList.map(({ name, checked, subPage }) => (
    <ProfileItem 
      itemName={name}
      handleClick={handleProfileBtnClick(subPage)}
      checked={checked}
      key={name}
    />
  ));

  const title = 'To start Making Money';
  const backButtonIcon = String.fromCharCode(10140);
  const closeButtonIcon = String.fromCharCode(9747);

  const header = (
    <>
      {
        subPage?
          <button 
            className={styles.back_button}
            onClick={handleBackBtnClick} 
          >
            {backButtonIcon}
          </button> :
          ''
      }
      <div className={styles.title} >
        {title}
      </div>
      <div className={styles.close_button} >
        {closeButtonIcon}
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
} 