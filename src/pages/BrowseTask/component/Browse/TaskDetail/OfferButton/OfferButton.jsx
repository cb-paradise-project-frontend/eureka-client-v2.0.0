import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from '../../../../../../components/Button';

function OfferButton({ isExpired, match }) {
  const label = isExpired ? 'Expired' : 'Make an offer';

  return (
    <>
      <Button 
        isDisabled={isExpired}
      >
        <Link to={`${match.url}/make-bid`}>
          {label}
        </Link>
      </Button>
    </>
  );
};

export default withRouter(OfferButton);

