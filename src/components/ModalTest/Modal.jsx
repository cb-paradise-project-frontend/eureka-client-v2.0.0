import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

import Overlay from '../Overlay';
import CloseIconButton from '../CloseIconButton';
import AlertModal from './AlertModal';
import Landing from '../../pages/Landing';
import { useHistory } from 'react-router-dom';

const modalRoot = document.body;

export default function Modal({ confirmBeforeClose, children }) {
  const [showAlert, toggleAlert] = useState(false);
  const history  = useHistory();

  const pathLength = history.location.pathname.split('/').length - 1;
  const isLandingModal = pathLength < 2;

  const closeModal = history.goBack;

  const onRequestClose = confirmBeforeClose 
    ? () => {toggleAlert(true)}
    : closeModal;

  const onContinue = () => {
    toggleAlert(false);
  };

  return (
    <>
      {isLandingModal &&
        <Landing />
      }
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
        modalRoot
      )}
    </>
  );
};   