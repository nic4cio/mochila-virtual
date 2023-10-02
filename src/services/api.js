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

export const recusarContent = async (id, content) => {
  const token = sessionStorage.getItem('access_token'); // Retrieve the token here

  return api.patch('/conteudos/recusar/' + id, content, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const curadoriaUser = async (id, user) => {
  const token = sessionStorage.getItem('access_token'); // Retrieve the token here

  return api.patch('/users/' + id, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const upvoteContent = async (userId, contentId) => {
  const token = sessionStorage.getItem('access_token');

  try {
    const response = await api.post('/content-rating/upvote/' + parseInt(userId), parseInt(contentId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Esta resposta pode incluir o novo número de votos ou outra informação útil
  } catch (error) {
    console.error('Erro ao upvotar conteúdo:', error);
    throw error;
  }
};

export const downvoteContent = async (userId, contentId) => {
  const token = sessionStorage.getItem('access_token');

  try {
    const response = await api.post('/content-rating/downvote/' + parseInt(userId), parseInt(contentId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Esta resposta pode incluir o novo número de votos ou outra informação útil
  } catch (error) {
    console.error('Erro ao downvotar conteúdo:', error);
    throw error;
  }
};

export const getContentVotes = async (contentId) => {
  const response = await api.get('/content-rating/'+ parseInt(contentId) +'/votes');
  return response.data;
};