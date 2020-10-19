import React from 'react';

import styles from './OfferPage.module.scss';

import Button from '../../../components/Button';
import MakeOffer from './MakeOffer';

const OfferPage = {};

const Header = () => (
  <div className={styles.title} >
    Make an Offer
  </div>
);

const Content = () => (
  <div className={styles.content_wrapper} >
    <MakeOffer />
  </div>
);

const Footer = ({ onBottomClick }) => (
  <Button
    onClick={onBottomClick}
    color={'light-blue'}
    long
  >
    Next
  </Button>
);

OfferPage.Header = Header;
OfferPage.Content = Content;
OfferPage.Footer = Footer;

export default OfferPage;