import { axiosInstance, setTokenToRequest, extractTokenFromResponse } from './axiosInstance';


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
  //task1: userID, 如何从localstorage解析jwt得到userID
  //task2: 后端增加验证（Joi）, update task model
  //task3: errorhandler,error_msg handle

  //const formatted_data = JSON.stringify(data);
  axiosInstance.interceptors.request.use(setTokenToRequest);
  axiosInstance.interceptors.response.use(extractTokenFromResponse);

  return axiosInstance.post(`/tasks`, data)
    .then((response) => console.log(response))
    .catch((error) => console.error(error))
}
