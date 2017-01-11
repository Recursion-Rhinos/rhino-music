import axios from 'axios';
import { NYT_NEWS, GET_NEWS } from '../constants/ActionTypes';
// const NEWS_URL = "http://localhost:3005/news"

export function fetchNews(term) {
  const request = axios.post('/api/news', {body:term});
  console.log("ACTION-NEWS", request)
  return {
    type: NYT_NEWS,
    payload: request
  }
}

