import React, { useState } from 'react';
import className from 'classnames/bind';

import styles from './Collapsible.module.scss';

import Button from '../../components/Button';

const cx = className.bind(styles);

const upArrow = String.fromCharCode(8743);
const downArrow = String.fromCharCode(8744);

export default function useCollapsible(initState = true) {
  const [isCollapsed, toggleCollapse] = useState(initState);

  const handleToggle = () => {
    toggleCollapse((prevState) => !prevState);
  };

  const Collapsible = ({ children }) => (
    <div className={styles.container} >
      <div className={cx({
        content: true,
        isCollapsed,
      })}>
        {children}
      </div>
      <div className={styles.footer} >
        <Button.Text
          onClick={handleToggle}
        >
          {isCollapsed ? `More ${downArrow}` : `Less ${upArrow}`}
        </Button.Text>
      </div>
    </div>
  );

  return Collapsible;
}
