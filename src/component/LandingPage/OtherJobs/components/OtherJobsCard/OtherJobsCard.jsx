import React from 'react';

import styles from './OtherJobsCard.module.scss';

const OtherJobsCard = ({
  title,
  description,
  price,
  rate,
}) => (
  <div className={styles.card__container}>
    <div>
      <h4>{title}</h4>
    </div>

    <div className={styles.card__content}>
      <div className={styles.card__description}>
        <img src="" alt=""/>
        <p>{description}</p>
      </div>
      <div className={styles.card__price}>
        <h5>{price}</h5>
      </div>
    </div>
    
    <div className={styles.card__rating}>
      <p>{rate}</p>
    </div>
  </div>
  );

export default OtherJobsCard;