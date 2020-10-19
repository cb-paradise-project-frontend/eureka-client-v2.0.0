import React, { useContext, useEffect, useState } from 'react';

import styles from './ProfilePage.module.scss';

import useForm from './SubPages/useForm';
import FORM from './form';
import LocalStorage from './utils/LocalStorage';
import { AuthContext } from '../../../auth/Auth';
import { saveProfile } from '../../../apis';
import ProfilePage from './ProfilePage';
import ProfileList from './ProfileList';

const SAVE_PROFILE_FAIL = 'Profile saving failed. Please try again later.';

const { getStoredData, storeData, dropStoredData } = new LocalStorage('userProfile');

export default function useProfilePage(
  showMessage, setProfileExist,
) {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser && currentUser.userId;

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
    const result = await saveProfile(userId, formData);

    if (result) {
      setProfileExist(true);
      // dropStoredData();
    } else {
      showMessage(SAVE_PROFILE_FAIL);
    }
  };

  const page = {};

  page.header = <ProfilePage.Header goBack={subPage && goBack} />;
  page.content = <ProfilePage.Content content={subPage || profileList} />;
  page.footer = (
    <ProfilePage.Footer
      onBottomClick={subPage ? goBack : submitProfile}
      isBottomBtnDisabled={!subPage && !profileFilled}
      btnLabel={subPage ? 'Back' : 'Continue'}
    />
  );

  return page;
}
