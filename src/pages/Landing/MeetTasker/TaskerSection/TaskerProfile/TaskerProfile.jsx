import React from "react";

import star from "../../../../../assets/star.png";
import police from "../../../../../assets/badge-police.png";
import id from "../../../../../assets/badge-id.png";

import styles from "./TaskerProfile.module.scss";

function TaskerProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.description}>
          <div className={styles.name}>
            <h4>Samantha</h4>
          </div>
          <div className={styles.specialities}>
            <p>Specialities: assembly, pet care, gardening</p>
          </div>
          <div className={styles.content}>
            <p>
              Returning to the workforce as a single mum, Sam had to find
              something that could be flexible and cover the cost of childcare.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.trust}>
            <div className={styles.title}>
              <h5>TRUST</h5>
            </div>

            <img src={star} />
            <div className={styles.reviews_star}>
              <p> 4.9 stars from 185 review </p>
            </div>
          </div>

          <div className={styles.review}>
            <div className={styles.title}>
              <h5>WHAT THE REVIEWS SAY</h5>
            </div>

            <div className={styles.content}>
              <p>
                {" "}
                Very nice and caring in trying circumstances! Thanks again{" "}
              </p>
            </div>

            <div className={styles.reviewer}>
              <p>--Tim S.</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.badges}>
            <div className={styles.title}>
              <h5>BADGES</h5>
            </div>
            <div className={styles.badge_block}>
              <img src={id} />
              <p>Digital ID</p>
            </div>
            <div className={styles.badge_block}>
              <img src={police} />
              <p>Police Check</p>
            </div>
            <a href="/">Learn More </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskerProfile;
