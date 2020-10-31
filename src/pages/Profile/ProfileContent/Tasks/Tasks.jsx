import React from 'react';

import styles from './Tasks.module.scss';

import TaskNav from './TaskNav';
import Posted from './Posted';
import Assigned from './Assigned';
import getTaskByUserId from '../../../../apis/Task/getTaskByUserId';

class Tasks extends React.Component {
  constructor(props) {
    super(props);

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

  async loadTask() {
    const tasks = await getTaskByUserId();

    console.log(tasks);

    if (tasks) {
      this.setState({
        postedTask: tasks,
      });
    }
  }

  componentDidMount() {
    this.loadTask();
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
              <Posted postedTask={postedTask} />
            ) : (
              <Assigned assignedTask={assignedTask} />
            )
          }
        </div>
      </div>
    );
  }
}

export default Tasks;
