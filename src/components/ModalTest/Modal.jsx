import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

import Overlay from '../Overlay';
import CloseIconButton from '../CloseIconButton';
import AlertModal from '../AlertModal';

export default function Modal({ closeModal, children }) {
  const [showAlert, toggleAlert] = useState(false);

  const modalRoot = document.body;

  const onRequestClose = () => {
    toggleAlert(true);
  };
  const onContinue = () => {
    toggleAlert(false);
  }

  return (
    <>
      {createPortal(
        <Overlay>
          <div className={styles.modal_container} >
            <div className={styles.close_button} >
              <CloseIconButton onClick={onRequestClose} /> 
            </div>
            {children}
            {showAlert && 
              <Overlay>
                <AlertModal 
                  onConfirm={closeModal} 
                  onQuit={onContinue}
                />
              </Overlay>
            }
          </div>     
        </Overlay>,
        modalRoot
      )}
    </>
  );
};   