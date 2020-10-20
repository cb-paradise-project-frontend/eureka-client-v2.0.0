import React, { Profiler } from 'react';

import styles from './PostTask.module.scss';

import Welcome from './components/Welcome';
import TaskDescription from './components/TaskDescription';
import TaskLocationAndTime from './components/TaskLocationAndTime';
import TaskBudget from './components/TaskBudget';
import JobTitleInput from './components/TaskDescription/components/JobTitleInput';
import JobDetailsInput from './components/TaskDescription/components/JobDetailsInput';
import JobCategory from './components/TaskDescription/components/JobCategory';
import TaskDatePicker from '../../components/DateSelector';
import Place from '../../utils/getLocation';
import Button from '../../components/Button';
import ProgressBar from './components/ProgressBar';
import Modal from '../../components/Modal';
import { withAlert } from './components/AlertModal';
import postTask from '../../apis/Task/postTask';
import { AuthContext } from '../../auth/Auth';
import LoginModal from '../../components/LoginModal/LoginModal';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import MessageBox from '../../components/MessageBox';

class PostTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      jobTitle: "",
      jobDetails: "",
      jobCategory: "",
      startDate: null, //dueDate
      place: null, 
      taskBudget: "0",
      budgetHour: "1",
      budgetHourlyWage: "0",
      touch: false,
      method: "offline",
      currentUser: "",
      showLoginModal: false,
      successSubmit: false,
    }

    this.jobTitleMinLength = 10;
    this.jobDetailsMinLength = 25;
    this.minBudget = 5;
    this.maxBudget = 9999;

    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.onJobTitle = this.onJobTitle.bind(this);
    this.onJobDetails = this.onJobDetails.bind(this);
    this.onJobCategory = this.onJobCategory.bind(this);
    this.onRadioCheck = this.onRadioCheck.bind(this);
    this.handleGetQuoteClick = this.handleGetQuoteClick.bind(this);
    this.handleDateValue = this.handleDateValue.bind(this);
    this.handlePlace = this.handlePlace.bind(this);
    this.onTaskBudget = this.onTaskBudget.bind(this);
    this.onBudgetHourlyWage = this.onBudgetHourlyWage.bind(this);
    this.onBudgetHour = this.onBudgetHour.bind(this);
    this.handleBudgetWageClick = this.handleBudgetWageClick.bind(this);
    this.togglerShowLoginModal = this.togglerShowLoginModal.bind(this);
    this.togglerMsgBox = this.togglerMsgBox.bind(this);
  }

  componentDidMount(){
    const { currentUser } = this.context;
    console.log(this.context);
    this.setState({ currentUser: currentUser });
    console.log(433, currentUser);
  } //withForm HOC

  componentDidUpdate() {
    const { currentUser } = this.context;
    if(this.state.currentUser !== currentUser){
      this.setState({ currentUser: currentUser });
    }
  }

  togglerMsgBox() {
    this.setState((prevState) => ({
      successSubmit: !prevState.successSubmit, 
    }))
  }

  togglerShowLoginModal() {
    this.setState((prevState) => ({
      showLoginModal: !prevState.showLoginModal,
    }))
  }

  onJobTitle(value) {
    this.setState({ jobTitle: value });
  }

  onJobDetails(value) {
    this.setState({ jobDetails: value });
  }

  onJobCategory(value) {
    this.setState({ jobCategory: value });
  }

  onRadioCheck(value) {
    this.setState({
      method: value,
    });
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
  } //hook TODO

  onBudgetHourlyWage(value) {
    this.setState(
      { budgetHourlyWage: value },
      this.onTaskBudget,
    );
  }

  handleBudgetWageClick() {
    this.setState(
      { budgetHour: 1 },
      this.onTaskBudget,
    );
  }

  handleDateValue(date) {
    this.setState({ startDate: date });
  }

  handlePlace(addressQuery) {
    this.setState({ place: addressQuery });
  }

  handleNextClick() {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep + 1,
    }));
  }

  handleBackClick() {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep - 1,
    }));
  }

  async getQuote() {
    await postTask(this.state);
    this.props.history.push('/profile/tasks');
    this.togglerMsgBox()
  } //HOC

  handleGetQuoteClick() {
    const { taskBudget, currentUser } = this.state;
    
    if (taskBudget < this.minBudget || taskBudget > this.maxBudget) {
      this.setState({ touch: true });
    } else {
      this.setState({ touch: false });
      return currentUser ? this.getQuote() : this.togglerShowLoginModal();
    }
  }

  handleClickCreator(condition) {
    const handleClick = () => {
      if (condition) {
        this.setState({ touch: true });
      } else {
        this.handleNextClick(); //current step + 1, jump to next page
        this.setState({ touch: false });
      }
    }
    return handleClick;
  }

  render() {
    const {
      currentStep, jobTitle, jobDetails, jobCategory, place, startDate, touch, method, taskBudget, currentUser
    } = this.state;

    const conditionList = [
      (false),
      ((jobTitle.length < this.jobTitleMinLength || jobDetails.length < this.jobDetailsMinLength || jobCategory.length === 0)),
      ((method === "offline") ? (!startDate || !place) : (!startDate)),
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
          onClick={this.handleClickCreator(conditionList[currentStep])}
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

    const jobTitleInput = (
      <JobTitleInput
        jobTitle={jobTitle}
        isJobTitleInvalid={(jobTitle.length < this.jobTitleMinLength && touch)}
        onJobTitle={this.onJobTitle}
        errorHint= {"Please enter at least 10 characters and a maximum of 50 "}
      />
    );

    const jobDetailsInput = (
      <JobDetailsInput
        jobDetails={jobDetails}
        isJobDetailsInvalid={(jobDetails.length < this.jobDetailsMinLength && touch)}
        onJobDetails={this.onJobDetails}
        errorHint= {"Please enter at least 25 characters and a maximum of 1000 "}
      />
    );

    const jobCategoryInput = (
      <JobCategory
        onJobCategory={this.onJobCategory}
        jobCategory={jobCategory}
        isJobCategoryNull={(jobCategory.length === 0 && touch)}
      />
    )

    const taskPlace = (
      <Place 
        handleAddressQuery={this.handlePlace}
        place={place}
        type="(regions)"
        isPlaceInvalid={(place == null && touch)}
      />
    );

    const taskDatePicker = (
      <TaskDatePicker
        startDate={startDate}
        onDateChange={this.handleDateValue}
        isDateInvalid={(startDate == null && touch)}
        errorHint={"Please select the date you would like the task to be done"}
      />
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
            jobTitleInput={jobTitleInput}
            jobDetailsInput={jobDetailsInput}
            jobCategoryInput={jobCategoryInput}
          />
        ),
      },
      {
        title: 'Say where & when',
        content: (
          <TaskLocationAndTime
            taskDatePicker={taskDatePicker}
            taskPlace={taskPlace}
            handleAddressQuery={this.handlePlace}
            onRadioCheck={this.onRadioCheck}
            method={method}
          />
        ),
      },
      {
        title: 'Suggest how much',
        content: (
          <TaskBudget
            taskBudget={taskBudget}
            isBudgetInvalid={((taskBudget < this.minBudget || taskBudget > this.maxBudget) && touch)}
            handleBudgetWageClick={this.handleBudgetWageClick}
            onBudgetHour={this.onBudgetHour}
            onBudgetHourlyWage={this.onBudgetHourlyWage}
          />
        ),
      },
    ];

    const postTaskBottom = (
      <div className={styles.bottom} >
        { (currentStep === 0)|| backBtn }
        { currentStep === pages.length - 1 ? submitBtn : nextBtn }
      </div>
    );

    const { title, content } = pages[currentStep];

    const { onRequestClose } = this.props;

    return (
      <>
      <Modal onRequestClose={onRequestClose} >
        <Modal.Header>
          {title}
          {console.log(111, currentUser)}
        </Modal.Header>
        <ProgressBar currentStep={currentStep} />
        <Modal.Content>
          {content}
        </Modal.Content>
        <Modal.Footer>
          {postTaskBottom}
        </Modal.Footer>
      </Modal>
      { this.state.showLoginModal && <LoginModal  pageToggler={this.togglerShowLoginModal} /> }
      {this.state.successSubmit && 
        <MessageBox
          onRequestClose={this.props.onClose}
          info="Successfully submit"
        />
      }
      </>
    );
  }
}
PostTask.contextType = AuthContext;
export default withAlert(withRouter(PostTask));