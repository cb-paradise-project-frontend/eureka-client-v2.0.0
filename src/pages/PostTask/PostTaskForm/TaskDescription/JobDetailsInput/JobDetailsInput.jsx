import React from 'react'

import TaskInput from '../../../TaskInput';

export default function JobDetailsInput({
  jobDetails,
  isJobDetailsValid,
  onJobDetails,
}) {
  const size = "large";
  const maxLength = "1000";
  const TASK_INPUT_MSG = {
    taskInputQuestion: "What are the details?",
    taskInputHint: "Be as specific as you can about what needs doing",
    errorHint: "Please enter at least 25 characters and a maximum of 1000 ",
  }
  return (
    <TaskInput
      isAbleToSubmitTaskDescription={isJobDetailsValid}
      displayValue={jobDetails}
      size={size}
      maxLength={maxLength}
      onJobInputChange={onJobDetails}
      taskInputMsg={TASK_INPUT_MSG}
    />
      )
  }

