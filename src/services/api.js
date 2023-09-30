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
  const token = sessionStorage.getItem('access_token'); // Retrieve the token here

  return api.post('/conteudos', content, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getContent = async () => {
  return api.get('/conteudos');
};

export const updateContent = async (id, content) => {
  const token = sessionStorage.getItem('access_token'); // Retrieve the token here

  return api.patch('/conteudos/' + id, content, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
