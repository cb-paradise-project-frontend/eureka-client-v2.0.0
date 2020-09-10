import React from 'react'

import styles from '../../PostTaskForm.module.scss'

import FormTextAreaInput from '../../../../../components/FormTextAreaInput';

export default function JobTitleInput({
  jobTitle,
  isJobTitleValid,
  onJobTitle,
  errorHint,
}) {
  const size = "small";
  const maxLength = 50;
  const taskInputQuestion = "What do you need done?";
  const taskInputHint = "This'll be the title of your task - e.g. Help move my sofa";

  return (
    <React.Fragment>
    <h2 className={styles.other_heading}> 
      {taskInputQuestion}
    </h2>
    <label className={styles.hint_label}> 
      {taskInputHint}
    </label>
    <FormTextAreaInput
      isInputValid={isJobTitleValid}
      displayValue={jobTitle}
      size={size}
      maxLength={maxLength}
      onInputChange={onJobTitle}
      errorHint={errorHint}
    />
    </React.Fragment>
    )
  }

