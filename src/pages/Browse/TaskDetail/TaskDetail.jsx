import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import styles from './TaskDetail.module.scss';

import Header from './Header';
import Section from './Section';
import SideBar from './SideBar';
import OfferButton from './OfferButton';
import Question from './Question';
import { TaskProvider } from '../TaskContext';
import { EXPIRED } from '../../../components/Status';

export default function TaskDetail({
  taskList, questionList, addQuestion,
}) {
  const { params: { taskId } } = useRouteMatch();
  // TODO: use a default page when no task selected
  const selectedTask = taskList.find((task) => task.id === taskId);
  if (!selectedTask) return null;

  const { questions } = questionList.find((questionItem) => questionItem.id === taskId);
  const askQuestion = addQuestion(taskId);

  const { status, details } = selectedTask;

  return (
    <div className={styles.task_detail} >
      <TaskProvider task={selectedTask} >
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
        <Question 
          questions={questions}
          askQuestion={askQuestion}
        />
      </TaskProvider>
    </div>
  );
}
