import React from 'react';

import styles from './TaskCategoriesItem.module.scss';

// import houseIcon from '../../../../../assets/house.svg';

function TaskCategoriesItem({
  type,
  title,
  srcUrl,
  src,
}) {
  return (
    <div className={styles.taskCategoriesItem}>
      <button className={styles.taskCategoriesItem__button}>
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