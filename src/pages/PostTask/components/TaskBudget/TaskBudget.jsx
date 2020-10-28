import React from 'react';

import styles from '../../PostTask.module.scss';

import BudgetRadio from '../../../../components/Radio';
import BudgetInput from './components/BudgetInput';
import BudgetHelp from './components/BudgetHelp';
import BudgetDisplay from './components/BudgetDisplay';

class TaskBudget extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isClickHourlyRate: false,
    };

    this.handleHourlyRateClick = this.handleHourlyRateClick.bind(this);
    this.handleTotalClick = this.handleTotalClick.bind(this);
  }

  handleHourlyRateClick() {
    this.setState({ isClickHourlyRate: true });
  }

  handleTotalClick() {
    this.setState(
      { isClickHourlyRate: false },
      this.props.handleBudgetWageClick
      );
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.main}>
          <div className={styles.title_box}>
            <h2 className={styles.other_heading}> What is your budget? </h2>
            <div className={styles.want_help_box}>
              <div className={styles.want_help}>
              Want help? 
              <BudgetHelp />
              </div> 
            </div>
          </div>
          <label className={styles.hint_label}> 
            Please enter the price you're comfortable to pay to get your task done. Taskers will use this as a guide for how much to offer. 
          </label>
          <div className={styles.task_radio_box}>
            <div className={styles.budget_radio}>
              <BudgetRadio
                radioTitle={"Total"}
                radioName={"budgetRadio"}
                isChecked={true}
                handleClick={this.handleTotalClick}
              />
            </div>
            <div className={styles.budget_radio}>
              <BudgetRadio
                radioTitle={"Hourly Rate"}
                radioName={"budgetRadio"}
                isChecked={false}
                handleClick={this.handleHourlyRateClick} 
              />
            </div>
          </div>
          <BudgetInput
            switchMode={this.state.isClickHourlyRate}
            isBudgetInvalid={this.props.isBudgetInvalid}
            minBudget={5}
            maxBudget={9999}
            onBudgetHour={this.props.onBudgetHour}
            onBudgetHourlyWage={this.props.onBudgetHourlyWage}
            taskBudget={this.props.taskBudget}
          />
          <div>
            <BudgetDisplay 
              taskBudget={this.props.taskBudget}
            />
          </div>
        </div>
    </React.Fragment>
    )
  }
}

export default TaskBudget;

