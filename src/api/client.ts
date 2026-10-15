import axios from 'axios';

// Cliente HTTP configurado por defecto a http://localhost:3000/api
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la llamada a la API:', error?.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default apiClient;
