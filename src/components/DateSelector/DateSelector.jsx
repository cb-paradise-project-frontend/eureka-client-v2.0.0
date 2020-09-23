import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';
import ErrorHint from '../../pages/PostTask/ErrorHint';
import { addMonths } from 'date-fns';

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
      { isDateInvalid && <ErrorHint>{errorHint}</ErrorHint> }
    </React.Fragment>
  )
}

export default DateSelector;