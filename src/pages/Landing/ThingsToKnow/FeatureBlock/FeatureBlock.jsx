import React from "react";

import styles from "./FeatureBlock.module.scss";

import FeatureImg from "./FeatureImg";
import FeatureContent from "./FeatureContent";

function FeatureBlock(props) {
  return (
    <div className={styles.FeatureContainer}>
      <FeatureImg data ={props.data.img} />
      <FeatureContent data={props.data.content} />
    </div>
  );
}

export default FeatureBlock;
