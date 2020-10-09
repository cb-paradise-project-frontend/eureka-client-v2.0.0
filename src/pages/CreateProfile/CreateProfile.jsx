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
    Page: Photo,
  },
  bankAccount: {
    label: 'Bank Account Details',
    Page: BankAccount,
  },
  billingAddress: {
    label: 'Billing Address',
    Page: BillingAddress,
  },
  birthday: {
    label: 'Date of Birth',
    Page: Birthday,
  },
  mobile: {
    label: 'Mobile Number',
    Page: Mobile,
  },
};

function useLocalStorage() {
  const { localStorage } = window;
  const [data, setData] = useState();

  // const currentData = data && Object
  //   .keys(data)
  //   .reduce((obj, key) => ({
  //     ...obj,
  //     [key]: data[key],
  //   }), {});

  const getStoredData = () => {
    const storedData = localStorage.getItem('userProfile');
    if (storedData) setData(JSON.parse(storedData));
  };

  const storeData = (currentData) => {
    console.log(currentData);
    localStorage.setItem('userProfile', JSON.stringify(currentData));
  };

  const dropStoredData = () => {
    localStorage.removeItem('userProfile');
  };

  useEffect(() => {
    getStoredData();
  }, [setData]);

  // useEffect(() => {
  //   storeData();
  // }, [data]);

  return [data, storeData, dropStoredData];
}

export default function CreateProfile({ pageToggler }) {
  const [subPage, loadSubPage] = useState();
  const [storedData, store, dropStoredData] = useLocalStorage();
  const [updateFlag, setFlag] = useState(false);

  const toggleUpdateFlag = () => {
    setFlag((prevFlag) => !prevFlag);
  };

  const form = useForm(FORM, storedData);

  const {
    getData,
    setData,
    handleDataChange,
    touched,
  } = form;

  const formData = getData();

  // const loadProfile = (userProfile) => {
  //   setData(userProfile);
  // };

  // const profileStorage = window.localStorage;

  // const saveLocalProfile = () => {
  //   if (!touched) return;
  //   const userProfile = { ...formData };
  //   profileStorage.setItem('userProfile', JSON.stringify(userProfile));
  // };

  // const getLocalProfile = () => {
  //   const savedProfile = profileStorage.getItem('userProfile');
  //   if (savedProfile) loadProfile(JSON.parse(savedProfile));
  // };

  // const removeLocalProfile = () => {
  //   profileStorage.removeItem('userProfile');
  // };

  // useEffect(() => {
  //   getLocalProfile();
  // },
  // []);

  // useEffect(() => {
  //   saveLocalProfile();
  // },
  // []);

  const handleBackBtnClick = () => {
    loadSubPage('');
  };

  const handleContinueBtnClick = () => {
    dropStoredData();
    pageToggler();
  };

  const createBirthdayLabel = (birthday) => {
    if (!isFormFilled(birthday)) return null;
    const { day, month, year } = birthday;
    const birthdayObj = new Date(year, month - 1, day);
    const formattedBirthday = birthdayObj.toDateString().replace(/[^\s]+/, '');
    return formattedBirthday;
  };

  useEffect(() => {
    if (touched) store(formData);
  }, [updateFlag]);

  const profileList = (
    <div className={styles.profile_list_wrapper} >
      {Object.keys(FORM).map((key) => {
        const { label, Page } = FORM[key];
        const value = formData[key];
        const handleChange = (input) => {
          handleDataChange(key)(input);
          toggleUpdateFlag();
          handleBackBtnClick();
        };
        let statusLabel;
        if (key === 'birthday') statusLabel = createBirthdayLabel(value);
        if (key === 'mobile') statusLabel = value;

        return (
          <ProfileItem
            itemName={label}
            handleClick={() => loadSubPage(<Page storedValue={value} onSubmit={handleChange} />)}
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
