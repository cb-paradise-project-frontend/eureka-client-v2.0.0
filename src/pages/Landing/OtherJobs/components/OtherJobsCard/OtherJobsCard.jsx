import React from 'react';
import AvatarDisplay from '../../../../../components/AvatarDisplay';
import styles from './OtherJobsCard.module.scss';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`

function OtherJobsCard ({
  title,
  description,
  price,
  rate,
  onClick,
  avatarID,
}) {
  return (
  <div className={styles.card__container} onClick={onClick}>
    <div>
      <h4>{title}</h4>
    </div>

    <div className={styles.card__content}>
      <div className={styles.card__description}>
        <AvatarWrapper>
          <AvatarDisplay avatarID={avatarID}/>
        </AvatarWrapper>
        <p className={styles.card__P}>{description}</p>
      </div>
      <div className={styles.card__price}>
        <h5>${price}</h5>
      </div>
    </div>
    
    <div className={styles.card__rating}>
      <p>{rate}</p>
    </div>
  </div>
  );
}

export default OtherJobsCard;