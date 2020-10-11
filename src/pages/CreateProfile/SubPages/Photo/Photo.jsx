import React from 'react';

import styles from './Photo.module.scss';

import Button from '../../../../components/Button';

export default function Photo({ storedValue, onSubmit }) {
  const handleChange = ({ target: { files } }) => {
    if (files[0]) {
      onSubmit(URL.createObjectURL(files[0]));
    }
  };

  return (
    <div className={styles.form_wrapper} >
      <div className={styles.row} >
        <div className={styles.avatar_wrapper} >
          {storedValue &&
            <img src={storedValue} alt="avatar" />
          }
        </div>
        <div className={styles.button_wrapper} >
          <input type="file" onChange={handleChange} />
          <Button>
            Upload photo
          </Button>
        </div>
      </div>
    </div>
  );
}
