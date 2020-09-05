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

  handleShowingBlock(index) {
    this.setState({
      currentComponentIndex: index,
    })
  }
  
  handleComponentShowing(index) {
    switch(index) {
      case("Moving home"): 
        return(
          <OtherJobsCardContainer
          tabDescription = "Got a few boxes to shift, an apartment or entire house? Get your home moved just the way you want, by whom you want, when you want. Let Airtasker shoulder the load."
          title = "DELVERY" 
          description = "Deliver 1,000 letterbox flyers in Kellyville"
          price = "$50"
          rate = "5 Stars"
          />
        );
      case("Starting a business"): 
        return(
          <OtherJobsCardContainer
          tabDescription = "Taking a big leap and need some expert advice or assistance? Airtasker can help you get some cracking marketing collateral, admin muscle or a few extra hands to help ease the burden."
          title = "DESIGN" 
          description = "Logo designer for photography business"
          price = "$88"
          rate = "5 Stars"
          />
        );
      case("Fixing stuff"): 
        return(
          <OtherJobsCardContainer
          tabDescription = "Do you have a hole in the wall that needs plugging? Perhaps a TV that needs mounting? Or maybe you have that perfect shade of green, but no time to paint? Get a Tasker to help."
          title = "HANDYMAN / TRADIES" 
          description = "Help assemble a flat pack."
          price = "$30"
          rate = "5 Stars"
          />
        );
      case("Hosting a party"): 
        return(
          <OtherJobsCardContainer
          tabDescription = "Got something to celebrate and the guest list all ready, but need everything else? Let Airtasker help you find the best bartenders, party planners, photographers and entertainment in the land."
          title = "CATERING" 
          description = "Help With A Launch Party -- This Thursday"
          price = "$100"
          rate = "5 Stars"
          />
        );
      case("Something different"): 
        return(
          <OtherJobsCardContainer
          tabDescription = "Want something done but feel like it’s too random? Whether it’s getting rescued from a spider or help building a bobsled - you can get nearly anything done through Airtasker."
          title = "CHEF" 
          description = "Teach me your family pasta sauce recipe"
          price = "$575"
          rate = "5 Stars"
          />
        );
    }
  }

  render () {
    const { currentComponentIndex } = this.state;

    return (
      <div className={styles.OtherJobs__container}>
          <div className={styles.OtherJobs__title}>
            <ShowCard onClick={this.handleShowingBlock}>Moving home</ShowCard>
            <ShowCard onClick={this.handleShowingBlock}>Starting a business</ShowCard>
            <ShowCard onClick={this.handleShowingBlock}>Fixing stuff</ShowCard>
            <ShowCard onClick={this.handleShowingBlock}>Hosting a party</ShowCard>
            <ShowCard onClick={this.handleShowingBlock}>Something different</ShowCard>
          </div>

          <div>
            {
              this.handleComponentShowing(currentComponentIndex)
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