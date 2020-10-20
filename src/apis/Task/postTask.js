import { api } from '../axiosInstance';

export default function postTask(taskData) {
  const { jobTitle, jobDetails, place, startDate, taskBudget } = taskData;
  
  const data = { 
    title: jobTitle,
    status: "OPEN",
    budget: taskBudget,
    location: place,
    dueDate: startDate,
    description: jobDetails
  }
  
  return api.post(`/tasks`, data)
    .then((response) => console.log(response))
    .catch((error) => console.error(error))
}
