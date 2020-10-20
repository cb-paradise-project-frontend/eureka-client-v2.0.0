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

        {
          id: 5, 
          type: "delivery",
          title: "Delivery",
        },
        
        {
          id: 6, 
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
        <div className={styles.bg__wrapper}>
          <div className={styles.content__wrapper}>
            <div className={styles.taskCategoriesContent}>
              <h3>What do you need done?</h3>
              <div className={styles.iconContainer}>
                {
                  data.map((item, index) => {
                    // console.log(item)
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
            <div className={styles.taskCategoriesContent__mobile}>
              <h3>What do you need done?</h3>
              <div className={styles.iconContainer}>
                {
                  data.map((item, index) => {
                    // console.log(item)
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
          </div>
        </div>
      </div>
    );
  }
}

export default TaskCategories;