import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';
import ErrorMessage from '../ErrorMessage';

function DateSelector({
  startDate,
  onDateChange,
  isDateInvalid,
  errorHint,
}) {
  
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
      { isDateInvalid && <ErrorMessage>{errorHint}</ErrorMessage> }
    </React.Fragment>
  )
}

export default DateSelector;