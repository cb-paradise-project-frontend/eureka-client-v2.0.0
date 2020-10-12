import taskData from './axiosInstance';

export default function getTaskList(keyword) {
  const config = keyword
    ? `?keyword=${keyword}`
    : '';

  return taskData.get(config);
}
