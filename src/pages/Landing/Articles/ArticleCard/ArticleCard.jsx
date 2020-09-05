import React from "react";

import GardenParty from "../../../../assets/garden-party.png";
import BedroomPlant from '../../../../assets/bedroom-plant.png';
import BeautifulBackyard from '../../../../assets/beautiful-backyard.png';

import styles from "./ArticleCard.module.scss";

export const ArticleCard = (props) => (
  <div>
    <div className={styles.ArticleCard}>
      <img src={GardenParty} alt="GardenParty" className={styles.articleImg}></img>
      <div className={styles.articleTitle}>
        Garden party ideas for any occasion
      </div>
      <div className={styles.articleContent}>
        Make the most of the outdoors with a gorgeous garden party surrounded by
        your closest friends.
      </div>
      <a
        href="https://support.airtasker.com/hc/en-au/categories/200049939-Payments"
        className={styles.readMore}
      >
        Read more
      </a>
    </div>
  </div>
);


// <div className={styles.ArticleCard}>
//       <img src={BedroomPlant} alt="GardenParty"></img>
//       <div className={styles.articleTitle}>
//       Bedroom plants for your room
//       </div>
//       <div className={styles.articleContent}>
//       Create your own lush, indoor jungle with plenty of potted greens!
//       </div>
//       <a
//         href="https://support.airtasker.com/hc/en-au/categories/200049939-Payments"
//         className={styles.readMore}
//       >
//         Read more
//       </a>
//     </div>

//     <div className={styles.ArticleCard}>
//       <img src={BeautifulBackyard} alt="GardenParty"></img>
//       <div className={styles.articleTitle}>
//       Beautiful backyard wedding ideas
//       </div>
//       <div className={styles.articleContent}>
//       Create your own lush, indoor jungle with plenty of potted greens!
//       </div>
//       <a
//         href="https://support.airtasker.com/hc/en-au/categories/200049939-Payments"
//         className={styles.readMore}
//       >
//         Read more
//       </a>
//     </div>