import React from 'react';

import styles from '../PostTaskForm.module.scss';

import PostTaskTop from '../../PostTaskTop';
import TaskRadio from '../../TaskRadio';
import BudgetInput from './BudgetInput';
import Button from '../../Button';
import BudgetHelp from './BudgetHelp';

class TaskBudget extends React.Component{
  constructor(props) {
    super(props);

    this.onBudgetChange = this.onBudgetChange.bind(this);
  }

  onBudgetChange(e) {
    this.props.onBudget(e.target.value);
  }
  render() {
    return (
      <React.Fragment>
        <PostTaskTop> Suggest how much </PostTaskTop>
        <div className={styles.Main}>
          <div className={styles.TitleBox}>
            <h2 className={styles.OtherHeading}> What is your budget? </h2>
            <div className={styles.WantHelpBox}>
              <div className={styles.WantHelp}>
              Want help? 
              <BudgetHelp />
              </div> 
            </div>
          </div>
          <label className={styles.HintLabel}> 
            Please enter the price you're comfortable to pay to get your task done. Taskers will use this as a guide for how much to offer. 
          </label>
          <div className={styles.TaskRadioBox}>
            <div className={styles.BudgetRadio}>
              <TaskRadio
              radioType={"Total"}
              isChecked={true} 
              />
            </div>
            <div className={styles.BudgetRadio}>
              <TaskRadio
              radioType={"Hourly Rate"}
              isChecked={false} 
              />
            </div>
          </div>
          <BudgetInput
            onBudgetChange={this.onBudgetChange} 
          />
          <div>
            <div className={styles.Budget}>
              <div className={styles.Label}>
                <div> ESTIMATED BUDGET </div>
                <div> Final payment will be agree later </div>
              </div>
              <div> ${this.props.taskBudget} </div>
            </div>
          </div>
        </div>
        <div className={styles.Bottom} >
          <Button handleBackClick = {this.props.handleBackClick}>
            Back
          </Button>
          <Button> 
            Get quotes
          </Button>
        </div>
    </React.Fragment>
    )
  }
}

export default TaskBudget;

