import React from 'react';

import Button from '../Button';
import PostTask from '../../pages/PostTask';
import useToggleContent from '../../hooks/useToggleContent';

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
