import React from 'react';

import styles from '../../../../PostTask.module.scss'

import HelpHint from './HelpHint';

function BudgetHelp() {
  return (
    <React.Fragment>
      <div className={styles.budget_help}>
        <HelpHint 
          taskSize={"Small task"}
          taskPayRate={"$25/hour"}
          Eg={"E.g. simple, easy, light work."}
        />
        <HelpHint 
          taskSize={"Medium task"}
          taskPayRate={"$75/hour"}
          Eg={"E.g. complex, average work"}
        />
        <HelpHint 
          taskSize={"Large task"}
          taskPayRate={"$100/hour"}
          Eg={"E.g. very complex, hard work"}
        />
      </div>
    </React.Fragment>
  )
}

export default BudgetHelp;