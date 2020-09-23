import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

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

const tasks = createData(10, testData);
tasks[1].title = 'Wall repair';
tasks[1].status = 'ASSIGNED';
tasks[2].status = 'COMPLETED';
tasks[3].status = 'EXPIRED';


class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      taskList: [],
      questionList: [],  
    };
    this.addQuestion = this.addQuestion.bind(this);
  };

  initializeState() {
    const taskList = [];
    const questionList = [];
    tasks.forEach(({ id, questions, ...otherInfo }) => {
      questionList.push({ 
        id,
        questions, 
       });
      taskList.push({
        id, 
        ...otherInfo,
      });
    }); 
    this.setState({
      taskList,
      questionList, 
    });
  }

  componentDidMount() {
    this.initializeState();
  };
  //TODO 既要get也要put 龙哥
  //状态是嵌套array，如果只是为了update一个reply，如果把整个复制拿出来，添加完reply后再上传
  //task -> question[-> reply] -> desc -> budget -> location -> time -> User[Poster, Tasker]
  //当添加question的时候，是等待upload成功之后，从后端拿到然后刷新，还是不用等，前端根据state刷新
  //students.hobbies.basketball
  //embedded, reference 

  addQuestion(taskId) {
    const questionIndex = this.state.questionList.findIndex(
      question => question.id === taskId
    );
    return questionIndex >= 0 && 
      ((question, user) => {
        this.setState((prevState) => {
          const newQuestionList = prevState.questionList.map(questionObj => questionObj);
          const selectedQuestionObj = newQuestionList[questionIndex];
          const newQuestion = {
            id: selectedQuestionObj.length + 1,
            poster: user,
            content: question, 
          };
          selectedQuestionObj.questions.unshift(newQuestion);
          return { questionList: newQuestionList }; 
        });
    });
  };

  render() {
    const { taskList, questionList } = this.state;
    const { props, addQuestion } = this;
    const { match:{ path } } = props;
    const defaultTaskId = taskList[0] && taskList[0].id;

    return(
      <div className={styles.browse_container} >
        <div className = {styles.browse} >
          <Redirect to={`${path}/${defaultTaskId}`} />
          <TaskList taskList={taskList} />
          <Route path={`${path}/:taskId`} >
            <TaskDetail 
              taskList={taskList} 
              questionList={questionList}
              addQuestion={addQuestion}
            />
          </Route>
        </div>
      </div>
    );
  };
};

export default withRouter(Browse);