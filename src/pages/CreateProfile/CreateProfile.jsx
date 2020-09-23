import React, { useReducer } from 'react';

import styles from './CreateProfile.module.scss';

import ModalPage from '../../components/ModalPage';
import Modal from '../../components/ModalTest';
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

export default function CreateProfile() {
  const [fields, dispatch] = useReducer(profileReducer, initialState);
  const { 
    photo, bankAccount, billingAddress, birthday, mobile, subPage, 
  } = fields;

  const handleProfileBtnClick = (subPage) => (
    () => (dispatch(action.clickProfileItem(subPage)))
  );
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

  const isFilled = (stateValue) => {
    if(typeof stateValue === 'object') {
      const valueArray = Object.values(stateValue);
      const result = valueArray.filter(value => value);
      return (result.length === valueArray.length) ? true : false;
    };
    return (stateValue) && true;
  };

  const birthdayStatusLabel = isFilled(birthday) &&
    birthday.toDateString().replace(/[^\s]+/, '');
 
  const profileItemElementList = [
    {
      name: 'Profile Picture',
      value: photo, 
      subPage: <Photo url={photo} onSubmit={handlePhotoUpload} />,
    },
    {
      name: 'Bank Account Details',
      value: bankAccount, 
      subPage: <BankAccount onSubmit={handleAccountInput} />,
    },
    {
      name: 'Billing Address',
      value: billingAddress,
      subPage: <BillingAddress onSubmit={handleBillingAddressInput} />,
    },
    {
      name: 'Date of Birth',
      value: birthday,
      statusLabel: birthdayStatusLabel,
      subPage: <Birthday onSubmit={handleBirthdayInput} />,
    },
    {
      name: 'Mobile Number',
      value: mobile,
      statusLabel: mobile,
      subPage: <Mobile 
        verifiedMobile={mobile} 
        onSubmit={handleMobileInput} 
      />,
    }, 
  ];

  const profileList = profileItemElementList.map(({ name, value, statusLabel, subPage }) => (
    <ProfileItem 
      itemName={name}
      handleClick={handleProfileBtnClick(subPage)}
      statusLabel={statusLabel}
      checked={isFilled(value)}
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
        To Start Making Money
      </div>
    </>
  );

  const content = (
    subPage ? 
      subPage : 
      profileList
  );

  const footer = (
    <button
        className={styles.footer_button}
        onClick={handleBackBtnClick} 
      >
        {subPage ? 'Back' : 'Continue'}
    </button>
  );

  return (
    <Modal confirmBeforeClose >
      <ModalPage  
        header={header}
        content={content}
        footer={footer}
      />
    </Modal>
  );
}; 