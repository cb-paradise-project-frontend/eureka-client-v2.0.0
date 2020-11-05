import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateSelector.module.scss';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';
import ErrorMessage from '../ErrorMessage';

const Wrapper = styled.div`
  position:absolute;
`
function DateSelector({
  dueDate,
  onDateChange,
  isDateInvalid,
  errorHint,
}) {
  
  return (
    <React.Fragment>
    <Wrapper>
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
    </Wrapper>
    </React.Fragment>
  )
}

export default DateSelector;