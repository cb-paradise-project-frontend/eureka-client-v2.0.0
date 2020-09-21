import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import styles from './Browse.module.scss';

import TaskList from './TaskList';
import TaskDetail from './TaskDetail';

const testData = {
  title: 'Roof repair',
  status: 'OPEN',
  budget: '120',
  poster: {
    name: 'Tifa',
    avatar: '',
  },
  location: 'Kurunjang VIC 3337, Australia',
  due: 'Monday, 24th Aug 2020',
  details: `-remove existing bamboo fence - supply and install new fence (open for ideas)
            - install synthetic turf
            - landscaping design and install
            - remove and upgrade existing waterfall feature into the pool`,
  questions: [], 
};

function createData(size, data) {
  const dataArray = [];
  for(let i = 0; i < size; i ++) {
    const newData = {...data};
    newData.id = `${i}`;
    newData.questions = [];
    dataArray.push(newData);
  }
  return dataArray;
};

const dataArray = createData(10, testData);
dataArray[1].title = 'Wall repair';
dataArray[1].status = 'ASSIGNED';
dataArray[2].status = 'COMPLETED';
dataArray[3].status = 'EXPIRED';


class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = { taskList: dataArray };
    this.addQuestion = this.addQuestion.bind(this);
  };

  addQuestion(taskId) {
    return (question, user) => {
      const taskIndex = this.state.taskList.findIndex(task => task.id === taskId);
      if (!taskIndex && taskIndex!== 0) {  //TODO, remove the last condition when we have real id
        return null;
      } else {
        this.setState((prevState) => {
          const newTaskList = prevState.taskList.map(task => task);
          const newQuestionList = newTaskList[taskIndex].questions;
          const newQuestion = {
            id: newQuestionList.length + 1,
            poster: user,
            content: question, 
          };
          newQuestionList.unshift(newQuestion);
          return { taskList: newTaskList }; 
        });
      }
    }
  };

  render() {
    const { taskList } = this.state;
    const { props, addQuestion } = this;
    const { match:{ path } } = props;

    return(
      <div className={styles.browse_container} >
        <div className = {styles.browse} >
          <TaskList taskList={taskList} />
          <Route path={`${path}/:taskId`} >
            <TaskDetail 
              taskList={taskList} 
              addQuestion={addQuestion}
            />
          </Route>
        </div>
      </div>
    );
  };
};

export default withRouter(Browse);