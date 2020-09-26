import React from 'react';

import styles from './PostTaskStyles.module.scss';

import PostTaskForm from './PostTaskForm';
import Modal from '../../components/ModalTest';
import AlertModal from '../../pages/PostTask/AlertModal';
import { useToggleContent } from '../../components/ToggleContent';

export default function PostTask({ pageToggler }) {
  const [toggleAlert, Alert] = useToggleContent();
  return (
    <Modal onRequestClose={toggleAlert}>
      <div className={styles.container}>
        <Alert>
          <AlertModal
            onRequestClose={toggleAlert}
            onLeftBtnClick={toggleAlert}
            onRightBtnClick={pageToggler}
          />
        </Alert>
      <PostTaskForm />
      </div>
    </Modal>
  );
}
