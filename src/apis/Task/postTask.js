import { api } from '../axiosInstance';

export default function postTask(taskData) {
  const { jobTitle, jobDetails, jobCategory, place, dueDate, taskBudget } = taskData;
  
  const data = { 
    title: jobTitle,
    status: "OPEN",
    category: jobCategory,
    budget: taskBudget,
    location: place,
    dueDate: dueDate,
    description: jobDetails
  }
  
  return api.post(`/tasks`, data)
    .then((response) => console.log(response))
    .catch((error) => console.error(error))
}
