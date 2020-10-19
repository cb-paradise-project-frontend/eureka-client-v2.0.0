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

const Header = () => (
  <div className={styles.title} >
    Make an Offer
  </div>
);

const Content = () => (
  <div className={styles.content_wrapper} >
    <MakeOffer />
  </div>
);

const Footer = ({ onBottomClick }) => (
  <Button
    onClick={onBottomClick}
    color={'light-blue'}
    long
  >
    Next
  </Button>
);

export default function useOfferPage(showMessage) {
  const loadTaskList = useContext(LoadTaskContext);

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser && currentUser.userId;

  const { params: { taskId } } = useRouteMatch();

  const submitOffer = async () => {
    const result = await makeOffer(userId, taskId);
    const newMessage = result ? OFFER_SUCCESS : OFFER_FAIL;

    return showMessage(newMessage);
  };

  useEffect(() => (
    () => loadTaskList()
  ), []);

  const page = {};
  page.header = <Header />;
  page.content = <Content />;
  page.footer = <Footer onBottomClick={submitOffer} />;

  return page;
}
