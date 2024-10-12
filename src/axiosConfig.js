// api/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://nube02.sytes.net:24082/", // Esto debe ser tu URL HTTPS
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores de Axios
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
