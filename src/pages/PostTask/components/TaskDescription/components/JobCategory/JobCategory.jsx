import React from 'react';
import ErrorMsg from '../../../../../../components/ErrorMessage';
import styles from './JobCategory.module.scss';

export default function JobCategory({
  jobCategory,
  onJobCategory,
  isJobCategoryNull,
}) {
  let option_id = [0, 1, 2];
  let options = [
    {name: 'Clean'},
    {name: 'Pickup'},
    {name: 'Removal'},
  ]

  const errorHint = 'Please select';

  return (
    <div className={styles.job_category_box}>
      <select 
        required  
        className={styles}
        onChange={(e) => onJobCategory(e.target.value)}
        defaultValue={jobCategory}
      >
        <option value="" disabled>Select the task category</option>
        {option_id.map(id => {
          return <option key={id} value={options[id].name}> {options[id].name} </option>
        })}
      </select>
      {isJobCategoryNull && <ErrorMsg> {errorHint} </ErrorMsg>}
    </div>
  )
}
