import React from "react";

import styles from "./ThingsToKnow.module.scss";

import FeatureBlock from './FeatureBlock';

function ThingsToKnow(props) {
  const { data } = props;
  return (
    <div>
      <div className={styles.title}>Things you might also want to know</div>
      <div className={styles.content}>
        Whether you’re getting work done or doing tasks on Airtasker, know that
        we’ve got your back every step of the way.
      </div>

      {data.map((singleData, index) => (
        <FeatureBlock imgFirst={!(index % 2)} key={index} data={singleData} />
      ))}
      
    </div>
  );
}

export default ThingsToKnow;

