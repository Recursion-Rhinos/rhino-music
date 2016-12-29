import axios from 'axios';
import { NYT_NEWS } from '../constants/ActionType';
// const NEWS_URL = "http://localhost:3005/news";


export function fetchNews() {
  let  news = "http://localhost:3005/news";
  let newsdata = axios.get(news)
  // .then((data) => {
  // 	console.log("NEWS DATA", data);
  //   return data;
  // 	})
  // .catch((error) => {
  //   console.log(error);
  // })
  
  console.log("NEWS", newsdata);

  return {
    type: NYT_NEWS,
    payload: newsdata	
  }
}

