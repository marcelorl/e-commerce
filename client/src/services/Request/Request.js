import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1337/api/'
});

export default instance;
