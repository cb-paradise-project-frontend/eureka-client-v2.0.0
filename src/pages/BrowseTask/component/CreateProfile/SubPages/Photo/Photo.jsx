import React, { useState } from 'react';

import styles from './Photo.module.scss';

import Button from '../../../../../../components/Button';
import handleInput from '../Utils/handleInput';

export default function Photo({ url }) {

  const imageUrl = url;

  return (
    <div className={styles.form_wrapper} >
      <div className={styles.avatar_wrapper} >

      </div>
      <div className={styles.button_wrapper} >
        <Button>
          Upload photo
        </Button>
      </div>
    </div>
  );
}; 