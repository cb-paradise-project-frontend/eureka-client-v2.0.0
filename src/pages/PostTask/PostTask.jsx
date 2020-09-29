import React from 'react';

import styles from './PostTask.module.scss';

import Welcome from './Welcome';
import TaskDescription from './TaskDescription';
import TaskLocationAndTime from './TaskLocationAndTime';
import TaskBudget from './TaskBudget';
import JobTitleInput from './TaskDescription/JobTitleInput';
import JobDetailsInput from './TaskDescription/JobDetailsInput';
import TaskDatePicker from '../../components/DateSelector';
import Place from '../../utils/getLocation';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { withAlert } from './AlertModal';

class PostTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreenIndex: 0,
      jobTitle: "",
      jobDetails: "",
      startDate: null,
      place: null,
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
    this.handlePlace = this.handlePlace.bind(this);
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

  handlePlace(addressQuery) {
    this.setState({ place: addressQuery });
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

  isPlaceValid() {
    const { place, isChecked } = this.state;

    return (place == null && isChecked);
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
  
  taskPlace() {
    return(
      <Place 
        handleAddressQuery={this.handlePlace}
        place={this.state.place}
        isPlaceInvalid={this.isPlaceValid()}
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
      currentScreenIndex, startDate, jobTitle, jobDetails, place
    } = this.state;

    const conditionList = [
      (false),
      (jobTitle.length < this.jobTitleMinLength || jobDetails.length < this.jobDetailsMinLength),
      (!startDate || !place),
    ];

    const backBtn = (
      <div className={styles.button} >
        <Button
          onClick={this.handleBackClick}
          color={'light-blue'}
          long
        >
          Back
        </Button>
      </div>
    );

    const nextBtn = (
      <div className={styles.button} >
        <Button
          onClick={this.handleClickCreator(conditionList[currentScreenIndex])}
          long
        >
          Next
        </Button>
      </div>
    );

    const submitBtn = (
      <div className={styles.button} >
        <Button 
          onClick={this.handleGetQuoteClick} 
          long
        >
          Get quotes
        </Button>
      </div>
    );

    const pages = [
      {
        title: '',
        content: <Welcome />,
      },
      {
        title: 'Tell us what you need done?',
        content: (
          <TaskDescription
            jobTitleInput={this.jobTitleInput()}
            jobDetailsInput={this.jobDetailsInput()}
          />
        ),
      },
      {
        title: 'Say where & when',
        content: (
          <TaskLocationAndTime
            taskDatePicker={this.taskDatePicker()}
            taskPlace={this.taskPlace()}
            handleAddressQuery={this.handlePlace}
          />
        ),
      },
      {
        title: 'Suggest how much',
        content: (
          <TaskBudget
            taskBudget={this.state.taskBudget}
            isBudgetInvalid={this.isBudgetInvalid()}
            handleBudgetWageClick={this.handleBudgetWageClick}
            onBudgetHour={this.onBudgetHour}
            onBudgetHourlyWage={this.onBudgetHourlyWage}
          />
        ),
      },
    ];

    const postTaskBottom = (
      <div className={styles.bottom} >
        { currentScreenIndex === 0 || backBtn }
        { currentScreenIndex === pages.length - 1 ? submitBtn : nextBtn }
      </div>
    );

    const { title, content } = pages[currentScreenIndex];

    const { onRequestClose } = this.props;

    return (
      <Modal onRequestClose={onRequestClose} >
        <Modal.Header>
          {title}
        </Modal.Header>
        <Modal.Content>
          {content}
        </Modal.Content>
        <Modal.Footer>
          {postTaskBottom}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default withAlert(PostTask);
