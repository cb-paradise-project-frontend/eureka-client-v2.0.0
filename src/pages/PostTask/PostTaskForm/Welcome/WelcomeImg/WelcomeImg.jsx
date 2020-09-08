import React from 'react';

import styles from '../../PostTaskForm.module.scss';

import png from './welcome.png';

function WelcomeImg() {
  return (
    <img
      className={styles.img}
      src={png}
      alt="Welcome"
    />
  )
}

export default WelcomeImg;

