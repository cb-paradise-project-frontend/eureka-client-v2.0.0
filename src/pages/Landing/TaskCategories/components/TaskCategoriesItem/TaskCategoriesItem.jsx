import React from 'react';

import styles from './TaskCategoriesItem.module.scss';

function TaskCategoriesItem({
  title,
  onClick,
}) {
  return (
    <div className={styles.taskCategoriesItem}>
      <button 
        className={styles.taskCategoriesItem__button}
        onClick={onClick}
      >
        <div>
          {/* <img src={src} alt={type}/> */}
          {/* {srcUrl} */}
          {/* <i class={"fas fa-broom"}></i> */}
        </div>
        <p>{title}</p>
      </button>
    </div>
  );
}
// {
// 	return (
//     <div className={styles.taskCategoriesItem}>
//       <button className={styles.taskCategoriesItem__button}>
//         <div>
//           <img src={houseIcon} alt={type}/>
//         </div>
//         <p>{title}</p>
//       </button>
//     </div>
// 	);
// }
export default TaskCategoriesItem;