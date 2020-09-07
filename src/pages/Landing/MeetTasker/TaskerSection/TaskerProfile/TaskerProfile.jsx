import React from "react";

import star from "../../../../../assets/star.png";
import police from "../../../../../assets/badge-police.png";
import id from "../../../../../assets/badge-id.png";

import styles from "./TaskerProfile.module.scss";

function TaskerProfile() {
  return (
    <React.Fragment>
    <div className="profile_description">
        <h4>Samantha</h4>
      <p>Specialities: assembly, pet care, gardening</p>
      <p>
        Returning to the workforce as a single mum, Sam had to find something
        that could be flexible and cover the cost of childcare.
      </p>
    </div>
    
    <div className="profile_trust">
        <h5>TRUST</h5>
      <img src={star} />
      <p> 4.9 stars from 185 review </p>
    </div>

    <div className="profile_review">
        <h5>WHAT THE REVIEWS SAY</h5>
      <p> Very nice and caring in trying circumstances! Thanks again </p>
      <p>--Tim S.</p>
    </div>

    <div className="profile_badges">
        <h5>BADGES</h5>
        <img src={id} /> Police Check
        <img src={police} /> Police Check
      <a href="/">Learn More </a>
    </div>

    


    
    </React.Fragment>
  );
}

export default TaskerProfile;
