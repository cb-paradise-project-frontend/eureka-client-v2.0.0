import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default axiosInstance;

// import axios from 'axios';

// const taskData = axios.create({
//   baseURL: 'http://localhost:5000/api/tasks',
// });

// export default taskData;