import React from 'react';

import GreenButton from '../../../GreenButton';

export default function OfferButton({ expired }) {
  return (
    <GreenButton 
      label={'Make an offer'}
      expired={expired}
    />
  );
}

