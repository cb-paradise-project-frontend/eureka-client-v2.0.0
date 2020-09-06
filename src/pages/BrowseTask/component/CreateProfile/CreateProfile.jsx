import React, { useReducer } from 'react';

import styles from './CreateProfile.module.scss';

import ModalPage from '../ModalPage';
import profileReducer from './Reducer';
import ProfileItem from './ProfileItem';
import BankAccount from './SubPages/BankAccount';
import BillingAddress from './SubPages/BillingAddress';
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
  birthDate: '',
  mobile:'', 
  subPage: '',
};

export default function CreateProfile() {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const title = 'To start Making Money';
  const backButtonIcon = String.fromCharCode(10140);
  const closeButtonIcon = String.fromCharCode(9747);

  const handleAccountInput = (bankAccount) => {
    dispatch(action.accountInput(bankAccount));
  };

  const handleBillingAddressInput = (billingAddress) => {
    dispatch(action.billingAddressInput(billingAddress));
  };

  const handleProfileBtnClick = (subPage) => {
    return () => (dispatch(action.clickProfileItem(subPage)));
  };
 
  const handleBackBtnClick = () => {
    dispatch(action.clickBackBtn());
  }

  const profileInfoList = [
    {
      name: 'Profile Picture',
      subPage: <BankAccount onSubmit={handleAccountInput} />,
    },
    {
      name: 'Bank Account Details',
      subPage: <BankAccount onSubmit={handleAccountInput} />,
    },
    {
      name: 'Billing Address',
      subPage: <BillingAddress onSubmit={handleBillingAddressInput} />,
    },
    {
      name: 'Date of Birth',
      subPage: <BankAccount onSubmit={handleAccountInput} />,
    },
    {
      name: 'Mobile Number',
      subPage: <BankAccount onSubmit={handleAccountInput} />,
    }, 
  ];

  const profileList = profileInfoList.map(({ name, subPage }) => (
    <ProfileItem 
      itemName={name}
      handleClick={handleProfileBtnClick(subPage)}
      key={name}
    />
  ));
  
  const { subPage } = state;

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