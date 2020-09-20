import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../../../../../../components/Button';

import styles from './OfferButton.module.scss';

export default function OfferButton({ isExpired }) {
  const { pathname } = useLocation();

  const label = isExpired ? 'Expired' : 'Make an offer';
  
  return (
    <Link 
      to={`${pathname}/make-bid`} 
      className={isExpired && styles.disabled_link}
    >
      <Button 
        isDisabled={isExpired}
      >
        {label}
      </Button>
    </Link>
  );
};


