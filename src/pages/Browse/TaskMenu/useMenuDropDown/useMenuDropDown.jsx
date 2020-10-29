import React from 'react';
import Button from '../../../../components/Button';

import { useToggleContent } from '../../../../components/ToggleContent';

const dropdownIcon = String.fromCharCode(9660);

export default function useMenuDropDown(buttonLabel) {
  const [DropDown, toggleDropDown] = useToggleContent();

  const MenuDropDown = ({ children }) => (
    <>
      <Button.Text
        color="light-blue"
        onClick={toggleDropDown}
      >
        {buttonLabel}{dropdownIcon}
      </Button.Text>
      <DropDown>
        {children}
      </DropDown>
    </>
  );

  return [MenuDropDown, toggleDropDown];
}
