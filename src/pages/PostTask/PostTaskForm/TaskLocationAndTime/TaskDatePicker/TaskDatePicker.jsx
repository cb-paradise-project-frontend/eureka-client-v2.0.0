import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';

function TaskDatePicker({
  startDate,
  onDateChange,
}) {
  return (
    <DatePicker 
      selected={startDate}
      onChange={onDateChange}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 1)}
      disabledKeyboardNavigation
      placeholderText="Select a date"
    />
  )
}

export default TaskDatePicker;