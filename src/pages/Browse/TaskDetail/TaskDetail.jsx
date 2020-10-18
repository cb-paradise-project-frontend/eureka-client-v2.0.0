import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import styles from './TaskDetail.module.scss';

import Header from './Header';
import Section from './Section';
import SideBar from './SideBar';
import OfferButton from './OfferButton';
import Question from './Question';
import { TaskProvider } from './TaskContext';
import QuestionInput from './Question/QuestionInput';
import QuestionList from './Question/QuestionList';

export default function TaskDetail({
  taskList, onAskQuestion,
}) {
  const { params: { taskId } } = useRouteMatch();

  const task = taskList.find((taskObj) => taskObj.id === taskId);
  if (!task) return null;

  const { comments } = task;

  const addQuestion = (input) => {
    onAskQuestion(task.id, input);
  };

  const questionInput = (
    <QuestionInput addQuestion={addQuestion} />
  );

  const questionList = (
    <QuestionList questions={comments} />
  );

  const { description } = task;

  return (
    <div className={styles.task_detail} >
      <TaskProvider task={task} >
        <SideBar />
        <Header />
        <Section title='DETAILS' >
          {description}
        </Section>
        <Section title='OFFER' >
          <div className={styles.offer_icon} />
          <div className={styles.button_wrapper} >
            <OfferButton />
          </div>
        </Section>
        <Question
          questionInput={questionInput}
          questionList={questionList}
          questionCount={comments.length}
        />
      </TaskProvider>
    </div>
  );
}
