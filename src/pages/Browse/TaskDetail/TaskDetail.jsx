import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';

import styles from './TaskDetail.module.scss';

import Header from './Header';
import Section from './Section';
import SideBar from './SideBar';
import OfferButton from './OfferButton';
import Comment from './Comment';
import { TaskProvider } from './TaskContext';
import CommentInput from './Comment/CommentInput';
import CommentList from './Comment/CommentList';
import { addComment } from '../../../apis';
import { AuthContext } from '../../../auth/Auth';
import { LoadTaskContext } from './LoadTaskContext';
import useMessageBox from '../../../components/MessageBox/useMessageBox';

export default function TaskDetail({ taskList }) {
  const { params: { taskId } } = useRouteMatch();

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser && currentUser.userId;

  const reload = useContext(LoadTaskContext);

  const [Message, showMessage] = useMessageBox();

  const task = taskList.find((taskObj) => taskObj.id === taskId);
  if (!task) return null;

  const {
    comments,
    description,
  } = task;

  const submitComment = async (input) => {
    if (!userId) return showMessage('Please login before leaving a message.');
    await addComment(taskId, input);

    return reload();
  };

  const commentInput = (
    <CommentInput addComment={submitComment} />
  );

  const commentList = (
    <CommentList comments={comments} />
  );

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
        <Comment
          commentInput={commentInput}
          commentList={commentList}
          commentCount={comments.length}
        />
      </TaskProvider>
      <Message />
    </div>
  );
}
