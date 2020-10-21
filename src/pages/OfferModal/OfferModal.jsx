import React, { useEffect, useState } from 'react';

import Modal from '../../components/Modal';
import { getProfile } from '../../apis';
import useMessageBox from '../../components/MessageBox/useMessageBox';
import useProfilePage from './ProfilePage';
import useOfferPage from './OfferPage';

export default function OfferModal({ pageToggler }) {
  const [Message, showMessage] = useMessageBox();

  const [profileExist, setProfileExist] = useState(false);

  const offerPage = useOfferPage(showMessage);
  const profilePage = useProfilePage(showMessage, setProfileExist);

  const currentPage = profileExist ? offerPage : profilePage;

  const { header, content, footer } = currentPage;

  const requestProfile = async () => {
    const profile = await getProfile();
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
