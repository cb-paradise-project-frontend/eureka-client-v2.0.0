import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../../../../../../components/Button';

function OfferButton({ isExpired }) {
  const label = isExpired ? 'Expired' : 'Make an offer';
  const location = useLocation();

  return (
    <Link to={{
      pathname: `${location.pathname}/make-bid`,
      state: { createProfile: true }
    }}>
      <Button 
        isDisabled={isExpired}
      >
        {label}
      </Button>
    </Link>
  );
};

export default OfferButton;

