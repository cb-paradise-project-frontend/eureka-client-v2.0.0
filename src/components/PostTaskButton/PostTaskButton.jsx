import React from 'react';

import styles from './PostTaskModal.module.scss';

import Button from '../Button';
import { useToggleContent } from '../ToggleContent';
import PostTask from '../../pages/PostTask';

export default function PostTaskButton() {
  const [Modal, toggleModal] = useToggleContent();

  return (
    <>
      <div className={styles.post_task_button_wrapper} >
        <Button
          color={'navy'}
          onClick={toggleModal}
          size={'navbar'}
        >
          Post a Task
        </Button>
      </div>
      <Modal>
        <PostTask pageToggler={toggleModal} />
      </Modal>
    </>
  );
}
