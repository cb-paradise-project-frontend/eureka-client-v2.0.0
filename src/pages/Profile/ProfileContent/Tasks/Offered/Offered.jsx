import React from 'react';

import styles from './Offered.scss';
import Browse from '../../../../Browse';

const offered = ({
  offeredTask,
}) => (
    <div className={styles.offered_wrapper}>
    {
      !offeredTask ? (
        <React.Fragment>
          <span>You haven't make any offer yet</span>
          { /*<Browse /> */}
        </React.Fragment>
      ) : (
        <div>tasks</div>
      )
    }
    </div>
);

export default offered;
