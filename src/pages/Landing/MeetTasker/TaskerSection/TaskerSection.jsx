import React from "react";

import styles from "./TaskerSection.module.scss";

import TaskerImg from "./TaskerImg";
import TaskerProfile from "./TaskerProfile";

export const TaskerSection = (props) => (
  <div className={styles.taskerCard}>
    <TaskerImg />
    <TaskerProfile />
  </div>
);
