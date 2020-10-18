import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import styles from './OfferModal.module.scss';

import Modal from '../../components/Modal';
import Button from '../../components/Button';
import { getProfile, makeOffer } from '../../apis';
import { AuthContext } from '../../auth/Auth';
import useMessageBox from '../../components/MessageBox/useMessageBox';
import { LoadTaskContext } from '../Browse/TaskDetail/LoadTaskContext';
import useProfilePage from './ProfilePage';
import MakeOffer from './OfferPage/MakeOffer';

const OFFER_SUCCESS = 'Offer have been sent to the task owner!';
const OFFER_FAIL = 'Request sending failed. Please try again later.';

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
