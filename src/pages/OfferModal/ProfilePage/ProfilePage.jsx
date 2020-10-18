import React, { useContext, useEffect, useState } from 'react';

import styles from './ProfilePage.module.scss';

import ProfileItem from './ProfileItem';
import useForm from './SubPages/useForm';
import FORM from './form';
import createBirthdayLabel from './utils/createBirthdayLabel';
import LocalStorage from './utils/LocalStorage';
import Button from '../../../components/Button';
import { AuthContext } from '../../../auth/Auth';
import { saveProfile } from '../../../apis';

const SAVE_PROFILE_FAIL = 'Profile saving failed. Please try again later.';

const { getStoredData, storeData, dropStoredData } = new LocalStorage('userProfile');

export default function useProfilePage(showMessage, setProfileExist) {
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
