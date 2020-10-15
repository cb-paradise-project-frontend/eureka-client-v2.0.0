import axiosInstance from './axiosInstance';

export default function postTask(userID, taskData) {
  const { jobTitle, jobDescription, place, dueDate, taskBudget } = taskData; //jobCategory

  const data = { 
    "title": jobTitle,
    "status": "OPEN",
    "budget": taskBudget,
    "postedBy": "5f87e83d914f3af07a665501",
    "location": place,
    "dueDate": dueDate,
    "description": jobDescription
  }
  
  const formatted_data = JSON.stringify(data);
  return axiosInstance.post(`/tasks`, formatted_data)
    .then((response) => console.log(response))
    .catch((error) => console.error(error))
}
