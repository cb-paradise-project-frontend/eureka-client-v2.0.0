import taskData from './axiosInstance';

export default function getTaskList() {
  return taskData.get();
}
