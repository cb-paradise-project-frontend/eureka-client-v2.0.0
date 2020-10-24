import React from 'react';

import styles from './Posted.scss';

import PostTaskButton from '../../../../../components/PostTaskButton';

const Posted = ({
  postedTask,
}) => (
    <div className={styles.posted_wrapper}>
    {
      !postedTask ? (
        <React.Fragment>
          <span>You have not post any task yet</span>
          <PostTaskButton />
        </React.Fragment>
      ) : (
        <div>tasks</div>
      )
    }
    </div>
);

export default Posted;
