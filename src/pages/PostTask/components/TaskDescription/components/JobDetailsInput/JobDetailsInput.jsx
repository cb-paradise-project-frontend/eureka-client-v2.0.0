import React from 'react';

import styles from '../../../../PostTask.module.scss';

import TextArea from '../../../../../../components/TextArea';

export default function JobDetailsInput({
  jobDetails,
  isJobDetailsInvalid,
  onJobDetails,
  errorHint,
}) {
  const size = 'large';
  const maxLength = 1000;
  const taskInputQuestion = 'What are the details?';
  const taskInputHint = 'Be as specific as you can about what needs doing';

  return (
    <>
      <h2 className={styles.other_heading}>
        {taskInputQuestion}
      </h2>
      <label className={styles.hint_label}>
        {taskInputHint}
      </label>
      <TextArea
        isInputInvalid={isJobDetailsInvalid}
        displayValue={jobDetails}
        size={size}
        maxLength={maxLength}
        onInputChange={onJobDetails}
        errorHint={errorHint}
      />
    </>
  );
}
