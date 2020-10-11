import React from 'react';

import styles from './SideBar.module.scss';

import PaymentPanel from './PaymentPanel';

export default function SideBar() {
  return (
    <div className={styles.side_bar} >
      <PaymentPanel />
    </div>
  );
}
