import React from "react";

import styles from "./TaskerSection.module.scss";

import Samantha from "../../../../assets/tasker-samantha.png";

export const TaskerSection = (props) => (
  <div className={styles.taskerCard}>
    <img src={Samantha} alt="taskerPhoto" className={styles.taskerPhoto}></img>
    <div>Samantha</div>
    <div>Specialities: assembly, pet care, gardening</div>
    <div>
      Returning to the workforce as a single mum, Sam had to find something that
      could be flexible and cover the cost of childcare.
    </div>
  </div>
);
