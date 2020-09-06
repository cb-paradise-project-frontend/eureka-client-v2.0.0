import React from 'react';

import Button from '../../../../../../components/Button';

export default function OfferButton({ expired }) {
  return (
    <Button expired={expired} >
      {expired ? 'expired' : 'Make an offer'}
    </Button>
  );
}

