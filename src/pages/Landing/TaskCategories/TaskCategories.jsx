import React from 'react';

import styles from './TaskCategories.module.scss';

import TaskCategoriesItem from './components/TaskCategoriesItem';
import PostTask from '../../PostTask';

class TaskCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          type: 'clean',
          title: 'Clean',
          srcUrl: '<i class="fas fa-broom"></i>',
          src: 'fas fa-broom',
        },

        {
          id: 2,
          type: 'removal',
          title: 'Removal',
          srcUrl: '<i class="fas fa-truck"></i>',
          src: 'fas fa-truck',
        },

        {
          id: 3,
          type: 'Pickup',
          title: 'Pickup',
          srcUrl: '<i class="fas fa-car"></i>',
          src: 'fas fa-car',
        },
      ],
      postTask: false,
    };
    this.toggler = this.toggler.bind(this);
  }
  toggler() {
    this.setState((prevState) => ({ postTask: !prevState.postTask }))
  }
  render() {
    const { data, } = this.state;

    return (
      <React.Fragment>
      {this.state.postTask && <PostTask pageToggler={this.toggler}/>}
      <div className={styles.taskCategories__container}>
        <div className={styles.bg__wrapper}>
          <div className={styles.content__wrapper}>
            <div className={styles.taskCategoriesContent}>
              <h3>What do you need done?</h3>
              <div className={styles.iconContainer}>
                {
                  data.map((item, index) => {
                    return (
                      <TaskCategoriesItem
                      key = {item.id}
                      type = {item.type}
                      title = {item.title}
                      srcUrl = {item.srcUrl}
                      onClick={this.toggler}
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
      </React.Fragment>
    );
  }
}

export default TaskCategories;