import React from 'react';

import styles from './Tasks.module.scss';

import TaskNav from './TaskNav';
import SortedTask from './SortedTask';
import getTaskByOwnerId from '../../../../apis/Task/getTaskByOwnerId';
import getTaskByOffererId from '../../../../apis/Task/getTaskByOffererId';

class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskType: 'Posted',
      Posted: null,
      Offered: null,
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
    const postedTask = await getTaskByOwnerId();
    const offeredTask = await getTaskByOffererId();

    this.setState({
      Posted: postedTask,
      Offered: offeredTask,
    });
  }

  componentDidMount() {
    this.loadTask();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.postedTask) return;
    const { length } = prevState.postedTask;
    if (length !== this.state.Posted.length) this.loadTask();
  }

  render() {
    const { taskType, ...taskSorts } = this.state;
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
          <SortedTask
            loadTask={this.loadTask}
            sortedTask={taskSorts[taskType]}
          />
        </div>
      </div>
    );
  }
}

export default Tasks;
