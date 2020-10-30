import React from 'react';

import styles from './MenuDropDown.module.scss';

import Button from '../../../../components/Button';
import { useToggleContent } from '../../../../components/ToggleContent';
import MenuMask from '../MenuMask';

const dropdownIcon = String.fromCharCode(9660);

export default function MenuDropDown({
  buttonLabel,
  toggler,
  active,
  children,
}) {
  return (
    <div className={styles.container}>
      <Button.Text
        color="light-blue"
        onClick={toggler}
      >
        {buttonLabel}{dropdownIcon}
      </Button.Text>
      {active &&
        <>
          <MenuMask />
          <div className={styles.dropdown} >
            {children}
          </div>
        </>
      }
    </div>
  );
}
