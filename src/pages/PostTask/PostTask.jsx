import React from 'react';

import styles from './PostTaskStyles.module.scss';

import PostTaskForm from './PostTaskForm';
import Modal from '../../components/ModalTest';

function PostTask() {
  return (
    <Modal confirmBeforeClose>
      <div className={styles.container}>
        <PostTaskForm />
      </div>
    </Modal>
  );
}
export default PostTask;
