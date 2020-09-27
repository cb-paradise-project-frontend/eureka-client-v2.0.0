import React from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

import Overlay from '../Overlay';
import Button from '../Button';

const modalRoot = document.body;

const Modal = ({ onRequestClose, children }) => (
  createPortal(
    <Overlay>
      <div className={styles.modal_container} >
        <div className={styles.close_button_wrapper} >
          <Button.CloseIcon onClick={onRequestClose} />
        </div>
        {children}
      </div>
    </Overlay>,
    modalRoot,
  )
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

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
