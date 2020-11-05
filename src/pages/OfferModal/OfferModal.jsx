import React, { useEffect, useState } from 'react';

import { getProfile } from '../../apis';
import useMessageBox from '../../hooks/useMessageBox';
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
    ? {
      Content: OfferPage,
      onMessageClose: pageToggler,
    }
    : { Content: ProfilePage };

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
