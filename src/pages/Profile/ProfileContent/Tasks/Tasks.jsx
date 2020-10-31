import React from 'react';

import styles from './Tasks.module.scss';

import TaskNav from './TaskNav';
import Posted from './Posted';
import Offered from './Offered';
import getTaskByUserId from '../../../../apis/Task/getTaskByUserId';

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskType: 'Posted',
      postedTask: null,
      offeredTask: null,
    };

    this.handleNavChange = this.handleNavChange.bind(this);
    this.loadTask = this.loadTask.bind(this);
  }

  handleNavChange(input) {
    this.setState({
      taskType: input,
    });
  }

  async loadTask() {
    const tasks = await getTaskByUserId();

    if (tasks) {
      this.setState({
        postedTask: tasks,
      });
    }
  }

  componentDidMount() {
    this.loadTask();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.postedTask) return;
    const { length } = prevState.postedTask;
    if (length !== this.state.postedTask.length) this.loadTask();
  }

  render() {
    const { taskType, postedTask, offeredTask } = this.state;
    const taskStatusSelection = ['Posted', 'Offered'];

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
          {(taskType === 'Posted')
            ? (
              <Posted
                loadTask={this.loadTask}
                postedTask={postedTask}
              />
            ) : <Offered offeredTask={offeredTask} />
          }
        </div>
      </div>
    );
  }
}

export default Tasks;
