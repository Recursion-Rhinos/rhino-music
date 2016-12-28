import axios from 'axios';
import { NYT_NEWS } from '../constants/ActionType';
const NEWS_URL = "http://localhost:3005/news";

export function fetchNews(news) {
  const news = NEWS_URL;
  const newsdata = axios.get(news);

  console.log("NEWS", newsdata);

  return {
    type: NYT_NEWS,
    payload: newsdata	
  }
}

