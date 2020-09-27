import React from 'react'

import styles from '../../PostTask.module.scss'

function BudgetDisplay({
  taskBudget,
}) {
  return (
    <div className={styles.budget}>
      <div className={styles.label}>
        <div> ESTIMATED BUDGET </div>
          <div> Final payment will be agree later </div>
        </div>
      <div> ${taskBudget} </div>
    </div>
  )
}

export default BudgetDisplay;
