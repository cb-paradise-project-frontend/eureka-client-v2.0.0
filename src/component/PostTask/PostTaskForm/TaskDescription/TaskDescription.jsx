import React from 'react';

import styles from '../PostTaskForm.module.scss';

import PostTaskTop from '../../PostTaskTop';
import TaskInput from './TaskInput';
import Button from '../../Button';

class TaskDescription extends React.Component {
  constructor(props){
    super(props);
    
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDetailsChange = this.onDetailsChange.bind(this);
  }

  onTitleChange(e) { 
    this.props.onJobTitle(e.target.value);
  }

  onDetailsChange(e) { 
    this.props.onJobDetails(e.target.value);
  }
  
  render() {
    return (
      <React.Fragment>
        <PostTaskTop> Tell us what you need done? </PostTaskTop>
        <div className={styles.Main}>
          <TaskInput
            size={'small'}
            minLength={'10'}
            maxLength={'50'}
            onJobInputChange={this.onTitleChange}
            jobLength={this.props.jobTitleLength}
            taskInputQuestion={"What do you need done?"} 
            taskInputHint={"This'll be the title of your task - e.g. Help move my sofa"}
            errorHint={"Please enter at least 10 characters and a maximum of 50 "}
          />
          <TaskInput
            size={'large'}
            minLength={'25'}
            maxLength={'1000'}
            onJobInputChange={this.onDetailsChange}
            jobLength={this.props.jobDetailsLength}
            taskInputQuestion={"What are the details?"} 
            taskInputHint={"Be as specific as you can about what needs doing"}
            errorHint={"Please enter at least 25 characters and a maximum of 1000 "}
          />
        </div>
        <div className={styles.Bottom}>
          <Button handleBackClick={this.props.handleBackClick}>
            Back
          </Button>
          <Button handleNextClick={this.props.handleNextClick}> 
            Next 
          </Button>
        </div>
      </React.Fragment>
    )
  }
}
export default TaskDescription;

