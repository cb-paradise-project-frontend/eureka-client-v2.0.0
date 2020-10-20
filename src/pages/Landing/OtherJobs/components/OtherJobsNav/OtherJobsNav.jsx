import React, { Component, Children } from 'react';

import styles from './OtherJobsNav.module.scss';

import OtherJobsCardContainer from '../OtherJobsCardContainer';
import ShowCard from '../OtherJobsShowCard';

class OtherJobsNav extends Component {
  constructor() {
    super();

    this.state = {
      currentComponentIndex: "Moving home",
    }

    this.handleComponentShowing = this.handleComponentShowing.bind(this);
    this.handleShowingBlock = this.handleShowingBlock.bind(this);
  }
  
  // componentDidMount() {
  //   this.handleComponentShowing('Moving home');
  // }

  handleShowingBlock(index) {
    this.setState({
      currentComponentIndex: index,
    })
  }
  
  handleComponentShowing(index) {
    const result = this.props.data.filter(item => item.id === index).map((item, i) => {
        return (
          <OtherJobsCardContainer
            tabDescription = {item.tabDescription}
            title = {item.title}
            description = {item.description}
            price = {item.price}
            rate = {item.rate}
          />);
    })
    

    this.setState({currentComponentIndex:result[0]}) ;
  }

  render () {
    const { currentComponentIndex } = this.state;

    return (
      <div className={styles.OtherJobs__container}>
          <div className={styles.OtherJobs__title}>
            <ShowCard onClick={this.handleComponentShowing}>Moving home</ShowCard>
            <ShowCard onClick={this.handleComponentShowing}>Starting a business</ShowCard>
            <ShowCard onClick={this.handleComponentShowing}>Fixing stuff</ShowCard>
            <ShowCard onClick={this.handleComponentShowing}>Hosting a party</ShowCard>
            <ShowCard onClick={this.handleComponentShowing}>Something different</ShowCard>
          </div>

          <div>
            {
              // this.handleComponentShowing(currentComponentIndex)
              // this.handleComponentShowing(currentComponentIndex)
              
              this.state.currentComponentIndex
            }
          </div>

          <div className={styles.OtherJobs__button}>
            <button>Get started now</button>
          </div>
      </div>
    );
  }
}

export default OtherJobsNav;