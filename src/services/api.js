import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env?.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use((config) => {
  const clientToken = window.localStorage.getItem('TOKEN');

  if (clientToken) {
    config.headers.Authorization = `Bearer ${clientToken}`;
  }

  return config;
});

apiInstance.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.data) return Promise.reject(error.response.data);

    return Promise.reject(error);
  }
);

export async function getApiStatus() {
  const response = await apiInstance.get('/');
  return response.data;
}

export async function register(email, password) {
  const response = await apiInstance.post('/register', {
    email,
    password,
  });
  return response.data;
}

export async function login(email, password) {
  const response = await apiInstance.post('/login', {
    email,
    password,
  });
  return response.data;
}

export async function getFurnitures() {
  const response = await apiInstance.get('/furniture');
  return response.data;
}