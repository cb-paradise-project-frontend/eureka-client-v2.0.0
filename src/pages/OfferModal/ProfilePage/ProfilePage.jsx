import React from 'react';

import styles from './ProfilePage.module.scss';

import Button from '../../../components/Button';

const ProfilePage = {};

const Header = ({ onGoBack }) => (
  <>
    {onGoBack &&
      <div className={styles.back_button_wrapper} >
        <Button.BackIcon onClick={onGoBack} />
      </div>
    }
    <div className={styles.title} >
      To Start Making Money
    </div>
  </>
);

const Content = ({ content }) => (
  <div className={styles.content_wrapper} >
    {content}
  </div>
);

const Footer = ({
  onBottomClick,
  isBottomBtnDisabled,
  btnLabel,
}) => (
  <Button
    onClick={onBottomClick}
    color={'light-blue'}
    isDisabled={isBottomBtnDisabled}
    long
  >
    {btnLabel}
  </Button>
);

ProfilePage.Header = Header;
ProfilePage.Content = Content;
ProfilePage.Footer = Footer;

export default ProfilePage;
