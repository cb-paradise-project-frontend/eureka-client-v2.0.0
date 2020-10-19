import React, { useContext, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { makeOffer } from '../../../apis';
import { AuthContext } from '../../../auth/Auth';
import { LoadTaskContext } from '../../Browse/TaskDetail/LoadTaskContext';
import OfferPage from './OfferPage';

const OFFER_SUCCESS = 'Offer have been sent to the task owner!';
const OFFER_FAIL = 'Request sending failed. Please try again later.';

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
  page.header = <OfferPage.Header />;
  page.content = <OfferPage.Content />;
  page.footer = <OfferPage.Footer onBottomClick={submitOffer} />;

  return page;
}
