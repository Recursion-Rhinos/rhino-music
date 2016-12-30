import { combineReducers } from 'redux';
import 	SearchReducer from './reducer_search';
// import  NewsSearch from './news_search';

const rootReducer = combineReducers({
  tracks: SearchReducer
  // news: NewsSearch
});

console.log("tracks", SearchReducer)
export default rootReducer;