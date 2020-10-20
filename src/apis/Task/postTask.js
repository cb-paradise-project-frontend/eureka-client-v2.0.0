import { api } from '../axiosInstance';

export default function postTask(taskData) {
  const { jobTitle, jobDetails, place, startDate, taskBudget } = taskData;
  
  const data = { 
    title: jobTitle,
    status: "OPEN",
    budget: taskBudget,
    postedBy: "5f893a17914f3af07a66550c",
    location: place,
    dueDate: startDate,
    description: jobDetails
  }
  
  return api.post(`/tasks`, data)
    .then((response) => console.log(response))
    .catch((error) => console.error(error))
}
