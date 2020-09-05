import React from 'react';

import styles from './Modal.module.scss';

const Modal = ({heading, children}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.close}><i className="ri-close-fill ri-2x"></i></div>
      </header>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Modal;
