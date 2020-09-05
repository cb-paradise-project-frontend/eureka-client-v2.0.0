import React from "react";

import FeatureContent from "./FeatureContent/FeaturePostion";
import FeaturePostion from "./FeatureContent/FeaturePostion";



export const FeatureBlock = (props) => (
  <React.Fragment>
    <FeaturePostion ImgLeft />
    <FeaturePostion />
    <FeaturePostion ImgLeft />
    <FeaturePostion />
  </React.Fragment>
);

