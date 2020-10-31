import React, { useState } from 'react';
import { assignTask, completeTask } from '../../../../../../apis';
import Button from '../../../../../../components/Button';
import useMessageBox from '../../../../../../components/MessageBox/useMessageBox';
import Modal from '../../../../../../components/Modal';
import Section from '../../../../../../components/TaskSection';
import CommentList from '../../../../../Browse/TaskDetail/Comment/CommentList';
import OfferItem from '../../../../../Browse/TaskDetail/Offers/OfferItem';

import styles from './TaskModal.module.scss';

export default function TaskModal({
  task, onRequestClose, loadTask,
}) {
  const [offerer, setOfferer] = useState();

  const [Message, showMessage] = useMessageBox();

  const {
    id,
    status,
    title,
    offers,
    comments,
    category,
    budget,
    location,
    due,
    description,
    acceptedBy,
  } = task;

  const assignedOffer = (status === 'ASSIGNED')
    && offers.find((offer) => offer.offeredBy.id === acceptedBy);

  const handleSelect = (userId) => () => (
    setOfferer(userId)
  );

  const SelectButton = ({ userId }) => (
    <div className={styles.select_button} >
      <Button
        size="small"
        color={(userId === offerer) ? 'green' : 'navy'}
        onClick={handleSelect(userId)}
        isDisabled={assignedOffer}
      >
        {(userId === offerer) ? 'Selected' : 'Select'}
      </Button>
    </div>
  );

  const offerList = offers.map((offer) => (
    <div className={styles.offer_wrapper} key={offer._id} >
      {(status === 'OPEN') && <SelectButton userId={offer.offeredBy.id} />}
      <OfferItem offer={offer} showBid />
    </div>
  ));

  const SideBar = () => (
    <div className={styles.side_bar} >
      <div className={styles.category} >
        {category}
      </div>
      <div className={styles.budget} >
        $ {budget}
      </div>
    </div>
  );

  const handleAssign = async () => {
    const response = await assignTask(id, offerer);

    if (response) {
      onRequestClose();
      loadTask();
    }
  };

  const AssignButton = () => (
    <div className={styles.button} >
      <Button
        color="navy"
        isDisabled={!offerer}
        onClick={handleAssign}
        long
      >
        Assign
      </Button>
    </div>
  );

  const handleComplete = async () => {
    const response = await completeTask(id);

    if (response) {
      onRequestClose();
      loadTask();
    }
  };

  const handleRequestComplete = () => {
    showMessage('Do you confirm that the task is completed?');
  };

  const CompleteButton = () => (
    <div className={styles.button} >
      <Button
        color="red"
        onClick={handleRequestComplete}
        long
      >
        Complete
      </Button>
    </div>
  );

  return (
    <>
      <Modal onRequestClose={onRequestClose}>
        <Modal.Header>
          {title}
        </Modal.Header>
        <Modal.Content>
          <div className={styles.task_detail} >
            <SideBar />
            <Section title={'DUE'} >
              {new Date(due).toDateString()}
            </Section>
            <Section title={'LOCATION'} >
              {location}
            </Section>
            <Section title={'DESCRIPTION'} >
              {description}
            </Section>
            <Section title={assignedOffer ? 'ASSIGNED' : 'OFFER'} >
              {(assignedOffer)
                ? <OfferItem offer={assignedOffer} showBid />
                : offerList}
            </Section>
            <Section title={`COMMENT(${comments.length})`} >
              <CommentList comments={comments} />
            </Section>
          </div>
        </Modal.Content>
        {(status !== 'COMPLETED') &&
          <Modal.Footer>
            <div className={styles.footer} >
              {(status === 'OPEN') && <AssignButton />}
              <CompleteButton />
            </div>
          </Modal.Footer>
        }
      </Modal>
      <Message onRequestClose={handleComplete} />
    </>
  );
}
