import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import styles from './OfferPage.module.scss';

import { makeOffer } from '../../../apis';
import Button from '../../../components/Button';
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
  const { params: { taskId } } = useRouteMatch();
  const history = useHistory();

  const [offered, setOffered] = useState(false);

  const submitOffer = async () => {
    const result = await makeOffer(taskId);
    const newMessage = result ? OFFER_SUCCESS : OFFER_FAIL;

    if (result) setOffered(true);

    return showMessage(newMessage);
  };

  useEffect(() => {
    if (offered) return history.push('/profile/tasks');
  }, [offered]);

  const page = {};
  page.header = <Header />;
  page.content = <Content />;
  page.footer = <Footer onBottomClick={submitOffer} />;

  return page;
}
