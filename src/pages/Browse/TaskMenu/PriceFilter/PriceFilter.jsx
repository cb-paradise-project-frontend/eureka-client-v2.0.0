import React from 'react';

import styles from './PriceFilter.module.scss';

import Button from '../../../../components/Button';
import { useToggleContent } from '../../../../components/ToggleContent';

const dropdownIcon = String.fromCharCode(9660);

export default function PriceFilter() {
  const [DropDown, toggleDropDown] = useToggleContent();

  return (
    <>
      <Button.Text
        color="light-blue"
        onClick={toggleDropDown}
      >
        Any price {dropdownIcon}
      </Button.Text>
      <DropDown>
        <div className={styles.dropdown} >
          <div className={styles.header} >
            TASK price
          </div>
          <div className={styles.content} >

          </div>
          <div className={styles.footer} >

          </div>
        </div>
      </DropDown>
    </>
  );
}
