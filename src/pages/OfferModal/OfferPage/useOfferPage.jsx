import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { makeOffer } from '../../../apis';
import OfferPage from './OfferPage';

const OFFER_SUCCESS = 'Offer have been sent to the task owner!';
const OFFER_FAIL = 'Request sending failed. Please try again later.';

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
  page.header = <OfferPage.Header />;
  page.content = <OfferPage.Content />;
  page.footer = <OfferPage.Footer onBottomClick={submitOffer} />;

  return page;
}
