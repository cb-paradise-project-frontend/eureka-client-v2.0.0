import React, { useState } from 'react';
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
};

function createData(size, data) {
  const dataArray = [];
  for(let i = 0; i < size; i ++) {
    const newData = {...data};
    newData.id = `${i}`;
    dataArray.push(newData);
  }
  return dataArray;
}

const dataArray = createData(10, testData);
dataArray[1].title = 'Wall repair';
dataArray[1].status = 'ASSIGNED';
dataArray[2].status = 'COMPLETED';
dataArray[3].status = 'EXPIRED';



function Browse({ match }) {
  //eslint-disable-next-line
  const [taskList, setTaskList] = useState(dataArray);

  const defaultTaskId = taskList[0].id; 

  return(
    <div className={styles.browse_container} >
      <div className = {styles.browse} >
        <TaskList taskList={taskList} />
        <Redirect to={`${match.path}/${defaultTaskId}`} />
        <Route path={`${match.path}/:taskId`} >
          <TaskDetail taskList={taskList} />
        </Route>
      </div>
    </div>
  );
}

export default withRouter(Browse);