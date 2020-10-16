import React, { useContext, useEffect, useState } from 'react';

import styles from './CreateProfile.module.scss';

import Modal from '../../components/Modal';
import ProfileItem from './ProfileItem';
import Button from '../../components/Button';
import useForm from './SubPages/useForm';
import FORM from './form';
import LocalStorage from './utils/LocalStorage';
import createBirthdayLabel from './utils/createBirthdayLabel';
import { getProfile, saveProfile } from '../../apis';
import { AuthContext } from '../../auth/Auth';
import { useToggleContent } from '../../components/ToggleContent';
import MessageBox from '../../components/MessageBox';
import MakeOffer from './SubPages/MakeOffer/MakeOffer';

const successMessage = 'Your profile is saved! Now you can start to make money!.';
const errorMessage = 'Profile update failed. Please try again later.';

const SuccessMessage = ({ onRequestClose }) => (
  <MessageBox
    info={successMessage}
    onRequestClose={onRequestClose}
  />
);

const ErrorMessage = ({ onRequestClose }) => (
  <MessageBox
    info={errorMessage}
    onRequestClose={onRequestClose}
  />
);

const { getStoredData, storeData, dropStoredData } = new LocalStorage('userProfile');

export default function CreateProfile({ pageToggler }) {
  const [subPage, loadSubPage] = useState();

  const { currentUser } = useContext(AuthContext);
  const [profileFilled, setProfileFilled] = useState(true);

  const [MessageContent, toggleMessageContent] = useToggleContent();

  const form = useForm(FORM, getStoredData());

  const {
    getData,
    handleDataChange,
    findEmptyField,
  } = form;

  const formData = getData();

  const {
    photo,
    bankAccount,
    billingAddress,
    birthday,
    mobile,
  } = formData;

  useEffect(() => {
    storeData(formData);
  }, [
    photo,
    bankAccount,
    billingAddress,
    birthday,
    mobile,
  ]);

  const checkProfile = async () => {
    const profile = await getProfile(currentUser);
    if (profile) setProfileFilled(true);
  };

  useEffect(() => {
    checkProfile();
  }, []);

  const handleBackBtnClick = () => {
    loadSubPage('');
  };

  const backButton = (
    <Button
    onClick={handleBackBtnClick}
    color={'light-blue'}
    long
  >
    Back
  </Button>
  );

  const handleContinueBtnClick = async () => {
    // dropStoredData();
    if (findEmptyField()) {
      return toggleMessageContent();
    }

    const result = await saveProfile(currentUser, formData);

    if (result) {
      setProfileFilled(true);
    }

    // pageToggler();
  };

  const continueButton = (
    <Button
    onClick={handleContinueBtnClick}
    color={'light-blue'}
    long
  >
    Continue
  </Button>
  );

  // const handleNextBtnClick = () => {

  // };

  const profileList = (
    <div className={styles.profile_list_wrapper} >
      {Object.keys(FORM).map((key) => {
        const { label, Page } = FORM[key];
        const value = formData[key];

        const handleChange = (input) => {
          handleDataChange(key)(input);
          handleBackBtnClick();
        };

        const statusLabel = {
          birthday: createBirthdayLabel(value),
          mobile: value,
        }[key] || null;

        return (
          <ProfileItem
            itemName={label}
            handleClick={() => loadSubPage(
              <Page
                storedValue={value}
                onSubmit={handleChange}
              />
            )}
            statusLabel={statusLabel}
            filled={!!value}
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
      {(profileFilled && <MakeOffer />)
        || subPage
        || profileList
      }
    </div>
  );

  const footer = subPage ? backButton : continueButton;

  return (
    <Modal onRequestClose={pageToggler} >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>{content}</Modal.Content>
      <Modal.Footer>{footer}</Modal.Footer>
      <MessageContent>
        <ErrorMessage onRequestClose={toggleMessageContent} />
      </MessageContent>
    </Modal>
  );
}
