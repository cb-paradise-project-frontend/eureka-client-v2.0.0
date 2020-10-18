import React from 'react';
import classnames from 'classnames/bind';

import styles from './Navigation.module.scss';

const cx = classnames.bind(styles);


const Navigation = ({ 
  children, 
  link, 
  currentNav,
  handleNavChange, 
}) => {
  const className = cx({
    navi_item: true,
    selected: currentNav === children,
  });

  return (
    <a
      className={className}
      href={link}
      onClick={() => handleNavChange(children)}
    >
      {children}
      {children === currentNav
        && 
      <span className={styles.active}>&#8226;</span>}
    </a>
  )
};

export default Navigation;
