import React, { useState } from 'react';

import styles from './Posted.module.scss';

import PostTaskButton from '../../../../../components/PostTaskButton';
import TaskCard from '../../../../../components/TaskCard';
import Modal from '../../../../../components/Modal';
import Section from '../../../../../components/TaskSection';
import CommentList from '../../../../Browse/TaskDetail/Comment/CommentList';

const TaskModal = ({ task, onRequestClose }) => {
  const {
    title,
    offers,
    comments,
    category,
    budget,
    location,
    due,
    description,
  } = task;

  const SideBar = () => (
    <div className={styles.side_bar} >
      <div className={styles.category} >
        {category}
      </div>
      <div className={styles.budget} >
        $ {budget}
      </div>
    </div>
  );

  return (
    <Modal onRequestClose={onRequestClose}>
      <Modal.Header>
        {title}
      </Modal.Header>
      <Modal.Content>
        <div className={styles.task_detail} >
          <SideBar />
          <Section title={'DUE'} >
            {new Date(due).toDateString()}
          </Section>
          <Section title={'LOCATION'} >
            {description}
          </Section>
          <Section title={'DESCRIPTION'} >
            {description}
          </Section>
          <Section title={`COMMENT(${comments.length})`} >
            <CommentList comments={comments} />
          </Section>
        </div>
      </Modal.Content>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

const Posted = ({ postedTask }) => {
  const [currentTaskId, selectTask] = useState();

  if (!postedTask) return null;

  const handleClickCreator = (taskId) => () => {
    selectTask(taskId);
  };

  const taskList = postedTask && postedTask.map((task) => (
    <div className={styles.card_wrapper} key={task.id} >
      <TaskCard
        task={task}
        onClick={handleClickCreator(task.id)}
      />
    </div>
  ));

  const currentTask = postedTask.find((task) => task.id === currentTaskId);

  return (
    <>
      <div className={styles.container}>
      {
        !postedTask ? (
          <React.Fragment>
            <span>You have not post any task yet</span>
            <PostTaskButton />
          </React.Fragment>
        ) : (
          <div className={styles.list_wrapper}>
            {taskList}
          </div>
        )
      }
      </div>
      {currentTask &&
        <TaskModal
          task={currentTask}
          onRequestClose={() => selectTask('')}
        />
      }
    </>
  );
};

export default Posted;
