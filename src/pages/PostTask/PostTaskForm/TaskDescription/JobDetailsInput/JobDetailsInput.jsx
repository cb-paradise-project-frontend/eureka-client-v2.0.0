import React from 'react'

import styles from '../../PostTaskForm.module.scss'

import FormTextAreaInput from '../../../../../components/FormTextAreaInput';

export default function JobDetailsInput({
  jobDetails,
  isJobDetailsInvalid,
  onJobDetails,
  errorHint,
}) {
  const size = "large";
  const maxLength = 1000;
  const taskInputQuestion = "What are the details?";
  const taskInputHint = "Be as specific as you can about what needs doing";

  return (
    <React.Fragment>
    <h2 className={styles.other_heading}> 
      {taskInputQuestion}
    </h2>
    <label className={styles.hint_label}> 
      {taskInputHint}
    </label>
    <FormTextAreaInput
      isInputInvalid={isJobDetailsInvalid}
      displayValue={jobDetails}
      size={size}
      maxLength={maxLength}
      onInputChange={onJobDetails}
      errorHint={errorHint}
    />
    </React.Fragment>
      )
  }
