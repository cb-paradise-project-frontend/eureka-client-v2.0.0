import React from 'react';

import styles from './TaskCategoriesItem.module.scss';

import houseIcon from '../../../../../assets/house.svg';

function TaskCategoriesItem ({
  type,
  title
}) {
  return (
    <div className={styles.taskCategoriesItem}>
      <button className={styles.taskCategoriesItem__button}>
        <div>
          <img src={houseIcon} alt={type}/>
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