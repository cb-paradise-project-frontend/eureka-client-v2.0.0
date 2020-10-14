import React, { useState } from 'react';
import styles from './JobCategory.module.scss';

export default function JobCategory({
  jobCategory,
  onJobCategory,
}) {
  let option_id = [0, 1, 2];
  let options = [
    {name: 'Clean'},
    {name: 'Pickup'},
    {name: 'Removal'},
  ]

  return (
    <div>
      <select 
        required  
        className={styles}
        onChange={(e) => onJobCategory(e.target.value)}
        defaultValue={jobCategory}
      >
        <option value="" disabled>Please select the task category</option>
        {option_id.map(id => {
          return <option key={id} value={options[id].name}> {options[id].name} </option>
        })}
      </select>
    </div>
  )
}
