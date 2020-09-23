import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import styles from './Modal.module.scss';

import Overlay from '../Overlay';
import CloseIconButton from '../CloseIconButton';
import AlertModal from './AlertModal';

const modalRoot = document.body;

export default function Modal({ confirmBeforeClose, children }) {
  const [showAlert, toggleAlert] = useState(false);
  const history = useHistory();

  const closeModal = history.goBack;

  const onRequestClose = confirmBeforeClose
    ? () => { toggleAlert(true); }
    : closeModal;

  const onContinue = () => {
    toggleAlert(false);
  };

  return (
    <>
      {createPortal(
        <Overlay>
          <div className={styles.modal_container} >
            <div className={styles.close_button} >
              <CloseIconButton onClick={onRequestClose} />
            </div>
            {children}
            {confirmBeforeClose && showAlert &&
              <Overlay>
                <AlertModal
                  onLeftBtnClick={onContinue}
                  onRightBtnClick={closeModal}
                />
              </Overlay>
            }
          </div>
        </Overlay>,
        modalRoot,
      )}
    </>
  );
}
