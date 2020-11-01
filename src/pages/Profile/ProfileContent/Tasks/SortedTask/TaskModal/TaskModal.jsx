import React, { useContext, useState } from 'react';
import { assignTask, completeTask } from '../../../../../../apis';
import { AuthContext } from '../../../../../../auth/Auth';
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

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser && currentUser.userId;

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
    postedBy,
  } = task;

  const assignedOffer = (status === 'ASSIGNED')
    && offers.find((offer) => offer.offeredBy.id === acceptedBy);

  const handleSelect = (targetId) => () => (
    setOfferer(targetId)
  );

  const SelectButton = ({ targetId }) => (
    <div className={styles.select_button} >
      <Button
        size="small"
        color={(targetId === offerer) ? 'green' : 'navy'}
        onClick={handleSelect(targetId)}
        isDisabled={assignedOffer}
      >
        {(targetId === offerer) ? 'Selected' : 'Select'}
      </Button>
    </div>
  );

  const offerList = offers.map((offer) => (
    <div className={styles.offer_wrapper} key={offer._id} >
      {(status === 'OPEN') && (userId === postedBy) &&
        <SelectButton targetId={offer.offeredBy.id} />
      }
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

  const offerSections = {
    OPEN: offerList,
    ASSIGNED: <OfferItem offer={assignedOffer} showBid />,
    COMPLETED: assignedOffer && <OfferItem offer={assignedOffer} showBid />,
  };

  const footers = {
    OPEN: (
      <>
        <AssignButton />
        <CompleteButton />
      </>
    ),
    ASSIGNED: <CompleteButton />,
  };

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
              {offerSections[status]}
            </Section>
            <Section title={`COMMENT(${comments.length})`} >
              <CommentList comments={comments} />
            </Section>
          </div>
        </Modal.Content>
        {(status !== 'COMPLETED') &&
          <Modal.Footer>
            {(userId === postedBy) &&
              <div className={styles.footer} >
                {footers[status] || null}
              </div>
            }
          </Modal.Footer>
        }
      </Modal>
      <Message onRequestClose={handleComplete} />
    </>
  );
}
