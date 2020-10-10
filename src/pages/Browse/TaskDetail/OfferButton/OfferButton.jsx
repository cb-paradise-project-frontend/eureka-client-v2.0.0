import React from 'react';

import Button from '../../../../components/Button';

import { useToggleContent } from '../../../../components/ToggleContent';
import CreateProfile from '../../../CreateProfile';

export default function OfferButton({ isExpired }) {
  const [Content, toggler] = useToggleContent();

  const label = isExpired ? 'Expired' : 'Make an offer';

  return (
    <>
      <Button
        onClick={toggler}
        isDisabled={isExpired}
      >
        {label}
      </Button>
      <Content>
        <CreateProfile pageToggler={toggler} />
      </Content>
    </>
  );
}
