import React from 'react';
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
import { getTaskByOwnerId, postTask } from '../../apis';
import { AuthContext } from '../../auth/Auth';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { withToggleContent } from '../../components/ToggleContent';
import MessageBox from '../../components/MessageBox';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import showState from './showStateConfig';
import AuthModal from '../../components/AuthModal';

class PostTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      jobTitle: "",
      jobDetails: "",
      jobCategory: "",
      dueDate: null,
      place: null, 
      taskBudget: "0",
      budgetHour: "1",
      budgetHourlyWage: "0",
      touch: false,
      method: "offline",
      User: "",
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
    }

  componentDidMount() {
    const { currentUser } = this.context;
    this.setState({ currentUser: currentUser });
    this.loadTask();
  } //withForm HOC

  componentDidUpdate(prevProps, prevState) {
    const { currentUser } = this.context;
    const { User,budgetHour, budgetHourlyWage } = this.state;
    const { budgetHour: prevHour, budgetHourlyWage: prevWage} = prevState;
    if(User !== currentUser){
      this.setState({ User: currentUser });
    }
    if(budgetHour !== prevHour || budgetHourlyWage !== prevWage) {
      this.onTaskBudget();
    }
  }
  async loadTask() {
    const postedTask = await getTaskByOwnerId();

    if(!postedTask){
      return null;
    }else if (postedTask.length !== 0){
      this.setState({currentStep: 1})
    }
  }

  onTaskBudget() {
    const { budgetHour, budgetHourlyWage } = this.state;
    this.setState({
      taskBudget: budgetHour * budgetHourlyWage,
    })
  }

  onJobTitle(value) {
    this.setState({ jobTitle: value });
  }//withForm 

  onJobDetails(value) {
    this.setState({ jobDetails: value });
  }//withForm 

  onJobCategory(value) {
    this.setState({ jobCategory: value });
  }//withForm 

  onRadioCheck(value) {
    this.setState({
      method: value,
    });
  }//withForm 

  onBudgetHour(value) {
    this.setState(
      { budgetHour: value },
    );
  }//withForm 

  onBudgetHourlyWage(value) {
    this.setState(
      { budgetHourlyWage: value },
    );
  }//withForm 

  handleBudgetWageClick() {
    this.setState(
      { budgetHour: 1},
    );
  }

  handleDateValue(date) {
    this.setState({ dueDate: date });
  }//withForm 

  handlePlace(addressQuery) {
    this.setState({ place: addressQuery });
  }//withForm 

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
    this.props.toggleShow('Loading')();
    await postTask(this.state); //api 200 404
    this.props.toggleShow('Loading')();
    this.props.toggleShow('MsgBox')();
  }

  handleGetQuoteClick() {
    const { taskBudget, User } = this.state;
    
    if (taskBudget < this.minBudget || taskBudget > this.maxBudget) {
      this.setState({ touch: true });
    } else {
      this.setState({ touch: false });
      User ? this.getQuote() : this.props.toggleShow('Login')();
    }
  }

  handleClickCreator(condition) {
    const handleClick = () => {
      if (condition) {
        this.setState({ touch: true });
      } else {
        this.handleNextClick();
        this.setState({ touch: false });
      }
    }
    return handleClick;
  }

  render() {
    const {
      currentStep, jobTitle, jobDetails, jobCategory, place, dueDate, touch, method, taskBudget, budgetHourlyWage,
    } = this.state;

    const conditionList = [
      (false),
      ((jobTitle.length < this.jobTitleMinLength || jobDetails.length < this.jobDetailsMinLength || jobCategory.length === 0)),
      ((method === "offline") ? (!dueDate || !place) : (!dueDate)),
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
          color={'blue'}
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
          color={'blue'}
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
      />
    );

    const jobDetailsInput = (
      <JobDetailsInput
        jobDetails={jobDetails}
        isJobDetailsInvalid={(jobDetails.length < this.jobDetailsMinLength && touch)}
        onJobDetails={this.onJobDetails}
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
        type="geocode"
        isPlaceInvalid={(place == null && touch)}
        />
        );
        // type="(regions)"
        
    const taskDatePicker = (
      <TaskDatePicker
        dueDate={dueDate}
        onDateChange={this.handleDateValue}
        isDateInvalid={(dueDate == null && touch)}
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
            budgetHourlyWage={budgetHourlyWage}
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
        { (currentStep === 0 || currentStep === 1)|| backBtn }
        { currentStep === pages.length - 1 ? submitBtn : nextBtn }
      </div>
    );

    const { title, content } = pages[currentStep];

    const { onRequestClose, onClose, ControlledContent, toggleShow } = this.props;

    return (
      <React.Fragment>
      <Modal onRequestClose={onRequestClose} >
        <ControlledContent.Loading>
          <LoadingPage />
        </ControlledContent.Loading>
        <Modal.Header>
          {title}
        </Modal.Header>
        <ProgressBar currentStep={currentStep} />
        <Modal.Content>
          {content}
        </Modal.Content>
        <Modal.Footer>
          {postTaskBottom}
        </Modal.Footer>
      </Modal>
      <ControlledContent.Login>
        <AuthModal.Login pageToggler={toggleShow('Login')} />
      </ControlledContent.Login>
      <ControlledContent.MsgBox>
        <MessageBox 
          info='Successful submit!'
          onRequestClose={() => {onClose(); this.props.history.push('/profile/tasks')}}
          />
      </ControlledContent.MsgBox>
      </React.Fragment>
    );
  }
}

PostTask.contextType = AuthContext;
export default withAlert(withToggleContent(showState)(withRouter(PostTask)));