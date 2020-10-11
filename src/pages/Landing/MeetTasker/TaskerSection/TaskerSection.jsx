import React from "react";

import styles from "./TaskerSection.module.scss";

import star from "../../../../assets/star.png";
import police from "../../../../assets/badge-police.png";
import id from "../../../../assets/badge-id.png";

function TaskerSection({
  taskerImg,
  name,
  spec,
  details,
  stars,
  reviews,
  viewer,
}) {
  return (
    <div className={styles.tasker_card}>
      <img src={taskerImg} alt="taskerPhoto" className={styles.tasker_photo} />

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.description}>
            <div className={styles.name}>
              <h4>{name}</h4>
            </div>
            <div className={styles.specialities}>
              <p>{spec}</p>
            </div>
            <div className={styles.content}>
              <p>{details}</p>
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
                <p> {stars}</p>
              </div>
            </div>

            <div className={styles.review}>
              <div className={styles.title}>
                <h5>WHAT THE REVIEWS SAY</h5>
              </div>

              <div className={styles.content}>
                <p>{reviews}</p>
              </div>

              <div className={styles.reviewer}>
                <p>{viewer}</p>
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
    </div>
  );
}

export default TaskerSection;
