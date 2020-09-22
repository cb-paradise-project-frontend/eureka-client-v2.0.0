import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import Button from '../../../../components/Button';

import styles from './OfferButton.module.scss';

export default function OfferButton({ isExpired }) {
  const { pathname } = useLocation();

  const label = isExpired ? 'Expired' : 'Make an offer';

  const cx = classNames.bind(styles);

  return (
    <Link
      to={`${pathname}/make-bid`}
      className={cx({
        disabled_link: isExpired === true,
      })}
    >
      <Button
        isDisabled={isExpired}
      >
        {label}
      </Button>
    </Link>
  );
}
