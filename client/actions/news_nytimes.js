import axios from 'axios';
import { NYT_NEWS, GET_NEWS } from '../constants/ActionTypes';

const fetchNews = (term) => {
  const request = axios.post('/api/news', {body:term});
  return {
    type: NYT_NEWS,
    payload: request
  }
}

export default fetchNews;