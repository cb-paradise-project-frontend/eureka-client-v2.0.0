import React from 'react';

import styles from './PostTaskModal.module.scss';

import Button from '../Button';
import { useToggleContent } from '../ToggleContent';
import PostTask from '../../pages/PostTask';

export default function PostTaskButton() {
  const [Modal, toggleModal] = useToggleContent();

  return (
    <>
      <Button
        color={'navy'}
        onClick={toggleModal}
        size={'navbar'}
      >
        Post a Task
      </Button>
      <Modal>
        <PostTask pageToggler={toggleModal} />
      </Modal>
    </>
  );
}
