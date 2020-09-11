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
      currentScreenIndex: 2,
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

    this.handleScreenSwitch = this.handleScreenSwitch.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.onJobTitle = this.onJobTitle.bind(this);
    this.onJobDetails = this.onJobDetails.bind(this);
    this.handleTaskDescriptionNextClick = this.handleTaskDescriptionNextClick.bind(this);
    this.handleTaskLocationAndTimeNextClick = this.handleTaskLocationAndTimeNextClick.bind(this);
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
      //(jobTitle.length < minLength && isChecked)
      //{(jobTitle&jobDetails.length < minLength && isChecked) && <ErrorHint>{errorHint}</ErrorHint>}
    const { jobTitle, isChecked } = this.state;
    return(jobTitle.length < this.jobTitleMinLength && isChecked) 
    // { //才会渲染errorHint
    //   this.setState({ isAbleToSubmitTaskDescription: true });
    // } else {
    //   this.setState({ isAbleToSubmitTaskDescription: false });
    // }
  }
  isJobDetailsInvalid() {
  const { jobDetails, isChecked } = this.state;
  return(jobDetails.length < this.jobDetailsMinLength && isChecked) 
  }

  handleTaskDescriptionNextClick() {
    const { jobTitle, jobDetails } = this.state;
    if(jobTitle.length < this.jobTitleMinLength || jobDetails.length < this.jobDetailsMinLength) { //如果太长，need 换行？How？  TODO 
      this.setState({ isChecked: true });
    }else{
      this.handleNextClick();
      this.setState({ isChecked: false });
    }
  }
    
  handleTaskLocationAndTimeNextClick() {
    const { startDate } = this.state;

    if (!startDate) {
      this.setState({ isChecked: true });
    }else{
      this.handleNextClick();
      this.setState({ isChecked: false })
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

  handleScreenSwitch (screenIndex) {
    switch (screenIndex) {
      default: return(
        <div>
          default
        </div>
      );
      case (0): 
        return (
          <Welcome handleNextClick={this.handleNextClick} />
        );
        
      case (1):
        return ( 
          <TaskDescription
            jobTitleInput={this.jobTitleInput()}
            jobDetailsInput={this.jobDetailsInput()}
            handleNextClick={this.handleTaskDescriptionNextClick}
            handleBackClick={this.handleBackClick}
          />
        );

      case (2):
        return ( 
          <TaskLocationAndTime 
            taskDatePicker={this.taskDatePicker()}
            handleNextClick={this.handleTaskLocationAndTimeNextClick}
            handleBackClick={this.handleBackClick}
          />
        );

      case (3):
        return (
          <TaskBudget
            taskBudget={this.state.taskBudget}
            handleBackClick={this.handleBackClick}
            handleBudgetWageClick={this.handleBudgetWageClick}
            onBudgetHour={this.onBudgetHour}
            onBudgetHourlyWage={this.onBudgetHourlyWage}
          /> 
        );
        
    }
  }

  render() {
    const { currentScreenIndex } = this.state;
    return (
      <React.Fragment>
      {
        this.handleScreenSwitch(currentScreenIndex)
      }
      </React.Fragment>
    )
  }
}

export default PostTaskForm;