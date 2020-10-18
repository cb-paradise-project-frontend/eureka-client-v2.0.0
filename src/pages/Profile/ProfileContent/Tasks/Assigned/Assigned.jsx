import React from 'react';

import styles from './Assigned.scss';
import Browse from '../../../../Browse';

const assigned = ({
  assignedTask,
}) => (
    <div className={styles.assigned_wrapper}>
    {
      !assignedTask ? (
        <React.Fragment>
          <span>You have not assign any task yet</span>
          { /*<Browse /> */}
        </React.Fragment>
      ) : (
        <div>tasks</div>
      )
    }
    </div>
);

export default assigned;
