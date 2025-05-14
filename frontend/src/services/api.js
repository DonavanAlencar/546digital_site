import axios from 'axios';

const api = axios.create({
  baseURL: 'https://site.546digitalservices.com',
  headers: {
    Authorization: 'Basic NTQ2ZGlnYWRtaW46eG1GQiBDMUNuIE9rYWggcHFrdCB5OFBnIHBQV3U='
  }
});

export default api;
