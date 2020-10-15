import React from 'react';

import styles from './MessageBox.module.scss';

import Button from '../Button';
import Modal from '../Modal';

export default function MessageBox({
  onRequestClose, info, children,
}) {
  return (
    <Modal onRequestClose={onRequestClose} >
      <Modal.Content>
        <div className={styles.content} >
          {info || children}
        </div>
      </Modal.Content>
      <Modal.Footer>
        <div className={styles.button_wrapper} >
          <Button
            color="blue"
            onClick={onRequestClose}
            long
          >
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
