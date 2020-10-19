import React, { useContext } from 'react';
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
import { askQuestion } from '../../../apis';
import { AuthContext } from '../../../auth/Auth';
import { LoadTaskContext } from './LoadTaskContext';
import useMessageBox from '../../../components/MessageBox/useMessageBox';

export default function TaskDetail({ taskList }) {
  const { params: { taskId } } = useRouteMatch();

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser && currentUser.userId;

  const loadTaskList = useContext(LoadTaskContext);

  const [Message, showMessage] = useMessageBox();

  const task = taskList.find((taskObj) => taskObj.id === taskId);
  if (!task) return null;

  const { comments } = task;

  const addQuestion = async (input) => {
    if (!userId) return showMessage('Please login before leaving a message.');
    await askQuestion(userId, taskId, input);
    loadTaskList();
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
      <Message />
    </div>
  );
}
