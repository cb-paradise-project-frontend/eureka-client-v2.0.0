import React from 'react';

import styles from './PostTaskForm.module.scss';

import Welcome from './Welcome/Welcome';
import TaskDescription from './TaskDescription/TaskDescription';
import TaskLocationAndTime from './TaskLocationAndTime/TaskLocationAndTime';
import TaskBudget from './TaskBudget/TaskBudget';
import JobTitleInput from './TaskDescription/JobTitleInput';
import JobDetailsInput from './TaskDescription/JobDetailsInput';
import TaskDatePicker from '../../../components/DateSelector';
import PostTaskTop from '../PostTaskTop';
import Button from '../../../components/Button';

class PostTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreenIndex: 0,
      jobTitle: "",
      jobDetails: "",
      startDate: null,
      taskBudget: "0",
      budgetHour: "1",
      budgetHourlyWage: "0",
      isChecked: false,
    }

    this.jobTitleMinLength = 10;
    this.jobDetailsMinLength = 25;
    this.minBudget = 5;
    this.maxBudget = 9999;

    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.onJobTitle = this.onJobTitle.bind(this);
    this.onJobDetails = this.onJobDetails.bind(this);
    this.handleGetQuoteClick = this.handleGetQuoteClick.bind(this);
    this.handleDateValue = this.handleDateValue.bind(this);
    this.onTaskBudget = this.onTaskBudget.bind(this);
    this.onBudgetHourlyWage = this.onBudgetHourlyWage.bind(this);
    this.onBudgetHour = this.onBudgetHour.bind(this);
    this.handleBudgetWageClick = this.handleBudgetWageClick.bind(this);
  }

  onJobTitle(value) {
    this.setState({ jobTitle: value });
  }

  onJobDetails(value) {
    this.setState({ jobDetails: value });
  }

  onTaskBudget() {
    this.setState((prevState) => ({
      taskBudget: prevState.budgetHourlyWage * prevState.budgetHour,
    }));
  }

  onBudgetHour(value) {
    this.setState(
      { budgetHour: value },
      this.onTaskBudget,
    );
  }

  onBudgetHourlyWage(value) {
    this.setState(
      { budgetHourlyWage: value },
      this.onTaskBudget,
    );
  }

  handleBudgetWageClick() {
    this.setState({ budgetHour: 1 });
  }

  handleDateValue(date) {
    this.setState({ startDate: date });
  }

  handleNextClick() {
    this.setState((prevState) => ({
      currentScreenIndex: prevState.currentScreenIndex + 1,
    }));
  }

  handleBackClick() {
    this.setState((prevState) => ({
      currentScreenIndex: prevState.currentScreenIndex - 1,
    }));
  }

  isJobTitleInvalid() {
    const { jobTitle, isChecked } = this.state;

    return (jobTitle.length < this.jobTitleMinLength && isChecked);
  }

  isJobDetailsInvalid() {
    const { jobDetails, isChecked } = this.state;

    return (jobDetails.length < this.jobDetailsMinLength && isChecked);
  }

  isBudgetInvalid() {
    const { taskBudget, isChecked } = this.state;

    return ((taskBudget < this.minBudget || taskBudget > this.maxBudget) && isChecked);
  }

  isTaskDateValid() {
    const { startDate, isChecked } = this.state;

    return (startDate == null && isChecked);
  }

  handleGetQuoteClick() {
    const { taskBudget } = this.state;

    if (taskBudget === 0) {
      this.setState({ isChecked: true });
    } else {
      this.setState({ isChecked: false });
      //this.link to task page or profile()
    }
  }

  jobTitleInput() {
    return (
      <JobTitleInput
        jobTitle={this.state.jobTitle}
        isJobTitleInvalid={this.isJobTitleInvalid()}
        onJobTitle={this.onJobTitle}
        errorHint= {"Please enter at least 10 characters and a maximum of 50 "}
      />
    );
  }

  jobDetailsInput() {
    return (
      <JobDetailsInput
        jobDetails={this.state.jobDetails}
        isJobDetailsInvalid={this.isJobDetailsInvalid()}
        onJobDetails={this.onJobDetails}
        errorHint= {"Please enter at least 25 characters and a maximum of 1000 "}
      />
    );
  }

  taskDatePicker() {
    return (
      <TaskDatePicker
        startDate={this.state.startDate}
        onDateChange={this.handleDateValue}
        isDateInvalid={this.isTaskDateValid()}
        errorHint={"Please select the date you would like the task to be done"}
      />
    )
  }

  handleClickCreator(condition) {
    const handleClick = () => {
      if (condition) {
        this.setState({ isChecked: true });
      } else {
        this.handleNextClick();
        this.setState({ isChecked: false });
      }
    }
    return handleClick;
  }

  render() {
    const {
      currentScreenIndex, startDate, jobTitle, jobDetails,
    } = this.state;

    const conditionList = [
      (false),
      (jobTitle.length < this.jobTitleMinLength || jobDetails.length < this.jobDetailsMinLength),
      (!startDate),
    ];

    const backBtn = (
      <div className={styles.button} >
        <Button
          onClick={this.handleBackClick}
          color={'light-blue'}
        >
          Back
        </Button>
      </div>
    );

    const nextBtn = (
      <div className={styles.button} >
        <Button onClick={this.handleClickCreator(conditionList[currentScreenIndex])} >
          Next
        </Button>
      </div>
    );

    const submitBtn = (
      <div className={styles.button} >
        <Button onClick={this.handleGetQuoteClick} >
          Get quotes
        </Button>
      </div>
    );

    const postTaskTop = [
      <PostTaskTop />,
      <PostTaskTop> Tell us what you need done? </PostTaskTop>,
      <PostTaskTop> Say where & when </PostTaskTop>,
      <PostTaskTop> Suggest how much </PostTaskTop>
    ]

    const pageList = [
      <Welcome />,
      <TaskDescription 
        jobTitleInput={this.jobTitleInput()}
        jobDetailsInput={this.jobDetailsInput()}
      />,
      <TaskLocationAndTime
        taskDatePicker={this.taskDatePicker()}
      />,
      <TaskBudget 
        taskBudget={this.state.taskBudget}
        isBudgetInvalid={this.isBudgetInvalid()}
        handleBudgetWageClick={this.handleBudgetWageClick}
        onBudgetHour={this.onBudgetHour}
        onBudgetHourlyWage={this.onBudgetHourlyWage}
      />,
    ];

    const postTaskBottom = (
      <div className={styles.bottom} >
        { currentScreenIndex === 0 || backBtn }
        { currentScreenIndex === pageList.length - 1 ? submitBtn : nextBtn }
      </div>
    );

    return (
      <div>
        {postTaskTop[currentScreenIndex]}
        {pageList[currentScreenIndex]}
        {postTaskBottom}
      </div>
    );
  }
}

export default PostTaskForm;
