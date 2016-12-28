import axios from 'axios';
const NEWS_URL = "http://localhost:3005/news"

export const NYT_NEWS = 'NYT_NEWS'; 

export function fetchNews(news) {
  const news = NEWS_URL;
  const newsdata = axios.get(news);

  console.log("NEWS", newsdata);

  return {
    type: NYT_NEWS,
    payload: newsdata	
  }
}

