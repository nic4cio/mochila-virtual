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

export const createContent = async (content) => {
  return api.post('/conteudos', content);
};

export const getContent = async (content) => {
  return api.get('/conteudos', content);
};