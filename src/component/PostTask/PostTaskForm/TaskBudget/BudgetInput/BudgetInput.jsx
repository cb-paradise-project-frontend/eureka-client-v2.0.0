import React from 'react';

import styles from '../../PostTaskForm.module.scss';

function BudgetInput({
  onBudgetChange,
}) {
  //only positive num, only integer, paste not allowed
  //"this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1').replace(/^0+/g, '').replace(/(?<!^)-/g, '');"
  const validateInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1').replace(/^0+/g, '').replace(/(?<!^)-/g, '');
  }
  //根据公司要求开发一个输入组件，能安全没有后门去筛选用户输入的数据
  //我考虑到复用性（reuseable），单一原则，readable
  //用什么技术 实现 什么功能
  //regex技术，solid原则封装组件，实现数字输入框复用性的component
  //实现思路，js，key（A
  //在数据库那边再做一个valid，double valid，避免绕过前端，call api
  //如果前端不做，也可以，但是前端做了这样一个valid，可以很好节省性能
  return (
    <input 
      className={styles.Money}
      type = "text" 
      onChange={onBudgetChange}
      onInput={validateInput}
    />
  )
}

export default BudgetInput;

