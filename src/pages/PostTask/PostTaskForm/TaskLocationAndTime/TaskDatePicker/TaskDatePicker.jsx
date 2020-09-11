import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';
import ErrorHint from '../../../ErrorHint';
import { addMonths } from 'date-fns';

function TaskDatePicker({
  startDate,
  onDateChange,
  isTaskDateInvalid,
}) {
  const errorHint = "Please select the date you would like the task to be done ";
  return (
    <React.Fragment>
      <DatePicker 
        selected={startDate}
        onChange={onDateChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 1)}
        disabledKeyboardNavigation
        placeholderText="Select a date"
      />
      { isTaskDateInvalid && <ErrorHint>{errorHint}</ErrorHint> }
    </React.Fragment>
  )
}

export default TaskDatePicker;