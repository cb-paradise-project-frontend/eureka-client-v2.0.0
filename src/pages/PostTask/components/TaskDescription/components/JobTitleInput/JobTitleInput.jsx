import React from 'react';

import styles from '../../../../PostTask.module.scss';

import TextArea from '../../../../../../components/TextArea';
import Input from '../../../../../../components/Input';

export default function JobTitleInput({
  jobTitle,
  isJobTitleInvalid,
  onJobTitle,
}) {
  const maxLength = 50;
  const taskInputQuestion = 'What do you need done?';
  const taskInputHint = "This'll be the title of your task - e.g. Help move my sofa";
  const errorHint= 'Please enter at least 10 characters and a maximum of 50';

  return (
    <>
      <h2 className={styles.other_heading}>
        {taskInputQuestion}
      </h2>
      <label className={styles.hint_label}>
        {taskInputHint}
      </label>
      <div className={styles.text_area} >
        <Input
          isError={isJobTitleInvalid}
          displayValue={jobTitle}
          maxLength={maxLength}
          handleChange={onJobTitle}
          errorMessage={errorHint}
        />
      </div>
    </>
  );
}
