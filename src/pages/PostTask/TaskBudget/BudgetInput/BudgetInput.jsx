import React from 'react';

import styles from '../../PostTask.module.scss';

import ErrorMessage from '../../../../components/ErrorMessage';

function BudgetInput({
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
      <div className={styles.budget_input}>
        <input 
          className={styles.money}
          type="text"
          onChange={onBudgetHourlyWage}
          onInput={validateInput}
        />
        {switchMode 
          &&
        <React.Fragment>
          <div className={styles.units}> /hr &times; </div>
          <input
            className={styles.hour}
            type="text"
            onChange={onBudgetHour}
            onInput={validateInput}
          />
          <div className={styles.units}> /hrs </div>
        </React.Fragment>
        }
      </div>
      { isBudgetInvalid && <ErrorMessage>{errorHint}</ErrorMessage> }
    </div>
  )
}

export default BudgetInput;