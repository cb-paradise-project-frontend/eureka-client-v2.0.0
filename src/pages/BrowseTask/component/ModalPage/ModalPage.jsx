import React from 'react';

import styles from './ModalPage.module.scss';

export default function ModalPage({ header, content, footer}) {
  return (
    <div className={styles.overlay} >
      <div className={styles.modal_page} >
        <div className={styles.header} >
          {header}
        </div>
        <div className={styles.content} >
          {content}
        </div>
        <div className={styles.footer} >
          {footer}
        </div>
      </div>
    </div>
  );
}