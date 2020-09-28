import React from 'react';

import styles from './AlertModal.module.scss';

import Button from '../../../components/Button';
import Modal from '../../../components/Modal';

export default function AlertModal({ onLeftBtnClick, onRightBtnClick, onRequestClose }) {
  const title = 'Sorry to see you go...';
  const information = "Are you sure? You're almost done and it's free to post a task...";

  const leftButton = (
    <Button
      onClick={onLeftBtnClick}
      color={'light-blue'}
    >
      Continue Task
    </Button>
  );

  const rightButton = (
    <Button
      onClick={onRightBtnClick}
      color={'red'}
    >
      Discard & Exit
    </Button>
  );

  const modalBottom = (
    <div className={styles.modal_bottom} >
      <div className={styles.button} >
        {leftButton}
      </div>
      <div className={styles.button} >
        {rightButton}
      </div>
    </div>
  );

  return (
    <Modal
      onRequestClose={onRequestClose}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>{information}</Modal.Content>
      <Modal.Footer>{modalBottom}</Modal.Footer>
    </Modal>
  );
}
