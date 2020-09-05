import * as ActionTypes from './actionType';

const INITIAL_STATE ={
  taskList: [],
  taskIndex: 0, 
};

export default function browse(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ActionTypes.INITIALIZE:
      return {
        ...state, 
        taskList: action.payload.taskList, 
      };
    case ActionTypes.SELECT:
      return {
        ...state, 
        taskIndex: action.payload.taskIndex, 
      };
    default:
      return state;
  }
}


