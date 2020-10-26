import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import styles from './OfferPage.module.scss';

import { makeOffer } from '../../../apis';
import Button from '../../../components/Button';
import MakeOffer from './MakeOffer';
import Modal from '../../../components/Modal';
import TextArea from '../../../components/TextArea';

const OFFER_SUCCESS = 'Offer have been sent to the task owner!';
const OFFER_FAIL = 'Request sending failed. Please try again later.';

const Header = () => (
  <div className={styles.title} >
    Make an Offer
  </div>
);

const Content = ({
  message, setMessage,
}) => (
  <div className={styles.content_wrapper} >
    <MakeOffer />
    <div className={styles.message} >
      Comment (Optional)
      <TextArea
        maxLength="1500"
        size="large"
        displayValue={message}
        onInputChange={setMessage}
        placeHolder="Leave a message to the task owner"
      />
    </div>
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

export default function OfferPage({ showMessage, pageToggler }) {
  const { params: { taskId } } = useRouteMatch();
  const history = useHistory();

  const [offered, setOffered] = useState(false);

  const [message, setMessage] = useState();

  const submitOffer = async () => {
    const result = await makeOffer(taskId, message);
    const newMessage = result ? OFFER_SUCCESS : OFFER_FAIL;

    if (result) setOffered(true);

    return showMessage(newMessage);
  };

  useEffect(() => {
    if (offered) return history.push('/profile/tasks');
  }, [offered]);

  return (
    <Modal onRequestClose={pageToggler} >
      <Modal.Header>
        <Header />
      </Modal.Header>
      <Modal.Content>
        <Content
          message={message}
          setMessage={setMessage}
        />
      </Modal.Content>
      <Modal.Footer>
        <Footer onBottomClick={submitOffer} />
      </Modal.Footer>
    </Modal>
  );
}
