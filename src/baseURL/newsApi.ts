require('dotenv').config();

import axios from "axios";

const newsApi = axios.create({
  baseURL: 'http://api.mediastack.com/v1', 
  params: {
    access_key: process.env.APIKEY,
    languages: 'es'
  }
});

export default newsApi;