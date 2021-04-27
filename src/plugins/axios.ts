import Axios from 'axios';

const baseURL = 'https://api.github.com';
const timeout = 5000;

const axios = Axios.create({
  baseURL,
  timeout,
});

export default axios;
