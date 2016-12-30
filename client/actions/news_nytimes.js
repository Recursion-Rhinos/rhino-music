// import axios from 'axios';
// import * as types from '../constants/ActionType';
// // const NEWS_URL = "http://localhost:3005/news";


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

