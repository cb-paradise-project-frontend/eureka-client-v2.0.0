import React, { useContext, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import styles from './TaskDetail.module.scss';

import Header from './Header';
import Section from './Section';
import SideBar from './SideBar';
import Comment from './Comment';
import { TaskProvider } from './TaskContext';
import CommentInput from './Comment/CommentInput';
import CommentList from './Comment/CommentList';
import { addComment } from '../../../apis';
import { AuthContext } from '../../../auth/Auth';
import { LoadTaskContext } from './LoadTaskContext';
import useMessageBox from '../../../components/MessageBox/useMessageBox';
import OfferList from './Offers';

export default function TaskDetail({ taskList }) {
  const { params: { taskId } } = useRouteMatch();
  const history = useHistory();

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser && currentUser.userId;

  const reload = useContext(LoadTaskContext);

  const [Message, showMessage] = useMessageBox();

  const task = taskList.find((taskObj) => taskObj.id === taskId);

  useEffect(() => {
    if (!task) history.push(`/tasks/${taskList[0].id}`);
  }, [taskId]);

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
        <Header />
        <Section title='DETAILS' >
          {description}
        </Section>
        <SideBar />
        <Section title='OFFER' >
          <OfferList />
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
