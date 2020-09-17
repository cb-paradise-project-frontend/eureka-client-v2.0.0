import React from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

import Overlay from '../Overlay';
import CloseIconButton from '../CloseIconButton';

export default function Modal({ onRequestClose, children }) {
  const modalRoot = document.body;

  return (
    <>
      {createPortal(
        <Overlay>
          <div className={styles.modal_container} >
            <div className={styles.close_button} >
              <CloseIconButton onClick={onRequestClose} /> 
            </div>
            {children}
          </div>     
        </Overlay>,
        modalRoot
      )}
    </>
  );
};   