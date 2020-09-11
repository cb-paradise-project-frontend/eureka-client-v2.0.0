import React from 'react';

import Welcome from './Welcome/Welcome';
import TaskDescription from './TaskDescription/TaskDescription';
import TaskLocationAndTime from './TaskLocationAndTime/TaskLocationAndTime';
import TaskBudget from './TaskBudget/TaskBudget';
import JobTitleInput from './TaskDescription/JobTitleInput';
import JobDetailsInput from './TaskDescription/JobDetailsInput';
import TaskDatePicker from './TaskLocationAndTime/TaskDatePicker';

class PostTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreenIndex: 3,
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
    this.handleTaskDescriptionNextClick = this.handleTaskDescriptionNextClick.bind(this);
    this.handleTaskLocationAndTimeNextClick = this.handleTaskLocationAndTimeNextClick.bind(this);
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
      this.onTaskBudget
      );
  }

  onBudgetHourlyWage(value) {
    this.setState(
      { budgetHourlyWage: value },
      this.onTaskBudget
      );
  }

  handleBudgetWageClick() {
    this.setState({ budgetHour: 1 });
  }

  handleDateValue(date) {
    this.setState({ startDate: date });
  }

  handleNextClick() {
    this.setState(() => ({
      currentScreenIndex: this.state.currentScreenIndex + 1,
    })
  )}

  handleBackClick() {
    this.setState((prevState) => ({
      currentScreenIndex: prevState.currentScreenIndex - 1,
    })
  )}

  isJobTitleInvalid() {
    const { jobTitle, isChecked } = this.state;

    return(jobTitle.length < this.jobTitleMinLength && isChecked) 
  }

  isJobDetailsInvalid() {
    const { jobDetails, isChecked } = this.state;

    return(jobDetails.length < this.jobDetailsMinLength && isChecked) 
  }
  
  isBudgetInvalid() {
    const { taskBudget, isChecked } = this.state;

    return((taskBudget < this.minBudget || taskBudget > this.maxBudget) && isChecked)
  }

  handleTaskDescriptionNextClick() {
    const { jobTitle, jobDetails } = this.state;

    if(jobTitle.length < this.jobTitleMinLength || jobDetails.length < this.jobDetailsMinLength) { //如果太长，need 换行？How？  TODO 
      this.setState({ isChecked: true });
    }else {
      this.handleNextClick();
      this.setState({ isChecked: false });
    }
  }
    
  handleTaskLocationAndTimeNextClick() {
    const { startDate } = this.state;

    if(!startDate) {
      this.setState({ isChecked: true });
    }else{
      this.handleNextClick();
      this.setState({ isChecked: false });
    }
  }

  handleGetQuoteClick() {
    const { taskBudget } = this.state;

    if(taskBudget == 0) {
      this.setState({ isChecked: true });
    }else{
      this.setState({ isChecked: false });
      //this.link to task page or profile()
    }
  }

  isTaskDateValid() {
    const { startDate, isChecked } = this.state;

    return(startDate == null && isChecked) 
    }

  jobTitleInput() {
    return(
      <JobTitleInput 
        jobTitle={this.state.jobTitle}
        isJobTitleInvalid={this.isJobTitleInvalid()}
        onJobTitle={this.onJobTitle}
        errorHint= {"Please enter at least 10 characters and a maximum of 50 "}
      />
    )
  }
 
  jobDetailsInput() {
    return(
      <JobDetailsInput
        jobDetails={this.state.jobDetails}
        isJobDetailsInvalid={this.isJobDetailsInvalid()}
        onJobDetails={this.onJobDetails}
        errorHint= {"Please enter at least 25 characters and a maximum of 1000 "}
      />
    )
  }

  taskDatePicker() {
    return(
      <TaskDatePicker 
        startDate={this.state.startDate}
        onDateChange={this.handleDateValue}
        isTaskDateInvalid={this.isTaskDateValid()}
      />
    )
  }

  render() {
    const { currentScreenIndex } = this.state;
    const pageList = [
      <Welcome handleNextClick={this.handleNextClick} />,
      <TaskDescription 
        jobTitleInput={this.jobTitleInput()}
        jobDetailsInput={this.jobDetailsInput()}
        handleNextClick={this.handleTaskDescriptionNextClick}
        handleBackClick={this.handleBackClick}
      />,
      <TaskLocationAndTime
        taskDatePicker={this.taskDatePicker()}
        handleNextClick={this.handleTaskLocationAndTimeNextClick}
        handleBackClick={this.handleBackClick} 
      />,
      <TaskBudget 
        taskBudget={this.state.taskBudget}
        isBudgetInvalid={this.isBudgetInvalid()}
        handleNextClick={this.handleGetQuoteClick}
        handleBackClick={this.handleBackClick}
        handleBudgetWageClick={this.handleBudgetWageClick}
        onBudgetHour={this.onBudgetHour}
        onBudgetHourlyWage={this.onBudgetHourlyWage}
      />,
    ]
    return (
      pageList[currentScreenIndex]
    )
  }
}

export default PostTaskForm;