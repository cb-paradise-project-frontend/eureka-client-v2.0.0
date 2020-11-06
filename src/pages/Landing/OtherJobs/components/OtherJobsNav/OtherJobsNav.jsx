import React, { Component } from 'react';

import styles from './OtherJobsNav.module.scss';

import OtherJobsCardContainer from '../OtherJobsCardContainer';
import ShowCard from '../OtherJobsShowCard';
import { CategoryConsumer } from '../../../../categoryContext/categoryContext';

const categoryList = [
  {
    key: 'Clean',
    label: 'Clean',
    tabDescription : "Are you a careful person? You can try those well-paid clean jobs",
  },
  {
    key: 'Removal',
    label: 'Removal',
    tabDescription : "Come on, my friends, let eureka help you move",
  },
  {
    key: 'Pickup',
    label: 'Pick up',
    tabDescription : "We need responsible drivers for the need of pick up",
  },
]

class OtherJobsNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: 'Clean',
    }
    this.handleComponentShowing = this.handleComponentShowing.bind(this);
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