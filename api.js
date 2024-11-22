import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.55:4001/api',
});

export default api;