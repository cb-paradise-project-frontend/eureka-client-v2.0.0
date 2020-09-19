import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../../../../../../components/Button';

function OfferButton({ isExpired }) {
  const label = isExpired ? 'Expired' : 'Make an offer';
  const location = useLocation();

  return (
    <Link to={`${location.pathname}/make-bid`} >
      <Button 
        isDisabled={isExpired}
      >
        {label}
      </Button>
    </Link>
  );
};

export default OfferButton;

