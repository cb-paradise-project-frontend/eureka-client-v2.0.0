import React from 'react';
import className from 'classnames/bind';

import styles from './AvatarDisplay.module.scss';

const cx = className.bind(styles);

const AvatarDisplay = ({
  image,
  onAvatarChange,
  choosenAvatar,
  id,
}) => {
  const classNames = cx({
    avatar_option: choosenAvatar !== id,
    avatar_option__choosen: choosenAvatar === id,
  });

  return (
  <button
    className={classNames}
    onClick={onAvatarChange}
  >
    <img className={styles.avatar__container} src={image} alt="AvatarOption"/>
  </button>
  );
};

export default AvatarDisplay;
