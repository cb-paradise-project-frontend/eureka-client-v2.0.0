import React from 'react'

import styles from '../../PostTaskForm.module.scss'

import TextArea from '../../../../../components/TextArea';

export default function JobTitleInput({
  jobTitle,
  isJobTitleInvalid,
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
    <TextArea.WithErrorHint
      isInputInvalid={isJobTitleInvalid}
      displayValue={jobTitle}
      size={size}
      maxLength={maxLength}
      onInputChange={onJobTitle}
      errorHint={errorHint}
    />
    </React.Fragment>
    )
  }

