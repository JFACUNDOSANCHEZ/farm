import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Usa la variable de entorno definida en .env
  headers: {
    'Content-Type': 'application/json',
    // Puedes agregar más encabezados si es necesario
  },
});

// Puedes agregar interceptores si es necesario
axiosInstance.interceptors.request.use(
  (config) => {
    // Aquí puedes agregar lógica antes de que se envíe la solicitud, como agregar tokens de autorización
    const token = localStorage.getItem('token'); // Suponiendo que tienes un token almacenado
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Manejar errores de solicitud
    return Promise.reject(error);
  }
);

export default axiosInstance;
