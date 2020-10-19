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

  const goBack = () => {
    loadSubPage('');
  };

  const profileList = (
    <div className={styles.profile_list_wrapper} >
      {Object.keys(FORM).map((key) => {
        const { label, Page } = FORM[key];
        const value = formData[key];

        const handleChange = (input) => {
          handleDataChange(key)(input);
          goBack();
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
  page.header = <Header goBack={subPage && goBack} />;
  page.content = <Content content={subPage || profileList} />;
  page.footer = (
    <Footer
      onBottomClick={subPage ? goBack : submitProfile}
      isBottomBtnDisabled={!subPage && !profileFilled}
      btnLabel={subPage ? 'Back' : 'Continue'}
    />
  );

  return page;
}
