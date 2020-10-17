import React from 'react';

import styles from './Avatar.module.scss';

const Avatar = () => (
  <div className={styles.avatar_wrapper}>
    <div className={styles.avatar}>
      <img className={styles.icon}></img>
    </div>
    <div className={styles.print_name}>
      {/*这里未来要做一个超链用以点击跳转至profile->personal*/}
      FirstName LastName
    </div>
  </div>
);

export default Avatar;
