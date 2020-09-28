import React, { useEffect } from 'react';

import styles from '../PostTask.module.scss';

import TaskDeliveryMethod from './TaskDeliveryMethod';
import SuburbInput from '../../../../api/SuburbInput';

function TaskLocationAndTime({
  taskDatePicker
}) {
  
 //webpack 报的错，没有声明，说明什么，webpack不是默认拿全局，use strict，通过window拿全局

 //callback fn， 每一次组件render，会call useEffect里面的callback fn
 useEffect(() => { //lifecycle 
  initialize("regions");
  //componentwillupmount
 }, [initialize]) //dependency, dependency改变才会刷新，两个同时match才会callback fn， dependency 如果是个变值，相当于compenentdidupdate

 function initialize(type) {
  const options = {
    componentRestrictions: {country: 'au'},
    types: [`(${type})`]
  };

  const input = document.getElementById('searchTextField');
  const autocomplete = new window.google.maps.places.Autocomplete(input, options);
 
}


  return (
    <React.Fragment>
      <div className={styles.main}>
        <h2 className={styles.other_heading}> 
          Where do you need it done? 
        </h2>
        <TaskDeliveryMethod />
        <input id="searchTextField" type="text" />
        <h2 className={styles.other_heading}> 
          When do you need it done? 
        </h2>
        <div className={styles.date_box}>
          {taskDatePicker}
        </div>
        </div>
    </React.Fragment>
  )
  }
export default TaskLocationAndTime;

