import React from 'react';

import Button from '../../../../../../components/Button';

export default function OfferButton({ expired }) {
  const label = expired ? 'Expired' : 'Make an offer';

  return (
    <Button expired={expired} >
      {label}
    </Button>
  );
}

