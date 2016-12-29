import { combineReducers } from 'redux';
import 	SearchReducer from './reducer_search';
import  NewsSearch from './news_search';

const rootReducer = combineReducers({
  search: SearchReducer,
  news: NewsSearch
});

export default rootReducer;