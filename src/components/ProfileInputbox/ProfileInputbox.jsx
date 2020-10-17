import React from 'react';
import ProfileContent from '../../pages/Profile/ProfileContent/ProfileContent';

import styles from './ProfileInputbox.module.scss';

const ProfileInputbox = ({
  label,
  accountContent,
  onAccountChange,
}) => {
  return (
    <React.Fragment>
      <label 
        htmlFor={label}
        className={styles.label}
      >
        {label}
      </label>
      <input 
        id ={label}
        className={styles.input}
        value={accountContent[label]}
        onChange={onAccountChange(label)}
      >
      </input>
    </React.Fragment>
  )
}

export default ProfileInputbox;