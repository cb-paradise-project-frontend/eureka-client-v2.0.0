import React from "react";
import { FeatureBlock } from "./FeatureBlock/FeatureBlock";
import styles from "./ThingsToKnow.module.scss";

function ThingsToKnow () {
  return(
    <div>
      <div className={styles.title}>Things you might also want to know</div>
      <div className={styles.content}>
        Whether you’re getting work done or doing tasks on Airtasker, know that
        we’ve got your back every step of the way.
      </div>
      <FeatureBlock />
    </div>
  );
}
  
export default ThingsToKnow;
