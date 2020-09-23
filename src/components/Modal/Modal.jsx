import React from 'react';

import styles from './Modal.module.scss';

import Overlay from '../Overlay';
import { AuthContext } from '../../auth/Auth';

const Modal = ({ heading, children }) => (
    <AuthContext.Consumer>
      {({ hideAuthModal }) => (
        <Overlay>
          <div className={styles.container}>
            <header className={styles.header}>
              <div className={styles.heading}>{heading}</div>
              <button className={styles.close} onClick={hideAuthModal}>
                <i className="ri-close-fill ri-2x"></i>
              </button>
            </header>
            <div className={styles.content}>
              {children}
            </div>
          </div>
        </Overlay>
      )}
    </AuthContext.Consumer>
);

export default Modal;
