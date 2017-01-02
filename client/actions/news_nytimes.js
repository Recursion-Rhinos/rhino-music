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


// export function sendNews() {
//   const post_request = axios.post('api/news', {term : 'Obama'});

//   return {
//     type: "GET_NEWS",
//     payload: post_request
//   }
// }
// const newsData = (news) => {
//   console.log("news", news)	
//   return {
//     type: NYT_NEWS,
//     news: news
//   }
// };


// export function fetchNews() {
//   return (dispatch) => {
//     return axios.get('/api/news')
//       .then((response) => {
//       	console.log("RESPONSE", response)
//         dispatch(newsData(response));
//       })
//       .catch((error) => console.log(error));
//   }
// }
// export function fetchNews() {
//   console.log("inside fetchNews get request");
//   return function (dispatch) {
//     const news = "http://localhost:3005/api/news";
//       axios.get(news, {})
//       .then(res => {
//         console.log("inside axios-get", res);
//         dispatch({
//           type: types.NYT_NEWS,
//           news: res
//         })
//         .catch(error => console.log('Error in NYTimes API', error));
//       });
//   }
// }
//   .then(data => {
//    console.log("NEWS DATA", data);
//    })
//   .catch(error => {
//     console.log(error);
//   })
 
//   console.log("NEWS", newsdata);

//   return {
//     type: types.NYT_NEWS,
//     payload: newsdata	
//   };
// }

