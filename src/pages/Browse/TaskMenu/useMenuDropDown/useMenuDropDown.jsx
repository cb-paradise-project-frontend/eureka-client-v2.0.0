import React from 'react';

import styles from './MenuDropDown.module.scss';

import Button from '../../../../components/Button';
import { useToggleContent } from '../../../../components/ToggleContent';
import MenuMask from '../MenuMask';

const dropdownIcon = String.fromCharCode(9660);

export default function useMenuDropDown(buttonLabel) {
  const [DropDown, toggleDropDown] = useToggleContent();

  const MenuDropDown = ({ children }) => (
    <div className={styles.container}>
      <Button.Text
        color="light-blue"
        onClick={toggleDropDown}
      >
        {buttonLabel}{dropdownIcon}
      </Button.Text>
      <DropDown>
        <MenuMask />
        <div className={styles.dropdown} >
          {children}
        </div>
      </DropDown>
    </div>
  );

  return [MenuDropDown, toggleDropDown];
}
