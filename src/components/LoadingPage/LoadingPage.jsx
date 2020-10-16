import React from 'react';

import styles from './LoadingPage.module.scss';

import Overlay from '../Overlay';

export default function LoadingPage() {
  return (
    <Overlay>
      <div className={styles.icon_wrapper} >
        <i className="ri-loader-4-fill ri-3x" />
      </div>
    </Overlay>
  );
}
