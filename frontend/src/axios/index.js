import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://class-calender.herokuapp.com/api',
});
axiosInstance.defaults.withCredentials = true;
export default axiosInstance;
