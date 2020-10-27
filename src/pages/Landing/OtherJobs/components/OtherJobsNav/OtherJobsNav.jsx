import React, { Component } from 'react';

import styles from './OtherJobsNav.module.scss';

import OtherJobsCardContainer from '../OtherJobsCardContainer';
import ShowCard from '../OtherJobsShowCard';
import { CategoryConsumer } from '../../../../categoryContext/categoryContext';

const categoryList = [
  {
    key: 'Clean',
    label: 'Clean',
    tabDescription : "想接清洁任务吗？下面这些还可以，酬劳不错",
  },
  {
    key: 'Removal',
    label: 'Removal',
    tabDescription : "你是搬家肌肉人吗，我们需要你，人傻力气大的那种",
  },
  {
    key: 'Pickup',
    label: 'Pickup',
    tabDescription : "接送机任务，留学生再不来，我们没活干了",
  },
]

class OtherJobsNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: 'Clean',
    }
    this.handleComponentShowing = this.handleComponentShowing.bind(this);
    this.handleShowingBlock = this.handleShowingBlock.bind(this);
  }
  
  handleComponentShowing(key) {
    this.setState({currentCategory: key});
  }

  render () {
    const { currentCategory } = this.state;
    const showCard = categoryList.map((category) => (
      <ShowCard 
        onClick={() => this.handleComponentShowing(category.key)}
        key={category.key}
      >
        {category.label}
      </ShowCard>
      ))

    return (
      <div className={styles.OtherJobs__container}>
          <div className={styles.OtherJobs__title}>
            {showCard}
          </div>
          <CategoryConsumer>
          { (taskList) => 
            <OtherJobsCardContainer 
              currentCategory={currentCategory} 
              taskList={taskList}
              tabDescription={categoryList.find((category) => category.key === currentCategory).tabDescription}
            />}
          </CategoryConsumer>

          <div className={styles.OtherJobs__button}>
            <button>Get started now</button>
          </div>
      </div>
    );
  }
}

export default OtherJobsNav;