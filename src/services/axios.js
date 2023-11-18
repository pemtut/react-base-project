import axios from 'axios';
import createAuthCycle from '../utils/authCycle';

//create instance
const BASE_URL = process.env.REACT_APP_API_URL;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
createAuthCycle(axiosInstance);

export default axiosInstance;
