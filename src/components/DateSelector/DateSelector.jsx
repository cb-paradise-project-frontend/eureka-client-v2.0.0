import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateSelector.module.scss';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';
import ErrorMessage from '../ErrorMessage';

function DateSelector({
  dueDate,
  onDateChange,
  isDateInvalid,
  errorHint,
}) {
  
  return (
    <React.Fragment>
      <DatePicker className={styles.input}
        selected={dueDate}
        onChange={onDateChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 1)}
        disabledKeyboardNavigation
        placeholderText="Select a date"
        dateFormat="yyyy/MM/dd"
      />
      { isDateInvalid && <ErrorMessage>{errorHint}</ErrorMessage> }
    </React.Fragment>
  )
}

export default DateSelector;