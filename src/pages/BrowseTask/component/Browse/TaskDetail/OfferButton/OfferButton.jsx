import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from '../../../../../../components/Button';

function OfferButton({ isExpired, match }) {
  const label = isExpired ? 'Expired' : 'Make an offer';

  return (
    <Link to={`${match.url}/make-bid`}>
      <Button 
        isDisabled={isExpired}
      >
        {label}
      </Button>
    </Link>
  );
};

export default withRouter(OfferButton);

