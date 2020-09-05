import React from "react";

import { TaskerSection } from "./TaskerSection/TaskerSection";

import TaskerDisplay from "./TaskerDisplay";

import styles from "./MeetTasker.module.scss";

class MeetTasker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [1, 2, 3],
    };
  }

  render() {
    const { data, dataFromState } = this.state;

    return (
      <div className={styles.tasker}>
        <TaskerDisplay />
        <h2>Samantha Emily Brendan</h2>
        {data.map((singleDate, index) => (
          <TaskerSection key={index} import={dataFromState} />
        ))}
        <button className={styles.taskerButton}>Become a Tasker</button>
      </div>
    );
  }
}

export default MeetTasker;
