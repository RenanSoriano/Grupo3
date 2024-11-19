import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4001/api', // URL do backend
    withCredentials: true
  });