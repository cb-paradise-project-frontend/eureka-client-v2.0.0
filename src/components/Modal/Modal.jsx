import React from 'react';

import styles from './Modal.module.scss';

import Overlay from './../Overlay';
import { LoginContext } from './../Login';

const Modal = ({heading, children}) => {
  return (
    <LoginContext>
      {
        ({hideLogin}) => (
          <Overlay>
            <div className={styles.container}>
              <header className={styles.header}>
                <div className={styles.heading}>{heading}</div>
                <button className={styles.close} onClick={hideLogin}>
                  <i className="ri-close-fill ri-2x"></i>
                </button>
              </header>
              <div className={styles.content}>
                {children}
              </div>
            </div>
          </Overlay>
        )
      }
    </LoginContext>
  )
}

export default Modal;
