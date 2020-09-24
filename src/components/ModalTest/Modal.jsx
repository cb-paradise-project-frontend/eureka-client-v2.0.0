import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Modal.module.scss';

import Overlay from '../Overlay';
import Button from '../Button';

const Modal = ({ onRequestClose, children }) => (
  <Overlay>
    <div className={styles.modal_container} >
      <div className={styles.close_button_wrapper} >
        <Button.CloseIcon onClick={onRequestClose} />
      </div>
      {children}
    </div>
  </Overlay>
);

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

const GoBackWhenClose = ({ children }) => {
  const { goBack } = useHistory();
  return (
    <Modal onRequestClose={goBack} >
      {children}
    </Modal>
  );
};

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
Modal.GoBackWhenClose = GoBackWhenClose;

export default Modal;
