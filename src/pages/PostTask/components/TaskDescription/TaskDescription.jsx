import React from 'react';

function TaskDescription({
  jobTitleInput,
  jobDetailsInput,
  jobCategoryInput,
}) {
    return (
      <React.Fragment>
        <div >
          {jobTitleInput}
          {jobCategoryInput}
          {jobDetailsInput}
        </div>
      </React.Fragment>
    )
  }

export default TaskDescription;

