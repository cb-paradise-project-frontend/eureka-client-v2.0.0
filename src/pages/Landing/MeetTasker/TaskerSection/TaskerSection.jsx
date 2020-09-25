import React from "react";

import styles from "./TaskerSection.module.scss";

import TaskerImg from "./TaskerImg";
import TaskerProfile from "./TaskerProfile";

function TaskerSection(props) {
  return (
    <div className={styles.taskerCard}>
      <TaskerImg data ={props.data.img} />
      <TaskerProfile data={props.data.profile} />
    </div>
  );
}

export default TaskerSection;
