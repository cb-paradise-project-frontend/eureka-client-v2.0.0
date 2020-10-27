import React, { useEffect, useState } from 'react';

import { getProfile } from '../../apis';
import useMessageBox from '../../components/MessageBox/useMessageBox';
import OfferPage from './OfferPage';
import ProfilePage from './ProfilePage';

export default function OfferModal({ pageToggler }) {
  const [Message, showMessage] = useMessageBox();

  const [profileExist, setProfileExist] = useState(false);

  const requestProfile = async () => {
    const profile = await getProfile();
    if (profile) setProfileExist(true);
  };

  useEffect(() => {
    requestProfile();
  }, []);

  const CurrentPage = profileExist
    ? { Content: OfferPage }
    : {
      Content: ProfilePage,
      onMessageClose: pageToggler,
    };

  return (
    <>
      <CurrentPage.Content
        showMessage={showMessage}
        pageToggler={pageToggler}
        setProfileExist={setProfileExist}
      />
      <Message onRequestClose={CurrentPage.onMessageClose} />
    </>
  );
}
