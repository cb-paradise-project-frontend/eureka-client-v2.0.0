import React from 'react';

import styles from './Posted.scss';

import PostTask from '../../../../PostTask';
import ToggleContent from '../../../../../components/ToggleContent';
import Button from '../../../../../components/Button';

const PostTaskButton = () => (
  <ToggleContent
    toggle={(toggler) => (
      <div className={styles.post_task_button_wrapper} >
        <Button
          color={'navy'}
          onClick={toggler}
          size={'navbar'}
        >
          Post a Task
        </Button>
      </div>
    )}
    content={(toggler) => (
      <PostTask pageToggler={toggler} />
    )}
  />
);

const Posted = ({
  postedTask,
}) => (
    <div className={styles.posted_wrapper}>
    {
      !postedTask ? (
        <React.Fragment>
          <span>You have not post any task yet</span>
          {PostTaskButton()}
        </React.Fragment>
      ) : (
        <div>tasks</div>
      )
    }
    </div>
);

export default Posted;
