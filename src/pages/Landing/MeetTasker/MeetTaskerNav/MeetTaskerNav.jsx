import React, { Component } from 'react';

import styles from './MeetTaskerNav.module.scss';

import TaskerSection from '../TaskerSection';
import MTShowCard from '../MeetTaskerShowCard';

import Samantha from "../../../../assets/tasker-samantha.png";
import Emily from "../../../../assets/tasker-Emily.png";
import Brandon from "../../../../assets/tasker-Brandon.png";


class MeetTaskerNav extends Component {
  constructor() {
    super();

    this.state = {
      currentComponentIndex: "Samantha",
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
      case("Samantha"): 
        return(
          <TaskerSection 
              taskerImg = {Samantha}
              name= "Samantha"
              spec= "Specialities: assembly, pet care, gardening"
              details=
                "Returning to the workforce as a single mum, Sam had to find something that could be flexible and cover the cost of childcare."
              stars= "4.9 stars from 185 review"
              reviews =
                "Very nice and caring in trying circumstances! Thanks again"
              viewer = "---Tim S." 
              />
        );
      case("Emily"): 
        return(
          <TaskerSection 
          taskerImg = {Emily}
          name = "Emily"
          spec = "Specialities: delivery, cleaning, packing"
          details =
            "In-between jobs, Emily was looking for a way to earn some extra cash... Maybe even using her clown school skills!"
          stars = "5 stars from 6 reviews"
          reviews =
            "She was an absolute lifesaver. Quick, friendly and super efficient!"
              />
        );
      case("Brendan"): 
        return(
          <TaskerSection 
          taskerImg = {Brandon}
          name = "Brendan"
          spec =
            "She was an absolute lifesaver. Quick, friendly and super efficient!"
          details =
            "A sparky by trade, Brendon jumped onboard when he went back to studying. Here's how Airtasker fit in with his busy lifestyle..."
          stars = "5 stars from 6 reviews"
          reviews =
            "Nice work and will use Brendon again if any other lighting task"
          viewer = "---Steven Z."
              />

        );
      default: 
      return (
        <h1>something wrong</h1>
      )
    }
  }

  render () {
    const { currentComponentIndex } = this.state;

    return (
      <div className={styles.MTNav__container}>
          <div className={styles.MTNav__title}>
            <MTShowCard onClick={this.handleShowingBlock}>Samantha</MTShowCard>
            <MTShowCard onClick={this.handleShowingBlock}>Emily</MTShowCard>
            <MTShowCard onClick={this.handleShowingBlock}>Brendan</MTShowCard>
            
          </div>

          <div>
            {
              this.handleComponentShowing(currentComponentIndex)
            }
          </div>

      </div>
    );
  }
}

export default MeetTaskerNav;