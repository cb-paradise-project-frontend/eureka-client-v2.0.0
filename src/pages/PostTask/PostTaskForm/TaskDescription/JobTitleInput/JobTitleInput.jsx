import React from 'react'

import TaskInput from '../../../TaskInput';

export default function JobTitleInput({
  jobTitle,
  isJobTitleValid,
  onJobTitle,
}) {
  const size = "small";
  const maxLength = "50";
  const TASK_INPUT_MSG = {
    taskInputQuestion: "What do you need done?",
    taskInputHint: "This'll be the title of your task - e.g. Help move my sofa",
    errorHint: "Please enter at least 10 characters and a maximum of 50 ",
  }
  return (
    <TaskInput
      isAbleToSubmitTaskDescription={isJobTitleValid}
      displayValue={jobTitle}
      size={size}
      maxLength={maxLength}
      onJobInputChange={onJobTitle}
      taskInputMsg={TASK_INPUT_MSG}
    />
      )
  }

