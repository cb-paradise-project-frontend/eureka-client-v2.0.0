import React from 'react';

import styles from '../../../../PostTask.module.scss';
import styled from 'styled-components';
import ErrorMessage from '../../../../../../components/ErrorMessage';
import Input from '../../../../../../components/Input';

const Wrapper = styled.div`
display: flex;
padding: 10px 15px;
`

function BudgetInput({
  taskBudget,
  isBudgetInvalid,
  minBudget,
  maxBudget,
  onBudgetHour,
  onBudgetHourlyWage,
  switchMode,
}) {

  const validateInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1').replace(/^0+/g, '').replace(/(?<!^)-/g, '');
  }

  const errorHint = `Please suggest a budget between $ ${minBudget} and ${maxBudget} for your task`;

  return (
    <div className={styles.budget_input_box}>
      <Wrapper>
        <Input 
          type="text"
          handleChange={onBudgetHourlyWage}
          onInput={validateInput}
          value={taskBudget}
        />
        {switchMode 
          &&
        <React.Fragment>
          <div className={styles.units}> /hr &times; </div>
          <Input
            type="text"
            handleChange={onBudgetHour}
            onInput={validateInput}
            defaultValue={"1"}
          />
          <div className={styles.units}> /hrs </div>
        </React.Fragment>
        }
      </Wrapper>
      <Wrapper>
        { isBudgetInvalid && <ErrorMessage>{errorHint}</ErrorMessage> }
      </Wrapper>
    </div>
  )
}

export default BudgetInput;