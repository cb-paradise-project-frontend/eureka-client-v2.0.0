import React from 'react';

import styles from './Tasks.module.scss';

import TaskNav from './TaskNav';
import Posted from './Posted';
import Assigned from './Assigned';

class Tasks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      taskType: 'Posted',
      postedTask: null,
      assignedTask: null,
    };

    this.handleNavChange = this.handleNavChange.bind(this);
  }

  handleNavChange(input) {
    this.setState({
      taskType: input,
    });
  }

  render() {
    const { taskType, postedTask, assignedTask } = this.state;
    const taskStatusSelection = ['Posted', 'Assigned'];

    return (
      <div className={styles.task_wrapper}>
        <div className={styles.task_nav}>
          {
            taskStatusSelection.map((taskStatus) => {
              return (
                <TaskNav
                  key={taskStatus}
                  onClick={() => this.handleNavChange(taskStatus)}
                  taskType={taskType}
                >
                  {taskStatus}
                </TaskNav>
              );
            })
          }
        </div>
        <div className={styles.task_content}>
          {
            taskType === 'Posted' ? (
              <Posted postedData={postedTask} />
            ) : (
              <Assigned assignedData={assignedTask} />
            )
          }
        </div>
      </div>
    );
  }
}

export default Tasks;
