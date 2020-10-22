import { api } from '../axiosInstance';

export default async function postTask(taskData) {
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
  
  const { status } = await api.post(`/tasks`, data);
  // console.log(status);
  return (status === 200);
}
