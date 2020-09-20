import React from 'react';

import styles from './SideBar.module.scss';

import PaymentPanel from './PaymentPanel';
import { TaskConsumer } from '../../TaskContext';

function SideBar() {
  return(
    <div className = {styles.side_bar} >
      <TaskConsumer>
        {({ status, budget }) => (
          <PaymentPanel 
            status = {status}
            budget = {budget}
          />
        )}     
      </TaskConsumer>
    </div>
  );
}

export default SideBar;