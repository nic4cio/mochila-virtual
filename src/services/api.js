import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const registerUser = async (userData) => {
  return api.post('/auth/signup', userData);
};

export const loginUser = async (userData) => {
  return api.post('/auth/signin', userData);
};