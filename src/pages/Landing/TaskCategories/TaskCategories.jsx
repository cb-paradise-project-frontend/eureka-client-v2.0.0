import React from 'react';

import styles from './TaskCategories.module.scss';

import TaskCategoriesItem from './components/TaskCategoriesItem';

class TaskCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1, 
          type: "house",
          title: "House",
        },

        {
          id: 2, 
          type: "clean",
          title: "Clean",
        },

        {
          id: 3, 
          type: "delivery",
          title: "Delivery",
        },

        {
          id: 4, 
          type: "delivery",
          title: "Delivery",
        },
      ]
    };
  }

  render() {
    const {data, } = this.state;
    
    return (
      <div className={styles.taskCategories__container}>
        <h3>What do you need done?</h3>
        <div>
          {
            data.map((item, index) => {
              console.log(item)
              return (
                <TaskCategoriesItem
                key = {item.id}
                type = {item.type}
                title = {item.title}
                />
              )
            })
          }
        </div>
      </div>
  );
}

/* 
<TaskCategoriesItem 
                key = {id}
                type = {data.type}
              >
                
                {data.title}
                
              </TaskCategoriesItem>} */}

// function TaskCategories() {
// 	return (
//     <div className={styles.taskCategories__container}>
//       <h3>What do you need done?</h3>
//       <div>
//         <TaskCategoriesItem type="house">House</TaskCategoriesItem>
//         <TaskCategoriesItem type="house">Used</TaskCategoriesItem>
//         <TaskCategoriesItem type="house">Clean</TaskCategoriesItem>
//         <TaskCategoriesItem type="house">House</TaskCategoriesItem>
//         <TaskCategoriesItem type="house">Used</TaskCategoriesItem>
//         <TaskCategoriesItem type="house">Clean</TaskCategoriesItem>
//       </div>
//     </div>
// 	);
// }

export default TaskCategories;