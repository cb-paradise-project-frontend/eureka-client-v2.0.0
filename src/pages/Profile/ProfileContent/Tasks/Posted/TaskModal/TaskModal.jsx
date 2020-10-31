import React from 'react';
import Modal from '../../../../../../components/Modal';
import Section from '../../../../../../components/TaskSection';
import CommentList from '../../../../../Browse/TaskDetail/Comment/CommentList';
import OfferItem from '../../../../../Browse/TaskDetail/Offers/OfferItem';

import styles from './TaskModal.module.scss';

export default function TaskModal({ task, onRequestClose }) {
  const {
    title,
    offers,
    comments,
    category,
    budget,
    location,
    due,
    description,
  } = task;

  const offerList = offers.map((offer) => (
    <OfferItem key={offer._id} offer={offer} />
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

  return (
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
          <Section title={'OFFER'} >
            {offerList}
          </Section>
          <Section title={`COMMENT(${comments.length})`} >
            <CommentList comments={comments} />
          </Section>
        </div>
      </Modal.Content>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}
