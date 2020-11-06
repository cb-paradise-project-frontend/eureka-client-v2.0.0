import React, { useEffect, useState } from 'react';

import styles from './ProfilePage.module.scss';

import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import FORM from './form';
import LocalStorage from './utils/LocalStorage';
import { saveProfile } from '../../../apis';
import ProfileList from './ProfileList';
import useLoadingPage from '../../../hooks/useLoadingPage';
import Modal from '../../../components/Modal';

const SAVE_PROFILE_FAIL = 'Profile saving failed. Please try again later.';

const { getStoredData, storeData, dropStoredData } = new LocalStorage('userProfile');

const Header = ({ onGoBack }) => (
  <>
    {onGoBack &&
      <div className={styles.back_button_wrapper} >
        <Button.BackIcon onClick={onGoBack} />
      </div>
    }
    <div className={styles.title} >
      To Start Making Money
    </div>
  </>
);

const Content = ({ content }) => (
  <div className={styles.content_wrapper} >
    {content}
  </div>
);

const Footer = ({
  onBottomClick,
  isBottomBtnDisabled,
  btnLabel,
}) => (
  <Button
    onClick={onBottomClick}
    color={'light-blue'}
    isDisabled={isBottomBtnDisabled}
    long
  >
    {btnLabel}
  </Button>
);

export default function ProfilePage({
  showMessage, setProfileExist, pageToggler,
}) {
  const [subPage, loadSubPage] = useState();

  const [profileFilled, setProfileFilled] = useState(false);

  const [LoadingMask, toggleMask] = useLoadingPage(false);

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

  const goBack = () => {
    loadSubPage('');
  };

  const clickHandlers = Object
    .keys(FORM)
    .reduce((list, key) => {
      const value = formData[key];

      const handleChange = (input) => {
        handleDataChange(key)(input);
        goBack();
      };

      const { Page } = FORM[key];

      return {
        ...list,
        [key]: () => loadSubPage(
          <Page
            storedValue={value}
            onSubmit={handleChange}
          />
        ),
      };
    }, {});

  const profileList = (
    <ProfileList
      clickHandlers={clickHandlers}
      formData={formData}
    />
  );

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

  const submitProfile = async () => {
    toggleMask();

    const result = await saveProfile(formData);

    if (result) {
      setProfileExist(true);
      dropStoredData();
    } else {
      toggleMask();
      showMessage(SAVE_PROFILE_FAIL);
    }
  };

  return (
    <Modal onRequestClose={pageToggler} >
      <Modal.Header>
        <Header goBack={subPage && goBack} />
      </Modal.Header>
      <Modal.Content>
        <LoadingMask />
        <Content content={subPage || profileList} />
      </Modal.Content>
      <Modal.Footer>
        <Footer
          onBottomClick={subPage ? goBack : submitProfile}
          isBottomBtnDisabled={!subPage && !profileFilled}
          btnLabel={subPage ? 'Back' : 'Continue'}
        />
      </Modal.Footer>
    </Modal>
  );
}
