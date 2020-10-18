import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import styles from './OfferModal.module.scss';

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
import { LoadTaskContext } from '../Browse/TaskDetail/LoadTaskContext';

const OFFER_SUCCESS = 'Offer have been sent to the task owner!';
const OFFER_FAIL = 'Request sending failed. Please try again later.';

const SAVE_PROFILE_FAIL = 'Profile saving failed. Please try again later.';

const { getStoredData, storeData, dropStoredData } = new LocalStorage('userProfile');

function useProfilePage(showMessage, setProfileExist) {
  const { currentUser } = useContext(AuthContext);
  const [subPage, loadSubPage] = useState();
  const [profileFilled, setProfileFilled] = useState(false);
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

  const handleBackBtnClick = () => {
    loadSubPage('');
  };

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

  const submitProfile = async () => {
    const result = await saveProfile(currentUser, formData);

    if (result) {
      setProfileExist(true);
      // dropStoredData();
    } else {
      showMessage(SAVE_PROFILE_FAIL);
    }
  };

  const continueButton = (
    <Button
      onClick={submitProfile}
      color={'light-blue'}
      isDisabled={!profileFilled}
      long
    >
      Continue
    </Button>
  );

  const footer = subPage ? backButton : continueButton;

  const page = {};
  page.header = header;
  page.content = content;
  page.footer = footer;

  return page;
}

function useOfferPage(showMessage) {
  const { currentUser } = useContext(AuthContext);
  const { params: { taskId } } = useRouteMatch();

  const header = (
    <div className={styles.title} >
      Make an Offer
    </div>
  );

  const content = (
    <div className={styles.content_wrapper} >
      <MakeOffer />
    </div>
  );

  const submitOffer = async () => {
    const result = await makeOffer(currentUser, taskId);
    const newMessage = result ? OFFER_SUCCESS : OFFER_FAIL;

    return showMessage(newMessage);
  };

  const nextButton = (
    <Button
      onClick={submitOffer}
      color={'light-blue'}
      long
    >
      Next
    </Button>
  );

  const footer = nextButton;

  const loadTaskList = useContext(LoadTaskContext);

  useEffect(() => (
    () => loadTaskList()
  ), []);

  const page = {};
  page.header = header;
  page.content = content;
  page.footer = footer;

  return page;
}

export default function OfferModal({ pageToggler }) {
  const { currentUser } = useContext(AuthContext);
  const [Message, showMessage] = useMessageBox();
  const [profileExist, setProfileExist] = useState(false);
  const offerPage = useOfferPage(showMessage);
  const profilePage = useProfilePage(showMessage, setProfileExist);

  const currentPage = profileExist ? offerPage : profilePage;

  const { header, content, footer } = currentPage;

  const requestProfile = async () => {
    const profile = await getProfile(currentUser);
    if (profile) setProfileExist(true);
  };

  useEffect(() => {
    requestProfile();
  }, []);

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
