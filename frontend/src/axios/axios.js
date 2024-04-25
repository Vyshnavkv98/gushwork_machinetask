import axios from 'axios';
import { baseUrl } from '../constant/constant';

const instance = axios.create({
  baseURL: baseUrl,

});

instance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('bearerToken');
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
 
  


export default instance;