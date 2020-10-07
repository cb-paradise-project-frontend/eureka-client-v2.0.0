import axios from 'axios';

const taskData = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
});

export default function getTaskList() {
  return taskData.get();
}
