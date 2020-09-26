import React from 'react';

import Button from '../../../../components/Button';

import ToggleContent from '../../../../components/ToggleContent';
import CreateProfile from '../../../CreateProfile';

export default function OfferButton({ isExpired }) {
  const label = isExpired ? 'Expired' : 'Make an offer';

  return (
    <ToggleContent
      toggle={(toggler) => (
        <Button
          onClick={toggler}
          isDisabled={isExpired}
        >
          {label}
        </Button>
      )}
      content={(toggler) => (
        <CreateProfile pageToggler={toggler} />
      )}
    />
  );
}
