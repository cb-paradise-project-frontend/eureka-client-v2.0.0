import React from 'react';

import styles from './PostTaskButton.module.scss';


function PostTaskButton({
  children,
  handleClick,
}){
  return (
    <button
      className={styles.button} 
      onClick={handleClick} 
    > 
      {children} 
    </button> 
  )
}

export default PostTaskButton;