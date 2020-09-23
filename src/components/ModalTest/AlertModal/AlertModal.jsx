import React, { useState } from 'react';

import styles from './AlertModal.module.scss';

import ModalPage from '../../ModalPage';
import Button from '../../Button';
import CloseIconButton from '../../CloseIconButton';

export default function AlertModal({ onLeftBtnClick, onRightBtnClick }) {
  const [isModalOpen, toggleModal] = useState(true);

  const title = `Sorry to see you go...`;
  const information = `Are you sure? You're almost done and it's free to post a task...`;

  const handleQuit = () => {
    toggleModal(false);
    onRightBtnClick();
  };

  const leftButton = (
    <Button
      onClick={onLeftBtnClick}
    >
      Continue Task
    </Button>
  );

  const rightButton = (
    <Button
    onClick={handleQuit}
  >
    Discard & Exit
  </Button>
  );

  const modalBottom = (
    <div className={styles.modal_bottom} >
      <div className={styles.left_button} >
        {leftButton}
      </div>
      <div className={styles.right_button} >
        {rightButton}
      </div>
    </div>
  );

  return (
    <>
      {isModalOpen &&
        <div className={styles.modal_container} >
          <div className={styles.close_button} >
            <CloseIconButton onClick={onLeftBtnClick} /> 
          </div>
          <ModalPage
            header={title}
            content={information}
            footer={modalBottom}
          />
        </div>
      }
    </>
  );
};