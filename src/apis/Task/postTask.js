import { api } from '../axiosInstance';

export default function postTask(userID, taskData) {
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
  //task1: userID, 问潘哥，如何从localstorage解析jwt得到userID
  //task2: 后端增加验证（Joi）, update task model
  //task3: errorhandler,error_msg handle

  //const formatted_data = JSON.stringify(data);

  return api.post(`/tasks`, data)
    .then((response) => console.log(response))
    .catch((error) => console.error(error))
}
