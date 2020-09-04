import { createSelector } from 'reselect';

const selectBrowse = state => state.browse;
const selectTaskIndex = createSelector(
  [selectBrowse],
  (browse) => browse.taskIndex
);
export const selectTaskList = createSelector(
  [selectBrowse],
  (browse) => browse.taskList
);

export const selectTask = createSelector(
  selectTaskList, 
  selectTaskIndex,
  (taskList, taskIndex) => taskList[taskIndex]
);