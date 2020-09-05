import * as ActionTypes from './actionType';

export const initialize = (taskList) => ({
  type: ActionTypes.INITIALIZE,
  payload: { taskList }
});

export const select = (taskIndex) => ({
  type: ActionTypes.SELECT,
  payload: { taskIndex }
});
