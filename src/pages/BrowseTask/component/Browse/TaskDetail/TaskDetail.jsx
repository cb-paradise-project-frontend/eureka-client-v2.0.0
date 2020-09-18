import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './TaskDetail.module.scss';

import Header from './Header';
import Section from './Section';
import SideBar from './SideBar';
import OfferButton from './OfferButton';
import Question from './Question';
import { TaskProvider } from '../TaskContext';
import { EXPIRED } from '../../../../../components/Status';

function TaskDetail({ taskList, match }) {
  const task = taskList.find(task => task.id === match.params.taskId) || taskList[0];
  const { status, details } = task ;

  return(
    <div className={styles.task_detail} >
      <TaskProvider task={task} >
        <SideBar />
        <Header />
        <Section title='DETAILS' >
          {details}
        </Section>
        <Section title='OFFER' >
          <div className={styles.offer_icon} />
          <div className={styles.button_wrapper} >
            <OfferButton isExpired={(status === EXPIRED)} />
          </div>
        </Section>
        <Question/>
      </TaskProvider>
    </div>
  );
};

export default withRouter(TaskDetail);

