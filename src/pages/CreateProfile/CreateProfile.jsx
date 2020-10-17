import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import styles from './CreateProfile.module.scss';

import Modal from '../../components/Modal';
import ProfileItem from './ProfileItem';
import Button from '../../components/Button';
import useForm from './SubPages/useForm';
import FORM from './form';
import LocalStorage from './utils/LocalStorage';
import createBirthdayLabel from './utils/createBirthdayLabel';
import { getProfile, makeOffer, saveProfile } from '../../apis';
import { AuthContext } from '../../auth/Auth';
import MakeOffer from './SubPages/MakeOffer';
import useMessageBox from '../../components/MessageBox/useMessageBox';

const OFFER_SUCCESS = 'Offer have been sent to the task owner!';
const OFFER_FAIL = 'Request sending failed. Please try again later.';

const SAVE_PROFILE_FAIL = 'Profile saving failed. Please try again later.';

const { getStoredData, storeData, dropStoredData } = new LocalStorage('userProfile');

export default function CreateProfile({ pageToggler }) {
  const [subPage, loadSubPage] = useState();

  const { currentUser } = useContext(AuthContext);
  const { params: { taskId } } = useRouteMatch();

  const [profileFilled, setProfileFilled] = useState(false);
  const [profileExist, setProfileExist] = useState(false);

  const [Message, showMessage] = useMessageBox();

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

  const checkProfile = () => {
    if (!findEmptyField()) setProfileFilled(true);
  };

  useEffect(() => {
    storeData(formData);
    checkProfile();
  }, [
    photo,
    bankAccount,
    billingAddress,
    birthday,
    mobile,
  ]);

  const requestProfile = async () => {
    const profile = await getProfile(currentUser);
    if (profile) setProfileExist(true);
  };

  useEffect(() => {
    requestProfile();
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

  const submitProfile = async () => {
    const result = await saveProfile(currentUser, formData);

    if (result) {
      setProfileExist(true);
      // dropStoredData();
    } else {
      showMessage(SAVE_PROFILE_FAIL);
    }
  };

  const submitOffer = async () => {
    const result = await makeOffer(currentUser, taskId);
    const message = result ? OFFER_SUCCESS : OFFER_FAIL;

    return showMessage(message);
  };

  const continueButton = (
    <Button
      onClick={profileExist
        ? submitOffer
        : submitProfile}
      color={'light-blue'}
      isDisabled={!profileFilled}
      long
    >
      Continue
    </Button>
  );

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
      {(profileExist && <MakeOffer />)
        || subPage
        || profileList
      }
    </div>
  );

  const footer = subPage ? backButton : continueButton;

  return (
    <>
      <Modal onRequestClose={pageToggler} >
        <Modal.Header>{header}</Modal.Header>
        <Modal.Content>{content}</Modal.Content>
        <Modal.Footer>{footer}</Modal.Footer>
      </Modal>
      <Message onRequestClose={profileExist && pageToggler} />
    </>
  );
}
