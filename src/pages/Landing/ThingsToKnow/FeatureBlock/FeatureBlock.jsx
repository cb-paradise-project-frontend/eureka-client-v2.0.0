import React from "react";

import styles from "./FeatureBlock.module.scss";

import FeatureImg from "./FeatureImg";
import FeatureContent from "./FeatureContent";

function FeatureBlock(props) {
  return (
    props.imgFirst ? 
    (
      <div className={styles.FeatureContainer}>
      <FeatureImg data ={props.data.img} />
      <FeatureContent data={props.data.content} />
    </div>
    ) : (
      <div className={styles.FeatureContainer}>
      <FeatureContent data={props.data.content} />
      <FeatureImg data ={props.data.img} />
    </div>
    )
    
  );
}

export default FeatureBlock;
