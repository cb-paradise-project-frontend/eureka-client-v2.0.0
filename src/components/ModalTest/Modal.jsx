import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Modal.module.scss';

import Overlay from '../Overlay';
import CloseIconButton from '../CloseIconButton';

const Modal = ({ onCloseClick, children }) => {
  const history = useHistory();

  const closeModal = history.goBack;

  const onRequestClose = onCloseClick || closeModal;

  return (
    <Overlay>
      <div className={styles.modal_container} >
        <div className={styles.close_button} >
          <CloseIconButton onClick={onRequestClose} />
        </div>
        {children}
      </div>
    </Overlay>
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
