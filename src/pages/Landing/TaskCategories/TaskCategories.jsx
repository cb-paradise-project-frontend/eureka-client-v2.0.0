import React from 'react';

import styles from './TaskCategories.module.scss';

import TaskCategoriesItem from './components/TaskCategoriesItem';
import Button from '../../../components/Button';
import ToggleContent from '../../../components/ToggleContent';
import PostTask from '../../../pages/PostTask';

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

    const CleanButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.taskCategoriesItem} >
            <Button
              color={'categories'}
              onClick={toggler}
              size={'categoriesButton'}
            >
              <i class="fas fa-broom"></i>
            </Button>
            <p>Clean</p>
          </div>
        )}
        content={(toggler) => (
          <PostTask pageToggler={toggler} />
        )}
      />
    );

    const RemovalButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.taskCategoriesItem} >
            <Button
              color={'categories'}
              onClick={toggler}
              size={'categoriesButton'}
            >
              <i class="fas fa-truck"></i>
            </Button>
            <p>Removal</p>
          </div>
        )}
        content={(toggler) => (
          <PostTask pageToggler={toggler} />
        )}
      />
    );

    const PickUpButton = () => (
      <ToggleContent
        toggle={(toggler) => (
          <div className={styles.taskCategoriesItem} >
            <Button
              color={'categories'}
              onClick={toggler}
              size={'categoriesButton'}
            >
              <i class="fas fa-car"></i>
            </Button>
            <p>Pick up</p>
          </div>
        )}
        content={(toggler) => (
          <PostTask pageToggler={toggler} />
        )}
      />
    );

    return (
      <React.Fragment>
      {this.state.postTask && <PostTask pageToggler={this.toggler}/>}
      <div className={styles.taskCategories__container}>
        <div className={styles.bg__wrapper}>
          <div className={styles.content__wrapper}>
            <div className={styles.taskCategoriesContent}>
              <h3>What do you need done?</h3>
              <div className={styles.iconContainer}>
                <CleanButton />
                <RemovalButton />
                <PickUpButton />
              </div>
            </div>
            <div className={styles.taskCategoriesContent__mobile}>
              <h3>What do you need done?</h3>
              <div className={styles.iconContainer}>
                <CleanButton />
                <RemovalButton />
                <PickUpButton />
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