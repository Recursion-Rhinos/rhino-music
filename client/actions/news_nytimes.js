import axios from 'axios';
import { NYT_NEWS, GET_NEWS } from '../constants/ActionTypes';

export default function fetchNews(term) {
  const request = axios.post('/api/news', {body:term});
  return {
    type: NYT_NEWS,
    payload: request
  }
}

