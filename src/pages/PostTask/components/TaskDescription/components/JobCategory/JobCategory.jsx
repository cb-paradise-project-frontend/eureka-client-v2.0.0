import React from 'react';
import styles from './JobCategory.module.scss';

export default function JobCategory() {
  let option_id = [0, 1, 2];
  let options = [
    {name: 'Clean'},
    {name: 'Pickup'},
    {name: 'Removal'},
  ]

  return (
    <div>
      <select required defaultValue={''} className={styles}>
        <option value="" disabled>Please select the task category</option>
        {option_id.map(id => {
          return <option key={id} value={id}> {options[id].name} </option>
        })}
      </select>
    </div>
  )
}
