import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.URL_BACK_END || 'futebol-backend.up.railway.app'}:${process.env.PORT_BACK_END || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
