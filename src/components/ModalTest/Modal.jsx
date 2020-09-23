import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

import styles from './Modal.module.scss';

import Overlay from '../Overlay';
import AlertModal from './AlertModal';
import CloseIconButton from '../CloseIconButton';

// const modalRoot = document.body;

const Modal = ({ confirmBeforeClose, children }) => {
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
      {
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
        </Overlay>
      }
    </>
  );
};

const Header = ({ children }) => (
  <div className={styles.header} >
    {children}
  </div>
);

const Content = ({ children }) => (
  <div className={styles.content} >
    {children}
  </div>
);

const Footer = ({ children }) => (
  <div className={styles.footer} >
    {children}
  </div>
);

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
