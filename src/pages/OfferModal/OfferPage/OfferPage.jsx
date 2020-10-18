import React, { useContext, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import styles from './OfferPage.module.scss';

import { makeOffer } from '../../../apis';
import { AuthContext } from '../../../auth/Auth';
import Button from '../../../components/Button';
import { LoadTaskContext } from '../../Browse/TaskDetail/LoadTaskContext';
import MakeOffer from './MakeOffer';

const OFFER_SUCCESS = 'Offer have been sent to the task owner!';
const OFFER_FAIL = 'Request sending failed. Please try again later.';

export default function useOfferPage(showMessage) {
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
